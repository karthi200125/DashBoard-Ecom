'use server';

import * as z from 'zod';
import { LoginSchema } from '../../schemas';
import { signIn } from '../../auth';
import { DEFAULT_REDIRECT } from '../../routes';
import { AuthError } from 'next-auth';
import { getUserByEmail } from '../users';
import { generateVerificationToken } from './tokens';
import { sendVerificationEmail } from '@/lib/mail';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    try {
        const validatedFields = LoginSchema.safeParse(values);
        
        if (!validatedFields.success) {
            console.log('Validation failed:', validatedFields.error);
            return { error: "Invalid fields" };
        }

        const { email, password } = validatedFields.data;

        const existingUser: any = await getUserByEmail(email);

        if (!existingUser) {
            return { error: "Email does not exist" };
        }

        if (!existingUser.emailVerified) {
            const verificationToken = await generateVerificationToken(existingUser.email);

            await sendVerificationEmail(verificationToken.email, verificationToken.token);
            return { success: "Confirmation email sent" };
        }

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false
        });


        revalidatePath('/');
        return { success: 'Login successful' };
    } catch (error) {

        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" };
                default:
                    return { error: "Invalid credentials" };
            }
        }

        return { error: "An unexpected error occurred" };
    }
};
