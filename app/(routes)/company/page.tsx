import React from "react";
import AboutHeroSection from "@/components/sections/company/about-hero";
import MissionVisionSection from "@/components/sections/company/mission-vision";
import CompetitiveEdgeSection from "@/components/sections/company/competitive-edge";
import MarketReachSection from "@/components/sections/company/market-reach";
import WhyFinexBetterSection from "@/components/sections/company/why-finex-better";
import ContactCta from "@/components/ui/contact-cta";
import KeyOperationsSection from "@/components/sections/company/key-operational-processes";

const AboutCompanyPage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      <AboutHeroSection />
      <MissionVisionSection />
      <CompetitiveEdgeSection />
      <MarketReachSection />
      <WhyFinexBetterSection />
      <KeyOperationsSection />
      <ContactCta
        sectionId="cta"
        heading="Get started with Finex"
        highlightWord="Finex"
        description="We are here to help you with any questions or concerns you may have."
        buttonText="Get in touch"
      />
    </div>
  );
};
export default AboutCompanyPage;
