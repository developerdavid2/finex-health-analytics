"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLink, FaResearchgate } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function ResearchSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="research"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#EEF2FF]"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-sm md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
        <div ref={animationRef} className="mb-8 md:mb-12">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-main font-urbanist text-center"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Analytical Insights
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10 text-center"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.3 }}
          >
            A comparative look into healthcare spending patterns across the U.S.
            and Canada, uncovering key differences, efficiencies, and economic
            implications for future health policy decisions.
          </motion.p>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
            {/* Left Panel - Research Links */}
            <motion.div
              className="bg-white/10 rounded-3xl shadow-2xl backdrop-blur-md border border-white/50 flex flex-col p-6 md:p-8 lg:p-10 h-full"
              transition={{ ...transition, delay: 0.6 }}
              variants={variants}
              initial="hidden"
              animate={animationState}
            >
              <div className="flex flex-col items-start gap-3 mb-8">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <FaResearchgate className="h-6 w-6 text-main" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-main">
                  Research
                </h2>
              </div>

              <div className="flex flex-col items-start gap-6 w-full">
                <div className="flex gap-4 items-start w-full">
                  <div className="flex-shrink-0 pt-1">
                    <FaLink className="text-green-500 size-5" />
                  </div>
                  <Link
                    className="underline text-main hover:text-blue-800/50 text-start"
                    href="https://digitalcommons.usu.edu/gradreports/232/"
                  >
                    Comparative analysis of healthcare expenditures in the
                    United States and Canada.
                  </Link>
                </div>

                <div className="flex gap-4 items-start w-full">
                  <div className="flex-shrink-0 pt-1">
                    <FaLink className="text-green-500 size-5" />
                  </div>
                  <Link
                    className="underline text-main hover:text-blue-800/50 text-start break-all"
                    href="https://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=1216&context=gradreports&httpsredir=1&referer="
                  >
                    https://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=1216&context=gradreports&httpsredir=1&referer=
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Panel - Image */}
            <motion.div
              className="flex items-center justify-center h-full"
              variants={variants}
              initial="hidden"
              animate={animationState}
              transition={{ ...transition, delay: 0.8 }}
            >
              <div className="relative w-full h-full min-h-[300px] md:min-h-[350px] lg:min-h-[400px] rounded-xl overflow-hidden">
                <Image
                  fill
                  src="/images/analytical-insight.gif"
                  alt="Analytical Insight"
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
