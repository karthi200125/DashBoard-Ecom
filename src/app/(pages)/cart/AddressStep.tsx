'use client';

import CustomBtn from '@/app/_components/CustomBtn';
import CustomSelect from '@/app/_components/CustomSelect';
import CustomInput from '@/app/_components/Input';
import { cities, states } from '@/app/_components/dummydata';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
    username: z.string().min(3, "Enter your username"),
    addressLine: z.string().min(3, "Enter your address (door no, street name, city/village)"),
    postalCode: z.string().min(6, "Enter your postal code").max(6),
    city: z.string().min(3, "Select your city"),
    state: z.string().min(3, "Select your state"),
    phoneNumber: z.string().min(10, "Enter your phone number").max(10),
    landmark: z.string().min(3, "Enter your near landmark"),
});

const AddressStep = () => {
    const methods = useForm({
        resolver: zodResolver(schema)
    });

    const handleSubmit = (formData: any) => {
        console.log(formData);
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <div className='w-full min-h-[500px] py-3 lg:h-[500px] flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl md:text-5xl font-bold'>Address Details</h1>
                        <h2 className='text-sm md:text-xl text-neutral-400'>Fill in your shipping address details</h2>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3 lg:gap-10'>
                        <div className='flex-1 flex flex-col gap-3'>
                            <CustomInput label='Full Name' name='username' />
                            <CustomInput label='Address Line 1' name='addressLine' />
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
                        <div className='flex-1 flex flex-col gap-3'>
                            <CustomInput label='Phone Number' name='phoneNumber' type='number' />
                            <CustomInput label='Postal Code' name='postalCode' type='number' />
                            <CustomInput label='LandMark' name='landmark' type='text' />
                            <div className='flex flex-row items-center justify-between mt-7 gap-5'>
                                <CustomBtn arrow btnCls='border w-[200px] ' isLoading={false}>Update Address</CustomBtn>
                                <CustomBtn btnCls='bg-black w-[200px] text-white' >Next</CustomBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
}

export default AddressStep;
