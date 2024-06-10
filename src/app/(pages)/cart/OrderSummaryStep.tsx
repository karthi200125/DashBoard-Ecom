'use client'

import { mainproductsdata } from '@/app/_components/dummydata'
import Image from '@/components/ui/Image'
import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import Quantity from './Quantity'
import OrderSummary from './OrderSummary'
import Colors from '@/app/_components/Colors'
import Sizes from '@/app/_components/Sizes'

interface OsProps {
    onStep: () => void;
}

const OrderSummaryStep = ({ onStep }: OsProps) => {
    return (
        <div className='flex flex-col lg:flex-row items-start gap-5 justify-start '>
            {/* product counts */}
            <div className='flex flex-col gap-2 w-full lg:w-[70%] max-h-max border rounded-[20px] p-2 md:p-5'>
                <div className='flex flex-row justify-between items-start py-3 relative'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl md:text-4xl'>Your Cart</h1>
                        <p className='text-neutral-400 text-sm'>You have 4 products in your cart</p>
                    </div>
                    <div className='absolute right-0 flex flex-row items-center cursor-pointer max-w-max'>
                        <IoIosClose size={30} className='text-red-500 cursor-pointer font-bold ' />
                        <h1 className='text-red-400 font-bold text-sm'>ClearAll</h1>
                    </div>
                </div>

                {/* left products */}
                {mainproductsdata?.map((cartpro) => {

                    const [quantity, setQuantity] = useState(1)

                    return (
                        <div className='flex flex-col md:flex-row items-center gap-5 border rounded-[20px] h-[200px] p-3 hover:shadow-custom-shadow transition duration-300' key={cartpro.id}>

                            {/* products */}
                            <div className='flex flex-row gap-5 w-full md:w-[70%] '>
                                <Image src={cartpro?.proImage} imgclass='w-[80px] md:w-[180px] h-[80px] md:h-[180px] bg-neutral-200 rounded-[15px]' />
                                {/* product content */}
                                <div className='flex flex-col h-full gap-2'>
                                    <h1 className='text-md md:text-2xl font-bold line-clamp-1'>{cartpro?.proName}</h1>
                                    <p className='hidden md:flex text-sm text-neutral-400 line-clamp-2'>{cartpro?.proDesc}</p>
                                    <Colors onColorSelect={() => ""} />
                                    <Sizes onSizeSelect={() => ""} />
                                </div>
                            </div>

                            <div className='flex flex-row items-center justify-between w-full md:w-[30%] h-full relative'>
                                <Quantity quanityCls='w-[100px] lg:w-[150px]' onQuantity={(value) => setQuantity(value)} />
                                <h1 className='font-bold'>${(quantity * parseFloat(cartpro?.proPrice))}</h1>
                                <IoIosClose size={30} className='text-red-500 cursor-pointer font-bold md:absolute top-0 right-0' />
                            </div>

                        </div>
                    )
                })}

            </div>

            {/* right checkout box */}
            <div className='w-full md:min-w-[30%] lg:w-[30%] h-[300px] sticky top-[100px] rounded-[20px] border p-5 right-0'>
                <OrderSummary onStep={onStep} />
            </div>

        </div>
    )
}

export default OrderSummaryStep
