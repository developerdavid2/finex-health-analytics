import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import AboutHeroSection from "@/components/sections/company/about-hero";

// Prioritize loading the first few sections that users will see
const WhoWeAreSection = dynamic(
  () => import("@/components/sections/company/who-we-are"),
  {
    loading: () => <div className="h-96 animate-pulse bg-indigo-50" />,
    ssr: true, // Enable SSR for above-the-fold content
  },
);

const MissionVisionSection = dynamic(
  () => import("@/components/sections/company/mission-vision"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
    ssr: true, // Enable SSR for early sections
  },
);

const CompetitiveEdgeSection = dynamic(
  () => import("@/components/sections/company/competitive-edge"),
  {
    loading: () => <div className="h-96 animate-pulse bg-indigo-50" />,
    ssr: true,
  },
);

// Lazy load sections further down with lower priority
const MarketReachSection = dynamic(
  () => import("@/components/sections/company/market-reach"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  },
);

const WhyFinexBetterSection = dynamic(
  () => import("@/components/sections/company/why-finex-better"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  },
);

const KeyOperationsSection = dynamic(
  () => import("@/components/sections/company/key-operational-processes"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  },
);

const ContactCta = dynamic(() => import("@/components/ui/contact-cta"), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100" />,
});

// Minimal loading fallback for better UX
const MinimalLoader = ({ height = "h-96", bg = "bg-gray-50" }) => (
  <div className={`${height} ${bg} flex items-center justify-center`}>
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
  </div>
);

const AboutCompanyPage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      {/* Hero section loads immediately - critical above the fold */}
      <AboutHeroSection />

      {/* Priority sections with faster loading */}
      <Suspense fallback={<MinimalLoader bg="bg-indigo-50" />}>
        <WhoWeAreSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader />}>
        <MissionVisionSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader bg="bg-indigo-50" />}>
        <CompetitiveEdgeSection />
      </Suspense>

      {/* Lower priority sections */}
      <Suspense fallback={<MinimalLoader />}>
        <MarketReachSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader />}>
        <WhyFinexBetterSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader />}>
        <KeyOperationsSection />
      </Suspense>

      <Suspense fallback={<MinimalLoader height="h-48" />}>
        <ContactCta
          sectionId="cta"
          heading="Get started with Finex"
          highlightWord="Finex"
          description="We are here to help you with any questions or concerns you may have."
          buttonText="Get in touch"
        />
      </Suspense>
    </div>
  );
};

export default AboutCompanyPage;
