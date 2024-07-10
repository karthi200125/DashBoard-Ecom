'use client'

import Image from '@/components/ui/CustomImage';
import { motion } from 'framer-motion';
import LetterAnimation from '../Animations/LetterAnimation';
import { perspective } from '../Animations/animate';
import SocialIcons from './LandingPage/SocialIcons';
import { Aboutus, Help, OnlineShpping } from './dummydata';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const slideDown = {
    initial: {
        y: "-100%"
    },
    open: (i: any) => ({
        y: "0%",
        transition: { duration: 0.7, delay: 0.07 * i }
    }),
    closed: {
        y: "-100%",
        transition: { duration: 0.5 }
    }
};

const Footer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
    }, [inView]);

    const word = "DEXON";
    const { ref: descRef, inView: isInView } = useInView();

    return (
        <div ref={ref} className='w-full max-h-max flex flex-col justify-between mt-5'>
            <div className="flex flex-col h-[300px] w-full">
                {/* items */}
                <div className='max-h-max bg-[#222222] flex flex-col md:flex-row gap-10 p-5 md:p-10'>
                    <div className='w-full h-full flex flex-wrap justify-start md:flex-row md:justify-between md:items-start gap-10'>
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
                            <Image src={'https://res.cloudinary.com/duextvtta/image/upload/v1720446976/gaurante_sv8nsy.webp'} imgclass='w-[60px] h-[60px] rounded-full object-contain' alt='' />
                            <p className="w-[70%]">
                                100% ORIGINAL guarantee for all products at dexon.com
                            </p>
                        </div>
                        <div className='flex flex-row gap-5 items-center text-white mt-5'>
                            <Image src={'https://res.cloudinary.com/duextvtta/image/upload/v1720446976/return_ty7a8v.webp'} imgclass='w-[60px] h-[60px] rounded-full object-contain' alt='' />
                            <p className="w-[70%]">
                                Return within 14 days of receiving your order
                            </p>
                        </div>
                    </div>
                </div>

                {/* bottom rights reserved */}
                <div className='max-h-max md:h-[80px] flex flex-col md:flex-row items-center justify-between gap-5 py-5'>
                    <p className='text-center text-black text-[12px]'>© 2024 Dexon All rights reserved</p>
                    <div className='flex flex-row gap-3 items-center'>
                        <p className='text-[12px] hoveranimation cursor-pointer'>Privacy Policy</p>
                        <p className='text-[12px] hoveranimation cursor-pointer'>Terms & Services</p>
                    </div>
                    <SocialIcons type='footer' />
                </div>
            </div>
            <div className="h-[300px] w-full bg-black text-white">
                <div ref={descRef} className="description">
                    <div className="body" style={{ width: '100%' }}>
                        <p>
                            {word.split("").map((letter, index) => (
                                <span className="mask footernametext" key={index}>
                                    <motion.span
                                        variants={slideDown}
                                        custom={index}
                                        animate={isInView ? "open" : "closed"}
                                    >
                                        {letter}
                                    </motion.span>
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
