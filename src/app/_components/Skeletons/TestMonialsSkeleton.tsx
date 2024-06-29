'use client'

import { Skeleton } from "@/components/ui/skeleton"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";

const TestimonialsSkeleton = () => {
    return (
        <Skeleton className="sticky_01_panel w-full max-h-max rounded-[30px] pt-5 flex items-center justify-center flex-col gap-5 bg-neutral-200">
            <div className='flex flex-col justify-center gap-2 items-center'>
                <Skeleton className='w-[200px] h-[20px] rounded-full bg-neutral-300' />
                <Skeleton className='w-[300px] md:w-[500px] rounded-full h-[30px] mt-1 bg-neutral-300' />
            </div>
            <Carousel className="w-full">
                <CarouselContent className="flex flex-row gap-2">
                    {Array(4).fill(0).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4 h-[500px] p-5 flex flex-col justify-between bg-neutral-300 rounded-[20px]">
                            <div className="w-full h-[88%] relative rounded-[30px] overflow-hidden flex items-center justify-center">
                                <Skeleton className="absolute top-3 left-3 px-5 w-[130px] rounded-full h-[40px] bg-neutral-400 " />
                                <Skeleton className="absolute bottom-5 right-5 w-[80px] h-[80px] rounded-full bg-neutral-400" />
                            </div>

                            <div className="w-full h-[10%] flex items-center justify-start flex-col gap-2">
                                <Skeleton className="w-full h-[20px] bg-neutral-400 rounded-full" />
                                <Skeleton className="w-[180px] h-[15px] bg-neutral-400 rounded-full" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Skeleton>
    )
}

export default TestimonialsSkeleton
