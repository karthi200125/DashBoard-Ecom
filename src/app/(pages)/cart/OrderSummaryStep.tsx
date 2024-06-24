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
        dispatch({ type: 'UPDATE_ITEM_SELECTED_COLOR', id, color });
    };

    const handleSizeSelect = (id: string, size: string) => {
        dispatch({ type: 'UPDATE_ITEM_SELECTED_SIZE', id, size });
    };

    return (
        <div className='flex flex-col gap-2 w-full lg:w-full max-h-max border rounded-[20px] p-2 md:p-5'>
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

            {items?.map((cartpro) => (
                <div
                    className='flex flex-col md:flex-row items-center gap-5 border rounded-[20px] h-[200px] p-3 hover:shadow-custom-shadow transition duration-300'
                    key={cartpro.id}
                >
                    <div className='flex flex-row gap-5 w-full md:w-[70%]'>
                        <Image
                            src={cartpro?.proImage[0]}
                            imgclass='w-[80px] md:w-[180px] h-[80px] md:h-[180px] bg-neutral-200 rounded-[15px]'
                            alt={cartpro?.proName}
                        />
                        <div className='flex flex-col h-full gap-2'>
                            <h2 className='line-clamp-1'>{cartpro?.proName}</h2>
                            <p className='line-clamp-2'>{cartpro?.proDesc}</p>
                            <Colors
                                onColorSelect={(colors) => handleColorSelect(cartpro.id, colors)}
                                alreadyColor={cartpro?.proColors}
                                type='cartitem'
                            />
                            <Sizes
                                onSizeSelect={(sizes) => handleSizeSelect(cartpro.id, sizes)}
                                alreadySize={cartpro?.proSizes}
                                type='cartitem'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-end gap-3 w-full md:w-[30%] h-full relative'>
                        <h2>${(cartpro.proQuantity * cartpro.proPrice).toFixed(2)}</h2>
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
