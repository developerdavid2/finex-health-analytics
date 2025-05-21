"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import Image from "next/image";

// Animation configuration - matching the Hero Section
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

export default function CyberSecuritySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="cybersecurity"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#EEF2FF] relative"
      ref={sectionRef}
    >
      {/* Background visuals */}
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-t-[5rem] opacity-60 mask-b-from-80% mask-b-to-90%">
        <Image
          src="/images/light-loader.gif"
          alt="Cyber Security"
          width={1920}
          height={1283}
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-gradient-to-tr from-main/30 to-pink-300/10 rounded-full absolute top-1/2 right-[0%]"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8 md:mb-12"
        >
          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4 text-main font-urbanist font-bold pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
          >
            Cybersecurity for Digital Health
          </motion.h2>

          {/* "Secure by Design" Card */}
          <motion.div
            variants={variants}
            className="flex flex-col rounded-3xl border text-gray-800 font-semibold justify-center p-4 md:p-6 border-black/10 backdrop-blur-lg bg-pink-200/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] overflow-hidden w-fit mx-auto"
          >
            <div className="flex items-center justify-center gap-6 mb-4">
              <motion.div
                variants={variants}
                className="bg-indigo-100 p-3 rounded-xl"
              >
                <FaShieldAlt className="h-6 w-6 text-main" />
              </motion.div>
              <motion.h2
                variants={variants}
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-main"
              >
                Secure by Design
              </motion.h2>
            </div>
            <motion.p
              variants={variants}
              className="text-main text-center text-base md:text-lg font-semibold max-w-sm"
            >
              Protect sensitive health records with top-tier encryption and
              global compliance.
            </motion.p>
          </motion.div>

          {/* Three-Column Layout */}
          <motion.div
            variants={containerVariants}
            className="grid xl:grid-cols-[1fr_2fr_1fr] relative justify-center items-center gap-8 mt-12"
          >
            {/* Left Panel - Image */}
            <motion.div
              className="h-full w-full flex justify-around flex-none"
              variants={variants}
            >
              <motion.div
                className="hidden xl:flex items-start rounded-3xl w-fit h-fit border text-gray-800 font-semibold flex-col space-y-10 justify-center p-10 border-zinc-300/40 backdrop-blur-md bg-zinc-500/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]"
                variants={variants}
              >
                <motion.div
                  className="relative rounded-xl overflow-hidden"
                  variants={variants}
                >
                  <div className="flex justify-center w-full h-full">
                    <Image
                      src="/images/fingerprint-scan.jpeg"
                      alt="Fingerprint Scan"
                      width={100}
                      height={100}
                      className="size-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Middle Panel - Image */}
            <motion.div
              className="flex grow items-center justify-center h-full w-full"
              variants={variants}
            >
              <motion.div className="relative rounded-xl" variants={variants}>
                <div className="flex justify-center w-full h-full">
                  <Image
                    src="/images/cyber-shield.png"
                    alt="Cyber Shield"
                    width={400}
                    height={400}
                    className="h-full sm:h-[300px] xl:h-[400px] w-full object-cover grayscale-0 rounded-2xl drop-shadow-xl/50 drop-shadow-cyan-500/50"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Panel - Image */}
            <motion.div
              className="h-full w-full flex justify-around flex-none"
              variants={variants}
            >
              <motion.div
                className="hidden xl:flex items-start rounded-3xl w-fit h-fit border text-gray-800 font-semibold flex-col space-y-10 justify-center p-10 border-white/40 backdrop-blur-md bg-gray-300/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]"
                variants={variants}
              >
                <motion.div
                  className="relative rounded-xl overflow-hidden"
                  variants={variants}
                >
                  <div className="flex justify-center w-full h-full">
                    <Image
                      src="/images/cyber-verify.png"
                      alt="Verification check"
                      width={300}
                      height={300}
                      className="size-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
