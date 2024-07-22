'use client';
import Cards from '@/app/_components/Cards/Cards';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { getFavProducts } from '../../../../actions/product';
import Title from '@/app/_components/Title';
import CustomBtn from '@/app/_components/CustomBtn';
import Footer from '@/app/_components/Footer';

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
        queryKey: ['favproducts', userId, page],
        queryFn: async () => await getFavProducts(userId || '', page)
    });

    if (data?.error) {
        toast.error(data?.error);
    }

    return (
        <div className='w-full min-h-screen py-5 flex flex-col gap-5'>
            <Title title={`Favourites | DEXON`} />
            <div className='p-2 md:p-0 flex flex-col gap-2'>
                <h2>Your Favourite Products</h2>
                <p>You have {data?.count || 0} products in Favourites</p>
            </div>

            {data?.count === 0 &&
                <div className="w-full flex items-center justify-center gap-3 flex-col">
                    <p>Your wishlist is empty</p>
                    <CustomBtn arrow btnCls="border px-5" onClick={()=> router.push('/shop?page=1&category=')}>Go to Shop</CustomBtn>
                </div>
            }

            <Cards products={data?.data} isLoading={isPending} count={data?.count} />
            <Footer />
        </div>
    );
};

export default Favourite;
