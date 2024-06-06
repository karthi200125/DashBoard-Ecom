'use client'

import { useEffect, useState } from 'react';
import { Skeleton } from './skeleton';

interface ImageProps {
    src: any;
    imgclass?: string;
}

const Image = ({ src, imgclass }: ImageProps) => {
    const [imageLoading, setImageLoading] = useState<boolean>(false);

    useEffect(() => {
        const image = new window.Image();
        image.onload = () => {
            setImageLoading(true);
        };
        image.src = src;
    }, [src]);

    return (
        <>
            {!imageLoading ?
                <Skeleton className={`${imgclass} bg-neutral-200`} />
                :
                <img src={src} alt="" className={`${imgclass}`} loading='lazy' />
            }
        </>
    );
};

export default Image;