'use client'

import LetterAnimation from '@/app/Animations/LetterAnimation'
import Footer from '@/app/_components/Footer'
import SingleProductSkeleton from '@/app/_components/Skeletons/SingleProductSkeleton'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import { getSingleProduct } from '../../../../../actions/product'
const SingleProductImage = dynamic(() => import('../SingleProductImage'))
const ProductContent = dynamic(() => import('../ProductContent'))
const Cards = dynamic(() => import('@/app/_components/Cards/Cards'))
const ProductReview = dynamic(() => import('../ProductReview'))
import { motion } from 'framer-motion'

const SingleProduct = () => {

    const params = useParams();
    const id: string = Array.isArray(params?.id) ? params.id[0] : params?.id;

    const { isPending, error, data } = useQuery({
        queryKey: ['fetchProduct', id],
        queryFn: async () => await getSingleProduct(id)
    });

    // get recommanded products
    // const { isPending, error, data } = useQuery({
    //     queryKey: ['fetchProduct', id],
    //     queryFn: async () => await getSingleProduct(id)
    // });

    const product: any = data

    return (
        <>
            {isPending ?
                <SingleProductSkeleton />
                :
                <div className='py-5 w-full min-h-screen flex flex-col gap-10'>

                    <div className='p-2 flex flex-col md:flex-row items-start justify-center gap-5 md:gap-20 md:py-10 border-b max-h-[250px]'>
                        <h2 className="flex-1">
                            <LetterAnimation title={product?.proName} />
                        </h2>
                        <p className='flex-1'>
                            <LetterAnimation title={product?.proDesc} type="word" />
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row items-center gap-5 lg:gap-10 min-h-screen md:h-[600px] overflow-hidden'>
                        {/* product image */}
                        <motion.div
                            initial={{ opacity: 0, x: -180 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 1,
                                delay: 0.6,
                            }}
                            className='w-full md:flex-1 h-[500px] md:h-full overflow-hidden'
                        >
                            <SingleProductImage product={product} />
                        </motion.div>

                        {/* product contents */}
                        <motion.div
                            initial={{ opacity: 0, x: 180 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 1,
                                delay: 0.6,
                            }}
                            className='w-full md:flex-1 h-full'
                        >
                            <ProductContent product={product} />
                        </motion.div>
                    </div>

                    {/* suggested products */}
                    <div className='flex flex-col mt-5 items-center justify-center'>
                        <h3 className='text-2xl md:text-4xl text-neutral-500 w-[230px] md:w-[350px] text-center'>
                            <LetterAnimation title="Related to this" />
                            <b>
                                <LetterAnimation title="Product" />
                            </b>
                        </h3>
                        <span className='h-[2px] w-[100px] md:w-[150px] bg-neutral-400 mt-3 mb-10'></span>
                        <Cards isLoading={true} />
                    </div>

                    {/*product reviews */}
                    <div className='flex flex-col mt-5 items-center justify-center p-2 md:p-0'>
                        <h3 className='text-4xl text-neutral-500 md:w-[350px] text-center'>
                            <LetterAnimation title="Product" />
                            <b>
                                <LetterAnimation title="Reviews" />
                            </b>
                        </h3>
                        <span className='h-[2px] w-[150px] bg-neutral-400 mt-3 mb-10'></span>
                        <ProductReview product={product} />
                    </div>
                    <Footer />
                </div >
            }
        </>
    )
}

export default SingleProduct