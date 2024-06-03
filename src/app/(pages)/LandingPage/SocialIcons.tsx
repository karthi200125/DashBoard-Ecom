'use client'

import Link from 'next/link';
import React from 'react'
import { FaInstagramSquare, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const SocialIcons = () => {

    const icons = [
        {
            id: 1,
            icon: <SiInstagram />,
            href: "",
            name: "Instagram"
        },
        {
            id: 2,
            icon: <FaFacebookF />,
            href: "",
            name: "facebook"
        },
        {
            id: 3,
            icon: <FaWhatsapp />,
            href: "",
            name: "Youtupe"
        },
    ]

    return (
        <div className='flex flex-col items-center justify-center gap-3 h-full'>
            {icons?.map((icon) => (
                <Link href={icon.href} className='w-[40px] h-[40px] rounded-full text-white bg-black flex items-center justify-center cursor-pointer' key={icon?.id}>
                    {icon?.icon}
                </Link>
            ))}
        </div>
    )
}

export default SocialIcons