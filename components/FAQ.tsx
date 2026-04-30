"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does SEO take to work?",
    answer:
      "You'll typically see initial movement within 90 days — new keywords entering the top 50, Google Business Profile impressions climbing, and site traffic ticking up. Significant impact — page 1 rankings, consistent inbound leads — usually happens between 4 and 6 months. SEO is a compounding asset: the longer you invest, the more it pays back. Unlike paid ads, the results don't stop when you stop paying.",
  },
  {
    question: "Do you guarantee rankings?",
    answer:
      "No ethical SEO agency can guarantee specific rankings — and any agency that does is lying to you. What we guarantee is the work: thorough audits, proven strategies, high-quality content, and consistent execution month over month. Our track record shows what happens when the work gets done right. We guarantee our effort and our process — Google determines rankings.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We specialize in home service businesses: HVAC companies, roofing contractors, plumbers, electricians, residential contractors, and property management companies. This focus means we understand your customers, your search behavior, and your competition better than a generalist agency ever could.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. Every plan is month-to-month. Cancel anytime with 30 days notice. We built it this way intentionally — it means we have to earn your business every single month. No locking you in with a 12-month contract and then going dark. We stay sharp because we have to.",
  },
  {
    question: "What's included in the monthly reports?",
    answer:
      "Every month you get a clear breakdown of: keyword rankings and movement, organic traffic trends, Google Business Profile metrics (calls, direction requests, clicks), leads attributed to organic, link building activity, and content published. We write reports that actually make sense — no fluff, no jargon, just clear data and what it means for your business.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out the contact form below. We'll review your information and get back to you within 24 hours with next steps. The first thing we do is a free audit of your current SEO standing — no obligation, no hard sell. If we see a real opportunity to help you, we'll show you exactly what we'd do and what we'd charge.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        open ? "border-green-500/30 bg-green-500/5" : "border-[#1e1e2e] bg-[#0d0d14]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-semibold text-white">{question}</span>
        <div
          className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
            open ? "bg-green-500 text-white" : "bg-[#1e1e2e] text-[#d1d5db]"
          }`}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-[#d1d5db] leading-relaxed border-t border-[#1e1e2e] pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Questions we get{" "}
            <span className="text-green-400">all the time</span>
          </h2>
          <p className="text-[#d1d5db] text-lg">
            Straight answers. No sales spin.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} {...faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
