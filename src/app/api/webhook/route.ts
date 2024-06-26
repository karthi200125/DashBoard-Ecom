import { db } from '@/lib/db';
import { headers } from 'next/headers';
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-04-10",
    typescript: true
});

export async function POST(req: Request) {
    const body = await req.text();
    const signature = headers().get('Stripe-Signature') as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error) {
        console.error('Error verifying Stripe webhook signature:', error);
        return new Response('Webhook signature verification failed', { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type === "checkout.session.completed") {
        const userId = session.client_reference_id;

        if (!session.metadata || !session.metadata.productIds || !session.metadata.quantities) {
            console.error('Missing metadata in session:', session.metadata);
            return new Response('Missing metadata in session', { status: 400 });
        }

        const productIds = session.metadata.productIds.split(',');
        const quantities = session.metadata.quantities.split(',').map((q: string) => parseInt(q, 10));
        const totalPrice = session.amount_total / 100;

        console.log("in route", userId, productIds, quantities, totalPrice);

        try {
            // Assuming productIds and quantities are corresponding arrays
            const orders = productIds.map((productId, index) => ({
                userId,
                productId,
                quantity: quantities[index],
                total: totalPrice,
                status: 'pending',
            }));

            // Creating orders using Prisma batch create
            const createdOrders = await db.order.createMany({
                data: orders,
            });

            // Connect orders to the user
            await db.user.update({
                where: { id: userId },
                data: { Orders: { connect: createdOrders.map(order => ({ id: order.id })) } },
            });

            return new Response(JSON.stringify({ success: 'Orders created successfully' }), { status: 200 });
        } catch (error) {
            console.error('Error creating orders:', error);
            return new Response(JSON.stringify({ error: 'Failed to create orders' }), { status: 500 });
        }
    }

    return new Response('Unhandled event type', { status: 400 });
}
