'use client';
import { useEffect, useState } from 'react';
import { likeAction } from '../../../../actions/like';
import './Heart.scss';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { getUserById } from '../../../../actions/users';

interface HeartProps {
    id: string;
}

const Heart = ({ id }: HeartProps) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const user = useCurrentUser();    
    const isLiked = true; 

    useEffect(() => {        
        setIsAnimated(isLiked);
    }, [isLiked]);

    const handleLike = async (e: any) => {
        e.stopPropagation();        
    };

    return (
        <div
            className={`HeartAnimation ${isAnimated ? 'animate' : ''}`}
            onClick={handleLike}
        ></div>
    );
};

export default Heart;
