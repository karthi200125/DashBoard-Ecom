'use client';
import { useState } from 'react';
import { likeAction } from '../../../../actions/like';
import './Heart.scss';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';

interface HeartProps {
    id: string;
}

const Heart = ({ id }: HeartProps) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const user = useCurrentUser()
    const userId = user?.id
    const handleLike = async () => {
        const data = await likeAction(id, userId);
        console.log(data)
        if (data.success) {
            setIsAnimated(true);
        } else if (data.error) {
            setIsAnimated(false);
        }
    };

    return (
        <div
            className={`HeartAnimation ${isAnimated ? 'animate' : ''}`}
            onClick={handleLike}
        ></div>
    );
};

export default Heart;
