'use client'
import Image from '@/components/ui/CustomImage';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import CustomBtn from './CustomBtn';
import CustomInput from './Input';
import Logo from './Logo';
import dynamic from 'next/dynamic';
import { useTransition } from 'react';
import { login } from '../../../actions/authentication/login';
import { LoginSchema } from '../../../schemas';
import GoogleAuth from './GoogleAuth';
import { toast } from 'sonner';
import Link from 'next/link';
const Modal = dynamic(() => import('./Modal/Modal'));

interface LoginModalProps {
    isOpen: boolean;
    isClose: () => void;
}


const LoginBody = () => {
    const [isLoading, startTransition] = useTransition()
    const methods = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const handleSubmit = (formData: any) => {
        startTransition(() => {
            login(formData)
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
        <div className='w-full max-h-max flex flex-row gap-5 overflow-hidden'>
            <div className='hidden lg:flex lg:flex-1 rounded-[20px] overflow-hidden relative'>
                <Image src={""} imgclass='bg-neutral-200 w-full h-full' alt='' />
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
                                <h2>Hi Karthi 👋 </h2>
                                <p>Eneter you login credentials</p>
                            </div>

                            {/* inputs */}
                            <CustomInput name='email' inputCls='w-full' label='Email' type='email' isLoading={isLoading} />
                            <CustomInput name='password' inputCls='w-full' label='password' type='password' isLoading={isLoading} />

                            {/* forgrt password */}
                            <div className='w-full flex justify-end'>
                                <Link href="/reset" className='text-sm font-bold hover:underline cursor-pointer'>Forget Password</Link>
                            </div>

                            {/* submit button */}
                            <CustomBtn btnCls='w-full' border isLoading={isLoading}>Login</CustomBtn>

                            {/* or design */}
                            <div className='flex flex-row items-center justify-between mt-2'>
                                <span className='h-[1px] bg-neutral-200 w-[80px]'></span>
                                <p>Or continue with</p>
                                <span className='h-[1px] bg-neutral-200 w-[80px]'></span>
                            </div>

                            {/* other logins */}
                            <GoogleAuth />
                            <div className='text-sm flex items-center flex-row justify-center gap-2'>
                                <p >Dont have an Account?</p>
                                <p className='font-bold cursor-pointer hover:underline'>Sign up for free</p>
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
            modalCls="w-full md:w-[500px] lg:w-[900px]"
        />
    );
}

export default LoginModel;
