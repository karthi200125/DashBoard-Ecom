'use client'

import Cards from '@/app/_components/Cards/Cards';
import SideBar from '@/app/_components/SideBar';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { getAllProductByFilter } from '../../../../actions/product';
import Filter from './Filter';

const Shop = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [category, setCategory] = useState<string>('');
    const [priceRange, setPriceRange] = useState<number[]>([0, 5000]);
    const [color, setColor] = useState<string>('');
    const [size, setSize] = useState<string>('');
    const [filterProducts, setFilterProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleCategoryChange = (selectedCategory: string) => {
        setCategory(selectedCategory);
    };

    const handlePriceRangeChange = (range: number[]) => {
        setPriceRange(range);
    };

    const handleColorSelect = (selectedColor: string) => {
        setColor(selectedColor);
    };

    const handleSizeSelect = (selectedSize: string) => {
        setSize(selectedSize);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            const price = priceRange.map(String);
            try {
                const filterParams = {
                    category,
                    price,
                    color,
                    size,
                };
                console.log(filterParams)
                const { data } = await getAllProductByFilter(filterParams);
                console.log(data)
                setFilterProducts(data || []);
            } catch (error) {
                console.error('Error fetching filtered products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [category, priceRange, color, size]);

    return (
        <div className="w-full min-h-screen py-5 flex flex-col gap-5">
            {/* shop top */}
            <div className="w-full h-[60px] flex flex-col md:flex-row items-center justify-between px-5 gap-3">
                <h1 className="w-full text-start text-xl md:text-3xl font-bold">
                    All Products ({filterProducts.length})
                </h1>
                <div className="flex flex-row items-center gap-10">
                    <SideBar
                        direction="left"
                        sidebarCls="min-w-[300px] md:w-[400px]"
                        isOpen={isSidebarOpen}
                        isClose={() => setIsSidebarOpen(false)}
                        body={
                            <Filter
                                onCategory={handleCategoryChange}
                                onPriceRange={handlePriceRangeChange}
                                onColorSelect={handleColorSelect}
                                onSizeSelect={handleSizeSelect}
                            />
                        }
                        title="Filter Products"
                    />
                    <div className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-50">
                        <h2>Filter</h2>
                        <FaArrowRight size={20} onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    </div>
                    {/* TODO: Implement Select here */}
                </div>
            </div>

            {/* shop products */}
            <Cards products={filterProducts} isLoading={isLoading} />
        </div>
    );
};

export default Shop;
