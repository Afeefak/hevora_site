"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { caseStudies } from "../data/caseStudies";

/* ---------- TEXT REVEAL ---------- */

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

/* ---------- COMPONENT ---------- */

const MotionLink = motion(Link);

export default function CaseStudiesHome() {
  return (
    <section
      id="case-studies"
      className="relative py-32 bg-[#20498A] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20498A] via-[#1a3a6e] to-[#16F88A]/20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-black text-white text-center mb-16 italic tracking-tighter leading-[1.1]">
          <TextReveal>Case Studies</TextReveal>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {caseStudies.slice(0, 3).map((item, index) => (
            <MotionLink
              to="/#case-studies"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{
                scale: 1.02,
                borderColor: "#16F88A",
                boxShadow: "0px 20px 50px -10px rgba(22, 248, 138, 0.3)",
              }}
              className="group rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col transition-colors"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[#20498A]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 text-[#16F88A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-black text-white italic tracking-tight group-hover:text-[#16F88A] transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm mt-2 font-medium leading-relaxed">
                  {item.short}
                </p>
              </div>
            </MotionLink>
          ))}
        </div>

        {/* Explore all */}
        <div className="text-center mt-16">
          <Link
            to="/case-studies"
            className="
              inline-block px-10 py-4
              rounded-full
              bg-[#16F88A]
              text-[#20498A]
              font-black
              tracking-widest
              uppercase
              shadow-xl shadow-[#16F88A]/20
              hover:bg-white
              hover:scale-105
              transition-all duration-300
            "
          >
            EXPLORE ALL WORK
          </Link>
        </div>
      </div>
    </section>
  );
}
