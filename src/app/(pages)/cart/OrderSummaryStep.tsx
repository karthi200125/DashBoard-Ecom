'use client';

import Colors from '@/app/_components/Colors';
import { useCart } from '@/app/_components/ContextApi/CartContext';
import Sizes from '@/app/_components/Sizes';
import Image from '@/components/ui/CustomImage';
import { IoIosClose } from 'react-icons/io';
import Quantity from './Quantity';

const OrderSummaryStep = () => {
    const { state, dispatch } = useCart();
    const { items } = state;

    const handleRemoveItem = (id: string) => {
        dispatch({ type: 'REMOVE_ITEM', id });
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const handleColorSelect = (id: string, color: string) => {
        const colorNumber = parseInt(color, 10); 
        dispatch({ type: 'UPDATE_ITEM_SELECTED_COLOR', id, color: colorNumber });
    };

    const handleSizeSelect = (id: string, size: string) => {
        dispatch({ type: 'UPDATE_ITEM_SELECTED_SIZE', id, size });
    };

    return (
        <div className='flex flex-col gap-2 w-full lg:w-full max-h-max border rounded-[20px] p-2 md:p-5'>
            <div className='flex flex-row justify-between items-start py-3 relative'>
                <div className='flex flex-col gap-2'>
                    <h2>Your Cart</h2>
                    <p>You have {items.length || 0} products in your cart</p>
                </div>
                <div
                    className='absolute right-0 flex flex-row items-center cursor-pointer max-w-max'
                    onClick={handleClearCart}
                >
                    <IoIosClose size={30} className='text-red-500 cursor-pointer font-bold ' />
                    <h4 className='text-red-400 font-bold text-sm'>Clear All</h4>
                </div>
            </div>

            {items?.map((cartpro) => (
                <div
                    className='flex flex-col md:flex-row items-center gap-5 border rounded-[5px] md:rounded-[20px] max-h-max md:h-[200px] p-2 md:p-3 hover:shadow-custom-shadow transition duration-300 overflow-hidden'
                    key={cartpro.id}
                >
                    <div className='flex flex-row gap-5 w-full md:w-[70%]'>
                        <Image
                            src={cartpro?.proImage[0]}
                            imgclass='w-[80px] md:w-[220px] h-[80px] md:h-[190px] bg-neutral-200 rounded-[15px]'
                            alt={cartpro?.proName}
                        />
                        <div className='flex flex-col h-full gap-2'>
                            <h4 className='line-clamp-1'>{cartpro?.proName}</h4>
                            <p className='hidden md:flex line-clamp-2'>{cartpro?.proDesc}</p>
                            <Colors
                                onColorSelect={(color) => handleColorSelect(cartpro.id, color)}
                                alreadyColor={cartpro?.proColors}
                                type='cartitem'
                            />
                            <Sizes
                                onSizeSelect={(size) => handleSizeSelect(cartpro.id, size)}
                                alreadySize={cartpro?.proSizes}
                                type='cartitem'
                            />
                        </div>
                    </div>

                    <div className='flex flex-row md:flex-col items-center justify-end gap-3 w-full md:w-[30%] h-full relative'>
                        <h4>${(cartpro.proQuantity * cartpro.proPrice).toFixed(2)}</h4>
                        <Quantity
                            id={cartpro.id}
                            quantity={cartpro?.proQuantity}
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
    );
};

export default OrderSummaryStep;
