'use server';

import { z } from "zod";
import { ResetSchema } from "../../schemas";
import { getUserByEmail } from "../users";
import { generatePasswordResetToken } from "./tokens";
import { sendPasswordresetEmail } from "@/lib/mail";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validateFields = ResetSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid Email" };
    }
    const { email } = validateFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return { error: "Email not found" };
    }

    // TODO: generate token
    const passwordResetToken = await generatePasswordResetToken(email)
    await sendPasswordresetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    )

    return { success: "Reset email sent" };
};
