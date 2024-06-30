'use client';

import { Settings } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { useCurrentUser } from '../hooks/useCurrentUser';
import useLoginModal from '../hooks/useLoginModel';
import useRegisterModal from '../hooks/useRegisterModel';
import Icon from './Icon';
import Logo from './Logo';
import Menu from './MenuBar/Menu';
import { routes } from './dummydata';
import { motion, AnimatePresence } from 'framer-motion';

const Search = dynamic(() => import('./Search'));
const ShoppingCartIcon = dynamic(() => import('./ShoppingCartIcon/ShoppingCartIcon'));
const UserProfile = dynamic(() => import('./UserProfile'));

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeLogin, setActiveLogin] = useState('login');
    const [pathnameChanged, setPathnameChanged] = useState(false);

    const loginModel = useLoginModal();
    const registerModel = useRegisterModal();
    const user = useCurrentUser();
    const pathname = usePathname();
    const isDashboard = pathname.startsWith('/dashboard');

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setPathnameChanged(true);
        const timer = setTimeout(() => setPathnameChanged(false), 1600);
        return () => clearTimeout(timer);
    }, [pathname]);

    const handleLogin = useCallback(() => {
        setActiveLogin('login');
        loginModel.onOpen();
    }, [loginModel]);

    const handleRegister = useCallback(() => {
        setActiveLogin('signup');
        registerModel.onOpen();
    }, [registerModel]);

    const renderRoutes = useMemo(() => {
        return routes?.map(route => (
            <Link
                href={route?.href}
                key={route.id}
                className={`${pathname === route?.href ? 'text-black bg-white' : ''} cursor-pointer text-sm font-semibold hover:opacity-50 h-[35px] rounded-full px-6 flex items-center justify-center`}
            >
                {route.name}
            </Link>
        ));
    }, [pathname]);

    const navbarClasses = useMemo(() => {
        return `header ${isSticky ? 'sticky' : ''} top-0 w-full px-2 left-0 h-[60px] flex flex-row items-center justify-between z-10 transition-all duration ease-in-out relative pr-[60px]`;
    }, [isSticky]);

    return (
        <AnimatePresence>
            <motion.div
                key="navbar"
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -180 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0.6,
                }}
                className={navbarClasses}
            >
                {isDashboard ? (
                    <div className="flex flex-row gap-3 items-center bg-neutral-100 rounded-full p-2">
                        {renderRoutes}
                    </div>
                ) : !user ? (
                    <div className="md:max-w-max rounded-full bg-neutral-100 p-1.5 flex flex-row items-center gap-2 z-10">
                        <div className={`hidden md:flex lg:flex px-5 py-2 rounded-full text-sm font-bold cursor-pointer ${activeLogin === 'login' ? 'bg-white text-black' : 'text-black'}`} onClick={handleLogin}>
                            Login
                        </div>
                        <div className={`px-5 py-2 rounded-full text-sm font-bold cursor-pointer ${activeLogin === 'signup' ? 'bg-white text-black' : 'text-black'}`} onClick={handleRegister}>
                            SignUp
                        </div>
                    </div>
                ) : (
                    <div className="ml-3 max-w-max">
                        <Menu isSticky={isSticky}/>                        
                    </div>
                )}

                {/* Navbar middle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Logo />
                </div>

                <div className="flex flex-row items-center gap-2 lg:gap-3">
                    {isDashboard ? (
                        <Icon icon={<Settings size={20} />} tooltip="Setting" />
                    ) : (
                        <>
                            <Search placeholder="search products..." />
                            {user && (
                                <Icon icon={<FaRegHeart size={20} />} tooltip="Favorites" iconCls="hidden md:flex" href="/favourite" count={user?.favorite?.length} />
                            )}
                            <ShoppingCartIcon />
                        </>
                    )}

                    {user && (
                        <div className={`hidden md:flex ${user && 'mr-[-50px] ml-[50px]'}`} onClick={() => ''}>
                            <UserProfile profileCls="w-10 h-10 bg-neutral-200" proSrc={user?.image || ''} user={user} type="nav" />
                        </div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Navbar;
