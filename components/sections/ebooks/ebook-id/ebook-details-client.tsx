"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ebook } from "@/constants/ebooks-page-data/ebooks-data";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Check,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Animation configuration - matching the Research Section
const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(5px)", transform: "translateY(10%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

interface Props {
  ebook: Ebook;
}

export default function EbookDetailsClient({ ebook }: Props) {
  // Animation refs for each section
  const heroRef = useRef(null);
  const whyMattersRef = useRef(null);
  const pricingRef = useRef(null);
  const storyRef = useRef(null);
  const authorRef = useRef(null);

  // InView hooks
  const heroInView = useInView(heroRef, {
    once: true,
    margin: "-1%",
    amount: 0.1,
  });
  const whyMattersInView = useInView(whyMattersRef, {
    once: true,
    margin: "-1%",
    amount: 0.1,
  });
  const pricingInView = useInView(pricingRef, {
    once: true,
    margin: "-1%",
    amount: 0.1,
  });
  const storyInView = useInView(storyRef, {
    once: true,
    margin: "-1%",
    amount: 0.1,
  });
  const authorInView = useInView(authorRef, {
    once: true,
    margin: "-1%",
    amount: 0.1,
  });

  return (
    <div className="min-h-screen bg-[#EEF2FF] mt-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 lg:py-28 px-4">
        <div className="container mx-auto flex flex-col max-w-sm md:max-w-xl lg:max-w-5xl xl:max-w-7xl">
          {/* Back Button */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ...transition, delay: 0.1 }}
          >
            <Link
              href="/ebooks"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-main mb-8 group transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to E-Books
            </Link>
          </motion.div>

          {/* Hero Grid */}
          <div
            ref={heroRef}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          >
            {/* Left: Book Cover */}
            <motion.div
              variants={variants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ ...transition, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-full mx-auto lg:max-w-none">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300/30 to-gray-200/30 rounded-3xl blur-2xl scale-105" />

                {/* Book cover */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-2xl" />
                  <Image
                    src={ebook.cover}
                    alt={ebook.title}
                    width={400}
                    height={600}
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Details */}
            <div className="space-y-6">
              <motion.div
                variants={variants}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                transition={{ ...transition, delay: 0.3 }}
              >
                <div className="bg-slate-100 text-gray-700 hover:bg-slate-200 mb-4 px-3 py-1 rounded-full inline-flex items-center gap-2 text-sm font-medium border border-slate-300">
                  <BookOpen className="w-3 h-3" />
                  Sports · Culture · History
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-main mb-5 font-urbanist leading-tight">
                  {ebook.title}
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
                  {ebook.subtitle}
                </p>
              </motion.div>

              <motion.p
                variants={variants}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                transition={{ ...transition, delay: 0.4 }}
                className="lg:text-lg text-gray-700 leading-relaxed"
              >
                {ebook.shortDescription}
              </motion.p>

              {/* Author info */}
              <motion.div
                variants={variants}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                transition={{ ...transition, delay: 0.5 }}
                className="flex items-center gap-3 pt-4"
              >
                <div className="rounded-full size-12 overflow-hidden border-2 border-white/30 shadow-md">
                  <Image
                    className="size-14 object-cover"
                    width={40}
                    height={40}
                    alt={`${ebook.author.name}'s profile picture`}
                    src={ebook.author.photo || ""}
                  />
                </div>
                <div>
                  <p className="font-semibold text-main">{ebook.author.name}</p>
                  <p className="text-sm text-gray-600/90">Author & Founder</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={variants}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                transition={{ ...transition, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-tr from-zinc-700 via-gray-600 to-gray-500 hover:from-zinc-800 hover:to-gray-700 text-white font-bold rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <a
                    href={ebook.pricing[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Your Copy Now
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 relative px-4">
        <div className="container mx-auto flex flex-col max-w-sm md:max-w-xl lg:max-w-5xl xl:max-w-7xl">
          <div ref={whyMattersRef}>
            <motion.h2
              variants={variants}
              initial="hidden"
              animate={whyMattersInView ? "visible" : "hidden"}
              transition={{ ...transition, delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold text-center text-main mb-12"
            >
              Why This Book Matters
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ebook.whyMatters.map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={variants}
                  initial="hidden"
                  animate={whyMattersInView ? "visible" : "hidden"}
                  transition={{ ...transition, delay: 0.2 + idx * 0.1 }}
                  className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl hover:border-gray-300 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-br from-gray-700 to-slate-600 rounded-full p-2 shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium capitalize">
                      {point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="flex justify-center items-center bg-pink-300/10 rounded-[2rem] lg:rounded-[5rem] px-4 lg:px-[6rem] py-[3rem] md:py-[5rem]">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] bg-blue-200/40 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto flex flex-col max-w-sm md:max-w-xl xl:max-w-5xl">
          <div ref={pricingRef}>
            <motion.h2
              variants={variants}
              initial="hidden"
              animate={pricingInView ? "visible" : "hidden"}
              transition={{ ...transition, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-center text-main mb-4"
            >
              Choose Your Edition
            </motion.h2>

            <motion.p
              variants={variants}
              initial="hidden"
              animate={pricingInView ? "visible" : "hidden"}
              transition={{ ...transition, delay: 0.2 }}
              className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Select the format that best suits your reading preference
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ebook.pricing.map((tier, idx) => (
                <motion.div
                  key={idx}
                  variants={variants}
                  initial="hidden"
                  animate={pricingInView ? "visible" : "hidden"}
                  transition={{ ...transition, delay: 0.3 + idx * 0.1 }}
                >
                  <Card
                    className={`relative bg-white/80 backdrop-blur-xl border shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                      idx === 1
                        ? "border-pink-900 ring-2 ring-pink-900"
                        : "border-slate-200"
                    }`}
                  >
                    {idx === 1 && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-900 to-pink-900 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </div>
                    )}

                    <CardContent className="p-8 text-center">
                      <h3 className="text-xl font-bold text-main mb-2">
                        {tier.type}
                      </h3>
                      <p className="text-4xl font-black text-main mb-6">
                        {tier.price}
                      </p>

                      <Button
                        asChild
                        className={`w-full font-semibold rounded-full py-6 transition-all ${
                          idx === 1
                            ? "bg-gradient-to-r from-pink-900 to-pink-900 hover:from-pink-700 hover:to-pink-800 text-white shadow-lg"
                            : "bg-gradient-to-tr from-zinc-700 via-gray-600 to-gray-500 hover:from-zinc-800 hover:to-gray-700 text-white"
                        }`}
                      >
                        <a
                          href={tier.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Buy Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="pt-20 px-4">
        <div className="container mx-auto flex flex-col max-w-sm md:max-w-xl xl:max-w-5xl">
          <div ref={storyRef} className="space-y-16">
            {/* Full Description */}
            <motion.div
              variants={variants}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              transition={{ ...transition, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-gray-700" />
                <h2 className="text-2xl md:text-4xl font-bold text-main">
                  The Story
                </h2>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed lg:text-lg">
                  {ebook.longDescription}
                </p>
              </div>
            </motion.div>

            {/* Purpose & Audience Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={variants}
                initial="hidden"
                animate={storyInView ? "visible" : "hidden"}
                transition={{ ...transition, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-gray-700" />
                  <h3 className="text-2xl font-bold text-main">Our Purpose</h3>
                </div>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-slate-200">
                  <p className="text-gray-700 leading-relaxed">
                    {ebook.purpose}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={variants}
                initial="hidden"
                animate={storyInView ? "visible" : "hidden"}
                transition={{ ...transition, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-gray-700" />
                  <h3 className="text-2xl font-bold text-main">
                    Who It&apos;s For
                  </h3>
                </div>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-slate-200">
                  <p className="text-gray-700 leading-relaxed">
                    {ebook.audience}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col max-w-sm md:max-w-xl xl:max-w-5xl">
          <motion.div
            ref={authorRef}
            variants={variants}
            initial="hidden"
            animate={authorInView ? "visible" : "hidden"}
            transition={{ ...transition, delay: 0.1 }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-slate-200"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="rounded-full overflow-hidden border-2 border-white/30 shadow-md">
                <Image
                  className="size-16 lg:size-28 object-cover"
                  width={40}
                  height={40}
                  alt={`${ebook.author.name}'s profile picture`}
                  src={ebook.author.photo || ""}
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl lg:text-2xl font-bold text-main mb-2">
                  About the Author
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                  {ebook.author.bio}
                </p>
                <p className="font-bold text-gray-800 text-lg">
                  {ebook.author.name}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
