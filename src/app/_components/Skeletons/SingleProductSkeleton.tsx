import { Skeleton } from "@/components/ui/skeleton"
import { FaStar } from "react-icons/fa"
import { IoMdHeart } from "react-icons/io"

const SingleProductSkeleton = () => {

    const stars = Array(5).fill(0);
    return (
        <div className='px-2 md:px-0 py-5 w-full max-h-max flex flex-col gap-10'>

            <div className='flex flex-col md:flex-row items-start justify-center gap-20 py-10 border-b max-h-[250px]'>
                <div className="w-full md:flex-1 flex flex-col gap-3">
                    <Skeleton className="w-full h-[60px] rounded-[20px] bg-neutral-200" />
                    <Skeleton className="hidden md:flex w-full h-[60px] rounded-[20px] bg-neutral-200" />
                </div>
                <div className='w-full md:flex-1 text-[15px] flex flex-col gap-3'>
                    <Skeleton className="w-full h-[15px] rounded-full bg-neutral-200" />
                    <Skeleton className="w-full h-[15px] rounded-full bg-neutral-200" />
                    <Skeleton className="w-full h-[15px] rounded-full bg-neutral-200" />
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center gap-5 lg:gap-10 md:h-[600px] overflow-hidden'>
                <div className='w-full md:flex-1 h-[500px] md:h-full flex flex-col md:flex-row gap-5'>
                    <div className='w-full lg:w-[20%] h-[80px] lg:h-full flex flex-row lg:flex-col justify-between gap-3'>
                        <Skeleton className="w-full h-full rounded-[10px] bg-neutral-200" />
                        <Skeleton className="w-full h-full rounded-[10px] bg-neutral-200" />
                        <Skeleton className="w-full h-full rounded-[10px] bg-neutral-200" />
                        <Skeleton className="w-full h-full rounded-[10px] bg-neutral-200" />
                    </div>
                    <Skeleton className="w-full md:w-[80%] h-[600px] rounded-[20px] bg-neutral-200" />
                </div>

                <div className='w-full md:flex-1 h-full'>
                    <div className='w-full h-full p-2 md:p-5 flex flex-col gap-5 marker:d:gap-3 lg:gap-8'>
                        <div className='flex flex-row items-center justify-between'>
                            <Skeleton className='border bg-neutral-200 h-[50px] w-[200px] rounded-full' />
                            <div className='w-[40px] h-[40px] rounded-full bg-neutral-300 flex items-center justify-center'>
                                <IoMdHeart className="text-neutral-400" size={20} />
                            </div>
                        </div>

                        <Skeleton className='h-[30px] bg-neutral-200 w-[150px] rounded-full' />

                        <div className='flex flex-col gap-3'>
                            <Skeleton className='h-[20px] bg-neutral-200 w-[100px] rounded-full' />
                            <div className="flex flex-row items-center gap-3">
                                <Skeleton className='h-[25px] w-[25px] bg-neutral-200 rounded-full' />
                                <Skeleton className='h-[25px] w-[25px] bg-neutral-200 rounded-full' />
                                <Skeleton className='h-[25px] w-[25px] bg-neutral-200 rounded-full' />
                                <Skeleton className='h-[25px] w-[25px] bg-neutral-200 rounded-full' />
                                <Skeleton className='h-[25px] w-[25px] bg-neutral-200 rounded-full' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <Skeleton className='h-[20px] bg-neutral-200 w-[100px] rounded-full' />
                            <div className="flex flex-row items-center gap-3">
                                <Skeleton className='h-[60px] w-[60px] bg-neutral-200 rounded-[10px]' />
                                <Skeleton className='h-[60px] w-[60px] bg-neutral-200 rounded-[10px]' />
                                <Skeleton className='h-[60px] w-[60px] bg-neutral-200 rounded-[10px]' />
                                <Skeleton className='h-[60px] w-[60px] bg-neutral-200 rounded-[10px]' />
                                <Skeleton className='h-[60px] w-[60px] bg-neutral-200 rounded-[10px]' />
                            </div>
                        </div>

                        <div className="flex items-center flex-row gap-1">
                            {stars.map((_, index) =>
                                <FaStar key={index} className="text-neutral-300" />
                            )}
                        </div>

                        <div className='flex flex-row items-center gap-5'>
                            <Skeleton className="w-[150px] h-[50px] rounded-full bg-neutral-200" />
                            <Skeleton className="w-[250px] h-[50px] rounded-full bg-neutral-200" />
                        </div>
                    </div >
                </div>
            </div>

        </div >
    )
}

export default SingleProductSkeleton