'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from './animate'; 
import { useInView } from 'react-intersection-observer';

interface TextSlideUpProps {
  word: string;
  textSlideUpCls?: string;
}

const TextSlideUp = ({ word, textSlideUpCls }: TextSlideUpProps) => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({    
    threshold: 0.5 
  });

  return (
    <div ref={descriptionRef} className={textSlideUpCls}>
      <p>
        {
          word.split("").map((letter, index) => (
            <motion.span
              variants={slideUp}
              custom={index}
              initial="initial"
              animate={inView ? "open" : "closed"}
              key={index}
              ref={ref} 
            >
              {letter}
            </motion.span>
          ))
        }
      </p>
    </div>
  );
};

export default TextSlideUp;
