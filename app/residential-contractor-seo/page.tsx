import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Residential Contractor SEO | Get More Remodeling Jobs From Google | Evergreen SEO",
  description: "SEO for residential contractors and remodelers. Rank for kitchen remodel, bathroom renovation, and home addition searches in your city.",
};

const painPoints = [
  { title: "Remodeling customers research before they call", body: "Homeowners considering a kitchen remodel or home addition spend weeks researching before making a call. If you're not visible during that research phase — blog content, service pages, map pack presence — you don't make the consideration set. You can't win a call you never get." },
  { title: "Project-based revenue demands consistent pipeline", body: "One slow month in a project-based business costs real money. Without consistent inbound from search, you're dependent on referrals that come inconsistently. SEO builds a pipeline that works whether or not someone refers you this week." },
  { title: "Kitchen and bathroom remodel keywords are competitive", body: "\"Kitchen remodel [city]\" and \"bathroom renovation [city]\" are among the most competitive home service keywords in most markets. Getting into the top 3 takes a real strategy — not just a website and a prayer." },
];

const tactics = [
  { title: "Project-type service pages for every offering", body: "Kitchen remodels, bathroom renovations, home additions, basement finishing, deck builds, whole-home remodels — each gets a dedicated page targeting the exact search terms homeowners use when they decide to start a project." },
  { title: "Research-phase content strategy", body: "Blog content targeting the questions homeowners ask before hiring a contractor: cost guides, timeline expectations, how to choose a contractor, design inspiration. Ranking for these searches means being in front of customers during the decision-making process." },
  { title: "NAHB and NARI directory placements", body: "National Association of Home Builders, National Association of the Remodeling Industry, and Certified Graduate Remodeler directories. ProReferral (Home Depot) and Lowe's ProServices contractor networks. Industry-specific placements that generalist agencies don't know exist." },
  { title: "Before/after and project portfolio optimization", body: "Before/after content is the highest-converting content type for remodeling contractors. We help structure it to rank for project-specific searches — not just showcase work, but actively drive qualified traffic from homeowners looking for exactly what you do." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  "name": "Residential Contractor SEO Services",
  "provider": { "@type": "ProfessionalService", "name": "Evergreen SEO Agency", "url": "https://evergreenseo.agency" },
  "description": "Local SEO for residential contractors and remodelers. We rank contractors for kitchen, bathroom, and home addition searches.", "areaServed": "United States",
};

const breadcrumb = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://evergreenseo.agency" },
    { "@type": "ListItem", "position": 2, "name": "Residential Contractor SEO", "item": "https://evergreenseo.agency/residential-contractor-seo" },
  ],
};

export default function ResidentialContractorSEOPage() {
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
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Residential Contractor SEO
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">Residential Contractor SEO That <span className="text-green-400">Wins Remodeling Jobs</span></h1>
          <p className="text-xl text-[#d1d5db] leading-relaxed max-w-2xl mx-auto mb-10">Kitchen remodels, bathroom renovations, home additions — we make sure homeowners in your market find you during the research phase, not after they&apos;ve already called someone else.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">Get a Free Contractor SEO Audit</a>
        </div>
      </section>
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#0d0d14]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14"><h2 className="text-4xl font-bold tracking-tight mb-4">What&apos;s Keeping <span className="text-red-400">Contractors Off Page 1</span></h2></div>
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
          <div className="text-center mb-14"><h2 className="text-4xl font-bold tracking-tight mb-4">What We Do for <span className="text-green-400">Residential Contractors</span></h2></div>
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
          <p className="text-[#d1d5db] text-lg mb-8">Free contractor SEO audit. We&apos;ll show you who&apos;s capturing the remodeling searches in your area and what it would take to compete. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all shadow-lg shadow-green-500/25">Get My Free Contractor SEO Audit</a>
            <a href="/#services" className="inline-flex items-center justify-center px-8 py-4 border border-[#1e1e2e] text-white rounded-xl hover:border-green-500/40 transition-all">View Pricing</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
