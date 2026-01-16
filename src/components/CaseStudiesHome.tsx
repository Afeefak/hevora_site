"use client";

import React from "react";
import { Link } from "react-router-dom";
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

// --- DATA ---

const CASES = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    image: "/case1.png",
    tags: ["E Commerce", "Branding"],
  },
  {
    slug: "healthcare-website",
    title: "Healthcare Website",
    image: "/case2.png",
    tags: ["Web Development", "Front End"],
  },
  {
    slug: "fintech-mobile-app",
    title: "Fintech Mobile App",
    image: "/case3.png",
    tags: ["Mobile App", "UI Design"],
  },
];

export default function CaseStudiesHome() {
  return (
    <section className="relative bg-[#20498A] py-32 overflow-hidden">
      {/* Universal Hero-Style Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20498A] via-[#1a3a6e] to-[#16F88A]/20" />

      {/* Brand Radial Glow */}
      <div className="absolute -right-[10%] top-1/4 w-[600px] h-[600px] bg-[#16F88A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* SECTION HEADING */}
        <h2 className="text-5xl md:text-7xl font-black text-white mb-20 tracking-tighter italic">
          <TextReveal>Case Studies</TextReveal>
        </h2>

        {/* CARDS GRID */}
        <div className="grid lg:grid-cols-3 gap-10">
          {CASES.map((item, index) => (
            <Link key={item.slug} to={`/case-studies/${item.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -15 }}
                className="
                  group
                  rounded-[48px]
                  bg-white/5 
                  backdrop-blur-2xl
                  p-6
                  border border-white/10
                  shadow-2xl
                  transition-all
                  duration-500
                "
              >
                {/* IMAGE CONTAINER */}
                <div className="overflow-hidden rounded-[36px] relative aspect-[4/3]">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all mix-blend-screen"
                  />
                  {/* Subtle Mint Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16F88A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* TAGS */}
                <div className="flex gap-2 mt-8 justify-center">
                  {item.tags.map((tag, tagIdx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + tagIdx * 0.1 }}
                      className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-full bg-white/10 text-[#16F88A] border border-white/5 group-hover:bg-[#16F88A] group-hover:text-[#20498A] transition-all"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="mt-6 mb-4 text-3xl font-black text-white group-hover:text-[#16F88A] transition-colors tracking-tighter italic">
                  {item.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* ALL CASES BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/case-studies"
            className="
              inline-block 
              mt-24 
              bg-[#16F88A]
              hover:bg-white
              text-[#20498A]
              px-14 py-5 
              rounded-full 
              transition-all 
              duration-500 
              shadow-xl shadow-[#16F88A]/20
              font-black
              text-sm
              uppercase
              tracking-[0.3em]
            "
          >
            Explore All Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
