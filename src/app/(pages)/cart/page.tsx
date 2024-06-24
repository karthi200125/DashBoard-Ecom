'use client'

import { useCart } from "@/app/_components/ContextApi/CartContext";
import dynamic from "next/dynamic";
import { useState } from "react";
import CustomStepper from "./Stepper";
import CheckOutShowProducts from "./CheckOutShowProducts";
import OrderSummary from "./OrderSummary";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
const AddressStep = dynamic(() => import("./AddressStep"));
const OrderSummaryStep = dynamic(() => import("./OrderSummaryStep"));

const Cart = () => {
    const [step, setStep] = useState(0);
    const user = useCurrentUser()
    const { state } = useCart();
    const { items } = state;

    return (
        <div className='p-2 md:p-0 w-full min-h-screen py-5 flex flex-col gap-5 relative'>
            {/* Stepper */}
            <div className='w-full h-[100px] border'>
                <CustomStepper step={step} />
            </div>

            {/* Main content */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-10 relative">
                <div className="w-full">
                    {step === 0 && <OrderSummaryStep />}
                    {step === 1 && <AddressStep />}
                    {step === 2 && <CheckOutShowProducts />}
                </div>

                {/* Right checkout box */}
                {user &&
                    <div className='w-full md:min-w-[30%] lg:w-[30%] h-[300px] sticky top-[100px] rounded-[20px] border p-5 right-0'>
                        <OrderSummary
                            step={step}
                            onNext={() => setStep(step + 1)}
                            onBack={() => setStep(step - 1)}
                        />
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;
