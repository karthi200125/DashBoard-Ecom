import Image from '@/components/ui/Image'
import React from 'react'

const Banners = () => {
    return (
        <div className='flex flex-row w-full md:h-[600px] items-center justify-center gap-10 px-20'>
            <div className='flex-1 h-[450px] w-full relative group overflow-hidden rounded-[20px]'>
                <Image src={'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600'} imgclass='w-full h-full bg-neutral-200 absolute left-0 top-0 object-cover brightness-[0.6] transform group-hover:scale-[1.2] transistion duration-500' />
                <div className='absolute w-full h-[100px] bottom-[20px] left-0 px-5 py-3'>
                    <h1 className='text-xl font-bold uppercase text-white'>Lorem ipsum dolor sit amet, consectetur </h1>
                    <p className='text-sm text-neutral-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus tenetur culpa sit fugit sint.</p>
                </div>
                <div>

                </div>
            </div>
            <div className='flex-1 h-[450px] w-full flex flex-col gap-5'>
                <div className='rounded-[20px] w-full h-full overflow-hidden'>
                    <Image src={"https://images.pexels.com/photos/844874/pexels-photo-844874.jpeg?auto=compress&cs=tinysrgb&w=600"} imgclass='w-full h-full bg-neutral-200 rounded-[20px]' />
                </div>
                <div className='rounded-[20px] w-full h-full overflow-hidden'>
                    <Image src={"https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600"} imgclass='w-full h-full bg-neutral-200 rounded-[20px]' />
                </div>
            </div>
        </div>
    )
}

export default Banners