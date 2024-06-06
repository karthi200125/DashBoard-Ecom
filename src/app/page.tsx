'use client'
import AddToCartBtn from "./_components/AddToCartBtn/AddToCartBtn";
import Categories from "./_components/LandingCategories";
import Banners from "./_components/LandingPage/Banners";
import LandingPage from "./_components/LandingPage/LandingPage";

export default function Home() {


  return (
    <main className="min-h-screen bg-white w-full ">
      <LandingPage />
      <Categories />
      <Banners />
      <AddToCartBtn />
    </main>
  );
}
