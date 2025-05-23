"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { partnershipOpportunities } from "@/constants/customers-page-data/customers";

// Animation configs
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const textItemVariants = {
  hidden: { filter: "blur(5px)", y: 20, opacity: 0 },
  visible: {
    filter: "blur(0px)",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};
export default function PartnershipSection() {
  const animationRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });
  const [animationState, setAnimationState] = useState<"hidden" | "visible">(
    "hidden",
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay failed");
      });
    }
    if (isInView) {
      setAnimationState("visible");
    }
  }, [isInView]);

  return (
    <section
      id="partnerships"
      className="relative px-4 py-16 min-h-[1000px] bg-[#EFF0FC] overflow-hidden lg:pt-[10rem] rounded-t-[5rem] mask-b-from-90% mask-b-to-95%"
    >
      <motion.h2
        variants={textItemVariants}
        initial="hidden"
        animate={animationState}
        className="text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-16 text-main font-urbanist"
      >
        Partnerships Opportunities
      </motion.h2>

      {/* Glow element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animationState === "visible" ? { opacity: 0.6, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="h-56 w-56 bg-gradient-to-tr from-main/30 to-pink-300/30 rounded-full absolute top-[20%] right-[10%]"
      />

      <div
        ref={animationRef}
        className="container relative mx-auto flex flex-col max-w-md md:max-w-xl lg:max-w-5xl z-10"
      >
        <motion.div
          className="flex flex-col items-center w-full mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={animationState}
        >
          <motion.div
            variants={variants}
            initial="hidden"
            animate={animationState}
            className="flex flex-col justify-center items-center w-full h-full"
          >
            <div className="flex flex-col gap-4 rounded-3xl border text-gray-800 font-semibold justify-center p-8 md:p-10 lg:p-16 border-black/10 backdrop-blur-xl bg-pink-200/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] overflow-hidden w-full relative z-10">
              {/* Title */}
              <motion.span
                variants={variants}
                initial="hidden"
                animate={animationState}
                className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl xl:text-6xl font-semibold leading-none text-transparent"
              >
                Build with Us
              </motion.span>

              {/* Description */}
              <motion.p
                variants={variants}
                initial="hidden"
                animate={animationState}
                className="text-main text-center text-base md:text-lg lg:text-xl font-medium max-w-full lg:max-w-lg mx-auto"
              >
                Whether you’re an investor, NGO, or government partner, Finex
                welcomes collaboration to scale our shared mission.
              </motion.p>

              {/* Video */}
              <motion.div
                variants={variants}
                initial="hidden"
                animate={animationState}
                className="flex justify-center items-center"
              >
                <video
                  ref={videoRef}
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="w-80 sm:w-[28rem] lg:w-[32rem] object-cover rounded-2xl"
                >
                  <source src="/videos/partnerships.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>

              {/* Feature Cards */}
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-6 mt-10">
                {partnershipOpportunities.map(
                  ({ id, icon: IconComponent, title, description }) => (
                    <motion.div
                      key={id}
                      variants={variants}
                      initial="hidden"
                      animate={animationState}
                      className="w-full flex flex-col items-center gap-4"
                    >
                      <div className="bg-[#F0EDF9] rounded-full p-6 drop-shadow-xl">
                        <IconComponent className="text-3xl text-main" />
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-main">
                        {title}
                      </h2>
                      <p className="max-w-60 text-center text-base md:text-lg text-main">
                        {description}
                      </p>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
