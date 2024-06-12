'use client'
import React, { useState, useEffect } from 'react'

interface QuantityProps {
    quanityCls?: string,
    onQuantity?: (value: number) => void;
}

const Quantity = ({ quanityCls, onQuantity }: QuantityProps) => {
    const [quantity, setQuantity] = useState(1)

    const handleDecrease = () => {
        setQuantity(prevQuantity => {
            const newQuantity = Math.max(1, prevQuantity - 1)
            if (onQuantity) {
                onQuantity(newQuantity)
            }
            return newQuantity
        })
    }

    const handleIncrease = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1
            if (onQuantity) {
                onQuantity(newQuantity)
            }
            return newQuantity
        })
    }

    useEffect(() => {
        if (onQuantity) {
            onQuantity(quantity)
        }
    }, [quantity, onQuantity])

    return (
        <div className={`border h-[50px] flex flex-row gap-3 justify-between items-center px-5 ${quanityCls}`}>
            <button onClick={handleDecrease}>-</button>
            <h2>{quantity}</h2>
            <button onClick={handleIncrease}>+</button>
        </div>
    )
}

export default Quantity
