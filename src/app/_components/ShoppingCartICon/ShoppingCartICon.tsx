'use client'
import React, { useState, useEffect } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import './ShoppingCartIcon.scss';

const ShoppingCartIcon = () => {
    const [cartClass, setCartClass] = useState('');

    const cartTotal = 2

    useEffect(() => {
        if (cartTotal > 0) {
            setCartClass('shake');
            setTimeout(() => {
                setCartClass('');
            }, 500);
        }
    }, [cartTotal]);

    return (
        <div className={`cart ${cartClass}`} >
            <RiShoppingBagLine size={20} />
            <div className="absolute top-[-5px] right-[-5px] bg-red-400 w-[20px] h-[20px] flex items-center justify-center rounded-full border-[2px] border-solid border-white text-white text-[10px]">
                {cartTotal}
            </div>
        </div>
    );
};

export default ShoppingCartIcon;
