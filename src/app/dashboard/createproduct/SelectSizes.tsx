'use client'
import { sizes } from '@/app/_components/dummydata';
import React, { useEffect, useState } from 'react';

interface SelectSizesProps {
    alreadySelected?: string[];
    onItems?: (value: string[]) => void;
}

const SelectSizes = ({ alreadySelected = [], onItems }: SelectSizesProps) => {
    const [selectedSizes, setSelectedSizes] = useState<string[]>(alreadySelected);

    useEffect(() => {
        setSelectedSizes(alreadySelected);
    }, [alreadySelected]);

    const toggleSize = (size: string) => {
        let updatedSizes: string[];
        if (selectedSizes.includes(size)) {
            updatedSizes = selectedSizes.filter(item => item !== size);
        } else {
            updatedSizes = [...selectedSizes, size];
        }
        setSelectedSizes(updatedSizes);
    };

    useEffect(() => {
        if (onItems) {
            onItems(selectedSizes);
        }
    }, [selectedSizes, onItems]);

    return (
        <div className="flex flex-col gap-3">
            <h2>Select sizes for this product</h2>
            <div className="flex flex-wrap flex-row items-center gap-3">
                {sizes?.map((size, i) => (
                    <div
                        className={`px-4 w-[50px] py-2 rounded-[10px] border cursor-pointer 
                                    ${selectedSizes.includes(size) ? 'bg-black text-white' : 'bg-white'}`}
                        key={i}
                        onClick={() => toggleSize(size)}
                    >
                        {size}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectSizes;
