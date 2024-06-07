'use client'

import Image from '@/components/ui/Image'
import { ArrowRight } from 'lucide-react'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn'
import shirt from '../../assets/shirt.png'

const Card = () => {
    return (
        <div className='min-w-[300px] rounded-[30px] h-[500px] overflow-hidden relative shadow-md hover:shadow-custom-shadow transition duration-300 group'>
            {/* image con */}
            <div className='h-[280px] overflow-hidden'>
                <Image src={shirt.src} imgclass='w-full h-full bg-neutral-200 object-contain transform group-hover:scale-[1.3] transition duration-500' />
            </div>

            {/* card content */}
            <div className='bg-white w-full h-[220px] p-5 flex flex-col justify-between'>
                <h1 className='text-lg font-bold capitalize'>heading tile eshsh</h1>
                <p className='text-sm text-neutral-400 leading-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo</p>

                {/* rating */}
                <div className='flex flex-row items-center justify-between'>
                    <div>
                        rating
                    </div>
                    <div>$1000</div>
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