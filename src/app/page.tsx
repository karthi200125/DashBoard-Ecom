'use client'
import { useState } from "react";
import Categories from "./_components/LandingCategories";
import Banners from "./_components/LandingPage/Banners";
import LandingCards from "./_components/LandingPage/LadingCards";
import LandingPage from "./_components/LandingPage/LandingPage";
import Modal from "./_components/Modal/Modal";
import CustomBtn from "./_components/CustomBtn";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white w-full ">
      <CustomBtn onClick={() => setIsOpen(!isOpen)}>modal test</CustomBtn>
      <Modal isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} modalBody={"test modal"} modalCls="w-[500px]"/>
      <LandingPage />
      <Categories />
      <Banners />
      <LandingCards />
    </main>
  );
}
