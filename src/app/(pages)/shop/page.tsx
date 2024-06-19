'use client'

import Cards from '@/app/_components/Cards/Cards';
import SideBar from '@/app/_components/SideBar';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'sonner';
import { getAllProductByFilter } from '../../../../actions/product';
import Filter from './Filter';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Shop = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [category, setCategory] = useState<string>('');
    const [priceRange, setPriceRange] = useState<number[]>([0, 5000]);
    const [color, setColor] = useState<string>('');
    const [size, setSize] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const [filterProducts, setFilterProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const page = searchParams.get('page') || '1';
    const cat = searchParams.get('cat') || '';

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (!params.has('page')) {
            params.set('page', page);
            router.replace(`${pathname}?${params.toString()}`);
        }
        if (cat) {
            setCategory(cat);
        }
        if (!params.has('cat')) {
            params.set('cat', category);
            router.replace(`${pathname}?${params.toString()}`);
        }
    }, [page, pathname, router, searchParams]);

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
                    page
                };
                const { data, error, count } = await getAllProductByFilter(filterParams);
                setFilterProducts(data || []);
                setCount(count);
                console.log("count", count)
                if (error) toast.error(error);
            } catch (error) {
                toast.error('Failed to fetch products');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [category, priceRange, color, size, page]);

    return (
        <div className="w-full min-h-screen py-5 flex flex-col gap-5">
            {/* shop top */}
            <div className="w-full h-[60px] flex flex-col md:flex-row items-center justify-between px-5 gap-3">
                <h1 className="w-full text-start text-xl md:text-3xl font-bold">
                    All Products ({count})
                </h1>
                <div className="flex flex-row items-center gap-10">
                    <SideBar
                        direction="left"
                        sidebarCls="min-w-[300px] md:w-[400px]"
                        isOpen={isSidebarOpen}
                        isClose={() => setIsSidebarOpen(false)}
                        body={
                            <Filter
                                onCategory={(selectedCategory: string) => setCategory(selectedCategory)}
                                onPriceRange={(range: number[]) => setPriceRange(range)}
                                onColorSelect={(selectedColor: string) => setColor(selectedColor)}
                                onSizeSelect={(selectedSize: string) => setSize(selectedSize)}
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
            <Cards products={filterProducts} isLoading={isLoading} count={count} />
        </div>
    );
};

export default Shop;
