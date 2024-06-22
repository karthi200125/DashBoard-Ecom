'use client';

import CustomBtn from '@/app/_components/CustomBtn';
import CustomSelect from '@/app/_components/CustomSelect';
import CustomInput from '@/app/_components/Input';
import { cities, states } from '@/app/_components/dummydata';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { AddressSchema, UserSchema } from '../../../../schemas';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const AddressStep = () => {
    const user: z.infer<typeof UserSchema> = useCurrentUser();
    const [next, setNext] = useState(false);

    useEffect(() => {
        if (user?.name && user?.address && user?.city && user?.state && user?.phoneNo && user?.postalCode) {
            setNext(true);
        } else {
            setNext(false);
        }
    }, [user]);

    const methods = useForm<z.infer<typeof AddressSchema>>({
        resolver: zodResolver(AddressSchema),
        defaultValues: {
            name: user?.name || '',
            address: user?.address || '',
            city: user?.city || '',
            state: user?.state || '',
            phoneNo: user?.phoneNo || '',
            postalCode: user?.postalCode || ''
        }
    });

    const handleSubmit = (formData: any) => {
        if (!(user?.name && user?.address && user?.city && user?.state && user?.phoneNo && user?.postalCode)) {
            toast.error("Enter all information");
        }
        console.log(formData);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <div className='w-full min-h-[500px] py-3 lg:h-[500px] flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h1>Address Details</h1>
                        <p>Fill in your shipping address details</p>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3 lg:gap-10'>
                        <div className='flex-1 flex flex-col gap-3'>
                            <CustomInput label='Full Name' name='name' />
                            <CustomInput label='Address Line 1' name='address' />
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
                        <div className='flex-1 flex flex-col gap-3'>
                            <CustomInput label='Phone Number' name='phoneNo' type='number' />
                            <CustomInput label='Postal Code' name='postalCode' type='number' />
                            <div className='flex flex-row items-center justify-between mt-7 gap-5'>
                                <CustomBtn arrow btnCls='border w-[200px]' isLoading={false}>Update Address</CustomBtn>
                                <CustomBtn btnCls='bg-black w-[200px] text-white' onClick={() => ""} disabled={!next}>Next</CustomBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default AddressStep;
