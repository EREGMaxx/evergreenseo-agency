"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Search, Users } from "lucide-react";

const floatingStats = [
  { icon: TrendingUp, label: "Organic Traffic", value: "+340%", color: "text-green-400" },
  { icon: Search, label: "Page 1 Rankings", value: "90 days", color: "text-blue-400" },
  { icon: Users, label: "More Inbound Leads", value: "3.2x", color: "text-purple-400" },
];

export default function Hero() {
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

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#d1d5db] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            When a homeowner needs an HVAC tech or a roofer, they Google it.
            If you&apos;re not on page 1, you don&apos;t exist. We put you on
            page 1 — and keep you there — so inbound leads become your new
            normal.
          </motion.p>

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

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {floatingStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="gradient-border bg-[#0d0d14] rounded-xl p-4 text-center"
              >
                <stat.icon size={20} className={`${stat.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-[#d1d5db]">{stat.label}</div>
              </motion.div>
            ))}
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
