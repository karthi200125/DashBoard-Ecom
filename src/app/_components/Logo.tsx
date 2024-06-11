import Link from 'next/link'
import logo from '../assets/logo.png'
import logotext from '../assets/logotext.png'
import UserProfile from './UserProfile'
import Image from '@/components/ui/Image'

const Logo = () => {
  return (
    <Link href='/dashboard/users' className='flex flex-row gap-1 items-center h-[50px] overflow-hidden'>
      {/* <UserProfile proSrc={logo.src} proAlt='Logo' profileCls='hidden md:flex w-10 h-10' tooltip='Logo Image' /> */}
      <Image src={logo.src} imgclass='w-[50px] h-[50px] object-contain'/>
      <Image src={logotext.src} imgclass='w-[150px] h-[50px] object-contain'/>
      {/* <h1>Logo Name</h1> */}
    </Link>
  )
}

export default Logo