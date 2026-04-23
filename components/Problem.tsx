"use client";

import { motion } from "framer-motion";
import { EyeOff, MousePointer, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: EyeOff,
    title: "Invisible on Google",
    description:
      "If you're not on page 1, you might as well not exist. 91% of searchers never click past the first page.",
  },
  {
    icon: MousePointer,
    title: "90% of Clicks Go to Page 1",
    description:
      "The top 3 results capture 75% of all clicks. Everyone below is splitting the scraps — or getting nothing.",
  },
  {
    icon: TrendingDown,
    title: "Your Pipeline Dries Up",
    description:
      "Without consistent inbound leads, you're stuck chasing referrals and praying for word-of-mouth. That's not a business — it's a gamble.",
  },
];

export default function Problem() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                The Problem
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Most businesses are{" "}
                <span className="text-red-400">invisible on Google.</span>
                <br />
                <span className="text-white">We fix that.</span>
              </h2>
              <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
                You built a great business. You do great work. But if your
                customers can&apos;t find you when they search, none of that
                matters. Your competitors are capturing those leads — leads that
                should be yours.
              </p>
              <p className="text-[#94a3b8] leading-relaxed">
                Every day you&apos;re not on page 1, you&apos;re handing
                business to someone else. We change that. Fast.
              </p>
            </motion.div>
          </div>

          {/* Right: problem cards */}
          <div className="flex flex-col gap-4">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="gradient-border bg-[#0d0d14] rounded-2xl p-6 flex gap-4 hover:bg-[#13131e] transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <problem.icon size={20} className="text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{problem.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
