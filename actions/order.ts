'use server';

import { db } from '@/lib/db';

export const getOrder = async (orderId: string): Promise<any> => {
    try {
        const order = await db.order.findUnique({
            where: {
                id: orderId,
            },
        });
        return { success: 'Successfully retrieved the order data', data: order };
    } catch (error) {
        return { error: 'Failed to get order data' };
    }
};

export const getAllOrders = async () => {
    try {
        const orders = await db.order.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return { success: 'Successfully retrieved the order data', data: orders };
    } catch (error) {
        return { error: 'Failed to get order data' };
    }
};


export const getUserOrder = async (userId: string) => {
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

export const getUserOrderProducts = async (userId: string) => {
    try {
        const orders = await db.order.findMany({
            where: {
                userId: userId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return { success: 'Successfully retrieved the user Orders', data: orders };
    } catch (error) {
        console.error('Error fetching order:', error);
        return { error: 'Failed to get order' };
    }
};

