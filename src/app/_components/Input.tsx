'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { useFormContext, RegisterOptions, FieldError } from 'react-hook-form';

interface InputProps {
    name: string;
    label?: string;
    rules?: RegisterOptions;
    inputCls?: string;
    type?: string;
    textarea?: boolean;
    isLoading?: boolean;
    value?: any;
}

const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

const CustomInput = ({ name, label, rules, type, inputCls, textarea, isLoading, value }: InputProps) => {
    const { register, formState: { errors }, setValue } = useFormContext();
    const [inputValue, setInputValue] = useState<string>(value || '');

    const error = errors[name] as FieldError | undefined;
    const errorMessage = error?.message as string | undefined;

    const debouncedSetValue = useCallback(
        debounce((value: string) => {
            setValue(name, value);
        }, 500),
        [name, setValue]
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setInputValue(value);
        debouncedSetValue(value);
    };

    useEffect(() => {
        if (value) {
            setInputValue(value);
        }
    }, [value]);

    return (
        <div className={`flex flex-col gap-1.5 ${inputCls}`}>
            {label && <label htmlFor={name} className='font-bold'>{label}</label>}
            {textarea ? (
                <textarea
                    id={name}
                    value={inputValue}
                    onChange={handleChange}
                    className={`h-[100px] border rounded-[10px]`}
                    disabled={isLoading}
                ></textarea>
            ) : (
                <input
                    id={name}
                    type={type ? type : "text"}
                    value={inputValue}
                    onChange={handleChange}
                    className={`p-3 border rounded-[10px]`}
                    disabled={isLoading}
                />
            )}
            {errorMessage && <p className='text-red-500 text-sm font-semibold'>{errorMessage}</p>}
        </div>
    );
};

export default CustomInput;
