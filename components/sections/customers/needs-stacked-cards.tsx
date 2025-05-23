import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { customerNeedsData } from "@/constants/customers-page-data/customers";

interface NeedsStackedCardsProps {
  animationProps?: {
    initial?: "hidden" | "visible";
    animate?: "hidden" | "visible";
    variants?: Variants;
    transition?: {
      duration?: number;
      ease?: number[] | string;
      delay?: number;
    };
    viewport?: {
      once?: boolean;
      amount?: number;
    };
  };
}

const cardVariants: Variants = {
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
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function NeedsStackedCards({
  animationProps,
}: NeedsStackedCardsProps) {
  const cssVars = {
    "--cards": `${customerNeedsData.length}`,
    "--cardHeight": "500px",
    "--cardTopPadding": "1.5em",
  } as React.CSSProperties;

  const defaultAnimationProps = {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <motion.div
      className="max-w-7xl w-full"
      style={cssVars}
      {...(animationProps || defaultAnimationProps)}
    >
      <div className="container mx-auto px-4">
        <ul className="list-none p-0 grid grid-cols-1 gap-16 mb-16">
          {customerNeedsData.map((card, index) => (
            <li
              key={card.id}
              className="sticky top-10"
              style={{
                paddingTop: `calc(${index + 1} * var(--cardTopPadding))`,
                zIndex: customerNeedsData.length + index,
              }}
            >
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-3xl border border-white/20 shadow-sm overflow-hidden transition duration-500"
              >
                <div
                  className={`${card.color} rounded-3xl border border-white/10`}
                >
                  <div className="flex flex-col lg:flex-row h-full items-center mx-auto">
                    <div className="w-full md:w-2/5 h-full flex items-center justify-center">
                      <div className="h-full relative p-8 rounded-lg overflow-hidden">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={300}
                          height={300}
                          className="size-[200px] md:w-full md:h-full object-cover rounded-lg"
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="w-full md:w-3/5 p-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-start gap-4">
                      <div className="text-5xl text-main">
                        <card.icon />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-700">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
