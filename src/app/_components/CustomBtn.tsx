'use client'

import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import Spinners from './Spinners';

interface BtnProps {
    children: React.ReactNode;
    arrow?: boolean;
    border?: boolean;
    btnbg?: string;
    btnCls?: string;
    arrowCls?: string;
    RtCls?: string;
    isLoading?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean
}

const CustomBtn = ({ children, arrow, btnCls, isLoading, border, arrowCls, onClick, type, RtCls, disabled }: BtnProps) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <button
            className={`relative overflow-hidden px-2 group  text-[12px] md:text-[15px] flex flex-row items-center gap-3 rounded-full h-[55px] ${border ? "border" : ""} hover:bg-blck hover:txt-white transition duration-300 hover:shadow-xl flex items-center justify-center whitespace-nowrap ${isLoading || disabled ? "cursor-not-allowed" : ""} ${btnCls}`}
            disabled={disabled || isLoading}
            onClick={onClick}
            type={type}
        >
            {isLoading ? (
                <div className='flex flex-row items-center gap-2'>
                    <span>Loading...</span>
                    <Spinners />
                </div>
            ) : (
                <>
                    {/* <motion.div
                        className="absolute w-full h-full"
                        animate={{ top: isHover ? '-100%' : '0' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <p className="flex items-center justify-center w-full h-full font-bold uppercase cursor-pointer whitespace-nowrap">
                            {children}
                        </p>
                        <p className="flex items-center justify-center w-full h-full absolute top-full font-bold uppercase whitespace-nowrap">
                            {children}
                        </p>
                    </motion.div> */}
                    {children}
                    {arrow && (
                        <div className={`w-[40px] h-[40px] flex items-center justify-center bg-neutral-200 rounded-full rotate-[-45deg] transition duration-500 group-hover:rotate-0 ${arrowCls}`}>
                            <ArrowRight />
                        </div>
                    )}
                </>
            )}
        </button>
    );
};

export default CustomBtn;
