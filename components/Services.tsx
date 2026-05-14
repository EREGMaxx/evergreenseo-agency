"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$397",
    period: "/mo",
    tagline: "Get found locally. Build your foundation.",
    popular: false,
    bestValue: false,
    features: [
      "On-page SEO optimization (3 pages)",
      "Keyword targeting & research",
      "Google Business Profile & Bing Places setup",
      "1 blog post/month",
      "Monthly ranking report",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$897",
    period: "/mo",
    tagline: "Accelerate rankings. Dominate your market.",
    popular: true,
    bestValue: false,
    features: [
      "Everything in Starter",
      "On-page SEO optimization (10 pages)",
      "4 blog posts/month",
      "Google Business Profile & Bing Places optimization",
      "One-time directory build across 25+ home services platforms (Angi, HomeAdvisor, BBB, Thumbtack, Nextdoor, Yelp, and more) — monitored and maintained ongoing",
      "NAP consistency audit & cleanup",
      "Review generation system",
      "Competitor gap analysis",
      "Schema markup implementation",
      "Bi-weekly performance updates",
    ],
    cta: "Start Growing",
  },
  {
    name: "Full Stack",
    price: "$1,297",
    period: "/mo",
    tagline: "Total dominance. Every advantage, every month.",
    popular: false,
    bestValue: true,
    features: [
      "Everything in Growth",
      "On-page SEO optimization (unlimited pages)",
      "One-time directory build across 50+ total platforms including industry-specific directories — monitored and maintained ongoing",
      "Authority link building — 4 to 6/month (HARO, trade associations, manufacturer networks)",
      "8 total blog posts/month",
      "Ongoing GBP & Bing Places management & weekly posts",
      "Citation monitoring & maintenance",
      "Review management & response",
      "Custom website design + build",
      "Mockup delivered within 24–48 hours",
      "Site live within 1 week of approval",
      "Hosting + security included",
      "Unlimited site updates & changes",
      "Priority email support (4-hour response)",
      "Monthly executive report",
    ],
    cta: "Go Full Stack",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-green-500/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight mb-4">
            Straight-up pricing.{" "}
            <span className="text-green-400">No surprises.</span>
          </h2>
          <p className="text-[#d1d5db] text-lg max-w-prose mx-auto">
            Month-to-month. Cancel anytime. We earn your business every single
            month.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-b-2xl border ${
                plan.popular
                  ? "border-t-2 border-[#1e1e2e]"
                  : "border-[#1e1e2e]"
              } p-8`}
              style={
                plan.popular
                  ? { background: "var(--bg-surface)", borderTopColor: "var(--cta-amber)" }
                  : { background: "#1c1c1c" }
              }
            >
              {/* Most Popular badge */}
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full border"
                  style={{
                    background: "var(--bg-surface)",
                    borderColor: "var(--cta-amber)",
                    color: "var(--cta-amber)",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Best Value badge */}
              {plan.bestValue && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-[#1c1c1c] border border-[#2a2a3e] text-[#d1d5db] text-xs font-bold rounded-full">
                  Best Value
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-[#d1d5db] mb-4">{plan.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-[#d1d5db]">{plan.period}</span>
                </div>
              </div>

              <a
                href="#contact"
                className={`block w-full text-center py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 mb-8`}
                style={
                  plan.popular
                    ? { background: "var(--cta-amber)", color: "#0a0a0a" }
                    : { background: "transparent", color: "var(--text-body)", border: "1px solid var(--bg-border)" }
                }
                onMouseEnter={e => {
                  if (plan.popular) e.currentTarget.style.background = "var(--cta-amber-hover)";
                  else e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={e => {
                  if (plan.popular) e.currentTarget.style.background = "var(--cta-amber)";
                  else e.currentTarget.style.background = "transparent";
                }}
              >
                {plan.cta}
              </a>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center mt-0.5">
                      <Check size={11} className="text-green-400" />
                    </div>
                    <span className="text-sm text-[#e5e5e5]">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm mt-8"
          style={{ color: "var(--text-muted)" }}
        >
          All plans include a free audit before you commit. No card required to
          get started.
        </motion.p>
      </div>
    </section>
  );
}
