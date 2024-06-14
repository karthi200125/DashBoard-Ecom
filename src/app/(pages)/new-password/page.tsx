'use client';

import CustomBtn from '@/app/_components/CustomBtn';
import CustomInput from '@/app/_components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { newPassword } from '../../../../actions/authentication/new-password';
import { NewPasswordSchema } from '../../../../schemas';

const NewPassword = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [isLoading, startTransition] = useTransition();

    const methods = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
        },
    });

    const handleSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        startTransition(() => {
            newPassword(values, token)
                .then((data) => {
                    if (data.success) {
                        toast.success(data.success);
                    }
                    if (data.error) {
                        toast.error(data.error);
                    }
                });
        });
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleSubmit)}>
                    <div className="w-[500px] max-h-max flex flex-col gap-5 p-10 border rounded-[20px] items-center justify-center">
                        <h2 className="text-center w-full">Reset Password 👋</h2>
                        <CustomInput
                            name="password"
                            inputCls="w-full"
                            label="Enter New Password"
                            type="password"
                            isLoading={isLoading}
                        />
                        <CustomBtn
                            btnCls="w-full bg-black text-white"
                            isLoading={isLoading}
                        >
                            Reset Password
                        </CustomBtn>
                        <Link href="/" className="text-sm font-bold">
                            Back To Home
                        </Link>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default NewPassword;
