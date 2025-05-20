"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";
import Image from "next/image";
import { GiWaterDrop } from "react-icons/gi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function RehabilitationSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="rehab"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#EEF2FF] relative"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-t-[5rem] opacity-15 mask-b-from-80% mask-b-to-90%">
        <Image
          src="/images/health-safe.jpeg"
          alt="Cyber Security "
          width={1920}
          height={1283}
          className="w-full h-full object-cover "
        />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-gradient-to-tr from-main/30 to-pink-300/10 rounded-full absolute top-1/2 right-[0%] hidden lg:block"
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
            Rehabilitation & Wellness Recovery
          </motion.h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
            {/* Left Panel */}
            <div className="flex flex-col justify-center items-center gap-8">
              {/* Heart Rate*/}
              <motion.div
                className="p-6 bg-white/10 rounded-2xl shadow-2xl backdrop-blur-md border border-white/30 items-center justify-center text-gray-800 font-semibold flex flex-col w-full"
                transition={{ ...transition, delay: 0.6 }}
                variants={variants}
              >
                <div className="flex gap-4 pt-8 items-center justify-start">
                  <span className="bg-gray-200 p-2 rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center ">
                    <GiWaterDrop className="text-[#2B1F3A] size-[20px]" />
                  </span>
                  <p className="text-gray-600 font-semibold">
                    Monitor your heart&#39;s health
                  </p>
                </div>
                <div className="flex justify-center items-center object-cover w-full h-full">
                  <DotLottieReact
                    src="/lotties/pulse.lottie" // <-- replace this with your actual path
                    autoplay
                    loop
                    className="hue-rotate-30"
                  />
                </div>
              </motion.div>

              {/*Sphere Spin Rate*/}
              <motion.div
                className="hidden xl:flex items-start rounded-3xl border text-gray-800 font-semibold flex-col space-y-10 justify-center p-10 border-zinc-300/40 backdrop-blur-md bg-[zinc-500/10] shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] w-full"
                variants={variants}
                initial="hidden"
                animate={animationState}
                transition={{ ...transition, delay: 0.8 }}
              >
                <div className="relative rounded-xl overflow-hidden mx-auto">
                  <div className="flex justify-center items-center w-full h-full mx-auto">
                    <Image
                      src="/images/spin-health-rate.gif"
                      alt="Sphere Rate Spin"
                      width={100}
                      height={100}
                      className="size-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Panel - Image */}
            <div className="flex flex-col justify-center items-center">
              <motion.div
                className="flex flex-col p-6 md:p-8 lg:p-10 h-full w-fit justify-center items-start"
                transition={{ ...transition, delay: 0.6 }}
                variants={variants}
                initial="hidden"
                animate={animationState}
              >
                <div className="flex flex-col items-start gap-6 mb-8">
                  <div className="flex items-center justify-center bg-[#E8EDF9] rounded-full p-6 drop-shadow-xl drop-shadow-black/10">
                    <FaHeartbeat className="h-12 w-12 text-main" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-main pb-8">
                    Data-Informed Healing.
                  </h2>
                  <p className="text-main text-start text-base md:text-lg">
                    Support patients through recovery with data-driven programs
                    that personalize physical therapy, mental health care, and
                    wellness activities for long-term healing.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
