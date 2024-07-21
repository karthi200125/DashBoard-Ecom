'use client'

import { useQuery } from "@tanstack/react-query";
import { getUserOrderProducts } from "../../../../actions/order";
import CustomBtn from "@/app/_components/CustomBtn";
import { formatDate } from "@/app/hooks/MomentDate";
import Image from "next/image";
import { getOrderProducts } from "../../../../actions/product";
import AvatarCircles from "@/app/_components/AvatarCircles";
import Link from "next/link";

interface UserOrdersProps {
    user: any
}

interface OrderProductsProps {
    order: any
}

const OrderProducts = ({ order }: OrderProductsProps) => {
    const { data: userOrderProduct } = useQuery({
        queryKey: ['orderproducts', order?.productsIds],
        queryFn: async () => await getOrderProducts(order?.productsIds),
    });

    const imageUrls = userOrderProduct?.data?.map((pro: any) => pro?.proImage[0]) || [];

    return (
        <div className='border rounded-[10px] p-5 min-[100px]'>


            <div className="flex flex-col gap-3 md:flex-row items-start md:items-center md:justify-between">
                {/* order Top left*/}
                <div className="space-y-2">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
                        <h5>Order Id : {order?.id}</h5>
                        <div className="text-[10px] h-[30px] px-3 max-w-max rounded-xl bg-green-50 text-green-500 flex items-center justify-center">Payment compledted</div>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <h5>is Delivered : </h5>
                        <div className={`text-[10px] h-[30px] px-3 max-w-max rounded-xl flex items-center justify-center ${order?.status === "pending" ? "bg-orange-50 text-orange-500" : "bg-green-50 text-green-500"}`}>{order?.status === "pending" ? "Pending" : "Delivered"}</div>
                    </div>
                    <h6 className="flex flex-row items-center gap-3">
                        {formatDate(order?.createdAt)}
                        <p> from Draft orders</p>
                    </h6>
                    <Link href={`/orders/${order?.id}`} className="cursor-pointer max-w-max h-[40px] px-5 rounded-full border text-[12px] flex items-center justify-center">view Order</Link>
                </div>
                {/* order Top right*/}
                <div className="space-y-2">
                    <h5>Total : ₹ {order?.total}</h5>
                    <AvatarCircles numPeople={imageUrls?.length} avatarUrls={imageUrls} />
                </div>
            </div>

        </div>
    );
};

const UserOrders = ({ user }: UserOrdersProps) => {
    const { isLoading: orderDataLoading, data: userOrderData } = useQuery({
        queryKey: ['userorders', user?.id],
        queryFn: async () => await getUserOrderProducts(user?.id),
    });

    const profileUserOrders: any = userOrderData?.data;

    return (
        <div className='flex flex-col gap-2'>
            {orderDataLoading ? (
                <div>Loading</div>
            ) : (
                profileUserOrders && profileUserOrders.length > 0 ? (
                    profileUserOrders.map((order: any) => (
                        <OrderProducts key={order?.id} order={order} />
                    ))
                ) : (
                    <p>No orders yet made</p>
                )
            )}
        </div>
    );
};

export default UserOrders;
