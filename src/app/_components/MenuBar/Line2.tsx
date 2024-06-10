'use client'
import { useState } from "react"

interface Line2Props {
    isSticky?: boolean;
    onOpen: (value: boolean) => void;
}

const Line3 = ({ onOpen, isSticky }: Line2Props) => {

    const [open, setOpen] = useState(false)

    const click = () => {
        setOpen(!open)
        onOpen(!open)
    }

    return (
        <div className={`${open && "openmenu"} menu ${isSticky && "bg-black"} flex items-center justify-center rounded-full ml-[-10px] z-[9999]`} onClickCapture={click}>
            <div className="">
                <span className={`line1 ${isSticky ? "bg-white" : "bg-black"}`}></span>
                <span className={`line2 ${isSticky ? "bg-white" : "bg-black"}`}></span>
                <span className={`line3 ${isSticky ? "bg-white" : "bg-black"}`}></span>
            </div>
        </div>
    )
}

export default Line3