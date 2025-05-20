"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaDatabase } from "react-icons/fa";
import HealthInformaticsGrid from "@/components/sections/services/health-informatics-grid";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function HealthInformaticsSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="informatics"
      className="flex justify-center items-center bg-indigo-50 relative px-4 py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl relative">
        <div ref={animationRef} className="mb-8 md:mb-12">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4 text-main font-urbanist font-bold pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Health Informatics & EHR Optimization
          </motion.h2>

          <div className="flex flex-col text-gray-800 font-semibold justify-center items-center overflow-hidden w-fit mx-auto">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <FaDatabase className="h-6 w-6 text-main" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-main">
                Connected Records. Seamless Workflows
              </h2>
            </div>
          </div>

          {/* Responsive Grid */}
          <HealthInformaticsGrid />
        </div>
      </div>
    </section>
  );
}
