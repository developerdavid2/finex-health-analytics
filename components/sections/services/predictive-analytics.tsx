"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Animation configuration - memoized to prevent recreation
const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }; // Slightly reduced duration
const variants = {
  hidden: { filter: "blur(3px)", transform: "translateY(8%)", opacity: 0 }, // Reduced blur and transform
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function PredictiveAnalyticsSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section id="ai" className="w-full lg:pt-[10rem] bg-[#EEF2FF] relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl relative">
        <div ref={animationRef} className="mb-8 md:mb-12">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4 text-main font-urbanist font-bold lg:pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Predictive Analytics & AI
          </motion.h2>

          {/* Responsive Grid */}
          <div className="flex flex-col xl:flex-row">
            {/* Left Panel - Research Links */}
            <motion.div
              className="flex flex-col p-6 md:p-8 lg:p-10 min-h-full w-full justify-center items-start flex-1"
              transition={{ ...transition, delay: 0.6 }}
              variants={variants}
              initial="hidden"
              animate={animationState}
            >
              <div className="flex flex-col items-center xl:items-start xl:justify-center gap-6 h-full">
                <div className="flex xl:flex-col gap-6 justify-center">
                  <div className="bg-blue-100 p-3 rounded-xl w-fit">
                    <FaRobot className="h-6 w-6 text-main" />
                  </div>
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-main">
                    Anticipate. Act. Advance.
                  </h2>
                </div>
                <p className="text-main text-center xl:text-start text-base md:text-lg">
                  Use historical data to anticipate future trends in patient
                  health, resource needs, and care delivery. Our predictive
                  tools help you plan ahead and respond faster with clarity.
                </p>
              </div>
            </motion.div>

            {/* Right Panel - Image */}

            <motion.div
              className="flex flex-1 items-center h-full w-full text-gray-800 font-semibold flex-col space-y-10 justify-center p-10 max-lg:pt-0"
              variants={variants}
              initial="hidden"
              animate={animationState}
              transition={{ ...transition, delay: 0.8 }}
            >
              <div className="relative w-fit h-full rounded-xl overflow-hidden">
                <div className="flex gap-4 py-8 items-center justify-center px-8">
                  <span className="bg-pink-300/30 p-2 rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center ">
                    <FaRobot className="text-main size-[20px]" />
                  </span>
                  <p className="text-main text-xl font-semibold">
                    Use AI to predict patient outcomes
                  </p>
                </div>
                <div className="flex justify-center items-center w-fit">
                  <DotLottieReact
                    src="/lotties/robot.lottie"
                    autoplay
                    loop
                    className=" w-[25rem] h-auto"
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
