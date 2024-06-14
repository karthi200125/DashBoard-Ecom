'use client'

import CustomBtn from "@/app/_components/CustomBtn";
import CustomInput from "@/app/_components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useTransition } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { reset } from "../../../../actions/authentication/reset";
import { ResetSchema } from "../../../../schemas";
import { toast } from "sonner";


const PasswordReset = () => {
    const [isLoading, startTransition] = useTransition()

    const methods = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        }
    });

    const handleSubmit = (formData: any) => {
        startTransition(() => {
            reset(formData)
                .then((data) => {
                    if (data.success) {
                        toast.success(data.success)
                    }
                    if (data.error) {
                        toast.error(data.error)
                    }
                })
        })
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleSubmit)}>
                    <div className='w-[500px] max-h-max flex flex-col gap-5 p-10 border rounded-[20px] items-center justify-center'>
                        <div className="flex w-full text-center flex-col gap-3">
                            <h2>Forget Password 👋 </h2>
                            <p>Eneter your Email </p>
                        </div>
                        <CustomInput name='email' inputCls='w-full' label='Email' type='email' isLoading={isLoading} />
                        <CustomBtn btnCls='w-full bg-black text-white' isLoading={isLoading}>Send reset email</CustomBtn>
                        <Link href='/' className="text-sm font-bold">Back To home</Link>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default PasswordReset