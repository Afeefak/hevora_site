"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

// --- ANIMATION COMPONENTS ---

interface TextRevealProps {
  children: string;
  className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, className }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const child: Variants = {
    hidden: { y: "115%", rotate: 2 },
    visible: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.span
      className={`inline-block overflow-hidden pb-2 ${className}`}
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

interface StaggeredRevealProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
  children,
  delay = 0,
  yOffset = 40,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// --- MAIN HERO COMPONENT ---

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#20498A] overflow-hidden lg:overflow-visible">
      {/* Universal Hero-Style Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20498A] via-[#1a3a6e] to-[#16F88A]/30" />

      {/* Brand Radial Glow */}
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#16F88A]/20 blur-[240px] rounded-full pointer-events-none" />

      {/* ================= MOBILE ================= */}
      <div className="relative z-10 lg:hidden flex flex-col items-center text-center px-6 pt-28">
        <h1 className="text-[56px] font-black leading-tight text-white italic tracking-tighter">
          <TextReveal>Your Vision</TextReveal>
        </h1>

        <StaggeredReveal delay={0.5}>
          <div className="mt-6 space-y-2 text-white/70 text-sm font-bold uppercase tracking-widest">
            <p>Evaluation & Design</p>
            <p>Custom Software</p>
            <p className="text-[#16F88A]">Web Development</p>
          </div>
        </StaggeredReveal>

        <div className="relative mt-12">
          <StaggeredReveal delay={0.7} yOffset={60}>
            <img
              src="/laptop2.png"
              alt="Laptop Dashboard"
              className="w-[320px] relative z-20 drop-shadow-[0_40px_80px_rgba(32,73,138,0.5)] mix-blend-screen"
            />
          </StaggeredReveal>

          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[300px] h-12 bg-gradient-to-b from-transparent via-[#20498A]/40 to-[#16F88A]/60 blur-md z-10" />

          <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[-74px] text-[48px] font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 whitespace-nowrap pointer-events-none z-30">
            <TextReveal>Our Code</TextReveal>
          </h2>
        </div>

        <StaggeredReveal delay={0.9}>
          <div className="mt-20 w-full max-w-sm rounded-[32px] border border-white/20 bg-white/5 backdrop-blur-xl px-6 py-8 shadow-2xl">
            <div className="w-8 h-8 rounded-full bg-[#16F88A] mb-4 mx-auto shadow-lg shadow-[#16F88A]/40" />
            <p className="text-white text-sm leading-relaxed font-medium">
              We transform ambitious ideas into high-performance digital
              realities through strategic engineering.
            </p>
          </div>
        </StaggeredReveal>

        <StaggeredReveal delay={1.1}>
          <div className="relative mt-6 mb-16 w-full max-w-sm">
            <div className="relative flex items-center justify-center gap-4 rounded-full px-8 py-5 border border-white/20 bg-gradient-to-r from-[#20498A]/40 to-[#16F88A]/40 backdrop-blur-md">
              <span className="text-4xl font-black text-white italic tracking-tighter">
                2+
              </span>
              <span className="text-white/80 text-[10px] font-black uppercase tracking-widest leading-tight text-left">
                Years Of <br /> Experience
              </span>
            </div>
          </div>
        </StaggeredReveal>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="relative z-10 hidden lg:block h-screen">
        {/* Big title */}
        <h1 className="absolute left-[200px] top-[96px] text-[130px] font-black leading-[1] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 select-none pointer-events-none whitespace-nowrap italic">
          <TextReveal>Your Vision</TextReveal>
        </h1>

        {/* Left list */}
        <StaggeredReveal
          delay={0.6}
          yOffset={20}
          className="absolute left-[120px] top-[340px] space-y-4 text-[14px] font-black uppercase tracking-[0.3em]"
        >
          <p className="text-white/40">Evaluation & Design</p>
          <p className="text-white/40">Custom Software</p>
          <p className="text-[#16F88A]">Web Development</p>
        </StaggeredReveal>

        {/* Laptop Area */}
        <StaggeredReveal
          delay={0.4}
          yOffset={100}
          className="absolute left-1/2 top-[75px] -translate-x-1/2 z-20"
        >
          <img
            src="/laptop2.png"
            alt="Laptop Dashboard"
            className="w-[820px] max-w-none relative z-20 drop-shadow-[0_60px_120px_rgba(32,73,138,0.6)] mix-blend-screen"
          />

          <h2 className="absolute left-3/4 -translate-x-1/2 bottom-[-100px] text-[130px] font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 whitespace-nowrap pointer-events-none z-30">
            <TextReveal>Our Code</TextReveal>
          </h2>
        </StaggeredReveal>

        {/* Info card - Glassmorphism */}
        <StaggeredReveal
          delay={0.8}
          className="absolute right-[120px] top-[240px] w-[340px] rounded-[48px] border border-white/20 bg-white/5 backdrop-blur-2xl px-8 py-10 shadow-2xl shadow-black/20"
        >
          <div className="w-10 h-10 rounded-full bg-[#16F88A] mb-6 shadow-lg shadow-[#16F88A]/30" />
          <p className="text-white text-[16px] leading-[1.6] font-medium tracking-tight">
            Our approach blends innovative design with battle-tested technology
            to ensure your platform leads the market.
          </p>
        </StaggeredReveal>

        {/* Experience card - Glassmorphism */}
        <StaggeredReveal
          delay={1.0}
          className="absolute right-[120px] bottom-[140px] w-[380px] h-[100px] flex items-center gap-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-2xl px-10 shadow-2xl shadow-black/20"
        >
          <span className="text-[56px] font-black text-white leading-none italic tracking-tighter">
            2+
          </span>
          <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em] leading-tight">
            Years Of <br /> Experience
          </span>
        </StaggeredReveal>
      </div>

      {/* Bottom transition to match next sections */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-[#20498A]" />
    </section>
  );
}
