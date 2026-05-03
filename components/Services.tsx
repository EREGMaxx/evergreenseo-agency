"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$297",
    period: "/mo",
    tagline: "Get found locally. Build your foundation.",
    popular: false,
    bestValue: false,
    features: [
      "On-page SEO optimization (3 pages)",
      "Keyword targeting & research",
      "4 blog posts/month",
      "Monthly ranking report",
    ],
    cta: "Get Started",
    color: "border-[#1e1e2e]",
  },
  {
    name: "Growth",
    price: "$597",
    period: "/mo",
    tagline: "Accelerate rankings. Dominate your market.",
    popular: true,
    bestValue: false,
    features: [
      "On-page SEO optimization (10 pages)",
      "Everything in Starter",
      "8 blog posts/month",
      "Google Business Profile optimization",
      "Local citation building & cleanup",
      "Review generation system",
      "Local citation & directory placements (8/month)",
      "Competitor gap analysis",
      "Schema markup implementation",
      "Bi-weekly performance updates",
    ],
    cta: "Start Growing",
    color: "border-green-500",
  },
  {
    name: "Full Stack",
    price: "$997",
    period: "/mo",
    tagline: "Total dominance. Every advantage, every month.",
    popular: false,
    bestValue: true,
    features: [
      "On-page SEO optimization (unlimited pages)",
      "Everything in Growth",
      "20 local citation & directory placements/month",
      "Weekly long-form content",
      "Ongoing GBP management & weekly posts",
      "Citation monitoring & maintenance",
      "Review management & response",
      "Custom website design + build",
      "Mockup delivered within 24 hours",
      "Site live within 24 hours of approval",
      "Hosting + security included",
      "Unlimited site updates & changes",
      "Priority email support (4-hour response)",
      "Monthly executive report",
    ],
    cta: "Go Full Stack",
    color: "border-[#1e1e2e]",
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
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Straight-up pricing.{" "}
            <span className="text-green-400">No surprises.</span>
          </h2>
          <p className="text-[#d1d5db] text-lg">
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
              className={`relative rounded-2xl border ${plan.color} ${
                plan.popular
                  ? "bg-[#1c1c1c] shadow-[0_0_30px_rgba(34,197,94,0.25)]"
                  : "bg-[#1c1c1c]"
              } p-8`}
            >
              {/* Best Value badge */}
              {plan.bestValue && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-[#1c1c1c] border border-green-500/40 text-green-400 text-xs font-bold rounded-full">
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
                className={`block w-full text-center py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 ${
                  plan.popular
                    ? "bg-green-500 text-white hover:bg-green-400 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                    : "bg-[#13131e] text-white hover:bg-[#252530] border border-[#2a2a3e]"
                }`}
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
          className="text-center text-sm text-[#d1d5db] mt-8"
        >
          All plans include a free audit before you commit. No card required to
          get started.
        </motion.p>
      </div>
    </section>
  );
}
