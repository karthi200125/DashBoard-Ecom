import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface LetterAnimationProps {
    title: string;
    type?: 'word';
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

const wordAni = {
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

const LetterAnimation = ({ title, type }: LetterAnimationProps) => {
    const [currentTitle, setCurrentTitle] = useState(title);
    const [key, setKey] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        setCurrentTitle(title);
        setKey((prevKey) => prevKey + 1);
    }, [title]);

    let words: string[] = [];
    if (type === 'word') {
        words = title.split(' ');
    } else {
        // For characters, create an array of characters
        words = Array.from(title);
    }

    return (
        <motion.span
            key={key}
            className='row-title overflow-hidden'
            initial='initial'
            animate={inView ? 'animate' : 'initial'}
            ref={ref}
            variants={{
                animate: {
                    transition: {
                        staggerChildren: type === 'word' ? 0.05 : 0.05,
                    },
                },
            }}
        >
            {words.map((wordOrLetter, index) => (
                <motion.span
                    className='row-letter leading-none'
                    variants={type === 'word' ? wordAni : letterAni}
                    key={index}
                >
                    {type === 'word' ? `${wordOrLetter}\u00A0` : (wordOrLetter === ' ' ? '\u00A0' : wordOrLetter)}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default LetterAnimation;
