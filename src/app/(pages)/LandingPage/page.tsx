import Image from '@/components/ui/Image'
import React from 'react'
import Curves from './Curves'
import SocialIcons from './SocialIcons'

const LandingPage = () => {
    return (
        <div className='w-full h-screen pt-[60px] pb-[30px] flex flex-row justify-between relative pl-[80px]'>
            <Image src={""} imgclass='w-[87%] h-[100%] rounded-[30px] bg-neutral-200' />
            <div className='flex flex-col gap-5 h-[60%]'>
                <Image src={""} imgclass='w-[150px] h-[150px] rounded-[20px]  bg-neutral-200' />
                <Image src={""} imgclass='w-[150px] h-[150px] rounded-[20px] bg-neutral-200' />
                <Image src={""} imgclass='w-[150px] h-[150px] rounded-[20px] bg-neutral-200' />
            </div>

            {/* bottom right box */}
            <div className='absolute bottom-[30px] right-0 w-[350px] h-[30%] px-5 pt-5 bg-white' style={{ borderTopLeftRadius: "30px" }}>
                <div className='rounded-[20px] w-full h-full p-2 bg-neutral-200'>

                </div>
                <Curves curveCls='w-[45px] h-[45px] absolute top-[-45px] right-[45%] rotate-[270deg]' />
                <Curves curveCls='w-[45px] h-[45px] absolute bottom-0 left-[-45px] rotate-[270deg]' />
            </div>

            {/* bottom left box 1*/}
            <div className='absolute bottom-[90px] left-0 w-[300px] h-[10%] px-3 pt-3 bg-white' style={{ borderTopRightRadius: "30px" }}>
                <div className='rounded-[20px] w-full h-full p-2 '>

                </div>
                <Curves curveCls='w-[45px] h-[45px] absolute top-[-45px] left-[80px]' />
            </div>

            {/* bottom left box 2*/}
            <div className='absolute bottom-[30px] left-0 w-[350px] h-[10%] px-3 pt-3 bg-white' style={{ borderTopRightRadius: "30px" }}>
                <div className='rounded-[20px] w-full h-full p-2 bg-neutral-200'>

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