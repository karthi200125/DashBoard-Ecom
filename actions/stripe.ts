'use server';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-04-10",
    typescript: true
});

export const CheckOutSession = async (values: any) => {
    const { user, products } = values;

    const shippingInfo = `${user?.address}, ${user?.city}, ${user?.state}, India`;

    const lineItems = products?.map((pro: any) => ({
        price_data: {
            currency: 'inr',
            product_data: {
                name: pro?.proName,
                images: [pro?.proImage[0]],
                metadata: { productId: pro?.id },
            },
            unit_amount: parseFloat(pro?.proPrice) * 100,
        },
        quantity: pro?.proQuantity,
    }));

    const productIds = products.map((pro: any) => pro?.id).join(',');
    const quantities = products.map((pro: any) => pro?.proQuantity).join(',');

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            success_url: 'http://localhost:3000/success?order_success=true',
            cancel_url: 'http://localhost:3000',
            customer_email: user?.email,
            client_reference_id: user?.id,
            mode: 'payment',
            metadata: { 
                shippingInfo,
                productIds,
                quantities
            },
            shipping_options: [
                {
                    shipping_rate: process.env.STRIPE_SHIPPING_RATE_KEY!,
                },
            ],
            line_items: lineItems,
        });

        return { sessionUrl: session.url };

    } catch (error) {
        console.error('Error creating Stripe Checkout session:', error);
        throw error;
    }
};
