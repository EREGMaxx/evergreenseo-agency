"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle, Clock, Shield, Target, Users } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "No Long-Term Contracts. Ever.",
    description:
      "Month-to-month by default. Stay because the results speak for themselves — not because you're trapped in a 12-month deal you can't escape.",
  },
  {
    icon: Zap,
    title: "90-Day Satisfaction Guarantee",
    description:
      "Not satisfied with our work quality in the first 90 days? Cancel with no penalty and get your last month refunded. We can't control Google's algorithm — but we guarantee the quality of everything we deliver.",
  },
  {
    icon: CheckCircle,
    title: "We Report in Leads, Not Vanity Metrics",
    description:
      "Most agencies send you a PDF showing impressions went up 14%. We report in keyword rankings, GBP call volume, traffic by source, and cost-per-lead — so you see exactly where your leads are coming from, not just that Google noticed you exist.",
  },
  {
    icon: Clock,
    title: "24-Hour Speed. No Compromises on Quality.",
    description:
      "Mockup in 24 hours. Site live within 24 hours of your approval. Verified, accurate work every time — not fast AND sloppy. Fast AND right.",
  },
  {
    icon: Target,
    title: "Home Service Businesses Only",
    description:
      "We don't also work with restaurants, dentists, and florists. HVAC, roofing, plumbing, electrical, general contractors, and mortgage brokers — that's it. We know your industry, your seasonality, and your customers.",
  },
  {
    icon: Users,
    title: "Your Account Manager Handles 4 Other Clients",
    description:
      "Not 40. We cap our ratio at 1:5 so your account manager knows your market, your competition, and your slow season before you have to explain it.",
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
            Fast. Accurate. Accountable.
          </h2>
          <p className="text-[#d1d5db] text-lg max-w-2xl mx-auto">
            Most contractors have been burned by SEO agencies that lock them into contracts, report vanity metrics, and disappear after month one. We built Evergreen to be the opposite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
