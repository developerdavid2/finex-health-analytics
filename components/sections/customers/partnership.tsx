"use client";

import React, { useEffect, useRef } from "react";
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

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, user interaction required
        console.log("Autoplay failed");
      });
    }
  }, []);

  return (
    <section
      id="partnerships"
      className="relative px-4 py-16 min-h-[1000px] bg-[#EFF0FC] overflow-hidden lg:pt-[10rem] rounded-t-[5rem] mask-b-from-90% mask-b-to-95%"
    >
      <motion.h2
        variants={textItemVariants}
        className="text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-16 text-main font-urbanist "
      >
        Partnerships Opportunities
      </motion.h2>
      <div className="absolute bottom-1/4 left-[5%] size-[200px] rounded-full bg-indigo-800 filter blur-[100px] opacity-40"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-gradient-to-tr from-main/30 to-pink-300/30 rounded-full absolute top-[20%] right-[10%]"
      />

      {/* Animated Content */}
      <div
        ref={animationRef}
        className="container relative mx-auto flex flex-col max-w-md md:max-w-xl lg:max-w-5xl z-10"
      >
        <motion.div
          className="flex flex-col items-center w-full"
          variants={containerVariants}
        >
          {/* Centered overlay div */}
          <motion.div
            variants={variants}
            className="flex flex-col justify-center items-center w-full h-full"
          >
            <div className="flex flex-col gap-4 rounded-3xl border text-gray-800 font-semibold justify-center p-8 md:p-10 lg:p-16 border-black/10 backdrop-blur-xl bg-pink-200/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] overflow-hidden w-full relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 1, delay: 0.6 }}
                className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl xl:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
              >
                Build with Us
              </motion.span>

              <motion.p
                variants={variants}
                className="text-main text-center text-base md:text-lg lg:text-xl font-medium max-w-full lg:max-w-lg mx-auto"
              >
                Whether you’re an investor, NGO, or government partner, Finex
                welcomes collaboration to scale our shared mission.
              </motion.p>

              <motion.div
                variants={variants}
                className="flex flex-col items-center lg:items-start justify-center gap-3 lg:gap-6 mb-0 lg:mb-4 w-full"
              >
                <div className="flex justify-center items-center mx-auto">
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="w-80 sm:w-[28rem] lg:w-[32rem] object-cover rounded-2xl"
                  >
                    <source src="/videos/partnerships.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>

              <div className="flex flex-col lg:flex-row gap-16 lg:gap-6">
                {partnershipOpportunities.map(
                  ({ id, icon: IconComponent, title, description }) => (
                    <motion.div
                      className="w-full justify-center items-center flex flex-col gap-4"
                      key={id}
                      variants={variants}
                    >
                      <motion.div
                        className="flex items-center justify-center flex-col"
                        variants={variants}
                      >
                        <div className="flex items-center justify-center bg-[#F0EDF9] rounded-full p-6 drop-shadow-xl drop-shadow-black/10">
                          <IconComponent className="text-3xl text-main" />
                        </div>
                      </motion.div>

                      <motion.h2
                        className="text-xl lg:text-2xl font-bold text-main"
                        variants={variants}
                      >
                        {title}
                      </motion.h2>

                      <motion.p
                        className="max-w-60 text-center text-base md:text-lg text-main"
                        variants={variants}
                      >
                        {description}
                      </motion.p>
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
