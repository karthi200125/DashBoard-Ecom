'use server'
import { Logger } from "./logger"

export const AdminVerify = async (id: string): Promise<boolean> => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                isAdmin: true,
            },
        })
        return user?.isAdmin || false
    } catch (error) {
        Logger.error(`Failed to check admin status for user ID: ${id}, Error: ${error}`)
        return false
    }
}
