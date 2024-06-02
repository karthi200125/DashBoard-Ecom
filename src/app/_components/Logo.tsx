import Link from 'next/link'
import test from '../assets/user-bg.jpg'
import UserProfile from './UserProfile'

const Logo = () => {
  return (
    <Link href='/dashboard/users' >
      <UserProfile proSrc={test.src} proAlt='Logo' profileCls='w-[60px] h-[60px] bg-neutral-200' tooltip='Logo Image' />
    </Link>
  )
}

export default Logo