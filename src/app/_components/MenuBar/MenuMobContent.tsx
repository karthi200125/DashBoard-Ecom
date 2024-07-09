'use client'

import React from 'react';
import Icon from '../Icon';
import { motion } from 'framer-motion';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { perspective } from '@/app/Animations/animate';
import { useCart } from '../ContextApi/CartContext';
import { HiOutlineHome } from 'react-icons/hi2';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';
import { LiaProductHunt } from 'react-icons/lia';
import { CiGrid31 } from 'react-icons/ci';
import { TbLogout } from 'react-icons/tb';
import { useRouter, usePathname } from 'next/navigation';
import { animatePageOut } from '@/app/Animations/pageTransistionAnimate';
import UserProfile from '../UserProfile';


const MobNav = () => {

    const user: any = useCurrentUser()
    const { state } = useCart();
    const { items } = state;
    const router = useRouter();
    const pathname = usePathname();

    const mobilenavitems = [
        {
            id: 1,
            href: "/",
            name: "Home",
            icon: <HiOutlineHome size={25} />,
            count: "",
            show: true,
        },
        {
            id: 2,
            href: `/profile/${user?.id}`,
            name: "Profile",
            // icon: user?.image ? <UserProfile proSrc={user?.image} profileCls='w-10 h-10' /> : <MdOutlinePersonOutline size={25} />,
            icon: <UserProfile proSrc={user?.image} profileCls='w-10 h-10' />,
            count: "",
            show: true,
        },
        {
            id: 3,
            href: "/cart",
            name: "Cart",
            icon: <BsCart3 size={25} />,
            count: items.length,
            show: true,
        },
        {
            id: 4,
            href: "/favourite",
            name: "Favourites",
            icon: <IoMdHeartEmpty size={25} />,
            count: user?.favorite?.length,
            show: true,
        },
        {
            id: 5,
            href: "/shop",
            name: "Shop",
            icon: <LiaProductHunt size={25} />,
            count: "",
            show: true,
        },
        {
            id: 6,
            href: "/dashboard/users",
            name: "Dashboard",
            icon: <CiGrid31 size={25} />,
            count: "",
            show: user?.isAdmin,
        },
        {
            id: 7,
            href: "/",
            name: "Logout",
            icon: <TbLogout size={25} />,
            count: "",
            show: user,
        },
    ];

    const HandleClick = (item: any) => {
        const href = item?.href
        if (href && pathname !== href) {
            animatePageOut(href, router);
            router.push(href)
        }
    }


    return (
        <div className='fixed top-0 left-0 md:hidden w-full h-full p-5'>
            <div className='w-full h-full flex flex-col gap-1 mt-[50px] '>
                {mobilenavitems?.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={perspective}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        custom={i}
                        className={`${!item.show && "hidden"} flex items-center gap-3 justify-start p-2 rounded-[5px] hover:bg-neutral-100`}
                        onClick={() => HandleClick(item)}
                    >
                        <a className="flex items-center gap-3">
                            <Icon icon={item.icon} count={item.count || 0} iconCls="text-black" />
                            <h2 className='text-lg'>{item.name}</h2>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MobNav;
