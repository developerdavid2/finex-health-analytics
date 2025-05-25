"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Image from "next/image";
import { heroButtons } from "@/constants/homepage-data";
import { CgPill } from "react-icons/cg";
import { GiWaterDrop } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/ui/aurora-text";
import { useScrollOnLoad } from "@/hooks/use-scroll-onload";

// Animation configuration - memoized to prevent recreation
const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }; // Reduced duration
const variants = {
  hidden: { filter: "blur(5px)", transform: "translateY(10%)", opacity: 0 }, // Reduced blur
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

// Memoized scale variants
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export default function HomeSection() {
  const scrollToServices = useScrollTo("services");
  useScrollOnLoad();

  const [, setHasAnimated] = useState(false);
  const [initialState, setInitialState] = useState("hidden");

  // Memoize the headline text processing
  const { words } = useMemo(() => {
    const text =
      "Transforming Healthcare Through Digital Innovation & Analytics";
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
  const handleExploreClick = useCallback(() => {
    scrollToServices();
  }, [scrollToServices]);

  // Memoize the hero buttons rendering
  const renderedHeroButtons = useMemo(
    () =>
      heroButtons.map((button) => (
        <div
          key={button.slug}
          className="inline-flex text-center justify-center items-center gap-2 rounded-full px-3 py-1.5 text-sm/6 font-semibold text-gray-500 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-hover:text-white data-open:bg-gray-700 border border-gray-400 basis-[30%] md:basis-[20%]"
        >
          {button.label}
        </div>
      )),
    [heroButtons],
  );

  return (
    <section
      id="home"
      className="justify-center items-center bg-pink-50/20 relative pt-[6rem] lg:pt-[10rem]"
    >
      {/* Optimized background elements with will-change for GPU acceleration */}
      <div
        className="blur-[12rem] h-52 w-52 bg-pink-200 absolute top-[20%] right-[5%] will-change-transform"
        style={{ transform: "translateZ(0)" }} // Force GPU layer
      />
      <div
        className="blur-[12rem] h-52 w-52 bg-purple-500 absolute top-[60%] left-[5%] will-change-transform"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Smaller blur elements for better performance */}
      <div className="blur-[2rem] h-16 w-16 bg-blue-500/20 absolute top-5 left-[0%]" />
      <div className="blur-[2rem] h-16 w-16 bg-blue-500/20 absolute top-10 left-[50%]" />

      {/* Client rating card - optimized positioning */}
      <motion.div
        className="bg-blue-200/10 border-2 border-white drop-shadow-xl rounded-xl backdrop-blur-sm p-2 gap-2 items-center w-fit pr-16 absolute max-lg:hidden top-1/2 left-[10%] -translate-x-0.5 will-change-transform flex"
        transition={{ ...transition, delay: 0.1 }}
        variants={variants}
        initial="hidden"
        animate={initialState}
      >
        <span className="bg-white p-2 rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center">
          <IoShieldCheckmarkSharp className="text-green-600 size-[20px]" />
        </span>
        <div className="flex flex-col items-start">
          <p className="text-gray-600 font-medium">Our clients rate us</p>
          <p className="text-gray-600 font-semibold">More than 100k reviews</p>
        </div>
      </motion.div>

      {/* Health monitoring card - optimized */}
      <motion.div
        className="w-80 h-auto z-10 absolute top-1/2 max-xl:hidden right-[5%] bg-white/10 rounded-2xl shadow-xl backdrop-blur-sm border border-white/30 items-center justify-center text-gray-800 font-semibold flex flex-col will-change-transform"
        transition={{ ...transition, delay: 0.3 }}
        variants={variants}
        initial="hidden"
        animate={initialState}
      >
        <div className="flex gap-4 pt-8 items-center justify-start">
          <span className="bg-gray-100 p-2 rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center">
            <GiWaterDrop className="text-blue-500/30 size-[20px]" />
          </span>
          <p className="text-gray-600 font-semibold">
            Monitor your heart&apos;s health
          </p>
        </div>

        {/* Optimized image with proper sizing and loading */}
        <Image
          src="/images/line-chart.png"
          alt="Health monitoring chart"
          width={320}
          height={200}
          className="w-full h-auto object-cover rounded-2xl hue-rotate-60"
          priority={false} // Not critical for LCP
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </motion.div>

      <div className="container mx-auto flex flex-col overflow-hidden">
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

        <motion.div
          className="flex flex-col justify-center items-center relative"
          initial="hidden"
          animate={initialState}
          transition={{ staggerChildren: 0.02 }} // Reduced stagger delay
        >
          {/* Main badge */}
          <motion.div
            variants={variants}
            transition={transition}
            className="bg-blue-200/10 border-2 border-white drop-shadow-xl rounded-xl backdrop-blur-sm p-2 gap-2 items-center inline-flex"
          >
            <span className="bg-white p-2 rounded-md w-[2.5rem] h-[2.5rem] flex items-center justify-center">
              <IoShieldCheckmarkSharp className="text-green-600 size-[20px]" />
            </span>
            <p className="text-gray-600 font-medium">
              Your Everyday Health Companion
            </p>
          </motion.div>

          {/* Main headline - optimized for LCP */}
          <div className="max-w-7xl px-4">
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.1] lg:leading-none font-black tracking-tight mb-6 text-main pt-8 font-urbanist">
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <motion.span
                    className="inline-block will-change-transform"
                    transition={{ ...transition, delay: index * 0.05 }}
                    variants={variants}
                  >
                    {word === "Analytics" ? (
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
              transition={{ ...transition, delay: 0.2 }}
              variants={variants}
            >
              At Finex, we incorporate the use of various analytical tools to
              help you make efficient health decisions.
            </motion.p>
          </div>

          {/* CTA Button - optimized */}
          <motion.div
            transition={{ ...transition, delay: 0.3 }}
            variants={variants}
          >
            <Button
              className="bg-[#EEF2FF] font-bold rounded-full text-neutral-600 hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-55% hover:to-gray-500 hover:text-white text-md p-6 md:text-lg md:p-8 shadow-lg transition-all duration-200 md:w-[15rem] hover:scale-105 cursor-pointer will-change-transform"
              variant="outline"
              onClick={handleExploreClick}
            >
              Explore More
            </Button>
          </motion.div>

          {/* Parameter showcase card */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 relative h-full w-full">
            <motion.div
              className="w-fit md:w-[30rem] z-10 absolute top-50 left-[50%] -translate-x-1/2 bg-white/40 rounded-3xl shadow-xl backdrop-blur-lg border border-white/50 flex items-center text-gray-800 font-semibold mx-auto will-change-transform"
              transition={{ ...transition, delay: 0.4 }}
              variants={variants}
            >
              <div className="flex flex-col p-4 space-x-16">
                <div className="flex gap-4 pb-4 items-center justify-start">
                  <span className="bg-gray-100 p-2 rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                    <CgPill className="text-blue-500/30 size-[20px]" />
                  </span>
                  <span className="bg-gray-100 p-2 rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                    <GiWaterDrop className="text-blue-500/30 size-[20px]" />
                  </span>
                  <p className="text-gray-600 font-semibold">
                    Variety of parameters
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-start">
                  {renderedHeroButtons}
                </div>
              </div>

              {/* Optimized doctor image */}
              <div className="absolute bottom-0 right-0 w-auto h-auto max-sm:hidden">
                <Image
                  src="/images/doctor.webp"
                  alt="Healthcare professional"
                  width={200}
                  height={300}
                  className="w-auto h-auto"
                  loading="lazy"
                  sizes="200px"
                />
              </div>
            </motion.div>

            <div className="blur-[2rem] h-16 w-16 bg-blue-500/20 absolute top-5 -right-[18%]" />
          </div>

          {/* Hero image section - Critical for LCP */}
          <div className="relative flex flex-col items-center justify-center mt-20 md:mt-30">
            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              viewport={{ once: true, margin: "-10%" }}
              className="size-[600px] rounded-full bg-blue-400/10 mx-auto flex flex-col items-center justify-center will-change-transform mask-b-from-50%"
            />

            {/* Hero image - Optimized for LCP */}
            <Image
              src="/images/hero-analysis-ai.png"
              alt="AI-powered healthcare analysis dashboard"
              width={500}
              height={400}
              className="w-[350px] lg:w-[500px] h-auto absolute inset-0 -top-20 md:-top-40 left-1/2 -translate-x-1/2 object-cover mask-b-from-70%"
              priority={true} // Critical for LCP
              loading="eager"
              sizes="(max-width: 768px) 350px, 500px"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
