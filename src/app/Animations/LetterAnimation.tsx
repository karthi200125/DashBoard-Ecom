'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LetterAnimationProps {
    title: string;
}

const letterAni = {
    initial: { y: 800 },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
            staggerChildren: 0.05,
        },
    },
};

const LetterAnimation: React.FC<LetterAnimationProps> = ({ title }) => {
    const [currentTitle, setCurrentTitle] = useState(title);
    const [key, setKey] = useState(0);

    useEffect(() => {
        setCurrentTitle(title);
        setKey((prevKey) => prevKey + 1); 
    }, [title]);

    return (
        <motion.span
            key={key}
            className='row-title'
            initial='initial'
            animate='animate'
            variants={{
                animate: {
                    transition: {
                        staggerChildren: 0.05,
                    },
                },
            }}
        >
            {[...currentTitle].map((letter, index) => (
                <motion.span
                    className='row-letter'
                    variants={letterAni}
                    key={index}
                >
                    {letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default LetterAnimation;
