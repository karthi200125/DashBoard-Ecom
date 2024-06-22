import { Skeleton } from "@/components/ui/skeleton"
import { FaHeart } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";

export const ProfilePageSkeleton = () => {
    return (
        <div className='w-full py-5 max-h-max flex flex-col gap-5'>

            <div className='py-5 border-b'>
                <Skeleton className='h-[100px] mb-3 w-full md:w-[400px] bg-neutral-200 rounded-[20px]' />
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-3'>
                        <Skeleton className='w-[60px] h-[60px] rounded-full bg-neutral-200' />
                        <div className="flex flex-col gap-3">
                            <Skeleton className="w-[300px] h-[15px] rounded-full bg-neutral-200" />
                            <Skeleton className="w-[100px] h-[15px] rounded-full bg-neutral-200" />
                        </div>
                    </div>
                    <Skeleton className='mt-3 md:mt-0 w-[200px] h-[60px] rounded-full bg-neutral-200'>

                    </Skeleton>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>
                <div className='flex-1 p-5 bg-neutral-100 rounded-[10px] flex flex-col gap-3 h-[200px]'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row gap-2 items-center font-bold'>
                            <FaHeart size={20} className="text-neutral-200" />
                            <Skeleton className="h-[15px] rounded-full bg-neutral-200 w-[150px]" />
                        </div>
                        <Skeleton className='border w-[100px] rounded-full h-[30px] md:h-[40px] px-3 md:px-5 bg-neutral-200' />
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <Skeleton className="h-[100px] w-[100px] rounded-[10px] bg-neutral-300" />
                        <Skeleton className="h-[100px] w-[100px] rounded-[10px] bg-neutral-300" />
                        <Skeleton className="h-[100px] w-[100px] rounded-[10px] bg-neutral-300" />
                        <Skeleton className="h-[100px] w-[100px] rounded-[10px] bg-neutral-300" />
                    </div>
                </div>

                <div className='flex-1 p-5 bg-neutral-100 rounded-[10px] flex flex-col gap-3 h-[200px] justify-start'>
                    <div className='flex flex-row items-center gap-2 font-bold'>
                        <FaLocationPin size={20} className="text-neutral-200" />
                        <Skeleton className="h-[15px] rounded-full bg-neutral-200 w-[150px]" />
                    </div>
                    <div className='p-2 flex flex-col gap-2'>
                        <Skeleton className='h-[10px] rounded-full w-[200px] bg-neutral-200' />
                        <Skeleton className='h-[10px] rounded-full w-[180px] bg-neutral-200' />
                        <Skeleton className='h-[10px] rounded-full w-[150px] bg-neutral-200' />
                        <Skeleton className='h-[10px] rounded-full w-[100px] bg-neutral-200' />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <Skeleton className="h-[20px] w-[150px] bg-neutral-200 rounded-full"/>
                <Skeleton className="h-[20px] w-[250px] bg-neutral-200 rounded-full"/>
            </div>

        </div>
    )
}

