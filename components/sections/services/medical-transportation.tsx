"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaAmbulance } from "react-icons/fa";
import { Ripple } from "@/components/ui/ripple";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

// Container animation stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function MedicalTransportationSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isClient, setIsClient] = useState(false);

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  // Use useEffect to handle client-side only functionality
  useEffect(() => {
    setIsClient(true);

    // Handle video playback
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Auto-play was prevented:", err);
      });
    }
  }, []);

  return (
    <section
      id="transport"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#EEF2FF] relative"
      ref={sectionRef}
    >
      {/* Background visuals */}
      <div className="absolute top-10 right-0 h-full w-1/3 overflow-hidden hidden lg:block">
        <Ripple />
      </div>
      <div className="absolute top-10 left-0 h-full w-1/3 overflow-hidden hidden lg:block">
        <Ripple />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={animationState}
          className="mb-8 md:mb-12"
        >
          {/*Ping Blinker*/}
          <motion.div
            variants={variants}
            className="flex items-center mx-auto justify-center space-x-2 py-2 px-4 rounded-full mb-4 w-fit"
            style={{
              background: "linear-gradient(145deg, #f0f0f0, #e6e6e6)",
              boxShadow: "3px 3px 6px #d1d1d1, -3px -3px 6px #ffffff",
            }}
          >
            <div className="relative">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm text-gray-600">Track Transport</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4 text-main font-urbanist font-bold pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
          >
            Medical Transportation Analytics
          </motion.h2>

          <motion.div
            variants={variants}
            className="flex flex-col rounded-3xl border text-gray-800 font-semibold justify-center items-center p-4 md:p-6 border-black/10 backdrop-blur-sm bg-gray-500/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] overflow-hidden mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3 relative"
          >
            {isClient && (
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                className="w-full h-auto min-h-96 object-cover rounded-2xl"
              >
                <source src="/videos/transport.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* Centered overlay div */}
            <motion.div
              variants={variants}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-5/6 lg:w-3/4"
            >
              <motion.div
                variants={variants}
                className="flex flex-col lg:flex-row gap-4 rounded-3xl border text-gray-800 font-semibold justify-center p-4 md:p-6 border-black/10 backdrop-blur-lg bg-pink-200/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] overflow-hidden w-3/4 md:w-full mx-auto"
              >
                <motion.div
                  variants={variants}
                  className="bg-pink-100 p-3 rounded-xl w-fit h-fit mx-auto lg:mx-0"
                >
                  <FaAmbulance className="h-6 w-6 text-main" />
                </motion.div>
                <motion.div
                  variants={variants}
                  className="flex flex-col items-center lg:items-start justify-center gap-3 lg:gap-6 mb-0 lg:mb-4 w-full"
                >
                  <motion.h2
                    variants={variants}
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-400 text-center lg:text-left"
                  >
                    Optimized Movement, Better Outcomes.
                  </motion.h2>
                  <motion.p
                    variants={variants}
                    className="text-gray-200/40 text-center lg:text-start text-base md:text-lg font-medium max-w-full lg:max-w-sm"
                  >
                    Improve patient transport and emergency dispatch through
                    data visualization
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
