'use client'

import React from 'react';
import Icon from '../Icon';
import { mobilenavitems } from '../dummydata';
import { motion } from 'framer-motion';

export const perspective = {
    initial: {
        opacity: 0,
        translateY: 80,
        translateX: -20,
        rotateX: 90
    },
    enter: (i: number) => ({
        opacity: 1,
        translateY: 0,
        rotateX: 0,
        translateX: 0,
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

const MobNav = () => {
    return (
        <div className='fixed top-0 left-0 md:hidden w-full h-full p-5'>
            <div className='w-full h-full flex flex-col gap-1 mt-[100px] '>
                {mobilenavitems.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={perspective}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        custom={i}
                        className={`${!item.show && "hidden"} flex items-center gap-3 justify-start p-2 rounded-[5px] hover:bg-neutral-100`}
                    >
                        <a className="flex items-center gap-3">
                            <Icon icon={item.icon} count={item.count || 0} />
                            <h2 className='text-lg'>{item.name}</h2>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MobNav;
