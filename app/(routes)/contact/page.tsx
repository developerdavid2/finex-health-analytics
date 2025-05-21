"use client";

import React from "react";
import ContactUsHeroSection from "@/components/sections/contact/contact-hero";
import FAQSection from "@/components/sections/home/faq";
import ContactLocationSection from "@/components/sections/contact/contact-location";

export default function TestimonialsSection() {
  // Set animation state based on view

  return (
    <div className="w-full bg-[#EEF2FF]">
      <ContactUsHeroSection />
      <ContactLocationSection />
      <FAQSection />
    </div>
  );
}
