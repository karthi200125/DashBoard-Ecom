'use server'

import * as z from "zod"
import { RegisterSchema } from "../../schemas"


export const register = async (values: z.infer<typeof RegisterSchema>) => {
    console.log(values)
    const validateFields = RegisterSchema.safeParse(values)

    if (!validateFields) {
        return { error: "invalid Fields" }
    }

    return { success: "email sent" }
}