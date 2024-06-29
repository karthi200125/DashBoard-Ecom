import { Skeleton } from "@/components/ui/skeleton"

const BannerSkeleton = () => {
    return (
        <div className='flex flex-col md:flex-row h-screen w-full md:h-[600px] items-center justify-center gap-10 px-20 py-5'>
            <Skeleton className='bg-neutral-200 min-w-[300px] md:flex-1 h-[80%] md:h-[450px] relative rounded-[20px]'>
                <div className='absolute w-full h-[100px] bottom-[20px] left-0 px-2 md:px-5 py-3 flex flex-col gap-2'>
                    <Skeleton className='h-[30px] uppercase bg-neutral-300 rounded-full'></Skeleton>
                    <Skeleton className='h-[15px] w-full bg-neutral-300 rounded-full'></Skeleton>
                    <Skeleton className='h-[15px] w-full bg-neutral-300 rounded-full'></Skeleton>
                </div>
            </Skeleton>
            <div className='min-w-[300px] md:flex-1 h-[200px] md:h-[450px] flex flex-col gap-5'>
                <Skeleton className='rounded-[20px] bg-neutral-200 w-full h-full overflow-hidden' />
                <Skeleton className='rounded-[20px] bg-neutral-200 w-full h-full overflow-hidden' />
            </div>
        </div>
    )
}

export default BannerSkeleton