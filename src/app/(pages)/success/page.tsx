'use client'

import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import { getUserOrder } from "../../../../actions/order";
import { getOrderProducts } from "../../../../actions/product";
import { formatDate } from "@/app/hooks/MomentDate";
import { useQuery } from "@tanstack/react-query";
import CustomImage from "@/components/ui/CustomImage";


const Success = () => {
    const user:any = useCurrentUser();

    const { data: orderData, isLoading: isOrderLoading } = useQuery({
        queryKey: ['getorder', user?.id],
        queryFn: async () => await getUserOrder(user?.id)
    });

    const order:any = orderData?.data;
    const productIds = order?.productsIds || [];

    const { data: productsData, isLoading: isProductsLoading } = useQuery({
        queryKey: ['getorderproducts', productIds],
        queryFn: async () => await getOrderProducts(productIds),
    });

    const orderProducts = productsData?.data || [];

    return (
        <div className="w-full min-h-[90vh] flex flex-col gap-5 py-5">
            <h4 className="py-3 border-b">Order Information</h4>

            <div>
                {/* Example content */}
                <h5>Order Date: <span className="text-neutral-400">{formatDate(order?.createdAt)}</span></h5>
                <h5>Shipping Address: <span className="text-neutral-400">{`${user?.address}, ${user?.city}, ${user?.state}, India`}</span></h5>
            </div>

            {/* Payment summary */}
            <div className="flex flex-col">
                <h5>Payment Summary</h5>
                <p>Short report of payment status</p>
                <div className="max-w-max border rounded-[10px] flex flex-row px-10 py-5 mt-3 gap-10 ">
                    <div>
                        <p>Amount Total</p>
                        <h5>{order?.total} Rs</h5>
                    </div>
                    <div>
                        <p>Amount paid</p>
                        <h5>{order?.total} Rs</h5>
                    </div>
                </div>
            </div>

            {/* shipping sttaus */}
            <div className="flex-1">
                <h4>Expected Delivery</h4>
                <h5>Order status : <span className={`${order?.status === "pending" ? "text-red-400" : "text-green-400"}`}>{order?.status}</span></h5>
            </div>

            {/* Products */}
            <div className="border-t py-5 gap-3">
                <h5>Ordered Products ({order?.quantity})</h5>
                <div className="flex flex-col gap-2 overflow-y-auto">
                    {/* Display products if loaded */}
                    {isProductsLoading ? (
                        <div>Loading...</div>
                    ) : (
                        orderProducts.map(product => (
                            <div key={product.id} className="border rounded-[10px] p-5 flex flex-row items-center justify-between bg-neutral-100">
                                <div className="flex flex-row items-center gap-3">
                                    <CustomImage src={product?.proImage[0]} imgclass="w-[100px] h-[80px] object-contain" />
                                    <div>
                                        <h5>{product.proName}</h5>
                                        <p className="w-[300px] line-clamp-1">{product.proDesc}</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-5">
                                    <h5 className="w-[20px] h-[20px] rounded-full bg-red-400"></h5>
                                    <h5 className="text-center border p-3 rounded-[5px]">Xl</h5>
                                    <h5 className="min-w-[100px] text-center">{product.proPrice} Rs</h5>
                                    <h5 className="w-[50px] text-center">1</h5>
                                </div>
                            </div>
                        ))
                    )}

                    {/* Total amount section */}
                    <div className="w-full p-3 rounded-[10px] bg-black text-white flex flex-row items-center justify-between px-10">
                        <h5>Total Amount</h5>
                        <h5>{order?.total} Rs</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;
