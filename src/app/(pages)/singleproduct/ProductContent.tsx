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

const ProductContent = ({ product }: any) => {

    const router = useRouter()    
    const percentage = 20
    const discountAmount = (percentage / 100) * product?.proPrice;
    const productPercentagePrice = parseInt(product?.proPrice) + parseInt(discountAmount);

    return (
        <div className='w-full h-full p-2 md:p-5 flex flex-col gap-3 lg:gap-10 '>
            <div className='flex flex-row items-center justify-between'>
                <CustomBtn btnCls='px-5 border max-w-max' onClick={() => router.push('/')}>back to home</CustomBtn>
                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-neutral-100'>
                    <Heart product={product} />
                </div>
            </div>

            {/* product price */}
            <div className='flex flex-row items-center gap-2'>
                <h2 className='text-neutral-400 line-through'>MRP {productPercentagePrice}</h2>
                <h2 className='text-sl md:text-3xl font-bold'>₹ {product?.proPrice}</h2>
                <div className='px-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[12px] h-[35px] custom-sloped-corner w-[110px] flex items-center justify-start'>
                    {percentage}% OFF!
                </div>
            </div>

            {/* product color */}
            <div className='flex flex-col gap-3'>
                <h1 className='text-xl font-bold'>Colors</h1>
                <Colors onColorSelect={() => ""} alreadyColor={product?.proColors} />
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-xl font-bold'>sizes</h1>
                <Sizes onSizeSelect={() => ""} alreadySize={product?.proSizes} />
            </div>

            {/* product Rating */}
            <StarRating size='20' rating={3} />

            <div className='flex flex-row items-center gap-5'>
                <Quantity quanityCls='min-w-[110px] md:w-[180px] rounded-full h-[50px]' />
                <AddToCartBtn product={product} />
            </div>
        </div >
    )
}

export default ProductContent