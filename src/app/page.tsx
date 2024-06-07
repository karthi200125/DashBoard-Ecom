'use client'
import Cards from "./_components/Cards/Cards";
import Categories from "./_components/LandingCategories";
import Banners from "./_components/LandingPage/Banners";
import LandingPage from "./_components/LandingPage/LandingPage";
import { productsdata } from "./dashboard/products/page";

export default function Home() {

  const test: any = []

  return (
    <main className="min-h-screen bg-white w-full ">
      <LandingPage />
      <Categories />
      <Banners />
      <Cards products={productsdata} isLoading={false} />
    </main>
  );
}
