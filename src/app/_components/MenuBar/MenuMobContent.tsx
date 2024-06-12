'use client'
import React from 'react'
import Logo from '../Logo'
import Link from 'next/link';
import Icon from '../Icon';
import { mobilenavitems } from '../dummydata';

const MobNav = () => {    
    
    return (
        <div className='md:hidden w-full h-screen bg-white p-5 '>
            <div className='w-full h-full flex flex-col gap-1 mt-[100px]'>
                {mobilenavitems.map((item) => (
                    <Link href={item.href} key={item.id} className={`${!item.show && "hidden"} flex items-center gap-3 justify-start p-2 rounded-[5px] hover:bg-neutral-100`} prefetch={false}>
                        <Icon icon={item.icon} count={item.count || 0} />
                        <h2 className='text-lg'>{item.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MobNav;
