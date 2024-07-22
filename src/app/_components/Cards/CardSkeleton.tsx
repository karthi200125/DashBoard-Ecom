'use client'

import { Skeleton } from '@/components/ui/skeleton';
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

const CardSkeleton = () => {

    const stars = Array(5).fill(0);

    return (
        <div className='w-full md:min-w-[300px] rounded-[20px] md:rounded-[30px] max-h-max md:h-[500px] overflow-hidden bg-neutral-100 relative'>
            <Skeleton className='absolute bg-neutral-300 w-[40px] h-[40px] top-3 right-3 rounded-full flex items-center justify-center'>
                <IoMdHeart className="text-neutral-400" size={20} />
            </Skeleton>
            <Skeleton className='absolute bg-neutral-300 w-[50px] sm:w-[60px] h-[35px] top-3 left-3 rounded-full flex items-center justify-center'></Skeleton>
            <Skeleton className='h-[200px] md:h-[280px] w-full bg-neutral-300' />
            <div className='max-h-max sm:h-[220px] flex flex-col justify-between p-5 gap-2'>
                <Skeleton className='h-[15px] rounded-full w-full bg-neutral-300' />
                <Skeleton className='hidden sm:block h-[10px] rounded-full w-[90%] bg-neutral-300' />
                <Skeleton className='hidden sm:block h-[10px] rounded-full w-[80%] bg-neutral-300' />
                <Skeleton className='hidden sm:block h-[10px] rounded-full w-[70%] bg-neutral-300' />

                <Skeleton className='h-[40px] rounded-full w-full  flex flex-col sm:flex-row gap-3 items-center justify-between' >
                    {/* rating */}
                    <div className="flex items-center flex-row gap-1">
                        {stars.map((_, index) =>
                            <FaStar key={index} className="text-neutral-300" />
                        )}
                    </div>

                    <Skeleton className='h-[15px] rounded-full w-[60%] sm:w-[40%] bg-neutral-300' />
                </Skeleton>

                <div className='hidden sm:flex flex-row justify-between'>
                    <Skeleton className='w-[50px] h-[50px] rounded-full  bg-neutral-300' />
                    <Skeleton className=' max-w-max h-[50px] rounded-full bg-neutral-300 flex flex-row items-center gap-3 justify-center pl-5 pr-2' >
                        <Skeleton className='h-[15px] rounded-full w-[80px] bg-neutral-400' />
                        <Skeleton className='w-[40px] h-[40px] rounded-full bg-neutral-400' />
                    </Skeleton>
                </div>
            </div>
        </div>
    )
}

export default CardSkeleton