'use client'

import LetterAnimation from '@/app/Animations/LetterAnimation';

const PreLoading = ({ progress }: any) => {

    return (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center  bg-black z-[9999] py-10">
            <div className="w-full px-2 md:px-5 md:container mx-auto flex items-center justify-between flex-col h-[90%] md:h-[95%]">
                <div className="w-full flex flex-row items-center justify-between">
                    <div>
                        <h5 className='text-neutral-400'>
                            <LetterAnimation title={"Loading..."} />
                        </h5>
                        <h6 className='text-neutral-400'>
                            <LetterAnimation title="Your Experience" />
                        </h6>
                    </div>
                    <h1 className='text-neutral-400'>
                        {`${Math.round(progress)}%`}
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                    <div className="text-5xl md:text-7xl font-bold text-white">
                        <LetterAnimation title="DEXON" />
                    </div>
                    <h4 className='text-neutral-600'>
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
                            {progress >= 80 && (
                                <LetterAnimation title="Almost There" />
                            )}
                        </h5>
                    </div>

                    <div className="mx-auto w-[95%]">
                        <div className="rounded-full h-[5px] bg-neutral-600" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreLoading;
