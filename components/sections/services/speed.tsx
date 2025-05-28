"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa";
import { SpeedMarqueeVertical } from "@/components/sections/services/speed-marquee";
import { LinkPreview } from "@/components/ui/link-preview";

// Animation configuration - matching the Hero Section
const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }; // Slightly reduced duration
const variants = {
  hidden: { filter: "blur(3px)", transform: "translateY(8%)", opacity: 0 }, // Reduced blur and transform
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function SpeedSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="speed"
      className="w-full pt-[2rem] lg:pt-[5rem] bg-[#EEF2FF] relative"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl relative">
        <div ref={animationRef} className="mb-8 md:mb-12">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4 text-main font-urbanist font-bold lg:pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Sports Promotion, Engagement and Education (SPEED)
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
              <div className="flex flex-col items-center xl:items-start xl:justify-center gap-6 mb-8 h-full">
                <div className="flex xl:flex-col gap-6 justify-center">
                  <div className="bg-blue-100 p-3 rounded-xl w-fit h-fit flex items-center justify-center">
                    <FaHandsHelping className="h-6 w-6 text-main" />
                  </div>
                  <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-main">
                    Impact Beyond Data
                  </h2>
                </div>
                <p className="text-main text-center xl:text-start text-base md:text-lg">
                  Partner with Finex to support health-focused outreach
                  programs, youth sports, and community wellness initiatives.
                  Together, we create meaningful impact beyond the clinic.
                  <br /> Finex partnered with Elmarino Sports Club to host the
                  Basil Offor Table Tennis Tournament, uniting the community
                  through wellness, competition, and tribute. From sponsoring
                  Alukimba to SPEED initiatives, Finex supports healthier lives
                  through active engagement.
                </p>
              </div>
            </motion.div>

            {/* Right Panel - Image */}

            <motion.div
              className="flex flex-1 items-center h-full w-full text-gray-800 font-semibold flex-col space-y-10 justify-center p-4 lg:p-10"
              variants={variants}
              initial="hidden"
              animate={animationState}
              transition={{ ...transition, delay: 0.8 }}
            >
              <SpeedMarqueeVertical />
            </motion.div>
          </div>

          <div className="text-neutral-500 text-lg md:text-3xl text-center mx-auto">
            From sponsoring the{" "}
            <LinkPreview
              url="https://theeagleonline.com.ng/new-winner-emerges-in-el-marino-alukimba-table-tennis-tournament/"
              className="font-semibold text-indigo-400 hover:underline"
            >
              El-Marino Alukimba Tournament
            </LinkPreview>{" "}
            to the{" "}
            <LinkPreview
              url="https://www.instagram.com/thesunnigeria/p/DAbPXnTIVwJ/"
              className="font-semibold text-indigo-400 hover:underline"
            >
              Basil Offor Memorial Games
            </LinkPreview>
            , Finex empowers communities through wellness-focused sports
            initiatives.
          </div>
        </div>
      </div>
    </section>
  );
}
