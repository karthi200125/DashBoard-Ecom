import React from 'react'
import { benefits } from '../dummydata'

const MenuBarContent = () => {
    return (
        <div className='hidden md:flex w-full h-screen bg-white p-5 items-center justify-center'>
            <div className='w-full h-full flex flex-row items-center gap-10'>
                <div className='flex-1'>
                    left
                </div>

                <div className='flex-1'>
                    <div className='flex flex-row items-center gap-10'>
                        <span className='w-[100px] bg-black h-[2px]'></span>
                        <h1 className='w-[300px] text-xl font-bold'>Benifits you get when you ussing our services</h1>
                    </div>

                    <div className='flex flex-col justify-between gap-3 w-[300px] p-5'>
                        {benefits?.map((b) => (
                            <div className='flex flex-row items-start gap-5' key={b.id}>
                                <div className="text-xl">
                                    {b.icon}
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>{b.title}</h1>
                                    <p className='text-sm text-neutral-400'>{b.desc}</p>
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