'use server';

import { db } from '@/lib/db';
import { getUserById } from './users';

export const likeAction = async (id: string, userId: string) => {
    const user = await getUserById(userId);    
    try {
        const isLiked = user?.favorite?.includes(id);        

        if (isLiked) {
            await db.user.update({
                where: { id: user.id },
                data: {
                    favorite: {
                        pull: id,
                    },
                },
            });
            return { success: "You have removed this product from favorites" };
        } else {
            await db.user.update({
                where: { id: user.id },
                data: {
                    favorite: {
                        push: id,
                    },
                },
            });
            return { success: "You have added this product to favorites" };
        }
    } catch (error) {
        return { error: "Failed to update favorites" };
    }
};
