"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.span
      className={`inline-block overflow-visible py-4 -my-4 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden py-2 px-1 mr-[0.25em]"
        >
          <motion.span variants={child} className="inline-block">
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// --- DATA ---

const industries = [
  {
    title: "Real Estate",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=300",
  },
  {
    title: "Logistics",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=300",
  },
  {
    title: "E-Commerce",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=300",
  },
  {
    title: "Government",
    img: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=300",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative bg-[#20498A] pt-24 pb-24 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Universal Hero-Style Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20498A] via-[#1a3a6e] to-[#16F88A]/20" />

      {/* Brand Radial Glow */}
      <div className="absolute -left-[10%] top-1/2 w-[600px] h-[600px] bg-[#16F88A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div className="self-start lg:sticky lg:top-32 text-center lg:text-left">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.2] tracking-normal mb-8 italic">
            <TextReveal>Solutions for Every Industry</TextReveal>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white/70 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium text-lg"
          >
            We deliver tailored digital solutions for diverse sectors, ensuring
            compliance, security, and scalability for your specific market
            needs.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="
              inline-flex items-center gap-3
              rounded-2xl
              bg-[#16F88A]
              px-10 py-4
              text-[#20498A]
              font-black
              uppercase
              tracking-widest
              text-sm
              hover:bg-white
              shadow-xl shadow-[#16F88A]/20
              transition-all
              mx-auto lg:mx-0
              whitespace-nowrap
            "
          >
            Discover Now <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* RIGHT SIDE — Glassmorphism Cards */}
        <div className="space-y-6">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              /* UPDATED: Reduced initial X offset and Blur for faster perceived appearance */
              initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              /* UPDATED: 'margin: -50px' triggers the animation slightly sooner as you scroll */
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                damping: 20, // Reduced bounce
                stiffness: 70, // Increased speed (was 40)
                mass: 1,
                delay: index * 0.08, // UPDATED: Reduced delay (was 0.15) for faster stagger
              }}
              whileHover={{ x: -10, borderColor: "rgba(255, 255, 255, 0.4)" }}
              className="
                group
                flex items-center justify-between gap-5
                rounded-[32px]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-6
                shadow-2xl
                transition-all
                relative overflow-visible
              "
            >
              {/* Text Container */}
              <div className="relative z-10 overflow-visible">
                <h3 className="text-xl md:text-3xl font-black text-white tracking-tight italic group-hover:text-[#16F88A] transition-colors mb-2 pt-1 leading-none">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-white/40 max-w-xs group-hover:text-white/60 transition-colors">
                  Tailored strategies driving growth and innovation.
                </p>
              </div>

              {/* Image with Blend Fix */}
              <div className="w-24 h-16 md:w-40 md:h-24 rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-inner">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
