"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#services", label: "Pricing" },
    { href: "#results", label: "Results" },
    { href: "/blog", label: "Blog" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050508]/80 backdrop-blur-xl border-b border-[#1e1e2e]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center shadow-lg group-hover:shadow-green-500/30 transition-shadow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2L14 6V10L8 14L2 10V6L8 2Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <circle cx="8" cy="8" r="2" fill="white" />
                </svg>
              </div>
              <span className="font-semibold text-white tracking-tight">
                Evergreen<span className="text-green-400"> SEO</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#d1d5db] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-lg hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
              >
                Get a Free Audit
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-[#d1d5db] hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0d0d14] border-b border-[#1e1e2e] md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#d1d5db] hover:text-white transition-colors py-2 border-b border-[#1e1e2e] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 text-center font-medium bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors"
              >
                Get a Free Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
