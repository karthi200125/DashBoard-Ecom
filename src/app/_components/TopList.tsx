'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import User from './User'
import UserProfile from './UserProfile'

interface TopListProps {
    title?: string,
    icon?: any,
    data?: any
}

const TopList = ({ data, title, icon }: TopListProps) => {

    console.log(data)

    return (
        <div className='w-full h-full flex flex-col gap-2'>
            <div className='flex flex-col items-center justify-between '>
                <div className='flex flex-row items-center gap-2 border-b-[1px] border-solid border-neutral-200 py-2 w-full '>
                    <div>{icon}</div>
                    <h1 className='font-bold'>{title}</h1>
                </div>
                <div className='flex flex-col w-full py-2 gap-2'>
                    {data?.length > 0 ?
                        data.map((data: any) => (
                            <Sheet>
                                <SheetTrigger>
                                    <div className='flex flex-row items-center gap-2 hover:borde rounded-[10px] hover:shadow-lg cursor-pointer overflow-hidden p-2'>
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
                    }
                </div>
            </div>
        </div>
    )
}

export default TopList