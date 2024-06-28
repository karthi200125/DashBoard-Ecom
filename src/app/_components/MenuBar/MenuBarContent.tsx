'use client'

import React from 'react'
import { Kids, Mens, Womens, benefits } from '../dummydata'
import { motion } from 'framer-motion'
import { perspective } from '@/app/Animations/animate'
import LetterAnimation from '@/app/Animations/LetterAnimation'


const MenuBarContent = () => {
    return (
        <div className='hidden md:flex w-full h-screen p-5 items-center justify-center'>
            <div className='w-full xl:w-[90%] max-h-max flex flex-row items-start gap-10 xl:gap-20 mt-[50px] border rounded-[30px] p-5 xl:p-10'>
                <div className='flex-1 flex flex-col justify-between items-start gap-10'>
                    <div className='flex flex-row items-center gap-5 xl:gap-10'>
                        <span className='w-[100px] bg-black h-[2px]'></span>
                        <h4>  <LetterAnimation title={"Categories"} /></h4>
                    </div>
                    <div className='flex flex-row justify-between items-start w-full'>
                        <div className='flex flex-col gap-2'>
                            <h5>  <LetterAnimation title={"Mens"} /></h5>
                            {Mens.map((m, i) => (
                                < motion.div
                                    key={i}
                                    variants={perspective}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    custom={i}
                                    className='text-sm text-neutral-400 hoveranimation cursor-pointer max-w-max'
                                > {m}
                                </motion.div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h5>  <LetterAnimation title={"Womens"} /></h5>
                            {Womens.map((w, i) => (
                                < motion.div
                                    key={i}
                                    variants={perspective}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    custom={i}
                                    className='text-sm text-neutral-400 hoveranimation cursor-pointer max-w-max'
                                >{w}
                                </motion.div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h5>  <LetterAnimation title={"Kids"} /></h5>
                            {Kids.map((k, i) => (
                                < motion.div
                                    key={i}
                                    variants={perspective}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    custom={i}
                                    className='text-sm text-neutral-400 hoveranimation cursor-pointer max-w-max'
                                >
                                    {k}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex-1'>
                    <div className='flex flex-row items-center gap-5 xl:gap-10'>
                        <span className='w-[100px] bg-black h-[2px]'></span>
                        <h4>
                            <LetterAnimation title={"Benifits you get when you ussing our services"} />
                        </h4>
                    </div>

                    <div className='flex flex-col justify-between gap-3 w-[300px] p-5'>
                        {benefits?.map((b, i) => (
                            < motion.div
                                key={i}
                                variants={perspective}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                                custom={i}
                                className='flex flex-row items-start gap-5'
                            >
                                <div className="text-md xl:text-xl">
                                    {b.icon}
                                </div>
                                <div>
                                    <h5><LetterAnimation title={b.title} /></h5>
                                    <p>{b.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default MenuBarContent