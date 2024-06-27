'use client'

import { useCurrentUser } from "@/app/hooks/useCurrentUser"

const Success = () => {

    const user = useCurrentUser()

    return (
        <div className="w-full min-h-[90vh] flex flex-col gap-3 py-5">
            <h3 className="py-3 border-b">Order Information</h3>
            <div>
                <h2>desc 21 2024</h2>
                <h2>{`${user?.address}, ${user?.city}, ${user?.state}, India`}</h2>
            </div>

            {/* payamnet summary */}
            <div className="flex flex-col gap-3">
                <h2>Payment Summary</h2>
                <p>short report of payment status</p>
                <div className="max-w-max border rounded-[10px] flex flex-row px-10 py-5 mt-3 gap-10">
                    <div>
                        <p>Amount Total</p>
                        <h2>1000</h2>
                    </div>
                    <div>
                        <p>Amount paid</p>
                        <h2>1000</h2>
                    </div>
                </div>
            </div>

            {/* products */}
            <div>
                <h3>ordered Products</h3>
                <div className="flex flex-col gap-2 overflow-y-auto">
                    {/* product */}
                    <div className="border rounded-[10px] p-5 flex flex-row items-center justify-between">
                        <div className="">
                            <h2>product name</h2>
                            <p>product description</p>
                        </div>
                        <div className="flex flex-row items-center ">
                            <h2 className="min-w-[100px]">
                                price
                            </h2>
                            <h2 className="w-[100px]">
                                qunaityt
                            </h2>                            
                        </div>
                    </div>
                    <div className="border rounded-[10px] p-5 flex flex-row items-center justify-between">
                        <div className="">
                            <h2>product name</h2>
                            <p>product description</p>
                        </div>
                        <div className="flex flex-row items-center ">
                            <h2 className="min-w-[100px]">
                                price
                            </h2>
                            <h2 className="w-[100px]">
                                qunaityt
                            </h2>                            
                        </div>
                    </div>
                    <div className="border rounded-[10px] p-5 flex flex-row items-center justify-between">
                        <div className="">
                            <h2>product name</h2>
                            <p>product description</p>
                        </div>
                        <div className="flex flex-row items-center ">
                            <h2 className="min-w-[100px]">
                                price
                            </h2>
                            <h2 className="w-[100px]">
                                qunaityt
                            </h2>                            
                        </div>
                    </div>

                    <div className="w-full p-3 rounded-[10px] bg-black text-white flex flex-row items-center justify-between">
                        <h2>toatl amount</h2>
                        <h2>1000</h2>
                    </div>                    

                </div>
            </div>

        </div>
    )
}

export default Success