import React from "react";
import AboutHeroSection from "@/components/sections/company/about-hero";
import MissionVisionSection from "@/components/sections/company/mission-vision";

const HomePage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      <AboutHeroSection />
      <MissionVisionSection />
    </div>
  );
};
export default HomePage;
