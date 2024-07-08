'use client';

import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import Colors from '@/app/_components/Colors';
import Sizes from '@/app/_components/Sizes';
import { mainCategories } from '@/app/_components/dummydata';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface FilterProps {
    onColorSelect: any;
    onSizeSelect: any;
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

    const params = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

    useEffect(() => {
        if (category) {
            setCat(category);
        }
    }, [category]);

    useEffect(() => {
        if (cat) {
            params.set('cat', cat);
            router.replace(`${pathname}?${params.toString()}`);
        } else {
            params.delete('cat');
            router.replace(`${pathname}?${params.toString()}`);
        }
    }, [cat, pathname, router, params]);

    const handleRangeChange = useCallback((_: Event, newValue: number | number[]) => {
        const newRange = newValue as number[];
        setRange(newRange);
        onPriceRange(newRange);
    }, [onPriceRange]);

    const handleMinChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newMin = parseInt(event.target.value);
        const newRange = [newMin, range[1]];
        setRange(newRange);
        onPriceRange(newRange);
    }, [range, onPriceRange]);

    const handleMaxChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newMax = parseInt(event.target.value);
        const newRange = [range[0], newMax];
        setRange(newRange);
        onPriceRange(newRange);
    }, [range, onPriceRange]);

    const handleCategoryClick = useCallback((category: string) => {
        if (cat === category) {
            setCat(null);
            onCategory('');
        } else {
            setCat(category);
            onCategory(category);
        }
    }, [cat, onCategory]);

    const handleColorSelect = useCallback((colors: string[]) => {
        setSelectedColors(colors);
        onColorSelect(colors);
    }, [onColorSelect]);

    const handleSizeSelect = useCallback((sizes: string[]) => {
        setSelectedSizes(sizes);
        onSizeSelect(sizes);
    }, [onSizeSelect]);

    const handleResetAll = useCallback(() => {
        setCat(null);
        setRange([0, 5000]);
        setSelectedColors([]);
        setSelectedSizes([]);
        onCategory('');
        onPriceRange([0, 5000]);
        onColorSelect([]);
        onSizeSelect([]);
    }, [onCategory, onPriceRange, onColorSelect, onSizeSelect]);

    return (
        <div className='w-full max-h-max flex flex-col gap-3 overflow-y-auto'>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-between'>
                    <h5 className='w-full text-start border-b-[1px] py-2'>Categories</h5>
                    <h6 className='text-red-400 cursor-pointer' onClick={handleResetAll}>Reset</h6>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 py-2'>
                    {mainCategories?.map((c, i) => (
                        <div
                            key={i}
                            className={`py-3 text-[12px] border rounded-[10px] w-full text-center cursor-pointer capitalize ${cat === c ? 'bg-black text-white' : 'bg-white'}`}
                            onClick={() => handleCategoryClick(c)}
                        >
                            {c}
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <h5 className='w-full text-start border-b-[1px] py-2'>Price Range</h5>
                <div className='flex flex-row items-center gap-5 mt-2'>
                    <div className='flex flex-row items-center gap-2'>
                        <h6>Min</h6>
                        <input type='number' value={range[0]} onChange={handleMinChange} className='p-2 w-[70px] text-[12px]' />
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <h6>Max</h6>
                        <input type='number' value={range[1]} onChange={handleMaxChange} className='p-2 w-[70px] text-[12px]' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <h5 className='w-full text-start border-b-[1px] py-2'>Colors</h5>
                <Colors onColorSelect={handleColorSelect} />
            </div>

            <div className='flex flex-col gap-2'>
                <h5 className='w-full text-start border-b-[1px] py-2'>Sizes</h5>
                <Sizes onSizeSelect={handleSizeSelect} />
            </div>
        </div>
    );
};

export default memo(Filter);
