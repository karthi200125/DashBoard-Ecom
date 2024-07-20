'use client';

import React, { useState } from 'react';
import './AddToCartBtn.scss';
import { MdShoppingCart } from "react-icons/md";
import { FaParachuteBox } from "react-icons/fa";
import { useCart } from '../ContextApi/CartContext';
import { CartItemSchema } from '../../../../schemas';
import { toast } from 'sonner';
import { z } from 'zod';

type AddToCartBtnProps = {
    product: any;
};

const AddToCartBtn = ({ product }: AddToCartBtnProps) => {
    const [clicked, setClicked] = useState(false);
    const { dispatch, state } = useCart();
    const { items } = state;

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 3000);

        const isInCartAlready = items.some(item => item.id === product.id);
        if (isInCartAlready) {
            toast.error("Already added to the cart");
            return;
        }
        
        try {

            dispatch({
                type: 'ADD_ITEM',
                item: { ...product, proQuantity: 1 },
            });
            toast.success(`"${product?.proName}" added to the cart`)
        } catch (error) {
            toast.error(`"${product?.proName}" add to the cart failed`);
        }
    };

    return (
        <button className={`cart-button w-full md:max-w-max border px-2 pl-5 rounded-full ${clicked ? 'clicked' : ''}`} onClick={handleAddToCart}>
            <div className={`add-to-cart flex flex-row items-center justify-center gap-3 ${clicked && "opacity-0"}`}>
                <h5 className='text-[10px] md:text-[15px] whitespace-nowrap'>Add to Cart</h5>
                <div className='w-[40px] h-[40px] rounded-full bg-blue-400 flex items-center justify-center text-white'>
                    <MdShoppingCart size={20} />
                </div>
            </div>
            <span className="added w-full h-full items-center justify-center text-center text-lg left-0 top-0">Added</span>
            <MdShoppingCart className="fas fa-shopping-cart" />
            <FaParachuteBox className="fas fa-box" />
        </button>
    );
};

export default AddToCartBtn;
