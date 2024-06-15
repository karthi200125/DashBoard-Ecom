'use server'

import { PrismaClient, Prisma } from '@prisma/client'
import { Logger } from './logger'
import { revalidatePath } from 'next/cache'
import { AdminVerify } from './AdminVerify'
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

    const user = await db.user.findUnique({
        where: {
            id
        }
    });
    return user;
};


export const getAllUsers = async () => {
    try {
        const allUsers = await db.user.findMany()
        return allUsers
    } catch (error) {
        Logger.error(`Fetch all users failed, Error: ${error}`)
        return { error: "Fetch all users failed" }
    }
}


// get sigle user data
export const getSingleUser = async (id: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        })
        if (!user) {
            return { error: "User not found" }
        }
        return user
    } catch (error) {
        Logger.error(`Fetch single user failed for ID: ${id}, Error: ${error}`)
        return { error: "Fetch single user failed" }
    }
}

// delete user 
export const deleteUser = async (id: string, from: string) => {
    try {
        if (from === "dashboard") {
            const isAdminUser = await AdminVerify(id)
            if (!isAdminUser) {
                Logger.error(`${id} is not an admin, only admin can delete user from the dashboard`)
                return { error: "Only admin can delete user from the dashboard" }
            }
        }

        const deletedUser = await prisma.user.delete({
            where: {
                id: id,
            },
        })
        revalidatePath('/dashboard/users')
        return deletedUser
    } catch (error) {
        Logger.error(`Delete user failed for ID: ${id}, Error: ${error}`)
        return { error: "Delete user failed" }
    }

}

// update user
export const updateUser = async (from: string, values: z.infer<typeof UserSchema>) => {
    const validatedFields = UserSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }

    const { id, email, name, address, phoneNo, city, state, postalCode, image } = validatedFields.data;
    try {
        if (from === "dashboard") {
            const isAdminUser = await AdminVerify(id);
            if (!isAdminUser) {
                Logger.error(`${id} is not an admin, only admin can update user from the dashboard`);
                return { error: "Only admin can update user from the dashboard" };
            }
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: { email, name, address, phoneNo, city, state, postalCode, image },
        });

        revalidatePath(from === "dashboard" ? '/dashboard/users' : `/profile/${id}`);
        return { success: "User updated successfully", data: updatedUser };
    } catch (error) {
        Logger.error(`Update user failed for ID: ${id}, Error: ${error}`);
        return { error: "Update user failed" };
    }
};

// 
