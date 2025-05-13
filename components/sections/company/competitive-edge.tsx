"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CompetitiveEdgeGrid from "@/components/sections/company/competitive-edge-grid";

// Container variants for staggered children
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

// Text item variants for staggered text elements
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

export default function CompetitiveEdgeSection() {
  const animationRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // State to track if animation has played
  const [animationState, setAnimationState] = useState<"hidden" | "visible">(
    "hidden",
  );

  // Set animation to visible when section comes into view
  useEffect(() => {
    if (isInView) {
      setAnimationState("visible");
    }
  }, [isInView]);

  return (
    <section
      id="competitive-edge"
      className="flex justify-center items-center bg-indigo-50 relative px-4 py-16"
    >
      <div
        ref={animationRef}
        className="container mx-auto flex flex-col max-w-sm md:max-w-xl lg:max-w-5xl xl:max-w-7xl"
      >
        <motion.div
          className="container mb-10 max-w-6xl"
          initial="hidden"
          animate={animationState}
          variants={containerVariants}
        >
          <motion.h2
            variants={textItemVariants}
            className="text-start text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist"
          >
            Competitive Edge
          </motion.h2>
          <motion.p
            variants={textItemVariants}
            className="text-gray-600 text-lg font-medium mb-8 max-w-2xl"
          >
            At Finex, we incorporate the use of various analytical tools to
            read, compile, extract, and visualize clients historic medical
            report, for making efficient health decisions.
          </motion.p>
        </motion.div>

        <CompetitiveEdgeGrid />
      </div>
    </section>
  );
}
