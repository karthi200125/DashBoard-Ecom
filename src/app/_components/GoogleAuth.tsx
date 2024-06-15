import CustomImage from '@/components/ui/CustomImage';
import { signIn } from 'next-auth/react';
import { DEFAULT_REDIRECT } from '../../../routes';
import google from '../assets/google.webp';

const GoogleAuth = () => {

    const onClick = (provider: "google") => {
        signIn(provider, {
            callbackUrl: DEFAULT_REDIRECT
        })
    }
    return (
        <div className='flex flex-row items-center justify-center gap-3'>
            <div
                className='w-[60px] h-[60px] border rounded-full flex items-center justify-center cursor-pointer'
                onClick={() => onClick("google")}
            >
                <CustomImage src={google.src} imgclass='w-[20px] h-[20px]' alt='google' />
            </div>            
        </div>
    )
}

export default GoogleAuth