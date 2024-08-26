'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { MouseEvent, useEffect, useState } from 'react';
import { animatePageOut, animatePageIn } from './pageTransistionAnimate';

interface Props {
    href?: string;
    children: React.ReactNode;
}

const TransitionLink: React.FC<Props> = ({ href, children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Handle page entry animation when the component mounts or the path changes
        animatePageIn();
    }, [pathname]);

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
