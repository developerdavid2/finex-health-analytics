"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Ripple } from "@/components/ui/ripple";
import FaqItem from "@/components/sections/home/faq-item";
import { faqData } from "@/constants/homepage-data";
import { Button } from "@/components/ui/button";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function FAQSection() {
  const { ref } = useSectionScroll("faq");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, margin: "-100px" });
  const [initialState, setInitialState] = useState("hidden");

  useEffect(() => {
    if (isInView) {
      setInitialState("visible");
    }
  }, [isInView]);
  return (
    <section
      id="faq"
      ref={ref}
      className="flex justify-center items-center bg-indigo-50 relative pb-[10rem] pt-16"
    >
      <div
        ref={animationRef}
        className="flex flex-col md:flex-row container gap-10 max-w-7xl mx-auto"
      >
        <div className="absolute inset-0 h-[500px] mask-y-from-80% mask-y-to-90% opacity-60 w-full overflow-hidden">
          <Ripple />
        </div>
        <motion.div
          className="container mb-10 md:w-[40%]"
          initial="hidden"
          animate={initialState}
          variants={variants}
          transition={transition}
        >
          <h2 className="text-start text-5xl md:text-7xl max-w-xl font-bold mb-4 text-zinc-700 font-urbanist">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg font-medium mb-8 max-w-3xl">
            Get quick answers to common questions about our healthcare
            consulting, analytics, and digital transformation solutions. Whether
            you&apos;re a hospital, insurer, or government agency, we're here to
            guide your journey to smarter healthcare.
          </p>
          <Button
            className="bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 font-bold rounded-full text-white hover:text-white text-lg p-8 hover:drop-shadow-2xl transition duration-300 w-[15rem] hover:scale-110 cursor-pointer"
            variant={"outline"}
          >
            Learn More
          </Button>
        </motion.div>

        <div className="mb-10 mx-auto flex flex-col justify-center items-center md:w-[60%]">
          <div className="flex flex-col gap-6 max-w-full items-stretch w-full">
            {faqData.map((item, index) => (
              <FaqItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                index={index}
                initialState={initialState}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
