'use client'
import StarRating from '@/app/_components/Cards/StarRating'
import React from 'react'
import Review from './Review'

const ProductReview = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-10 relative'>

      {/* review top */}
      <div className='flex flex-col md:flex-row lg:flex-col w-full lg:w-[30%] h-full items-center justify-between lg:justify-start gap-3 lg:sticky top-[100px]'>

        <div className='w-full flex flex-col gap-3 rounded-[20px] p-5 bg-white border'>
          <h2 className='text-md'>Toatal reviews</h2>
          <h1 className='text-2xl font-bold'>100</h1>
          <p className='text-sm text-neutral-400'>Growth on this year</p>
        </div>

        <div className='w-full flex flex-col gap-3 rounded-[20px] p-5 bg-white border'>
          <h2 className='text-md'>Avarage Rating</h2>
          <StarRating size='' rating={4.5} />
          <p className='text-sm text-neutral-400'>Avarage rating on this year</p>
        </div>

        <div className='w-full border rounded-[20px] p-5'>
          last
        </div>

      </div>



      {/* reviews */}
      <div className='flex flex-col rounded-[30px] md:border md:p-5 gap-3 h-full'>
        <Review />
      </div>

    </div>
  )
}

export default ProductReview