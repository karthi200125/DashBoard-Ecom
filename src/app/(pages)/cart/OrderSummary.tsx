'use client'

import { useCart } from '@/app/_components/ContextApi/CartContext';
import CustomBtn from '@/app/_components/CustomBtn';
import React, { useTransition } from 'react';
import { CheckOutSession } from '../../../../actions/stripe';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';

interface OrderSummaryProps {
    step: number;
    onNext: () => void;
    onBack: () => void;
}

const OrderSummary = ({ step, onNext, onBack }: OrderSummaryProps) => {
    const [isLoading, startTransition] = useTransition();
    const { state } = useCart();
    const { items } = state;

    const user = useCurrentUser()

    const subtotal = items?.reduce((acc, product) => {
        const productTotal = product.proPrice * product.proQuantity;
        return acc + productTotal;
    }, 0);

    const estimatedShipping = 0;
    const discountPercentage = 20;
    const discount = (subtotal * discountPercentage) / 100;
    const orderTotal = subtotal + estimatedShipping - discount;

    const HandleCheckOut = () => {
        const data = {
            user,
            products: items
        }
        startTransition(() => {
            CheckOutSession(data)
                .then((data) => {
                    if (data?.sessionUrl) {
                        window.location.href = data?.sessionUrl
                    }
                    // if (data?.error) {
                    //     toast.error(data?.error)
                    // }
                })
        })

    }

    return (
        <div className='w-full h-full flex flex-col justify-between'>
            <h4 className='border-b-[1px] pb-2'>Cart Summary</h4>
            <div className='flex flex-row justify-between items-center text-neutral-400 text-[15px]'>
                <p className='text-[15px]'>Subtotal</p>
                <span>₹ {subtotal?.toFixed(2)}</span>
            </div>
            <div className='flex flex-row justify-between items-center text-neutral-400 text-[15px]'>
                <p className='text-[15px]'>Estimated Shipping</p>
                <span>₹ {estimatedShipping.toFixed(2)}</span>
            </div>
            <div className='flex flex-row justify-between items-center text-neutral-400 text-[15px]'>
                <p className='text-[15px]'>Discount ({discountPercentage}%)</p>
                <span>₹ {discount.toFixed(2)}</span>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <h4 >Order Total</h4>
                <span className='text-md font-bold'>₹{orderTotal.toFixed(2)}</span>
            </div>
            <div className="flex flex-row items-center gap-5">
                {step !== 0 &&
                    <CustomBtn btnCls='flex-1 border hover:opacity-70' onClick={onBack} disabled={step === 0}>
                        {step === 1 ? "Back" : "Back"}
                    </CustomBtn>
                }
                <CustomBtn btnCls='flex-1 bg-black text-white hover:opacity-70' onClick={step === 2 ? HandleCheckOut : onNext} isLoading={step === 2 && isLoading} disabled={items?.length === 0}>
                    {step === 0 || step === 1 ? "Next" : "CheckOut"}
                </CustomBtn>
            </div>
        </div>
    );
};

export default OrderSummary;
