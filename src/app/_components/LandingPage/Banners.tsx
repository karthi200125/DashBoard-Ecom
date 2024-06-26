'use client'

import Image from '@/components/ui/CustomImage';
import { bannerImage } from '../dummydata';

const Banners = () => {
    
    return (
        <div className='sticky_01_panel flex flex-col md:flex-row h-screen w-full md:h-[600px] items-center justify-center gap-10 px-20 py-5'>
            <div className='min-w-[300px] md:flex-1 h-[80%] md:h-[450px] relative group overflow-hidden rounded-[20px]'>
                <Image src={bannerImage[0].src} imgclass='w-full h-full bg-neutral-200 absolute left-0 top-0 object-cover brightness-[0.6] transform group-hover:scale-[1.2] transistion duration-500' alt='banner image 1'
                />
                <div className='absolute w-full h-[100px] bottom-[20px] left-0 px-2 md:px-5 py-3'>
                    <h2 className='uppercase text-white'>Lorem ipsum dolor sit amet, consectetur </h2>
                    <p className='line-clamp-2 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus tenetur culpa sit fugit sint.</p>
                </div>
                <div>

                </div>
            </div>
            <div className='min-w-[300px] md:flex-1 h-[150px] md:h-[450px] flex flex-row md:flex-col gap-5'>
                <div className='rounded-[20px] w-full h-full overflow-hidden'>
                    <Image src={bannerImage[1].src} imgclass='w-full h-full bg-neutral-200 rounded-[20px]' alt='banner image 2' />
                </div>
                <div className='rounded-[20px] w-full h-full overflow-hidden'>
                    <Image src={bannerImage[2].src} imgclass='w-full h-full bg-neutral-200 rounded-[20px]' alt='banner image 3' />
                </div>
            </div>
        </div>
    )
}

export default Banners