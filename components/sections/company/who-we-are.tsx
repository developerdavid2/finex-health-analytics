"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FcBusiness } from "react-icons/fc";

// Animation configuration - memoized to prevent recreation
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function WhoWeAreSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, {
    once: true,
    margin: "-1%", // Trigger animation slightly before fully in view
    amount: 0.1, // Trigger when 10% is visible
  });
  const [initialState, setInitialState] = useState("hidden");

  useEffect(() => {
    if (isInView) {
      setInitialState("visible");
    }
  }, [isInView]);
  return (
    <section
      id="who-we-are"
      className="flex justify-center items-center bg-indigo-50 relative pt-[5rem] lg:pt-[10rem] pb-10"
    >
      <div ref={animationRef} className="container relative px-4 ">
        <div className="flex flex-col xl:flex-row gap-10 max-w-6xl mx-auto">
          {/* Finex Mobile App MockUp */}
          <div className="xl:w-[40%] xl:flex-none mb-10 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-6 items-stretch w-full min-h-full">
              <motion.div className="relative flex flex-col items-center justify-center">
                <div className="relative flex size-full max-w-lg items-start justify-center overflow-hidden rounded-xl border bg-main/5 px-40 pb-40 pt-8 md:pb-60 mask-b-from-60% mask-b-to-95%">
                  <div className="h-[100px] md:h-[200px]">
                    <Image
                      src="/images/logo-about.png"
                      alt="Logo About"
                      width={300}
                      height={300}
                      loading="lazy"
                      className="opacity-60 hover:opacity-100 transition duration-300 w-[15rem] md:w-[20rem] h-auto absolute inset-0 top-10 left-1/2 -translate-x-1/2 object-cover mask-b-from-60%"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/*Who we are*/}
          <motion.div
            className="container flex flex-col mx-auto w-fit xl:w-[60%] xl:flex-none h-full gap-6 max-w-xl md:max-w-2xl items-center xl:items-start"
            initial="hidden"
            animate={initialState}
            variants={variants}
            transition={transition}
          >
            <div className="bg-blue-200/10 border-2 border-white drop-shadow-2xl rounded-xl border-transparent animate-border text-base capitalize inline-flex justify-center whitespace-nowrap font-medium text-gray-700 backdrop-blur-[5rem] p-2 gap-2 items-center w-fit">
              <span className="bg-white p-2 rounded-md w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                <FcBusiness className="text-green-600 size-[20px]" />
              </span>
              <p className="text-gray-600 uppercase font-semibold">OVERVIEW</p>
            </div>
            <h2 className="max-xl:text-center text-3xl  xl:text-5xl font-bold text-main font-urbanist font-urban">
              Who we are
            </h2>

            <p className="text-gray-800 text-center xl:text-start text-base md:text-lg leading-loose">
              Finex Healthcare Analytics and Informatics Consult LLC is a Los
              Angeles-based consulting firm specializing in advanced data
              analytics and informatics solutions for healthcare providers and
              related organizations. We are dedicated to transforming the
              healthcare sector by utilizing data-driven intelligence,
              AI/ML-powered analytics, cybersecurity, e-payment solutions and
              digital innovations to enhance decision-making, operational
              efficiency, and patient outcomes.
            </p>

            <div className="grid gap-6 mt-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
