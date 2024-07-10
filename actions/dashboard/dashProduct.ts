'use server'

import { db } from "@/lib/db";
import { decodeBase64 } from "bcryptjs";

// total products with get category counts
export const categoryCount = async () => {
    try {
        const categoryCounts = await db.product.groupBy({
            by: ['proCategory'],
            _count: {
                proCategory: true,
            },
        });

        const allProducts = await db.product.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const formattedCategoryCounts = categoryCounts.reduce((acc, item) => {
            if (item.proCategory !== null) {
                acc[item.proCategory as string] = item._count.proCategory;
            }
            return acc;
        }, {} as { [key: string]: number });


        return {
            success: "get all products success",
            data: allProducts,
            categoryCounts: formattedCategoryCounts
        };
    } catch (error) {
        return { error: "get all products failed" };
    }
}


// most liked products
export const MostLikedProducts = async () => {
    try {
        const products = await db.product.findMany();
        const sortedProducts = products
            .sort((a, b) => b.likes.length - a.likes.length)
            .slice(0, 10);
        return { success: "Success", data: sortedProducts };
    } catch (error) {
        return { error: "Error fetching most liked products:" };
    }
};


// Function to get aggregated products data for main graph
export const getMainGraphProducts = async () => {
    try {
        const products = await db.product.findMany();

        // Initialize monthly data object with all months
        const monthlyData: { [key: string]: number } = {
            'Jan': 0, 'Feb': 0, 'Mar': 0, 'Apr': 0,
            'May': 0, 'Jun': 0, 'Jul': 0, 'Aug': 0,
            'Sep': 0, 'Oct': 0, 'Nov': 0, 'Dec': 0
        };

        // Aggregate products by month
        products.forEach(product => {
            const month = new Date(product.createdAt).toLocaleString('default', { month: 'short' });
            monthlyData[month]++;
        });

        // Convert to array of objects for charting
        const data = Object.keys(monthlyData).map(month => ({
            month,
            products: monthlyData[month],
        }));

        return { success: "Success", data };
    } catch (error) {
        console.error("Error fetching main graph products:", error);
        return { error: "Error fetching main graph products" };
    }
};
