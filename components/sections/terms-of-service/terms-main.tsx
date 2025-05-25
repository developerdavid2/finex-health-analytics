"use client";

import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export default function TermsMain() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-8 bg-[#F5F7FE]">
      {/* Decorative Blur Element */}
      <div className="h-56 w-56 bg-gradient-to-tr from-main/30 to-rose-300/30 rounded-full absolute top-[25%] right-[15%] opacity-40" />

      <div className="relative max-w-4xl mx-auto z-10 bg-white/40 border border-white/50 rounded-3xl shadow-xl backdrop-blur-md p-6 sm:p-10 md:p-16 mt-12">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl text-main mb-6 font-black tracking-tight text-main/50 text-shadow-xl font-urbanist"
        >
          Terms of Service
        </motion.h1>

        {/* Timestamp */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-main/10 shadow-inner text-main text-sm">
            <FaClock />
            Last Updated: January 8, 2025
          </div>
        </div>

        {/* Sections */}
        {[
          {
            title: "Overview",
            content:
              "These Terms of Service govern your access to and use of Finex Healthcare Analytics and Informatics Consult services, including our data analytics tools, AI modules, and related offerings. By using our platform, you agree to be bound by these terms.",
          },
          {
            title: "Eligibility & Access",
            content:
              "You must be at least 18 years old or legally authorized by your organization to use Finex’s services. You are responsible for maintaining the confidentiality of your credentials and any activity under your account.",
          },
          {
            title: "Use of Services",
            content:
              "Our tools are designed for healthcare organizations and partners. You may not misuse our services, reverse-engineer software, or engage in any activity that compromises patient safety, data security, or system integrity.",
          },
          {
            title: "Intellectual Property",
            content:
              "All materials including software, logos, visuals, and content are owned by or licensed to Finex. You are granted a limited, non-transferable license for service use and may not copy, modify, or resell our intellectual property.",
          },
          {
            title: "Service Availability",
            content:
              "We aim for 99.9% uptime but do not guarantee uninterrupted access. Maintenance, updates, or system upgrades may temporarily impact availability. Finex will notify clients of scheduled downtimes.",
          },
          {
            title: "Limitation of Liability",
            content:
              "Finex is not liable for indirect damages, data loss, or business disruption resulting from use of our services. You agree that your use is at your sole risk and that our liability is limited to the amount paid for services.",
          },
          {
            title: "Termination",
            content:
              "We reserve the right to suspend or terminate your access if you breach these terms, misuse the platform, or engage in activities harmful to Finex or its users. Upon termination, access and stored data may be revoked.",
          },
          {
            title: "Governing Law",
            content:
              "These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in competent courts within Nigeria.",
          },
          {
            title: "Contact Us",
            content: (
              <>
                If you have questions regarding these terms, please contact us
                at{" "}
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
            {i < 8 && (
              <div className="mt-6 h-px w-full bg-main/10 backdrop-blur-sm" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
