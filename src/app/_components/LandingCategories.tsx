'use client'
import Image from '@/components/ui/Image'
import React, { useState } from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";
import test from '../assets/fox.png'

const Categories = () => {
  const [activeId, setActiveId] = useState(2); 

  const categories = [
    {
      id: 1,
      image: test,
      cat: "Male - Fashion",
      price: "1000"
    },
    {
      id: 2,
      image: test,
      cat: "Female - Fashion",
      price: "1000"
    },
    {
      id: 3,
      image: test,
      cat: "Kid - Fashion",
      price: "1000"
    },
  ]

  return (
    <div className='py-5 md:h-[600px] bg-neutral-200 w-[98%] mx-auto rounded-[20px] flex flex-col items-center justify-center gap-10'>
      <div className='text-center'>
        <h1 className='text-lg font-semibold text-neutral-600'>New Launches</h1>
        <h1 className='text-3xl md:text-5xl font-bold mt-3'>Fresh off The Boat</h1>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between md:gap-5 w-full md:w-[95%] lg:w-[70%] h-[860px] md:h-[60%]'>
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`min-w-[300px] md:min-w-[30%] lg:flex-1 md:h-full flex flex-col gap-3 items-center justify-center ${cat.id === 2 ? "md:mt-20" : ""}`}
            onMouseEnter={() => setActiveId(cat.id)}
            onMouseLeave={() => setActiveId(2)} 
          >
            <div
              className={`${activeId === cat.id ? "bg-gradient-to-r from-[#686e74] to-[#222222]" : "bg-white"} hover:bg-gradient-to-r from-[#686e74] to-[#222222] transition duration-500 rounded-[20px] w-full h-full relative flex items-center justify-center overflow-hidden group cursor-pointer`}
            >
              <div className='w-full h-full flex items-center justify-center'>
                <Image src={cat.image.src} imgclass='w-[200px] h-[200px] object-contain transform group-hover:scale-125 transition duration-500' />
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
              <h1 className='text-xl font-bold uppercase'>{cat.cat}</h1>
              <h2 className='text-neutral-400 text-lg flex flex-row items-center gap-3 w-full justify-center'>${cat.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
