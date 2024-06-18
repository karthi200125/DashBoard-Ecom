'use client'
import dynamic from "next/dynamic";
const LandingPage = dynamic(() => import("./_components/LandingPage/LandingPage"))
const Banners = dynamic(() => import("./_components/LandingPage/Banners"))
const LandingCards = dynamic(() => import("./_components/LandingPage/LadingCards"))


export default function Home() {
      
  return (
    <main className="min-h-screen bg-white w-full ">
      {/* <LandingPage />
      <Banners /> */}
      <LandingCards/>
    </main>
  );
}
