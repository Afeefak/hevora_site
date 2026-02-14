"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// --- REUSABLE ANIMATION HELPERS ---

interface TextRevealProps {
  children: string;
  className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, className }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const child: Variants = {
    hidden: { y: "120%", rotate: 2, filter: "blur(4px)", opacity: 0 },
    visible: {
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className={`inline-block overflow-visible py-2 ${className}`}
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
const base = import.meta.env.BASE_URL;
const SERVICES = [
  {
    id: "design",
    title: "Evaluation & Design",
    image: base + "images/EvaluationDesign.png",
    points: ["Product Design", "UI Review", "Branding"],
    description:
      "Strategic evaluation and user-centric design to ensure your digital product leads the market.",
  },
  {
    id: "software",
    title: "Custom Software",
    image: base + "images/CustomSoftware.png",
    points: ["Web Apps", "Enterprise Solutions"],
    description:
      "Custom software solutions built for scalability, high performance, and long-term growth.",
  },
  {
    id: "web",
    title: "Web Development",
    image: base + "images/WebDevelopment.png",
    points: ["Frontend", "Backend"],
    description:
      "Modern web applications using cutting-edge tech for lightning-fast user experience.",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    image: base + "images/MobileDevelopment.png",
    points: ["Android App", "iOS App"],
    description:
      "High-performance native and cross-platform mobile applications tailored for you.",
  },
  {
    id: "support",
    title: "Maintenance & Support",
    image: base + "images/service5.png",
    points: ["Monitoring", "Updates"],
    description:
      "Reliable post-launch maintenance, 24/7 monitoring, and system improvements.",
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState("design");
  const activeService = SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  return (
    <section
      id="services"
      className="relative bg-[#20498A] py-24 lg:py-40 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a6e] to-[#20498A]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#16F88A]/5 blur-[140px] rounded-full pointer-events-none" />

      {/* ================= MOBILE VIEW (ENHANCED) ================= */}
      <div className="relative z-10 lg:hidden px-6 space-y-12">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* The Main Glass Card for Mobile */}
            <div className="relative rounded-[40px] bg-white/5 border border-white/10 p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Floating Image Container - Now larger and more prominent */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full aspect-video rounded-[24px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-inner mb-8"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover mix-blend-screen scale-110 brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20498A]/40 to-transparent pointer-events-none" />
              </motion.div>

              {/* Title & Description */}
              <h3 className="text-3xl font-black text-white italic tracking-tighter leading-tight mb-4">
                {service.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.points.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 rounded-lg bg-[#16F88A]/10 border border-[#16F88A]/20 text-[9px] font-black text-[#16F88A] uppercase tracking-wider"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <p className="text-white/70 text-base leading-relaxed font-medium">
                {service.description}
              </p>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#16F88A]/10 blur-3xl rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="relative z-10 hidden lg:block px-6 max-w-7xl mx-auto">
        {/* TAB NAVIGATION: More space from "Our Code" */}
        <div className="flex justify-center gap-4 mt-32 mb-24">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all border relative overflow-hidden group ${
                activeId === s.id
                  ? "bg-[#16F88A] border-[#16F88A] text-[#20498A] shadow-[0_10px_30px_rgba(22,248,138,0.3)]"
                  : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/30"
              }`}
            >
              <span className="relative z-10">{s.title}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-20 items-center">
          {/* IMAGE SIDE */}
          <div className="relative perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -25, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative rounded-[60px] overflow-hidden border border-white/20 bg-gradient-to-br from-white/10 to-transparent p-3 backdrop-blur-md shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-auto rounded-[50px] mix-blend-screen brightness-110 contrast-105"
                  />
                </motion.div>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/30 blur-3xl rounded-full" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* TEXT SIDE */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-7xl font-black text-white italic tracking-tighter leading-[0.9] mb-12">
                  <TextReveal key={activeId}>{activeService.title}</TextReveal>
                </h2>

                <div className="flex flex-wrap gap-3 mb-12">
                  {activeService.points.map((p, idx) => (
                    <motion.span
                      key={p}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="px-8 py-4 rounded-2xl bg-[#16F88A]/10 border border-[#16F88A]/30 text-[10px] font-black text-[#16F88A] uppercase tracking-[0.15em]"
                    >
                      {p}
                    </motion.span>
                  ))}
                </div>

                <p className="text-2xl text-white/90 font-medium leading-relaxed max-w-xl">
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
