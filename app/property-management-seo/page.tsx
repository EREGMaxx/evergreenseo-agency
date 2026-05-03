import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Property Management SEO | Get More Property Owner Clients From Google | Evergreen SEO",
  description: "Property management SEO that attracts landlords and property owners. Rank for property management searches in your city. Purpose-built for PM companies.",
};

const painPoints = [
  { title: "Landlords searching — your competitors answering", body: "Property owners searching \"property management company [city]\" have already decided to hire someone. They&apos;re just deciding who. If your competitors are in the top 3 and you&apos;re not, those landlords are signing with someone else while you wait for a referral." },
  { title: "Aggregators dominate the top spots", body: "All Property Management, Buildium directories, and other aggregators rank above most individual PM companies. You need a strategy designed to rank alongside or above these platforms — not a generic SEO approach that ignores them." },
  { title: "Targeting renters instead of owners is a waste of budget", body: "Most SEO agencies don&apos;t understand the difference between owner-intent and renter-intent searches. Ranking for \"apartments for rent\" won&apos;t get you new management contracts. We target the searches property owners make when looking for management services." },
];

const tactics = [
  { title: "Owner/landlord intent keyword targeting", body: "\"Property management company [city],\" \"how much does property management cost,\" \"property management fees [city],\" \"find a property manager\" — these are the searches your future clients use. Every page we build targets owner intent, not renter intent." },
  { title: "NARPM and IREM directory placements", body: "National Association of Residential Property Managers and Institute of Real Estate Management member directories. All Property Management listing optimization. Alignable, BiggerPockets, and Apartments.com professional directory placements." },
  { title: "Educational content that converts landlords", body: "Blog content targeting the questions landlords ask before hiring a PM company: cost breakdowns, what to look for, self-management vs. professional management, legal responsibilities. Ranking for these searches puts you in front of decision-makers at exactly the right moment." },
  { title: "GBP optimization for management searches", body: "Google Business Profile optimized specifically for property management category keywords. Posts, Q&A, and service descriptions targeting the searches landlords use. Review generation targeting property owner clients — not tenants." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  "name": "Property Management SEO Services",
  "provider": { "@type": "ProfessionalService", "name": "Evergreen SEO Agency", "url": "https://evergreenseo.agency" },
  "description": "Local SEO for property management companies. We rank PM companies for owner/landlord-intent searches to generate more management contracts.", "areaServed": "United States",
};

const breadcrumb = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://evergreenseo.agency" },
    { "@type": "ListItem", "position": 2, "name": "Property Management SEO", "item": "https://evergreenseo.agency/property-management-seo" },
  ],
};

export default function PropertyManagementSEOPage() {
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
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Property Management SEO
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">Property Management SEO That <span className="text-green-400">Attracts Property Owners</span></h1>
          <p className="text-xl text-[#d1d5db] leading-relaxed max-w-2xl mx-auto mb-10">Landlords searching for management services are your highest-value prospects. We make sure they find you — not your competitors — when they search.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">Get a Free Property Management SEO Audit</a>
        </div>
      </section>
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#0d0d14]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14"><h2 className="text-4xl font-bold tracking-tight mb-4">What&apos;s Costing <span className="text-red-400">PM Companies New Contracts</span></h2></div>
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
          <div className="text-center mb-14"><h2 className="text-4xl font-bold tracking-tight mb-4">What We Do for <span className="text-green-400">Property Management Companies</span></h2></div>
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
          <p className="text-[#d1d5db] text-lg mb-8">Free property management SEO audit. We&apos;ll show you exactly who&apos;s capturing landlord searches in your city and what it would take to compete. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">Get My Free PM SEO Audit</a>
            <a href="/#services" className="inline-flex items-center justify-center px-8 py-4 border border-[#1e1e2e] text-white rounded-xl hover:border-green-500/40 transition-all">View Pricing</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
