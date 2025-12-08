import React from "react";
import ContactUsHeroSection from "@/components/sections/contact/contact-hero";
import FAQSection from "@/components/sections/home/faq";
import ContactLocationSection from "@/components/sections/contact/contact-location";

export default function TestimonialsSection() {
  return (
    <div className="w-full bg-[#EEF2FF]">
      <ContactUsHeroSection />
      <ContactLocationSection />
      <FAQSection />
    </div>
  );
}
