"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
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
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const child: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className={`inline-block overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span variants={child} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// --- MAIN COMPONENT ---

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<null | "services" | "case">(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      filter: "blur(4px)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <header className="fixed top-0 w-full z-[9999]">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#20498A] border-b border-white/10 shadow-xl"
      >
        {/* Desktop Gradient Pattern (Hidden on Mobile to prevent fading issues) */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#20498A] via-[#1a3a6e] to-[#16F88A]/20" />
        {/* Solid Mobile Background */}
        <div className="absolute inset-0 md:hidden bg-[#20498A]" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="text-white font-black text-xl md:text-2xl tracking-tighter italic shrink-0"
          >
            <TextReveal>Hevora Technologies.</TextReveal>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-white/80 relative font-bold text-sm uppercase tracking-widest">
            <Link
              to="/"
              className="hover:text-[#16F88A] transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#16F88A] transition-all group-hover:w-full" />
            </Link>

            <div
              className="relative py-2"
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#16F88A] transition-colors">
                Services{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    openMenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openMenu === "services" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-64 rounded-2xl bg-[#20498A]/95 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
                  >
                    <Link
                      to="/services"
                      className="block px-8 py-5 text-white hover:bg-[#16F88A] hover:text-[#20498A] transition-all font-black border-b border-white/5"
                    >
                      Our Services
                    </Link>
                    <Link
                      to="/services/web-development"
                      className="block px-8 py-5 text-white hover:bg-[#16F88A] hover:text-[#20498A] transition-all font-black"
                    >
                      Web Systems
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/#industries"
              className="hover:text-[#16F88A] transition-colors relative group"
            >
              Industries
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#16F88A] transition-all group-hover:w-full" />
            </Link>

            <div
              className="relative py-2"
              onMouseEnter={() => setOpenMenu("case")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#16F88A] transition-colors">
                Case Study{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    openMenu === "case" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openMenu === "case" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-64 rounded-2xl bg-[#20498A]/95 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
                  >
                    <Link
                      to="/case-studies"
                      className="block px-8 py-5 text-white hover:bg-[#16F88A] hover:text-[#20498A] transition-all font-black border-b border-white/5"
                    >
                      All Work
                    </Link>
                    <Link
                      to="/case-studies/healthcare"
                      className="block px-8 py-5 text-white hover:bg-[#16F88A] hover:text-[#20498A] transition-all font-black"
                    >
                      Featured
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* RIGHT SIDE (CTA + MOBILE TOGGLE) */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              <Link
                to="/contact"
                className="bg-[#16F88A] hover:bg-white text-[#20498A] px-6 md:px-8 py-2.5 md:py-3 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest transition-all shadow-xl shadow-[#16F88A]/20 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* HAMBURGER TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#16F88A] transition-all"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* FIXED MOBILE MENU DRAWER */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden absolute top-20 left-0 w-full bg-[#20498A] z-50 overflow-hidden border-t border-white/10"
            >
              <div className="relative z-50 px-6 py-12 flex flex-col gap-8 font-black text-lg uppercase tracking-[0.2em] text-white">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#16F88A] border-b border-white/5 pb-2"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#16F88A] border-b border-white/5 pb-2"
                >
                  Services
                </Link>
                <Link
                  to="/#industries"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#16F88A] border-b border-white/5 pb-2"
                >
                  Industries
                </Link>
                <Link
                  to="/case-studies"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#16F88A] border-b border-white/5 pb-2"
                >
                  Case Study
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#16F88A] text-[#20498A] py-5 rounded-2xl text-center font-black mt-4 shadow-2xl"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
