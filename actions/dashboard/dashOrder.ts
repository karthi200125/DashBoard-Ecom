'use server'

import { db } from "@/lib/db";

// total order slaes
export const getOrderTotalSales = async () => {
    try {
        const totalSales = await db.order.aggregate({
            _sum: {
                total: true,
            },
        });
        return { success: 'Successfully retrieved the order data', data: totalSales._sum.total };
    } catch (error) {
        return { error: 'Failed to get order data' };
    }
};

// this month totla order sales
export const getOrderTotalSalesForCurrentMonth = async () => {
    try {
        const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

        const totalSales = await db.order.aggregate({
            _sum: {
                total: true,
            },
            where: {
                createdAt: {
                    gte: startDate,
                    lt: endDate,
                },
            },
        });

        return { success: 'Successfully retrieved the order data', data: totalSales._sum.total };
    } catch (error) {
        return { error: 'Failed to get order data' };
    }
};

// top orders products based on total amount
export const getTopOrders = async () => {
    try {
        const topOrders = await db.order.findMany({
            orderBy: {
                total: 'desc',
            },
            take: 10,
        });

        return { success: 'Successfully retrieved the order data', data: topOrders };
    } catch (error) {
        return { error: 'Failed to get order data' };
    }
};
