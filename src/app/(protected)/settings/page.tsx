'use client'

import CustomBtn from '@/app/_components/CustomBtn';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Settings = () => {
    const user = useCurrentUser()
    const router = useRouter()
    const handleLogout = () => {
        router.push('/')
        signOut()
    }

    return (
        <div className='w-full h-screen flex items-center justify-center flex-col gap-5'>
            {JSON.stringify(user)}
            <CustomBtn onClick={handleLogout}>logout</CustomBtn>
        </div>
    )
}

export default Settings