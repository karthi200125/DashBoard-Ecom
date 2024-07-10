'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import User from '../dashboard/users/User'
import UserProfile from './UserProfile'
import { Skeleton } from '@/components/ui/skeleton'
import Order from '../dashboard/orders/Order'
import Product from '../dashboard/products/Product'

interface TopListProps {
    title?: string,
    icon?: any,
    data?: any,
    route?: string,
}

const TopList = ({ data, title, icon, route }: TopListProps) => {

    const isLoading = false


    return (
        <div className='w-full h-full flex flex-col gap-2'>
            <div className='flex flex-col items-center justify-between '>
                <div className='flex flex-row items-center gap-2 border-b-[1px] border-solid border-neutral-200 py-2 w-full '>
                    <div>{icon}</div>
                    <h5 >{title}</h5>
                </div>
                <div className='flex flex-col w-full py-2 gap-2'>
                    {!isLoading ?
                        data?.length > 0 ?
                            data.slice(0, 8).map((data: any) => (
                                <Sheet key={data?.id}>
                                    <SheetTrigger>
                                        <div className='flex flex-row items-center gap-5 hover:borde rounded-[10px] hover: cursor-pointer overflow-hidden p-2 hover:bg-neutral-100'>
                                            <UserProfile proAlt={route === "products" ? data?.proName : data?.name} profileCls='w-12 h-12 bg-neutral-200 object-cover' proSrc={route === "products" ? data?.proImage[0] : data?.image} user={data} />
                                            <div className='flex items-start justify-start flex-col gap-1'>
                                                <h6 className='leading-none line-clamp-1 truncate'>{route === "products" ? data?.proName : data?.name}</h6>
                                                <p>{route === "products" ? `${data?.proPrice} Rs` : data?.email}</p>
                                            </div>
                                        </div>
                                    </SheetTrigger>
                                    <SheetContent className='bg-white'>
                                        {route === "products" ?
                                            <Product product={data} />
                                            :
                                            route === "orders" ?
                                                <Order />
                                                :
                                                <User user={data} />
                                        }
                                    </SheetContent>
                                </Sheet>
                            ))
                            :
                            <div className='w-full text-center'>
                                Not yet!
                            </div>
                        :
                        <div className='w-full flex flex-col mt-2 gap-2'>
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className='flex flex-row gap-2 items-center '>
                                    <Skeleton className='bg-neutral-200 rounded-full w-12 h-12' />
                                    <div className='space-y-2'>
                                        <Skeleton className='bg-neutral-200 w-[200px] h-[15px] rounded-full' />
                                        <Skeleton className='bg-neutral-200 w-[100px] h-[10px] rounded-full' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TopList