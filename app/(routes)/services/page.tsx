import React from "react";
import ContactCta from "@/components/ui/contact-cta";
import ServicesHeroSection from "@/components/sections/services/services-hero";
import HealthAnalyticsSection from "@/components/sections/services/heath-analytics";
import CyberSecuritySection from "@/components/sections/services/cybersecurity";
import EPaymentFintechSection from "@/components/sections/services/epayment-fintech";
import HealthInformaticsSection from "@/components/sections/services/health-informatics";
import PredictiveAnalyticsSection from "@/components/sections/services/predictive-analytics";
import TrainingCapacitySection from "@/components/sections/services/training-capacity";
import MedicalTransportationSection from "@/components/sections/services/medical-transportation";
import RehabilitationSection from "@/components/sections/services/rehabilitation";

const ServicesPage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      <ServicesHeroSection />
      <HealthAnalyticsSection />
      <CyberSecuritySection />
      <EPaymentFintechSection />
      <PredictiveAnalyticsSection />
      <HealthInformaticsSection />
      <TrainingCapacitySection />
      <MedicalTransportationSection />
      <RehabilitationSection />
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
