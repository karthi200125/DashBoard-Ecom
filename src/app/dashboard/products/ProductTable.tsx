'use client'

import CustomBtn from '@/app/_components/CustomBtn';
import CustomPagination from '@/app/_components/CustomPagination';
import Icon from '@/app/_components/Icon';
import Search from '@/app/_components/Search';
import UserProfile from '@/app/_components/UserProfile';
import { CustomFetch } from '@/app/hooks/CustomFetch';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { IoIosMore } from 'react-icons/io';
import { getAllProductByFilter } from '../../../../actions/product';
import { TimeSelectData } from '@/app/_components/dummydata';

const Product = dynamic(() => import('./Product'));

const ProductTable = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [time, setTime] = useState<string>("");

    const page = searchParams.get('page') || '1';

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (!params.has('page')) {
            params.set('page', page);
            router.replace(`${pathname}?${params.toString()}`);
        }
    }, [page, pathname, router, searchParams]);

    const value = { page, time };

    const { data } = CustomFetch({
        functionProp: () => getAllProductByFilter(value),
        args: value,
        dependencies: [page, time]
    });
    
    const isLoading = false

    const allProducts = data?.data ?? [];
    const count = data?.count ?? 0;

    return (
        <div className={`w-full ${isLoading ? "h-[800px]" : "min-h-[300px]"} border bg-white rounded-[20px] p-5 flex flex-col`}>

            {/* Table top */}
            <div className="flex flex-row items-center justify-between">
                <div className='font-bold flex flex-row items-center gap-2'>
                    <FaUsers size={20} />
                    <h2>Products</h2>
                    <span>{`(${count})`}</span>
                </div>
                <Search placeholder='Search products' name='products' onChange={(value: string) => console.log(value)} />
                <div>
                    <div className='flex flex-row items-center gap-3'>
                        <select name="time" id="time-select" onChange={(e) => setTime(e.target.value)} className='border rounded-[10px] h-[40px] px-3 capitalize'>
                            {TimeSelectData?.map((select) => (
                                <option className='h-[40px] text-sm' value={select} key={select}>{select}</option>
                            ))}
                        </select>

                        <CustomBtn arrow btnCls='border pl-5' onClick={() => router.push('/dashboard/createproduct')}>
                            Create New Product
                        </CustomBtn>
                    </div>
                </div>
            </div>

            {/* Table */}
            <table className='min-w-full divide-y divide-gray-200 mt-5 relative'>
                <thead className="bg-[var(--gray)] text-black">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Product Id</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Product</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Price</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">CreatedAt</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">More</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {isLoading ?
                        <div className='w-full absolute flex flex-col gap-1 mt-2'>
                            {[...Array(10)].map((_, index) => (
                                <Skeleton key={index} className='w-full bg-neutral-200 h-[60px]' />
                            ))}
                        </div>
                        :
                        allProducts.length > 0 ?
                            allProducts.map((pro) => (
                                <tr key={pro.id}>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">{pro.id}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap flex flex-row items-center gap-2">
                                        <UserProfile profileCls='w-10 h-10' proSrc={pro.proImage[0]} proAlt={pro.proName} tooltip={pro.proName} />
                                        <span>{pro.proName}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">₹ {pro.proPrice} <span className="text-sm text-neutral-400">Rs</span></td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">Created At</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                                        <Sheet>
                                            <SheetTrigger>
                                                <Icon icon={<IoIosMore size={20} />} tooltip='More' />
                                            </SheetTrigger>
                                            <SheetContent className='bg-white'>
                                                <Product product={pro} />
                                            </SheetContent>
                                        </Sheet>
                                    </td>
                                </tr>
                            ))
                            :
                            <div className='w-full h-full bg-red-400'>No Products</div>
                    }
                </tbody>
            </table>

            {/* Table bottom */}
            <div className='flex flex-row w-full justify-end border-t-[1px] border-solid border-neutral-200 py-3'>
                <CustomPagination count={count} />
            </div>
        </div>
    );
}

export default ProductTable;
