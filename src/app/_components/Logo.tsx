import Link from 'next/link'
import logo from '../assets/d.png'
import UserProfile from './UserProfile'
import TransitionLink from '../Animations/TransitionLink'

const Logo = () => {
  return (
    <TransitionLink href='/'>
      <div className='flex flex-row gap-1 items-center h-[50px] overflow-hidden'>
        {/* <UserProfile proSrc={logo.src} tooltip="Dexons Logo" proAlt="" profileCls="w-10 h-10 filter invert" /> */}
        <span className="text-md md:text-3xl font-bold" style={{ fontFamily: 'Conthrax' }}>DE<span className="text-orange-400 text-lg md:text-4xl">X</span>ONS</span>
      </div>
    </TransitionLink>
  )
}

export default Logo