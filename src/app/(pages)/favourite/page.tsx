import Cards from '@/app/_components/Cards/Cards'
import { mainproductsdata } from '@/app/_components/dummydata'
import React from 'react'

const Favourite = () => {
    return (
        <div className='w-full min-h-screen py-5 flex flex-col gap-5'>
            <div className='p-2 md:p-0 flex flex-col gap-2 '>
                <h1 className='text-2xl md:text-5xl font-bold'>Your Favourite Products</h1>
                <h2 className='text-sm md:text-xl text-neutral-400 font-bold'>Yoou have 10 products in Favourites</h2>
            </div>

            <Cards products={mainproductsdata} isLoading={true} />
        </div>
    )
}

export default Favourite