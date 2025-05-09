"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollIcon } from "lucide-react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { Globe } from "@/components/ui/globe";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};
export default function MissionVisionSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  return (
    <section
      id="mission-vision"
      className="w-full py-[10rem] bg-pink-50/20 relative"
    >
      <div className="h-56 w-56 bg-pink-400/10 rounded-full absolute bottom-52 left-[0%]" />
      <div className="container mx-auto flex flex-col max-w-sm md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
        <div ref={animationRef} className="text-center mb-8 md:mb-12">
          <motion.div variants={variants} transition={transition}>
            <div className="bg-blue-200/10 border-2 border-white drop-shadow-2xl rounded-xl border-transparent animate-border text-base capitalize inline-flex justify-center whitespace-nowrap font-medium text-gray-700 backdrop-blur-[5rem] p-2 gap-2 items-center mb-10">
              <span className="bg-white p-2 rounded-md w-[2.5rem] h-[2.5rem] flex items-center justify-center ">
                <ScrollIcon className="text-green-600 size-[20px]" />
              </span>
              <p className="text-gray-600 uppercase font-semibold">
                Mission & Vision
              </p>
            </div>
          </motion.div>
          <div className="flex flex-col items-start justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-8 h-[500px]">
              {/*Mission Statement*/}
              <motion.div
                className="bg-white/10 rounded-3xl shadow-2xl backdrop-blur-md border border-white/50 flex xl:items-start text-gray-800 font-semibold flex-col space-y-10 justify-center p-10"
                transition={{ ...transition, delay: 0.6 }}
                variants={variants}
              >
                <div className="flex flex-col items-start gap-3 mt-3">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <FaBullseye className="h-6 w-6 text-main" />
                  </div>
                  <h2 className="text-4xl font-bold text-main">Our Mission</h2>
                </div>

                <p className="text-main text-lg text-start font-medium leading-relaxed">
                  To transform global healthcare systems through cutting-edge
                  analytics, informatics, and data-driven policy solutions that
                  enhance patient outcomes, drive efficiency, and support
                  financial sustainability.
                </p>
              </motion.div>

              {/*Middle Column*/}
              <div className="relative flex flex-col items-center justify-center ">
                <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 mask-t-from-50%">
                  <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    Globe
                  </span>
                  <Globe className="top-32" />
                  <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
                </div>
              </div>

              {/*Vision Statement*/}
              <motion.div
                className="bg-white/10 rounded-3xl shadow-2xl backdrop-blur-md border border-white/50 flex xl:items-start text-gray-800 font-semibold flex-col space-y-10 justify-center p-10"
                transition={{ ...transition, delay: 0.6 }}
                variants={variants}
              >
                <div className="flex flex-col items-start gap-3 mt-3">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <FaLightbulb className="h-6 w-6 text-main" />
                  </div>
                  <h2 className="text-4xl font-bold text-main">Our Vision</h2>
                </div>

                <p className="text-main text-lg text-start font-medium leading-relaxed">
                  To transform global healthcare systems through cutting-edge
                  analytics, informatics, and data-driven policy solutions that
                  enhance patient outcomes, drive efficiency, and support
                  financial sustainability.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
