"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/ui/aurora-text";
import { useRouter } from "next/navigation";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function ContactCta({
  sectionId = "cta",
  heading = "Try Finex today",
  highlightWord = "Finex",
  description = "We are here to help you with any questions or concerns you may have.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  backgroundColor = "#EEF2FF",
  primaryBlurColor = "bg-blue-400/50",
  secondaryBlurColor = "bg-purple-500/50",
}) {
  const { ref } = useSectionScroll(sectionId);
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });
  const router = useRouter();

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  // Extract parts of the heading
  const headingParts = heading.split(highlightWord);
  const beforeHighlight = headingParts[0];
  const afterHighlight = headingParts.length > 1 ? headingParts[1] : "";

  return (
    <section
      ref={ref}
      className="w-full py-8 md:py-10 "
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-4 relative">
        <div
          className={`blur-[12rem] h-52 w-52 ${primaryBlurColor} absolute top-[20%] right-[5%]`}
        />
        <div
          className={`blur-[12rem] h-52 w-52 ${secondaryBlurColor} absolute top-[60%] left-[5%]`}
        />

        <div
          ref={animationRef}
          className="max-w-7xl mx-auto text-center mb-12 relative"
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-neutral-700 font-bold mb-4"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            {beforeHighlight}
            <AuroraText>{highlightWord}</AuroraText>
            {afterHighlight}
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 mb-10"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.3 }}
          >
            {description}
          </motion.p>

          <motion.div transition={transition} variants={variants}>
            <Button
              className="bg-[#EEF2FF] font-bold rounded-full text-neutral-600 hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-55% hover:to-gray-500 hover:text-white text-lg p-8 drop-shadow-xl drop-shadow-blue-50 shadow-xl transition duration-300 w-[15rem] hover:scale-110 cursor-pointer"
              variant={"outline"}
              onClick={() => router.push(buttonLink)}
            >
              {buttonText}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
