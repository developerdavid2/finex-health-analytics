"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import ContactForm from "@/components/sections/contact/contact-form";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function ContactUsHeroSection() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      id="contact-hero"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#EEF2FF] relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-56 w-56 bg-gradient-to-tr from-main/30 to-pink-300/30 rounded-full absolute top-1/2 right-[5%]"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-[1320px] relative">
        <div ref={animationRef} className="mb-8 md:mb-12">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-10 text-main font-urbanist font-bold pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#261935] to-main/80 bg-clip-text text-center leading-none text-transparent"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            We are here to help you.
          </motion.h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
            {/* Left Panel - Research Links */}
            <motion.div
              className="flex flex-col h-full w-fit items-start justify-center"
              transition={{ ...transition, delay: 0.6 }}
              variants={variants}
              initial="hidden"
              animate={animationState}
            >
              <div className="flex flex-col items-start gap-2 mb-8">
                <motion.h1
                  variants={variants}
                  transition={transition}
                  className="text-center xl:text-start text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl leading-none font-black tracking-tight text-main/50 pt-8 text-shadow-xl font-urbanist"
                >
                  Contact Us
                </motion.h1>

                <motion.p
                  className="text-gray-600 text-xl font-medium max-w-lg mx-auto"
                  transition={transition}
                  variants={variants}
                >
                  Our team would love to connect with you and learn more about
                  how we can support your healthcare needs. Let’s start a
                  conversation!
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4 pt-8 items-start justify-start">
                  {/*Email Link Button*/}
                  <motion.div variants={variants}>
                    <Link
                      className="rounded-xl bg-[#EEF2FF] text-main text-md p-4 md:text-lg drop-shadow-xl drop-shadow-blue-50 shadow-xl transition duration-300 hover:bg-gray-400/10 cursor-pointer items-center justify-center flex w-fit border border-zinc-300/30"
                      href="mailto:service@finexhealth.com"
                    >
                      <FaEnvelope className="h-6 w-6 mr-2" />
                      <span className="inline-flex items-center text-base">
                        service@finexhealth.com
                      </span>
                    </Link>
                  </motion.div>
                  {/*Phone Number Link Button*/}
                  <motion.div variants={variants}>
                    <Link
                      className="rounded-xl bg-[#EEF2FF] text-main text-md p-4 md:text-lg drop-shadow-xl drop-shadow-blue-50 shadow-xl transition duration-300 hover:bg-gray-400/10 cursor-pointer items-center justify-center flex w-fit border border-zinc-300/30"
                      href="tel:+14244042013"
                    >
                      <FaPhoneAlt className="h-6 w-6 mr-2" />
                      <span className="inline-flex items-center text-base">
                        +1 (424) 404-2013
                      </span>
                    </Link>
                  </motion.div>
                </div>

                <div className="mt-10 p-8 flex flex-col flex-1  rounded-xl bg-[#EEF2FF] drop-shadow-xl drop-shadow-blue-50 shadow-xl transition duration-300 hover:bg-gray-400/10 cursor-pointer items-center justify-start w-full border border-zinc-300/30">
                  {/*Business Hours*/}
                  <motion.div
                    variants={variants}
                    className="flex items-center justify-start gap-4"
                  >
                    <FaClock className="h-6 w-6 mr-2 text-main" />
                    <h2 className="inline-flex justify-start text-main text-lg md:text-2xl lg:text-3xl font-bold text-start">
                      BUSINESS HOURS
                    </h2>
                  </motion.div>
                  {/*Separator*/}
                  <div className="h-px w-[90%] bg-main mt-8" />

                  {/*  BUSINESS DAYS*/}
                  <div className="flex flex-col lg:flex-row items-center justify-start mt-16 gap-8">
                    <motion.div className="flex flex-col justify-center items-start">
                      <span className="font-semibold text-main">
                        MONDAY - FRIDAY
                      </span>
                      <span className="font-light text-main">
                        9:00 AM - 5:00 PM
                      </span>
                    </motion.div>

                    <motion.div className="flex flex-col justify-center items-start">
                      <span className="font-semibold text-main">SATURDAY</span>
                      <span className="font-light text-main">
                        10:00 AM - 4:00 PM
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Panel - Image */}

            <motion.div
              className="flex items-center h-full rounded-3xl border text-gray-800 font-semibold flex-col space-y-10 justify-center p-10 border-white/30 backdrop-blur-sm bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]"
              variants={variants}
              initial="hidden"
              animate={animationState}
              transition={{ ...transition, delay: 0.8 }}
            >
              <div className="relative w-full h-full min-h-[300px] md:min-h-[350px] lg:min-h-[400px] rounded-xl overflow-hidden">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
