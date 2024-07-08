'use client'
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation';

interface Line2Props {
    isSticky?: boolean;
    onOpen: (value: boolean) => void;
}

const Line3 = ({ onOpen, isSticky }: Line2Props) => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    const click = () => {
        setOpen(!open)
        onOpen(!open)
    }

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <div className={`${open && "openmenu"} menu ${isSticky && "bg-black z-[9999]"} flex items-center justify-center rounded-full ml-[-10px] z-[9999]`} onClickCapture={click}>
            <div className="">
                <span className={`line1 ${isSticky ? open ? "bg-white" : "bg-white" : open ? "bg-white" : "bg-black"}`}></span>
                <span className={`line2 ${isSticky ? open ? "bg-white" : "bg-white" : open ? "bg-white" : "bg-black"}`}></span>
                <span className={`line3 ${isSticky ? open ? "bg-white" : "bg-white" : open ? "bg-white" : "bg-black"}`}></span>
            </div >
        </div >
    )
}

export default Line3