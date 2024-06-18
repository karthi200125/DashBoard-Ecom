'use client'
import StarRating from '@/app/_components/Cards/StarRating'
import Colors from '@/app/_components/Colors'
import Heart from '@/app/_components/Heart/Heart'
import Icon from '@/app/_components/Icon'
import React from 'react'
import Quantity from '../cart/Quantity'
import AddToCartBtn from '@/app/_components/AddToCartBtn/AddToCartBtn'
import Sizes from '@/app/_components/Sizes'

const ProductContent = ({ product }: any) => {
    return (
        <div className='w-full h-full p-2 md:p-5 flex flex-col md:gap-3 lg:gap-5 justify-between'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl '>{product?.proName}</h1>
            <p className='text-md text-neutral-400 line-clamp-3'>{product?.proDesc}</p>

            <h1 className='text-3xl font-bold'>₹ {product?.proPrice} <span className="text-sm text-neutral-400">Rs</span></h1>

            <div className='flex flex-col gap-3'>
                <h1 className='text-xl font-bold'>Colors</h1>
                <Colors onColorSelect={() => ""} alreadyColor={product?.proColors}/>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-xl font-bold'>sizes</h1>
                <Sizes onSizeSelect={() => ""} alreadySize={product?.proSizes}/>
            </div>
            <div className='flex flex-row items-center gap-5'>
                <Quantity quanityCls='min-w-[110px] md:w-[180px] rounded-full h-[50px]' />
                <AddToCartBtn />
                {/* <Icon icon={<Heart />} tooltip='favoruite' /> */}
            </div>
        </div >
    )
}

export default ProductContent