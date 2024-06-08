import CustomBtn from '@/app/_components/CustomBtn'
import React from 'react'

interface OrderSummaryProps {
    onStep: () => void; 
}

const OrderSummary = ({ onStep }: OrderSummaryProps) => {
    const subtotal = 140
    const estimatedShipping = 40
    const discountPercentage = 20
    const discount = (subtotal * discountPercentage) / 100
    const orderTotal = subtotal + estimatedShipping - discount

    return (
        <div className='w-full h-full flex flex-col justify-between'>
            <h1 className='text-xl font-bold border-b-[1px] pb-2'>Cart Summary</h1>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='text-md text-neutral-400'>Subtotal</h2>
                <span className='text-md font-bold'>${subtotal.toFixed(2)}</span>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='text-md text-neutral-400'>Estimated Shipping</h2>
                <span className='text-md font-bold'>${estimatedShipping.toFixed(2)}</span>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='text-md text-neutral-400'>Discount</h2>
                <span className='text-md font-bold'>${discount.toFixed(2)}</span>
            </div>
            <div className='flex flex-row justify-between items-center border p-2'>
                <h2 className='text-md font-bold'>Order Total</h2>
                <span className='text-md font-bold'>${orderTotal.toFixed(2)}</span>
            </div>
            <CustomBtn btnCls='bg-black text-white hover:opacity-70' onClick={onStep}>Continue</CustomBtn>
        </div>
    )
}

export default OrderSummary
