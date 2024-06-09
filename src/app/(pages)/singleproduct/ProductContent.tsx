'use client'
import StarRating from '@/app/_components/Cards/StarRating'
import Colors from '@/app/_components/Colors'
import Heart from '@/app/_components/Heart/Heart'
import Icon from '@/app/_components/Icon'
import React from 'react'

const ProductContent = () => {
    return (
        <div className='w-full h-full p-5 flex flex-col gap-5'>
            <h1 className='text-5xl '>product title and black magic pro</h1>
            <p className='text-md text-neutral-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsam recusandae rem culpa dolore architecto blanditiis dolores eius eveniet, vitae, libero aliquam ut. Nostrum totam similique rerum doloremque, est rem?</p>

            {/* <StarRating size='30' rating={4.5} /> */}
            <Colors onColorSelect={() => ""} />
            <div className='flex flex-row justify-between'>
                <h1 className='text-3xl font-bold'>$1000</h1>
                <Icon icon={<Heart />} tooltip='favoruite'/>
            </div>
        </div >
    )
}

export default ProductContent