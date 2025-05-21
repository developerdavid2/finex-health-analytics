"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  trainingDetails,
  trainingFeatures,
} from "@/constants/services-page-data/services";
import { Button } from "@/components/ui/button";
// Add the missing React icons imports

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

// Features stagger effect - slightly faster for multiple items
const featuresContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Details stagger effect
const detailsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};

export default function TrainingCapacitySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="training"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#EEF2FF] relative"
      ref={sectionRef}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-gradient-to-tr from-main/30 to-pink-300/10 rounded-full absolute top-[15%] left-[5%]"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={animationState}
          className="mb-8 md:mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4 text-main font-urbanist font-bold pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
          >
            Training & Capacity Building
          </motion.h2>

          <motion.div className="container" variants={variants}>
            <motion.div
              className="relative flex md:flex-wrap flex-nowrap border border-gray-500/10 rounded-3xl md:overflow-hidden max-md:flex-col
  bg-gray-400/10 backdrop-blur-md shadow-md
  max-md:border-none max-md:rounded-none max-md:gap-3 after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-1/2
  after:bg-pink-100/10 after:backdrop-blur-md after:rounded-3xl after:shadow-inner after:border-l after:border-white/10 after:mask-b-from-70%
  max-md:after:hidden"
              variants={featuresContainerVariants}
            >
              {trainingFeatures.map(
                ({ id, icon: IconComponent, caption, title, text, button }) => (
                  <motion.div
                    key={id}
                    className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:gap-7 max-md:border-2 max-md:border-gray-500/10 max-md:rounded-3xl max-md:flex-320"
                    variants={variants}
                  >
                    <motion.div
                      className="w-full flex justify-start items-start"
                      variants={variants}
                    >
                      <motion.div
                        className="-ml-3 mb-12 flex items-center justify-center flex-col"
                        variants={variants}
                      >
                        <div className="w-0.5 h-16 bg-gray-500/10 " />
                        <div className="flex items-center justify-center bg-[#DFE2EE] rounded-full p-6 drop-shadow-xl drop-shadow-black/10">
                          <IconComponent className="text-3xl text-main" />
                        </div>
                      </motion.div>
                    </motion.div>
                    <motion.p
                      className="caption mb-5 max-md:mb-6 text-lg uppercase font-black text-main"
                      variants={variants}
                    >
                      {caption}
                    </motion.p>
                    <motion.h2
                      className="max-w-400 mb-7 text-xl sm:text-3xl lg:text-5xl font-bold text-main text-p4 max-md:mb-6 max-md:h5"
                      variants={variants}
                    >
                      {title}
                    </motion.h2>
                    <motion.p
                      className="mb-11 max-md:mb-8 text-xl leading-relaxed text-main"
                      variants={variants}
                    >
                      {text}
                    </motion.p>

                    <motion.div variants={variants}>
                      <Button
                        className="font-bold rounded-full bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 text-white text-md p-6 md:text-lg md:p-8 drop-shadow-xl drop-shadow-blue-50 shadow-xl transition duration-300 md:w-[15rem] hover:scale-110 cursor-pointer"
                        variant={"outline"}
                      >
                        {button.icon &&
                          React.createElement(button.icon, {
                            className: "mr-2",
                          })}
                        {button.title}
                      </Button>
                    </motion.div>
                  </motion.div>
                ),
              )}
              <motion.ul
                className="relative flex justify-around flex-grow px-[5%] border-2 border-gray-500/10 rounded-3xl max-md:hidden"
                variants={detailsContainerVariants}
              >
                <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
                {trainingDetails.map(({ id, icon: IconComponent, title }) => (
                  <motion.li
                    key={id}
                    className="relative pt-16 px-4 pb-14"
                    variants={variants}
                  >
                    <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
                    <motion.div
                      className="flex items-center justify-center mx-auto mb-3 border-2 border-gray-500/10 rounded-full hover:border-gray-500/40 transition-all duration-500 shadow-500 size-20"
                      variants={variants}
                    >
                      <IconComponent className="text-3xl text-main" />
                    </motion.div>
                    <motion.h3
                      className="relative z-2 max-w-36 mx-auto my-8 text-base font-extrabold text-center uppercase text-main"
                      variants={variants}
                    >
                      {title}
                    </motion.h3>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
