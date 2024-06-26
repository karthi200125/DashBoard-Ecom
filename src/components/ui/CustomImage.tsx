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
                        // layout='responsive'
                        width={100} 
                        height={100} 
                        className={`${imgclass}`}
                        // style={{ imageRendering: 'auto' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            }
        </>
    );
};

export default CustomImage
