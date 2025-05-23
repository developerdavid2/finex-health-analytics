"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { regionsData } from "@/constants/customers-page-data/customers";

// Card animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.4, // ⬅️ increase delay per card
      duration: 0.8, // ⬅️ smooth entrance
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const GeographicalGrid = () => {
  const [startCount, setStartCount] = useState(false);

  // Trigger count animation slightly after cards load
  useEffect(() => {
    const timeout = setTimeout(() => setStartCount(true), 400); // adjust delay to match max stagger
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
      {regionsData.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="relative flex flex-col items-start gap-4 p-6 rounded-xl border border-white/30 backdrop-blur-sm bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] z-10 transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3">
            <div className="bg-pink-300/10 p-3 rounded-xl shadow-md">
              {item.icon}
            </div>
            <h3 className="text-5xl font-bold text-main">
              {startCount && <CountUp end={item.titleStat} duration={2} />}
              {item.titleStat === 100 ? "%" : "+"}
            </h3>
          </div>
          <h4 className="text-2xl font-semibold text-main">
            {item.titleHeading}
          </h4>
          <p className="text-sm text-gray-700">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default GeographicalGrid;
