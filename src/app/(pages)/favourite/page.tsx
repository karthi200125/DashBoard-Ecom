'use client'
import Cards from '@/app/_components/Cards/Cards';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'sonner';
import { getFavProducts } from '../../../../actions/product';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Favourite = () => {
    const user = useCurrentUser();
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const [count, setCount] = useState<number>(0);
    const [isLoading, startTransition] = useTransition();
    const userId = user?.id;

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const page = searchParams.get('page') || '1';

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (!params.has('page')) {
            params.set('page', page);
            router.replace(`${pathname}?${params.toString()}`);
        }
    }, [page, pathname, router, searchParams]);

    useEffect(() => {
        const fetchProducts = async () => {
            startTransition(async () => {
                const { data, count, error } = await getFavProducts(userId, page);
                setAllProducts(data || []);
                setCount(count)
                if (error) {
                    toast.error(error);
                }
            })
        };
        fetchProducts();
    }, [userId, page]);

    return (
        <div className='w-full min-h-screen py-5 flex flex-col gap-5'>
            <div className='p-2 md:p-0 flex flex-col gap-2'>
                <h1>Your Favourite Products</h1>
                <p>You have {count} products in Favourites</p>
            </div>

            <Cards products={allProducts} isLoading={isLoading} count={count} />
        </div>
    );
};

export default Favourite;
