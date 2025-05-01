"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { coreValues } from "@/constants/homepage-data";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function CoreValuesSection() {
  const { ref } = useSectionScroll("core-values");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section ref={ref} className="w-full py-20 bg-[#EEF2FF]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={animationRef} className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            className="text-7xl font-bold mb-4 text-neutral-700"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Our Core Values
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.3 }}
          >
            These principles guide every solution we deliver—from AI-driven
            insights to on-the-ground wellness initiatives.
          </motion.p>
        </div>

        <div className="flex gap-4">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="relative bg-white/10 rounded-2xl shadow-2xl backdrop-blur-md border border-white/30 items-center justify-center text-center text-gray-800 font-semibold flex p-10 flex-col"
            >
              <div className="mb-6 text-indigo-600 text-2xl">{value.icon}</div>
              <h4 className="text-2xl font-semibold text-neutral-900 mb-2 capitalize transition-all duration-500">
                {value.title}
              </h4>
              <p className="text-md font-normal text-gray-500 transition-all duration-500 leading-5">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
