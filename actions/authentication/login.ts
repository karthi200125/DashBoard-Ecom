'use server';

import * as z from 'zod';
import { LoginSchema } from '../../schemas';
import { signIn } from '../../auth';
import { DEFAULT_REDIRECT } from '../../routes';
import { AuthError } from 'next-auth';

export const login = async (values: z.infer<typeof LoginSchema>) => {    
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }

    const { email, password } = validatedFields.data;

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_REDIRECT
        });

        // Optionally, return success message or redirect indication
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
        // Throw other errors for centralized error handling
        throw error;
    }
};
