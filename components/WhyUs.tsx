"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle, Clock, Shield } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "24-Hour Mockup Guarantee",
    description:
      "Send us your info, get a design mockup within 24 hours. Not 2 weeks. Not \"we'll be in touch.\" 24 hours.",
  },
  {
    icon: Clock,
    title: "Live in 24 Hours After Approval",
    description:
      "Once you approve the design, your site goes live within 24 hours. Most agencies take weeks. We take a day.",
  },
  {
    icon: CheckCircle,
    title: "Accurate Work, Every Time",
    description:
      "We verify everything before it ships. No sloppy audits, no generic copy, no copy-paste SEO. Every deliverable is built specifically for your business.",
  },
  {
    icon: Shield,
    title: "No Long-Term Contracts",
    description:
      "Month-to-month. Stay because the results speak for themselves — not because you're locked in. We earn your business every month.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#22c55e] text-sm font-semibold tracking-widest uppercase mb-4">
            Why Evergreen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fast. Accurate. No excuses.
          </h2>
          <p className="text-[#d1d5db] text-lg max-w-2xl mx-auto">
            Most SEO agencies are slow, vague, and hard to hold accountable. We built Evergreen to be the opposite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111] border border-[#1e1e2e] rounded-2xl p-8 flex gap-5"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#22c55e]" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[#d1d5db] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
