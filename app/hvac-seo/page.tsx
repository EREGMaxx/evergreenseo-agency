import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HVAC SEO Services | Get More HVAC Customers From Google | Evergreen SEO",
  description: "HVAC SEO that drives real calls. We help HVAC companies dominate local search, rank in the Google map pack, and get more inbound leads. Month-to-month, no contracts.",
};

const painPoints = [
  {
    title: "Seasonal demand goes to whoever ranks",
    body: "When temperatures spike and every homeowner in your city is searching for AC repair, the top 3 results capture 75% of all clicks. If you're not there during your busiest season, those jobs are going to your competition — every single time.",
  },
  {
    title: "Emergency searches don't wait",
    body: "\"HVAC repair near me\" and \"emergency AC service\" are some of the highest-urgency searches on the internet. Customers click the first result that looks credible. After-hours calls, weekend breakdowns, and peak-season surges go to whoever Google shows first.",
  },
  {
    title: "You're paying for ads when you should be ranking",
    body: "Google Ads for HVAC keywords are expensive — $20-50 per click in most markets. Organic search and the map pack deliver the same customers at zero cost per click, and the results compound over time. Ads stop the moment you stop paying. SEO doesn't.",
  },
];

const tactics = [
  {
    title: "Google Business Profile dominance",
    body: "Your GBP is the most important local ranking asset you have. We optimize it for emergency and seasonal keywords, build consistent posting cadences, and manage your Q&A to capture high-intent queries.",
  },
  {
    title: "Dedicated service pages for every offering",
    body: "AC repair, AC installation, heating repair, furnace replacement, heat pumps, maintenance plans — each service gets its own optimized page targeting the exact terms your customers search.",
  },
  {
    title: "Industry-specific directory placements",
    body: "ACCA member directory, manufacturer dealer locators (Carrier, Trane, Lennox, Goodman), ENERGY STAR partner locator, and 20+ additional platforms your customers use to find trusted HVAC contractors.",
  },
  {
    title: "Seasonal content strategy",
    body: "Pre-summer AC prep content, winter heating guides, energy efficiency posts — targeted to the searches your customers make before they need you, so you're already ranking when the season hits.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "HVAC SEO Services",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Evergreen SEO Agency",
    "url": "https://evergreenseo.agency",
  },
  "description": "Local SEO services for HVAC companies. We help HVAC contractors rank in Google search and the map pack to generate more calls and leads.",
  "areaServed": "United States",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://evergreenseo.agency" },
    { "@type": "ListItem", "position": 2, "name": "HVAC SEO", "item": "https://evergreenseo.agency/hvac-seo" },
  ],
};

export default function HVACSEOPage() {
  return (
    <main className="min-h-screen bg-[#050508]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/4 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            HVAC SEO
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
            HVAC SEO Services That{" "}
            <span className="text-green-400">Drive Real Calls</span>
          </h1>
          <p className="text-xl text-[#d1d5db] leading-relaxed max-w-2xl mx-auto mb-10">
            Purpose-built for HVAC companies. We get you into the map pack, rank your service pages, and make sure customers find you when they need you most — not your competition.
          </p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">
            Get a Free HVAC SEO Audit
          </a>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#0d0d14]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight mb-4">The Problem Most <span className="text-red-400">HVAC Companies Face</span></h2>
            <p className="text-[#d1d5db] text-lg">If any of this sounds familiar, you&apos;re leaving money on the table every week.</p>
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

      {/* What we do */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight mb-4">What We Do for <span className="text-green-400">HVAC Companies</span></h2>
            <p className="text-[#d1d5db] text-lg">Everything is built around one goal: more calls from customers in your service area.</p>
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

      {/* Niche focus */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#0d0d14]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">We Only Work With <span className="text-green-400">Home Service Businesses</span></h2>
          <p className="text-[#d1d5db] text-lg leading-relaxed mb-4">
            We don&apos;t serve dentists, law firms, or e-commerce brands. Our entire operation is built for HVAC, roofing, plumbing, electrical, residential contractors, and property management. That focus means the playbooks we use for your HVAC company were built specifically for HVAC companies — not recycled from a campaign for a personal injury lawyer.
          </p>
          <p className="text-white font-semibold">The difference shows up in your rankings.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">See What&apos;s Possible in <span className="text-green-400">Your Market</span></h2>
          <p className="text-[#d1d5db] text-lg mb-8">Free HVAC SEO audit. We&apos;ll show you exactly where you stand, who&apos;s outranking you, and what it would take to change that. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">
              Get My Free HVAC SEO Audit
            </a>
            <a href="/#services" className="inline-flex items-center justify-center px-8 py-4 border border-[#1e1e2e] text-white rounded-xl hover:border-green-500/40 transition-all">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
