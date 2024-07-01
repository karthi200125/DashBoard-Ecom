'use server'

import { db } from "@/lib/db";

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
