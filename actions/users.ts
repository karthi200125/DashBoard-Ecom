'use server'

import { PrismaClient, Prisma } from '@prisma/client'
import { Logger } from './logger'
import { revalidatePath } from 'next/cache'
import { AdminVerify } from './AdminVerify'
import { db } from '@/lib/db'

const prisma = new PrismaClient()


export const getAllUsers = async () => {
    try {
        const allUsers = await db.user.findMany()
        return allUsers
    } catch (error) {
        Logger.error(`Fetch all users failed, Error: ${error}`)
        return { error: "Fetch all users failed" }
    }
}

export const createUser = async (values: any) => {
    try {
        const newUser = await db.user.create(values);
        return newUser;
    } catch (error) {
        Logger.error(`Creating user failed, Error: ${error}`);
        return { error: "Creating user failed" };
    }
};



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
export const updateUser = async (id: string, from: string, data: Prisma.UserUpdateInput) => {
    try {
        if (from === "dashboard") {
            const isAdminUser = await AdminVerify(id)
            if (!isAdminUser) {
                Logger.error(`${id} is not an admin, only admin can update user from the dashboard`)
                return { error: "Only admin can update user from the dashboard" }
            }
        }

        // Proceed with user update
        const updatedUser = await prisma.user.update({
            where: {
                id: id,
            },
            data: data,
        })
        revalidatePath(from === "dashboard" ? '/dashboard/users' : `/profile/${id}`)
        return updatedUser
    } catch (error) {
        Logger.error(`Update user failed for ID: ${id}, Error: ${error}`)
        return { error: "Update user failed" }
    }

}

// 
