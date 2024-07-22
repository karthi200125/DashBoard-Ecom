import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './TextAnimation.scss';

export const slideDown = {
    initial: {
        y: "-100%"
    },
    open: (i: any) => ({
        y: "0%",
        transition: { duration: 0.5, delay: 0.05 * i }
    }),
    closed: {
        y: "-100%",
        transition: { duration: 0.5 }
    }
};


export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.5 }
    }
};

const FooterAnimation = () => {
    const phrase = "DEXON";
    const descriptionRef = useRef(null);
    const isInView = useInView(descriptionRef);

    return (
        <div ref={descriptionRef} className="ddescription">
            <div className="dbody ">
                <p>
                    {
                        phrase.split("").map((letter, index) => (
                            <span className="dmask text-[80px] md:text-[150px] xl:text-[220px] text-white" key={index}>
                                <motion.span
                                    variants={slideDown}
                                    custom={index}
                                    animate={isInView ? "open" : "closed"}
                                >
                                    {letter}
                                </motion.span>
                            </span>
                        ))
                    }
                </p>
            </div>
        </div>
    );
};

export default FooterAnimation;
