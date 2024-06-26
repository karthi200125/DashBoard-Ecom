import { v4 as uuidv4 } from 'uuid';
import { GetVerificationTokenByEmail } from './verificationToken';
import { db } from '@/lib/db';
import { getPasswordResetTokenByEmail } from './password-reset-token';

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 + 1000)

    const existingToken = await GetVerificationTokenByEmail(email)

    if (existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }
    const verificationToken = await db.verificationToken.create({
        data: {
            email,
            token,
            expires
        }
    })
    return verificationToken
}


export const generatePasswordResetToken = async (email: string) => {
    const token = uuidv4();

    const expires = new Date(new Date().getTime() + 3600 * 1000)

    const ExistingToken = await getPasswordResetTokenByEmail(email)
    if (ExistingToken) {
        await db.passwordReset.delete({
            where: { id: ExistingToken.id }
        })
    }

    const passwordResetToken = await db.passwordReset.create({
        data: {
            email,
            token,
            expires
        }
    })

    return passwordResetToken
}