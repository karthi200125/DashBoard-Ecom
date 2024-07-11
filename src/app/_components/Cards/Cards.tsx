'use client';

import { usePathname } from 'next/navigation';
import CustomPagination from '../CustomPagination';
import Card from './Card';
import CardSkeleton from './CardSkeleton';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const cardsSlipUpOneByOne = {
    initial: {
        opacity: 0,
        translateY: 600,
    },
    enter: (i: number) => ({
        opacity: 1,
        translateY: 0,
        transition: {
            delay: 0.5 + (i * 0.1),
            opacity: { duration: 0.35 },
            duration: 0.65,
            ease: [.255, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0
    }
};

interface CardsProps {
    products?: any[];
    isLoading?: boolean;
    count?: number;
}

const Cards = ({ products, isLoading, count }: CardsProps) => {
    const pathname = usePathname();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
    }, [inView]);

    return (
        <>
            <div ref={ref} className='w-full max-h-max p-2 md:p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-hidden'>
                {isLoading ?
                    Array(8).fill(0).map((_, index) => (
                        <CardSkeleton key={index} />
                    ))
                    :
                    products && products.length > 0 ?
                        products.map((card, i) => (
                            <motion.div
                                key={i}
                                variants={cardsSlipUpOneByOne}
                                animate={inView ? "enter" : "exit"}
                                initial="initial"
                                custom={i}
                            >
                                <Card card={card} />
                            </motion.div>
                        ))
                        :
                        <div className='h-[100px] flex items-center justify-center text-xl font-bold mx-auto w-full'>
                            {/* No Products */}
                        </div>
                }
            </div>
            {pathname !== "/" && products && products?.length > 0 && (
                <CustomPagination count={count} />
            )}

        </>
    );
};

export default Cards;
