'use client'
import Image from '@/components/ui/CustomImage';
import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import { useCallback, useTransition } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { register } from '../../../actions/authentication/register';
import { RegisterSchema } from '../../../schemas';
import useLoginModal from '../hooks/useLoginModel';
import useRegisterModal from '../hooks/useRegisterModel';
import CustomBtn from './CustomBtn';
import GoogleAuth from './GoogleAuth';
import CustomInput from './Input';
import Logo from './Logo';
const Modal = dynamic(() => import('./Modal/Modal'));


const RegsiterBody = () => {
    const [isLoading, startTransition] = useTransition()
    const registermodel = useRegisterModal();
    const loginmodel = useLoginModal();
    const methods = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const handleSubmit = (formData: any) => {
        startTransition(() => {
            register(formData)
                .then((data) => {
                    if (data.success) {
                        registermodel.onClose()
                        toast.success(data.success)
                    }
                    if (data.error) {
                        toast.error(data.error)
                    }
                })
        })
    }

    const handleLoginClick = useCallback(() => {
        loginmodel.onOpen();
        registermodel.onClose();
    }, [loginmodel, registermodel]);

    return (
        <div className='w-full max-h-max flex flex-row gap-5 overflow-hidden'>

            {/* left side content */}
            <div className="flex-1 h-full flex flex-col gap-3 py-3">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleSubmit)}>
                        <div className='w-[80%] mx-auto h-full flex flex-col gap-3 items-center justify-center'>
                            <Logo />
                            <p>Create new Account!</p>

                            {/* inputs */}
                            <CustomInput name='name' inputCls='w-full' label='UserName' type='text' />
                            <CustomInput name='email' inputCls='w-full' label='Email' type='email' />
                            <CustomInput name='password' inputCls='w-full' label='password' type='password' />

                            {/* submit button */}
                            <CustomBtn btnCls='w-full' border isLoading={isLoading}>Crate a account</CustomBtn>
                            
                            {/* Or design */}
                            <div className='flex flex-row items-center justify-between mt-2 w-full'>
                                <span className='h-[1px] bg-neutral-200 w-[80px]'></span>
                                <p>Or ceate with</p>
                                <span className='h-[1px] bg-neutral-200 w-[80px]'></span>
                            </div>

                            {/* Other logins */}
                            <GoogleAuth />

                            <div className='text-sm flex items-center flex-row justify-center gap-2'>
                                <p>Already have an Account?</p>
                                <p className='font-bold text-black cursor-pointer hover:underline' onClick={handleLoginClick}
                                >Login</p>
                            </div>
                        </div>
                    </form>
                </FormProvider>

            </div>

            <div className='hidden lg:flex lg:flex-1 rounded-[20px] overflow-hidden relative'>
                <Image src={""} imgclass='bg-neutral-200 w-full' alt='' />
                <div className='absolute bottom-0 left-0 w-full max-h-max p-2 flex flex-col gap-2'>
                    <CustomBtn arrow btnCls='glass bg-black text-white w-[300px] ' arrowCls='text-black'>Exclusive content</CustomBtn>
                    <p className='line-clamp-3 leading-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati, autem quam, perspiciatis error in nulla repellat quod accusantium quia pariatur iusto id adipisci asperiores voluptatibus a nobis ad? Inventore!</p>
                </div>
            </div>

        </div>
    );
}

const RegisterModel = () => {
    const registermodel = useRegisterModal();
    return (
        <Modal
            isOpen={registermodel.isOpen}
            toggleOpen={registermodel.onClose}
            modalBody={<RegsiterBody />}
            modalCls="w-full md:w-[500px] lg:w-[900px]"
            closeBtn='glass text-white hover:bg-neutral-100 hover:text-black'
        />
    );
}

export default RegisterModel;