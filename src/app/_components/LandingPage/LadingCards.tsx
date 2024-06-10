import React from 'react'
import Cards from '../Cards/Cards'
import { mainproductsdata } from '../dummydata'
import CustomBtn from '../CustomBtn'

const LandingCards = () => {
    return (
        <div className='min-h-screen w-full flex flex-col gap-5 py-5'>
            <div className='text-center'>
                <h1 className='text-lg font-semibold text-neutral-600'>New Launches</h1>
                <h1 className='text-3xl md:text-5xl font-bold mt-3'>Fresh off The Boat</h1>
            </div>
            <Cards products={mainproductsdata} isLoading={false} />
            <CustomBtn arrow btnCls='w-[200px] mx-auto border'> See All Products</CustomBtn>
        </div>
    )
}

export default LandingCards