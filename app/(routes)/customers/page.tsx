import React from "react";
import ContactCta from "@/components/ui/contact-cta";
import CustomerHeroSection from "@/components/sections/customers/customers-hero";
import TargetCustomersSection from "@/components/sections/customers/target-customers";
import CustomerNeedsSection from "@/components/sections/customers/customer-needs";
import PartnershipSection from "@/components/sections/customers/partnership";
import GeographicalSection from "@/components/sections/customers/geographical";

const CustomerPage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      <CustomerHeroSection />
      <TargetCustomersSection />
      <CustomerNeedsSection />
      <PartnershipSection />
      <GeographicalSection />
      <ContactCta
        sectionId="cta"
        heading="Partner with Finex for Smarter Healthcare"
        highlightWord="Partner"
        description="Let’s explore how our tailored solutions can meet your specific healthcare and operational needs."
        buttonText="Contact Sales"
      />
    </div>
  );
};
export default CustomerPage;
