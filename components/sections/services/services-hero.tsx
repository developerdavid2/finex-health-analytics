"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/use-scroll-to";

// Animation configuration - memoized to prevent recreation
const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }; // Slightly reduced duration
const variants = {
  hidden: { filter: "blur(3px)", transform: "translateY(8%)", opacity: 0 }, // Reduced blur and transform
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function ServicesHeroSection() {
  const scrollToServices = useScrollTo("analytics");

  const [, setHasAnimated] = useState(false);
  const [initialState, setInitialState] = useState("hidden");

  // Memoize the headline text processing
  const { words } = useMemo(() => {
    const text =
      "Delivering Innovation Through Data-Driven Healthcare Solutions";
    return {
      headlineText: text,
      words: text.split(" "),
    };
  }, []);

  // Optimize the animation trigger
  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const animationFrame = requestAnimationFrame(() => {
      setInitialState("visible");
      setHasAnimated(true);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Memoize the button click handler
  const handleServicesClick = useCallback(() => {
    scrollToServices();
  }, [scrollToServices]);

  return (
    <section
      id="services"
      className="justify-center items-center bg-pink-50/20 relative pt-[7rem] pb-16"
    >
      {/* Optimized background elements with will-change for GPU acceleration */}
      <div
        className="blur-[12rem] h-52 w-52 bg-pink-200/50 absolute top-[20%] right-[5%] will-change-transform"
        style={{ transform: "translateZ(0)" }} // Force GPU layer
      />

      {/* Smaller blur elements for better performance */}
      <div className="blur-[3rem] h-20 w-20 bg-blue-500/30 absolute top-5 left-[0%]" />
      <div className="blur-[3rem] h-20 w-20 bg-blue-500/30 absolute top-10 left-[50%]" />

      {/* Optimized decorative elements */}
      <motion.div
        variants={variants}
        transition={transition}
        initial="hidden"
        animate={initialState}
        className="size-18 rounded-full bg-gradient-to-br from-white to-zinc-900/15 absolute top-52 right-[10%] will-change-transform"
      />

      <motion.div
        variants={variants}
        transition={{ ...transition, delay: 0.1 }}
        initial="hidden"
        animate={initialState}
        className="size-18 rounded-full bg-gradient-to-br from-blue-200 via-purple-400/15 to-purple-900/10 absolute top-[30rem] md:top-96 left-[10%] will-change-transform"
      />

      <div className="container mx-auto flex flex-col overflow-hidden">
        <motion.div
          className="flex flex-col justify-center items-center pb-10 relative"
          initial="hidden"
          animate={initialState}
          transition={{ staggerChildren: 0.03 }} // Reduced stagger delay
        >
          <div className="max-w-7xl px-4">
            {/* Large Services title - optimized for LCP */}
            <motion.h1
              variants={variants}
              transition={transition}
              className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[200px] leading-none font-black tracking-tight mb-6 text-main/50 pt-8 font-urbanist will-change-transform"
              style={{
                textShadow: "0 4px 12px rgba(0,0,0,0.15)",
                maskImage:
                  "linear-gradient(to bottom, black 50%, transparent 90%)",
              }}
            >
              Services
            </motion.h1>

            {/* Badge section - optimized */}
            <div className="flex items-center justify-center mb-8">
              <motion.div
                variants={variants}
                transition={{ ...transition, delay: 0.1 }}
                className="bg-blue-200/10 border-2 border-white drop-shadow-xl rounded-xl backdrop-blur-sm p-2 px-4 gap-2 items-center inline-flex will-change-transform"
              >
                <p className="text-main font-semibold">OUR SOLUTIONS</p>
              </motion.div>
            </div>

            {/* Main headline - optimized for performance */}
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl leading-normal font-black tracking-tight mb-4 text-main pt-8 font-urbanist">
                {words.map((word, index) => (
                  <React.Fragment key={index}>
                    <motion.span
                      className="inline-block will-change-transform"
                      transition={{ ...transition, delay: index * 0.04 }}
                      variants={variants}
                    >
                      {word === "Innovation" ? (
                        <AuroraText>{word}</AuroraText>
                      ) : (
                        word
                      )}
                    </motion.span>
                    {index < words.length - 1 && " "}
                  </React.Fragment>
                ))}
              </h2>

              <motion.p
                className="text-gray-600 text-lg font-medium mb-8 max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center"
                transition={{ ...transition, delay: 0.2 }}
                variants={variants}
              >
                Explore how Finex is transforming healthcare through advanced
                analytics, secure systems, and smart tools tailored to
                real-world needs.
              </motion.p>
            </div>
          </div>

          {/* CTA Button - optimized */}
          <motion.div
            transition={{ ...transition, delay: 0.3 }}
            variants={variants}
            className="mx-auto"
          >
            <Button
              className="bg-[#EEF2FF] font-bold rounded-full text-neutral-600 hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-55% hover:to-gray-500 hover:text-white text-md p-6 md:text-lg md:p-8 shadow-lg transition-all duration-200 md:w-[15rem] hover:scale-105 cursor-pointer will-change-transform"
              variant="outline"
              onClick={handleServicesClick}
            >
              See All Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
