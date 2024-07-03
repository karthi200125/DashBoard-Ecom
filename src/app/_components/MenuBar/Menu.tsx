'use client'

import { AnimatePresence, motion } from 'framer-motion';
import Line2 from './Line2';
import { useState } from 'react';
import MobNav from './MenuMobContent';
import MenuBarContent from './MenuBarContent';
import './MenuBar.scss'

export const variants = {
    open: {
        width: "100%",
        height: "100vh",
        transition: {
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
        },
        left: "0",
        top: "0",
    },
    closed: {
        width: 0,
        height: 0,
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
        left: "25px",
        top: "30px",
        // borderRadius: "30px"
    }
};

interface MenuProps {
    isSticky: boolean;
}

const Menu = ({ isSticky }: MenuProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                            <MobNav />
                            <MenuBarContent />
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
            <Line2 onOpen={(d: boolean) => setMenuOpen(d)} isSticky={isSticky} />
        </div>
    );
}

export default Menu;
