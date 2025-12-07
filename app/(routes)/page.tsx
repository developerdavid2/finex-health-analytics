import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import HomeSection from "@/components/sections/home/hero";

// Prioritize loading the first few sections that users will see
const TrustedBrands = dynamic(
  () => import("@/components/sections/home/trusted-brands"),
  {
    loading: () => <div className="h-32 animate-pulse bg-gray-100" />,
    ssr: true, // Enable SSR for above-the-fold content
  }
);

const AboutSection = dynamic(() => import("@/components/sections/home/about"), {
  loading: () => <div className="h-96 animate-pulse bg-indigo-50" />,
  ssr: true, // Enable SSR for early sections
});

const CoreValuesSection = dynamic(
  () => import("@/components/sections/home/core-values"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
    ssr: true,
  }
);

// Lazy load sections further down with lower priority
const ServicesSection = dynamic(
  () => import("@/components/sections/home/services"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const EbooksSection = dynamic(
  () => import("@/components/sections/home/ebook-showcase"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const ManagementSection = dynamic(
  () => import("@/components/sections/home/management"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const HowItWorksSection = dynamic(
  () => import("@/components/sections/home/how-it-works"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const FAQSection = dynamic(() => import("@/components/sections/home/faq"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const TestimonialsSection = dynamic(
  () => import("@/components/sections/home/testimonials"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const WhyChooseFinexSection = dynamic(
  () =>
    import("@/components/sections/home/why-choose-finex").then((mod) => ({
      default: mod.WhyChooseFinexSection,
    })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const ContactCta = dynamic(() => import("@/components/ui/contact-cta"), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100" />,
});

const ResearchSection = dynamic(
  () => import("@/components/sections/home/research"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

// Minimal loading fallback for better UX
const MinimalLoader = ({ height = "h-96", bg = "bg-gray-50" }) => (
  <div className={`${height} ${bg} flex items-center justify-center`}>
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
  </div>
);

const HomePage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      {/* Hero section loads immediately - critical above the fold */}
      <HomeSection />

      {/* Priority sections with faster loading */}
      <Suspense fallback={<MinimalLoader height="h-32" bg="bg-gray-50" />}>
        <TrustedBrands />
      </Suspense>

      <Suspense fallback={<MinimalLoader bg="bg-indigo-50" />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader />}>
        <CoreValuesSection />
      </Suspense>

      {/* Lower priority sections */}
      <Suspense fallback={<MinimalLoader />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader />}>
        <EbooksSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader />}>
        <ResearchSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader />}>
        <ManagementSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader />}>
        <HowItWorksSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader />}>
        <WhyChooseFinexSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader height="h-48" />}>
        <ContactCta />
      </Suspense>
    </div>
  );
};

export default HomePage;
