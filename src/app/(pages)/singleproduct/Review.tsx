'use client';

import StarRating from '@/app/_components/Cards/StarRating';
import { monthsAgo } from '@/app/hooks/MomentDate';
import Image from '@/components/ui/CustomImage';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getUserById } from '../../../../actions/users';

interface ReviewPeops {
    review: {
        userId: string;
        revRating: any;
        createdAt: string;
        revDesc: string;
        revTitle: string;
    };
}

const Review = ({ review }: ReviewPeops) => {
    const [showMore, setShowMore] = useState<boolean>(false);

    const { isPending, data: reviewUser } = useQuery({
        queryKey: ['reviewuser'],
        queryFn: async () => await getUserById(review.userId)
    });

    const rating = Number(review.revRating);

    return (
        <div className='w-full rounded-[20px] p-5 max-h-max border flex flex-row items-start gap-10'>
            {/* user profile */}
            <div className='hidden md:flex flex-col gap-3 w-[20%] items-center justify-center'>
                <Image src={reviewUser?.image || ""} imgclass='rounded-[15px] bg-neutral-200 w-[100px] h-[100px] rounded-full' alt='user image' />
                <h5 className='line-clamp-2 text-center'>{reviewUser?.name}</h5>
            </div>

            {/* user review content */}
            <div className='flex flex-col w-full h-full gap-3'>
                <div className='flex flex-row items-center justify-between'>
                    <StarRating rating={rating || 0} size='15' showrating={false} />
                    <p className='hidden md:block '>{monthsAgo(review.createdAt)}</p>
                </div>
                <h4 className='capitalize'>{review.revTitle}</h4>
                <p className={`capitalize ${showMore ? '' : 'line-clamp-2'}`}>
                    {review.revDesc}
                </p>
                <button onClick={() => setShowMore(!showMore)} className="text-blue-500 mt-2 text-[10px]">
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
                <div className='md:hidden flex flex-row items-center gap-2 justify-between'>
                    <h6>by {reviewUser?.name}</h6>
                    {/* <span className='w-[5px] h-[5px] rounded-full bg-black'></span> */}
                    <p>{monthsAgo(review.createdAt)}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
