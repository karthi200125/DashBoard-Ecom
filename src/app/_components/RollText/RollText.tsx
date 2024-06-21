'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface RollTextProps {
    children?: React.ReactNode;
    href?: string;
    RtCls?: string;
}

const RollText = ({ children, href, RtCls }: RollTextProps) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Link href={href || '#'} className={`relative overflow-hidden ${RtCls}`}>
            <motion.div
                className="absolute w-full h-full"
                animate={{ top: isHover ? '-100%' : '0' }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <div className="flex items-center justify-center w-full h-full font-bold uppercase text-red-400 cursor-pointer">
                    {children}
                </div>
                <div className="flex items-center justify-center w-full h-full absolute top-full font-bold uppercase text-blue-500">
                    {children}
                </div>
            </motion.div>
        </Link>
    );
};

export default RollText;
