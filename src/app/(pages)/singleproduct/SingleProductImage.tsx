'use client';
import Image from '@/components/ui/CustomImage';
import { useEffect, useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const SingleProductImage = ({ product }: string[]) => {
    const images = product?.proImage;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images?.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images?.length) % images?.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length);
    };

    return (
        <div className="w-full relative h-full overflow-hidden flex flex-col lg:flex-row gap-3 items-center">

            {/* min images */}
            <div className='w-full lg:w-[200px] h-[80px] lg:h-full flex flex-row lg:flex-col justify-between gap-3'>
                {images?.map((src: string, index: any) => (
                    <div
                        key={index}
                        className={`${index === currentIndex ? "bg-neutral-200" : "border"} w-full h-full rounded-[10px] overflow-hidden p-2`}
                        data-carousel-item
                    >
                        <Image src={src} imgclass={`w-full h-full object-contain rounded-[10px]`} alt='' />
                    </div>
                ))}
            </div>

            {/* main image slide */}
            <div id="default-carousel" className="relative w-full h-[400px] lg:h-full rounded-[20px] overflow-hidden" data-carousel="slide">

                {/*images */}
                <div className="relative h-full overflow-hidden bg-neutral-200">
                    {images?.map((src: string, index: any) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            data-carousel-item
                        >
                            <Image src={src} imgclass="absolute block w-[90%] left-1/2 transform -translate-x-1/2 h-full object-contain bg-neutral-200" alt='' />
                        </div>
                    ))}
                </div>

                {/* dots */}
                <div className="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {images?.map((_, index: any) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-black'}`}
                            aria-current={index === currentIndex ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setCurrentIndex(index)}
                            data-carousel-slide-to={index}
                        />
                    ))}
                </div>

                {/* buttons */}
                <div className='flex flex-row items-center gap-3 absolute top-5 right-5'>
                    <button
                        type="button"
                        className="z-10 flex items-center justify-center rounded-full w-[40px] h-[40px] bg-white hover:bg-black hover:text-white cursor-pointer group focus:outline-none transition duration-300"
                        onClick={handlePrev}
                    >
                        <BsArrowLeftShort size={30} />
                    </button>
                    <button
                        type="button"
                        className="z-10 flex items-center justify-center rounded-full w-[40px] h-[40px] bg-white hover:bg-black hover:text-white cursor-pointer group focus:outline-none transition duration-300"
                        onClick={handleNext}
                    >
                        <BsArrowRightShort size={30} />
                    </button>
                </div>

                {/* image show contents */}
                <div className='absolute top-0 left-0 w-full h-full p-5'>
                    <div className='w-[60px] h-[40px] rounded-full bg-white font-bold flex items-center justify-center'>70%</div>
                </div>

            </div>

        </div>
    );
};

export default SingleProductImage;
