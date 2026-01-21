"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

// --- REUSABLE ANIMATION COMPONENTS ---

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
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap overflow-hidden py-2 -my-2 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
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
  yOffset = 30,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// --- CONTACT COMPONENT ---

export default function Contact() {
  return (
    <section className="relative bg-[#20498A] py-28 overflow-hidden">
      {/* Universal Hero-Style Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20498A] via-[#1a3a6e] to-[#16F88A]/20" />

      {/* Brand Radial Glow */}
      <div className="absolute -right-[10%] top-0 w-[600px] h-[600px] bg-[#16F88A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className="
            relative
            grid lg:grid-cols-2
            gap-16
            items-center
            rounded-[56px]
            bg-white/5 
            backdrop-blur-2xl
            border border-white/10
            p-10 lg:p-20
            shadow-2xl shadow-black/20
            overflow-hidden
          "
        >
          {/* LEFT — FORM */}
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter italic">
              <TextReveal>Ready to Start Your Project?</TextReveal>
            </h2>

            <form className="mt-16 space-y-8">
              {/* NAME */}
              <StaggeredReveal delay={0.3}>
                <div className="space-y-2 group">
                  <label className="text-[#16F88A] text-[10px] font-black uppercase tracking-[0.4em] ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
                      w-full
                      rounded-2xl
                      bg-white/5
                      border border-white/10
                      px-6 py-5
                      text-white
                      placeholder-white/20
                      focus:outline-none
                      focus:border-[#16F88A]
                      focus:bg-white/10
                      transition-all
                      duration-300
                    "
                  />
                </div>
              </StaggeredReveal>

              {/* PHONE + EMAIL */}
              <div className="grid md:grid-cols-2 gap-8">
                <StaggeredReveal delay={0.4}>
                  <div className="space-y-2">
                    <label className="text-[#16F88A] text-[10px] font-black uppercase tracking-[0.4em] ml-2">
                      Phone
                    </label>
                    <input
                      type="text"
                      placeholder="+1..."
                      className="
                        w-full
                        rounded-2xl
                        bg-white/5
                        border border-white/10
                        px-6 py-5
                        text-white
                        placeholder-white/20
                        focus:outline-none
                        focus:border-[#16F88A]
                        focus:bg-white/10
                        transition-all
                        duration-300
                      "
                    />
                  </div>
                </StaggeredReveal>

                <StaggeredReveal delay={0.5}>
                  <div className="space-y-2">
                    <label className="text-[#16F88A] text-[10px] font-black uppercase tracking-[0.4em] ml-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="
                        w-full
                        rounded-2xl
                        bg-white/5
                        border border-white/10
                        px-6 py-5
                        text-white
                        placeholder-white/20
                        focus:outline-none
                        focus:border-[#16F88A]
                        focus:bg-white/10
                        transition-all
                        duration-300
                      "
                    />
                  </div>
                </StaggeredReveal>
              </div>

              {/* MESSAGE */}
              <StaggeredReveal delay={0.6}>
                <div className="space-y-2">
                  <label className="text-[#16F88A] text-[10px] font-black uppercase tracking-[0.4em] ml-2">
                    Your Vision
                  </label>
                  <textarea
                    placeholder="Describe your project..."
                    rows={4}
                    className="
                      w-full
                      rounded-[32px]
                      bg-white/5
                      border border-white/10
                      px-6 py-5
                      text-white
                      placeholder-white/20
                      focus:outline-none
                      focus:border-[#16F88A]
                      focus:bg-white/10
                      transition-all
                      duration-300
                      resize-none
                    "
                  />
                </div>
              </StaggeredReveal>

              {/* BUTTON */}
              <StaggeredReveal delay={0.7}>
                <button
                  type="submit"
                  className="
                    mt-4
                    w-full md:w-auto
                    bg-[#16F88A]
                    hover:bg-white
                    hover:scale-[1.05]
                    active:scale-[0.95]
                    transition-all
                    duration-300
                    text-[#20498A]
                    px-14 py-5
                    rounded-2xl
                    font-black
                    text-lg
                    shadow-xl shadow-[#16F88A]/20
                  "
                >
                  SEND MESSAGE
                </button>
              </StaggeredReveal>
            </form>
          </div>

          {/* RIGHT — IMAGE AT EDGE */}
          <div className="absolute top-0 right-0 h-full w-1/2 hidden lg:block pointer-events-none">
            <StaggeredReveal
              delay={0.5}
              yOffset={100}
              className="h-full w-full"
            >
              <img
                src="/Contact3.png"
                alt="Contact Visual"
                className="h-full w-full object-cover object-center opacity-100 mix-blend-screen"
              />
            </StaggeredReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
