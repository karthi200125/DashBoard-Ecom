'use client';
import React, { useState, useEffect } from 'react';
import { useCart } from '@/app/_components/ContextApi/CartContext';

interface QuantityProps {
    id: string;
    quantity: number;
}

const Quantity = ({ id, quantity }: QuantityProps) => {
    const [currentQuantity, setCurrentQuantity] = useState(quantity || 1);
    const { dispatch } = useCart();

    const handleDecrease = () => {
        setCurrentQuantity(prevQuantity => {
            const newQuantity = Math.max(1, prevQuantity - 1);
            dispatch({ type: 'UPDATE_ITEM', id, quantity: newQuantity });
            return newQuantity;
        });
    };

    const handleIncrease = () => {
        setCurrentQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            dispatch({ type: 'UPDATE_ITEM', id, quantity: newQuantity });
            return newQuantity;
        });
    };

    useEffect(() => {
        dispatch({ type: 'UPDATE_ITEM', id, quantity: currentQuantity });
    }, [currentQuantity, dispatch, id]);

    return (
        <div className='border h-[50px] flex flex-row gap-3 justify-between items-center px-5'>
            <button onClick={handleDecrease}>-</button>
            <h2>{currentQuantity}</h2>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
};

export default Quantity;
