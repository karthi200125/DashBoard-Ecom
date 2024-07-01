'use client'
import Image from '@/components/ui/CustomImage';
import { motion } from 'framer-motion';
import LetterAnimation from '../Animations/LetterAnimation';
import { perspective } from '../Animations/animate';
import SocialIcons from './LandingPage/SocialIcons';
import { Aboutus, Help, OnlineShpping } from './dummydata';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'

const Footer = () => {
    const slideUp = {
        initial: {
            y: "-100%"
        },
        open: {
            y: "0%",
            transition: { duration: 0.7 }
        }
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
    }, [inView]);

    
    const word = "DEXON";

    return (
        <div ref={ref} className='w-full max-h-max flex flex-col justify-between mt-5'>
            <div className='h-[300px] relative'>
                <Image src={''} imgclass='w-full h-full brightness-[0.5]' alt='' />
                <div className='absolute bottom-0 left-0 w-full max-h-max text-[50px] md:text-[100px] xl:text-[150px] font-bold text-center text-white bg-black overflow-hidden'>
                    {word.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={slideUp}
                            initial="initial"
                            animate={{ y: "0%", transition: { duration: 0.7, delay: 0.1 * index } }}
                            className='myCustomClass'
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* items */}
            <div className='max-h-max bg-[#222222] flex flex-col md:flex-row gap-10 p-5 md:p-10'>
                <div className='w-full h-full flex flex-wrap justify-center md:flex-row md:justify-between md:items-start gap-10'>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-white'>
                            <LetterAnimation title='About Us' />
                        </h5>
                        {Aboutus?.map((about, i) => (
                            <motion.div
                                key={i}
                                variants={perspective}
                                animate={inView ? "enter" : "initial"}
                                exit="exit"
                                initial="initial"
                                custom={i}
                                className='max-w-max text-neutral-400 text-[12px] hoveranimation'
                            >
                                {about?.title}
                            </motion.div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-white'>
                            <LetterAnimation title='Help' />
                        </h5>
                        {Help?.map((help, i) => (
                            <motion.div
                                key={i}
                                variants={perspective}
                                animate={inView ? "enter" : "initial"}
                                exit="exit"
                                initial="initial"
                                custom={i}
                                className='max-w-max text-neutral-400 text-[12px] hoveranimation'
                            >
                                {help?.title}
                            </motion.div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-white'>
                            <LetterAnimation title='Online Shopping' />
                        </h5>
                        {OnlineShpping?.map((os, i) => (
                            <motion.div
                                key={i}
                                variants={perspective}
                                animate={inView ? "enter" : "initial"}
                                exit="exit"
                                initial="initial"
                                custom={i}
                                className='max-w-max text-neutral-400 text-[12px] hoveranimation'
                            >
                                {os?.title}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-[500px] h-full'>
                    <div className='flex flex-row gap-5 items-center text-white'>
                        <Image src={''} imgclass='w-[60px] h-[60px] rounded-full object-contain' alt='' />
                        <p>
                            100% ORIGINAL guarantee for all products at myntra.com
                        </p>
                    </div>
                    <div className='flex flex-row gap-5 items-center text-white mt-5'>
                        <Image src={''} imgclass='w-[60px] h-[60px] rounded-full object-contain' alt='' />
                        <p>
                            Return within 14 days of receiving your order
                        </p>
                    </div>
                </div>
            </div>

            {/* bottom rights reserved */}
            <div className='max-h-max md:h-[80px] flex flex-col md:flex-row items-center justify-between gap-5 py-5'>
                <p className='text-center text-black text-[12px]'>© 2024 Dexons All rights reserved</p>
                <div className='flex flex-row gap-3 items-center'>
                    <p className='text-[12px] hoveranimation'>Privacy Policy</p>
                    <p className='text-[12px] hoveranimation'>Terms & Services</p>
                </div>
                <SocialIcons type='footer' />
            </div>
        </div>
    );
}

export default Footer;
