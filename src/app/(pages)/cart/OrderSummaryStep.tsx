'use client';

import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { useCart } from '@/app/_components/ContextApi/CartContext';
import Image from '@/components/ui/CustomImage';
import Quantity from './Quantity';
import OrderSummary from './OrderSummary';
import Colors from '@/app/_components/Colors';
import Sizes from '@/app/_components/Sizes';

interface OsProps {
    onStep: () => void;
}

const OrderSummaryStep = ({ onStep }: OsProps) => {
    const [quantity, setQuantity] = useState(1);

    const { state, dispatch } = useCart();
    const { items } = state;

    const handleRemoveItem = (id: string) => {
        dispatch({ type: 'REMOVE_ITEM', id });
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <div className='flex flex-col lg:flex-row items-start gap-5 justify-start '>
            {/* product counts */}
            <div className='flex flex-col gap-2 w-full lg:w-[70%] max-h-max border rounded-[20px] p-2 md:p-5'>
                <div className='flex flex-row justify-between items-start py-3 relative'>
                    <div className='flex flex-col gap-2'>
                        <h1>Your Cart</h1>
                        <p>You have {items.length} products in your cart</p>
                    </div>
                    <div
                        className='absolute right-0 flex flex-row items-center cursor-pointer max-w-max'
                        onClick={handleClearCart}
                    >
                        <IoIosClose size={30} className='text-red-500 cursor-pointer font-bold ' />
                        <h1 className='text-red-400 font-bold text-sm'>ClearAll</h1>
                    </div>
                </div>

                {/* left products */}
                {items?.map((cartpro) => (
                    <div
                        className='flex flex-col md:flex-row items-center gap-5 border rounded-[20px] h-[200px] p-3 hover:shadow-custom-shadow transition duration-300'
                        key={cartpro.id}
                    >
                        {/* products */}
                        <div className='flex flex-row gap-5 w-full md:w-[70%] '>
                            <Image
                                src={cartpro?.proImage[0]}
                                imgclass='w-[80px] md:w-[180px] h-[80px] md:h-[180px] bg-neutral-200 rounded-[15px]'
                                alt={cartpro?.proName}
                            />
                            {/* product content */}
                            <div className='flex flex-col h-full gap-2'>
                                <h2 className='line-clamp-1'>{cartpro?.proName}</h2>
                                <p className='line-clamp-2'>{cartpro?.proDesc}</p>
                                <Colors onColorSelect={() => ''} />
                                <Sizes onSizeSelect={() => ''} />
                            </div>
                        </div>

                        <div className='flex flex-row items-center justify-between w-full md:w-[30%] h-full relative'>
                            <Quantity
                                quanityCls='w-[100px] lg:w-[150px]'
                                onQuantity={(value) => setQuantity(value)}
                            />
                            <h2>${(quantity * cartpro?.proPrice).toFixed(2)}</h2>
                            <IoIosClose
                                size={30}
                                className='text-red-500 cursor-pointer font-bold md:absolute top-0 right-0'
                                onClick={() => handleRemoveItem(cartpro.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* right checkout box */}
            <div className='w-full md:min-w-[30%] lg:w-[30%] h-[300px] sticky top-[100px] rounded-[20px] border p-5 right-0'>
                <OrderSummary onStep={onStep} />
            </div>
        </div>
    );
};

export default OrderSummaryStep;
