'use client'

import Image from '@/components/ui/Image'
import { ArrowRight } from 'lucide-react'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn'
import StarRating from './StarRating'
import Heart from '../Heart/Heart'

interface CardProps {
    card?: any
}

const Card = ({ card }: CardProps) => {
    return (
        <div className='min-w-[300px] rounded-[30px] h-[500px] overflow-hidden relative shadow-md hover:shadow-custom-shadow transition duration-300 group'>
            {/* image con */}
            <div className='h-[280px] overflow-hidden relative'>
                <Image src={card?.proImage || ""} imgclass='w-full h-full bg-neutral-200 object-contain transform group-hover:scale-[1.3] transition duration-500' />
                <div className='w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center absolute top-3 right-3'>
                    <Heart />
                </div>
                <div className='absolute top-3 left-3 w-[60px] h-[35px] rounded-full bg-white flex items-center justify-center text-sm font-bold'>
                    70%
                </div>
            </div>

            {/* card content */}
            <div className='bg-white w-full h-[220px] p-5 flex flex-col justify-between'>
                <h1 className='text-lg font-bold capitalize'>{card?.proName}</h1>
                <p className='text-sm text-neutral-400 leading-0 line-clamp-2'>{card?.proDesc}</p>

                {/* rating */}
                <div className='flex flex-row items-center justify-between'>
                    <StarRating rating={parseFloat(card?.proRating)} />
                    <div className="font-bold">${card?.proPrice}</div>
                </div>

                {/*  add to car button*/}
                <div className='flex flex-row items-center justify-between'>
                    <div className='w-[50px] h-[50px] border rounded-full flex items-center justify-center rotate-[-45deg] group-hover:rotate-0 transition duration-500 group-hover:bg-black group-hover:text-white cursor-pointer'>
                        <ArrowRight />
                    </div>
                    <AddToCartBtn />
                </div>

            </div>
        </div>
    )
}

export default Card