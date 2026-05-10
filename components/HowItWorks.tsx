"use client";

import { motion } from "framer-motion";
import { Search, Map, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "We Audit Your Online Presence",
    description:
      "We dig deep into your current rankings, Google Business Profile, website health, backlink profile, and what your competitors are doing right. No guesswork — just data.",
    detail: "Delivered within 48 hours of signing up.",
  },
  {
    number: "02",
    icon: Map,
    title: "We Build Your SEO Strategy",
    description:
      "Based on the audit, we build a custom roadmap: target keywords, content plan, citation cleanup, link acquisition, and technical fixes. Every move designed for your market.",
    detail: "Tailored to your city, your niche, your competition.",
  },
  {
    number: "03",
    icon: Zap,
    title: "You Get Leads on Autopilot",
    description:
      "We execute the strategy month over month. Rankings climb. Traffic grows. Inbound calls and form fills start flowing — from real homeowners ready to hire. That's the compounding effect of SEO done right.",
    detail: "Most clients see measurable movement within 90 days.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d14]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            The Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight mb-4">
            Simple. Transparent. <span className="text-green-400">Effective.</span>
          </h2>
          <p className="text-[#d1d5db] text-lg max-w-prose mx-auto">
            No black boxes, no jargon. Here&apos;s exactly how we take your business from invisible to dominant.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="gradient-border bg-[#0d0d14] rounded-2xl p-8 h-full hover:bg-[#13131e] transition-colors group">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <step.icon size={22} className="text-green-400" />
                    </div>
                  </div>
                  <span className="text-4xl font-black text-[#d1d5db] group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-[#d1d5db] leading-relaxed mb-4">{step.description}</p>
                <p className="text-sm text-green-400 font-medium">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: "var(--cta-amber)", color: "#0a0a0a" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--cta-amber-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--cta-amber)")}
          >
            Start With a Free Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
