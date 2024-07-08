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
            {label && <label className='font-bold text-[12px]'>{label}</label>}
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <div>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className='w-full rounded-[8px] h-[50px] bg-white text-[12px]'>
                                <SelectValue placeholder={defaultValue} />
                            </SelectTrigger>
                            <SelectContent className="bg-white z-10 text-[10px]">
                                <SelectGroup>
                                    {options?.length > 0 && options?.map((opt, i) => (
                                        <SelectItem className="text-[12px]" key={i} value={opt}>{opt}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>                        
                        {errors && <p className='text-red-500 text-[10px] font-semibold'>{errors.message}</p>}
                    </div>
                )}
            />
        </div>
    );
};

export default CustomSelect;
