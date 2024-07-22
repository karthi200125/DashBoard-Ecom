'use client'

import CustomBtn from '@/app/_components/CustomBtn'
import DeleteOrderModel from '@/app/_components/Modal/DeleteOrderModel'
import UserProfile from '@/app/_components/UserProfile'
import useDeleteOrderModal from '@/app/hooks/useDeleteOrderModel'
import { ListOrdered } from 'lucide-react'
import { memo } from 'react'

interface OrderProps {
    orderData?: any;
    user?: any;
    products?: any;
}

const Order = ({ orderData, user, products }: OrderProps) => {

    const deleteOrderModal = useDeleteOrderModal();
   

    return (
        <div className='w-full h-full flex flex-col gap-4 overflow-y-auto'>
            <DeleteOrderModel order={orderData} />
            <h4 className='text-2xl font-bold w-full text-center py-5 border-b-[1px]'>Order details</h4>
            <div className='w-full flex flex-col gap-2'>
                <h6 className='flex items-center gap-2 flex-row'>Order Id : <span className='text-neutral-400 text-[10px]'>#{orderData?.id}</span></h6>
                <h6 className='flex items-center gap-2 flex-row'>CustomerId : <span className='text-neutral-400 text-[10px]'>#{orderData?.userId}</span></h6>
                <h6 className='flex items-center gap-2 flex-row'>Customer Name : <span className='text-neutral-400 text-[10px]'>{user?.name}</span></h6>
                <h6 className='flex items-center gap-2 flex-row'>Address : <span className='text-neutral-400 text-[10px]'>#{user?.address}</span></h6>
                <h6 className='flex items-center gap-2 flex-row'>Phone Number : <span className='text-neutral-400 text-[10px]'>#{user?.phoneNo}</span></h6>
            </div>

            <div className=' flex flex-row items-center gap-5 border-b-[1px] py-5 justify-center'>
                <CustomBtn arrow btnCls='border text-[10px]' onClick={deleteOrderModal.onOpen}>
                    Cancel
                </CustomBtn>
                <CustomBtn arrow btnCls='border text-[10px]'>
                    Comfirm
                </CustomBtn>
            </div>

            <div className='flex flex-col gap-5'>
                <div className="flex flex-row justify-between border py-3 px-2">
                    <div className="flex flex-row gap-2 items-center">
                        <ListOrdered />
                        <h5>({products?.length || 0}) Products</h5>
                    </div>
                    <h6>
                        Total : {orderData?.total} Rs
                    </h6>
                </div>
                <div className="flex flex-col gap-2">
                    {products?.map((pro: any) => (
                        <div className='flex flex-row items-center justify-between border p-1 rounded-[10px]' key={pro?.id} >
                            <UserProfile proAlt={pro?.proName} proSrc={pro?.proImage[0]} profileCls='w-10 h-10 bg-neutral-200' />
                            <h6 className='w-[180px] line-clamp-1 truncate'>{pro?.proName}</h6>
                            <p>{pro?.proPrice} Rs</p>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    )
}

export default memo(Order)