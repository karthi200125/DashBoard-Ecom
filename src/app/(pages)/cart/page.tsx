'use client'

import { useState } from "react";
import AddressStep from "./AddressStep";
import OrderSummaryStep from "./OrderSummaryStep";


const Cart = () => {

    const [step, setStep] = useState(1)

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