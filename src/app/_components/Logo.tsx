import TransitionLink from '../Animations/TransitionLink'

const Logo = () => {

  return (
    <TransitionLink href='/'>
      <div className='flex flex-row gap-1 items-center h-[50px] overflow-hidden cursor-pointer hover:opacity-50'>
        <span
          className={`text-md md:text-3xl font-[900] transition duration-300 ease-in-out`}
          style={{ fontFamily: 'Conthrax', fontWeight: '900' }}>DE
          <span className="text-red-400 text-lg md:text-4xl">X</span>
          ON
        </span>
      </div>
    </TransitionLink>
  )
}

export default Logo