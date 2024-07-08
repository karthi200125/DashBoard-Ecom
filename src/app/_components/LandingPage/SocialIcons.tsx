'use client'

import Image from '@/components/ui/CustomImage';
import Link from 'next/link';
import facebook from '../../assets/facebook.webp';
import instagram from '../../assets/instagram.webp';
import youtupe from '../../assets/youtube.webp';
import { motion } from 'framer-motion'

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
            {icons?.map((icon, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -180 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 0.6 + i * 0.3,
                    }}
                    // href={icon.href}
                    className='cursor-pointer'                    
                >
                    <Image src={icon?.icon.src} imgclass={`be-neutral-200 rounded-full ${type === "footer" ? "w-7 h-7" : "w-10 h-10"}`} alt='social icons' />
                </motion.div>
            ))}
        </div>
    )
}

export default SocialIcons