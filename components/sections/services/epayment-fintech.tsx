"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fintechFlowSteps } from "@/constants/services-page-data/services";
import FintechStepsTabs from "@/components/sections/services/fintech-steps-tabs";

// Animation configuration - memoized to prevent recreation
const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }; // Slightly reduced duration
const variants = {
  hidden: { filter: "blur(3px)", transform: "translateY(8%)", opacity: 0 }, // Reduced blur and transform
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

// Container animation stagger effect
export default function EPaymentFintechSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-1%", // Trigger animation slightly before fully in view
    amount: 0.1, // Trigger when 30% is visible
  });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="fintech"
      className="w-full pt-[5rem] lg:pt-[10rem] pb-10 bg-[#EEF2FF] relative"
      ref={sectionRef}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-gradient-to-tr from-main/30 to-pink-300/10 rounded-full absolute top-[60%] right-[40%] hidden lg:block"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl relative">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={animationState}
          transition={{ ...transition, delay: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4 text-main font-urbanist font-bold lg:pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
          >
            Healthcare E-Payment & Fintech
          </motion.h2>

          <motion.div
            className="w-full max-w-6xl mx-auto mb-10"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.8 }}
          >
            <FintechStepsTabs tabs={fintechFlowSteps} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
