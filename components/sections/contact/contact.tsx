"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactForm from "@/components/sections/contact/contact-form";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function TestimonialsSection() {
  const { ref } = useSectionScroll("contact");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section ref={ref} className="w-full py-20 bg-[#EEF2FF]">
      <div className="container mx-auto px-4">
        <div ref={animationRef} className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            className="text-7xl font-bold mb-4"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Let&apos;s get in touch
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.3 }}
          >
            We are here to help you with any questions or concerns you may have.
          </motion.p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
