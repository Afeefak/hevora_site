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
      className={`inline-block overflow-hidden pb-1 ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
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

const SERVICES = [
  {
    id: "design",
    title: "Evaluation & Design",
    image: "/service1.png",
    points: ["Product Design", "UI Review", "Branding"],
    description:
      "Strategic evaluation and user-centric design to ensure your digital product leads the market with style.",
  },
  {
    id: "software",
    title: "Custom Software",
    image: "/service2.png",
    points: ["Web Apps", "Enterprise Solutions"],
    description:
      "Custom software solutions built for scalability, high performance, and long-term business growth.",
  },
  {
    id: "web",
    title: "Web Development",
    image: "/service3.png",
    points: ["Frontend", "Backend"],
    description:
      "Modern web applications using cutting-edge technologies for a seamless, lightning-fast user experience.",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    image: "/service4.png",
    points: ["Android App", "iOS App"],
    description:
      "High-performance native and cross-platform mobile applications tailored for your unique user base.",
  },
  {
    id: "support",
    title: "Maintenance & Support",
    image: "/service5.png",
    points: ["Monitoring", "Updates"],
    description:
      "Reliable post-launch maintenance, 24/7 monitoring, and continuous system improvements.",
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState("design");
  const activeService = SERVICES.find((s) => s.id === activeId)!;

  return (
    <section
      id="services"
      className="relative bg-[#20498A] py-32 overflow-hidden"
    >
      {/* Universal Hero-Style Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20498A] via-[#1a3a6e] to-[#16F88A]/20" />

      {/* Brand Radial Glow */}
      <div className="absolute -left-[10%] top-1/4 w-[600px] h-[600px] bg-[#16F88A]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* ================= MOBILE ================= */}
      <div className="relative z-10 lg:hidden px-6 space-y-4">
        {SERVICES.map((service) => {
          const isOpen = activeId === service.id;

          return (
            <div key={service.id}>
              <button
                onClick={() => setActiveId(isOpen ? "" : service.id)}
                className={`
                  w-full rounded-2xl py-5 text-sm font-black uppercase tracking-widest transition border
                  ${
                    isOpen
                      ? "bg-[#16F88A] border-[#16F88A] text-[#20498A]"
                      : "bg-white/5 border-white/10 text-white/60"
                  }
                `}
              >
                {service.title}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 rounded-[32px] bg-white/5 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl text-center">
                      <motion.img
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        src={service.image}
                        alt={service.title}
                        className="mx-auto w-[240px] drop-shadow-2xl mix-blend-screen"
                      />

                      <h3 className="mt-10 text-3xl font-black text-white italic tracking-tighter">
                        <TextReveal>{service.title}</TextReveal>
                      </h3>

                      <div className="mt-8 grid grid-cols-1 gap-3">
                        {service.points.map((point, idx) => (
                          <motion.div
                            key={point}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="rounded-full bg-white/10 py-4 text-xs font-black uppercase tracking-widest text-[#16F88A] border border-white/5"
                          >
                            {point}
                          </motion.div>
                        ))}
                      </div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 text-base font-medium text-white/70 leading-relaxed"
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="relative z-10 hidden lg:block px-6 max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-24 mb-20">
          {SERVICES.map((service, idx) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setActiveId(service.id)}
              className={`
                px-10 py-4 rounded-full border transition-all relative font-black uppercase tracking-widest text-xs
                ${
                  activeId === service.id
                    ? "border-[#16F88A] text-[#16F88A]"
                    : "border-white/10 text-white/40 hover:border-white/30 bg-white/5"
                }
              `}
            >
              {service.title}
              {activeId === service.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full border-2 border-[#16F88A] shadow-[0_0_20px_rgba(22,248,138,0.3)]"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content Card - High-End Glassmorphism */}
        <div className="rounded-[48px] bg-white/5 backdrop-blur-2xl border border-white/10 p-16 md:p-24 flex items-center gap-20 shadow-2xl min-h-[650px] relative overflow-hidden">
          {/* Subtle Decorative Glow Inside Card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#16F88A]/5 blur-[100px] rounded-full" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center gap-20 w-full relative z-10"
            >
              {/* Image Reveal with Blend Fix */}
              <div className="w-[480px] shrink-0">
                <motion.img
                  initial={{ y: 100, opacity: 0, scale: 1.1 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full drop-shadow-2xl mix-blend-screen"
                />
              </div>

              {/* Content Reveal */}
              <div className="flex-1">
                <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-[0.9]">
                  <TextReveal key={activeId}>{activeService.title}</TextReveal>
                </h2>

                {/* Pills */}
                <div className="flex flex-wrap gap-3 mt-10">
                  {activeService.points.map((point, idx) => (
                    <motion.span
                      key={point}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.4 + idx * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-[#16F88A] shadow-sm"
                    >
                      {point}
                    </motion.span>
                  ))}
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mt-12 text-white/70 font-medium leading-relaxed text-xl max-w-xl"
                >
                  {activeService.description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
