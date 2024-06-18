'use server';

import useReviewModal from "@/app/hooks/useReviewModel";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const CreateReview = async (values: any) => {
    try {
        await db.review.create({
            data: values
        });
        revalidatePath(`/singpleproduct/${values?.productId}`)
        return { success: "Review uploaded successfully" };
    } catch (error) {
        console.error("Error creating review:", error);
        return { error: "Failed to upload review" };
    }
};

export const GetReviewByProduct = async (id: string) => {    
    try {
        const getreview = await db.review.findMany({
            where: {
                productId: id
            }
        })
        return { success: "get revies on this product success", data: getreview }
    } catch (error) {
        return { success: "get revies on this product failed" }
    }
}
