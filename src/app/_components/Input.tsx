'use client';

import React from 'react';
import { useFormContext, RegisterOptions, FieldError } from 'react-hook-form';

interface InputProps {
    name: string;
    label?: string;
    rules?: RegisterOptions;
    inputCls?: string;
    type?: string;
    textarea?: boolean;
    isLoading?: boolean;
}

const CustomInput: React.FC<InputProps> = ({ name, label, rules, type, inputCls, textarea, isLoading }) => {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name] as FieldError | undefined;

    return (
        <div className={`flex flex-col gap-1.5 ${inputCls}`}>
            {label && <label htmlFor={name} className='font-bold'>{label}</label>}
            {textarea ? (
                <textarea
                    id={name}
                    {...register(name, rules)}
                    className={`h-[100px] border rounded-[10px] p-5`}
                    disabled={isLoading}
                ></textarea>
            ) : (
                <input
                    id={name}
                    type={type ? type : "text"}
                    {...register(name, rules)}
                    className={`p-3 border rounded-[10px]`}
                    disabled={isLoading}
                />
            )}
            {error && <p className='text-red-500 text-sm font-semibold'>{error.message}</p>}
        </div>
    );
};

export default CustomInput;
