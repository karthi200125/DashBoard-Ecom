import Image from '@/components/ui/Image'
import React from 'react'
import Curves from './Curves'
import SocialIcons from './SocialIcons'
import { ArrowRight } from 'lucide-react'

const LandingPage = () => {
    return (
        <div className='w-full h-[92vh] py-[10px]  flex flex-row justify-between relative pl-[80px] '>
            <Image src={"https://img.uhdpaper.com/wallpaper/sports-car-futuristic-mountain-sunset-scenery-digital-art-537@0@i-thumb.jpg?dl"} imgclass='w-[87%] h-[96.5%] rounded-[30px] bg-neutral-200' />
            <div className='flex flex-col gap-5 h-[60%]'>
                <Image src={"https://img.uhdpaper.com/wallpaper/ninja-kamui-oni-mask-joe-higan-256@1@o-thumb.jpg?dl"} imgclass='w-[150px] h-[150px] rounded-[20px]  bg-neutral-100 hover:shadow-custom-shadow transition duration-300' />
                <Image src={"https://img.uhdpaper.com/wallpaper/goku-dragon-ball-262@3@a-thumb.jpg?dl"} imgclass='w-[150px] h-[150px] rounded-[20px] bg-neutral-100 hover:shadow-custom-shadow transition duration-300' />
                <Image src={"https://img.uhdpaper.com/wallpaper/sunset-synthwave-sports-car-city-palm-trees-digital-art-216@1@n-thumb.jpg?dl"} imgclass='w-[150px] h-[150px] rounded-[20px] bg-neutral-100 hover:shadow-custom-shadow transition duration-300' />
            </div>

            {/* bottom right box */}
            <div className='absolute bottom-[30px] right-0 w-[350px] h-[30%] px-5 pt-5 bg-white' style={{ borderTopLeftRadius: "30px" }}>
                <div className='rounded-[20px] w-full h-full p-5 bg-neutral-100 relative group hover:shadow-custom-shadow transition duration-300'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold'>Rigtn corner</h1>
                        <p className='text-sm text-neutral-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi rem placeat minus iste asperiores aliquam quas sunt officia eum cupiditate?</p>
                    </div>
                    <div className='absolute top-2 right-2 flex items-center justify-center rounded-full bg-black w-10 h-10 text-white'>
                        <ArrowRight size={20} className='rotate-[-45deg] group-hover:rotate-[0deg] transition'/>
                    </div>
                </div>
                <Curves curveCls='w-[45px] h-[45px] absolute top-[-45px] right-[45%] rotate-[270deg]' />
                <Curves curveCls='w-[45px] h-[45px] absolute bottom-0 left-[-45px] rotate-[270deg]' />
            </div>

            {/* bottom left box 1*/}
            <div className='absolute bottom-[90px] left-0 w-[300px] h-[10%] px-3 pt-3 bg-white' style={{ borderTopRightRadius: "30px" }}>
                <div className='rounded-[20px] w-full h-full p-2 text-4xl font-bold'>
                    Natural thing
                </div>
                <Curves curveCls='w-[45px] h-[45px] absolute top-[-45px] left-[80px]' />
            </div>

            {/* bottom left box 2*/}
            <div className='absolute bottom-[30px] left-0 w-[350px] h-[10%] px-3 pt-3 bg-white' style={{ borderTopRightRadius: "30px" }}>
                <div className='rounded-[20px] w-full h-full p-2 text-4xl font-bold'>
                    Wax Candle pees
                </div>
            </div>

            {/* social icons */}
            <div className='w-[60px] h-[200px] absolute top-1/2 transform -translate-y-1/2 left-[0px]'>
                <SocialIcons />
            </div>


        </div>
    )
}

export default LandingPage