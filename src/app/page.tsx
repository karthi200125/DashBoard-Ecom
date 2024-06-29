'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import PreLoading from './_components/Loaders/PreLoading';
import TestimonialsSkeleton from './_components/Skeletons/TestMonialsSkeleton';
import LCatSkeleton from './_components/Skeletons/LCatSkeleton';
import BannerSkeleton from './_components/Skeletons/BannerSkeleton';

const LandingPage = dynamic(() => import('./_components/LandingPage/LandingPage'), { ssr: false });
const Banners = dynamic(() => import('./_components/LandingPage/Banners'), { ssr: false });
const LandingCards = dynamic(() => import('./_components/LandingPage/LadingCards'), { ssr: false });
const LandingCategories = dynamic(() => import('./_components/LandingPage/LandingCategories'), { ssr: false });
const Testimonials = dynamic(() => import('./_components/LandingPage/TestMonials'), { ssr: false });
const Footer = dynamic(() => import('./_components/Footer'), { ssr: false });

export default function Home() {
  const [isLandingPageLoaded, setIsLandingPageLoaded] = useState(true);
  const [isLandingCategoriesLoaded, setIsLandingCategoriesLoaded] = useState(true);
  const [isBannersLoaded, setIsBannersLoaded] = useState(true);
  const [isLandingCardsLoaded, setIsLandingCardsLoaded] = useState(true);
  const [isTestimonialsLoaded, setIsTestimonialsLoaded] = useState(true);
  const [isFooterLoaded, setIsFooterLoaded] = useState(true);

  useEffect(() => {
    if (!isLandingPageLoaded) {
      setIsLandingCategoriesLoaded(false);
    }
  }, [isLandingPageLoaded]);

  useEffect(() => {
    if (!isLandingCategoriesLoaded) {
      setIsBannersLoaded(false);
    }
  }, [isLandingCategoriesLoaded]);

  useEffect(() => {
    if (!isBannersLoaded) {
      setIsLandingCardsLoaded(false);
    }
  }, [isBannersLoaded]);

  useEffect(() => {
    if (!isLandingCardsLoaded) {
      setIsTestimonialsLoaded(false);
    }
  }, [isLandingCardsLoaded]);

  return (
    <main className="min-h-screen bg-white w-full">
      {isLandingPageLoaded ? (
        <PreLoading />
      ) : (
        <LandingPage onLoaded={() => setIsLandingPageLoaded(false)} />
      )}

      {isLandingCategoriesLoaded ? (
        <LCatSkeleton />
      ) : (
        <LandingCategories onLoaded={() => setIsLandingCategoriesLoaded(false)} />
      )}

      {isBannersLoaded ? (
        <BannerSkeleton />
      ) : (
        <Banners onLoaded={() => setIsBannersLoaded(false)} />
      )}

      {/* {isLandingCardsLoaded ? (
        <PreLoading />
      ) : ( */}
        <LandingCards />
      {/* )} */}

      {isTestimonialsLoaded ? (
        <TestimonialsSkeleton />
      ) : (
        <Testimonials onLoaded={() => setIsTestimonialsLoaded(false)} />
      )}

      {isFooterLoaded ? (
        <div>loading</div>
      ) : (
        <Footer onLoaded={() => setIsFooterLoaded(false)} />
      )}
    </main>
  );
}
