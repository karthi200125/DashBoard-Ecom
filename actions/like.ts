'use server';

import { db } from '@/lib/db';
import { getUserById } from './users';
import { getSingleProduct } from './product';

interface User {
    id: string;
    favorite: string[];
}

interface Product {
    id: string;
    proName: string | null;
    proDesc: string | null;
    proPrice: string | null;
    proImage: string[];
    proCategory: string | null;
    proSubCategory: string | null;
    isProAvailable: string | null;
    likes: string[];
    createdAt: Date;
    updatedAt: Date;
}

interface Error {
    error: string;
}

export const likeAction = async (productId: string, userId: string) => {
    const user = await getUserById(userId) as User | Error;
    const product = await getSingleProduct(productId) as Product | Error;

    if ('error' in user) {
        return { error: "You are not authorized" };
    }

    if ('error' in product) {
        return { error: "Product not found" };
    }

    try {
        const isLiked = user.favorite.includes(productId);
        const isProHasLikesUserId = product.likes.includes(userId);

        if (!isLiked && !isProHasLikesUserId) {
            const updatedFavorites = [...user.favorite, productId];

            await db.user.update({
                where: { id: userId },
                data: { favorite: updatedFavorites }
            });

            const updatedLikes = [...product.likes, userId];

            await db.product.update({
                where: { id: productId },
                data: { likes: updatedLikes }
            });

            return { success: "Product has been liked" };
        } else {
            const updatedFavorites = user.favorite.filter(fav => fav !== productId);

            await db.user.update({
                where: { id: userId },
                data: { favorite: updatedFavorites }
            });

            const updatedLikes = product.likes.filter(like => like !== userId);

            await db.product.update({
                where: { id: productId },
                data: { likes: updatedLikes }
            });

            return { success: "Product has been disliked" };
        }

    } catch (error) {
        return { error: "Failed to update favorites" };
    }
};
