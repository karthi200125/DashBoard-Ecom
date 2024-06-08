import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }: any) => {
    const stars = Array(5).fill(0);

    return (
        <div className="flex items-center flex-row gap-1">
            {stars.map((_, index) => {
                if (rating >= index + 1) {
                    return <FaStar key={index} className="text-yellow-500" />;
                } else if (rating > index && rating < index + 1) {
                    return <FaStarHalfAlt key={index} className="text-yellow-500" />;
                } else {
                    return <FaRegStar key={index} className="text-gray-400" />;
                }
            })}
            <div className='font-bold ml-2'>{rating}</div>
        </div>
    );
};

export default StarRating;
