"use client";

import { competitiveEdge } from "@/constants/company-page-data/company";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Animation configuration
const cardVariants = {
  hidden: {
    filter: "blur(10px)",
    transform: "translateY(20%)",
    opacity: 0,
  },
  visible: (i: number) => ({
    filter: "blur(0)",
    transform: "translateY(0)",
    opacity: 1,
    transition: {
      delay: i * 0.1, // stagger effect based on index
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function CompetitiveEdgeGrid() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-6 gap-6">
      {competitiveEdge.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className={`backdrop-blur-md bg-main/10 relative rounded-[2rem] shadow-xl border border-white/50 text-white p-6 md:p-10 flex flex-col justify-between transition-all duration-300 h-[400px] overflow-hidden ${item.className}`}
        >
          <div className="flex items-center justify-start gap-3">
            <Image
              src={item.icon}
              alt={item.title}
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover mask-b-from-50% mask-b-to-75%"
              unoptimized
            />
          </div>
          <motion.div
            className="flex flex-col justify-center items-center mt-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.1 + 0.2,
                  duration: 0.6,
                },
              },
            }}
          >
            <h3 className="text-main/80 text-center text-xl font-bold drop-shadow-2xl">
              {item.title}
            </h3>

            <p className="text-base text-center text-main/80">
              {item.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
