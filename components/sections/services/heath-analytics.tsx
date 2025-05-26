"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaChartBar } from "react-icons/fa";
import Image from "next/image";
import { GiWaterDrop } from "react-icons/gi";

// Animation configuration - memoized to prevent recreation
const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }; // Slightly reduced duration
const variants = {
  hidden: { filter: "blur(3px)", transform: "translateY(8%)", opacity: 0 }, // Reduced blur and transform
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function HealthAnalyticsSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, {
    once: true,
    margin: "-1%", // Trigger animation slightly before fully in view
    amount: 0.1, // Trigger when 10% is visible
  });
  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="analytics"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#EEF2FF] relative"
      ref={animationRef}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-main/30 rounded-full absolute top-1/2 right-[0%] hidden lg:block"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl relative">
        <div className="mb-8 md:mb-12">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-main font-urbanist font-bold lg:pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Healthcare Data Analytics & BI
          </motion.h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
            {/* Left Panel - Research Links */}
            <motion.div
              className="flex flex-col p-6 md:p-8 lg:p-10 h-full w-fit justify-center items-start"
              transition={{ ...transition, delay: 0.6 }}
              variants={variants}
              initial="hidden"
              animate={animationState}
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex lg:flex-col items-center lg:items-start justify-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <FaChartBar className="h-6 w-6 text-main" />
                  </div>
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-main">
                    Smarter Decisions. Deeper Insights.
                  </h2>
                </div>
                <p className="text-main text-start text-base md:text-lg">
                  Unify patient and operational data to unlock real-time
                  intelligence for care optimization. Systematic analysis to
                  generate data-driven insights that inform decision-making,
                  enhance quality, and optimize performance across healthcare
                  systems.
                </p>
              </div>
            </motion.div>

            {/* Right Panel - Image */}

            <motion.div
              className="flex items-center h-full rounded-3xl border text-gray-800 font-semibold flex-col space-y-10 justify-center p-10 border-white/30 backdrop-blur-sm bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]"
              variants={variants}
              initial="hidden"
              animate={animationState}
              transition={{ ...transition, delay: 0.8 }}
            >
              <div className="relative w-full h-full min-h-[300px] md:min-h-[350px] lg:min-h-[400px] rounded-xl overflow-hidden">
                <div className="flex gap-4 py-8 items-center justify-center">
                  <span className="bg-pink-300/30 p-2 rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center ">
                    <GiWaterDrop className="text-main size-[20px]" />
                  </span>
                  <p className="text-main text-xl font-semibold">
                    Monitor and make good health decisions.
                  </p>
                </div>
                <div className="flex justify-center w-full h-full">
                  <Image
                    src="/images/analytical-insight.gif"
                    alt="Lines Triple"
                    width={100}
                    height={100}
                    className="size-[70%] object-cover rounded-2xl hue-rotate-30"
                    loading="eager"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
