'use client'
import { colors } from '@/app/_components/dummydata';
import React, { useEffect, useState } from 'react';

interface SelectColorsProps {
    alreadySelected?: string[];
    onItems?: (value: string[]) => void;
}

const SelectColors = ({ alreadySelected = [], onItems }: SelectColorsProps) => {
    const [selectedColors, setSelectedColors] = useState<string[]>(alreadySelected);

    useEffect(() => {
        setSelectedColors(alreadySelected);
    }, [alreadySelected]);

    const toggleColor = (color: string) => {
        let updatedColors: string[];
        if (selectedColors.includes(color)) {
            updatedColors = selectedColors.filter(item => item !== color);
        } else {
            updatedColors = [...selectedColors, color];
        }
        setSelectedColors(updatedColors);
    };

    useEffect(() => {
        if (onItems) {
            onItems(selectedColors);
        }
    }, [selectedColors, onItems]);

    return (
        <div className="flex flex-col gap-3">
            <h2>Select colors for this product</h2>
            <div className="flex flex-wrap flex-row items-center gap-3">
                {colors?.map((color, i) => (
                    <div
                        className={`w-[30px] h-[30px] rounded-full border cursor-pointer flex items-center justify-center
                                    ${selectedColors.includes(color) ? 'border text-white' : 'bg-white'}`}
                        key={i}
                        style={{ border: selectedColors.includes(color) ? '1px solid black' : '1px solid white' }}
                        onClick={() => toggleColor(color)}
                    >
                        <div className="w-[20px] h-[20px] rounded-full" style={{ background: color }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectColors;
