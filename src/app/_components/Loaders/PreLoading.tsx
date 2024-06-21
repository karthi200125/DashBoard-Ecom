'use client'

import Logo from "../Logo"

const PreLoading = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen items-center justify-center bg-white z-[9999] flex flex-col gap-10">
            <Logo />
            <div>
                loading ...
            </div>
        </div>
    )
}
export default PreLoading