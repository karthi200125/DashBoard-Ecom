'use client';
import * as React from "react";
import { Controller } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface SelectProps {
    name: string,
    control: any,
    defaultValue?: string,
    options: string[],
    selectCls?: string,
    label?: string,
    errors?: any
}

const CustomSelect = ({ name, control, defaultValue = "", options, selectCls, label, errors }: SelectProps) => {
    return (
        <div className={`grid items-center gap-1.5 ${selectCls}`}>
            {label && <label className='font-bold'>{label}</label>}
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <div>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className='w-full rounded-[8px] h-[50px] bg-white'>
                                <SelectValue placeholder={defaultValue} />
                            </SelectTrigger>
                            <SelectContent className="bg-white z-10">
                                <SelectGroup>
                                    {options?.length > 0 && options?.map((opt, i) => (
                                        <SelectItem key={i} value={opt}>{opt}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {errors && errors[name] && (
                            <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
                        )}
                    </div>
                )}
            />
        </div>
    );
};

export default CustomSelect;
