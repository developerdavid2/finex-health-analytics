import React from "react";
import TrendsHeroSection from "@/components/sections/trends/trends-hero";
import TrendsMainSection from "@/components/sections/trends/trends-main";

const TrendsPage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      <TrendsHeroSection />
      <TrendsMainSection />
    </div>
  );
};
export default TrendsPage;
