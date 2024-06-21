'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { animatePageOut } from './pageTransistionAnimate';


interface Props {
    href?: string;
    children: React.ReactNode;
}

const TransitionLink = ({ href, children }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (href && pathname !== href) {
            animatePageOut(href, router);
            router.push(href)
        }
    };

    return (
        <div onClick={handleClick}>
            {children}
        </div>
    );
};

export default TransitionLink;
