
import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import HeroSection from "@/components/home/HeroSection";
import TextSection from "@/components/home/TextSection";

const HomeIntro: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="max-w-none mx-auto px-[154px] max-md:px-10 max-sm:px-5">
        <HomeHeader scrollToTop={scrollToTop} />
      </div>
      
      <HeroSection />
      <TextSection />
    </main>
  );
};

export default HomeIntro;
