'use client'

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import useLoginModal from '../hooks/useLoginModel';
import useRegisterModal from '../hooks/useRegisterModel';
import Icon from './Icon';
import Logo from "./Logo";
import Line2 from './MenuBar/Line2';
import { useCurrentUser } from '../hooks/useCurrentUser';
const MobNav = dynamic(() => import("./MenuBar/MenuMobContent"))
const Search = dynamic(() => import("./Search"))
const MenuBarContent = dynamic(() => import("./MenuBar/MenuBarContent"))
const ShoppingCartICon = dynamic(() => import("./ShoppingCartICon/ShoppingCartICon"))
const UserProfile = dynamic(() => import("./UserProfile"))


const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeLogin, setActiveLogin] = useState("login")
    const [menuOpen, setmenuOpen] = useState(false)
    const loginmodel = useLoginModal();
    const registermodel = useRegisterModal();

    const user = useCurrentUser()

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const HandleLogin = () => {
        setActiveLogin("login")
        loginmodel.onOpen()
    }

    const HandleRegister = () => {
        setActiveLogin("signup")
        registermodel.onOpen()
    }

    const HandleSearch = (data: any) => {
        console.log(data)
    }

    return (
        <div
            className={`header ${isSticky ? 'sticky' : ''} top-0 w-full px-2 left-0 h-[60px] flex flex-row items-center justify-between z-10 transition-all duration ease-in-out relative pr-[60px]`}
        >

            {/* navbar left side */}
            {!user ?
                <div className=" md:max-w-max rounded-full bg-neutral-100 p-1.5 flex flex-row items-center gap-2 z-10">
                    <div className={`hidden md:flex lg:flex px-5 py-2 rounded-full text-sm font-bold cursor-pointer ${activeLogin === "login" ? " bg-white text-black" : "text-black"}`} onClick={HandleLogin}>Login</div>
                    <div className={`px-5 py-2 rounded-full text-sm font-bold cursor-pointer ${activeLogin === "signup" ? "bg-white text-black" : "text-black"}`} onClick={HandleRegister}>SignUp</div>
                </div>
                :
                <div className='ml-3 h-full max-w-max flex items-center justify-center'>
                    <Line2 onOpen={(d: any) => setmenuOpen(d)} isSticky={isSticky} />
                </div>
            }

            {/* menu bar */}
            {user &&
                <div className={`${menuOpen && "fixed"} w-full top-0  md:min-w-[768px] xl:w-[1336px] overflow-hidden h-screen left-1/2 transform -translate-x-1/2`}>
                    <div className={`absolute top-0 left-0 duration-500 ease-in-out z-[10] w-full h-screen  ${!menuOpen ? "-translate-x-full" : "translate-x-0"}`}>
                        <MobNav />
                        <MenuBarContent />
                    </div>
                </div>
            }

            {/* navbar bar mid */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Logo />
            </div>

            {/* navbar right side */}
            <div className="flex flex-row items-center gap-2 lg:gap-3 ">

                <Search onChange={HandleSearch} placeholder='search products...' />
                <Icon icon={<FaRegHeart size={20} />} tooltip='Favoutites' iconCls='hidden md:flex' href='/favourite' />
                <ShoppingCartICon />
                {user &&
                    <div className={`${user && "mr-[-50px] ml-[50px]"}`} onClick={() => ""}>
                        <UserProfile profileCls="w-10 h-10 bg-neutral-200" />
                    </div>
                }
            </div>


        </div >
    );
};

export default Navbar;