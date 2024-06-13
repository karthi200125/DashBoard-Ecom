'use server'

import * as z from "zod";
import { RegisterSchema } from "../../schemas";
import bcrypt from 'bcryptjs';
import { db } from "@/lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);
    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const { username, email, password } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    });

    if (existingUser) {
        return { error: "Email already exists!" };
    }

    await db.user.create({
        data: {
            username,
            email,
            password: hashedPassword
        }
    });

    // TODO: send verification token

    return { success: "Email sent" };
};
