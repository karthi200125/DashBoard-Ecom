'use client'
import { useState } from "react";

interface Line2Props {
    isSticky?: boolean;
    onOpen: (value: boolean) => void;
    onClose: any
}

const Line3 = ({ onOpen, isSticky, onClose }: Line2Props) => {

    const [open, setOpen] = useState(onClose)

    const click = () => {
        setOpen(!open)
        onOpen(!open)
    }


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