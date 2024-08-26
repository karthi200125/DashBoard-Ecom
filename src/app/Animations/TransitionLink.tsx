'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { MouseEvent, useEffect, useState } from 'react';
import { animatePageOut, animatePageIn } from './pageTransistionAnimate';

interface Props {
    href?: string;
    children: React.ReactNode;
}

const TransitionLink = ({ href, children }:Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {       
        if (!isAnimating) {
            animatePageIn();
        }
       
        const resetAnimationState = () => setIsAnimating(false);
        router.events.on('routeChangeComplete', resetAnimationState);

        return () => {
            router.events.off('routeChangeComplete', resetAnimationState);
        };
    }, [pathname, isAnimating, router.events]);

    const handleClick = async (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!href || pathname === href || isAnimating) return;

        setIsAnimating(true);

        try {
            await animatePageOut(href, router);
            router.push(href);
        } catch (error) {          
            setIsAnimating(false);
        }
    };

    return (
        <div onClick={handleClick}>
            {children}
        </div>
    );
};

export default TransitionLink;
