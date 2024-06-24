'use client';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getAllProducts } from '../../../../actions/product';
import Cards from '../Cards/Cards';
import { useCart } from '../ContextApi/CartContext';
import CustomBtn from '../CustomBtn';
import { useRouter } from 'next/navigation';

const LandingCards = () => {    
    const router = useRouter()
    const { isPending, error, data } = useQuery({
        queryKey: ['allproducts'],
        queryFn: async () => await getAllProducts()
    })

    if(data?.error) {
        toast.error(data?.error)
    }
    
    const { state, dispatch } = useCart();
    const { items } = state;
    
    return (
        <div className='min-h-screen w-full flex flex-col gap-5 py-5'>
            <div className='text-center'>
                <h3 className='text-neutral-600'>New Launches</h3>
                <h1 className='mt-3'>Fresh off The Boat</h1>
            </div>
            <Cards products={data?.data} isLoading={isPending} />
            <CustomBtn arrow btnCls='w-[300px] mx-auto border' onClick={()=> router.push('/shop')}>
                See All Products
            </CustomBtn>
        </div>
    );
};

export default LandingCards;