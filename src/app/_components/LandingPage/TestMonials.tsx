'use client'

import CustomImage from "@/components/ui/CustomImage";
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import { Testimonials } from "../dummydata";
import { useEffect } from 'react'

export const TestMonials = ({ onLoad }: any) => {

    useEffect(() => {
        onLoad && onLoad('TestMonials');
    }, []);

    return (
        <div className="w-full max-h-max rounded-[30px] pt-5 flex items-center justify-center flex-col gap-5 text-white bg-black">
            <h1>What Customer says</h1>
            <Carousel className="w-full">
                <CarouselContent className="flex flex-row">
                    {Testimonials.map((t) => (
                        <CarouselItem key={t?.id} className={`pl-1 md:basis-1/2 lg:basis-1/4 h-[500px] p-5 flex flex-col justify-between ${t?.marginTop && "mt-10"}`}>
                            <div className="w-full h-[88%] relative rounded-[30px] overflow-hidden flex items-center justify-center group">
                                <div className="absolute top-3 left-3 px-5 rounded-full h-[40px] text-sm font-bold bg-white text-black flex items-center justify-center z-10">
                                    explore
                                </div>
                                <CustomImage src={t?.image?.src} imgclass="absolute w-full h-full bg-neutral-200 left-0 top-0 object-cover" />
                                <div className="absolute bottom-5 right-5 w-[80px] h-[80px] rounded-full bg-white text-black flex items-center justify-center text-sm font-bold cursor-pointer">
                                    see
                                </div>
                                <div className="bg-white text-black rounded-full transform scale-0 w-full h-[150%] absolute transition duration-500 ease-out group-hover:scale-100 flex items-center justify-center z-20">
                                    <p className="w-[200px] h-[300px] font-bold flex items-center justify-center text-center">
                                        {t?.feedback}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-[10%]">
                                <h3>{t?.name}</h3>
                                <p>{t?.pro}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </div>
    )
}

export default TestMonials;
