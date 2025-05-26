"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import Image from "next/image";
import { outlinedServices, services } from "@/constants/homepage-data";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Animation configuration - memoized to prevent recreation
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

// Memoized stagger container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function ServicesSection() {
  const { ref } = useSectionScroll("services");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, {
    once: true,
    margin: "-1%", // Trigger animation slightly before fully in view
    amount: 0.1, // Trigger when 10% is visible
  });

  const [initialState, setInitialState] = useState("hidden");
  const [hasAnimated, setHasAnimated] = useState(false);
  const router = useRouter();

  // Memoize the content to prevent unnecessary re-renders
  const content = useMemo(
    () => ({
      title: "Finex Innovative Services",
      description:
        "We deliver cutting-edge solutions that enhance patient outcomes, protect data, and ensure financial sustainability. Explore our core services that are driving the future of healthcare.",
      services: services,
    }),
    [],
  );

  // Optimize the animation trigger with requestAnimationFrame
  useEffect(() => {
    if (isInView && !hasAnimated) {
      const animationFrame = requestAnimationFrame(() => {
        setInitialState("visible");
        setHasAnimated(true);
      });

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, hasAnimated]);

  // Memoize the button click handler
  const handleExploreMoreClick = useCallback(() => {
    router.push("/services");
  }, [router]);

  // Memoize the explore more button
  const exploreMoreButton = useMemo(
    () => (
      <Button
        className="bg-[#EEF2FF] font-bold rounded-full text-neutral-600 hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-55% hover:to-gray-500 hover:text-white text-md p-6 md:text-lg md:p-8 drop-shadow-xl drop-shadow-blue-50 shadow-xl transition duration-300 md:w-[15rem] hover:scale-110 cursor-pointer will-change-transform"
        variant="outline"
        onClick={handleExploreMoreClick}
      >
        Explore More
      </Button>
    ),
    [handleExploreMoreClick],
  );

  // Memoize service cards to prevent unnecessary re-renders
  const serviceCards = useMemo(() => {
    return content.services.map((service, index) => {
      const delay = 0.2 + index * 0.2;

      if (service.id === 1) {
        return (
          <motion.div
            key={service.id}
            className="relative bg-white/30 backdrop-blur-lg rounded-3xl shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff70] p-10 flex flex-col h-full border border-white/40 will-change-transform"
            variants={variants}
            transition={{ ...transition, delay }}
          >
            <div className="flex flex-col items-start text-start mb-auto">
              <h3 className="text-2xl font-semibold text-main mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
            <div className="my-6">
              <Image
                src={service.image || "/images/placeholder.jpg"}
                alt={service.alt || service.title}
                className="w-full h-52 object-cover rounded-xl"
                width={100}
                height={70}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <div className="flex justify-between text-start mt-auto space-x-6 md:space-x-20">
              <h2 className="text-4xl font-semibold text-main">
                {service.stat}
              </h2>
              <p className="text-gray-600 text-sm">{service.statDescription}</p>
            </div>
          </motion.div>
        );
      }

      if (service.id === 2) {
        return (
          <motion.div
            key={service.id}
            className="relative bg-white/30 backdrop-blur-lg rounded-3xl shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff70] p-10 flex flex-col h-full border border-white/40 will-change-transform"
            variants={variants}
            transition={{ ...transition, delay }}
          >
            <div className="mb-6">
              <Image
                src={service.image || "/images/placeholder.jpg"}
                alt={service.alt || service.title}
                className="w-full h-52 object-cover rounded-xl"
                width={100}
                height={70}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <div className="flex flex-col items-start text-start mt-10">
              <h3 className="text-2xl font-semibold text-main mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </motion.div>
        );
      }

      if (service.id === 3) {
        return (
          <motion.div
            key={service.id}
            className="relative p-10 flex flex-col h-full bg-white/10 rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/50 will-change-transform"
            variants={variants}
            transition={{ ...transition, delay }}
          >
            <div className="flex flex-col items-start text-start mb-10">
              <h3 className="text-2xl font-semibold text-main mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
            <div className="mt-10">
              <h5 className="text-xl font-semibold justify-start flex mb-6">
                Learn More
              </h5>
              <div className="flex flex-wrap gap-4 justify-start">
                {outlinedServices.map((button) => (
                  <div
                    key={button.slug}
                    className="inline-flex text-center justify-center items-center gap-2 rounded-full px-3 py-1.5 text-sm/6 font-semibold text-gray-500 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-hover:text-white data-open:bg-gray-700 max-w-full border border-gray-400"
                  >
                    {button.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      }

      if (service.id === 4) {
        return (
          <motion.div
            key={service.id}
            className="relative bg-white/30 backdrop-blur-lg rounded-3xl shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff70] p-10 flex flex-col xl:flex-row h-full border border-white/40 xl:col-span-2 items-center justify-center gap-x-10 will-change-transform"
            variants={variants}
            transition={{ ...transition, delay: 0.4 }}
          >
            <div className="mb-6 xl:flex-1 w-full">
              <Image
                src={service.image || "/images/placeholder.jpg"}
                alt={service.alt || service.title}
                className="w-full h-52 object-cover rounded-xl"
                width={100}
                height={70}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <div className="flex flex-col xl:flex-none xl:w-80">
              <h3 className="text-2xl font-semibold text-main mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
              <div className="flex flex-1 items-center mt-4">
                <Link
                  className="bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 inline-flex justify-center whitespace-nowrap rounded-full bg-gray-500 px-3 py-1.5 text-sm font-medium text-white shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300"
                  href={service.link || "/services"}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        );
      }

      return null;
    });
  }, [content.services]);

  return (
    <section
      id="services"
      ref={ref}
      className="flex justify-center items-center pt-[5rem] lg:pt-[10rem]"
    >
      <div
        ref={animationRef}
        className="flex flex-col container bg-pink-300/10 relative rounded-[2rem] lg:rounded-[5rem] max-w-7xl mx-auto px-4 lg:px-[6rem] py-[3rem] md:py-[5rem]"
      >
        <motion.div
          className="container max-w-6xl mb-10 will-change-transform"
          initial="hidden"
          animate={initialState}
          variants={containerVariants}
        >
          <motion.h2
            className="text-start text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist font-urban will-change-transform"
            variants={variants}
            transition={transition}
          >
            {content.title}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg font-medium mb-8 max-w-3xl"
            variants={variants}
            transition={{ ...transition, delay: 0.1 }}
          >
            {content.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 will-change-transform"
          initial="hidden"
          animate={initialState}
          variants={containerVariants}
        >
          {serviceCards}

          {/* Explore More Button */}
          <motion.div
            className="flex justify-center items-center h-full will-change-transform"
            variants={variants}
            transition={{ ...transition, delay: 0.8 }}
          >
            {exploreMoreButton}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
