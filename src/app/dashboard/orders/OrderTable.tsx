'use client'

import AvatarCircles from '@/app/_components/AvatarCircles'
import CustomPagination from '@/app/_components/CustomPagination'
import { formatDate } from '@/app/hooks/MomentDate'
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'
import { FaUsers } from "react-icons/fa"
import { IoIosMore } from "react-icons/io"
import { getAllOrders } from '../../../../actions/order'
import { getOrderProducts } from '../../../../actions/product'
import { getUserById } from '../../../../actions/users'
import Order from './Order'

const OrderTable = () => {
    const { data } = useQuery({
        queryKey: ['getallorders'],
        queryFn: async () => await getAllOrders(),
    });

    const orderdata = data?.data;
    const isLoading = false;

    return (
        <div className={`w-full ${isLoading ? "h-[800px]" : "min-h-[300px]"}`}>

            {/* table top */}
            <div className="flex flex-row items-center justify-between">
                <h5 className='font-bold flex flex-row items-center gap-2 '>
                    <FaUsers size={20} />
                    <span>Orders</span>
                    <span>{`(${orderdata?.length})`}</span>
                </h5>
            </div>

            {/* table */}
            <table className='min-w-full divide-y divide-gray-200 mt-5 relative'>
                <thead className="bg-[var(--gray)] text-black">
                    <tr>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">OrderId</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Product</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Customer</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Address</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Price</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Action</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {isLoading ? (
                        <div className='w-full absolute flex flex-col gap-1 mt-2'>
                            {[...Array(10)].map((_, index) => (
                                <Skeleton key={index} className='w-full bg-neutral-200 h-[60px]' />
                            ))}
                        </div>
                    ) : orderdata && orderdata.length > 0 ? (
                        orderdata.map((order) => (
                            <OrderShow order={order} key={order.id} />
                        ))
                    ) : (
                        <div className='w-full h-full'>No Orders Yet</div>
                    )}
                </tbody>
            </table>

            {/* Table bottom */}
            <div className='flex flex-row w-full justify-end border-t-[1px] border-solid border-neutral-200 py-3'>
                <CustomPagination count={1} />
            </div>
        </div>
    );
};

export default OrderTable;

export const OrderShow = ({ order }: any) => {
    const { data: userData } = useQuery({
        queryKey: ['getuser', order?.userId],
        queryFn: async () => await getUserById(order?.userId),
    });

    const user = userData;

    const { data: userOrderProductData } = useQuery({
        queryKey: ['orderproducts', order?.productsIds],
        queryFn: async () => await getOrderProducts(order?.productsIds),
    });

    const imageUrls = userOrderProductData?.data?.map((pro) => pro?.proImage[0]) || [];

    return (
        <tr>
            <td className="px-3 py-4 text-[10px] whitespace-nowrap">{order?.id}</td>
            <td className="px-6 py-4 text-[10px] whitespace-nowrap">
                <AvatarCircles numPeople={imageUrls?.length} avatarUrls={imageUrls} />
            </td>
            <td className="px-6 py-4 text-[10px] whitespace-nowrap">{user?.name}</td>
            <td className="px-6 py-4 text-[10px] whitespace-nowrap">{user?.address}</td>
            <td className="px-6 py-4 text-[10px] whitespace-nowrap">{formatDate(order?.createdAt)}</td>
            <td className="px-6 py-4 text-[10px] whitespace-nowrap">₹ {order?.total}</td>
            <td className="px-6 py-4 text-[10px] whitespace-nowrap">
                <div className={`text-[10px] h-[30px] px-3 max-w-max rounded-xl flex items-center justify-center ${order?.status === "pending" ? "bg-orange-50 text-orange-500" : "bg-green-50 text-green-500"}`}>
                    {order?.status === "pending" ? "Pending" : "Delivered"}
                </div>
            </td>
            <td className="px-6 py-4 text-[10px] whitespace-nowrap">
                <Sheet>
                    <SheetTrigger>
                        <IoIosMore size={20} />
                    </SheetTrigger>
                    <SheetContent className='bg-white'>
                        <Order orderData={order} user={user} products={userOrderProductData?.data} />
                    </SheetContent>
                </Sheet>
            </td>
        </tr>
    );
};
