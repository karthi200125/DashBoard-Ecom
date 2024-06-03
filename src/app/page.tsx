'use client'
import Categories from "./(pages)/Categories.tsx/page";
import LandingPage from "./(pages)/LandingPage/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full ">
      <LandingPage />
      <Categories />
    </main>
  );
}
