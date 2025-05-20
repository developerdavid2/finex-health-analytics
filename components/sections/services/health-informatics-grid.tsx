import { healthInformatics } from "@/constants/services-page-data/services";
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

export default function HealthInformaticsGrid() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
      {healthInformatics.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className={`backdrop-blur-md bg-main/10 relative rounded-[2rem] shadow-xl border border-white/50 text-white p-6 md:p-10 flex flex-col justify-between transition-all duration-300 h-[400px] overflow-hidden ${item.className}`}
        >
          {/* Image container with radial mask */}
          <div className="absolute inset-0 w-full h-full">
            {/*Mask background*/}
            <div className="absolute inset-0 w-full h-full bg-[#131C45]/90 mask-t-from-20%"></div>
            <div className="absolute inset-0 w-full h-[20%] bg-[#131C45]/90 mask-b-from-20%"></div>
            <div className="absolute inset-0 w-[20%] h-full bg-[#131C45]/90 mask-r-from-20%"></div>
            <div className="absolute right-0 w-[20%] h-full bg-[#131C45]/90 mask-l-from-20%"></div>

            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>

          <div className="flex items-center justify-start gap-3 relative z-10">
            {/* Content goes here */}
          </div>

          <motion.div
            className="flex flex-col justify-center items-center mt-auto relative z-10"
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
            <h3 className="text-white text-center text-xl md:text-2xl font-bold drop-shadow-2xl">
              {item.title}
            </h3>

            <p className="text-base text-center text-white">
              {item.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
