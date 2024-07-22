'use server'

import { PrismaClient, Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { db } from '@/lib/db'
import { UserSchema } from '../schemas'
import { z } from 'zod'

const prisma = new PrismaClient()

// Function to get user by email
export const getUserByEmail = async (email: string) => {
    const user = await db.user.findUnique({
        where: {
            email
        }
    });
    return user;
};

// Function to get user by email
export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({
            where: {
                id: id,
            },
        })
        return user
    } catch (error) {
        return { error: "Fetch single user failed" }
    }
};


export const getAllUsers = async () => {
    try {
        const allUsers = await db.user.findMany()
        return allUsers
    } catch (error) {
        return { error: "Fetch all users failed" }
    }
}


// get sigle user data
// export const getSingleUser = async (id: string) => {
//     try {
//         const user = await db.user.findUnique({
//             where: {
//                 id: id,
//             },
//         })
//         return user
//     } catch (error) {
//         return { error: "Fetch single user failed" }
//     }
// }

// delete user 
export const deleteUser = async (id: string) => {
    try {
        await db.user.delete({
            where: {
                id: id
            }
        })
        revalidatePath('/dashboard/users')
        return { success: "user has deleted" }
    } catch (error) {
        return { error: "user delete failed" }
    }
}

// update user
export const updateUser = async (values: z.infer<typeof UserSchema>) => {
    const { id, ...updateData } = values;

    try {
        const updatedUser = await db.user.update({
            where: { id },
            data: updateData,
        });
        revalidatePath(`/profile/${id}`)
        return { success: "User updated successfully", data: updatedUser };
    } catch (error) {        
        return { error: "Update user failed" };
    }
};

