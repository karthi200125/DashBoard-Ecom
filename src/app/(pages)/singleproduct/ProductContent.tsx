'use client'
import StarRating from '@/app/_components/Cards/StarRating'
import Colors from '@/app/_components/Colors'
import Heart from '@/app/_components/Heart/Heart'
import Icon from '@/app/_components/Icon'
import React from 'react'
import Quantity from '../cart/Quantity'
import AddToCartBtn from '@/app/_components/AddToCartBtn/AddToCartBtn'
import Sizes from '@/app/_components/Sizes'
import CustomBtn from '@/app/_components/CustomBtn'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { GetReviewByProduct } from '../../../../actions/review'

const ProductContent = ({ product }: any) => {

    const router = useRouter();
    const percentage = parseInt(product?.proOffer);
    const discountAmount = (percentage / 100) * (product?.proPrice || 0);
    const productPercentagePrice = (product?.proPrice || 0) - discountAmount;

    const { isPending, data } = useQuery({
        queryKey: ['getReviews', product?.id],
        queryFn: async () => await GetReviewByProduct(product?.id)
    });

    const reviews: any = data?.data || []

    const totalRating = reviews?.length > 0 ? reviews.reduce((sum: any, review: any) => sum + parseFloat(review?.revRating || '0'), 0) : 0;
    const averageRating = reviews?.length > 0 ? totalRating / reviews?.length : 0;


    return (
        <div className='w-full h-full p-[16px] md:p-5 flex flex-col gap-5 md:gap-10 '>
            <div className='flex flex-row items-center justify-between'>
                <CustomBtn btnCls='px-5 border max-w-max' onClick={() => router.push('/')}>Back to home</CustomBtn>
                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-neutral-100'>
                    <Heart product={product} />
                </div>
            </div>

            {/* product price */}
            <div className='flex flex-row items-center gap-2'>
                <h6 className='line-through'>₹ {product?.proPrice}</h6>
                <h4 className='text-sl md:text-3xl font-bold'>₹ {productPercentagePrice}</h4>
                <div className='px-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[12px] h-[35px] custom-sloped-corner w-[110px] flex items-center justify-start'>
                    {percentage}% OFF!
                </div>
            </div>

            {/* product color */}
            <div className='flex flex-col gap-3'>
                <h4>Colors</h4>
                <Colors onColorSelect={() => ""} alreadyColor={product?.proColors} />
            </div>

            <div className='flex flex-col gap-3'>
                <h4>sizes</h4>
                <Sizes onSizeSelect={() => ""} alreadySize={product?.proSizes} />
            </div>

            {/* product Rating */}
            <div className='flex flex-row items-center gap-3'>
                <StarRating size='20' star='1' rating={averageRating || 0} /> <h6>{`(Based on ${reviews?.length || 0} ratings)`}</h6>
            </div>


            <div className='flex flex-row items-center gap-5'>
                {/* <Quantity
                    id={product?.id}
                    quantity={1}
                /> */}
                <AddToCartBtn product={product} show={true} />
            </div>
        </div >
    )
}

export default ProductContent