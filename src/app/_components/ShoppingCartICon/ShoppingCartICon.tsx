'use client'
import React, { useState, useEffect } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import './ShoppingCartIcon.scss';
import Link from 'next/link';

const ShoppingCartIcon = () => {
    const [cartClass, setCartClass] = useState('');

    const cartTotal = 2
    const user = false

    useEffect(() => {
        if (cartTotal > 0) {
            setCartClass('shake');
            setTimeout(() => {
                setCartClass('');
            }, 500);
        }
    }, [cartTotal]);

    return (
        <Link href={'/cart'} className={`cart ${!user ? "right-[10px]" : "right-[60px]"} ${cartClass}`} >
            <RiShoppingBagLine size={20} />
            <div className={`absolute top-[-5px] right-[-5px] bg-red-400 w-[20px] h-[20px] flex items-center justify-center rounded-full border-[2px] border-solid border-white text-white text-[10px]`}>
                {cartTotal}
            </div>
        </Link>
    );
};

export default ShoppingCartIcon;
