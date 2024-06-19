'use client'
import Image from '@/components/ui/CustomImage';
import Link from 'next/link';
import { useState } from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";
import { LadingCategories } from '../dummydata';

const LandingCategories = () => {
  const [activeId, setActiveId] = useState(2);

  return (
    <div className='py-5 md:h-[600px] bg-neutral-200 w-[98%] mx-auto rounded-[20px] flex flex-col items-center justify-center gap-10'>
      <div className='text-center'>
        <h3 className='text-neutral-600'>New Launches</h3>
        <h1 className='mt-3'>Fresh off The Boat</h1>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between md:gap-5 w-full md:w-[95%] lg:w-[70%] h-[860px] md:h-[60%]'>
        {LadingCategories?.map((cat) => (
          <Link
            href={cat?.href}
            key={cat.id}
            className={`min-w-[300px] md:min-w-[30%] lg:flex-1 md:h-full flex flex-col gap-3 items-center justify-center ${cat.id === 2 ? "md:mt-20" : ""}`}
            onMouseEnter={() => setActiveId(cat.id)}
            onMouseLeave={() => setActiveId(2)}
          >
            <div
              className={`${activeId === cat.id ? "bg-gradient-to-r from-[#686e74] to-[#222222]" : "bg-white"} hover:bg-gradient-to-r from-[#686e74] to-[#222222] transition duration-500 rounded-[20px] w-full h-full relative flex items-center justify-center overflow-hidden group cursor-pointer`}
            >
              <div className='w-full h-full flex items-center justify-center'>
                <Image src={""} imgclass='w-[200px] h-[200px] object-contain transform group-hover:scale-125 transition duration-500' alt='' />
              </div>
              <div className={`transition duration-500 ${activeId === cat.id ? "scale-100" : "scale-0"} transform group-hover:scale-100 flex flex-row items-center gap-3 absolute`}>
                <div className='w-10 h-10 flex items-center justify-center rounded-full glass cursor-pointer text-white hover:bg-orange-400 hover:text-white'>
                  <MdOutlineRemoveRedEye />
                </div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full glass cursor-pointer text-white hover:bg-orange-400 hover:text-white'>
                  <RiShoppingBagFill />
                </div>
              </div>
            </div>
            <div className='w-full text-center'>
              <h2 className='uppercase'>{cat.cat}</h2>
              <h3 className='flex flex-row items-center gap-3 w-full justify-center'>${cat.price}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LandingCategories
