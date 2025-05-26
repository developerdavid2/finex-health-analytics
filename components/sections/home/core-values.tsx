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
import { coreValues } from "@/constants/homepage-data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Optimized animation configuration
const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(3px)", transform: "translateY(8%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

// Container variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Define a type for the layout prop
type LayoutType = "carousel" | "grid" | "row";

export default function CoreValuesSection() {
  const { ref } = useSectionScroll("core-values");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, {
    once: true,
    margin: "0px 0px -15% 0px",
    amount: 0.15,
  });

  const [initialState, setInitialState] = useState("hidden");

  // Memoize content to prevent re-renders
  const sectionContent = useMemo(
    () => ({
      title: "Our Core Values",
      description:
        "These principles guide every solution we deliver—from AI-driven insights to on-the-ground wellness initiatives.",
    }),
    [],
  );

  // Immediate animation trigger
  useEffect(() => {
    if (isInView) {
      setInitialState("visible");
    }
  }, [isInView]);

  // Memoized card classes to prevent recreation
  const cardClasses = useMemo(
    () => ({
      carousel: "h-full",
      grid: "h-full",
      row: "h-full",
    }),
    [],
  );

  // Memoized Core Value Card Component
  const CoreValueCard = useCallback(
    ({
      value,
      layout,
    }: {
      value: (typeof coreValues)[0];
      index: number;
      layout: LayoutType;
    }) => (
      <motion.div
        variants={variants}
        className={`relative bg-white/10 rounded-2xl md:shadow-2xl backdrop-blur-md border md:border-white/30 border-neutral-600/30 items-center justify-center text-center text-gray-800 font-semibold flex p-6 sm:p-8 md:p-10 flex-col ${cardClasses[layout]} will-change-transform`}
      >
        <div className="mb-6 text-indigo-600 text-2xl will-change-transform">
          {value.icon}
        </div>
        <h4 className="text-xl md:text-2xl font-semibold text-main mb-2 capitalize transition-all duration-300">
          {value.title}
        </h4>
        <p className="text-sm md:text-md font-normal text-gray-500 transition-all duration-300 leading-5">
          {value.description}
        </p>
      </motion.div>
    ),
    [cardClasses],
  );

  // Memoized layout components
  const CarouselLayout = useMemo(
    () => (
      <div className="md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {coreValues.map((value, index) => (
              <CarouselItem
                key={`carousel-${value.title}-${index}`}
                className="p-1"
              >
                <Card className="border-0 bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <CoreValueCard
                      value={value}
                      index={index}
                      layout="carousel"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="static mr-2 transform-none" />
            <CarouselNext className="static ml-2 transform-none" />
          </div>
        </Carousel>
      </div>
    ),
    [CoreValueCard],
  );

  const GridLayout = useMemo(
    () => (
      <motion.div
        className="hidden md:grid xl:hidden grid-cols-2 gap-8 px-8"
        variants={containerVariants}
        initial="hidden"
        animate={initialState}
      >
        {coreValues.map((value, index) => (
          <CoreValueCard
            key={`grid-${value.title}-${index}`}
            value={value}
            index={index}
            layout="grid"
          />
        ))}
      </motion.div>
    ),
    [CoreValueCard, initialState],
  );

  const RowLayout = useMemo(
    () => (
      <motion.div
        className="hidden xl:grid xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={initialState}
      >
        {coreValues.map((value, index) => (
          <CoreValueCard
            key={`row-${value.title}-${index}`}
            value={value}
            index={index}
            layout="row"
          />
        ))}
      </motion.div>
    ),
    [CoreValueCard, initialState],
  );

  return (
    <section
      ref={ref}
      className="w-full pt-[5rem] lg:pt-[10rem] bg-[#EEF2FF] relative"
    >
      {/* Optimized background elements */}
      <div
        className="blur-[8rem] h-48 w-48 bg-indigo-200/30 absolute top-[10%] right-[3%] will-change-transform"
        style={{ transform: "translateZ(0)" }}
      />
      <div
        className="blur-[8rem] h-48 w-48 bg-purple-300/25 absolute bottom-[10%] left-[3%] will-change-transform"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Decorative elements */}
      <div className="blur-[1.5rem] h-12 w-12 bg-blue-400/20 absolute top-16 left-[20%]" />
      <div className="blur-[1.5rem] h-12 w-12 bg-indigo-400/20 absolute bottom-16 right-[20%]" />

      <div className="container mx-auto flex flex-col max-w-sm md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
        <motion.div
          ref={animationRef}
          className="max-w-4xl mx-auto text-center mb-8 md:mb-12"
          initial="hidden"
          animate={initialState}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist will-change-transform"
            variants={variants}
          >
            {sectionContent.title}
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto px-4"
            variants={variants}
          >
            {sectionContent.description}
          </motion.p>
        </motion.div>

        {/* Responsive Layouts */}
        <motion.div
          initial="hidden"
          animate={initialState}
          variants={variants}
          transition={{ ...transition, delay: 0.2 }}
        >
          {CarouselLayout}
          {GridLayout}
          {RowLayout}
        </motion.div>
      </div>
    </section>
  );
}
