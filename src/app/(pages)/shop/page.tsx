'use client';

import Cards from '@/app/_components/Cards/Cards';
import Footer from '@/app/_components/Footer';
import SideBar from '@/app/_components/SideBar';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { toast } from 'sonner';
import { getAllProductByFilter } from '../../../../actions/product';
import Filter from './Filter';

const Shop = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [category, setCategory] = useState<string>('');
    const [priceRange, setPriceRange] = useState<number[]>([0, 5000]);
    const [color, setColor] = useState<string>('');
    const [size, setSize] = useState<string>('');

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const page = searchParams.get('page') || '1';
    const cat = searchParams.get('cat') || '';

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        if (!params.has('page')) {
            params.set('page', page);
            router.replace(`${pathname}?${params.toString()}`);
        }
        if (cat) {
            setCategory(cat);
        } else {
            if (!params.has('cat')) {
                params.set('cat', category);
                router.replace(`${pathname}?${params.toString()}`);
            }
        }
    }, [page, cat, pathname, router, searchParams]);

    const price = priceRange.map(String);
    const filterParams = { category, price, color, size, page };
    console.log(filterParams)

    const { isPending: isLoading, data } = useQuery({
        queryKey: ['filterproducts', filterParams],
        queryFn: () => getAllProductByFilter(filterParams)
    });

    const filterProducts = data?.data;
    if (data?.error) toast.error(data?.error);

    return (
        <>
            <div className="w-full min-h-screen py-5 flex flex-col gap-5">
                {/* shop top */}
                <div className="w-full h-[60px] flex flex-row items-center justify-between px-5 gap-3 border-b py-5">
                    <h4 className="w-full text-start text-xl md:text-3xl font-bold">
                        All Products ({data?.count || 0})
                    </h4>
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
                        <div className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-50" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <h5>Filter</h5>
                            <FaArrowRightArrowLeft size={20} />
                        </div>
                    </div>
                </div>

                {/* shop products */}
                <Cards products={filterProducts} isLoading={isLoading} count={data?.count} />
            </div>
            <Footer />
        </>
    );
};

export default Shop;
