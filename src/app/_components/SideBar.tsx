import React, { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

interface SideBarProps {
    direction?: 'left' | 'right';
    isOpen: boolean;
    sidebarCls?: string;
    title?: string;
    isClose: () => void;
    body?: React.ReactElement
}

const SideBar = ({ direction = 'left', isOpen, sidebarCls = '', isClose, body, title }: SideBarProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            setTimeout(() => setIsRendered(true), 10);
        } else {
            setIsRendered(false);
            const timer = setTimeout(() => setIsMounted(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <>
            {isMounted && (
                <div className='w-full xl:w-[1336px] fixed top-0 left-1/2 transform -translate-x-1/2 h-screen z-10 overflow-hidden sidebarcon'>
                    <div
                        className={`border-r-[1px] bg-neutral-100 h-full absolute transition-transform duration-500 ease-in-out p-2 md:p-5 flex flex-col gap-3 ${sidebarCls}
                            ${isRendered ? (direction === 'right' ? 'translate-x-0' : '-translate-x-0') : (direction === 'right' ? 'translate-x-full' : '-translate-x-full')}`}
                    >
                        <div className='flex flex-row items-center justify-between h-max'>
                            <h4>{title}</h4>
                            <IoIosClose size={30} onClick={isClose} className='cursor-pointer' />
                        </div>
                        {body}
                    </div>
                </div>
            )}
        </>
    );
};

export default SideBar;
