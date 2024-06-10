'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideUp } from './animate'

interface TextSlideUpProps {
  word: string;
  textSlideUpCls?: string;
}

const TextSlideUp = ({ word, textSlideUpCls = '' }: TextSlideUpProps) => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(descriptionRef, { once: true });

  return (
    <div ref={descriptionRef} className="">
      <p>
        {
          word.split("").map((letter, index) => (
            <motion.span
              variants={slideUp}
              custom={index}
              initial="initial"
              animate={isInView ? "open" : "closed"}
              key={index}
              className={`${textSlideUpCls} myCustomClass`}
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


