import Image from '@/components/ui/Image'
import React from 'react'
import Curves from './Curves'
import SocialIcons from './SocialIcons'
import { ArrowRight } from 'lucide-react'
import CustomBtn from '@/app/_components/CustomBtn'

const LandingPage = () => {
    return (
        <div className='w-full h-[92vh] py-[10px]  flex flex-col gap-2 md:flex-row justify-between relative px-2 md:pl-[80px] '>

            {/* main image */}
            <Image src={"https://img.uhdpaper.com/wallpaper/ninja-kamui-oni-mask-joe-higan-256@1@o-thumb.jpg?dl"} imgclass='w-full md:w-[87%] lg:w-[87%] h-[96.5%] rounded-[30px] bg-neutral-200' />

            {/* buttons */}
            <div className='glass max-w-max max-h-max rounded-full absolute flex flex-row items-center gap-1 md:gap-5 p-2 bottom-[95px] sm:bottom-[90px] md:bottom-[50px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <CustomBtn arrow btnCls='bg-black text-white border-black pl-5 md:pl-10' arrowCls='bg-white text-black'>Shop Now</CustomBtn>
                <CustomBtn btnCls='bg-white text-black px-5 sm:px-10'>Contact Us</CustomBtn>
            </div>

            {/* customer happy div */}
            <div className='glass md:w-[300px] max-h-max gap-2 rounded-[10px] md:rounded-[30px] p-2 md:p-8 absolute right-[8%] md:right-[17%] top-[7%] md:flex flex-col justify-between text-white'>
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='text-md md:text-4xl font-semibold'>24K</h1>
                    <ArrowRight className='rotate-[-45deg]' size={25} />
                </div>
                <h2 className='text-sm md:text-sm opacity-50'>happy customer with grow </h2>
                <h2 className='text-sm md:text-sm opacity-50'>user friendly website</h2>
            </div>

            {/* main text */}
            <div className='md:flex flex-col p-5 rounded-[20px] absolute max-w-max top-[22%] md:top-[25%] left-[2%] md:left-[10%]'>
                <h1 className='text-white font-bold text-2xl md:text-5xl px-4 py-2 glass max-w-max' style={{ borderBottomRightRadius: "10px", borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}>one step forward</h1>
                <h1 className='text-white font-bold text-2xl md:text-5xl px-4 py-2 glass max-w-max' style={{ borderBottomRightRadius: "10px" }}>one step </h1>
                <h1 className='text-white font-bold text-2xl md:text-5xl px-4 py-2 glass max-w-max' style={{ borderBottomRightRadius: "10px", borderBottomLeftRadius: '10px' }}>onee  </h1>
            </div>

            {/* three images */}
            <div className='flex flex-row md:flex-col gap-2 justify-between md:gap-2 lg:gap-5 md:h-[60%] lg:h-[60%]'>
                <Image src={"https://img.uhdpaper.com/wallpaper/ninja-kamui-oni-mask-joe-higan-256@1@o-thumb.jpg?dl"} imgclass='min-w-[80px] sm:min-w-[150px] h-[100px] sm:h-[100px] lg:h-[150px] rounded-[20px]  bg-neutral-100 hover:shadow-custom-shadow transition duration-300' />
                <Image src={"https://img.uhdpaper.com/wallpaper/goku-dragon-ball-262@3@a-thumb.jpg?dl"} imgclass='min-w-[80px] sm:min-w-[150px] h-[100px] sm:h-[100px] lg:h-[150px] rounded-[20px] bg-neutral-100 hover:shadow-custom-shadow transition duration-300' />
                <Image src={"https://img.uhdpaper.com/wallpaper/sunset-synthwave-sports-car-city-palm-trees-digital-art-216@1@n-thumb.jpg?dl"} imgclass='min-w-[80px] sm:min-w-[150px] h-[100px] sm:h-[100px] lg:h-[150px] rounded-[20px] bg-neutral-100 hover:shadow-custom-shadow transition duration-300' />
            </div>

            {/* bottom right box */}
            <div className='hidden md:flex absolute bottom-[30px] right-0 w-[350px] h-[30%] pl-5 pt-5 bg-white' style={{ borderTopLeftRadius: "30px" }}>
                <div className='rounded-[20px] w-full h-full p-5 bg-neutral-100 relative group hover:shadow-custom-shadow transition duration-300'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold'>Rigtn corner</h1>
                        <p className='text-sm text-neutral-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi rem placeat minus iste asperiores aliquam quas sunt officia eum cupiditate?</p>
                    </div>
                    <div className='absolute top-2 right-2 flex items-center justify-center rounded-full bg-black w-10 h-10 text-white'>
                        <ArrowRight size={20} className='rotate-[-45deg] group-hover:rotate-[0deg] transition' />
                    </div>
                </div>
                <Curves curveCls='w-[45px] h-[45px] absolute top-[-45px] right-[45%] rotate-[270deg]' />
                <Curves curveCls='w-[45px] h-[45px] absolute bottom-0 left-[-45px] rotate-[270deg]' />
            </div>

            {/* bottom left box */}
            <div className='hidden md:flex flex-col rounded-[20px] absolute bottom-[30px] left-[80px] '>
                <Curves curveCls='w-[45px] h-[45px] absolute top-[-45px] left-[0px]' />
                <Curves curveCls='w-[45px] h-[45px] absolute bottom-0 right-[-45px]' />
                <h1 className='pr-10 pt-5 max-w-max bg-white text-xl font-bold' style={{ borderTopRightRadius: "20px" }}>Natural thing</h1>
                <h1 className='pr-10 py-5 max-w-max bg-white text-xl font-bold' style={{ borderTopRightRadius: "20px" }}>Wax Candle peeshfhfhfh</h1>
            </div>

            {/* social icons */}
            <div className='hidden md:flex w-[60px] h-[200px] absolute top-1/2 transform -translate-y-1/2 left-[0px]'>
                <SocialIcons />
            </div>

        </div>
    )
}

export default LandingPage