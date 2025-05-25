"use client";

import React, { useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import GlassSearchInput from "@/components/ui/glass-search-input";
import { trendsMainData } from "@/constants/trends-page-data/trends";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function TrendsMainSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });
  const animationState = isInView ? "visible" : "hidden";

  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrends = useMemo(() => {
    return trendsMainData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  return (
    <section
      id="trends-main"
      className="w-full pb-16 md:pb-24 lg:pb-32 bg-[#EEF2FF] relative"
    >
      {/* Background glow */}

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl relative">
        <div ref={animationRef} className="mb-8 md:mb-12">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4 text-main font-urbanist font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            All trends
          </motion.h2>

          {/* Search Bar */}
          <GlassSearchInput
            placeholder="Search trends..."
            onChange={setSearchQuery}
            className="mx-auto mb-12"
          />

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTrends.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={cn(
                    "group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer",
                    // Responsive heights that ensure content fits
                    "min-h-[500px] h-auto",
                    "sm:min-h-[520px]",
                    "md:min-h-[480px]",
                    "lg:min-h-[520px]",
                    "xl:min-h-[550px]",
                    "backdrop-blur-md bg-gradient-to-br from-[#EEF2FF]/10 to-white/10",
                    "border border-slate-700/20 hover:border-slate-600/10",
                    "shadow-xl hover:shadow-2xl hover:shadow-blue-500/10",
                    item.className,
                  )}
                >
                  {/* Content */}
                  <div className="relative flex flex-col h-full p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                    {/* Header Section */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 flex-shrink-0">
                      <div className="bg-[#EEF2FF] rounded-full p-4 md:p-5 lg:p-6 shadow-md flex-shrink-0">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-main" />
                      </div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1 + 0.2,
                        }}
                        className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-transparent bg-gradient-to-b from-black to-gray-300/80 bg-clip-text leading-tight"
                      >
                        {item.title}
                      </motion.h3>
                    </div>

                    {/* Image Section - Flexible height */}
                    <div className="flex-1 w-full rounded-2xl mb-4 md:mb-6 min-h-[200px] md:min-h-[220px] lg:min-h-[240px] xl:min-h-[260px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300 rounded-2xl w-full h-full"
                        unoptimized
                      />
                    </div>

                    {/* Description Section */}
                    <motion.div className="flex-shrink-0 mb-4 md:mb-6">
                      <p className="text-main text-sm md:text-base lg:text-lg leading-relaxed line-clamp-3 md:line-clamp-none">
                        {item.description}
                      </p>
                    </motion.div>

                    {/* CTA Button Section */}
                    <div className="mt-auto flex-shrink-0">
                      <Button
                        variant="ghost"
                        asChild
                        size="sm"
                        className="pointer-events-auto border-0 backdrop-blur-sm bg-[#EEF2FF] font-bold rounded-2xl text-neutral-600 shadow-xl hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-55% hover:to-gray-500 hover:text-white transition duration-300 hover:drop-shadow-2xl hover:scale-110 cursor-pointer w-full sm:w-auto min-w-[200px] text-sm md:text-base lg:text-lg p-4 md:p-5 lg:p-6"
                      >
                        <a
                          href={item.href}
                          className="flex items-center justify-center gap-2"
                        >
                          <span className="truncate">{item.cta}</span>
                          <ArrowRightIcon className="h-4 w-4 flex-shrink-0" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
