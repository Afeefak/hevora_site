"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Pencil, Settings, Search, Rocket } from "lucide-react";

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

const STEPS = [
  {
    id: "01",
    title: "Project Planning",
    description:
      "We define the project scope, goals, and deliverables, ensuring alignment with your vision.",
    icon: Pencil,
  },
  {
    id: "02",
    title: "Development Phase",
    description:
      "We bring your project to life using the latest technologies and best practices.",
    icon: Settings,
  },
  {
    id: "03",
    title: "Testing & QA",
    description:
      "We rigorously test the solution to ensure it meets all requirements and is defect-free.",
    icon: Search,
  },
  {
    id: "04",
    title: "Launch & Support",
    description:
      "We ensure a smooth launch and provide ongoing support and enhancements.",
    icon: Rocket,
  },
];

export default function Steps() {
  return (
    <section className="relative bg-[#20498A] py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20498A] via-[#1a3a6e] to-[#16F88A]/20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#16F88A] font-black tracking-[0.4em] uppercase text-xs">
            Steps
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 italic leading-[1.1]">
            <TextReveal>Streamlined Process</TextReveal>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto font-medium">
            Strategic phases engineered for high-performance delivery.
          </p>
        </div>

        {/* Steps List with Hover Effect */}
        <div className="space-y-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                /* THE HOVER EFFECT IS DEFINED HERE */
                whileHover={{
                  scale: 1.02, // Slight lift
                  borderColor: "#16F88A", // Border turns Mint Green
                  boxShadow: "0px 20px 50px -10px rgba(22, 248, 138, 0.3)", // Strong Green Glow
                }}
                className="
                  group relative 
                  rounded-[32px] 
                  border border-white/10 
                  bg-white/5 
                  backdrop-blur-2xl 
                  px-10 py-10 
                  shadow-2xl 
                  overflow-hidden 
                  cursor-default
                  transition-colors
                "
              >
                {/* Background Step Number */}
                <span className="absolute right-10 top-1/2 -translate-y-1/2 text-[120px] font-black text-white/5 select-none pointer-events-none italic group-hover:text-[#16F88A]/10 transition-colors duration-500">
                  {step.id}
                </span>

                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Icon Box */}
                  <div
                    className="
                    w-16 h-16 
                    rounded-2xl 
                    bg-[#16F88A] 
                    flex items-center justify-center 
                    shadow-xl shadow-[#16F88A]/20 
                    shrink-0
                    group-hover:scale-110 
                    transition-transform duration-300
                  "
                  >
                    <Icon className="text-[#20498A]" size={30} />
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tight group-hover:text-[#16F88A] transition-colors leading-none">
                      {step.title}
                    </h3>
                    <p className="text-white/70 mt-4 max-w-2xl text-lg font-medium leading-relaxed group-hover:text-white transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#20498A] to-transparent pointer-events-none z-30" />
    </section>
  );
}
