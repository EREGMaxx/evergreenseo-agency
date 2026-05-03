import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Electrician SEO Services | Get More Electrical Jobs From Google | Evergreen SEO",
  description: "Electrician SEO that generates consistent leads. Rank for panel upgrades, EV chargers, and electrical repair searches in your market.",
};

const painPoints = [
  { title: "Panel upgrade jobs going to ranked competitors", body: "Electrical panel upgrades are $3,000-8,000 jobs. Homeowners search \"electrical panel upgrade [city]\" and call whoever ranks first. If a competitor is in the top 3 and you're not, they're collecting those high-ticket jobs every week." },
  { title: "EV charger installation — the fastest-growing search category in electrical", body: "Searches for EV charger installation are growing faster than almost any other home service keyword. Most electricians aren't ranking for it yet. This is a first-mover opportunity that closes within 12-18 months as competition catches up." },
  { title: "Trust and licensing matter more in electrical than almost any trade", body: "Customers searching for electricians specifically look for \"licensed\" and \"certified\" signals. They're not just looking for the cheapest — they're looking for the most credible. If your online presence doesn't convey that, you're losing to competitors who do." },
];

const tactics = [
  { title: "Panel upgrade and EV charger content strategy", body: "Dedicated service pages targeting panel upgrades, EV charger installation, whole-home rewiring, and generator installation. Early ranking for EV charger searches before competition fully arrives in your market." },
  { title: "Licensing and certification trust signals", body: "Every page optimized to communicate licensing, certifications, insurance, and credentials clearly. These aren't just trust signals for customers — they're ranking signals Google uses to evaluate credibility for home service searches." },
  { title: "NECA and IEC directory placements", body: "National Electrical Contractors Association and Independent Electrical Contractors member directories. Square D, Lutron, and Leviton preferred installer locators. Permanent high-authority placements specific to the electrical industry." },
  { title: "Local citation building and map pack optimization", body: "25+ home services directories plus electrician-specific platforms. GBP optimization targeting your highest-value service and location keyword combinations. Review generation system to outpace competitors on the trust signals that convert." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  "name": "Electrician SEO Services",
  "provider": { "@type": "ProfessionalService", "name": "Evergreen SEO Agency", "url": "https://evergreenseo.agency" },
  "description": "Local SEO for electricians. We rank electrical contractors for panel upgrades, EV charger installation, and electrical repair searches.", "areaServed": "United States",
};

const breadcrumb = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://evergreenseo.agency" },
    { "@type": "ListItem", "position": 2, "name": "Electrician SEO", "item": "https://evergreenseo.agency/electrician-seo" },
  ],
};

export default function ElectricianSEOPage() {
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
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Electrician SEO
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">Electrician SEO That Generates <span className="text-green-400">Consistent Leads</span></h1>
          <p className="text-xl text-[#d1d5db] leading-relaxed max-w-2xl mx-auto mb-10">Panel upgrades, EV charger installation, electrical repairs — we make sure licensed electricians in your market are what customers find. Not your competition.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">Get a Free Electrician SEO Audit</a>
        </div>
      </section>
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#0d0d14]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14"><h2 className="text-4xl font-bold tracking-tight mb-4">What&apos;s Costing <span className="text-red-400">Electricians Jobs Every Week</span></h2></div>
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
          <div className="text-center mb-14"><h2 className="text-4xl font-bold tracking-tight mb-4">What We Do for <span className="text-green-400">Electricians</span></h2></div>
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
          <p className="text-[#d1d5db] text-lg mb-8">Free electrician SEO audit. No obligation. We&apos;ll show you exactly who&apos;s ranking above you and what it would take to change that.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">Get My Free Electrician SEO Audit</a>
            <a href="/#services" className="inline-flex items-center justify-center px-8 py-4 border border-[#1e1e2e] text-white rounded-xl hover:border-green-500/40 transition-all">View Pricing</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
