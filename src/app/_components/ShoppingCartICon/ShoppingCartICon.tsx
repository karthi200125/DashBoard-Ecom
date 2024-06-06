'use client'
import React, { useState, useEffect } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import './ShoppingCartIcon.scss';

const ShoppingCartIcon = () => {
    const [cartClass, setCartClass] = useState('');

    const cartTotal = 1

    useEffect(() => {
        if (cartTotal > 0) {
            setCartClass('shake');
            setTimeout(() => {
                setCartClass('');
            }, 500);
        }
    }, [cartTotal]);

    return (
        <div className={`cart ${cartClass}`} data-totalitems={cartTotal}>
            <RiShoppingBagLine size={20} />
        </div>
    );
};

export default ShoppingCartIcon;
