"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { whyFinexIsBetter } from "@/constants/company-page-data/company";
import { AuroraText } from "@/components/ui/aurora-text";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function WhyFinexBetterSection() {
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
      id="why-finex-better"
      className="flex justify-center items-center bg-indigo-50 relative pt-16"
    >
      <div ref={animationRef} className="container relative px-4 ">
        <div className="flex flex-col xl:flex-row gap-10 max-w-6xl mx-auto">
          {/* Finex Mobile App MockUp */}
          <div className="xl:w-[40%] xl:flex-none mb-10 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-6 items-stretch w-full min-h-full">
              <motion.div className="relative flex flex-col items-center justify-center">
                <div className="relative flex size-full max-w-lg items-start justify-center overflow-hidden rounded-xl border bg-main/5 px-40 pb-40 pt-8 md:pb-60 mask-b-from-60% mask-b-to-95%">
                  <div className="h-[300px]">
                    <motion.img
                      src="/images/mobile.png"
                      alt="Hero image"
                      width={400}
                      height={400}
                      className="w-full h-auto absolute inset-0 top-0 left-1/2 -translate-x-1/2 object-cover mask-b-from-60% mask-b-to-95%"
                      transition={{ ...transition, delay: 0.6 }}
                      variants={variants}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/*Why-Finex-Is-Better Cards*/}
          <motion.div
            className="container mb-10 flex flex-col mx-auto w-fit xl:w-[60%] xl:flex-none h-full"
            initial="hidden"
            animate={initialState}
            variants={variants}
            transition={transition}
          >
            <h2 className="max-xl:text-center text-3xl  xl:text-5xl font-bold mb-4 text-main font-urbanist font-urban">
              Why Finex is <AuroraText>Better</AuroraText>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {whyFinexIsBetter.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  className="relative flex flex-col items-start gap-4 p-6 rounded-xl border border-white/30 text-main hover:text-indigo-600 py-2 px-4 transition-all duration-300 cursor-pointer bg-indigo-50 shadow-[5px_5px_15px_rgba(136,146,176,0.15),-5px_-5px_15px_rgba(255,255,255,0.6)]"
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-main/10 p-3 rounded-xl shadow-md">
                      <item.icon className="h-6 w-6 text-main" />
                    </div>
                    <h2 className="text-xl font-bold text-main">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
