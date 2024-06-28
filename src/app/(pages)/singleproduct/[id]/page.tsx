'use client'

import React, { useEffect, useState } from 'react'
const SingleProductImage = dynamic(() => import('../SingleProductImage'))
const ProductContent = dynamic(() => import('../ProductContent'))
const Cards = dynamic(() => import('@/app/_components/Cards/Cards'))
const ProductReview = dynamic(() => import('../ProductReview'))
import dynamic from 'next/dynamic'
import { useParams, usePathname } from 'next/navigation'
import { getSingleProduct } from '../../../../../actions/product'
import { ProductSchema } from '../../../../../schemas'
import * as z from 'zod'
import { toast } from 'sonner'
import SingleProductSkeleton from '@/app/_components/Skeletons/SingleProductSkeleton'
import StarRating from '@/app/_components/Cards/StarRating'
import Footer from '@/app/_components/Footer'

const SingleProduct = () => {

    const params = useParams()
    const { id } = params

    const [product, setProduct] = useState<z.infer<typeof ProductSchema> | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>()

    useEffect(() => {
        const fetchSingleProduct = async () => {
            setIsLoading(true)
            try {
                if (id) {
                    const product = await getSingleProduct(id);
                    setProduct(product)
                    console.log(product);
                }
            } catch (error) {
                toast.error("fetching that product failed")
            } finally {
                setIsLoading(false)
            }
        };

        fetchSingleProduct();
    }, [id]);

    return (
        <>
            {isLoading ?
                <SingleProductSkeleton />
                :
                <div className='py-5 w-full min-h-screen flex flex-col gap-10'>

                    <div className='p-2 md:p-0 flex flex-col md:flex-row items-start justify-center gap-5 md:gap-20 py-10 border-b max-h-[250px]'>
                        <h1 className="flex-1">{product?.proName}</h1>
                        <p className='flex-1 text-[10px] md:text-[15px]'>{product?.proDesc}</p>
                    </div>

                    <div className='flex flex-col md:flex-row items-center gap-5 lg:gap-10 min-h-screen md:h-[600px] overflow-hidden'>
                        {/* product image */}
                        <div className='w-full md:flex-1 h-[500px] md:h-full overflow-hidden'>
                            <SingleProductImage product={product} />
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
                        <ProductReview product={product} />
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
}

export default SingleProduct