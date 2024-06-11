'use client';
import React, { useEffect } from 'react';
import { gsap, Linear } from 'gsap';
import CustomBtn from './CustomBtn';
import { useRouter } from 'next/navigation';

const NotFound = () => {
    useEffect(() => {
        let t1 = gsap.timeline();
        let t2 = gsap.timeline();
        let t3 = gsap.timeline();

        t1.to(".cog1", {
            transformOrigin: "50% 50%",
            rotation: "+=360",
            repeat: -1,
            ease: Linear.easeNone,
            duration: 8
        });

        t2.to(".cog2", {
            transformOrigin: "50% 50%",
            rotation: "-=360",
            repeat: -1,
            ease: Linear.easeNone,
            duration: 8
        });

        t3.fromTo(".wrong-para", {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1,
            stagger: {
                repeat: -1,
                yoyo: true
            }
        });
    }, []);

    const router = useRouter();

    return (
        <div className="h-screen w-full flex flex-col gap-5 items-center justify-center">
            <div className="flex flex-row items-center relative">
                <h1 className="text-[200px] font-bold absolute left-[-50px]">4</h1>
                <div className="relative scale-[0.7] flex flex-row z-0">
                    <div className="cog1 relative w-[40vmin] h-[40vmin] rounded-full border-[6vmin] border-[#f3c623]">
                        <div className="top absolute w-[10vmin] h-[10vmin] bg-[#f3c623] top-[-14vmin] left-[9vmin]"></div>
                        <div className="down absolute w-[10vmin] h-[10vmin] bg-[#f3c623] bottom-[-14vmin] left-[9vmin]"></div>
                        <div className="left absolute w-[10vmin] h-[10vmin] bg-[#f3c623] left-[-14vmin] top-[9vmin]"></div>
                        <div className="right absolute w-[10vmin] h-[10vmin] bg-[#f3c623] right-[-14vmin] top-[9vmin]"></div>
                        <div className="left-top absolute w-[10vmin] h-[10vmin] bg-[#f3c623] transform rotate-[-45deg] left-[-8vmin] top-[-8vmin]"></div>
                        <div className="left-down absolute w-[10vmin] h-[10vmin] bg-[#f3c623] transform rotate-[45deg] left-[-8vmin] top-[25vmin]"></div>
                        <div className="right-top absolute w-[10vmin] h-[10vmin] bg-[#f3c623] transform rotate-[45deg] right-[-8vmin] top-[-8vmin]"></div>
                        <div className="right-down absolute w-[10vmin] h-[10vmin] bg-[#f3c623] transform rotate-[-45deg] right-[-8vmin] top-[25vmin]"></div>
                    </div>
                    <div className="cog2 relative w-[40vmin] h-[40vmin] rounded-full border-[6vmin] border-[#4f8a8b] left-[-10.2vmin] bottom-[10vmin]">
                        <div className="top absolute w-[10vmin] h-[10vmin] bg-[#4f8a8b] top-[-14vmin] left-[9vmin]"></div>
                        <div className="down absolute w-[10vmin] h-[10vmin] bg-[#4f8a8b] bottom-[-14vmin] left-[9vmin]"></div>
                        <div className="left absolute w-[10vmin] h-[10vmin] bg-[#4f8a8b] left-[-14vmin] top-[9vmin]"></div>
                        <div className="right absolute w-[10vmin] h-[10vmin] bg-[#4f8a8b] right-[-14vmin] top-[9vmin]"></div>
                        <div className="left-top absolute w-[10vmin] h-[10vmin] bg-[#4f8a8b] transform rotate-[-45deg] left-[-8vmin] top-[-8vmin]"></div>
                        <div className="left-down absolute w-[10vmin] h-[10vmin] bg-[#4f8a8b] transform rotate-[45deg] left-[-8vmin] top-[25vmin]"></div>
                        <div className="right-top absolute w-[10vmin] h-[10vmin] bg-[#4f8a8b] transform rotate-[45deg] right-[-8vmin] top-[-8vmin]"></div>
                        <div className="right-down absolute w-[10vmin] h-[10vmin] bg-[#4f8a8b] transform rotate-[-45deg] right-[-8vmin] top-[25vmin]"></div>
                    </div>
                </div>
                <h1 className="text-[200px] font-bold absolute right-0 z-10">4</h1>
            </div>
            <div className="flex flex-col gap-5 mt-5">
                <h1 className="text-2xl font-bold">Uh Oh! Page not found!</h1>
                <CustomBtn arrow btnCls="max-w-max pl-5 border" onClick={() => router.push('/')}>Go to Home Page</CustomBtn>
            </div>
        </div>
    );
};

export default NotFound;
