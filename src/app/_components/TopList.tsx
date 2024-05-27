'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import User from './User'
import UserProfile from './UserProfile'
import { Skeleton } from '@/components/ui/skeleton'

interface TopListProps {
    title?: string,
    icon?: any,
    data?: any
}

const TopList = ({ data, title, icon }: TopListProps) => {

    const isLoading = false

    return (
        <div className='w-full h-full flex flex-col gap-2'>
            <div className='flex flex-col items-center justify-between '>
                <div className='flex flex-row items-center gap-2 border-b-[1px] border-solid border-neutral-200 py-2 w-full '>
                    <div>{icon}</div>
                    <h1 className='font-bold'>{title}</h1>
                </div>
                <div className='flex flex-col w-full py-2 gap-2'>
                    {!isLoading ?
                        data?.length > 0 ?
                            data.map((data: any) => (
                                <Sheet>
                                    <SheetTrigger>
                                        <div className='flex flex-row items-center gap-2 hover:borde rounded-[10px] hover: cursor-pointer overflow-hidden p-2'>
                                            <UserProfile proAlt={data?.name} profileCls='w-12 h-12 bg-neutral-200' proSrc={data?.profilepic} />
                                            <div className='flex items-start justify-start flex-col'>
                                                <h1 className='text-md leading-none'>{data?.name}</h1>
                                                <span className='text-neutral-400 text-sm'>{data?.email}</span>
                                            </div>
                                        </div>
                                    </SheetTrigger>
                                    <SheetContent className='bg-white'>
                                        <User user={data} />
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