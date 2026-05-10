"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Clock, PhoneIncoming } from "lucide-react";

function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(end); // SSR: renders real number for crawlers
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    setCount(0); // reset for animation after hydration
  }, []);

  useEffect(() => {
    if (!inView || !mounted.current) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: TrendingUp,
    prefix: "",
    value: 76,
    suffix: "%",
    label: "of local searches result in a business visit within 24 hours",
    source: "Google",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: Clock,
    prefix: "",
    value: 46,
    suffix: "%",
    label: "of all Google searches have local intent",
    source: "Google",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: PhoneIncoming,
    prefix: "",
    value: 75,
    suffix: "%",
    label: "of local search clicks go to the top 3 results",
    source: "BrightLocal",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    isDecimal: false,
  },
];

export default function Results() {
  return (
    <section id="results" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d14]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/3 rounded-full blur-3xl" />

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
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Local Search Data
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight mb-4">
            Why Local SEO{" "}
            <span className="text-green-400">Wins</span>
          </h2>
          <p className="text-[#d1d5db] text-lg max-w-prose mx-auto">
            Local search is the highest-intent traffic on the internet. These are the numbers that make it the most valuable marketing channel for home service businesses.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`gradient-border bg-[#050508] rounded-2xl p-10 text-center`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${stat.bgColor} border ${stat.borderColor} flex items-center justify-center mx-auto mb-6`}
              >
                <stat.icon size={26} className={stat.color} />
              </div>

              <div className={`text-5xl lg:text-6xl font-black ${stat.color} mb-3`}>
                <CountUp
                  prefix={stat.prefix}
                  end={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              <p className="text-[#d1d5db] font-medium mb-2">{stat.label}</p>
              <p className="text-xs text-[--text-muted]">Source: {stat.source}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-[--text-muted]"
        >
          Statistics sourced from Google Think with Google and BrightLocal Local Consumer Review Survey.
        </motion.p>
      </div>
    </section>
  );
}
