import React from 'react';
import { IoClose } from "react-icons/io5";

interface ToastProps {
    error?: boolean;
    success?: boolean;
    msg?: string;
    desc?: string;
}

const CustomToast = ({ error, success, msg, desc }: ToastProps) => {
    return (
        <div className={`w-[350px] rounded-[10px] ${error ? "bg-destructive/15" : success ? "bg-emerald/15" : "bg-white"} border p-5 relative`}>
            <h2 className={`text-lg ${error ? "text-destructive" : success ? "text-emerald-500" : "text-black"}`}>{msg}</h2>
            {desc &&
                <p className={`${error ? "text-destructive" : success ? "text-emerald-400" : "text-black"} mt-2`}>{desc}</p>
            }
            {/* Uncomment the line below and import toast from your preferred library to enable close functionality */}
            {/* <IoClose size={20} onClick={() => toast.dismiss()} className='absolute top-2 right-2 cursor-pointer' /> */}
        </div>
    )
}

export default CustomToast;
