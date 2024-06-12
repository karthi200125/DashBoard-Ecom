'use client'
import Image from '@/components/ui/CustomImage'
import React, { useState } from 'react'
import Curves from './Curves'
import SocialIcons from './SocialIcons'
import { ArrowRight } from 'lucide-react'
import CustomBtn from '@/app/_components/CustomBtn'

const LandingPage = () => {
    const [mainImage, setMainimage] = useState("")

    const miniimages = [
        "",
        "",
        "",
    ]

    return (
        <div className='w-full h-[92vh] py-[15px] xl:py-[10px] flex flex-col gap-2 md:flex-row justify-between relative px-2 md:pl-[50px] xl:pl-[80px]'>

            {/* main image */}
            <Image src={mainImage} imgclass='w-full md:w-[87%] h-[96.5%] rounded-[30px] bg-neutral-200' alt='main image' />

            {/* buttons */}
            <div className='glass max-w-max max-h-max rounded-full md:rounded-[20px] xl:rounded-full absolute flex flex-row md:flex-col xl:flex-row items-center gap-1 md:gap-5 p-2 xl:bottom-[95px] bottom-0 md:bottom-[-25px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <CustomBtn arrow btnCls='bg-black text-white border-black pl-5 md:pl-10' arrowCls='bg-white text-black'>Shop Now</CustomBtn>
                <CustomBtn btnCls='bg-white text-black px-5 sm:px-10'>Contact Us</CustomBtn>
            </div>

            {/* customer happy div */}
            <div className='glass md:flex w-[220px] xl:w-[300px] max-h-max gap-2 rounded-[10px] md:rounded-[30px] p-5 md:p-8 absolute right-[8%] md:right-[17%] top-[8%] md:top-[25%] xl:top-[7%] xl:flex flex-col justify-between text-white'>
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='text-md text-2xl xl:text-4xl font-semibold'>24K</h1>
                    <ArrowRight className='rotate-[-45deg]' size={25} />
                </div>
                <p className='opacity-50'>happy customer with grow </p>
                <p className='opacity-50'>user friendly website</p>
            </div>

            {/* main text */}
            <div className='md:flex flex-col p-5 rounded-[20px] absolute max-w-max top-[30%] md:top-[5%] left-[2%] md:left-[10%]'>
                <h1 className='text-white font-bold text-[29px]  md:text-5xl px-4 py-2 glass max-w-max' style={{ borderBottomRightRadius: "10px", borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}>one step forward</h1>
                <h1 className='text-white font-bold text-[29px]  md:text-5xl px-4 py-2 glass max-w-max' style={{ borderBottomRightRadius: "10px" }}>one step </h1>
                <h1 className='text-white font-bold text-[29px]  md:text-5xl px-4 py-2 glass max-w-max' style={{ borderBottomRightRadius: "10px", borderBottomLeftRadius: '10px' }}>onee  </h1>
            </div>

            {/* three images */}
            <div className='hidden md:flex flex-col justify-between gap-2 h-[65%] xl:w-[15%] overflow-hidden'>
                {miniimages?.map((mi, i) => (
                    <Image src={mi} imgclass='w-full h-full rounded-[20px] bg-neutral-100 hover:shadow-custom-shadow transition duration-300' key={i} onClick={() => setMainimage(mi)} alt='main 3 images' />
                ))}
            </div>

            {/* bottom right box */}
            <div className='hidden md:flex absolute bottom-[30px] right-0 md:w-[30%] xl:w-[25%] h-[30%] md:pl-3 pl-5 md:pt-3 pt-5 bg-white' style={{ borderTopLeftRadius: "30px" }}>
                <div className='rounded-[20px] w-full h-full p-5 bg-neutral-100 relative group hover:shadow-custom-shadow transition duration-300'>
                    <div className='flex flex-col gap-2'>
                        <h2>Rigtn corner</h2>
                        <p className='md:line-clamp-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi rem placeat minus iste asperiores aliquam quas sunt officia eum cupiditate?</p>
                    </div>
                    <div className='absolute top-2 right-2 flex items-center justify-center rounded-full bg-black w-10 h-10 text-white'>
                        <ArrowRight size={20} className='rotate-[-45deg] group-hover:rotate-[0deg] transition' />
                    </div>
                </div>
                <Curves curveCls='w-[45px] h-[45px] absolute top-[-45px] md:right-[41%] xl:right-[59.5%] rotate-[270deg]' />
                <Curves curveCls='w-[45px] h-[45px] absolute bottom-0 left-[-45px] rotate-[270deg]' />
            </div>

            {/* bottom left box */}
            <div className='hidden md:flex flex-col rounded-[20px] absolute bottom-[30px] left-[50px] xl:left-[80px] '>
                <Curves curveCls='w-[45px] h-[45px] absolute top-[-45px] left-[0px]' />
                <Curves curveCls='w-[45px] h-[45px] absolute bottom-0 right-[-45px]' />
                <h2 className='pr-5 xl:pr-10 pt-5 max-w-max bg-white' style={{ borderTopRightRadius: "20px" }}>Natural thing</h2>
                <h2 className='pr-5 xl:pr-10 py-5 max-w-max bg-white' style={{ borderTopRightRadius: "20px" }}>Wax Candle peeshfhfhfh</h2>
            </div>

            {/* social icons */}
            <div className='hidden md:flex md:w-[40px] xl:w-[60px] h-[200px] absolute top-1/2 transform -translate-y-1/2 left-[0px]'>
                <SocialIcons />
            </div>

        </div>
    )
}

export default LandingPage
