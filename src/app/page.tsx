'use client'
import Footer from "./_components/Footer";
import Categories from "./_components/LandingCategories";
import LandingPage from "./_components/LandingPage/LandingPage";

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full ">
      <LandingPage />
      <Categories />      
    </main>
  );
}
