'use client'

import { perspective } from '@/app/Animations/animate';
import { animatePageOut } from '@/app/Animations/pageTransistionAnimate';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { BsCart3 } from 'react-icons/bs';
import { CiGrid31 } from 'react-icons/ci';
import { HiOutlineHome } from 'react-icons/hi2';
import { IoMdHeartEmpty } from 'react-icons/io';
import { LiaProductHunt } from 'react-icons/lia';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';
import { useCart } from '../ContextApi/CartContext';
import Icon from '../Icon';
import { logoutFunc } from '@/lib/logout';


const MobNav = ({ onMenu }: any) => {

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
            icon: <MdOutlinePersonOutline size={25} />,
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
            href: "/logout",
            name: "Logout",
            icon: <TbLogout size={25} />,
            count: "",
            show: user,
        },
    ];

    const HandleClick = async (item: any) => {
        if (item?.name === "Logout") {
            await logoutFunc()
            router.push('/');
            router.refresh();
        } else {
            onMenu(false)
            const href = item?.href
            if (href && pathname !== href) {
                animatePageOut(href, router);
                router.push(href)
            }
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
                        className={`${!item.show && "hidden"} flex items-center gap-3 justify-start p-2 rounded-[10px] hover:bg-neutral-800`}
                        onClick={() => HandleClick(item)}
                    >
                        <a className={`w-full flex items-center gap-3 rounded-[10px] px-3 py-2 ${pathname === item?.href && "bg-white/10"}`}>
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
