"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { resourcesMenu } from "@/constants/resources-page-data/resourcesData";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function ResourcesMainSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="resources-main"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#EEF2FF] relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-main/30 rounded-full absolute top-1/2 right-[0%]"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl relative">
        <div ref={animationRef} className="mb-8 md:mb-12">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4 text-main font-urbanist font-bold pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Find our resources and research.
          </motion.h2>

          {/* Responsive Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-6 gap-6">
            {resourcesMenu.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <>
                  <motion.div
                    key={item.id}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={cn(
                      "group relative rounded-2xl overflow-hidden transition-all duration-300 h-[400px] cursor-pointer",
                      "backdrop-blur-md bg-gradient-to-br from-[#EEF2FF] to-stone-50/90",
                      "border border-slate-700/20 hover:border-slate-600/10",
                      "shadow-xl hover:shadow-2xl hover:shadow-blue-500/10",
                      item.className,
                    )}
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-30"
                        style={{
                          maskImage:
                            "radial-gradient(ellipse at center, black 30%, transparent 60%)",
                          WebkitMaskImage:
                            "radial-gradient(ellipse at center, black 30%, transparent 60%)",
                        }}
                        unoptimized
                      />
                      {/* Gradient Overlay */}
                      {/*<div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/30" />*/}
                    </div>

                    {/* Content Container */}
                    <div className="relative h-full flex flex-col p-6 md:p-8">
                      {/* Header Section - Title and Icon */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center bg-[#EEF2FF] rounded-full p-6 drop-shadow-xl drop-shadow-black/10">
                          <IconComponent className="w-6 h-6 text-main" />
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
                          className="text-transparent whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl xl:text-4xl font-semibold"
                        >
                          {item.title}
                        </motion.h3>
                      </div>

                      {/* Spacer to push description to bottom */}
                      <div className="flex-1 " />

                      {/* Description Section */}
                      <motion.div
                        className="space-y-4 lg:transform-gpu flex-col gap-1 pb-6 transition-all duration-300 lg:group-hover:-translate-y-10"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: index * 0.1 + 0.4,
                              duration: 0.6,
                            },
                          },
                        }}
                      >
                        <p className="text-main text-base lg:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                      {/* Hover CTA Button */}
                      <div
                        className={cn(
                          "hidden pointer-events-none absolute bottom-0 lg:flex w-full lg:translate-y-10 lg:transform-gpu flex-row items-center pb-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                        )}
                      >
                        <Button
                          variant="ghost"
                          asChild
                          size="sm"
                          className="pointer-events-auto bg-blue-600/90 hover:bg-blue-500 border-0 backdrop-blur-sm bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 font-bold rounded-full text-white hover:text-white text-lg p-6 hover:drop-shadow-2xl transition duration-300 w-[15rem] hover:scale-110 cursor-pointer"
                        >
                          <a
                            href={item.href}
                            className="flex items-center gap-2"
                          >
                            {item.cta}
                            <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-blue-100/5" />
                  </motion.div>

                  <div className="flex flex-col mx-auto items-center lg:hidden">
                    <Button
                      variant="ghost"
                      asChild
                      size="sm"
                      className="pointer-events-auto border-0 backdrop-blur-sm bg-[#EEF2FF] font-bold rounded-full text-neutral-600 shadow-xl hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-55% hover:to-gray-500 hover:text-white text-lg p-6 hover:drop-shadow-2xl transition duration-300 w-[15rem] hover:scale-110 cursor-pointer"
                    >
                      <a href={item.href} className="flex items-center gap-2">
                        {item.cta}
                        <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
                      </a>
                    </Button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
