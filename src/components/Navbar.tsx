"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
      className={`inline-block overflow-visible pb-2 ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden py-1">
          <motion.span variants={child} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// --- MAIN NAVBAR COMPONENT ---

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { hash, pathname } = useLocation();

  // --- SCROLL HANDLING LOGIC ---
  useEffect(() => {
    // 1. If no hash (e.g. just / or /contact), scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    }
    // 2. If there is a hash (e.g., /#services), scroll to that section
    else {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return (
    <header className="fixed top-0 w-full z-[9999]">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#20498A] border-b border-white/10 shadow-xl"
      >
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#20498A] via-[#1a3a6e] to-[#16F88A]/20" />
        <div className="absolute inset-0 md:hidden bg-[#20498A]" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO - Always goes to Home top */}
          <Link
            to="/"
            className="text-white font-black text-xl md:text-2xl tracking-tighter italic shrink-0 leading-[1.2] whitespace-nowrap overflow-visible"
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

            <Link
              to="/#services"
              className="hover:text-[#16F88A] transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#16F88A] transition-all group-hover:w-full" />
            </Link>

            <Link
              to="/#industries"
              className="hover:text-[#16F88A] transition-colors relative group"
            >
              Industries
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#16F88A] transition-all group-hover:w-full" />
            </Link>

            {/* ✅ FIXED: Changed from /case-studies to /#case-studies */}
            <Link
              to="/#case-studies"
              className="hover:text-[#16F88A] transition-colors relative group"
            >
              Case Study
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#16F88A] transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* RIGHT SIDE (CTA + MOBILE TOGGLE) */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              {/* CONTACT BUTTON */}
              <Link
                to="/contact"
                className="bg-[#16F88A] hover:bg-white text-[#20498A] px-6 md:px-8 py-2.5 md:py-3 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest transition-all shadow-xl shadow-[#16F88A]/20 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </motion.div>

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
                  to="/#services"
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

                {/* ✅ FIXED: Changed from /case-studies to /#case-studies */}
                <Link
                  to="/#case-studies"
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
