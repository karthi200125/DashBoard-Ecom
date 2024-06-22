'use client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getAllProducts } from '../../../../actions/product';
import Cards from '../Cards/Cards';
import CustomBtn from '../CustomBtn';
import { useCart } from '../ContextApi/CartContext';

const LandingCards = () => {
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const products = await getAllProducts();
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

    const { state, dispatch } = useCart();
    const { items } = state;

    console.log(items)

    return (
        <div className='min-h-screen w-full flex flex-col gap-5 py-5'>
            <div className='text-center'>
                <h3 className='text-neutral-600'>New Launches</h3>
                <h1 className='mt-3'>Fresh off The Boat</h1>
            </div>
            <Cards products={allProducts} isLoading={isLoading} />
            <CustomBtn arrow btnCls='w-[200px] mx-auto border'>
                See All Products
            </CustomBtn>
        </div>
    );
};

export default LandingCards;