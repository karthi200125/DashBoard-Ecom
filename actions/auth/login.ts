'use server'

import * as z from "zod"
import { LoginSchema } from "../../schemas"

export const login = async (values: z.infer<typeof LoginSchema>) => {
    console.log(values)
    const validateFields = LoginSchema.safeParse(values)

    if (!validateFields) {
        return { error: "invalid Fields" }
    }

    return { success: "email sent" }
}