'use client'

import React, { useEffect, useState } from 'react'
const SingleProductImage = dynamic(() => import('../SingleProductImage'))
const ProductContent = dynamic(() => import('../ProductContent'))
const Cards = dynamic(() => import('@/app/_components/Cards/Cards'))
const ProductReview = dynamic(() => import('../ProductReview'))
import dynamic from 'next/dynamic'
import { useParams, usePathname } from 'next/navigation'
import { getSingleProduct } from '../../../../../actions/product'

const SingleProduct = () => {

    const params = useParams()
    const { id } = params

    const [product, setProduct] = useState()

    useEffect(() => {
        const fetchSingleProduct = async () => {
            if (id) {
                const product = await getSingleProduct(id);
                setProduct(product)
                console.log(product);
            }
        };

        fetchSingleProduct();
    }, [id]);


    return (
        <div className='py-5 w-full min-h-screen flex flex-col gap-10'>
            <div className='flex flex-col md:flex-row items-center gap-5 lg:gap-10 min-h-screen md:h-[600px] overflow-hidden'>
                {/* product image */}
                <div className='w-full md:flex-1 h-[500px] md:h-full'>
                    <SingleProductImage product={product}/>
                </div>

                {/* product contents */}
                <div className='w-full md:flex-1 h-full'>
                    <ProductContent product={product} />
                </div>
            </div>

            {/* suggested products */}
            <div className='flex flex-col mt-5 items-center justify-center'>
                <h1 className='text-2xl md:text-4xl text-neutral-500 w-[180px] md:w-[350px] text-center'>Related to this <b>Product</b></h1>
                <span className='h-[2px] w-[100px] md:w-[150px] bg-neutral-400 mt-3 mb-10'></span>
                <Cards isLoading={true} />
            </div>

            {/*product reviews */}
            <div className='flex flex-col mt-5 items-center justify-center p-2 md:p-0'>
                <h1 className='text-4xl text-neutral-500 md:w-[350px] text-center'>Product <b>Reviews</b></h1>
                <span className='h-[2px] w-[150px] bg-neutral-400 mt-3 mb-10'></span>
                <ProductReview product={product}/>
            </div>
        </div>
    )
}

export default SingleProduct