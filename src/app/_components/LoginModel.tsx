'use client';

import Image from '@/components/ui/CustomImage';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { memo, useCallback, useEffect, useMemo, useState, useTransition } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { login } from '../../../actions/authentication/login';
import { LoginSchema } from '../../../schemas';
import useLoginModal from '../hooks/useLoginModel';
import useRegisterModal from '../hooks/useRegisterModel';
import CustomBtn from './CustomBtn';
import GoogleAuth from './GoogleAuth';
import CustomInput from './Input';
import Logo from './Logo';
import Modal from './Modal/Modal';
import { useRouter } from 'next/navigation'; 

const LoginBody = () => {
    const [isLoading, startTransition] = useTransition();
    const registerModel = useRegisterModal();
    const loginModel = useLoginModal();
    const router = useRouter();
    const [suc, setSuc] = useState(false);

    useEffect(() => {
        if (suc) {
            window.location.reload();
            router.refresh();
        }
    }, [suc, router]);

    const methods = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: useMemo(() => ({
            email: '',
            password: ''
        }), [])
    });

    const handleSubmit = useCallback((formData: any) => {
        startTransition(() => {
            login(formData)
                .then((data) => {
                    if (data.success) {
                        setSuc(true);
                        toast.success(data.success);
                        loginModel.onClose();
                    }
                    if (data.error) {
                        toast.error(data.error);
                    }
                })
                .catch((error) => {
                    console.error('Login error:', error);
                    toast.error('An error occurred during login.');
                });
        });
    }, [loginModel, startTransition]);

    const handleRegisterClick = useCallback(() => {
        loginModel.onClose();
        registerModel.onOpen();
    }, [loginModel, registerModel]);

    return (
        <div className='w-full h-full md:max-h-max flex flex-row gap-5 overflow-hidden'>
            {/* Left side content */}
            <div className='hidden lg:flex lg:flex-1 rounded-[20px] overflow-hidden relative h-[600px]'>
                <Image src="https://res.cloudinary.com/duextvtta/image/upload/v1720446513/login-img_toasvj.webp" imgclass='bg-neutral-200 w-full h-full' alt='' />
                <div className='absolute bottom-0 left-0 w-full max-h-max p-2 flex flex-col gap-2'>
                    <CustomBtn arrow btnCls='glass bg-black text-white w-[300px]' arrowCls='text-black'>
                        Exclusive content
                    </CustomBtn>
                    <p className='line-clamp-3 leading-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati, autem quam,
                        perspiciatis error in nulla repellat quod accusantium quia pariatur iusto id adipisci
                        asperiores voluptatibus a nobis ad? Inventore!
                    </p>
                </div>
            </div>

            {/* Right side content */}
            <div className='flex-1 h-screen md:h-full flex flex-col gap-3 py-3 justify-center'>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleSubmit)}>
                        <div className='w-[80%] mx-auto h-full flex flex-col gap-3 items-center justify-center'>
                            <Logo />
                            <p>Enter your login credentials</p>

                            {/* Inputs */}
                            <CustomInput name='email' inputCls='w-full' label='Email' type='email' isLoading={isLoading} />
                            <CustomInput name='password' inputCls='w-full' label='Password' type='password' isLoading={isLoading} />

                            {/* Forget password */}
                            <div className='w-full flex justify-end'>
                                <Link href='/reset' className='text-[10px] font-bold hover:underline cursor-pointer'>
                                    Forget Password
                                </Link>
                            </div>

                            {/* Submit button */}
                            <CustomBtn btnCls='w-full' border isLoading={isLoading}>
                                Login
                            </CustomBtn>

                            {/* Or design */}
                            <div className='flex flex-row items-center justify-between mt-2 w-full'>
                                <span className='h-[1px] bg-neutral-200 w-[80px]'></span>
                                <p>Or continue with</p>
                                <span className='h-[1px] bg-neutral-200 w-[80px]'></span>
                            </div>

                            {/* Other logins */}
                            <GoogleAuth />
                            <div className='text-sm flex items-center flex-row gap-2'>
                                <p>Dont have an Account?</p>
                                <p
                                    className='font-bold text-black cursor-pointer hover:underline'
                                    onClick={handleRegisterClick}
                                >
                                    Sign up for free
                                </p>
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

const LoginModel = () => {
    const loginModel = useLoginModal();

    const modalBody = useMemo(() => <LoginBody />, []);

    return (
        <Modal
            isOpen={loginModel.isOpen}
            toggleOpen={loginModel.onClose}
            modalBody={<LoginBody />}
            modalCls='w-full md:w-[500px] lg:w-[900px]'
        />
    );
};

export default memo(LoginModel);
