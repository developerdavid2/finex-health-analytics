"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { motion, useInView } from "framer-motion";
import { useSectionScroll } from "@/hooks/use-section-scroll";
import AboutGrid from "@/components/sections/home/about-grid";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Animation configuration - memoized to prevent recreation
const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(5px)", transform: "translateY(10%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

// Memoized stagger container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function AboutSection() {
  const router = useRouter();
  const { ref } = useSectionScroll("company");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, {
    once: true,
    margin: "-1%", // Trigger animation slightly before fully in view
    amount: 0.1, // Trigger when 30% is visible
  });

  const [initialState, setInitialState] = useState("hidden");
  const [hasAnimated, setHasAnimated] = useState(false);

  // Memoize the about text content
  const aboutContent = useMemo(
    () => ({
      title: "About Us",
      description:
        "At Finex, we incorporate the use of various analytical tools to read, compile, extract, and visualize clients historic medical report, for making efficient health decisions.",
    }),
    [],
  );

  // Optimize the animation trigger with requestAnimationFrame
  useEffect(() => {
    if (isInView && !hasAnimated) {
      const animationFrame = requestAnimationFrame(() => {
        setInitialState("visible");
        setHasAnimated(true);
      });

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, hasAnimated]);

  // Memoize the button click handler
  const handleLearnMoreClick = useCallback(() => {
    router.push("/company");
  }, [router]);

  // Memoize the button component to prevent unnecessary re-renders
  const learnMoreButton = useMemo(
    () => (
      <Button
        className="text-md p-6 md:text-lg md:p-8 bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 font-bold rounded-full text-white hover:text-white text-lg hover:drop-shadow-2xl transition-all duration-300 w-[15rem] hover:scale-110 cursor-pointer will-change-transform"
        variant="outline"
        onClick={handleLearnMoreClick}
      >
        Learn More
      </Button>
    ),
    [handleLearnMoreClick],
  );

  return (
    <section
      id="about-us"
      ref={ref}
      className="flex justify-center items-center bg-indigo-50 relative pt-[5rem] lg:pt-[10rem] px-4"
    >
      {/* Optimized background elements with GPU acceleration */}
      <div
        className="blur-[12rem] h-52 w-52 bg-indigo-200/50 absolute top-[20%] right-[5%] will-change-transform"
        style={{ transform: "translateZ(0)" }}
      />
      <div
        className="blur-[12rem] h-52 w-52 bg-purple-400/30 absolute bottom-[20%] left-[5%] will-change-transform"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Smaller decorative elements */}
      <div className="blur-[2rem] h-16 w-16 bg-blue-500/20 absolute top-10 left-[10%]" />
      <div className="blur-[2rem] h-16 w-16 bg-indigo-500/20 absolute bottom-10 right-[10%]" />

      <div
        ref={animationRef}
        className="container mx-auto flex flex-col max-w-sm md:max-w-xl lg:max-w-5xl xl:max-w-7xl"
      >
        <motion.div
          className="container mb-10 max-w-6xl will-change-transform"
          initial="hidden"
          animate={initialState}
          variants={containerVariants}
        >
          {/* Optimized title with staggered animation */}
          <motion.h2
            className="text-start text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist will-change-transform"
            variants={variants}
            transition={transition}
          >
            {aboutContent.title}
          </motion.h2>

          {/* Optimized description */}
          <motion.p
            className="text-gray-600 text-lg font-medium mb-8 max-w-2xl"
            variants={variants}
            transition={{ ...transition, delay: 0.1 }}
          >
            {aboutContent.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-10 will-change-transform"
          initial="hidden"
          animate={initialState}
          variants={variants}
          transition={{ ...transition, delay: 0.2 }}
        >
          {/* AboutGrid with optimized rendering */}
          <AboutGrid />

          {/* Mobile button with optimized rendering */}
          <motion.div
            className="flex lg:hidden justify-center items-center lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4 mt-10"
            variants={variants}
            transition={{ ...transition, delay: 0.4 }}
          >
            {learnMoreButton}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
