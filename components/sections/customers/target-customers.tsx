"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { HelpingHand } from "lucide-react";
import { FaUsers } from "react-icons/fa";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};
// Container variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Text element variants
const textItemVariants = {
  hidden: { filter: "blur(8px)", y: 20, opacity: 0 },
  visible: {
    filter: "blur(0px)",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Card variants with custom delay
const cardVariants = {
  hidden: { filter: "blur(10px)", transform: "translateY(30px)", opacity: 0 },
  visible: (i: number) => ({
    filter: "blur(0px)",
    transform: "translateY(0px)",
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

// Icon container variants
const iconContainerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TargetCustomersSection() {
  const animationRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });
  const [animationState, setAnimationState] = useState<"hidden" | "visible">(
    "hidden",
  );

  // Set animation state based on view
  useEffect(() => {
    if (isInView) {
      setAnimationState("visible");
    }
  }, [isInView]);

  return (
    <section id="target" className="w-full pt-32 bg-pink-50/20 relative">
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-56 w-56 bg-pink-400/10 rounded-full absolute bottom-52 left-[0%]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-main/10 rounded-full absolute top-52 right-[0%]"
      />

      <div className="container mx-auto flex flex-col max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-7xl">
        <motion.div
          ref={animationRef}
          initial="hidden"
          animate={animationState}
          variants={containerVariants}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            variants={textItemVariants}
            className="flex justify-center mb-10"
          >
            <div className="bg-blue-200/10 border-2 border-white drop-shadow-2xl rounded-xl border-transparent animate-border text-base capitalize inline-flex justify-center whitespace-nowrap font-medium text-gray-700 backdrop-blur-[5rem] p-2 gap-2 items-center">
              <motion.span
                variants={iconContainerVariants}
                className="bg-white p-2 rounded-md w-[2.5rem] h-[2.5rem] flex items-center justify-center"
              >
                <HelpingHand className="text-green-600 size-[20px]" />
              </motion.span>
              <p className="text-gray-600 uppercase font-semibold">
                WHO WE SERVE
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col items-start justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-8 xl:h-[500px]">
              {/*Image */}
              <motion.div
                custom={1}
                variants={cardVariants}
                className="relative flex flex-col items-center justify-center"
              >
                <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-[#F2F2FE] px-40 pb-40 pt-8 md:pb-60 mask-t-from-50%">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 1, delay: 0.6 }}
                    className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl xl:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
                  >
                    Our People
                  </motion.span>

                  <div className="h-[100px] xl:h-full">
                    <motion.img
                      src="/images/customers.png"
                      alt="Customers"
                      width={400}
                      height={400}
                      className="w-full h-auto absolute inset-0 top-10 xl:top-0 left-1/2 -translate-x-1/2 object-cover mask-b-from-60% mask-b-to-95%"
                      transition={{ ...transition, delay: 0.6 }}
                      variants={variants}
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
                </div>
              </motion.div>

              {/* Text Statement */}
              <motion.div
                custom={2}
                variants={cardVariants}
                className="bg-white/10 rounded-3xl shadow-2xl backdrop-blur-md border border-white/50 flex xl:items-start text-gray-800 font-semibold flex-col space-y-10 justify-center p-10"
              >
                <motion.div
                  className="flex flex-col items-start gap-3 "
                  variants={textItemVariants}
                >
                  <motion.div
                    variants={iconContainerVariants}
                    className="bg-blue-100 p-3 rounded-xl"
                  >
                    <FaUsers className="h-6 w-6 text-main" />
                  </motion.div>
                  <h2 className="text-4xl font-bold text-main text-start mt-3">
                    Serving a Diverse Healthcare Ecosystem
                  </h2>
                </motion.div>

                <motion.p
                  variants={textItemVariants}
                  className="text-main text-lg text-start font-medium leading-relaxed"
                >
                  From hospitals and insurers to fintech and NGOs, we tailor
                  solutions for every player in healthcare delivery.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
