'use client'

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation'
import { getOrder } from '../../../../../actions/order';
import { formatDate } from '@/app/hooks/MomentDate';
import { getOrderProducts } from '../../../../../actions/product';
import CustomImage from '../../../../components/ui/CustomImage'
import Spinners from '@/app/_components/Spinners';
import { MdOutlinePersonOutline } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { LiaCitySolid } from "react-icons/lia";
import { TbBuildingEstate } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";

const OrderPage = () => {

    const params = useParams();
    const orderId = params?.id.toString()

    const { data } = useQuery({
        queryKey: ['order', orderId],
        queryFn: async () => await getOrder(orderId),
    });

    const order: any = data?.data

    const { data: OrderProducts, isPending: orderProductsLoading } = useQuery({
        queryKey: ['orderproducts', order?.productsIds],
        queryFn: async () => await getOrderProducts(order?.productsIds),
    });

    const user: any = useCurrentUser()
    
    const subtotal = 1000
    const estimatedShipping = 0
    const discount = 10

    return (
        <div className="w-full min-h-screen space-y-5 px-[16px] md:p-[24px] lg:p-[32px]">

            {/* order top content */}
            <div className="space-y-2">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
                    <h5>Order Id : {orderId}</h5>
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
            </div>


            <div className='flex flex-col lg:flex-row items-start gap-10'>

                <div className='w-full lg:w-[70%] max-h-max py-5 space-y-10'>
                    {/* order items */}
                    <div className='border rounded-[10px] md:rounded-[30px] max-h-max p-2 md:p-5 space-y-5'>
                        <h5>Order items</h5>

                        {orderProductsLoading ?
                            <div>
                                <Spinners />
                            </div>
                            :
                            OrderProducts?.data?.map((pro: any) => (
                                <div
                                    className='flex flex-col md:flex-row items-start gap-5 justify-between max-h-max md:h-[120px] rounded-[10px] border md:rounded-[20px] p-3 overflow-hidden'
                                    key={pro.id}
                                >
                                    {/* itemleft side image and data */}
                                    <div className="flex flex-row items-start gap-3">
                                        <CustomImage
                                            src={pro?.proImage[0]}
                                            alt={pro?.proName}
                                            imgclass=' w-[100px] h-[100px] rounded-xl bg-neutral-200 objcet-contain'
                                        />
                                        <div className='flex flex-col space-y-1 justify-between'>
                                            <h6 className='line-clamp-1'>{pro?.proName}</h6>
                                            <h6 className="flex flex-row items-center gap-3">
                                                Size :
                                                <p>M</p>
                                            </h6>
                                            <h6 className="flex flex-row items-center gap-3">
                                                Color :
                                                <p>white</p>
                                            </h6>
                                            <h6 className="flex flex-row items-center gap-3">
                                                Discount :
                                                <p>{pro?.proOffer} %</p>
                                            </h6>
                                        </div>
                                    </div>
                                    {/* itemleft right*/}
                                    <div className="flex flex-row md:flex-col gap-3">
                                        <div className='text-[12px] border rounded-xl px-3 h-[40px] flex items-center justify-center'>
                                            3 x ₹ {pro?.proPrice}
                                        </div>
                                        <div className='text-[12px] border rounded-xl px-3 h-[40px] flex items-center justify-center bg-black text-white'>
                                            ₹ {3 * pro?.proPrice}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* order summary */}
                    <div className='border rounded-[10px] md:rounded-[30px] max-h-max p-5 space-y-5'>
                        <h5 className='border-b-[1px] pb-2'>Order Summary</h5>
                        <h6 className="w-full flex flex-row items-center justify-between">
                            Subtotal
                            <p>₹ {subtotal?.toFixed(2)}</p>
                        </h6>
                        <h6 className="w-full flex flex-row items-center justify-between">
                            Estimated Shipping
                            <p>₹ {estimatedShipping.toFixed(2)}</p>
                        </h6>
                        <h6 className="w-full flex flex-row items-center justify-between">
                            Discount
                            <p>- ₹ {discount.toFixed(2)}</p>
                        </h6>

                        <div className='flex flex-row justify-between items-center bg-black text-white rounded-md px-3 h-[40px]'>
                            <h5 >Order Total</h5>
                            <span className='text-md font-bold'>₹{order?.total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>



                {/* cistomer details */}
                <div className='w-full lg:w-[30%] min-h-[100px] space-y-5'>
                    <div className='w-full border rounded-[20px] p-5 space-y-3'>
                        <h5>Customer</h5>
                        <h6 className="flex flex-row items-center gap-2 text-neutral-400">
                            <MdOutlinePersonOutline size={20} className='text-black' />
                            {user?.name}
                        </h6>
                        <h6 className="flex flex-row items-center gap-2 text-neutral-400">
                            <FiShoppingBag size={20} className='text-black' />
                            order 1
                        </h6>
                    </div>
                    <div className='w-full border rounded-[20px] p-5 space-y-3'>
                        <h5>Contact information</h5>
                        <h6 className="flex flex-row items-center gap-2 text-neutral-400">
                            <MdOutlineEmail size={20} className='text-black' />
                            {user?.email}
                        </h6>
                        <h6 className="flex flex-row items-center gap-2 text-neutral-400">
                            <MdOutlineLocalPhone size={20} className='text-black' />
                            {user?.phoneNo}
                        </h6>
                    </div>
                    <div className='w-full border rounded-[20px] p-5 space-y-3'>
                        <h5>Shipping address</h5>
                        <h6 className="flex flex-row items-center gap-2 text-neutral-400">
                            <FaRegAddressCard size={20} className='text-black' />
                            {user?.address}
                        </h6>
                        <h6 className="flex flex-row items-center gap-2 text-neutral-400">
                            <LiaCitySolid size={20} className='text-black' />
                            {user?.city} - {user?.postalCode}
                        </h6>
                        <h6 className="flex flex-row items-center gap-2 text-neutral-400">
                            <TbBuildingEstate size={20} className='text-black' />
                            {user?.state}
                        </h6>
                        <h6 className="flex flex-row items-center gap-2 text-neutral-400">
                            <GiWorld size={20} className='text-black' />
                            INIDA 
                        </h6>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default OrderPage