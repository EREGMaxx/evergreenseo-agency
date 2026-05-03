import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Evergreen SEO Agency | Built for Home Service Businesses",
  description: "Evergreen SEO Agency is purpose-built for HVAC, roofing, plumbing, electrical, residential contractors, and property management companies. Learn our story.",
};

const differentiators = [
  {
    title: "One question drives every decision",
    body: "Does this drive more calls? Every strategy, every page, every piece of content is evaluated against that single standard. Not vanity metrics. Not ranking reports nobody reads. Calls.",
  },
  {
    title: "No account managers. No layers.",
    body: "You work directly with the people doing the work. No hand-offs, no game of telephone, no waiting a week for an answer. Fast execution, direct communication.",
  },
  {
    title: "Month-to-month. Always.",
    body: "No 12-month contracts. No lock-ins. We earn your business every single month. If the work isn't delivering, you shouldn't be trapped — and we shouldn't be comfortable.",
  },
  {
    title: "Built for the trades. Only the trades.",
    body: "We don't work with dentists, lawyers, or e-commerce brands. Six industries. Deep expertise. The difference between a generalist agency and a specialist shows up in the results.",
  },
];

const industries = [
  "HVAC Companies",
  "Roofing Contractors",
  "Plumbers",
  "Electricians",
  "Residential Contractors",
  "Property Management Companies",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050508]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/4 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            About Evergreen
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Built for Home Service Businesses.{" "}
            <span className="text-green-400">By Someone Who&apos;s Run Them.</span>
          </h1>
          <p className="text-xl text-[#d1d5db] leading-relaxed max-w-2xl mx-auto">
            Most SEO agencies treat every industry the same. We don&apos;t. Evergreen exists for one reason: to get home service businesses to page 1 and keep them there.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border bg-[#0d0d14] rounded-2xl p-10 md:p-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              The Story
            </span>
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
              &ldquo;I built and sold several businesses before starting Evergreen — including a SaaS platform and a multi-location healthcare practice. Running companies that depended entirely on finding and converting local customers gave me a front-row seat to how badly most agencies serve the trades.&rdquo;
            </blockquote>
            <p className="text-[#d1d5db] text-lg leading-relaxed mb-6">
              Home service businesses were getting handed the same generic SEO playbook as dentists, lawyers, and e-commerce brands — and paying for it twice. Once in fees. Again in missed results.
            </p>
            <p className="text-[#d1d5db] text-lg leading-relaxed mb-8">
              The agencies taking their money had dozens of clients across every industry imaginable. Nobody was going deep on what actually moves rankings for an HVAC company in Phoenix or a roofing contractor in Atlanta. The playbooks were generic. The results were mediocre. And the contracts were 12 months long.
            </p>
            <p className="text-white text-lg font-semibold">
              Evergreen exists to fix that.
            </p>
            <div className="mt-8 pt-8 border-t border-[#1e1e2e]">
              <p className="text-white font-bold text-lg">Maxx</p>
              <p className="text-[#d1d5db] text-sm">Founder, Evergreen SEO Agency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Purpose-Built for{" "}
              <span className="text-green-400">the Trades</span>
            </h2>
            <p className="text-lg text-[#d1d5db] leading-relaxed max-w-2xl mx-auto">
              We work exclusively with six industries. Not because we can&apos;t work with others — because choosing to specialize means we know your customers, your seasonality, your competition, and your search behavior better than any generalist agency.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {industries.map((ind) => (
              <div key={ind} className="flex items-center gap-3 p-4 rounded-xl border border-[#1e1e2e] bg-[#0d0d14]">
                <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <span className="text-white text-sm font-medium">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#0d0d14]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              How We&apos;re{" "}
              <span className="text-green-400">Different</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="gradient-border bg-[#050508] rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-3">{d.title}</h3>
                <p className="text-[#d1d5db] leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Ready to see what&apos;s{" "}
            <span className="text-green-400">possible in your market?</span>
          </h2>
          <p className="text-[#d1d5db] text-lg mb-8">
            Free audit. No obligation. We&apos;ll show you exactly where you stand and what it would take to outrank your competition.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
          >
            Get a Free SEO Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
