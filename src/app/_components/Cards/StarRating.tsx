import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

interface StarRatingProps {
    rating?: number;
    size?: string;    
}

const StarRating = ({ rating = 0, size = "20" }: StarRatingProps) => {
    const stars = Array(5).fill(0);

    return (
        <div className="flex items-center flex-row gap-1">
            {stars.map((_, index) => {
                if (rating >= index + 1) {
                    return <FaStar key={index} className="text-yellow-500" size={size} />;
                } else if (rating > index && rating < index + 1) {
                    return <FaStarHalfAlt key={index} className="text-yellow-500" size={size} />;
                } else {
                    return <FaRegStar key={index} className="text-gray-400" size={size} />;
                }
            })}
            <div className='text-md ml-2 font-bold flex items-center justify-center px-2 bg-black text-white rounded-[5px]'>{rating}</div>
        </div>
    );
};

export default StarRating;
