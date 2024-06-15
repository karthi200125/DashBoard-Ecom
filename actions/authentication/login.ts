'use server';

import * as z from 'zod';
import { LoginSchema } from '../../schemas';
import { signIn } from '../../auth';
import { DEFAULT_REDIRECT } from '../../routes';
import { AuthError } from 'next-auth';
import { getUserByEmail } from '../users';
import { generateVerificationToken } from './tokens';
import { sendVerificationEmail } from '@/lib/mail';


export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    
    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }

    const { email, password } = validatedFields.data;

    const existingUser: any = await getUserByEmail(email);

    if (!existingUser) {
        return { error: "Email does not exist" };
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email);

        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        )
        
        return { success: "Confirmation email sent" };
    }

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_REDIRECT
        });
        
        return { success: true, message: 'Login successful' };

    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" };
                default:
                    return { error: "Something went wrong" };
            }
        }

        throw error;
    }
};
