import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import HomeSection from "@/components/sections/home/hero";

// Lazy load sections that are below the fold
const AboutSection = dynamic(() => import("@/components/sections/home/about"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const TrustedBrands = dynamic(
  () => import("@/components/sections/home/trusted-brands"),
  {
    loading: () => <div className="h-32 animate-pulse bg-gray-100" />,
  },
);

const ServicesSection = dynamic(
  () => import("@/components/sections/home/services"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  },
);

const ManagementSection = dynamic(
  () => import("@/components/sections/home/management"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  },
);

const HowItWorksSection = dynamic(
  () => import("@/components/sections/home/how-it-works"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  },
);

const FAQSection = dynamic(() => import("@/components/sections/home/faq"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const TestimonialsSection = dynamic(
  () => import("@/components/sections/home/testimonials"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  },
);

const WhyChooseFinexSection = dynamic(
  () =>
    import("@/components/sections/home/why-choose-finex").then((mod) => ({
      default: mod.WhyChooseFinexSection,
    })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  },
);

const ContactCta = dynamic(() => import("@/components/ui/contact-cta"), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100" />,
});

const CoreValuesSection = dynamic(
  () => import("@/components/sections/home/core-values"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  },
);

const ResearchSection = dynamic(
  () => import("@/components/sections/home/research"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  },
);

const HomePage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      {/* Hero section loads immediately - critical above the fold */}
      <HomeSection />

      {/* Wrap in Suspense for better error handling */}
      <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100" />}>
        <TrustedBrands />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <CoreValuesSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ResearchSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ManagementSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <HowItWorksSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <WhyChooseFinexSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<div className="h-48 animate-pulse bg-gray-100" />}>
        <ContactCta />
      </Suspense>
    </div>
  );
};

export default HomePage;
