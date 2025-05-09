"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Import the hook

import { AuroraText } from "@/components/ui/aurora-text";

// Animation configuration
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function AboutHeroSection() {
  // Use the scroll hook for the services section

  // State to track if animation has played
  const [, setHasAnimated] = useState(false);

  // Set initial animation state based on whether we're in the first render
  const [initialState, setInitialState] = useState("hidden");

  useEffect(() => {
    // Set animation to play once on component mount
    setInitialState("visible");
    setHasAnimated(true);
  }, []);
  return (
    <section
      id="about-hero"
      className="justify-center items-center bg-pink-50/20 relative pt-[7rem]"
    >
      {/* Blur gradient reflections */}
      <div className="blur-[12rem] h-52 w-52 bg-pink-200 absolute top-[20%] right-[5%] " />
      <div className="blur-[12rem] h-52 w-52 bg-purple-500 absolute top-[60%] left-[5%] " />
      {/* Glass Morphism with animations */}
      <div className="blur-[3rem] h-20 w-20 bg-blue-500/30 absolute top-5 left-[0%] " />
      <div className="blur-[3rem] h-20 w-20 bg-blue-500/30 absolute top-10 left-[50%]" />

      <div className="container mx-auto flex flex-col overflow-hidden">
        <motion.div
          className="flex flex-col justify-center items-center relative"
          initial="hidden"
          animate={initialState}
          transition={{ staggerChildren: 0.04 }}
        >
          <div className="max-w-7xl px-4">
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[200px] leading-none font-black tracking-tight mb-6 text-main/50 pt-8 text-shadow-xl font-urbanist mask-b-from-50% mask-b-to-90%">
              About
            </h1>

            <div className="flex items-center justify-center">
              <div
                className="bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%
          h-px z-[1] pointer-events-none"
              />
              <motion.div variants={variants} transition={transition}>
                <div className="bg-blue-200/10 border-2 border-white drop-shadow-2xl rounded-xl border-transparent animate-border text-base capitalize inline-flex justify-center whitespace-nowrap font-medium text-gray-700 backdrop-blur-[5rem] p-2 px-4 gap-2 items-center">
                  <p className="text-main font-semibold">ABOUT THE COMPANY</p>
                </div>
              </motion.div>

              <div
                className="bg-[radial-gradient(ellipse_at_center,_#CAC6DD_0%,_rgba(14,12,21,0)_40%)]
          h-px z-[1] pointer-events-none"
              />
            </div>

            <div className="max-w-5xl px-4">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl leading-none font-black tracking-tight mb-4 text-main pt-8 text-shadow-xl font-urbanist">
                Empowering Healthcare through Data and{" "}
                <AuroraText>Innovation</AuroraText>
              </h1>

              <motion.p
                className="text-gray-600 text-lg font-medium mb-8 max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center"
                transition={transition}
                variants={variants}
              >
                Finex Healthcare Analytics and Informatics is reshaping
                healthcare delivery using intelligent analytics, secure digital
                infrastructure, and scalable financial solutions.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
