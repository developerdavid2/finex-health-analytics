"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import NeedsStackedCards from "@/components/sections/customers/needs-stacked-cards";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function CustomerNeedsSection() {
  const { ref } = useSectionScroll("needs");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });
  const [initialState, setInitialState] = useState<"hidden" | "visible">(
    "hidden",
  );

  useEffect(() => {
    if (isInView) {
      setInitialState("visible");
    }
  }, [isInView]);

  const stackedCardsAnimationProps = {
    initial: "hidden" as const,
    animate: initialState as "hidden" | "visible",
    variants: variants,
    transition: { ...transition, delay: 0.3 },
  };

  return (
    <section
      id="needs"
      ref={ref}
      className="flex justify-center items-center bg-indigo-50 relative"
    >
      <div
        ref={animationRef}
        className="flex flex-col container lg:pt-[10rem] max-w-7xl"
      >
        <motion.div
          className="max-w-6xl lg:mb-10 px-[3rem]"
          initial="hidden"
          animate={initialState}
          variants={variants}
          transition={transition}
        >
          <h2 className="text-center lg:text-start text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist font-urban">
            Customers Needs
          </h2>
          <p className="text-center lg:text-start text-gray-600 text-lg font-medium">
            We address critical operational and financial gaps that impact care
            delivery and sustainability.
          </p>
        </motion.div>

        <div className="mb-10 mx-auto flex flex-col justify-center items-center">
          <NeedsStackedCards animationProps={stackedCardsAnimationProps} />
        </div>
      </div>
    </section>
  );
}
