import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plumbing SEO Services | Get More Plumbing Calls From Google | Evergreen SEO",
  description: "Plumbing SEO built for emergency and routine searches. Rank for water heater, drain, and pipe repair searches in your city. No contracts.",
};

const painPoints = [
  { title: "Emergency searches go to whoever ranks first", body: "\"Plumber near me open now\" and \"emergency plumber\" are decided in seconds. The customer calls the first result that looks credible. If you're not in the top 3, you're not getting that call — and emergency jobs are your highest-margin work." },
  { title: "Water heater replacement — a $1,500 job going elsewhere", body: "Water heater searches are high-intent and high-ticket. Customers searching \"water heater replacement [city]\" have already decided to buy. They're just deciding who. If a competitor is ranking above you, they're collecting those jobs every week." },
  { title: "Drain cleaning is a commodity if you're not visible", body: "In competitive markets, customers pick whoever shows up first for drain cleaning. It's not a decision based on reputation — it's a decision based on visibility. Ranking means being the default choice, not competing on price." },
];

const tactics = [
  { title: "Emergency keyword targeting", body: "Service pages and GBP optimization targeting \"emergency plumber,\" \"plumber near me open now,\" and after-hours searches. We make sure you're visible when customers have urgent needs — which is when they're most likely to call immediately." },
  { title: "Service pages for every offering", body: "Water heater repair and replacement, drain cleaning, pipe repair, leak detection, sewer line, bathroom and kitchen plumbing — each service gets a dedicated page targeting the exact searches your customers use." },
  { title: "Preferred contractor directory placements", body: "Moen, Kohler, and Delta preferred contractor directories. PHCC member directory. WaterSense partner locator (EPA program — very high domain authority). Permanent placements that build local rankings and brand credibility." },
  { title: "Review generation system", body: "Plumbing customers make fast decisions. Reviews are the trust signal that converts a searcher into a caller. We build a systematic review generation process so your Google star count outpaces competitors." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  "name": "Plumbing SEO Services",
  "provider": { "@type": "ProfessionalService", "name": "Evergreen SEO Agency", "url": "https://evergreenseo.agency" },
  "description": "Local SEO for plumbing companies. We rank plumbers for emergency, water heater, and routine service searches.", "areaServed": "United States",
};

const breadcrumb = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://evergreenseo.agency" },
    { "@type": "ListItem", "position": 2, "name": "Plumbing SEO", "item": "https://evergreenseo.agency/plumbing-seo" },
  ],
};

export default function PlumbingSEOPage() {
  return (
    <main className="min-h-screen bg-[#050508]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/4 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Plumbing SEO
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">Plumbing SEO Built for Emergency <span className="text-green-400">and Routine Calls</span></h1>
          <p className="text-xl text-[#d1d5db] leading-relaxed max-w-2xl mx-auto mb-10">Emergency calls, water heater replacements, drain cleaning — we make sure your plumbing company is what customers find when they search. Not your competition.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">Get a Free Plumbing SEO Audit</a>
        </div>
      </section>
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#0d0d14]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14"><h2 className="text-4xl font-bold tracking-tight mb-4">What&apos;s Costing <span className="text-red-400">Plumbers Calls Every Week</span></h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="gradient-border bg-[#050508] rounded-2xl p-8">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4"><span className="text-red-400 font-bold">!</span></div>
                <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-[#d1d5db] text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14"><h2 className="text-4xl font-bold tracking-tight mb-4">What We Do for <span className="text-green-400">Plumbing Companies</span></h2></div>
          <div className="grid md:grid-cols-2 gap-6">
            {tactics.map((t) => (
              <div key={t.title} className="gradient-border bg-[#0d0d14] rounded-2xl p-8">
                <div className="w-2 h-2 rounded-full bg-green-400 mb-4" />
                <h3 className="text-white font-bold text-lg mb-3">{t.title}</h3>
                <p className="text-[#d1d5db] leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">See What&apos;s Possible in <span className="text-green-400">Your Market</span></h2>
          <p className="text-[#d1d5db] text-lg mb-8">Free plumbing SEO audit. We&apos;ll show you who&apos;s getting your calls and what it would take to change that. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">Get My Free Plumbing SEO Audit</a>
            <a href="/#services" className="inline-flex items-center justify-center px-8 py-4 border border-[#1e1e2e] text-white rounded-xl hover:border-green-500/40 transition-all">View Pricing</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
