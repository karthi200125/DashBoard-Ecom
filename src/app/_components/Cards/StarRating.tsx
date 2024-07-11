import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

interface StarRatingProps {
    rating?: number;
    size?: string;
    showrating?: boolean;
    star?: string
}

const StarRating = ({ rating = 0, size = "20", showrating = true, star = '5' }: StarRatingProps) => {
    const stars = Array(5).fill(0);

    return (
        <div className="flex items-center flex-row gap-1">
            {star === '1' ?
                <FaStar className="text-yellow-500" size={size} />
                :
                stars.map((_, index) => {
                    if (rating >= index + 1) {
                        return <FaStar key={index} className="text-yellow-500" size={size} />;
                    } else if (rating > index && rating < index + 1) {
                        return <FaStarHalfAlt key={index} className="text-yellow-500" size={size} />;
                    } else {
                        return <FaRegStar key={index} className="text-gray-400" size={size} />;
                    }
                })}
            {showrating &&
                <div className='h-[30px] ml-2  flex items-center justify-center px-2 bg-black text-white rounded-[5px]'>
                    <h6 className='font-bold'>{rating} / 5</h6>
                </div>
            }
        </div>
    );
};

export default StarRating;
