'use server';

import { db } from '@/lib/db';

export const getOrder = async (userId: string) => {    
    try {
        const order = await db.order.findFirst({
            where: {
                userId: userId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });        
        return { success: 'Successfully retrieved the most recent order', data: order };
    } catch (error) {
        console.error('Error fetching order:', error);
        return { error: 'Failed to get order' };
    }
};
