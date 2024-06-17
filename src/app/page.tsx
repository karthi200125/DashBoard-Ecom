'use client'
import dynamic from "next/dynamic";
const LandingPage = dynamic(() => import("./_components/LandingPage/LandingPage"))
const Banners = dynamic(() => import("./_components/LandingPage/Banners"))


export default function Home() {
      
  return (
    <main className="min-h-screen bg-white w-full ">
      {/* <LandingPage />
      <Banners /> */}
    </main>
  );
}
