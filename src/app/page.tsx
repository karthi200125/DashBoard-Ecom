'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import PreLoading from './_components/Loaders/PreLoading';

const LandingPage = dynamic(() => import('./_components/LandingPage/LandingPage'), { ssr: false });
const Banners = dynamic(() => import('./_components/LandingPage/Banners'), { ssr: false });
const LandingCards = dynamic(() => import('./_components/LandingPage/LadingCards'), { ssr: false });
const LandingCategories = dynamic(() => import('./_components/LandingPage/LandingCategories'), { ssr: false });
const Testimonials = dynamic(() => import('./_components/LandingPage/TestMonials'), { ssr: false });
const Footer = dynamic(() => import('./_components/Footer'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const sectionsRef = useRef([]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = sectionsRef.current;

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${section.clientHeight}`,
        pin: true,
        // pinSpacing: false,
        scrub: 1,
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.inOut',
          });
        },
        onLeaveBack: () => {
          gsap.to(section, {
            opacity: 0.5,
            duration: 0.5,
            ease: 'power1.inOut',
          });
        },
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-white w-full">
      {/* {isLoading && <PreLoading />} */}
      <LandingPage onLoad={handleLoad} />
      {/* {!isLoading && ( */}
        <>
          {/* <div ref={(el) => (sectionsRef.current[0] = el)} className="section">
            <LandingCategories />
          </div>
          <div ref={(el) => (sectionsRef.current[1] = el)} className="section">
            <Banners />
          </div> */}
          {/* <div ref={(el) => (sectionsRef.current[2] = el)} className="section">
            <LandingCards />
          </div> */}
          {/* <div ref={(el) => (sectionsRef.current[3] = el)} className="section">
            <Testimonials />
          </div>
          <div ref={(el) => (sectionsRef.current[4] = el)} className="section">
            <Footer />
          </div> */}
        </>
      {/* )} */}
    </main>
  );
}
