'use client'
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { useEffect, useState } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { useCart } from '../ContextApi/CartContext';
import './ShoppingCartICon.scss';
import { animatePageOut } from '@/app/Animations/pageTransistionAnimate';
import { usePathname, useRouter } from 'next/navigation';

const ShoppingCartIcon = () => {
    const [cartClass, setCartClass] = useState('');

    const { state } = useCart();
    const { items } = state;
    const router = useRouter();
    const pathname = usePathname();

    const cartTotal = items?.length
    const user = useCurrentUser()

    useEffect(() => {
        if (cartTotal > 0) {
            setCartClass('shake');
            setTimeout(() => {
                setCartClass('');
            }, 500);
        }
    }, [cartTotal]);

    const cartClick = () => {
        const href = '/cart'
        router.push(href)
        // if (href && pathname !== href) {s
        //     animatePageOut(href, router);
        //     router.push(href)
        // }
    }

    return (
        <div className={`flex cart ${!user ? "right-[10px]" : "right-[10px] md:right-[60px]"} ${cartClass}`} onClick={cartClick}>
            <RiShoppingBagLine size={20} />
            {cartTotal > 0 &&
                <div className={`absolute top-[-5px] right-[-5px] bg-red-400 w-[20px] h-[20px] flex items-center justify-center rounded-full border-[2px] border-solid border-white text-white text-[10px]`}>
                    {cartTotal}
                </div>
            }
        </div>
    );
};

export default ShoppingCartIcon;
