'use client'
import Cards from '@/app/_components/Cards/Cards';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getFavProducts } from '../../../../actions/product';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';

const Favourite = () => {
    const user = useCurrentUser()
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            const userId = user?.id
            try {
                const products = await getFavProducts(userId);
                setAllProducts(products?.data || []);
                if (products?.error) {
                    toast.error(products.error);
                }
            } catch (error) {
                toast.error('Failed to fetch products');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);


    return (
        <div className='w-full min-h-screen py-5 flex flex-col gap-5'>
            <div className='p-2 md:p-0 flex flex-col gap-2 '>
                <h1>Your Favourite Products</h1>
                <p>You have {allProducts?.length} products in Favourites</p>
            </div>

            <Cards products={allProducts} isLoading={isLoading} />
        </div>
    )
}

export default Favourite