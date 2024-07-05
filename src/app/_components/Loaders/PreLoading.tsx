'use client'

import { useState, useEffect } from 'react';
import LetterAnimation from '@/app/Animations/LetterAnimation';

const PreLoading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = 50; // Update progress every 50 milliseconds
        const totalDuration = 5000; // 5000 milliseconds = 5 seconds
        const increment = 100 / (totalDuration / interval);

        const intervalId = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(intervalId);
                    return 100;
                }
                return prevProgress + increment;
            });
        }, interval);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full p-2 md:p-0 md:container h-screen items-center justify-between bg-white z-[9999] flex flex-col py-10">
            <div className="w-full flex flex-row items-center justify-between">
                <div>
                    <h5 className='text-neutral-400'>
                        <LetterAnimation title={progress === 100 ? "Completed" : "Loading..."} />
                    </h5>
                    <h4 className='text-neutral-400'>
                        <LetterAnimation title="Your Experience" />
                    </h4>
                </div>
                <h1 className='text-neutral-400'>
                    {`${Math.round(progress)}%`}
                </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="text-5xl md:text-7xl font-bold">
                    <LetterAnimation title="DEXON" />
                </div>
                <h4>
                    <LetterAnimation title="Ecomm" />
                </h4>
            </div>

            <div className="w-full flex flex-col gap-3">
                <div className='hidden md:flex flex-row items-center justify-between'>
                    <h5 className="text-neutral-400">
                        <LetterAnimation title="Tracking Progress" />
                    </h5>
                    <h5 className="text-neutral-400">
                        {progress >= 40 && (
                            <LetterAnimation title="Loved by Everyone" />
                        )}
                    </h5>
                    <h5 className="text-neutral-400">
                        {progress >= 90 && (
                            <LetterAnimation title="Almost There" />
                        )}
                    </h5>
                </div>

                <div className="rounded-full h-[5px] bg-neutral-600" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}

export default PreLoading;
