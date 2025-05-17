import React from "react";
import CompetitiveEdgeSection from "@/components/sections/company/competitive-edge";
import MarketReachSection from "@/components/sections/company/market-reach";
import WhyFinexBetterSection from "@/components/sections/company/why-finex-better";
import ContactCta from "@/components/ui/contact-cta";
import KeyOperationsSection from "@/components/sections/company/key-operational-processes";
import ServicesHeroSection from "@/components/sections/services/services-hero";
import HealthAnalyticsSection from "@/components/sections/services/heath-analytics";
import CyberSecuritySection from "@/components/sections/services/cybersecurity";

const ServicesPage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      <ServicesHeroSection />
      <HealthAnalyticsSection />
      <CyberSecuritySection />
      <CompetitiveEdgeSection />
      <MarketReachSection />
      <WhyFinexBetterSection />
      <KeyOperationsSection />
      <ContactCta
        sectionId="cta"
        heading="Intelligent Tools for Real Healthcare Change"
        highlightWord="Real"
        description="We are here to help you with any questions or concerns you may have."
        buttonText="Book a Consultation"
      />
    </div>
  );
};
export default ServicesPage;
