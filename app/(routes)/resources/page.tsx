import React from "react";
import ContactCta from "@/components/ui/contact-cta";

import ResourcesHeroSection from "@/components/sections/resources/resources-hero";
import ResourcesMainSection from "@/components/sections/resources/resources-main";

const ResourcesPage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      <ResourcesHeroSection />
      <ResourcesMainSection />
      <ContactCta
        sectionId="cta"
        heading="Explore Healthcare Intelligence Resources"
        highlightWord="Resources"
        description="Stay informed with insights, milestones, and trends shaping the future of healthcare analytics and innovation."
        buttonText="Get in Touch"
      />
    </div>
  );
};
export default ResourcesPage;
