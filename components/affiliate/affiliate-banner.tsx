"use client";

import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { useBanner } from "@/contexts/banner-context";
import { X } from "lucide-react";
import { useEffect } from "react";

export function AffiliateBanner() {
  const { isBannerVisible, setIsBannerVisible } = useBanner();

  // Measure banner height and set CSS variable
  useEffect(() => {
    if (isBannerVisible) {
      const banner = document.getElementById("affiliate-banner");
      if (banner) {
        const height = banner.offsetHeight;
        document.documentElement.style.setProperty(
          "--affiliate-banner-height",
          `${height}px`
        );
      }
    } else {
      document.documentElement.style.setProperty(
        "--affiliate-banner-height",
        "0px"
      );
    }
  }, [isBannerVisible]);

  const handleClose = () => {
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) {
    return null;
  }

  const affiliateText = (
    <span className="inline-flex items-center gap-2 px-8">
      <span className="text-2xl">🎯</span>
      <span>
        Earn Commissions Promoting Our Health & Analytics E-Books —{" "}
        <span className="font-bold">Join Finex Affiliate Program Today!</span>
      </span>
    </span>
  );

  return (
    <div
      id="affiliate-banner"
      className="w-full bg-gradient-to-r from-purple-200/70 to-indigo-200 text-black/80 fixed top-0 left-0 right-0 z-[100] transition-all duration-300 backdrop-blur-2xl isolate" // Add isolate to create new stacking context
      style={{ pointerEvents: "auto" }}
    >
      <div className="flex items-center justify-between gap-4 py- lg:py-3 px-4 max-w-full mx-auto">
        {/* Marquee Scrolling Text */}
        <div className="flex-1 overflow-hidden min-w-0">
          <Marquee
            pauseOnHover
            className="[--duration:60s] lg:[--duration:40s]"
          >
            {affiliateText}
            {affiliateText}
            {affiliateText}
            {affiliateText}
          </Marquee>
        </div>

        {/* CTA Button - Desktop */}
        <Button
          asChild
          size="sm"
          className="bg-white text-black/80 hover:bg-gray-100 font-semibold rounded-full shadow-lg whitespace-nowrap shrink-0 transition-all hidden sm:inline-flex"
        >
          <a
            href="https://your-affiliate-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Affiliate Program
          </a>
        </Button>

        {/* CTA Button - Mobile */}
        <Button
          asChild
          size="sm"
          className="bg-white text-black/70 hover:bg-gray-100 font-semibold rounded-full shadow-lg whitespace-nowrap shrink-0 transition-all sm:hidden"
        >
          <a
            href="https://your-affiliate-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now
          </a>
        </Button>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="text-black/80 hover:text-white hover:bg-white/20 rounded-full shrink-0 transition-all cursor-pointer isolate"
          onClick={handleClose}
          aria-label="Close banner"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
