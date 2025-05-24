"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AuroraText } from "@/components/ui/aurora-text";

// Animation configuration
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function ResourcesHeroSection() {
  // State to track if animation has played
  const [, setHasAnimated] = useState(false);

  // Set initial animation state based on whether we're in the first render
  const [initialState, setInitialState] = useState("hidden");

  useEffect(() => {
    // Set animation to play once on component mount
    setInitialState("visible");
    setHasAnimated(true);
  }, []);

  // Split headline text into words for word-by-word animation
  const headlineText = "Explore Our Journey and Impact";
  const words = headlineText.split(" ");
  return (
    <section
      id="resources"
      className="justify-center items-center bg-pink-50/20 relative pt-[7rem]"
    >
      {/* Blur gradient reflections */}
      <div className="blur-[12rem] h-52 w-52 bg-pink-200/50 absolute top-[20%] right-[5%] " />

      {/* Glass Morphism with animations */}
      <div className="blur-[3rem] h-20 w-20 bg-blue-500/30 absolute top-5 left-[0%] " />
      <div className="blur-[3rem] h-20 w-20 bg-blue-500/30 absolute top-10 left-[50%]" />

      {/* Radial round balls with animation */}
      <motion.div
        variants={variants}
        transition={transition}
        className="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900/15 to-75% absolute top-52 right-[10%]"
      ></motion.div>

      <motion.div
        initial="hidden"
        animate={initialState}
        transition={{ staggerChildren: 0.04 }}
        className="size-18 rounded-full bg-radial-[at_50%_75%] from-blue-200 via-purple-400/15 to-purple-900/10 to-90% absolute top-[30rem] md:top-96 left-[10%]"
      ></motion.div>

      <div className="container mx-auto flex flex-col overflow-hidden">
        <motion.div
          className="flex flex-col justify-center items-center relative"
          initial="hidden"
          animate={initialState}
          transition={{ staggerChildren: 0.04 }}
        >
          <div className="max-w-7xl px-4">
            <motion.h1
              variants={variants}
              transition={transition}
              className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[200px] leading-none font-black tracking-tight mb-6 text-main/50 pt-8 text-shadow-xl font-urbanist mask-b-from-50% mask-b-to-90%"
            >
              Resources
            </motion.h1>

            <div className="flex items-center justify-center">
              <div
                className="bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%
                h-px z-[1] pointer-events-none"
              />

              <div
                className="bg-[radial-gradient(ellipse_at_center,_#CAC6DD_0%,_rgba(14,12,21,0)_40%)]
                h-px z-[1] pointer-events-none"
              />
            </div>

            <div className="max-w-5xl px-4">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl leading-normal font-black tracking-tight mb-4 text-main pt-8 text-shadow-xl font-urbanist">
                {words.map((word, index) => (
                  <React.Fragment key={index}>
                    <motion.span
                      className="inline-block"
                      transition={transition}
                      variants={variants}
                    >
                      {word === "Journey" ? (
                        <AuroraText>{word}</AuroraText>
                      ) : (
                        word
                      )}
                    </motion.span>
                    {index < words.length - 1 && " "}
                  </React.Fragment>
                ))}
              </h1>

              <motion.p
                className="text-gray-600 text-lg font-medium mb-8 max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center"
                transition={transition}
                variants={variants}
              >
                From innovation to impact — explore how Finex Healthcare is
                shaping the future of digital health.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
