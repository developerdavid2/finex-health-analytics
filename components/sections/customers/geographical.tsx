"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import WorldMap from "@/components/ui/world-map";
import GeographicalGrid from "@/components/sections/customers/geographical-grid";

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

export default function GeographicalSection() {
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
      id="regions"
      className="relative px-4 pt-16 min-h-[500px] bg-[#EFF0FC] overflow-hidden rounded-t-[5rem]"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 w-full h-full overflow-hidden mask-y-from-70% mask-y-to-80%">
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </div>

      <div className="absolute bottom-1/4 right-1/3 size-[200px] rounded-full bg-[#e90e83] filter blur-[80px] opacity-20"></div>

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
            Geographical Coverage
          </motion.h2>
          <motion.p
            variants={textItemVariants}
            className="text-gray-600 text-center text-lg font-medium mb-12 mx-auto max-w-2xl"
          >
            Finex delivers healthcare transformation across underserved and
            emerging regions, scaling impact through smart solutions.
          </motion.p>

          {/* 👇 Grid is shown only after delay */}
          {showGrid && <GeographicalGrid />}
        </motion.div>
      </div>
    </section>
  );
}
