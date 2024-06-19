'use client'

import React, { useState, useEffect } from "react";
// import Slider from "@mui/material/Slider";
import Colors from "@/app/_components/Colors";
import Sizes from "@/app/_components/Sizes";
import { mainCategories } from "@/app/_components/dummydata";

interface FilterProps {
    onColorSelect: (color: string) => void;
    onSizeSelect: (size: string) => void;
    onPriceRange: (range: number[]) => void;
    onCategory: (category: string) => void;
}

const Filter = ({ onColorSelect, onSizeSelect, onPriceRange, onCategory }: FilterProps) => {
    const [cat, setCat] = useState<string | null>(null);
    const [range, setRange] = useState<number[]>([0, 5000]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const handleChanges = (_: Event, newValue: number | number[]) => {
        const newRange = newValue as number[];
        setRange(newRange);
        onPriceRange(newRange);
    };

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMin = parseInt(event.target.value);
        const newRange = [newMin, range[1]];
        setRange(newRange);
        onPriceRange(newRange);
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMax = parseInt(event.target.value);
        const newRange = [range[0], newMax];
        setRange(newRange);
        onPriceRange(newRange);
    };

    useEffect(() => {
        const initialValues: any = JSON.parse(localStorage.getItem('filterValues') || '{}');
        if (initialValues.category) {
            setCat(initialValues.category);
            onCategory(initialValues.category);
        }
        if (initialValues.range) {
            setRange(initialValues.range);
            onPriceRange(initialValues.range);
        }
        if (initialValues.colors) {
            setSelectedColors(initialValues.colors);
        }
        if (initialValues.sizes) {
            setSelectedSizes(initialValues.sizes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('filterValues', JSON.stringify({
            category: cat,
            range: range,
            colors: selectedColors,
            sizes: selectedSizes,
        }));
    }, [cat, range, selectedColors, selectedSizes]);

    const handleCategoryClick = (category: string) => {
        if (cat === category) {
            setCat(null);
            onCategory('');
        } else {
            setCat(category);
            onCategory(category);
        }
    };

    const HandleResetAll = () => {
        localStorage.removeItem('filterValues')
    }

    return (
        <div className='w-full max-h-max flex flex-col gap-3 overflow-y-auto'>

            <div className='flex flex-col'>
                <div className="flex flex-row items-center justify-between">
                    <h2 className='w-full text-start border-b-[1px] py-2'>Categories</h2>
                    <h3 onClick={HandleResetAll}>Reset All</h3>
                </div>
                <div className='grid grid-cols-2 gap-2 py-2 '>
                    {mainCategories?.map((c, i) => (
                        <div
                            key={i}
                            className={`py-3 border rounded-[10px] w-full text-center cursor-pointer capitalize ${cat === c ? "bg-black text-white" : "bg-white"}`}
                            onClick={() => handleCategoryClick(c)}
                        >
                            {c}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className='w-full text-start border-b-[1px] py-2 text-xl font-bold'> Price Range </h1>
                <div className="flex flex-row items-center gap-5 mt-2">
                    <div className="flex flex-row items-center gap-2">
                        <h2>Min</h2>
                        <input type="number" value={range[0]} onChange={handleMinChange} className="p-2 w-[70px]" />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <h2>Max</h2>
                        <input type="number" value={range[1]} onChange={handleMaxChange} className="p-2 w-[70px]" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className='w-full text-start border-b-[1px] py-2 text-xl font-bold'> Colors </h1>
                <Colors onColorSelect={(d) => setSelectedColors(d)} />
            </div>

            <div className="flex flex-col gap-2">
                <h1 className='w-full text-start border-b-[1px] py-2 text-xl font-bold'> Sizes </h1>
                <Sizes onSizeSelect={(d) => console.log(d)} />
            </div>

        </div>
    );
};

export default Filter;
