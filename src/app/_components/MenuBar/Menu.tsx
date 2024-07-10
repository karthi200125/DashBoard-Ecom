'use client'

import { AnimatePresence, motion } from 'framer-motion';
import Line2 from './Line2';
import { useState, useEffect } from 'react';
import MobNav from './MenuMobContent';
import MenuBarContent from './MenuBarContent';
import './MenuBar.scss'
import { usePathname } from 'next/navigation';

export const variants = {
    open: {
        width: "100%",
        height: "110vh",
        transition: {
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
        },
        left: "0",
        top: "-10px",
    },
    closed: {
        width: 0,
        height: 0,
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
        left: "25px",
        top: "30px",
    }
};

interface MenuProps {
    isSticky: boolean;
    onOpen: any
}

const Menu = ({ isSticky, onOpen }: MenuProps) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const HandleLineClick = (d: any) => {
        setMenuOpen(d);
        onOpen(menuOpen)
    }

    return (
        <div className='w-full'>
            <motion.div
                className="expandmenu absolute w-full bg-black text-white"
                variants={variants}
                animate={menuOpen ? "open" : "closed"}
                initial="closed"
            >

                <AnimatePresence>
                    {menuOpen &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.75,
                                delay: 0.5,
                            }}
                        >
                            <MobNav onMenu={(d: any) => setMenuOpen(d)} />
                            <MenuBarContent onMenu={(d: any) => setMenuOpen(d)} />
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
            <Line2 onOpen={HandleLineClick} isSticky={isSticky} onClose={menuOpen} />
        </div>
    );
}

export default Menu;
