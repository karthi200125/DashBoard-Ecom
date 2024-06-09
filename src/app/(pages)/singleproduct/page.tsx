'use client'

import React from 'react'
import SingleProductImage from './SingleProductImage'
import ProductContent from './ProductContent'

const SingleProduct = () => {
    return (
        <div className='py-5 w-full min-h-screen flex flex-col gap-5'>
            <div className='flex flex-row items-center gap-10 h-[600px]'>
                {/* product image */}
                <div className='flex-1 h-full'>
                    <SingleProductImage />
                </div>

                {/* product contents */}
                <div className='flex-1 h-full'>
                    <ProductContent />
                </div>
            </div>

            {/* suggested products */}
            <div>
                suggeted prducts
            </div>
        </div>
    )
}

export default SingleProduct