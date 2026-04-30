"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";



const niches = [
  "HVAC Companies",
  "Roofing Contractors",
  "Plumbers",
  "Electricians",
  "Residential Contractors",
  "Property Management Companies",
];

export default function Hero() {
  const [nicheIndex, setNicheIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNicheIndex((prev) => (prev + 1) % niches.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Local SEO for Home Service Businesses
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]"
          >
            Your Competitors Are{" "}
            <span className="relative">
              <span className="text-green-400 text-glow-green">Ranking.</span>
            </span>
            <br />
            <span className="text-[#f8fafc]">You Should Be Too.</span>
          </motion.h1>

          {/* Rotating Subhead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#d1d5db] max-w-2xl mx-auto mb-10 leading-relaxed min-h-[3.5rem] flex items-center justify-center"
          >
            <span>
              We help{" "}
              <span className="inline-block relative" style={{ minWidth: "220px" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={nicheIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="text-[#22c55e] font-semibold inline-block"
                  >
                    {niches[nicheIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              dominate Google search and generate consistent inbound leads.
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5"
            >
              Get Your Free SEO Audit
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-6 py-3.5 text-[#d1d5db] hover:text-white border border-[#1e1e2e] hover:border-[#2a2a3e] rounded-xl transition-all duration-200"
            >
              See How It Works
            </a>
          </motion.div>


        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#d1d5db]">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border border-[#2a2a3e] rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-green-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
