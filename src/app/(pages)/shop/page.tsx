'use client';

import Cards from '@/app/_components/Cards/Cards';
import Footer from '@/app/_components/Footer';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getAllProductByFilter } from '../../../../actions/product';
import Filters from './Filters';

const Shop = ({ searchParams }: { searchParams: any }) => {
    const page = '1';
    const filterValues = {
        ...searchParams,
        page,
    };

    const { isLoading, data } = useQuery({
        queryKey: ['filterValues', filterValues],
        queryFn: () => getAllProductByFilter(filterValues),
    });

    const filterProducts = data?.data;
    if (data?.error) toast.error(data?.error);

    return (
        <>
            <div className="w-full min-h-screen py-5 flex flex-col gap-5">
                {/* shop top */}
                <div className="w-full max-h-max flex flex-col xl:flex-row items-center justify-start xl:justify-between gap-5 border-b py-5 px-2 md:px-0">
                    <h4>All Products ({data?.count || 0})</h4>
                    <Filters />
                </div>

                {/* shop products */}
                <Cards products={filterProducts} isLoading={isLoading} count={data?.count} />
            </div>
            <Footer />
        </>
    );
};

export default Shop;
