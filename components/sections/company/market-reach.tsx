"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import MarketReachGrid from "@/components/sections/company/market-reach-grid";

// Animation configs
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const textItemVariants = {
  hidden: { filter: "blur(5px)", y: 20, opacity: 0 },
  visible: {
    filter: "blur(0px)",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function MarketReachSection() {
  const animationRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  const [animationState, setAnimationState] = useState<"hidden" | "visible">(
    "hidden",
  );
  const [showGrid, setShowGrid] = useState(false); // 👈 controls when to show grid

  useEffect(() => {
    if (isInView) {
      setAnimationState("visible");

      // Delay grid rendering by 1.2s to let heading animate in first
      const timeout = setTimeout(() => {
        setShowGrid(true);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <section
      id="market-reach"
      className="relative px-4 py-16 min-h-[1000px] bg-[#EFF0FC] overflow-hidden pt-[10rem] rounded-t-[5rem] mask-b-from-90% mask-b-to-95%"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-40 mix-blend-hard-light mask-y-from-70% mask-y-to-80%">
        <Image
          src="/images/world-map-data.svg"
          alt="World-map Insights"
          width={1920}
          height={1283}
          className="w-full h-full object-cover "
        />
      </div>

      <div className="absolute bottom-1/4 right-1/3 size-[200px] rounded-full bg-red-400 filter blur-[80px] opacity-20"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-main/30 rounded-full absolute top-1/2 left-[0%]"
      />

      {/* Animated Content */}
      <div
        ref={animationRef}
        className="container relative mx-auto flex flex-col max-w-sm md:max-w-xl lg:max-w-5xl xl:max-w-7xl z-10"
      >
        <motion.div
          className="flex flex-col items-center w-full mb-16"
          initial="hidden"
          animate={animationState}
          variants={containerVariants}
        >
          <motion.h2
            variants={textItemVariants}
            className="text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist"
          >
            Market Reach & Impact
          </motion.h2>
          <motion.p
            variants={textItemVariants}
            className="text-gray-600 text-center text-lg font-medium mb-12 mx-auto max-w-2xl"
          >
            Finex operates across key regions in Africa, North America, Europe,
            and Southeast Asia, delivering innovative healthcare analytics and
            informatics solutions tailored to diverse healthcare systems.
          </motion.p>

          {/* 👇 Grid is shown only after delay */}
          {showGrid && <MarketReachGrid />}
        </motion.div>
      </div>
    </section>
  );
}
