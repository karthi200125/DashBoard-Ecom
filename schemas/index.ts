import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().min(3, "email is required"),
    password: z.string().min(6, "Password should be mini 6 char").min(3, "Enter your password"),
});

export const RegisterSchema = z.object({
    name: z.string().min(3, "username is required"),
    email: z.string(),
    password: z.string().min(6, "Password should be mini 6 char")
});

export const ResetSchema = z.object({
    email: z.string().min(3, "email is required"),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6, "Password should be mini 6 char"),
});

