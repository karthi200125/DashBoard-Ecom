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
                    className='flex flex-col md:flex-row items-center gap-5 border rounded-[15px] md:rounded-[20px] max-h-max md:h-[220px] hover:shadow-custom-shadow transition duration-300 overflow-hidden p-2'
                    key={cartpro.id}
                >
                    <div className='flex flex-row gap-5 w-full relative'>
                        <Image
                            src={cartpro?.proImage[0]}
                            imgclass='hidden md:flex w-[220px] h-[210px] bg-neutral-200 rounded-[15px]'
                            alt={cartpro?.proName}
                        />
                        <div className='flex flex-col h-full gap-2 w-full md:w-[70%] md:py-2'>
                            <div className='md:hidden flex flex-row items-center gap-1 justify-between'>
                                {cartpro?.proImage?.map((img) => (
                                    <Image
                                        src={img}
                                        imgclass='w-[100px] h-[100px] bg-neutral-200 rounded-[5px]'
                                        alt={cartpro?.proName}
                                    />
                                ))}
                            </div>
                            <h5 className='line-clamp-1'>{cartpro?.proName}</h5>
                            <Colors
                                onColorSelect={(color: any) => handleColorSelect(cartpro.id, color)}
                                alreadyColor={cartpro?.proColors}
                                type='cartitem'
                            />
                            <Sizes
                                onSizeSelect={(size: any) => handleSizeSelect(cartpro.id, size)}
                                alreadySize={cartpro?.proSizes}
                                type='cartitem'
                            />
                            <div className='flex flex-row items-center gap-3 md:gap-10 w-full'>
                                <Quantity
                                    id={cartpro.id}
                                    quantity={cartpro?.proQuantity}
                                />
                                <h5 className='whitespace-nowrap'>₹ {(cartpro.proQuantity * cartpro.proPrice).toFixed(2)}</h5>
                            </div>
                        </div>

                        <IoIosClose
                            size={30}
                            className='text-red-500 cursor-pointer font-bold md:absolute bottom-0 md:top-0 right-0'
                            onClick={() => handleRemoveItem(cartpro.id)}
                        />

                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderSummaryStep;
