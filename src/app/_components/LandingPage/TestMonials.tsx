'use client'

import LetterAnimation from "@/app/Animations/LetterAnimation";
import CustomImage from "@/components/ui/CustomImage";
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cardsSlipUpOneByOne } from "../Cards/Cards";
import { Testimonialsdata } from "../dummydata";
import { useEffect } from 'react'


export const Testimonials = ({ onLoaded }: any) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        onLoaded();
    }, []);

    return (
        <div ref={ref} className="sticky_01_panel w-full max-h-max md:rounded-[30px] pt-5 flex items-center justify-center flex-col gap-5 text-white bg-black">
            <div className='text-center'>
                <h5 className='text-neutral-600'>
                    <LetterAnimation title="Our customers" />
                </h5>
                <h2 className='mt-1'>
                    <LetterAnimation title="what Customers say" />
                </h2>
            </div>
            <Carousel className="w-full">
                <CarouselContent className="flex flex-row">
                    {Testimonialsdata.map((t, i) => (
                        <CarouselItem
                            key={i}
                            // variants={cardsSlipUpOneByOne}
                            // animate={inView ? "enter" : "exit"}
                            // initial="initial"
                            // custom={i}
                            className={`pl-1 md:basis-1/2 lg:basis-1/4 h-[500px] p-5 flex flex-col justify-between ${t?.marginTop && "mt-10"}`}>
                            <div className="w-full h-[88%] relative rounded-[30px] overflow-hidden flex items-center justify-center group">
                                <div className="absolute top-3 left-3 px-5 rounded-full h-[40px] text-sm font-bold bg-white text-black flex items-center justify-center z-10">
                                    <LetterAnimation title="explore" />
                                </div>
                                <CustomImage
                                    src={t?.image?.src}
                                    imgclass="absolute w-full h-full bg-neutral-200 left-0 top-0 object-cover"
                                />
                                <div className="absolute bottom-5 right-5 w-[80px] h-[80px] rounded-full bg-white text-black flex items-center justify-center text-sm font-bold cursor-pointer">
                                    <LetterAnimation title="see" />
                                </div>
                                <div className="bg-white text-black md:rounded-full transform scale-0 w-full h-[150%] absolute transition duration-500 ease-out group-hover:scale-100 flex items-center justify-center z-20">
                                    <p className="w-[200px] h-[300px] font-bold flex items-center justify-center text-center">
                                        <LetterAnimation title={t?.feedback} />
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-[10%] flex items-center justify-center flex-col">
                                <h5><LetterAnimation title={t?.name} /></h5>
                                <p><LetterAnimation title={t?.pro} /></p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Testimonials;
