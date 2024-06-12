import React from 'react'
import { Kids, Mens, Womens, benefits } from '../dummydata'

const MenuBarContent = () => {
    return (
        <div className='hidden md:flex w-full h-screen bg-white p-5 items-center justify-center'>
            <div className='w-full xl:w-[90%] max-h-max flex flex-row items-start gap-10 xl:gap-20 mt-[50px] border rounded-[30px] p-5 xl:p-10'>
                <div className='flex-1 flex flex-col justify-between items-start gap-10'>
                    <div className='flex flex-row items-center gap-5 xl:gap-10'>
                        <span className='w-[100px] bg-black h-[2px]'></span>
                        <h2>Categories</h2>
                    </div>
                    <div className='flex flex-row justify-between items-start w-full'>
                        <div className='flex flex-col gap-2'>
                            <h2 >Mens</h2>
                            {Mens.map((m, i) => (
                                <div className='text-sm text-neutral-400 hoveranimation cursor-pointer max-w-max' key={i}>{m}</div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 >Women</h2>
                            {Womens.map((w, i) => (
                                <div className='text-sm text-neutral-400 hoveranimation cursor-pointer max-w-max' key={i}>{w}</div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 >Kids</h2>
                            {Kids.map((k, i) => (
                                <div className='text-sm text-neutral-400 hoveranimation cursor-pointer max-w-max' key={i}>{k}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex-1'>
                    <div className='flex flex-row items-center gap-5 xl:gap-10'>
                        <span className='w-[100px] bg-black h-[2px]'></span>
                        <h2 className='w-[200px] xl:w-[300px] '>Benifits you get when you ussing our services</h2>
                    </div>

                    <div className='flex flex-col justify-between gap-3 w-[300px] p-5'>
                        {benefits?.map((b) => (
                            <div className='flex flex-row items-start gap-5' key={b.id}>
                                <div className="text-md xl:text-xl">
                                    {b.icon}
                                </div>
                                <div>
                                    <h2>{b.title}</h2>
                                    <p>{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MenuBarContent