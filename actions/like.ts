'use server';

import { db } from '@/lib/db';
import { getUserById } from './users';
import { getSingleProduct } from './product';

export const likeAction = async (productId: string, userId: string) => {
    const user = await getUserById(userId);
    const product = await getSingleProduct(productId);
    if (!user) {
        return { error: "You are not authorized" };
    }

    try {
        const isLiked = user.favorite.includes(productId);
        const isProHasLikesUserId = product?.likes?.includes(userId)
        
        if (!isLiked && !isProHasLikesUserId) {            
            const updatedFavorites = [...user.favorite, productId];

            await db.user.update({
                where: { id: userId },
                data: { favorite: updatedFavorites }
            });
            
            const updatedLikes = [...product?.likes, userId];

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
            
            const updatedLikes = product?.likes?.filter(like => like !== userId);

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
