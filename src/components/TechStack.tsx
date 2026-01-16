"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

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

const CATEGORIES = [
  "Web Platform",
  "Cloud & DevOps",
  "Database",
  "Mobile Apps",
];

const STACKS: Record<
  string,
  { sections: { title: string; items: string[] }[] }
> = {
  "Web Platform": {
    sections: [
      {
        title: "Front End",
        items: [
          "Graphql",
          "React Hook",
          "ANT Design",
          "Material UI",
          "TypeScript",
          "NEXT.JS",
          "REACT.JS",
          "Rest API",
        ],
      },
      {
        title: "Back End",
        items: ["NODE.JS", "PHP", "Laravel", "Java"],
      },
    ],
  },
  "Cloud & DevOps": {
    sections: [
      {
        title: "Cloud",
        items: ["Nginx", "Docker", "Kubernetes", "Azure"],
      },
    ],
  },
  Database: {
    sections: [
      {
        title: "Database",
        items: ["Mysql", "Postgresql", "Mongodb", "Solr"],
      },
    ],
  },
  "Mobile Apps": {
    sections: [
      {
        title: "Mobile Apps",
        items: ["Kotlin", "GO", "Flutter", "Swift"],
      },
    ],
  },
};

export default function TechStack() {
  const [active, setActive] = useState("Web Platform");

  return (
    <section className="relative bg-[#20498A] py-28 overflow-hidden">
      {/* Universal Hero-Style Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20498A] via-[#1a3a6e] to-[#16F88A]/20" />

      {/* Brand Radial Glow */}
      <div className="absolute -left-[10%] top-1/4 w-[600px] h-[600px] bg-[#16F88A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[320px_1fr] gap-14 relative z-10">
        {/* LEFT FILTER */}
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.9] mb-12 tracking-tighter italic">
            <TextReveal>Building With the Best Tools</TextReveal>
          </h2>

          <div className="flex flex-col gap-3">
            {CATEGORIES.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActive(item)}
                className={`w-full py-5 px-8 rounded-2xl border transition-all text-sm font-black uppercase tracking-widest relative overflow-hidden
                  ${
                    active === item
                      ? "border-[#16F88A] text-[#20498A]"
                      : "border-white/10 text-white/50 hover:border-white/30"
                  }
                `}
              >
                <span className="relative z-10">{item}</span>
                {active === item && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-[#16F88A] z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT - Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[48px] bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-16 min-h-[550px] shadow-2xl relative overflow-hidden"
        >
          {/* Subtle decorative glow inside card */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#16F88A]/10 blur-[80px] rounded-full pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-20 relative z-10"
            >
              {STACKS[active].sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-3xl font-black text-white mb-10 tracking-tighter italic">
                    <TextReveal key={`${active}-${section.title}`}>
                      {section.title}
                    </TextReveal>
                  </h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {section.items.map((tech, i) => (
                      <motion.div
                        key={`${active}-${tech}`}
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: i * 0.05,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                          y: -8,
                          borderColor: "rgba(22, 248, 138, 0.4)",
                          backgroundColor: "rgba(255, 255, 255, 0.08)",
                        }}
                        className="rounded-2xl border border-white/10 px-8 py-5 text-white/90 flex justify-between items-center transition-all duration-300 bg-white/5"
                      >
                        <span className="text-lg font-bold tracking-tight">
                          {tech}
                        </span>
                        <span className="text-[#16F88A] font-black text-[10px] tracking-widest opacity-60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
