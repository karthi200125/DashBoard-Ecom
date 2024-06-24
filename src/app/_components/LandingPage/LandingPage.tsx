'use client'
import CustomBtn from '@/app/_components/CustomBtn'
import Image from '@/components/ui/CustomImage'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { LadingPageMainContents } from '../dummydata'
import Curves from './Curves'
import SocialIcons from './SocialIcons'
import TransitionLink from '@/app/Animations/TransitionLink'
import LetterAnimation from '@/app/Animations/LetterAnimation'

const LandingPage = ({ onLoad }: any) => {
    const [mainImage, setMainImage] = useState(LadingPageMainContents[0]?.image)
    const [heading1, setHeading1] = useState(LadingPageMainContents[0]?.heading1)
    const [heading2, setHeading2] = useState(LadingPageMainContents[0]?.heading2)
    const [heading3, setHeading3] = useState(LadingPageMainContents[0]?.heading3)
    const [subHeading1, setsubHeading1] = useState(LadingPageMainContents[0]?.subHeading1)
    const [subHeading2, setsubHeading2] = useState(LadingPageMainContents[0]?.subHeading2)

    const miniImages = [
        LadingPageMainContents[0]?.image,
        LadingPageMainContents[0]?.image,
        LadingPageMainContents[0]?.image,
    ]

    const handleClick = (index: any) => {
        setMainImage(LadingPageMainContents[index]?.image)
        setHeading1(LadingPageMainContents[index]?.heading1)
        setHeading2(LadingPageMainContents[index]?.heading2)
        setHeading3(LadingPageMainContents[index]?.heading3)
        setsubHeading1(LadingPageMainContents[index]?.subHeading1)
        setsubHeading2(LadingPageMainContents[index]?.subHeading2)
    }

    useEffect(() => {
        onLoad && onLoad('LandingPage');
    }, []);

    return (
        <div className='w-full h-[92vh] py-[15px] xl:py-[10px] flex flex-col gap-2 md:flex-row justify-between relative px-2 md:pl-[50px] xl:pl-[80px]'>

            {/* main image */}
            <div className='w-full md:w-[87%] h-[96.5%] rounded-[30px] overflow-hidden'>
                <Image src={mainImage} imgclass='w-full h-full bg-neutral-200' alt='main image' />
            </div>

            {/* buttons */}
            <div className='glass max-w-max max-h-max rounded-full md:rounded-[20px] xl:rounded-full absolute flex flex-row  xl:flex-row items-center gap-1 md:gap-5 p-2 xl:bottom-[95px] bottom-0 md:bottom-[125px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <TransitionLink href='/shop'>
                    <CustomBtn arrow btnCls='bg-black text-white pl-5 md:pl-10 ' arrowCls='bg-white text-black'>
                        Shop Now
                    </CustomBtn>
                </TransitionLink>
                <CustomBtn btnCls='bg-white text-black px-5 sm:px-10'>Contact Us</CustomBtn>
            </div>

            {/* customer happy div */}
            <div className='hidden glass xl:flex w-[220px] xl:w-[300px] max-h-max gap-2 rounded-[10px] md:rounded-[30px] p-5 md:p-8 absolute right-[8%] md:right-[17%] top-[8%] md:top-[25%] xl:top-[25%] flex-col justify-between text-white'>
                <div className='flex flex-row items-center justify-between'>
                    <h1>24K</h1>
                    <ArrowRight className='rotate-[-45deg]' size={25} />
                </div>
                <p className='opacity-50 text-white'>happy customer grow</p>
                <p className='opacity-50 text-white'>user friendly website</p>
            </div>

            {/* main text */}
            <div className='md:flex flex-col p-5 rounded-[20px] absolute max-w-max top-[30%] md:top-[7%] left-[2%] md:left-[7%]'>
                <h1 className='text-white px-4 py-2 glass max-w-max' style={{ borderBottomRightRadius: "10px", borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} >
                    <LetterAnimation title={heading1} />
                </h1>
                <h1 className='text-white px-4 py-2 glass max-w-max' style={{ borderBottomRightRadius: "10px" }}>
                    <LetterAnimation title={heading2} />
                </h1>
                <h1 className='text-white px-4 py-2 glass max-w-max' style={{ borderBottomRightRadius: "10px", borderBottomLeftRadius: '10px' }}>
                    <LetterAnimation title={heading3} />
                </h1>
            </div>

            {/* three images */}
            <div className='hidden md:flex flex-col justify-between gap-2 h-[65%] md:w-[20%] xl:w-[15%] overflow-hidden'>
                {miniImages?.map((mi, i) => (
                    <div className="w-full h-full rounded-[20px] bg-neutral-100 transition duration-300 overflow-hidden" key={i} onClick={() => handleClick(i)}>
                        <Image src={mi} imgclass='w-full h-full bg-neutral-100' alt='main 3 images' />
                    </div>
                ))}
            </div>

            {/* bottom right box */}
            <div className='hidden md:flex absolute bottom-[30px] right-0 md:w-[30%] xl:w-[25%] h-[30%] md:pl-3 pl-5 md:pt-3 pt-5 bg-white' style={{ borderTopLeftRadius: "30px" }}>
                <div className='rounded-[20px] w-full h-full p-5 bg-[#303533] text-white relative group hover:shadow-custom-shadow transition duration-300'>
                    <div className='flex flex-col gap-2'>
                        <h2>Right corner</h2>
                        <p className='md:line-clamp-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi rem placeat minus iste asperiores aliquam quas sunt officia eum cupiditate?</p>
                    </div>
                    <div className='absolute top-2 right-2 flex items-center justify-center rounded-full bg-white w-10 h-10 text-black'>
                        <ArrowRight size={20} className='rotate-[-45deg] group-hover:rotate-[0deg] transition' />
                    </div>
                </div>
                <Curves curveCls='w-[45px] h-[45px] absolute top-[-45px] md:right-[41%] xl:right-[59.5%] rotate-[270deg]' />
                <Curves curveCls='w-[45px] h-[45px] absolute bottom-0 left-[-45px] rotate-[270deg]' />
            </div>

            {/* bottom left box */}
            <div className='hidden md:flex flex-col absolute bottom-[30px] left-[50px] xl:left-[80px] '>
                <Curves curveCls='w-[45px] h-[45px] absolute top-[-45px] left-[0px]' />
                <Curves curveCls='w-[45px] h-[45px] absolute bottom-0 right-[-43px]' />
                <div className="pt-5 pr-5 max-w-max bg-white flex items-center justify-center" style={{ borderTopRightRadius: "20px" }}>
                    <h2 className='md:text-xl xl:text-[32px] w-full h-full leading-0 rounded-[10px] text-black'><b className="text-red-400">{subHeading1}</b> Fashion</h2>
                </div>
                <div className="pt-5 pr-5 max-w-max bg-white flex items-center justify-center" style={{ borderTopRightRadius: "20px" }}>
                    <h2 className='md:text-xl xl:text-[32px] w-full h-full leading-0 rounded-[10px] text-black'>{subHeading2}</h2>
                </div>
            </div>

            {/* social icons */}
            <div className='hidden md:flex md:w-[40px] xl:w-[60px] h-[200px] absolute top-1/2 transform -translate-y-1/2 left-[0px]'>
                <SocialIcons />
            </div>

        </div>
    )
}

export default LandingPage