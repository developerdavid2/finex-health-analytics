"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import EbookGallery from "./ebook-gallery";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, filter: "blur(6px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9 },
  },
};

export default function EbookShowcase() {
  const router = useRouter();

  return (
    <section className="py-20 lg:py-32 overflow-hidden relative bg-[#EEF2FF] px-4">
      <div className="container mx-auto flex flex-col max-w-sm md:max-w-xl lg:max-w-5xl xl:max-w-7xl">
        {/* Small accent orbs */}
        <div className="absolute top-[40%] right-[10%] w-20 h-20 bg-gradient-to-br from-white to-zinc-400/30 rounded-full hidden lg:flex" />

        {/* Main Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10"
        >
          {/* LEFT: Gallery */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <EbookGallery />
          </motion.div>

          {/* RIGHT: Text + CTA */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 text-center lg:text-left relative"
          >
            <h2 className="text-start text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-main font-urbanist">
              Discover Our <br />
              Growing E-Book <br />
              Collection
            </h2>

            <p className="text-gray-600 lg:text-lg font-medium mb-8 max-w-3xl text-start">
              Dive into expertly crafted publications that blend deep research,
              cultural storytelling, and actionable insights. Our e-books
              deliver knowledge that informs, inspires, and transforms. Start
              your journey with our flagship title:
            </p>

            {/* Glassmorphism Card — NOW with proper backdrop blur */}
            <motion.div
              className="p-8 mb-10 bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 ring-1 ring-white/30"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-3 text-start">
                Naija Football Renaissance
              </h3>
              <p className="text-muted-foreground leading-relaxed text-start">
                The untold story of Nigerian football — from dusty grassroots
                pitches to global glory. A historic tribute combining rare
                archival photos, powerful narratives, and a blueprint for
                revival.
              </p>
            </motion.div>

            <Button
              className="text-md p-6 md:text-lg md:p-8 bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 font-bold rounded-full text-white hover:text-white text-lg hover:drop-shadow-2xl transition-all duration-300 w-[15rem] hover:scale-110 cursor-pointer will-change-transform mt-10"
              onClick={() => router.push("/ebooks")}
            >
              Explore All E-Books →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
