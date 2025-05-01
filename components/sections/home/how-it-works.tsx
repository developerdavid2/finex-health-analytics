"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import StackedCards from "@/components/sections/home/work-flow-card";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function HowItWorksSection() {
  const { ref } = useSectionScroll("how-it-works");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });
  const [initialState, setInitialState] = useState("hidden");

  useEffect(() => {
    if (isInView) {
      setInitialState("visible");
    }
  }, [isInView]);

  const stackedCardsAnimationProps = {
    initial: variants.hidden,
    animate: initialState,
    variants: variants,
    transition: { ...transition, delay: 0.3 },
  };

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="flex justify-center items-center bg-indigo-50 relative pb-[10rem]"
    >
      <div ref={animationRef} className="flex flex-col container max-w-7xl">
        <motion.div
          className="container max-w-6xl mb-10"
          initial="hidden"
          animate={initialState}
          variants={variants}
          transition={transition}
        >
          <h2 className="text-start text-7xl max-w-6xl font-bold mb-4 text-zinc-700 font-urbanist font-urban">
            Finex Process Work Flow
          </h2>
          <p className="text-gray-600 text-lg font-medium mb-8 max-w-3xl">
            At Finex, we incorporate the use of various analytical tools to
            read, compile, extract, and visualize clients historic medical
            report, for making efficient health decisions.
          </p>
        </motion.div>

        <div className="mb-10 mx-auto flex flex-col justify-center items-center">
          <StackedCards animationProps={stackedCardsAnimationProps} />
        </div>
      </div>
    </section>
  );
}
