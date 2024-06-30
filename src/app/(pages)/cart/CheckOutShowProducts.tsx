'use client'

import Colors from '@/app/_components/Colors';
import { useCart } from '@/app/_components/ContextApi/CartContext';
import Sizes from '@/app/_components/Sizes';
import Image from '@/components/ui/CustomImage';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Quantity from './Quantity';


const CheckOutShowProducts = () => {

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
        <div className='flex flex-col gap-2 w-full lg:w-full max-h-max border rounded-[20px] p-2 md:p-5'>
            <div className='flex flex-row justify-between items-start py-3 relative'>
                <h2>Final Check Items</h2>
                <div
                    className='absolute right-0 flex flex-row items-center cursor-pointer max-w-max'
                    onClick={handleClearCart}
                >
                    <IoIosClose size={30} className='text-red-500 cursor-pointer font-bold'/>
                    <h4 className='text-red-400 font-bold text-sm'>ClearAll</h4>
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
                            <h4 className='line-clamp-1'>{cartpro?.proName}</h4>
                            <p className='line-clamp-2'>{cartpro?.proDesc}</p>
                            <Colors onColorSelect={() => ''} />
                            <Sizes onSizeSelect={() => ''} />
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-end gap-3 w-full md:w-[30%] h-full relative'>
                        <h4>${(quantity * cartpro?.proPrice).toFixed(2)}</h4>
                        <Quantity
                            quanityCls='w-[100px] lg:w-[150px]'
                            onQuantity={(value) => setQuantity(value)}
                        />
                        <IoIosClose
                            size={30}
                            className='text-red-500 cursor-pointer font-bold md:absolute top-0 right-0'
                            onClick={() => handleRemoveItem(cartpro.id)}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CheckOutShowProducts