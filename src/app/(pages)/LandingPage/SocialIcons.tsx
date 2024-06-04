'use client'

import instagram from '../../assets/instagram.png'
import youtupe from '../../assets/youtube.png'
import facebook from '../../assets/facebook.png'
import Link from 'next/link';
import React from 'react'
import { FaInstagramSquare, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import Image from '@/components/ui/Image';

const SocialIcons = () => {

    const icons = [
        {
            id: 1,
            icon: instagram,
            href: "",
            name: "Instagram"
        },
        {
            id: 2,
            icon: facebook,
            href: "",
            name: "facebook"
        },
        {
            id: 3,
            icon: youtupe,
            href: "",
            name: "Youtupe"
        },
    ]

    return (
        <div className='flex flex-col items-center justify-center gap-3 h-full'>
            {icons?.map((icon) => (
                <Link href={icon.href} className='cursor-pointer' key={icon?.id}>
                    <Image src={icon?.icon.src} imgclass='w-10 h-10 be-neutral-200 rounded-full' />
                </Link>
            ))}
        </div>
    )
}

export default SocialIcons