'use client'
import SocialIcons from './LandingPage/SocialIcons'
import Link from 'next/link'
import Image from '@/components/ui/CustomImage'
import { Aboutus, Help, OnlineShpping } from './dummydata';
import TextSlideUp from '../Animations/TextSlideUp';
import { useEffect } from 'react';

const Footer = ({ onLoad }: any) => {
    useEffect(() => {
        onLoad && onLoad('Footer');
    }, []);

    return (
        <div className='w-full max-h-max flex flex-col justify-between'>
            <div className='h-[300px] relative'>
                <Image src={''} imgclass='w-full h-full brightness-[0.5]' alt='' />
                <div className='absolute bottom-0 left-0 w-full max-h-max text-9xl font-bold text-center text-white'>
                    {/* <TextSlideUp word='karthick' textSlideUpCls='text-[30px] md:text-[80px] xl:text-[100px]' /> */}
                </div>
            </div>

            {/* items */}
            <div className='max-h-max bg-[#222222] flex flex-col md:flex-row gap-10 p-5 md:p-10'>
                <div className='w-full h-full flex flex-wrap justify-center md:flex-row md:justify-between md:items-start gap-10'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-white'>About Us</h2>
                        {Aboutus?.map((about) => (
                            <Link key={about?.id} href={''} className='max-w-max text-neutral-400 text-md hoveranimation'>{about?.title}</Link>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className=' text-white'>Help</h2>
                        {Help?.map((help) => (
                            <Link key={help?.id} href={''} className='max-w-max text-neutral-400 text-md hoveranimation'>{help?.title}</Link>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-white'>Online Shopping</h2>
                        {OnlineShpping?.map((os) => (
                            <Link key={os?.id} href={''} className='max-w-max text-neutral-400 text-md hoveranimation'>{os?.title}</Link>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-[500px] h-full '>
                    <div className='flex flex-row gap-5 items-center text-white'>
                        <Image src={''} imgclass='w-[90px] h-[60px] rounded-full' alt='' />
                        <p>
                            <span className='font-bold text-md mr-2'>100% ORIGINAL</span>
                            guarantee for all products at myntra.com
                        </p>
                    </div>
                    <div className='flex flex-row gap-5 items-center text-white mt-5'>
                        <Image src={''} imgclass='w-[70px] h-[60px] rounded-full' alt='' />
                        <p>
                            <span className='font-bold text-md mr-2'>Return within 14days</span>
                            of receiving your order
                        </p>
                    </div>
                </div>
            </div>

            {/* bottom rights reserved */}
            <div className='max-h-max md:h-[80px] flex flex-col md:flex-row items-center justify-between gap-5 py-5'>
                <h3 className='text-center'>© 2024 www.myntra.com. All rights reserved</h3>
                <div className='flex fex-row gap-3 items-center'>
                    <p className='hoveranimation'>Privacy Policy</p>
                    <p className='hoveranimation'>Terms & Services</p>
                </div>
                <SocialIcons type='footer' />
            </div>
        </div>
    )
}

export default Footer;
