'use client'

import Image from '@/components/ui/CustomImage';
import Link from 'next/link';
import facebook from '../../assets/facebook.webp';
import instagram from '../../assets/instagram.webp';
import youtupe from '../../assets/youtube.webp';

interface SocilaIconsProps {
    type?: string
}

const SocialIcons = ({ type }: SocilaIconsProps) => {

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
        <div className={`flex items-center justify-center gap-3 h-full ${type === "footer" ? "flex-row" : "flex-col"}`}>
            {icons?.map((icon) => (
                <Link href={icon.href} className='cursor-pointer' key={icon?.id}>
                    <Image src={icon?.icon.src} imgclass={`be-neutral-200 rounded-full ${type === "footer" ? "w-7 h-7" : "w-10 h-10"}`} alt='social icons'/>
                </Link>
            ))}
        </div>
    )
}

export default SocialIcons