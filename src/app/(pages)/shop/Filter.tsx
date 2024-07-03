'use client'

import React, { useState, useEffect } from "react";
// import Slider from "@mui/material/Slider";
import Colors from "@/app/_components/Colors";
import Sizes from "@/app/_components/Sizes";
import { mainCategories } from "@/app/_components/dummydata";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

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

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const category = searchParams.get('cat') || '';

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (category !== "" && category !== undefined) {
            setCat(category);
        }
        if (!params.has('cat') && cat) {
            params.set('cat', cat);
            router.replace(`${pathname}?${params.toString()}`);
        }
    }, [pathname, router, searchParams, category, cat]);

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (cat) {
            params.set('cat', cat);
            router.replace(`${pathname}?${params.toString()}`);
        }
    }, [cat, pathname, router, searchParams]);

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
        localStorage.removeItem('filterValues');
        setCat(null);
        setRange([0, 5000]);
        setSelectedColors([]);
        setSelectedSizes([]);
    }

    return (
        <div className='w-full max-h-max flex flex-col gap-3 overflow-y-auto'>

            <div className='flex flex-col'>
                <div className="flex flex-row items-center justify-between">
                    <h5 className='w-full text-start border-b-[1px] py-2'>Categories</h5>
                    <h6 className="text-red-400" onClick={HandleResetAll}>Reset</h6>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 py-2 '>
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
                <h5 className='w-full text-start border-b-[1px] py-2 '> Price Range </h5>
                <div className="flex flex-row items-center gap-5 mt-2">
                    <div className="flex flex-row items-center gap-2">
                        <h6>Min</h6>
                        <input type="number" value={range[0]} onChange={handleMinChange} className="p-2 w-[70px]" />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <h6>Max</h6>
                        <input type="number" value={range[1]} onChange={handleMaxChange} className="p-2 w-[70px]" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h5 className='w-full text-start border-b-[1px] py-2 '> Colors </h5>
                <Colors onColorSelect={(d: any) => setSelectedColors(d)} />
            </div>

            <div className="flex flex-col gap-2">
                <h5 className='w-full text-start border-b-[1px] py-2 '> Sizes </h5>
                <Sizes onSizeSelect={(d: any) => setSelectedSizes(d)} />
            </div>

        </div>
    );
};

export default Filter;
