'use client'

import React from 'react';
import { useFormContext, RegisterOptions, FieldError } from 'react-hook-form';

interface InputProps {
    name: string,
    label?: string,
    rules?: RegisterOptions,
    inputCls?: string,
    type?: string
}

const CustomInput = ({ name, label, rules, type, inputCls }: InputProps) => {
    const { register, formState: { errors } } = useFormContext();

    const error = errors[name] as FieldError | undefined;
    const errorMessage = error?.message as string | undefined;

    return (
        <div className='grid w-full max-w-sm items-center gap-1.5 bg-red-400'>
            {label &&
                <label htmlFor={name} className='font-bold'>{label}</label>
            }
            <input id={name} type={type ? type : "text"} {...register(name, rules)} className='p-3 border bg-green-400' />
            {errorMessage && <p className='text-red-500 text-sm'>{errorMessage}</p>}
        </div>
    );
};

export default CustomInput;
