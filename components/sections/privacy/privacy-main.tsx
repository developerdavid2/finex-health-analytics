"use client";

import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export default function PrivacyMain() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-8 bg-[#F5F7FE]">
      {/* Decorative Blur Element */}
      <div className="h-56 w-56 bg-gradient-to-tr from-main/30 to-indigo-300/30  rounded-full absolute top-[25%] right-[15%] opacity-40" />

      <div className="relative max-w-4xl mx-auto z-10 bg-white/40 border border-white/50 rounded-3xl shadow-xl backdrop-blur-md p-6 sm:p-10 md:p-16 mt-12">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl text-main mb-6 font-black tracking-tight text-main/50 text-shadow-xl font-urbanist"
        >
          Privacy Policy
        </motion.h1>

        {/* Timestamp */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-main/10 shadow-inner text-main text-sm">
            <FaClock />
            Last Updated: January 8, 2025
          </div>
        </div>

        {/* Section Generator */}
        {[
          {
            title: "Introduction",
            content:
              "Welcome to Finex! This Privacy Policy explains how we collect, use, and protect your data when you access our website or use our services. By engaging with Finex, you agree to the practices outlined in this document.",
          },
          {
            title: "Data Collection and Use",
            content:
              "We collect minimal personal information required to deliver our services and enhance your experience. Data is only used for performance optimization, communication, and analytics.",
          },
          {
            title: "Authentication",
            content:
              "We use secure authentication methods to verify users, ensuring your credentials remain confidential and protected throughout usage.",
          },
          {
            title: "Third-Party Services",
            content:
              "Finex integrates trusted third-party services such as analytics and cloud storage. These services are compliant with international data standards.",
          },
          {
            title: "Data Security",
            content:
              "Your data privacy and security are paramount. We use end-to-end encryption, secure hosting, and restricted access protocols to ensure safety.",
          },
          {
            title: "User Responsibility",
            content:
              "As a user, you're expected to safeguard your login credentials and report any suspicious activity. We are not liable for any unauthorized actions resulting from your negligence.",
          },
          {
            title: "Contact Us",
            content: (
              <>
                If you have any questions or concerns regarding this Privacy
                Policy, contact us at{" "}
                <a
                  href="mailto:service@finexhealth.com"
                  className="text-main underline underline-offset-2 hover:text-blue-800 transition"
                >
                  service@finexhealth.com
                </a>
                .
              </>
            ),
          },
        ].map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-main mb-2">
              {section.title}
            </h2>
            <p className="text-base text-gray-800 leading-relaxed">
              {section.content}
            </p>
            {i < 6 && (
              <div className="mt-6 h-px w-full bg-main/10 backdrop-blur-sm" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
