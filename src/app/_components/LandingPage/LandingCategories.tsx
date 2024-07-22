'use client'
import LetterAnimation from '@/app/Animations/LetterAnimation';
import { perspective } from '@/app/Animations/animate';
import { animatePageOut } from '@/app/Animations/pageTransistionAnimate';
import Image from '@/components/ui/CustomImage';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { LadingCategories } from '../dummydata';

const LandingCategories = ({ onLoaded }: any) => {
  const [activeId, setActiveId] = useState(2);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    onLoaded();
  }, []);

  const router = useRouter();
  const pathname = usePathname();

  const handleclick = (href: string) => {
    if (href && pathname !== href) {
      animatePageOut(href, router);
      router.push(href)
    }
  }


  return (
    <div ref={ref} className='relative py-5 sm:h-[600px] bg-neutral-200 w-[98%] mx-auto  md:rounded-[20px] flex flex-col items-center justify-center gap-10'>
      <div className='text-center'>
        <h5 className='text-neutral-600'>
          <LetterAnimation title="New Launches" />
        </h5>
        <h2 className='mt-1'>
          <LetterAnimation title="Start with categories" />
        </h2>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-between sm:gap-5 w-full sm:w-[95%] lg:w-[70%] h-[860px] sm:h-[60%]'>
        {LadingCategories?.map((cat, i) => (
          <motion.div
            key={i}
            variants={perspective}
            animate={inView ? "enter" : "initial"}
            exit="exit"
            initial="initial"
            custom={i}
            className={`min-w-[300px] sm:min-w-[30%] lg:flex-1 md:h-full flex flex-col gap-3 items-center justify-center ${cat.id === 2 ? "sm:mt-20" : ""}`}
            onMouseEnter={() => setActiveId(cat.id)}
            onMouseLeave={() => setActiveId(2)}
            onClick={() => handleclick(cat?.href)}
          >
            <div
              className={`${activeId === cat.id ? "bg-gradient-to-r from-[#686e74] to-[#222222]" : "bg-white"} hover:bg-gradient-to-r from-[#686e74] to-[#222222] transition duration-500 rounded-[20px] w-full h-full relative flex items-center justify-center overflow-hidden group cursor-pointer`}
            >
              <div className='w-full h-full flex items-center justify-center'>
                <Image src={cat?.image?.src} imgclass='w-[200px] h-[200px] object-contain transform group-hover:scale-125 transition duration-500' alt='' />
              </div>
              <div className={`transition duration-500 ${activeId === cat.id ? "scale-100" : "scale-0"} transform group-hover:scale-100 flex flex-row items-center gap-3 absolute`}>
              </div>
            </div>
            <div className='w-full text-center'>
              <h5 className='uppercase'>{cat.cat}</h5>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default LandingCategories;
