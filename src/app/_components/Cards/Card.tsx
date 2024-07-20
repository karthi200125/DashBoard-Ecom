'use client'

import Image from '@/components/ui/CustomImage'
import { ArrowRight } from 'lucide-react'
import { memo, useCallback, useEffect, useState } from 'react'
import { GetReviewByProduct } from '../../../../actions/review'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn'
import Heart from '../Heart/Heart'
import StarRating from './StarRating'
import { usePathname, useRouter } from 'next/navigation'
import { FaStar } from 'react-icons/fa'
import { animatePageOut } from '@/app/Animations/pageTransistionAnimate'
import Spinners from '../Spinners'
import { useQuery } from '@tanstack/react-query'

interface CardProps {
    card?: any
}

const Card = ({ card }: CardProps) => {
    const router = useRouter()
    const pathname = usePathname();

    const { isPending, data } = useQuery({
        queryKey: ['getReviews', card?.id],
        queryFn: async () => await GetReviewByProduct(card?.id)
    });

    const reviews: any = data?.data || []

    const totalRating = reviews?.length > 0 ? reviews.reduce((sum: any, review: any) => sum + parseFloat(review?.revRating || '0'), 0) : 0;
    const averageRating = reviews?.length > 0 ? totalRating / reviews?.length : 0;

    const cardClick = useCallback(() => {
        const href = `/singleproduct/${card?.id}`;
        if (href && pathname !== href) {
            animatePageOut(href, router);
            router.push(href)
        }
    }, [card?.id, router]);

    return (
        <div className='w-full md:min-w-[300px] rounded-[20px] md:rounded-[30px] max-h-max md:h-[500px] overflow-hidden relative shadow-md hover:shadow-custom-shadow transition duration-300 group' onClick={cardClick}>
            {/* image con */}
            <div className='h-[200px] md:h-[280px] overflow-hidden relative'>
                <Image
                    src={card?.proImage[0] || ""}
                    imgclass='w-full h-full bg-neutral-200 object-contain transition duration-500 transform group-hover:scale-[1.3]'
                    alt=''
                />
                <div className='w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center absolute top-3 right-3'>
                    <Heart product={card} />
                </div>
                <div className='absolute top-3 left-3 w-[60px] h-[35px] rounded-full bg-black text-white flex items-center justify-center text-sm font-bold'>
                    {`${card?.proOffer || 0}%`}
                </div>
            </div>

            {/* card content */}
            <div className='bg-white w-full max-h-max md:h-[220px] p-2 md:p-5 flex flex-col gap-3 md:justify-between'>
                <h5 className='text-[12px] md:text-[15px] capitalize line-clamp-2 md:line-clamp-1'>{card?.proName}</h5>
                <div className="hidden md:flex h-[45px] overflow-hidden w-full">
                    <p className='line-clamp-2'>{card?.proDesc}</p>
                </div>

                {/* rating */}
                <div className='flex flex-col gap-3 md:flex-row items-start md:items-center justify-between'>
                    {/* <StarRating rating={averageRating} size='15'/> */}
                    <div className='hidden md:flex w-full md:max-w-max border rounded-full px-5 h-[35px] flex-row items-center justify-center gap-3'>
                        <div className="flex flex-row items-center gap-2">
                            <p className='text-muted-foreground'>{averageRating.toFixed(1)}</p>
                            <FaStar className="text-yellow-500" size={10} />
                        </div>
                        <span className="h-[20px] w-[1px] bg-neutral-200"></span>
                        <p className='text-muted-foreground'>{reviews?.length}</p>
                    </div>
                    <h5>₹ {card?.proPrice} <span className="text-neutral-400">Rs</span></h5>
                </div>

                {/*  add to car button*/}
                <div className='flex flex-row items-center justify-between'>
                    <div className='hidden md:flex w-[50px] h-[50px] border rounded-full items-center justify-center rotate-[-45deg] group-hover:rotate-0 transition duration-500 group-hover:bg-black group-hover:text-white cursor-pointer'>
                        <ArrowRight />
                    </div>
                    <AddToCartBtn product={card} />
                </div>

            </div>
        </div>
    )
}

export default memo(Card)