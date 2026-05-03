"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const industries = [
  { href: "/hvac-seo", label: "HVAC SEO" },
  { href: "/roofing-seo", label: "Roofing SEO" },
  { href: "/plumbing-seo", label: "Plumbing SEO" },
  { href: "/electrician-seo", label: "Electrician SEO" },
  { href: "/residential-contractor-seo", label: "Residential Contractor SEO" },
  { href: "/property-management-seo", label: "Property Management SEO" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center shadow-lg group-hover:shadow-green-500/30 transition-shadow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 6V10L8 14L2 10V6L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="8" cy="8" r="2" fill="white" />
                </svg>
              </div>
              <span className="font-semibold text-white tracking-tight">
                Evergreen<span className="text-green-400"> SEO</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="/#how-it-works" className="text-sm text-[#d1d5db] hover:text-white transition-colors duration-200">How It Works</a>

              {/* Industries dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="flex items-center gap-1 text-sm text-[#d1d5db] hover:text-white transition-colors duration-200"
                >
                  Industries <ChevronDown size={14} className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-8 left-0 w-56 bg-[#0d0d14] border border-[#1e1e2e] rounded-xl shadow-xl overflow-hidden z-50"
                    >
                      {industries.map((ind) => (
                        <a
                          key={ind.href}
                          href={ind.href}
                          onClick={() => setIndustriesOpen(false)}
                          className="block px-4 py-2.5 text-sm text-[#d1d5db] hover:text-white hover:bg-green-500/10 transition-colors"
                        >
                          {ind.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/#services" className="text-sm text-[#d1d5db] hover:text-white transition-colors duration-200">Pricing</a>
              <a href="/#results" className="text-sm text-[#d1d5db] hover:text-white transition-colors duration-200">Results</a>
              <a href="/about" className="text-sm text-[#d1d5db] hover:text-white transition-colors duration-200">About</a>
              <a href="/blog" className="text-sm text-[#d1d5db] hover:text-white transition-colors duration-200">Blog</a>
              <a href="/#faq" className="text-sm text-[#d1d5db] hover:text-white transition-colors duration-200">FAQ</a>
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/#contact"
                className="px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-lg hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
              >
                Get a Free Audit
              </a>
            </div>

            {/* Mobile toggle */}
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
            className="fixed inset-x-0 top-16 z-40 bg-[#0d0d14] border-b border-[#1e1e2e] md:hidden overflow-y-auto max-h-[80vh]"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {[
                { href: "/#how-it-works", label: "How It Works" },
                { href: "/#services", label: "Pricing" },
                { href: "/#results", label: "Results" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/#faq", label: "FAQ" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#d1d5db] hover:text-white transition-colors py-2.5 border-b border-[#1e1e2e]"
                >
                  {link.label}
                </a>
              ))}
              <p className="text-xs text-[#6b7280] uppercase tracking-wider pt-3 pb-1">Industries</p>
              {industries.map((ind) => (
                <a
                  key={ind.href}
                  href={ind.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#d1d5db] hover:text-green-400 transition-colors py-2 border-b border-[#1e1e2e] text-sm pl-2"
                >
                  {ind.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 px-4 py-3 text-center font-medium bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors"
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
