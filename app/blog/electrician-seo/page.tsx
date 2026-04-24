import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrician SEO: How to Rank #1 in Your Service Area | Evergreen SEO Agency",
  description:
    "A complete electrician SEO guide covering Google Business Profile optimization, local keyword targeting, on-page SEO, and link building to dominate your local market.",
  openGraph: {
    title: "Electrician SEO: How to Rank #1 in Your Service Area | Evergreen SEO Agency",
    description:
      "Complete electrician SEO guide: GBP optimization, keywords, on-page SEO, and link building to dominate your local market.",
    type: "article",
    url: "https://evergreenseoagency.com/blog/electrician-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician SEO: How to Rank #1 in Your Service Area | Evergreen SEO Agency",
    description:
      "Complete electrician SEO guide: GBP optimization, keywords, on-page SEO, and link building to dominate your local market.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Electrician SEO: How to Rank #1 in Your Service Area",
  description:
    "A complete electrician SEO guide covering Google Business Profile optimization, local keyword targeting, on-page SEO, and link building.",
  author: {
    "@type": "Organization",
    name: "Evergreen SEO Agency",
    url: "https://evergreenseoagency.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Evergreen SEO Agency",
    url: "https://evergreenseoagency.com",
  },
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://evergreenseoagency.com/blog/electrician-seo",
  },
};

export default function ElectricianSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="min-h-screen bg-[#050508]">
        {/* Sticky CTA Banner */}
        <div className="sticky top-0 z-50 bg-green-500/10 border-b border-green-500/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
            <p className="text-sm text-green-300 hidden sm:block">
              Electricians who rank on page 1 don&apos;t buy leads. Get there free.
            </p>
            <Link
              href="/#contact"
              className="ml-auto inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-400 transition-all duration-200 whitespace-nowrap"
            >
              Get Free SEO Audit
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Back nav */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-2">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#d1d5db] hover:text-white transition-colors text-sm">
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-6">
            Electrician SEO
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Electrician SEO: How to Rank #1 in Your Service Area
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#d1d5db] mb-10 pb-10 border-b border-[#1e1e2e]">
            <span>Evergreen SEO Agency</span>
            <span>·</span>
            <span>April 23, 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>

          <div className="prose-content text-[#cbd5e1] leading-relaxed space-y-8">

            <p className="text-lg text-[#e2e8f0] leading-relaxed">
              When a homeowner&apos;s panel trips or outlets stop working, the first thing they do is search Google. Electrician SEO is about making sure they find you — not your competitor — when that happens. This guide covers every layer of local SEO strategy that will get an electrician from invisible to page 1.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                The Electrician SEO Opportunity
              </h2>
              <p>
                Electrician is one of the most valuable local search categories because the jobs are high-ticket and the competition is surprisingly weak from an SEO perspective. Most electrical contractors are running their businesses well but have never invested in digital marketing. That means the opportunity window is still wide open in most markets.
              </p>
              <p className="mt-4">
                Google shows Local Pack results (the map with 3 business listings) at the top of results for nearly every local electrician search. These three spots capture more than 60% of all clicks. Below the map, organic results get the rest. If you&apos;re not in one of these positions, customers who are ready to book right now simply don&apos;t know you exist.
              </p>
              <p className="mt-4">
                The average electrician job ranges from $200 for small repairs to $15,000+ for panel upgrades, rewiring, or new construction. A single organic lead that converts is worth hundreds or thousands of dollars. The ROI math on electrician SEO is extremely favorable — often better than any other marketing channel available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Optimizing Your Google Business Profile as an Electrician
              </h2>
              <p>
                Your Google Business Profile (GBP) is the most critical element of electrician SEO. It controls your Local Pack visibility, how your business looks to potential customers, and how many actually call. Here&apos;s the complete checklist:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Primary category: Electrician. Secondary: Electrical Installation Service, Lighting Contractor, Generator Installation Service (as applicable)",
                  "Verify your listing if you haven't already — unverified profiles rank poorly or not at all",
                  "Business description: Lead with your primary keyword ('Licensed electrician serving [city] and surrounding areas') in the first sentence",
                  "Service area: List every city, suburb, and zip code you actively serve",
                  "Services: Individual entries for panel upgrades, outlet installation, rewiring, EV charger installation, generator hookup, lighting installation, etc.",
                  "Photos: Minimum 20 photos — team, vans, panel upgrades, permit cards, code compliance certificates",
                  "Respond to every review — Google sees engagement as a quality signal",
                  "Q&A: Pre-populate with 'Are you licensed and insured?', 'Do you pull permits?', 'Do you handle emergency electrical work?'",
                  "Google Posts: Monthly posts about services, seasonal tips (surge protectors before hurricane season, EV charger promotions)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                One thing electricians often overlook: licensing and insurance information in your GBP. Customers are particularly trust-sensitive when hiring an electrician because the work involves safety and permits. Prominently displaying your license number and insurance status — on GBP, on your website, and in your business description — dramatically increases trust and conversion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Electrician Keyword Strategy: What Customers Actually Search
              </h2>
              <p>
                The best electrician keywords combine a specific service with a geographic modifier. Here&apos;s the framework:
              </p>
              <div className="mt-4 space-y-5">
                <div>
                  <p className="font-semibold text-white">High-Value Service Keywords</p>
                  <p className="mt-1">&ldquo;Panel upgrade [city]&rdquo;, &ldquo;electrical panel replacement [city]&rdquo;, &ldquo;EV charger installation [city]&rdquo;, &ldquo;whole house rewiring [city]&rdquo;. These are high-ticket services worth dedicated pages. Panel upgrades alone average $1,500–$4,000 per job.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Emergency / Urgent Keywords</p>
                  <p className="mt-1">&ldquo;Emergency electrician [city]&rdquo;, &ldquo;electrician near me now&rdquo;, &ldquo;power outage electrician [city]&rdquo;. These convert immediately. If you offer emergency service, you need a dedicated page and GBP callout.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Residential vs. Commercial Keywords</p>
                  <p className="mt-1">Split your pages if you serve both: &ldquo;residential electrician [city]&rdquo; and &ldquo;commercial electrician [city]&rdquo; have different audiences, different intent signals, and different competitive landscapes.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Problem-Based Keywords</p>
                  <p className="mt-1">&ldquo;Breaker keeps tripping [city]&rdquo;, &ldquo;flickering lights [city]&rdquo;, &ldquo;outlets not working [city]&rdquo;. Homeowners often search by symptom, not service. Blog content targeting these searches captures early-funnel buyers before they even know they need an electrician.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                On-Page SEO for Electrician Service Pages
              </h2>
              <p>
                Every service you offer needs its own dedicated page. An electrician offering 8 services should have 8 service pages — not one generic &ldquo;Electrical Services&rdquo; page. Here&apos;s how to build each one:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Page title: [Service] in [City] | [Your Company] — under 60 characters",
                  "H1 tag: one per page, naturally includes your target keyword",
                  "Minimum 600 words of unique content per service page",
                  "Include your city and surrounding service areas naturally in the copy",
                  "Add LocalBusiness and Service schema markup",
                  "Display license number, insurance info, and years in business prominently",
                  "Photos of actual work completed — not stock photos",
                  "Customer testimonials specific to that service if possible",
                  "Clear CTA: phone number to call, form to submit, or text option",
                  "Internal links to related service pages (e.g., panel upgrade → rewiring → permits)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                NAP consistency is especially important for electricians because licensing databases, permit records, and contractor registries all publish your business information. Any mismatch between your website, GBP, and these external sources creates citation confusion that hurts your local rankings. Audit every directory listing and standardize every entry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Building Authority: Link Building and Citations for Electricians
              </h2>
              <p>
                Local citations and quality backlinks tell Google your business is legitimate, established, and locally relevant. Here&apos;s where to focus:
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-semibold text-white">Contractor License Databases</p>
                  <p className="mt-1">Your state contractor licensing board has a public directory. Make sure your listing is current, accurate, and links to your website. This is a high-authority local citation that also signals legitimacy to customers.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Trade Associations</p>
                  <p className="mt-1">NECA (National Electrical Contractors Association), IEC (Independent Electrical Contractors), and your local union if applicable. Member directories provide solid backlinks and trust signals.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Supplier and Manufacturer Pages</p>
                  <p className="mt-1">If you&apos;re a preferred installer for Leviton, Siemens, Square D, or Generac — get listed on their dealer finder pages. These are authoritative sites with strong domain ratings.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Local Business Directories</p>
                  <p className="mt-1">BBB, Yelp, Angi, HomeAdvisor, Houzz, Nextdoor, your local Chamber of Commerce. These foundational citations need to be complete and consistent with your GBP NAP.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Why EV Charger Installation Is a New SEO Gold Rush
              </h2>
              <p>
                EV charger installation searches are exploding. &ldquo;EV charger installation [city]&rdquo; is a high-value keyword — jobs average $800–$2,500 — and most electrician websites don&apos;t have a dedicated page for it yet. This is a first-mover opportunity in most markets. Create a dedicated EV charger installation service page now and rank before the competition catches up.
              </p>
              <p className="mt-4">
                The same logic applies to whole-home generators, solar panel hookups, and smart home wiring. Homeowners increasingly search these specific terms rather than just &ldquo;electrician near me.&rdquo; The electricians who build pages for these emerging services will own those keywords for years.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                12-Month Electrician SEO Timeline
              </h2>
              <div className="mt-4 space-y-4">
                {[
                  { period: "Month 1–2", result: "GBP fully optimized and verified, website audit completed, service pages built, citation cleanup started, review collection process launched." },
                  { period: "Month 3–4", result: "GBP views and search impressions increasing. Early rankings for longer-tail keywords. First new reviews rolling in from systematic follow-up." },
                  { period: "Month 5–6", result: "Page 1 rankings for lower-competition service + city keywords. Local Pack appearances becoming regular. First consistent organic calls." },
                  { period: "Month 7–9", result: "Solid Local Pack placement for primary city. Rankings expanding to surrounding suburbs. Organic is now generating meaningful call volume monthly." },
                  { period: "Month 10–12", result: "Dominant local presence. Multiple page 1 rankings. Organic leads costing a fraction of paid channels. Competitors starting to notice you." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <div className="text-green-400 font-bold text-sm w-28 flex-shrink-0 pt-0.5">{item.period}</div>
                    <div className="text-[#d1d5db] text-sm">{item.result}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 p-8 rounded-2xl bg-[#1c1c1c] border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Own Your Local Electrical Market
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                Electrician SEO isn&apos;t complicated — but it takes consistent, technical execution across GBP, website, citations, and reviews. The electricians who do it right compound their lead flow every month while competitors keep paying for shared leads.
              </p>
              <p className="text-[#cbd5e1] mb-8">
                Let us show you where your biggest opportunities are — no cost, no obligation.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Get your free electrician SEO audit
                <ArrowRight size={16} />
              </Link>
            </section>

            {/* Internal links */}
            <section className="mt-10 pt-10 border-t border-[#1e1e2e] space-y-4">
              <p className="text-sm font-semibold text-white">You might also like:</p>
              <Link href="/blog/plumbing-seo" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                How Plumbers Can Get More Calls from Google in 2026
              </Link>
              <Link href="/blog/general-contractor-seo" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                General Contractor SEO: The Complete Guide to Getting Found Online
              </Link>
              <Link href="/blog/google-business-profile-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                The Complete Google Business Profile Guide for Home Service Businesses
              </Link>
              <div className="pt-2">
                <Link href="/blog" className="inline-flex items-center gap-2 text-[#d1d5db] hover:text-white transition-colors text-sm">
                  <ArrowLeft size={14} />
                  View all articles
                </Link>
              </div>
            </section>

          </div>
        </article>
      </main>
    </>
  );
}
