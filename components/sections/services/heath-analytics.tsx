"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaChartBar, FaEye } from "react-icons/fa";
import Image from "next/image";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function HealthAnalyticsSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="analytics"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#EEF2FF] relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-gradient-to-tr from-main/30 to-pink-300/10 rounded-full absolute top-1/2 right-[0%]"
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
              <div className="flex flex-col items-start gap-6 mb-8">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <FaChartBar className="h-6 w-6 text-main" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-main lg:pb-8">
                  Smarter Decisions. Deeper Insights.
                </h2>
                <p className="text-main text-start text-base md:text-lg">
                  Gather and analyze clinical and administrative data to uncover
                  patterns, improve care, and make better decisions. Our tools
                  help healthcare providers simplify reports and act on what
                  matters most.
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
                    <FaEye className="text-main size-[20px]" />
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
