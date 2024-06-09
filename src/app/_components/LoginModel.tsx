'use client'
import React from 'react';
import Modal from './Modal/Modal';
import Image from '@/components/ui/Image';
import CustomBtn from './CustomBtn';
import loginimg from '../assets/login.png'
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import Logo from './Logo';
import CustomInput from './Input';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface LoginModalProps {
    isOpen: boolean;
    isClose: () => void;
}

const schema = z.object({
    email: z.string().min(3, "Enter your email"),
    password: z.string().min(8, "Enter your password").max(12),
});

const LoginBody = () => {

    const methods = useForm({
        resolver: zodResolver(schema)
    });

    const handleSubmit = (formData: any) => {
        console.log(formData);
    }

    return (
        <div className='w-full max-h-max flex flex-row gap-5 overflow-hidden'>
            <div className='flex-1 rounded-[20px] overflow-hidden relative'>
                <Image src={loginimg.src} imgclass='bg-neutral-200 w-full h-full' />
                <div className='absolute bottom-0 left-0 w-full max-h-max p-2 flex flex-col gap-2'>
                    <CustomBtn arrow btnCls='glass bg-black text-white w-[210px] ' arrowCls='text-black'>Exclusive content</CustomBtn>
                    <p className='text-sm line-clamp-3 leading-0 text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati, autem quam, perspiciatis error in nulla repellat quod accusantium quia pariatur iusto id adipisci asperiores voluptatibus a nobis ad? Inventore!</p>
                </div>
            </div>

            {/* right side content */}
            <div className="flex-1 h-full flex flex-col gap-3 py-3">
                <Logo />

                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleSubmit)}>
                        <div className='w-[80%] mx-auto h-full flex flex-col gap-3'>

                            {/* welcome text */}
                            <div>
                                <h1 className='text-3xl font-bold'>Hi Karthi 👋 </h1>
                                <p className='text-neutral-400 text-sm'>Eneter you login credentials</p>
                            </div>

                            {/* inputs */}
                            <CustomInput name='email' inputCls='w-full' label='Email' type='email' />
                            <CustomInput name='password' inputCls='w-full' label='password' type='password' />

                            {/* forgrt password */}
                            <div className='w-full flex justify-end'>
                                <h2 className='text-sm font-bold underline cursor-pointer'>Forget Password</h2>
                            </div>

                            {/* submit button */}
                            <CustomBtn btnCls='w-full' border >Login</CustomBtn>

                            {/* or design */}
                            <div className='flex flex-row items-center justify-between mt-2'>
                                <span className='h-[1px] bg-neutral-200 w-[80px]'></span>
                                <h2 className='text-sm text-neutral-400'>Or continue with</h2>
                                <span className='h-[1px] bg-neutral-200 w-[80px]'></span>
                            </div>

                            {/* other logins */}
                            <div className='flex flex-row items-center justify-center gap-3'>
                                <div className='w-[60px] h-[60px] border rounded-full flex items-center justify-center cursor-pointer'>
                                    <Image src={google.src} imgclass='w-[20px] h-[20px]' />
                                </div>
                                <div className='w-[60px] h-[60px] border rounded-full flex items-center justify-center cursor-pointer'>
                                    <Image src={apple.src} imgclass='w-[20px] h-[20px]' />
                                </div>
                            </div>
                            <div className='text-sm flex items-center flex-row justify-center gap-2'>
                                <h1 className='text-neutral-400'>Dont have an Account?</h1>
                                <h1 className='font-bold cursor-pointer hover:underline'>Sign up for free</h1>
                            </div>
                        </div>
                    </form>
                </FormProvider>

            </div>
        </div>
    );
}

const LoginModel = ({ isOpen, isClose }: LoginModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            toggleOpen={isClose}
            modalBody={<LoginBody />}
            modalCls="w-[900px]"
        />
    );
}

export default LoginModel;
