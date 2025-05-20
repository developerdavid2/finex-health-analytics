"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fintechFlowSteps } from "@/constants/services-page-data/services";
import FintechStepsTabs from "@/components/sections/services/fintech-steps-tabs";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function EPaymentFintechSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="fintech"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#EEF2FF] relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-gradient-to-tr from-main/30 to-pink-300/10 rounded-full absolute top-[60%] right-[40%]"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl relative">
        <div ref={animationRef} className="mb-8 md:mb-12">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4 text-main font-urbanist font-bold pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Healthcare E-Payment & Fintech
          </motion.h2>

          <div className="w-full max-w-6xl mx-auto mb-10">
            <FintechStepsTabs tabs={fintechFlowSteps} />
          </div>
        </div>
      </div>
    </section>
  );
}
