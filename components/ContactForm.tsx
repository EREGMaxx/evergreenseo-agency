"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    website: "",
    revenue: "",
    challenge: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFormState("success");
        setForm({
          name: "",
          businessName: "",
          website: "",
          revenue: "",
          challenge: "",
        });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass =
    "w-full bg-[#0d0d14] border border-[#1e1e2e] rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30 transition-all duration-200 text-sm";

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d14]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-green-500/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Free Audit
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s see what&apos;s{" "}
              <span className="text-green-400">holding you back.</span>
            </h2>
            <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
              Tell us a bit about your business and we&apos;ll put together a
              free audit showing exactly where you stand and what it would take
              to get you to page 1. No obligation, no hard sell.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Free, no-obligation SEO audit",
                "Response within 24 hours",
                "Month-to-month — no lock-in",
                "Real recommendations, not fluff",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
                    <CheckCircle size={12} className="text-green-400" />
                  </div>
                  <span className="text-[#94a3b8] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-xl border border-[#1e1e2e] bg-[#050508]">
              <p className="text-sm text-[#475569] mb-1">Prefer email?</p>
              <a
                href="mailto:maxx@evergreenseo.agency"
                className="text-green-400 font-medium hover:text-green-300 transition-colors"
              >
                maxx@evergreenseo.agency
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="gradient-border bg-[#050508] rounded-2xl p-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  You&apos;re on our radar.
                </h3>
                <p className="text-[#94a3b8]">
                  We&apos;ll review your info and get back to you within 24
                  hours with your free audit findings. Keep an eye on your
                  inbox.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="gradient-border bg-[#050508] rounded-2xl p-8 flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#475569] mb-2 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#475569] mb-2 uppercase tracking-wider">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={form.businessName}
                      onChange={handleChange}
                      required
                      placeholder="Smith HVAC Co."
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#475569] mb-2 uppercase tracking-wider">
                    Website URL
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://yourbusiness.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#475569] mb-2 uppercase tracking-wider">
                    Monthly Revenue *
                  </label>
                  <select
                    name="revenue"
                    value={form.revenue}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select your range
                    </option>
                    <option value="under-10k">Under $10k/mo</option>
                    <option value="10k-50k">$10k – $50k/mo</option>
                    <option value="50k-100k">$50k – $100k/mo</option>
                    <option value="100k-plus">$100k+/mo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#475569] mb-2 uppercase tracking-wider">
                    What&apos;s Your Biggest Challenge Right Now? *
                  </label>
                  <textarea
                    name="challenge"
                    value={form.challenge}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us what's not working — not enough leads, losing to competitors, can't get off page 2..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {formState === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Email us directly at maxx@evergreenseo.agency
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Free SEO Audit
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-xs text-[#475569] text-center">
                  No spam. No obligation. We respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
