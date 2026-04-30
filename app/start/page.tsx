"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Search, Users, CheckCircle, AlertCircle, MapPin, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

// ─── Data ────────────────────────────────────────────────────────────────────



const stats = [
  { icon: TrendingUp, label: "Avg. traffic increase", value: "+340%", color: "text-green-400", glow: "shadow-green-500/20" },
  { icon: Search, label: "Time to page 1 results", value: "90 days", color: "text-blue-400", glow: "shadow-blue-500/20" },
  { icon: Users, label: "More inbound leads", value: "3.2x", color: "text-purple-400", glow: "shadow-purple-500/20" },
];

const steps = [
  {
    num: "01",
    title: "Free SEO Assessment",
    desc: "We dig into your site, your competitors, and your market. You get a full breakdown of exactly where you stand and what it'll take to rank.",
  },
  {
    num: "02",
    title: "Custom Growth Plan",
    desc: "We build a strategy specific to your business and location — keywords, content, and authority signals that move the needle in your market.",
  },
  {
    num: "03",
    title: "Rank & Get Found",
    desc: "We execute. Most clients see meaningful movement within 90 days. You get monthly reporting and transparent updates every step of the way.",
  },
];

const whyItWorks = [
  {
    stat: "76%",
    label: "of local searches result in a business visit within 24 hours",
    source: "Google",
  },
  {
    stat: "46%",
    label: "of all Google searches have local intent",
    source: "Google",
  },
  {
    stat: "75%",
    label: "of local search clicks go to the top 3 results",
    source: "BrightLocal",
  },
];

// ─── Form ─────────────────────────────────────────────────────────────────────

// ─── Cookie helpers ──────────────────────────────────────────────────────────

function getCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`) );
  return match ? decodeURIComponent(match[1]) : "";
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

// ─── Form ─────────────────────────────────────────────────────────────────────

type FormState = "idle" | "loading" | "success" | "error";

interface Tracking {
  partnerRef: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
}

function AssessmentForm({ tracking }: { tracking: Tracking }) {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    website: "",
    revenue: "",
    challenge: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...tracking }),
      });
      if (res.ok) router.push("/thank-you");
      else setFormState("error");
    } catch {
      setFormState("error");
    }
  };

  const inputClass =
    "w-full bg-[#0d0d14] border border-[#1e1e2e] rounded-xl px-4 py-3 text-white placeholder-[#4b5563] focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all duration-200 text-sm outline-none";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#9ca3af] mb-2 uppercase tracking-wider">Your Name *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#9ca3af] mb-2 uppercase tracking-wider">Business Name *</label>
          <input type="text" name="businessName" value={form.businessName} onChange={handleChange} required placeholder="Smith Auto Repair" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-[#9ca3af] mb-2 uppercase tracking-wider">Website URL</label>
        <input type="url" name="website" value={form.website} onChange={handleChange} placeholder="https://yourbusiness.com" className={inputClass} />
      </div>
      <div>
        <label className="block text-xs font-medium text-[#9ca3af] mb-2 uppercase tracking-wider">Monthly Revenue *</label>
        <select name="revenue" value={form.revenue} onChange={handleChange} required className={inputClass}>
          <option value="" disabled>Select your range</option>
          <option value="under-10k">Under $10k/mo</option>
          <option value="10k-50k">$10k – $50k/mo</option>
          <option value="50k-100k">$50k – $100k/mo</option>
          <option value="100k-plus">$100k+/mo</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-[#9ca3af] mb-2 uppercase tracking-wider">What&apos;s your biggest challenge? *</label>
        <textarea name="challenge" value={form.challenge} onChange={handleChange} required rows={3} placeholder="Not enough calls, losing to competitors, stuck on page 2..." className={`${inputClass} resize-none`} />
      </div>
      {formState === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle size={14} />
          Something went wrong — email us at maxx@evergreenseo.agency
        </div>
      )}
      <button type="submit" disabled={formState === "loading"} className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-green-500 text-white font-bold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed text-base">
        {formState === "loading" ? (
          <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
        ) : (
          <>Get My Free SEO Assessment <ArrowRight size={18} /></>
        )}
      </button>
      <p className="text-xs text-[#4b5563] text-center">No spam. No obligation. We respond within 24 hours.</p>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StartPage() {
  const [tracking, setTracking] = useState<Tracking>({
    partnerRef: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
  });

  // Capture UTM params + ref on mount, cookie the ref for 30 days
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref") || getCookie("eg_ref") || "";
    const utmSource = params.get("utm_source") || "";
    const utmMedium = params.get("utm_medium") || "";
    const utmCampaign = params.get("utm_campaign") || "";
    if (ref) setCookie("eg_ref", ref, 30);
    setTracking({ partnerRef: ref, utmSource, utmMedium, utmCampaign });
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-white">

      {/* ── Minimal Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/80 backdrop-blur-xl border-b border-[#1e1e2e]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center shadow-lg group-hover:shadow-green-500/30 transition-shadow">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 6V10L8 14L2 10V6L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="8" cy="8" r="2" fill="white" />
              </svg>
            </div>
            <span className="font-semibold text-white tracking-tight text-sm">
              Evergreen<span className="text-green-400"> SEO</span>
            </span>
          </a>
          <a href="#assessment" className="px-4 py-1.5 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-400 transition-all shadow-lg shadow-green-500/20">
            Free Assessment
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
        {/* BG effects */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-20 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Local SEO that actually works
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.05]"
          >
            More customers.
            <br />
            <span className="text-green-400 text-glow-green">Less guesswork.</span>
          </motion.h1>

          {/* Rotating subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#9ca3af] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We help <span className="text-white font-semibold">businesses</span> get found on Google and turn searches into sales.
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <a
              href="#assessment"
              className="group flex items-center gap-2 px-7 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 text-base"
            >
              Get Your Free SEO Assessment
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="gradient-border bg-[#0d0d14] rounded-xl p-7 text-center"
              >
                <s.icon size={22} className={`${s.color} mx-auto mb-3 opacity-80`} />
                <div className={`text-4xl font-bold ${s.color} mb-2`}>{s.value}</div>
                <div className="text-sm text-[#6b7280]">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050508]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
              Simple process
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              How it works
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="gradient-border bg-[#050508] rounded-2xl p-6 sm:p-8 flex gap-6 items-start"
              >
                <div className="text-4xl font-black text-green-400/60 leading-none shrink-0 select-none">{step.num}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#9ca3af] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Works ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050508]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
              Local search data
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Why local SEO wins
            </h2>
            <p className="text-[#9ca3af] text-lg mt-4 max-w-xl mx-auto">Local search is the highest-intent traffic on the internet. Your customers are already searching — the question is whether they find you or your competitor.</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {whyItWorks.map((item, i) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="gradient-border bg-[#0d0d14] rounded-2xl p-6 flex flex-col gap-3 text-center"
              >
                <div className="text-5xl font-black text-green-400">{item.stat}</div>
                <p className="text-[#d1d5db] text-sm leading-relaxed flex-1">{item.label}</p>
                <div className="text-xs text-[#6b7280]">Source: {item.source}</div>
              </motion.div>
            ))}
          </div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-[#6b7280]"
          >
            {[
              { icon: CheckCircle, text: "No long-term contracts" },
              { icon: MapPin, text: "Local market expertise" },
              { icon: Mail, text: "Response guaranteed within 1-2 hours" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={14} className="text-green-400" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Assessment Form ── */}
      <section id="assessment" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050508]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-green-500/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/4 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Free — no obligation
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Let&apos;s see what&apos;s{" "}
              <span className="text-green-400">holding you back.</span>
            </h2>
            <p className="text-[#9ca3af] text-lg">
              Tell us about your business. We&apos;ll send back a full assessment showing where you rank, where your competitors are beating you, and exactly what to fix.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="gradient-border bg-[#050508] rounded-2xl p-8"
          >
            <AssessmentForm tracking={tracking} />
          </motion.div>
        </div>
      </section>

      {/* ── Minimal Footer ── */}
      <footer className="border-t border-[#1e1e2e] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#4b5563]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-green-500 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 6V10L8 14L2 10V6L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="8" cy="8" r="2" fill="white" />
              </svg>
            </div>
            <span className="text-white font-medium">Evergreen<span className="text-green-400"> SEO</span></span>
          </div>
          <a href="mailto:maxx@evergreenseo.agency" className="text-green-400 hover:text-green-300 transition-colors">
            maxx@evergreenseo.agency
          </a>
          <span>© {new Date().getFullYear()} Evergreen SEO Agency</span>
          <a href="/terms" className="text-green-400 hover:text-green-300 transition-colors text-xs">Terms of Service</a>
        </div>
      </footer>

    </div>
  );
}
