'use client'
import StarRating from '@/app/_components/Cards/StarRating'
import Image from '@/components/ui/Image'
import React, { useState } from 'react'

const Review = () => {

    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='w-full rounded-[20px] p-5 min-h-[200px] border flex flex-row items-start gap-10'>
            {/* user profule */}
            <div className='hidden md:flex flex-col gap-3 w-[20%]'>
                <Image src={""} imgclass='bg-neutral-200 w-[100px] h-[100px] rounded-[10px]' />
                <h1 className='text-xl font-bold'>karthikeyna</h1>
            </div>

            {/* user review content */}
            <div className='flex flex-col w-full h-full gap-3'>
                <div className='flex flex-row items-center justify-between'>
                    <StarRating rating={4.5} size='15' />
                    <p className='hidden md:block text-sm text-neutral-400'>1 days ago</p>
                </div>
                <h1 className='text-md md:text-xl font-bold'>super pridyct awesome!</h1>
                <p className={`text-sm text-neutral-400 ${showMore ? '' : 'line-clamp-2'}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quos nobis veniam voluptate obcaecati voluptatibus, sequi nam. Animi ex a nihil sequi! Voluptatibus eum ab odio officia alias? Cupiditate molestiae doloribus numquam, temporibus ut expedita quidem consequuntur accusamus laborum fugiat ab recusandae dignissimos architecto, consequatur, harum adipisci id perspiciatis corrupti culpa quae amet! Et suscipit assumenda facilis eligendi quo aperiam debitis voluptates beatae expedita maxime! Perspiciatis blanditiis repellendus nihil, eos, praesentium quia, dicta quas nemo cupiditate ab veniam dolorum molestiae autem at amet reiciendis atque. Quos qui quis nihil facere. Dolores velit odio placeat dicta esse laudantium facilis, sunt deleniti.
                </p>
                <button onClick={handleToggle} className="text-blue-500 mt-2 text-sm">
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
                <div className='md:hidden flex flex-row items-center gap-2 text-sm '>
                    <h1 className='font-bold'>by karthikeyan</h1>
                    <span className='w-[5px] h-[5px] rounded-full bg-black'></span>
                    <p className='text-sm text-neutral-400'>1 days ago</p>
                </div>
            </div>
        </div>
    )
}

export default Review