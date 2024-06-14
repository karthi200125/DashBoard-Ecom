"use server"

import { db } from "@/lib/db"
import { getUserByEmail } from "../users"
import { GetVerificationTokenByToken } from "./verificationToken"

export const newVeriication = async (token: string) => {
    const existingToken = await GetVerificationTokenByToken(token)

    if (!existingToken) {
        return { error: "Token does not exist" }
    }

    const hasExpired = new Date(existingToken.expires) < new Date();
    if (!hasExpired) {
        return { error: "Toke has Expired" }
    }

    const existingUser = await getUserByEmail(existingToken.email)

    if (!existingUser) {
        return { error: "Email does not exist" }
    }

    await db.user.update({
        where: { id: existingUser.id },
        data: {
            emailVerified: new Date(),
            email: existingToken.email
        }
    })

    await db.verificationToken.delete({
        where: { id: existingToken.id }
    })

    return { success: "Email verfied" }
}