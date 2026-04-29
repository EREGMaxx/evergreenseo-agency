"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e1e2e] bg-[#050508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
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
            <p className="text-sm text-[#d1d5db]">
              Page 1 or it didn&apos;t happen.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-[#d1d5db]">
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Email */}
          <a
            href="mailto:maxx@evergreenseo.agency"
            className="flex items-center gap-2 text-sm text-[#d1d5db] hover:text-green-400 transition-colors"
          >
            <Mail size={14} />
            maxx@evergreenseo.agency
          </a>
        </motion.div>

        <div className="mt-8 pt-8 border-t border-[#1e1e2e] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#d1d5db]">
            © {currentYear} Evergreen SEO Agency. All rights reserved.
          </p>
          <a href="/terms" className="text-xs text-[#d1d5db] hover:text-green-400 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
