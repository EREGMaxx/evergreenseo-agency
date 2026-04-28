"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, MapPin, AlertCircle } from "lucide-react";

const factors = [
  {
    label: "Domain age",
    fast: "5+ years old",
    slow: "Brand new domain",
    impact: "High",
  },
  {
    label: "Existing content",
    fast: "Active blog, strong service pages",
    slow: "No blog, thin or missing pages",
    impact: "High",
  },
  {
    label: "Google Business Profile",
    fast: "Claimed, 20+ reviews, regular posts",
    slow: "Not claimed or empty",
    impact: "High",
  },
  {
    label: "Competition level",
    fast: "Small/mid market",
    slow: "Major metro, 50+ competitors",
    impact: "Medium",
  },
  {
    label: "Backlink profile",
    fast: "Established links from local sources",
    slow: "Zero backlinks",
    impact: "Medium",
  },
  {
    label: "Technical health",
    fast: "Fast, mobile-friendly, clean",
    slow: "Slow, errors, not indexed",
    impact: "Medium",
  },
];

const milestones = [
  {
    week: "Weeks 1–4",
    icon: MapPin,
    title: "GBP & Quick Wins",
    description:
      "Google Business Profile fully optimized, title tags and meta descriptions fixed, schema markup added. Most clients see GBP visibility improvements within the first 30 days.",
    color: "#22c55e",
  },
  {
    week: "Months 2–3",
    icon: TrendingUp,
    title: "Content & Authority Building",
    description:
      "Blog content publishing, on-page optimization complete, local citations and backlinks underway. Target keywords begin moving. Search Console starts showing impression growth.",
    color: "#3b82f6",
  },
  {
    week: "Months 4–6",
    icon: Clock,
    title: "Rankings & Leads",
    description:
      "Most clients see meaningful ranking movement and measurable lead increases in this window. Competitive markets may take longer — we'll tell you upfront which bucket you're in.",
    color: "#a855f7",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
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
            Honest Expectations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How long will SEO take for{" "}
            <span className="text-[#22c55e]">your business?</span>
          </h2>
          <p className="text-[#d1d5db] text-lg max-w-2xl mx-auto">
            Every business is different. We audit your site before we start and give you a
            personalized timeline — not a generic &ldquo;3–6 months&rdquo; non-answer.
          </p>
        </motion.div>

        {/* Milestone Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.week}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#111111] border border-[#1e1e2e] rounded-2xl p-8 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ backgroundColor: milestone.color }}
              />
              <p className="text-sm font-semibold mb-3" style={{ color: milestone.color }}>
                {milestone.week}
              </p>
              <h3 className="text-white font-bold text-lg mb-3">{milestone.title}</h3>
              <p className="text-[#d1d5db] text-sm leading-relaxed">{milestone.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Factors Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111111] border border-[#1e1e2e] rounded-2xl overflow-hidden mb-12"
        >
          <div className="p-8 border-b border-[#1e1e2e]">
            <h3 className="text-white font-bold text-xl">What affects your timeline</h3>
            <p className="text-[#d1d5db] text-sm mt-1">
              These are the six factors we assess in your free audit to estimate your specific timeline.
            </p>
          </div>
          <div className="divide-y divide-[#1e1e2e]">
            {factors.map((factor) => (
              <div key={factor.label} className="grid grid-cols-3 p-5 gap-4 items-center">
                <div>
                  <p className="text-white font-medium text-sm">{factor.label}</p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
                      factor.impact === "High"
                        ? "bg-[#22c55e]/10 text-[#22c55e]"
                        : "bg-blue-500/10 text-blue-400"
                    }`}
                  >
                    {factor.impact} impact
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" />
                  <p className="text-[#d1d5db] text-sm">{factor.fast}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-[#d1d5db] text-sm">{factor.slow}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 border-t border-[#1e1e2e] grid grid-cols-3 gap-4">
            <div />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#22c55e]" />
              <span className="text-[#22c55e] text-xs font-semibold">Faster results</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-xs font-semibold">Takes longer</span>
            </div>
          </div>
        </motion.div>

        {/* Satisfaction Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-2xl p-8 flex gap-6 items-start"
        >
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-[#22c55e]" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Our 90-Day Satisfaction Guarantee</h3>
            <p className="text-[#d1d5db] leading-relaxed">
              If you&apos;re not satisfied with the quality and completeness of our work in the first 90 days,
              cancel with no penalty and we&apos;ll refund your last month. No questions asked. We can&apos;t
              guarantee Google&apos;s algorithm — but we absolutely guarantee the quality, accuracy, and
              thoroughness of everything we deliver. If our work isn&apos;t right, we make it right. If
              you still want out, you&apos;re out — with your money back.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
