'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import PreLoading from './_components/Loaders/PreLoading';

const LandingPage = dynamic(() => import('./_components/LandingPage/LandingPage'), { ssr: false });
const Banners = dynamic(() => import('./_components/LandingPage/Banners'), { ssr: false });
const LandingCards = dynamic(() => import('./_components/LandingPage/LadingCards'), { ssr: false });
const LandingCategories = dynamic(() => import('./_components/LandingPage/LandingCategories'), { ssr: false });
const Testimonials = dynamic(() => import('./_components/LandingPage/TestMonials'), { ssr: false });
const Footer = dynamic(() => import('./_components/Footer'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-white w-full">
      {isLoading && <PreLoading />}
      <LandingPage onLoad={handleLoad} />
      {!isLoading &&
        <>
          <LandingCategories />
          <Banners />
          <LandingCards />
          <Testimonials />
          <Footer />
        </>
      }
    </main>
  );
}
