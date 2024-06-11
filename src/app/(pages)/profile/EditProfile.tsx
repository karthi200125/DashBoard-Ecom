'use client';
import CustomSelect from '@/app/_components/CustomSelect';
import CustomInput from '@/app/_components/Input';
import { cities, states } from '@/app/_components/dummydata';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import EditProfileImgUpload from './EditProfileImgUpload';
import CustomBtn from '@/app/_components/CustomBtn';

const schema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters").max(12, "Password cannot exceed 12 characters"),
    phoneno: z.string().regex(/^\d+$/, "Enter a valid phone number"),
    address: z.string().min(5, "Enter your address"),
    postelcode: z.string().regex(/^\d+$/, "Enter a valid postal code"),
    city: z.string().min(1, "Select a city"),
    state: z.string().min(1, "Select a state"),
});

const EditProfile = () => {
    const methods = useForm({
        resolver: zodResolver(schema)
    });

    const handleSubmit = (formData:any) => {
        console.log(formData);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <div className='max-w-full md:w-[1000px] p-5'>
                    <div className='py-2 border-b'>
                        <h1 className='text-5xl font-bold'>Edit Profile</h1>
                        <h2 className='text-md text-neutral-400'>Here you can edit public information about yourself</h2>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 justify-between'>
                        <div className='w-full md:w-[300px] flex flex-col gap-3 py-3'>
                            <EditProfileImgUpload />
                            <CustomBtn arrow btnCls='w-full border bg-black text-white' arrowCls='bg-white text-black' isLoading={true}>Update Profile</CustomBtn>
                        </div>
                        <div className='w-full md:w-[650px] flex flex-wrap gap-5 justify-between overflow-y-auto py-3'>
                            <CustomInput name='username' inputCls='flex-1' label='User Name' type='text' />
                            <CustomInput name='email' inputCls='flex-1' label='Email' type='email' />
                            <CustomInput name='password' inputCls='flex-1' label='Password' type='password' />
                            <CustomInput name='phoneno' inputCls='flex-1' label='Mobile Number' type='text' />
                            <CustomInput name='address' inputCls='flex-1' label='Permanent Address' type='text' />
                            <CustomInput name='postelcode' inputCls='flex-1' label='Postal Code' type='text' />
                            <div className='flex flex-col md:flex-row items-center gap-5 w-full'>
                                <CustomSelect
                                    name="city"
                                    control={methods.control}
                                    defaultValue="Select City Name"
                                    options={cities}
                                    label="Select City"
                                    selectCls="w-full"
                                    errors={methods.formState.errors}
                                />
                                <CustomSelect
                                    name="state"
                                    control={methods.control}
                                    defaultValue="Select State Name"
                                    options={states}
                                    label="Select State"
                                    selectCls="w-full"
                                    errors={methods.formState.errors}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default EditProfile;
