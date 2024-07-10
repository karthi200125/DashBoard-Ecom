'use client';
import CustomBtn from '@/app/_components/CustomBtn';
import Image from '@/components/ui/CustomImage';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LadingPageMainContents } from '../dummydata';
import Curves from './Curves';
import SocialIcons from './SocialIcons';
import TransitionLink from '@/app/Animations/TransitionLink';
import LetterAnimation from '@/app/Animations/LetterAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage = ({ onLoaded }: any) => {
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [heading1, setHeading1] = useState(LadingPageMainContents[0]?.heading1);
    const [heading2, setHeading2] = useState(LadingPageMainContents[0]?.heading2);
    const [heading3, setHeading3] = useState(LadingPageMainContents[0]?.heading3);
    const [subHeading1, setsubHeading1] = useState(LadingPageMainContents[0]?.subHeading1);
    const [subHeading2, setsubHeading2] = useState(LadingPageMainContents[0]?.subHeading2);

    useEffect(() => {
        onLoaded();
    }, []);

    const miniImages = [
        LadingPageMainContents[0]?.image,
        LadingPageMainContents[1]?.image,
        LadingPageMainContents[2]?.image,
    ];

    const handleClick = (index: any) => {
        setMainImageIndex(index);
        setHeading1(LadingPageMainContents[index]?.heading1);
        setHeading2(LadingPageMainContents[index]?.heading2);
        setHeading3(LadingPageMainContents[index]?.heading3);
        setsubHeading1(LadingPageMainContents[index]?.subHeading1);
        setsubHeading2(LadingPageMainContents[index]?.subHeading2);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setMainImageIndex((prevIndex) => (prevIndex + 1) % LadingPageMainContents.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const content = LadingPageMainContents[mainImageIndex];
        setHeading1(content?.heading1);
        setHeading2(content?.heading2);
        setHeading3(content?.heading3);
        setsubHeading1(content?.subHeading1);
        setsubHeading2(content?.subHeading2);
    }, [mainImageIndex]);

    return (
        <div className='sticky_01_panel w-full h-[92vh] py-[15px] xl:py-[10px] flex flex-col gap-2 md:flex-row justify-between relative px-2 md:pl-[50px] xl:pl-[80px]'>

            {/* main image */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 1,
                }}
                className="w-full md:w-[87%] h-[96.5%] rounded-[30px] overflow-hidden relative bg-black"
            >
                <AnimatePresence>
                    <motion.div
                        key={mainImageIndex}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{
                            ease: [0.76, 0, 0.24, 1],
                            duration: 2,
                        }}
                        className="absolute w-full h-full"
                    >
                        <Image
                            src={LadingPageMainContents[mainImageIndex]?.image}
                            imgclass="w-full h-full bg-black"
                            alt="main image"
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* buttons */}
            <div className='absolute max-h-max left-1/2 xl:bottom-[115px] bottom-[10%] md:bottom-[35%] transform -translate-x-1/2 flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, y: 180 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 0.6,
                    }}
                    className='glass rounded-full md:rounded-[20px] xl:rounded-full flex flex-row xl:flex-row items-center gap-1 md:gap-5 p-2'
                >
                    <TransitionLink href='/shop'>
                        <CustomBtn arrow btnCls='bg-black text-white pl-5 md:pl-10 ' arrowCls='bg-white text-black'>
                            Shop Now
                        </CustomBtn>
                    </TransitionLink>
                    <CustomBtn btnCls='bg-white text-black px-5 sm:px-10'>Contact Us</CustomBtn>
                </motion.div>
            </div>


            {/* customer happy div */}
            <div className='glass hidden xl:hidden w-[90%] xl:w-[300px] h-[150px] md:max-h-max gap-2 rounded-[10px] p-5 md:p-8 absolute left-1/2 transform -translate-x-1/2 right-2 top-[15%] xl:top-[25%] xl:right-0 flex-col justify-between text-white'>
                <div className='flex flex-row items-center justify-between'>
                    <h2>24K</h2>
                    <ArrowRight className='rotate-[-45deg]' size={25} />
                </div>
                <p className='opacity-50 text-white'>happy customer grow</p>
                <p className='opacity-50 text-white'>user friendly website</p>
            </div>

            {/* main text */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 1.2,
                }}
                className='flex flex-col p-5 rounded-[20px] absolute max-w-max top-[5%] md:top-[7%] left-[2%] md:left-[7%]'
            >
                <h1 className='text-white px-4 py-1 glass max-w-max' style={{ borderBottomRightRadius: "10px", borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} >
                    <LetterAnimation title={heading1} />
                </h1>
                <h1 className='text-white px-4 py-1 glass max-w-max' style={{ borderBottomRightRadius: "10px" }}>
                    <LetterAnimation title={heading2} />
                </h1>
                <h1 className='text-white px-4 py-1 glass max-w-max' style={{ borderBottomRightRadius: "10px", borderBottomLeftRadius: '10px' }}>
                    <LetterAnimation title={heading3} />
                </h1>
            </motion.div>

            {/* three images */}
            <div className='hidden md:flex flex-col justify-between gap-2 h-[65%] md:w-[20%] xl:w-[15%] overflow-hidden'>
                {miniImages?.map((mi, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 180 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.6,
                            delay: 0.2 + i * 0.2,
                        }}
                        className="w-full h-full rounded-[20px] bg-neutral-100 transition duration-300 overflow-hidden"
                        onClick={() => handleClick(i)}
                    >
                        <Image src={mi} imgclass='w-full h-full bg-neutral-100' alt='main 3 images' />
                    </motion.div>
                ))}
            </div>

            {/* bottom right box */}
            <motion.div
                initial={{ opacity: 0, y: 180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.6,
                }}
                className='hidden md:flex absolute bottom-[30px] right-0 md:w-[30%] xl:w-[25%] h-[30%] md:pl-3 pl-5 md:pt-3 pt-5 bg-white'
                style={{ borderTopLeftRadius: "30px" }}
            >
                <div className='rounded-[20px] w-full h-full p-5 bg-[#303533] text-white relative group hover:shadow-custom-shadow transition duration-300'>
                    <div className='flex flex-col gap-2'>
                        <h4>
                            <LetterAnimation title='E-commerce' />
                        </h4>
                        <p className='line-clamp-3 md:line-clamp-4'>At Dexons, we bring you the latest and greatest in fashions and more. Explore our wide range of products and enjoy unbeatable prices and special discounts.</p>
                    </div>
                    <div className='absolute top-2 right-2 flex items-center justify-center rounded-full bg-white w-10 h-10 text-black'>
                        <ArrowRight size={20} className='rotate-[-45deg] group-hover:rotate-[0deg] transition' />
                    </div>
                </div>
                <Curves curveCls='w-[45px] h-[45px] absolute top-[-45px] md:right-[41%] xl:right-[59.5%] rotate-[270deg]' />
                <Curves curveCls='w-[45px] h-[45px] absolute bottom-0 left-[-45px] rotate-[270deg]' />
            </motion.div>

            {/* bottom left box */}
            <motion.div
                initial={{ opacity: 0, y: 180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.6,
                }}
                className='w-full md:flex flex-col absolute left-2 transform -translate-x-1/2 bottom-[35%] md:bottom-[30px] md:left-[50px] xl:left-[80px]'
            >
                <Curves curveCls='hidden md:flex w-[45px] h-[45px] absolute top-[-45px] left-[0px]' />
                <Curves curveCls='hidden md:flex w-[45px] h-[45px] absolute bottom-0 right-[-43px]' />
                <div className=" md:pt-5 md:pr-5 w-full md:max-w-max md:bg-white flex items-center justify-center" style={{ borderTopRightRadius: "20px" }}>
                    <h2 className=' md:text-xl xl:text-[32px] w-full h-full leading-0 rounded-[10px] text-black text-center md:text-start'>
                        <b className="text-red-400"><LetterAnimation title={`${subHeading1} Fashion`} /></b>
                    </h2>
                </div>
                <div className="hidden md:flex pt-5 pr-5 max-w-max bg-white items-center justify-center" style={{ borderTopRightRadius: "20px" }}>
                    <h2 className='md:text-xl xl:text-[32px] w-full h-full leading-0 rounded-[10px] text-black'>
                        <LetterAnimation title={subHeading2} />
                    </h2>
                </div>
            </motion.div>

            {/* social icons */}
            <div className='hidden md:flex md:w-[40px] xl:w-[60px] h-[200px] absolute top-1/2 transform -translate-y-1/2 left-[0px]'>
                <SocialIcons />
            </div>
        </div>
    );
};

export default LandingPage;
