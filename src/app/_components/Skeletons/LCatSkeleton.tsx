import { Skeleton } from "@/components/ui/skeleton"

const LCatSkeleton = () => {
    return (
        <div className='relative py-5 md:h-[600px] bg-neutral-200 w-[98%] mx-auto rounded-[20px] flex flex-col items-center justify-center gap-10'>
            <div className='flex flex-col justify-center gap-2 items-center'>
                <Skeleton className='w-[200px] h-[20px] rounded-full bg-neutral-300' />
                <Skeleton className='w-[300px] md:w-[500px] rounded-full h-[30px] mt-1 bg-neutral-300' />
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between md:gap-5 w-full md:w-[95%] lg:w-[70%] h-[860px] md:h-[60%]'>
                <div className='min-w-[300px] md:min-w-[30%] lg:flex-1 md:h-full flex flex-col gap-3 items-center justify-center'>
                    <Skeleton className='bg-gradient-to-r from-[#686e74] to-[#222222] transition duration-500 rounded-[20px] w-full h-full relative flex items-center justify-center overflow-hidden'>
                        <div className='transition duration-500 transform flex flex-row items-center gap-3 absolute'>
                            <Skeleton className="w-[30px] h-[30px] rounded-full bg-neutral-300" />
                            <Skeleton className="w-[30px] h-[30px] rounded-full bg-neutral-300" />
                        </div>
                    </Skeleton>
                    <div className='w-full flex justify-center items-center flex-col gap-2'>
                        <Skeleton className='uppercase bg-neutral-300 w-full h-[20px] rounded-full' />
                        <Skeleton className='w-[150px] h-[15px] rounded-full bg-neutral-300' />
                    </div>
                </div>

                <div className='min-w-[300px] md:min-w-[30%] lg:flex-1 md:h-full flex flex-col gap-3 items-center justify-center'>
                    <Skeleton className='bg-gradient-to-r from-[#686e74] to-[#222222] transition duration-500 rounded-[20px] w-full h-full relative flex items-center justify-center overflow-hidden'>
                        <div className='transition duration-500 transform flex flex-row items-center gap-3 absolute'>
                            <Skeleton className="w-[30px] h-[30px] rounded-full bg-neutral-300" />
                            <Skeleton className="w-[30px] h-[30px] rounded-full bg-neutral-300" />
                        </div>
                    </Skeleton>
                    <div className='w-full flex justify-center items-center flex-col gap-2'>
                        <Skeleton className='uppercase bg-neutral-300 w-full h-[20px] rounded-full' />
                        <Skeleton className='w-[150px] h-[15px] rounded-full bg-neutral-300' />
                    </div>
                </div>

                <div className='min-w-[300px] md:min-w-[30%] lg:flex-1 md:h-full flex flex-col gap-3 items-center justify-center'>
                    <Skeleton className='bg-gradient-to-r from-[#686e74] to-[#222222] transition duration-500 rounded-[20px] w-full h-full relative flex items-center justify-center overflow-hidden'>
                        <div className='transition duration-500 transform flex flex-row items-center gap-3 absolute'>
                            <Skeleton className="w-[30px] h-[30px] rounded-full bg-neutral-300" />
                            <Skeleton className="w-[30px] h-[30px] rounded-full bg-neutral-300" />
                        </div>
                    </Skeleton>
                    <div className='w-full flex justify-center flex-col gap-2 items-center'>
                        <Skeleton className='uppercase bg-neutral-300 w-full h-[20px] rounded-full' />
                        <Skeleton className='w-[150px] h-[15px] rounded-full bg-neutral-300' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LCatSkeleton
