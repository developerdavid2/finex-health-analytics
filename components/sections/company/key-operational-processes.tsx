"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processes } from "@/constants/company-page-data/company";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

// Type definitions
interface Process {
  id?: number | string;
  title?: string;
  content?: string;
  icon?: React.ReactNode;
}

interface ProcessItemProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  id: number | string;
  index: number;
  activeItem: number | string | null;
  setActiveItem: (id: number | string | null) => void;
  initialState: "hidden" | "visible";
}

// Animation configs
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const ProcessItem: React.FC<ProcessItemProps> = ({
  title,
  content,
  icon,
  id,
  index,
  activeItem,
  setActiveItem,
  initialState,
}) => {
  const isOpen = activeItem === id;
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveItem(isOpen ? null : id);
  };

  return (
    <motion.div
      className={clsx(
        "py-2 px-4 rounded-xl transition-all duration-300 cursor-pointer h-fit",
        isOpen
          ? "bg-indigo-50 shadow-inner"
          : "bg-indigo-50 shadow-[5px_5px_15px_rgba(136,146,176,0.15),-5px_-5px_15px_rgba(255,255,255,0.6)]",
      )}
      onClick={toggleAccordion}
      aria-expanded={isOpen}
      aria-controls={`process-item-${id}`}
      initial="hidden"
      animate={initialState}
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3 + index * 0.1,
      }}
    >
      <h5>
        <button
          className={clsx(
            "text-left text-[20px] font-semibold flex items-center justify-between w-full py-3 px-4 rounded-md transition-all duration-300 cursor-pointer",
            isOpen ? "text-pink-700" : "text-main hover:text-pink-400/60",
          )}
        >
          <div className="flex items-center">
            <div
              className={clsx(
                "mr-4 p-3 flex items-center justify-center rounded-full transition-all duration-300",
                isOpen
                  ? "bg-indigo-100 shadow-inner text-pink-700"
                  : "bg-indigo-50 shadow-[2px_2px_5px_rgba(136,146,176,0.2),-2px_-2px_5px_rgba(255,255,255,0.7)] text-main",
              )}
            >
              {icon}
            </div>
            <span>{title}</span>
          </div>
          <div
            className={clsx(
              "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
              isOpen
                ? "bg-indigo-100 shadow-inner text-pink-700"
                : "bg-indigo-50 shadow-[2px_2px_5px_rgba(136,146,176,0.2),-2px_-2px_5px_rgba(255,255,255,0.7)] text-main hover:text-pink-600",
            )}
          >
            <svg
              className={`shrink-0 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`origin-center ${isOpen ? "fill-indigo-700" : "fill-neutral-700"}`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`origin-center rotate-90 ${
                  isOpen ? "opacity-0" : "opacity-100 fill-neutral-700"
                }`}
              />
            </svg>
          </div>
        </button>
      </h5>
      <div
        ref={contentRef}
        id={`process-item-${id}`}
        role="region"
        aria-labelledby={`process-title-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        // This is the key fix - removed position changes that cause layout shifts
      >
        <div className="px-4 py-3 rounded-b-md flex flex-col items-start">
          <p className="leading-relaxed mb-6 text-neutral-600 text-start">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function KeyOperationsSection() {
  const animationRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });
  const [initialState, setInitialState] = useState<"hidden" | "visible">(
    "hidden",
  );
  const [showGrid, setShowGrid] = useState(false);
  const [activeItem, setActiveItem] = useState<number | string | null>(null);

  useEffect(() => {
    if (isInView) {
      setInitialState("visible");
      const timeout = setTimeout(() => {
        setShowGrid(true);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  const processItems = (processes as Process[]).map((process, index) => {
    return {
      id: process.id ?? index,
      title: process.title ?? `Process ${index + 1}`,
      content: process.content ?? "",
      icon: process.icon ?? <div className="w-6 h-6" />,
      index,
    };
  });

  return (
    <section
      id="operations"
      className="flex justify-center items-center bg-indigo-50 relative pb-[10rem] pt-16"
    >
      <div className="absolute bottom-1/4 right-1/3 size-[200px] rounded-full bg-red-400 filter blur-[80px] opacity-20"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-main/30 rounded-full absolute top-1/2 left-[0%]"
      />

      {/* Animated Content */}
      <div
        ref={animationRef}
        className="flex flex-col xl:flex-row container relative px-4 pt-[10rem] max-w-3xl xl:max-w-7xl z-10"
      >
        <div className="flex flex-col gap-10 justify-between w-full">
          <motion.div
            className="container mb-10 flex flex-col items-center mx-auto"
            initial="hidden"
            animate={initialState}
            variants={variants}
            transition={transition}
          >
            <h2 className="max-xl:text-center text-3xl md:text-5xl xl:text-7xl font-bold mb-4 text-main font-urbanist">
              Key Operational Processes
            </h2>
            <p className="text-center text-gray-600 text-xl font-medium mb-8 max-w-3xl max-xl:text-center">
              Finex operates across key regions in Africa, North America,
              Europe, and Southeast Asia, delivering innovative healthcare
              analytics and informatics solutions tailored to diverse healthcare
              systems.
            </p>
            <Button
              className="bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 font-bold rounded-full text-white hover:text-white text-md p-6 md:text-xl md:p-8 hover:drop-shadow-2xl transition duration-300 w-[15rem] hover:scale-110 cursor-pointer"
              variant={"outline"}
              onClick={() => window.open("/services", "_self")}
            >
              View All Services
            </Button>
          </motion.div>

          {/* Grid is shown only after delay */}
          {showGrid && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {processItems.map((process) => (
                <ProcessItem
                  key={process.id}
                  id={process.id}
                  title={process.title}
                  content={process.content}
                  icon={process.icon}
                  index={process.index}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  initialState={initialState}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
