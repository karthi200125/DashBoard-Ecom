'use client'

import { useEffect, useState } from 'react';
import { Skeleton } from './skeleton';
import Image from 'next/image';

interface CustomImageProps {
    src: any;
    imgclass?: string;
    alt?: string;
    onClick?: () => void
}

const CustomImage = ({ src, imgclass, onClick, alt }: CustomImageProps) => {
    const [customImageLoading, setCustomImageLoading] = useState<boolean>(false);

    useEffect(() => {
        const customImage = new window.Image();
        customImage.onload = () => {
            setCustomImageLoading(true);
        };
        customImage.src = src;
    }, [src]);
        
    return (
        <>
            {!customImageLoading ?
                <Skeleton className={`${imgclass} bg-neutral-200`} />
                :
                <div className={`${imgclass} relative`} onClick={onClick} >
                    <Image
                        src={src}
                        alt={alt || ''} 
                        fill={true}
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </div>
                // <img src={src} alt="" className={`${imgclass}`} loading='lazy' onClick={onClick} />
            }
        </>
    );
};

export default CustomImage
