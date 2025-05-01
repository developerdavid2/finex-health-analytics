// AboutSection.js
"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useState, useEffect, useRef } from "react";
import AboutGrid from "@/components/sections/home/about-grid";
import { motion, useInView } from "framer-motion";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function AboutSection() {
  const { ref } = useSectionScroll("company");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });

  // State to track if animation has played
  const [initialState, setInitialState] = useState("hidden");

  // Set animation to visible when section comes into view
  useEffect(() => {
    if (isInView) {
      setInitialState("visible");
    }
  }, [isInView]);

  return (
    <section
      id="about-us"
      ref={ref}
      className="flex justify-center items-center bg-indigo-50 relative pt-[10rem]"
    >
      <div ref={animationRef} className="flex flex-col container max-w-7xl">
        <motion.div
          className="container mb-10 max-w-6xl"
          initial="hidden"
          animate={initialState}
          variants={variants}
          transition={transition}
        >
          <h2 className="text-start text-7xl font-bold mb-4 text-zinc-700 font-urbanist font-urban">
            About Us
          </h2>
          <p className="text-gray-600 text-lg font-medium mb-8 max-w-3xl">
            At Finex, we incorporate the use of various analytical tools to
            read, compile, extract, and visualize clients historic medical
            report, for making efficient health decisions.
          </p>
        </motion.div>

        <motion.div
          className="mb-10"
          initial="hidden"
          animate={initialState}
          variants={variants}
          transition={{ ...transition, delay: 0.3 }}
        >
          <AboutGrid />
        </motion.div>
      </div>
    </section>
  );
}
