'use client'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";
import { signOut } from "next-auth/react";
import noprofile from '../assets/noprofile.webp';

import { memo, useCallback } from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";

import { perspective } from '@/app/Animations/animate';
import { animatePageOut } from '@/app/Animations/pageTransistionAnimate';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { CiGrid31 } from 'react-icons/ci';
import { LiaProductHunt } from 'react-icons/lia';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';
import Icon from "./Icon";

interface UserProfileProps {
    profileCls?: string,
    proSrc?: string,
    proAlt?: string,
    tooltip?: string,
    type?: string,
    user?: any
}

const UserProfile = ({ profileCls, proSrc, proAlt, tooltip, user, type }: UserProfileProps) => {
    const router = useRouter();
    const CurrentUser = useCurrentUser();
    const pathname = usePathname();

    const mobilenavitems = [
        {
            id: 1,
            href: `/profile/${user?.id}`,
            name: "Profile",
            icon: <MdOutlinePersonOutline size={20} />,
            count: "",
            show: true,
        },
        {
            id: 2,
            href: "/shop",
            name: "Shop",
            icon: <LiaProductHunt size={20} />,
            count: "",
            show: true,
        },
        {
            id: 3,
            href: "/dashboard/users",
            name: "Dashboard",
            icon: <CiGrid31 size={20} />,
            count: "",
            show: user?.isAdmin,
        },
        {
            id: 4,
            href: "/",
            name: "Logout",
            icon: <TbLogout size={20} />,
            count: "",
            show: user,
        },
    ];

    const handleLogout = useCallback(async () => {
        await signOut();
        router.push('/');
        router.refresh();
        localStorage.removeItem('addimages');
        localStorage.removeItem('filterValues');
    }, [router]);

    const handleProfileClick = useCallback(() => {
        router.push(`/profile/${user?.id}`);
    }, [router, user?.id]);

    const HandleClick = (item: any) => {
        const href = item?.href;
        if (href && pathname !== href) {
            animatePageOut(href, router);
            router.push(href);
        }
    }

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Avatar className={`${profileCls} cursor-pointer`} onClick={handleProfileClick}>
                    <AvatarImage src={proSrc || noprofile.src} alt={proAlt} />
                    <AvatarFallback>
                        <Skeleton className={`${profileCls} bg-neutral-200 rounded-full`} />
                    </AvatarFallback>
                </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-[300px] rounded-[20px] bg-white z-10 p-3">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-5 border-b py-3 overflow-hidden whitespace-nowrap">
                        <Avatar className="w-12 h-12">
                            <AvatarImage src={user?.image || noprofile.src} />
                            <AvatarFallback>
                                <Skeleton className={`w-10 h-10 bg-neutral-200 rounded-full`} />
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <h5 className="line-clamp-1">{user?.name}</h5>
                            <p className="line-clamp-1">{user?.email}</p>
                        </div>
                    </div>
                    {user?.id === CurrentUser?.id && type === "nav" &&
                        <div className='w-full h-full flex flex-col gap-1'>
                            {mobilenavitems?.map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={perspective}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    custom={i}
                                    className={`${!item.show && "hidden"} flex items-center gap-3 justify-start p-2 rounded-[10px] cursor-pointer hover:bg-neutral-100`}
                                    onClick={() => item?.name === 'Logout' ? handleLogout() : HandleClick(item)}
                                >
                                    <a className="flex items-center gap-3">
                                        <Icon icon={item.icon} iconCls="text-black" />
                                        <h5>{item.name}</h5>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    }
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default memo(UserProfile);
