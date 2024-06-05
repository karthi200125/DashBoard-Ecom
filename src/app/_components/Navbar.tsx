'use client'

import { useState, useEffect } from 'react';
import { RiShoppingBagLine } from "react-icons/ri";
import Icon from "./Icon";
import Logo from "./Logo";
import UserProfile from "./UserProfile";
import Search from './Search';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [activeLogin, setActiveLogin] = useState("login")

    const HandleLogin = () => {
        setActiveLogin("login")
    }

    const HandleRegister = () => {
        setActiveLogin("signup")
    }

    return (
        <div
            className={`header ${isSticky ? 'sticky' : ''} top-0 w-full px-2 left-0 h-[60px] flex flex-row items-center justify-between z-10 transition-all duration ease-in-out relative`}
        >
            <div className="max-w-max rounded-full bg-black p-1 flex flex-row items-center gap-2">
                <div className={`px-5 py-2 rounded-full text-sm font-bold cursor-pointer ${activeLogin === "login" ? " bg-white text-black" : "text-white"}`} onClick={HandleLogin}>Login</div>
                <div className={`px-5 py-2 rounded-full text-sm font-bold cursor-pointer ${activeLogin === "signup" ? "bg-white text-black" : "text-white"}`} onClick={HandleRegister}>SignUp</div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Logo />
            </div>
            <div className="flex flex-row items-center gap-5">
                <div className="w-[200px] rounded-full bg-neutral-200 h-[45px]">
                    <Search />
                </div>
                <Icon icon={<RiShoppingBagLine size={20} />} tooltip="Shopping Cart" count={1} />
                <div>
                    <UserProfile profileCls="w-10 h-10 bg-neutral-200" />
                </div>
            </div>
        </div >
    );
};

export default Navbar;