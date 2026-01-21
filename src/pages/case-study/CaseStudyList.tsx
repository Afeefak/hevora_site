"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

// ---------- TEXT REVEAL ----------
interface TextRevealProps {
  children: string;
  className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, className }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const child: Variants = {
    hidden: { y: "120%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className={`inline-block overflow-visible py-3 -my-3 ${className}`}
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
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// ---------- DATA ----------
const CASE_STUDIES = [
  {
    title: "E-Commerce Platform",
    tags: ["Web Development", "UI/UX", "Branding"],
    image: "/case-placeholder.jpg",
    description:
      "A scalable e-commerce platform built for high traffic, secure payments, and seamless user experience.",
  },
  {
    title: "Healthcare Website",
    tags: ["Front End", "Web Development"],
    image: "/case-placeholder.jpg",
    description:
      "A modern healthcare portal focused on accessibility, performance, and patient engagement.",
  },
  {
    title: "Fintech Mobile App",
    tags: ["Mobile App", "UI Design"],
    image: "/case-placeholder.jpg",
    description:
      "A secure fintech application with real-time analytics and smooth transaction flows.",
  },
  {
    title: "Real Estate System",
    tags: ["Custom Software", "Dashboard"],
    image: "/case-placeholder.jpg",
    description:
      "A property management system for agents and property owners with real-time insights.",
  },
  {
    title: "Logistics Platform",
    tags: ["Web App", "Cloud"],
    image: "/case-placeholder.jpg",
    description:
      "A logistics solution providing shipment tracking and performance monitoring.",
  },
  {
    title: "EdTech Portal",
    tags: ["Web Development", "UI/UX"],
    image: "/case-placeholder.jpg",
    description:
      "An interactive learning platform with video streaming and course management.",
  },
];

// ---------- COMPONENT ----------
export default function CaseStudyList() {
  return (
    <section
      id="case-studies"
      className="relative bg-[#20498A] pt-32 pb-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20498A] via-[#1a3a6e] to-[#16F88A]/20" />
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#16F88A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-[#16F88A] font-black tracking-[0.4em] uppercase text-xs mb-4">
            Our Work
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-[1.1]">
            <TextReveal>Case Studies</TextReveal>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {CASE_STUDIES.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 25px 60px -15px rgba(22, 248, 138, 0.35)",
              }}
              className="
                group rounded-[32px]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                overflow-hidden
                transition-all
              "
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[#20498A]/25 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={item.image}
                  alt={`${item.title} case study`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-black text-white italic mb-3 tracking-tight group-hover:text-[#16F88A] transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm mb-6 leading-relaxed font-medium">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10 text-[#16F88A] bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-[#20498A] to-transparent pointer-events-none" />
    </section>
  );
}
