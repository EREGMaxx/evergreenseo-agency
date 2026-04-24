import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC SEO Guide 2026: How to Get More Leads from Google | Evergreen SEO Agency",
  description:
    "Learn how HVAC companies use local SEO to dominate Google search and generate consistent inbound leads. Complete 2026 guide from Evergreen SEO Agency.",
  openGraph: {
    title: "HVAC SEO Guide 2026: How to Get More Leads from Google | Evergreen SEO Agency",
    description:
      "Learn how HVAC companies use local SEO to dominate Google search and generate consistent inbound leads. Complete 2026 guide from Evergreen SEO Agency.",
    type: "article",
    url: "https://evergreenseoagency.com/blog/hvac-seo-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC SEO Guide 2026: How to Get More Leads from Google | Evergreen SEO Agency",
    description:
      "Learn how HVAC companies use local SEO to dominate Google search and generate consistent inbound leads. Complete 2026 guide from Evergreen SEO Agency.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How HVAC Companies Can Double Their Leads with Local SEO in 2026",
  description:
    "Learn how HVAC companies use local SEO to dominate Google search and generate consistent inbound leads. Complete 2026 guide from Evergreen SEO Agency.",
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
    "@id": "https://evergreenseoagency.com/blog/hvac-seo-guide",
  },
};

export default function HvacSeoGuidePage() {
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
              Is your HVAC company invisible on Google? We can fix that.
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
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#d1d5db] hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </div>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
          {/* Category */}
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-6">
            HVAC
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            How HVAC Companies Can Double Their Leads with Local SEO in 2026
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#d1d5db] mb-10 pb-10 border-b border-[#1e1e2e]">
            <span>Evergreen SEO Agency</span>
            <span>·</span>
            <span>April 23, 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          {/* Body */}
          <div className="prose-content text-[#cbd5e1] leading-relaxed space-y-8">

            <p className="text-lg text-[#e2e8f0] leading-relaxed">
              If your HVAC company is relying on paid ads to bring in every lead, you&apos;re playing on hard mode. Google Ads costs for HVAC keywords have climbed past $20–$50 per click in most markets. The moment you stop paying, the leads stop. Local SEO is the opposite — you build it once, maintain it consistently, and it compounds over time. This guide covers exactly how to do it in 2026.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Why Local SEO Is the #1 Growth Channel for HVAC Companies
              </h2>
              <p>
                When a homeowner&apos;s AC breaks in July, they&apos;re not browsing Facebook. They&apos;re typing &ldquo;AC repair near me&rdquo; into Google and calling the first three results they see. Those first three results in the Local Pack — the map section at the top of the page — capture more than 60% of all clicks for local service searches. If you&apos;re not in that box, you&apos;re invisible to the majority of buyers who are ready to hire right now.
              </p>
              <p className="mt-4">
                HVAC is one of the highest-intent local search categories that exists. People searching for HVAC services aren&apos;t window shopping — they need help now. That&apos;s why ranking organically for HVAC SEO terms delivers leads with conversion rates that routinely beat every other channel. A top-3 organic ranking in a mid-size metro can generate 10–30 inbound calls per month without a single dollar of ad spend.
              </p>
              <p className="mt-4">
                The businesses that crack this early build an unfair advantage. Every month you rank on page 1 is another month a competitor doesn&apos;t.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Google Business Profile Optimization: Your Most Powerful Asset
              </h2>
              <p>
                Your Google Business Profile (GBP) is the single most important piece of your local SEO strategy. It controls whether you show up in the Local Pack, how you look when you do, and how many people actually call you. Most HVAC companies fill it out halfway and move on. That&apos;s a mistake.
              </p>
              <p className="mt-4">
                Here&apos;s what a fully optimized GBP looks like for an HVAC company:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Business name exactly matches your real-world name — no keyword stuffing",
                  "Primary category: HVAC Contractor. Secondary categories: Air Conditioning Contractor, Heating Contractor, Furnace Repair Service",
                  "Service area set to every city and zip code you actually serve",
                  "Phone number is a local area code, not a toll-free number",
                  "Business description uses your target keywords naturally in the first 250 characters",
                  "Services section filled out completely with individual service listings (AC repair, furnace install, heat pump service, duct cleaning, etc.)",
                  "Photos: minimum 25 — trucks, team, before/after jobs, office if applicable",
                  "Q&A section pre-populated with 10–15 questions you answer yourself",
                  "Google Posts published at least twice per month",
                  "Reviews: actively solicited after every completed job",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Reviews deserve special attention. Google&apos;s algorithm uses review volume and recency as a local ranking signal. A company with 200 reviews averaging 4.8 stars will almost always outrank a company with 30 reviews. Build a simple follow-up system — text your customers a direct review link the same day the job closes. Aim for at least 5 new reviews per month.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Keyword Targeting for HVAC Services: What to Rank For
              </h2>
              <p>
                Not all keywords are created equal. For HVAC SEO, you want to prioritize high-intent, commercial keywords — the searches made by people who are ready to spend money.
              </p>
              <p className="mt-4">
                Here&apos;s how to break down your keyword strategy:
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-semibold text-white">Tier 1 — High-Intent Service Keywords</p>
                  <p className="mt-1">These are your money keywords. Examples: &ldquo;AC repair [city]&rdquo;, &ldquo;furnace replacement [city]&rdquo;, &ldquo;HVAC company near me&rdquo;, &ldquo;emergency AC repair [city]&rdquo;. Each of these gets a dedicated service page on your website.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Tier 2 — Neighborhood and Suburb Keywords</p>
                  <p className="mt-1">If you serve multiple cities, you need location pages for each one. &ldquo;HVAC repair in [suburb]&rdquo; searches have lower volume but much lower competition. A company with 15 location pages can rank for 15 markets simultaneously.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Tier 3 — Informational Keywords</p>
                  <p className="mt-1">Blog content targeting questions like &ldquo;how long does an AC unit last&rdquo; or &ldquo;what SEER rating do I need&rdquo; builds topical authority and captures early-funnel searchers who will need service eventually. This is secondary — don&apos;t prioritize it over your service pages.</p>
                </div>
              </div>
              <p className="mt-4">
                Use free tools like Google&apos;s Keyword Planner or Ubersuggest to find the exact monthly search volumes for your market. A keyword doing 200 searches/month in your city is worth more than a national keyword doing 10,000 searches you can&apos;t rank for.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                On-Page SEO for HVAC Service Pages: The Technical Stuff That Matters
              </h2>
              <p>
                Every service you offer should have its own page. AC repair, furnace installation, heat pump service, duct cleaning — each one is a separate keyword opportunity. Lumping them all onto one &ldquo;Services&rdquo; page wastes that opportunity.
              </p>
              <p className="mt-4">
                For each service page, make sure you have:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Title tag: [Service] in [City] | [Your Company Name] (under 60 characters)",
                  "Meta description: 150–160 characters, include the service and city, write it like ad copy",
                  "H1: One per page, includes your target keyword naturally",
                  "Content: Minimum 500 words per service page. Describe the service, your process, what to expect, pricing transparency if possible",
                  "Local signals: Mention the city and service area naturally throughout the copy",
                  "Schema markup: LocalBusiness schema with your NAP (name, address, phone) and Service schema",
                  "Internal links: Link from service pages to related pages (e.g., AC repair → AC installation)",
                  "Page speed: Under 3 seconds load time on mobile. Use Google PageSpeed Insights to check",
                  "Mobile optimization: 70%+ of local service searches happen on phones",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                One detail most HVAC websites get wrong: NAP consistency. Your business name, address, and phone number must be identical across your website, GBP, and every online directory. Even small inconsistencies (St. vs Street, Suite vs Ste) can dilute your local ranking signals. Audit your citations with a tool like BrightLocal or Whitespark and fix any mismatches.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Link Building for HVAC Companies: How to Earn Authority
              </h2>
              <p>
                Links from other websites to yours are one of Google&apos;s strongest ranking signals. For local HVAC SEO, you don&apos;t need links from national publications — you need links from locally relevant, trusted sources.
              </p>
              <p className="mt-4">
                The most effective link building strategies for HVAC companies:
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-semibold text-white">Local Citations</p>
                  <p className="mt-1">Get listed on the top 50 local directories: Google, Yelp, Angi, HomeAdvisor, Houzz, BBB, Thumbtack, and your local Chamber of Commerce. These are foundational citations that every HVAC company needs.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Supplier and Partner Links</p>
                  <p className="mt-1">Manufacturers you&apos;re certified with (Trane, Carrier, Lennox, etc.) often have dealer finder pages with links to certified contractors. Get listed. Suppliers and distributors sometimes have partner pages too.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Local Media and Community Links</p>
                  <p className="mt-1">Sponsor a Little League team. Partner with a local charity. Write a guest column for a local home improvement blog or newspaper. Community involvement generates real, high-value local links that are hard to replicate.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">HVAC Industry Associations</p>
                  <p className="mt-1">ACCA, ASHRAE, RSES, and your state contractor association all have member directories with links. Join the ones relevant to your market. The links are solid and the credibility signal matters.</p>
                </div>
              </div>
              <p className="mt-4">
                Avoid buying links or using link networks. Google&apos;s algorithm is sophisticated enough to detect manipulative link patterns, and a penalty will set you back months. Slow, legitimate link building beats shortcuts every time.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                What Results to Expect — and When
              </h2>
              <p>
                Local SEO is not a sprint. It&apos;s a compound investment. Here&apos;s a realistic timeline for what you can expect when done right:
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { period: "Month 1–2", result: "Foundation work: GBP fully optimized, site audit completed, on-page issues fixed, citation building underway. No ranking movement yet — you&apos;re planting seeds." },
                  { period: "Month 3–4", result: "GBP starts getting more views and clicks. You may see ranking movement for lower-competition long-tail keywords. Review strategy begins generating new reviews." },
                  { period: "Month 5–6", result: "First page 1 rankings for lower-competition terms. Local Pack appearances starting to show up. Inbound calls from organic start to trickle in." },
                  { period: "Month 7–12", result: "Steady page 1 rankings across multiple service keywords. Local Pack placement in your primary city. 10–30+ organic leads per month depending on market size. ROI becomes obvious." },
                  { period: "Month 12+", result: "Compounding results. Rankings stabilize and expand to surrounding cities. Organic becomes your lowest-cost and highest-volume lead channel. Competitors start wondering what you&apos;re doing differently." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <div className="text-green-400 font-bold text-sm w-28 flex-shrink-0 pt-0.5">{item.period}</div>
                    <div className="text-[#d1d5db] text-sm">{item.result}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6">
                The companies that see the best results start before they need them. If you wait until your ad spend becomes unsustainable, you&apos;re already 6–12 months behind where you need to be. The right time to start your HVAC SEO strategy is now.
              </p>
            </section>

            {/* Conclusion / CTA */}
            <section className="mt-12 p-8 rounded-2xl bg-[#1c1c1c] border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                The Bottom Line
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                Local SEO for HVAC companies is one of the highest-ROI marketing investments available. Done right, it builds a lead pipeline that pays you back every single month without requiring ongoing ad spend. The strategy isn&apos;t complicated — but the execution has to be consistent, technical, and specific to how Google ranks local service businesses in 2026.
              </p>
              <p className="text-[#cbd5e1] mb-8">
                If you want to know exactly where your HVAC company stands and what it would take to rank in your market, we&apos;ll show you for free.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Ready to start ranking? Get your free SEO audit.
                <ArrowRight size={16} />
              </Link>
            </section>

          </div>
        </article>
      </main>
    </>
  );
}
