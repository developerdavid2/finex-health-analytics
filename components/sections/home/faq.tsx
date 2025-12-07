"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { motion, useInView } from "framer-motion";
import { Ripple } from "@/components/ui/ripple";
import FaqItem from "@/components/sections/home/faq-item";
import { faqData } from "@/constants/homepage-data";
import { Button } from "@/components/ui/button";

// Animation configuration - memoized to prevent recreation
const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }; // Reduced duration
const variants = {
  hidden: { filter: "blur(5px)", transform: "translateY(10%)", opacity: 0 }, // Reduced blur
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

// Memoized stagger container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
export default function FAQSection() {
  const { ref } = useSectionScroll("faq");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, {
    once: true,
    margin: "-1%",
    amount: 0.1,
  });

  const [initialState, setInitialState] = useState("hidden");
  const [hasAnimated, setHasAnimated] = useState(false);

  // Memoize content to prevent unnecessary re-renders
  const content = useMemo(
    () => ({
      title: "Frequently Asked Questions",
      description:
        "Get quick answers to common questions about our healthcare consulting, analytics, and digital transformation solutions. Whether you're a hospital, insurer, or government agency, we're here to guide your journey to smarter healthcare.",
      buttonText: "Get in touch",
    }),
    []
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

  // Memoized button click handler
  const handleContactClick = useCallback(() => {
    window.open("/contact", "_self");
  }, []);

  // Memoized contact button
  const contactButton = useMemo(
    () => (
      <Button
        className="bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 font-bold rounded-full text-white hover:text-white text-md p-6 md:text-xl md:p-8 hover:drop-shadow-2xl transition duration-300 w-[15rem] hover:scale-110 cursor-pointer will-change-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        variant="outline"
        onClick={handleContactClick}
        type="button"
      >
        {content.buttonText}
      </Button>
    ),
    [handleContactClick, content.buttonText]
  );

  // Memoized FAQ items

  // Fix for your FAQ list structure
  const faqItems = useMemo(
    () => (
      <ul className="space-y-4 list-none" role="list">
        {faqData.map((item, index) => (
          <li key={item.id}>
            <FaqItem
              id={item.id}
              question={item.question}
              answer={item.answer}
              index={index}
              initialState={initialState}
            />
          </li>
        ))}
      </ul>
    ),
    [initialState]
  );

  return (
    <section
      id="home-faq"
      ref={ref}
      className="flex justify-center items-center bg-indigo-50 relative pt-[5rem] lg:pt-[10rem]"
      aria-labelledby="faq-section-title"
    >
      <div
        ref={animationRef}
        className="container mx-auto flex flex-col max-w-sm md:max-w-xl lg:max-w-5xl xl:max-w-7xl"
      >
        {/* Background decoration with GPU acceleration */}
        <div
          className="absolute inset-0 h-[500px] mask-y-from-80% mask-y-to-90% opacity-60 w-full overflow-hidden will-change-transform"
          aria-hidden="true"
          style={{ transform: "translateZ(0)" }}
        >
          <Ripple />
        </div>

        <div className="flex flex-col xl:flex-row gap-10 justify-between">
          <motion.div
            className="container mb-10 flex flex-col items-center xl:items-start mx-auto will-change-transform"
            initial="hidden"
            animate={initialState}
            variants={containerVariants}
          >
            <motion.h2
              id="faq-section-title"
              className="max-xl:text-center text-3xl md:text-5xl xl:text-7xl font-bold mb-4 text-main font-urbanist font-urban will-change-transform"
              variants={variants}
              transition={transition}
            >
              {content.title}
            </motion.h2>
            <motion.p
              className="text-gray-600 lg:text-xl font-medium mb-8 px-4 max-xl:text-center"
              variants={variants}
              transition={{ ...transition, delay: 0.1 }}
            >
              {content.description}
            </motion.p>
            <motion.div
              variants={variants}
              transition={{ ...transition, delay: 0.2 }}
            >
              {contactButton}
            </motion.div>
          </motion.div>

          <div className="mb-10 flex flex-col justify-center items-center will-change-transform">
            <div
              className="flex flex-col gap-6 max-w-full items-stretch w-full"
              role="region"
              aria-labelledby="faq-section-title"
            >
              {faqItems}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
