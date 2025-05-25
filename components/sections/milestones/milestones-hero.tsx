"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { useScrollOnLoad } from "@/hooks/use-scroll-onload";
import Image from "next/image";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function MilestonesHeroSection() {
  const scrollToMain = useScrollTo("milestones-main");
  useScrollOnLoad();
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="milestones-hero"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#EEF2FF] relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-48 w-48 bg-gradient-to-tr from-main/30 to-pink-300/30 rounded-full absolute top-1/2 right-[5%]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="border-white/30 backdrop-blur-lg bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] h-56 w-56 rounded-full absolute z-10 top-1/2 right-[8%] max-sm:hidden"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-[1320px] relative">
        <div ref={animationRef} className="mb-8 md:mb-12">
          {/* Responsive Grid */}
          <div className="flex flex-col items-center justify-center lg:flex-row gap-8 md:gap-12 xl:gap-16">
            {/* Left Panel -Text*/}
            <motion.div
              className="flex flex-col h-full w-fit items-start justify-center max-md:justify-center"
              transition={{ ...transition, delay: 0.6 }}
              variants={variants}
              initial="hidden"
              animate={animationState}
            >
              <div className="flex flex-col gap-2 mb-8">
                <motion.h1
                  variants={variants}
                  transition={transition}
                  className="text-center lg:text-start text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl leading-none font-black tracking-tight text-main/50 pt-8 text-shadow-xl font-urbanist"
                >
                  Milestones
                </motion.h1>

                <motion.p
                  className="text-center lg:text-start text-gray-600 text-base md:text-xl font-medium max-w-lg mx-auto"
                  transition={transition}
                  variants={variants}
                >
                  Charting our journey from vision to execution across funding,
                  operations, partnerships, and recognition.
                </motion.p>

                <div className="flex flex-col pt-8 items-center lg:items-start justify-start">
                  <motion.div transition={transition} variants={variants}>
                    <Button
                      className="bg-[#EEF2FF] font-bold rounded-full text-neutral-600 hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-55% hover:to-gray-500 hover:text-white text-md p-6 md:text-lg md:p-8 drop-shadow-xl drop-shadow-blue-50 shadow-xl transition duration-300 md:w-[15rem] hover:scale-110 cursor-pointer"
                      variant={"outline"}
                      onClick={scrollToMain}
                    >
                      Explore More
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Panel - Image */}

            <motion.div
              className="flex flex-col items-center h-full justify-start relative"
              variants={variants}
              initial="hidden"
              animate={animationState}
              transition={{ ...transition, delay: 0.8 }}
            >
              <div className="h-full w-full relative">
                <Image
                  src="/images/milestones/milestones-hero.png"
                  alt="Milestones Hero"
                  width={300}
                  height={300}
                  className="object-cover w-[350px] lg:w-[500px] h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
