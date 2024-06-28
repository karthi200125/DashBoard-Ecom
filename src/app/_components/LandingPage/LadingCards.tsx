'use client';
import LetterAnimation from '@/app/Animations/LetterAnimation';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { getAllProducts } from '../../../../actions/product';
import Cards from '../Cards/Cards';
import CustomBtn from '../CustomBtn';

const LandingCards = () => {
    const router = useRouter()
    const { isPending, data } = useQuery({
        queryKey: ['allproducts'],
        queryFn: async () => await getAllProducts()
    })

    if (data?.error) {
        toast.error(data?.error)
    }
    
    return (
        <div className='sticky_01_panel min-h-screen w-full flex flex-col gap-5 py-5'>
            <div className='text-center'>                
                <h5 className='text-neutral-600'>
                    <LetterAnimation title="New Launches" />
                </h5>
                <h2 className='mt-1'>
                    <LetterAnimation title="Fresh off The Boat" />
                </h2>
            </div>
            <Cards products={data?.data} isLoading={isPending} />
            <CustomBtn arrow btnCls='w-[300px] mx-auto border' onClick={() => router.push('/shop')}>
                See All Products
            </CustomBtn>
        </div>
    );
};

export default LandingCards;