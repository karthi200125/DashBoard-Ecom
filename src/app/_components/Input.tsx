'use client'

import React from 'react';
import { useFormContext, RegisterOptions, FieldError } from 'react-hook-form';

interface InputProps {
    name: string,
    label?: string,
    rules?: RegisterOptions,
    inputCls?: string,
    type?: string,
    textarea?: boolean
}

const CustomInput = ({ name, label, rules, type, inputCls, textarea }: InputProps) => {
    const { register, formState: { errors } } = useFormContext();

    const error = errors[name] as FieldError | undefined;
    const errorMessage = error?.message as string | undefined;

    return (
        <div className={`flex flex-col gap-1.5 ${inputCls}`}>
            {label &&
                <label htmlFor={name} className='font-bold'>{label}</label>
            }
            {textarea ?
                <textarea id={name} {...register(name, rules)} className={`h-[100px] border rounded-[10px]`} ></textarea>
                :
                <input id={name} type={type ? type : "text"} {...register(name, rules)} className={`p-3 border rounded-[10px]`} />
            }
            {errorMessage && <p className='text-red-500 text-sm font-semibold'>{errorMessage}</p>}
        </div>
    );
};

export default CustomInput;
