'use client'

import { useCart } from "@/app/_components/ContextApi/CartContext";
import dynamic from "next/dynamic";
import { useState } from "react";
const AddressStep = dynamic(() => import("./AddressStep"));
const OrderSummaryStep = dynamic(() => import("./OrderSummaryStep"));


const Cart = () => {

    const [step, setStep] = useState(1)

    const { state } = useCart();
    const { items } = state;
    
    return (
        <div className='p-2 md:p-0 w-full min-h-screen py-5 flex flex-col gap-5 relative'>

            {/* stepper code */}
            <div className='w-full h-[100px] border'>
                stepper
            </div>

            {step === 1 &&
                <OrderSummaryStep onStep={() => setStep(step + 1)} />
            }
            {step === 2 &&
                <AddressStep />
            }
            {step === 3 &&
                <div className="flex flex-col gap-3">
                    Checkout
                </div>
            }

        </div>
    )
}

export default Cart