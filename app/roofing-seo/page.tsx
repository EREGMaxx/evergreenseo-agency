import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Roofing SEO Services | Get More Roofing Jobs From Google | Evergreen SEO",
  description: "Roofing SEO that fills your pipeline. Rank for storm damage, roof replacement, and repair searches in your market. Purpose-built for roofing contractors.",
};

const painPoints = [
  {
    title: "Storm season goes to whoever ranks",
    body: "After every major weather event, customers flood Google searching for roof inspections and storm damage repair. The top 3 contractors take the calls. If you're not ranking before the storm hits, you're starting from zero when the surge comes — and it's too late.",
  },
  {
    title: "Insurance jobs go to better-ranked competitors",
    body: "Homeowners filing insurance claims search for roofing contractors online before calling their adjuster's referral. If you're not visible at that moment — the highest-intent moment in the buying process — those jobs go to whoever Google shows first.",
  },
  {
    title: "One missed call per week is six figures per year",
    body: "At $10,000-20,000 average per roofing job, every week you're not in the map pack costs real money. The math is brutal: one missed call per week at a $12k average is over $600k in annual revenue going to your competition.",
  },
];

const tactics = [
  {
    title: "Storm damage and emergency content strategy",
    body: "Pre-storm content that ranks before weather events hit. Service pages targeting storm damage inspection, emergency tarping, and insurance claim assistance — the high-intent searches that drive the biggest jobs.",
  },
  {
    title: "Manufacturer certification directory placements",
    body: "GAF Master Elite locator, CertainTeed SELECT ShingleMaster, Owens Corning Preferred Contractor, and IKO and Atlas installer directories. High-DA, permanent placements that build both rankings and credibility.",
  },
  {
    title: "Map pack domination strategy",
    body: "Google Business Profile optimization targeting your highest-value service and location keywords. Review generation system to outpace competitors on review count and recency — two of Google's strongest local ranking signals.",
  },
  {
    title: "NRCA directory and authority building",
    body: "National Roofing Contractors Association member directory, local press outreach for storm season features, and HARO responses to trade and home improvement publications. Real authority signals that generalist agencies don't build.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Roofing SEO Services",
  "provider": { "@type": "ProfessionalService", "name": "Evergreen SEO Agency", "url": "https://evergreenseo.agency" },
  "description": "Local SEO services for roofing contractors. We help roofing companies rank for storm damage, replacement, and repair searches to generate more jobs.",
  "areaServed": "United States",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://evergreenseo.agency" },
    { "@type": "ListItem", "position": 2, "name": "Roofing SEO", "item": "https://evergreenseo.agency/roofing-seo" },
  ],
};

export default function RoofingSEOPage() {
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
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Roofing SEO
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Roofing SEO That{" "}
            <span className="text-green-400">Fills Your Pipeline</span>
          </h1>
          <p className="text-xl text-[#d1d5db] leading-relaxed max-w-2xl mx-auto mb-10">
            Storm season, replacement season, insurance claims — we make sure your roofing company is what customers find when they search. Ranked before the surge. Calling before your competitors pick up.
          </p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">
            Get a Free Roofing SEO Audit
          </a>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#0d0d14]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight mb-4">The Problems Keeping <span className="text-red-400">Roofers Off Page 1</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="gradient-border bg-[#050508] rounded-2xl p-8">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                  <span className="text-red-400 font-bold">!</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-[#d1d5db] text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight mb-4">What We Do for <span className="text-green-400">Roofing Contractors</span></h2>
          </div>
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

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#0d0d14]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Built Exclusively for <span className="text-green-400">Home Service Contractors</span></h2>
          <p className="text-[#d1d5db] text-lg leading-relaxed">We don&apos;t work with every industry. We work with six: HVAC, roofing, plumbing, electrical, residential contractors, and property management. Your roofing SEO strategy is built from the ground up for roofing — not adapted from a campaign for a different industry.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">See What&apos;s Possible in <span className="text-green-400">Your Market</span></h2>
          <p className="text-[#d1d5db] text-lg mb-8">Free roofing SEO audit. We&apos;ll show you exactly who&apos;s outranking you and what it would take to flip that. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">Get My Free Roofing SEO Audit</a>
            <a href="/#services" className="inline-flex items-center justify-center px-8 py-4 border border-[#1e1e2e] text-white rounded-xl hover:border-green-500/40 transition-all">View Pricing</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
