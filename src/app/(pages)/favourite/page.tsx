'use client'
import Cards from '@/app/_components/Cards/Cards';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { getFavProducts } from '../../../../actions/product';

const Favourite = () => {
    const user = useCurrentUser();    
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

    const { isPending, data } = useQuery({
        queryKey: ['favproducts'],
        queryFn: async () => await getFavProducts(userId, page)
    })

    if (data?.error) {
        toast.error(data?.error);
    }

    return (
        
        <div className='w-full min-h-screen py-5 flex flex-col gap-5'>
            <div className='p-2 md:p-0 flex flex-col gap-2'>
                <h1>Your Favourite Products</h1>
                <p>You have {data?.count} products in Favourites</p>
            </div>

            <Cards products={data?.data} isLoading={isPending} count={data?.count} />
        </div>
    );
};

export default Favourite;
