"use client";

import { motion } from "framer-motion";
import { Flame, Home, Wrench, Zap, Building, KeyRound } from "lucide-react";

const industries = [
  { icon: Flame, label: "HVAC Companies" },
  { icon: Home, label: "Roofing Contractors" },
  { icon: Wrench, label: "Plumbing Services" },
  { icon: Zap, label: "Electricians" },
  { icon: Building, label: "Residential Contractors" },
  { icon: KeyRound, label: "Property Management" },
];

export default function SocialProof() {
  return (
    <section className="py-16 border-y border-[#1e1e2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d14]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-[#d1d5db] font-medium uppercase tracking-widest mb-10"
        >
          Specialized in 6 home service industries
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 p-4 rounded-xl border border-[#1e1e2e] bg-[#13131e] hover:border-[#2a2a3e] hover:bg-[#1a1a28] transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1e1e2e] flex items-center justify-center group-hover:bg-green-500/10 transition-colors">
                <item.icon size={20} className="text-white/80 group-hover:text-green-400 transition-colors" />
              </div>
              <span className="text-xs text-white/80 text-center leading-tight">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
