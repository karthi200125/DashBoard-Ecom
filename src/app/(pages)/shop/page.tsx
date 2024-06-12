'use client'

import { mainproductsdata } from '@/app/_components/dummydata';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
const Filter = dynamic(() => import('./Filter'));
const Cards = dynamic(() => import('@/app/_components/Cards/Cards'));
const SideBar = dynamic(() => import('@/app/_components/SideBar'));

const Shop = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    console.log(category, minPrice, maxPrice, color, size)

    const handleCategoryChange = (selectedCategory: string) => {
        setCategory(selectedCategory);
    };

    const handleMinPriceChange = (newMinPrice: string) => {
        setMinPrice(newMinPrice);
    };

    const handleMaxPriceChange = (newMaxPrice: string) => {
        setMaxPrice(newMaxPrice);
    };

    const handleColorSelect = (selectedColor: string) => {
        setColor(selectedColor);
    };

    const handleSizeSelect = (selectedSize: string) => {
        setSize(selectedSize);
    };

    return (
        <div className='w-full min-h-screen py-5 flex flex-col gap-5'>

            {/* shop top */}
            <div className='w-full h-[60px] flex flex-col md:flex-row items-center justify-between px-5 gap-3'>
                <h1 className='w-full text-start text-xl md:text-3xl font-bold'>All Products (10) </h1>
                <div className='flex flex-row items-center gap-10'>
                    <SideBar
                        direction="left"
                        sidebarCls='min-w-[300px] md:w-[400px]'
                        isOpen={isSidebarOpen}
                        isClose={() => setIsSidebarOpen(false)}
                        body={<Filter
                            onCategory={handleCategoryChange}
                            onMinPriceRange={handleMinPriceChange}
                            onMaxPriceRange={handleMaxPriceChange}
                            onColorSelect={handleColorSelect}
                            onSizeSelect={handleSizeSelect}
                        />}
                        title='Filter Products'
                    />
                    <div className='flex flex-row items-center gap-2 cursor-pointer hover:opacity-50'>
                        <FaArrowRightArrowLeft size={20} onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                        <h2>Filter</h2>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[180px] rounded-full px-5">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent className='bg-white z-1 rounded-[10px]'>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* shop products */}
            <Cards products={mainproductsdata} isLoading={false} />

        </div>
    );
}

export default Shop;
