import Link from 'next/link'
import test from '../assets/user-bg.jpg'
import UserProfile from './UserProfile'

const Logo = () => {
  return (
    <Link href='/dashboard/users' className='flex flex-row items-center gap-2'>
      <UserProfile proSrc={test.src} proAlt='Logo' profileCls='hidden md:flex w-10 h-10 bg-neutral-200' tooltip='Logo Image' />
      <h1>Logo Name</h1>
    </Link>
  )
}

export default Logo