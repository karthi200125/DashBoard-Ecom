import Image from '@/components/ui/CustomImage'
import Link from 'next/link'
import ltext from '../assets/ltext.webp'

const Logo = () => {
  return (
    <Link href='/dashboard/users' className='flex flex-row gap-1 items-center h-[50px] overflow-hidden'>
      {/* <Image src={logo.src} imgclass='w-[50px] h-[50px] object-contain' alt='Logo Image' /> */}
      {/* <Image src={ltext.src} imgclass='w-[120px] h-[50px] object-contain' alt='Logo Image' /> */}
      <span style={{ fontFamily: 'Conthrax' }}>DEXONS</span>
    </Link>
  )
}

export default Logo