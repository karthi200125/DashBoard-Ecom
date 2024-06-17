'use client';
import CustomSelect from '@/app/_components/CustomSelect';
import CustomInput from '@/app/_components/Input';
import { cities, states } from '@/app/_components/dummydata';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useTransition } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import EditProfileImgUpload from './EditProfileImgUpload';
import CustomBtn from '@/app/_components/CustomBtn';
import { UserSchema } from '../../../../schemas';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { toast } from 'sonner';
import { updateUser } from '../../../../actions/users';

const EditProfile = () => {
    const user = useCurrentUser();
    const [isLoading, startTransition] = useTransition();

    const methods = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            email: user?.email || '',
            name: user?.name || '',
            image: user?.image || 'https://example.png',
            address: user?.address || '',
            city: user?.city || '',
            state: user?.state || '',
            phoneNo: user?.phoneNo || '',
            postalCode: user?.postalCode || ''
        }
    });

    const handleSubmit = (values: z.infer<typeof UserSchema>) => {
        const data = {
            ...values,
            id: user?.id
        }
        startTransition(() => {
            updateUser(data)
                .then((data) => {
                    if (data.success) {
                        toast.success(data.success);
                    } else if (data.error) {
                        toast.error(data.error);
                    }
                });
        });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <div className='max-w-full md:w-[1000px] p-5'>
                    <div className='py-2 border-b'>
                        <h1>Edit Profile</h1>
                        <p>Here you can edit public information about yourself</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 justify-between'>
                        <div className='w-full md:w-[300px] flex flex-col gap-3 py-3'>
                            <EditProfileImgUpload />
                            <CustomBtn arrow btnCls='w-full border bg-black text-white' arrowCls='bg-white text-black' isLoading={isLoading}>Update Profile</CustomBtn>
                        </div>
                        <div className='w-full md:w-[650px] flex flex-wrap gap-5 justify-between overflow-y-auto py-3'>
                            <CustomInput name='name' inputCls='flex-1' label='User Name' type='text' />
                            <CustomInput name='email' inputCls='flex-1' label='Email' type='email' />
                            <CustomInput name='phoneNo' inputCls='flex-1' label='Mobile Number' type='number' />
                            <CustomInput name='address' inputCls='flex-1' label='Permanent Address' type='text' />
                            <CustomInput name='postalCode' inputCls='flex-1' label='Postal Code' type='number' />
                            <div className='flex flex-col md:flex-row items-center gap-5 w-full'>
                                <CustomSelect
                                    name="city"
                                    control={methods.control}
                                    defaultValue={methods.getValues("city")}
                                    options={cities}
                                    label="Select City"
                                    selectCls="w-full"
                                    errors={methods.formState.errors}
                                />
                                <CustomSelect
                                    name="state"
                                    control={methods.control}
                                    defaultValue={methods.getValues("state")}
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
