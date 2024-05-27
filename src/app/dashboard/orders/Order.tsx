import CustomBtn from '@/app/_components/CustomBtn'
import UserProfile from '@/app/_components/UserProfile'
import { ListOrdered } from 'lucide-react'


const Order = ({ orderData }: any) => {
    return (
        <div className='w-full h-full flex flex-col gap-4'>
            <h1 className='text-2xl font-bold w-full text-center py-5 border-b-[1px]'>Order details</h1>
            <div className='w-full flex flex-col gap-2'>
                <h2 className='flex items-center gap-2 flex-row font-bold'>Order Id : <span className='text-neutral-400 text-sm'>#{orderData?.orderId}</span></h2>
                <h2 className='flex items-center gap-2 flex-row font-bold'>CustomerId : <span className='text-neutral-400 text-sm'>#{orderData?.id}</span></h2>
                <h2 className='flex items-center gap-2 flex-row font-bold'>Customer Name : <span className='text-neutral-400 text-sm'>#{orderData?.customer}</span></h2>
                <h2 className='flex items-center gap-2 flex-row font-bold'>Address : <span className='text-neutral-400 text-sm'>#{orderData?.address}</span></h2>
                <h2 className='flex items-center gap-2 flex-row font-bold'>Phone Number : <span className='text-neutral-400 text-sm'>#{orderData?.orderId}</span></h2>
            </div>

            <div className=' flex flex-row items-center gap-5 border-b-[1px] py-5'>
                <CustomBtn arrow>
                    Cancel Order
                </CustomBtn>
                <CustomBtn arrow>
                    Edit Order
                </CustomBtn>
            </div>

            <div className='flex flex-col gap-5'>
                <div className="flex flex-row justify-between border py-3 px-2">
                    <div className="flex flex-row gap-2 items-center">
                        <ListOrdered />
                        <span>(10) Products</span>
                    </div>
                    <h1 className='text-md font-bold'>
                        Total : 1000 Rs
                    </h1>
                </div>
                <div className="flex flex-col gap-2">
                    {orderData?.products?.map((pro: any, i: number) => (
                        <div className='flex flex-row items-center justify-between' key={i} >
                            <UserProfile proAlt={pro?.productName} proSrc={pro?.productImage} profileCls='w-10 h-10 bg-neutral-200' />
                            <h2 className='w-[180px]'>products Name</h2>
                            <h3>1000 Rs</h3>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    )
}

export default Order