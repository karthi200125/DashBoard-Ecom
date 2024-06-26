'use server';

import { db } from '@/lib/db';

export const OrderCreate = async (values: any) => {
    const { userId, productIds, quantities, totalPrice } = values;
    console.log("in orer function", values)
    try {
        const newOrder = await db.order.create({
            data: {
                userId,
                productIds,
                quantities,
                total: totalPrice,
                status: 'pending',
            },
        });

        await db.user.update({
            where: { id: userId },
            data: { Orders: { connect: { id: newOrder.id } } },
        });

        return { success: 'Order created successfully' };
    } catch (error) {
        return { error: 'Failed to create order' };
    }
};
