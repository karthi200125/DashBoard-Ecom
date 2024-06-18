'use client'

import Image from '@/components/ui/CustomImage'
import { ArrowRight } from 'lucide-react'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn'
import StarRating from './StarRating'
import Heart from '../Heart/Heart'
import Link from 'next/link'
import { useState , useEffect } from 'react'
import { GetReviewByProduct } from '../../../../actions/review'

interface CardProps {
    card?: any
}

const Card = ({ card }: CardProps) => {

    const [reviews, setReviews] = useState([]);
    const totalRating = reviews?.length > 0 ? reviews.reduce((sum, review) => sum + parseFloat(review?.revRating || '0'), 0) : 0;
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

    useEffect(() => {
        const getReviews = async () => {
          const reviews = await GetReviewByProduct(card?.id);
          setReviews(reviews?.data);
        };
        getReviews();
      }, [card?.id]);
    

    return (
        <Link href={`/singleproduct/${card?.id}`} className='min-w-[300px] rounded-[30px] h-[500px] overflow-hidden relative shadow-md hover:shadow-custom-shadow transition duration-300 group'>
            {/* image con */}
            <div className='h-[280px] overflow-hidden relative'>
                <Image src={card?.proImage[0] || ""} imgclass='w-full h-full bg-neutral-200 object-contain transform group-hover:scale-[1.3] transition duration-500' alt='' />
                <div className='w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center absolute top-3 right-3'>
                    <Heart id={card?.id} />
                </div>
                <div className='absolute top-3 left-3 w-[60px] h-[35px] rounded-full bg-white flex items-center justify-center text-sm font-bold'>
                    70%
                </div>
            </div>

            {/* card content */}
            <div className='bg-white w-full h-[220px] p-5 flex flex-col justify-between'>
                <h2 className='capitalize'>{card?.proName}</h2>
                <p className='leading-0 line-clamp-2'>{card?.proDesc}</p>

                {/* rating */}
                <div className='flex flex-row items-center justify-between'>
                    <StarRating rating={averageRating} />
                    <div className="font-bold">₹ {card?.proPrice} <span className="text-sm text-neutral-400">Rs</span></div>
                </div>

                {/*  add to car button*/}
                <div className='flex flex-row items-center justify-between'>
                    <div className='w-[50px] h-[50px] border rounded-full flex items-center justify-center rotate-[-45deg] group-hover:rotate-0 transition duration-500 group-hover:bg-black group-hover:text-white cursor-pointer'>
                        <ArrowRight />
                    </div>
                    <AddToCartBtn />
                </div>

            </div>
        </Link>
    )
}

export default Card