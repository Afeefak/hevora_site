"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

// --- ANIMATION HELPERS ---

interface TextRevealProps {
  children: string;
  className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, className }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const child: Variants = {
    hidden: { y: "115%", rotate: 2, filter: "blur(4px)", opacity: 0 },
    visible: {
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      opacity: 1,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className={`inline-block overflow-hidden pb-1 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span variants={child} className="inline-block">
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// --- MAIN COMPONENT ---

export default function OurApproach() {
  return (
    <section className="relative bg-[#20498A] py-32 overflow-hidden lg:overflow-visible">
      {/* Universal Hero-Style Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20498A] via-[#1a3a6e] to-[#16F88A]/20" />

      {/* Brand Radial Glow */}
      <div className="absolute -left-[10%] bottom-0 w-[600px] h-[600px] bg-[#16F88A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className="
            relative
            border border-white/10
            rounded-[56px]
            p-10
            lg:p-20
            grid
            lg:grid-cols-2
            gap-16
            items-center
            bg-white/5 
            backdrop-blur-2xl
            shadow-2xl shadow-black/20
            overflow-visible
          "
        >
          {/* Subtle Decorative Glow Inside Card */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#16F88A]/10 blur-[80px] rounded-full pointer-events-none" />

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left z-20">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter italic">
              <TextReveal>Our Approach</TextReveal>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white/70 mt-8 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium text-lg"
            >
              We combine strategic design with high-performance engineering to
              transform your vision into a market-leading digital reality.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#20498A",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-[#16F88A] px-12 py-4 rounded-2xl text-[#20498A] font-black uppercase tracking-widest text-sm shadow-xl shadow-[#16F88A]/20 transition-all duration-300"
            >
              Discover Now
            </motion.button>
          </div>

          {/* ================= MOBILE IMAGE + STATS ================= */}
          <div className="lg:hidden flex flex-col items-center gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-[32px] px-12 py-8 text-white text-center shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#16F88A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-5xl font-black tracking-tighter italic">
                2,554+
              </p>
              <p className="text-xs text-[#16F88A] font-black uppercase tracking-widest mt-2">
                Success Projects
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/phones.png"
              alt="Phones"
              className="w-[280px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.4)] mix-blend-screen"
            />
          </div>

          {/* ================= DESKTOP IMAGE + STATS ================= */}
          <div className="relative hidden lg:block h-full min-h-[400px]">
            {/* PHONES IMAGE */}
            <motion.img
              src="/phones.png"
              alt="Phones"
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
              className="
                absolute
                -right-16
                top-1/2
                -translate-y-1/2
                w-[480px]
                max-w-none
                pointer-events-none
                z-10
                drop-shadow-[0_40px_100px_rgba(0,0,0,0.5)]
                mix-blend-screen
              "
            />

            {/* FLOATING STATS */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: "-50%" }}
              whileInView={{ opacity: 1, x: 0, y: "-50%" }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 40,
                delay: 0.8,
              }}
              className="
                absolute
                left-0
                top-1/2
                bg-white/10
                backdrop-blur-xl
                rounded-[32px]
                px-10 py-8
                text-white
                z-20
                shadow-2xl
                border border-white/10
              "
            >
              <p className="text-4xl font-black italic tracking-tighter">
                2,554+
              </p>
              <p className="text-[10px] text-[#16F88A] font-black uppercase tracking-[0.3em] mt-2">
                Success Projects
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
