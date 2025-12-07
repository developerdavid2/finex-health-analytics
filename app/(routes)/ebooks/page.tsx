// app/ebooks/page.tsx
import EbooksHeroSection from "@/components/sections/ebooks/ebooks-hero";
import EbooksMainSection from "@/components/sections/ebooks/ebooks-main";
import React from "react";

const EbooksPage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      <EbooksHeroSection />
      <EbooksMainSection />
    </div>
  );
};
export default EbooksPage;
