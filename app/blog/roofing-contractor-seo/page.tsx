import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Contractor SEO Guide 2026 | Rank on Google | Evergreen SEO Agency",
  description:
    "How roofing contractors use SEO to get consistent leads from Google — not just storm season spikes. Complete guide from Evergreen SEO Agency.",
  openGraph: {
    title: "Roofing Contractor SEO Guide 2026 | Rank on Google | Evergreen SEO Agency",
    description:
      "How roofing contractors use SEO to get consistent leads from Google — not just storm season spikes. Complete guide from Evergreen SEO Agency.",
    type: "article",
    url: "https://evergreenseoagency.com/blog/roofing-contractor-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Contractor SEO Guide 2026 | Rank on Google | Evergreen SEO Agency",
    description:
      "How roofing contractors use SEO to get consistent leads from Google — not just storm season spikes. Complete guide from Evergreen SEO Agency.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Roofing Contractor's Complete Guide to Ranking on Google in 2026",
  description:
    "How roofing contractors use SEO to get consistent leads from Google — not just storm season spikes. Complete guide from Evergreen SEO Agency.",
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
    "@id": "https://evergreenseoagency.com/blog/roofing-contractor-seo",
  },
};

export default function RoofingContractorSeoPage() {
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
              Stop depending on storm season. Build leads that flow year-round.
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
            Roofing
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            The Roofing Contractor&apos;s Complete Guide to Ranking on Google in 2026
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#d1d5db] mb-10 pb-10 border-b border-[#1e1e2e]">
            <span>Evergreen SEO Agency</span>
            <span>·</span>
            <span>April 23, 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>

          {/* Body */}
          <div className="text-[#cbd5e1] leading-relaxed space-y-8">

            <p className="text-lg text-[#e2e8f0] leading-relaxed">
              Most roofing companies get leads one of two ways: storm season or word of mouth. Both are unpredictable. SEO for roofing contractors is the only channel that generates consistent, year-round inbound leads from homeowners and property managers who are actively searching for roofing services right now. This guide covers the exact strategy to make it happen in 2026 — from keywords to content to Google Business Profile to storm season tactics.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Why Roofing Companies Need SEO More Than Any Other Channel
              </h2>
              <p>
                Roofing is a high-ticket, high-urgency service. A new roof costs $8,000–$25,000. A homeowner who needs one is not casually browsing — they&apos;re searching with intent, comparing options quickly, and calling within minutes of finding a credible company. The problem is that Google Ads for roofing keywords cost $20–$80 per click in most markets. A single campaign can eat $5,000 per month before you&apos;ve booked a single job.
              </p>
              <p className="mt-4">
                Roofing contractor SEO solves this. A company ranking in the top 3 organic positions for &ldquo;roof replacement [city]&rdquo; gets clicks that cost nothing. Over 12 months, those rankings generate leads at a fraction of the cost of paid ads — and they keep generating after you stop actively investing.
              </p>
              <p className="mt-4">
                There&apos;s also a trust signal. When a homeowner sees you ranking organically and in the Local Pack with 150+ reviews, they assume you&apos;re the credible option before they&apos;ve even clicked your site. That&apos;s a conversion advantage that money alone can&apos;t buy.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Local vs. National Keywords: What Roofing Contractors Should Actually Target
              </h2>
              <p>
                One of the most common mistakes in roofing SEO is targeting keywords that are too broad to rank for. &ldquo;Roofing contractor&rdquo; alone has enormous competition from national directories and major aggregators. You won&apos;t rank for it — and even if you did, it converts poorly because it has no location intent.
              </p>
              <p className="mt-4">
                The right keyword strategy for roofing companies targets three layers:
              </p>
              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <p className="font-semibold text-white mb-1">Layer 1: City-Level Service Keywords</p>
                  <p className="text-sm text-[#d1d5db]">These are your highest-priority targets. &ldquo;Roof replacement [city]&rdquo;, &ldquo;roofing contractor [city]&rdquo;, &ldquo;roof repair [city]&rdquo;, &ldquo;storm damage roof repair [city]&rdquo;. One dedicated page per service per city.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <p className="font-semibold text-white mb-1">Layer 2: Suburb and Neighborhood Keywords</p>
                  <p className="text-sm text-[#d1d5db]">Lower competition, high conversion. Homeowners in suburbs often search for contractors in their specific area. &ldquo;Roofing company in [suburb]&rdquo; searches convert at high rates because the searcher wants local. Build location pages for every suburb you serve.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <p className="font-semibold text-white mb-1">Layer 3: Material and Service-Specific Keywords</p>
                  <p className="text-sm text-[#d1d5db]">Homeowners researching specific roofing types: &ldquo;metal roof installation [city]&rdquo;, &ldquo;asphalt shingle replacement&rdquo;, &ldquo;flat roof repair&rdquo;, &ldquo;TPO roofing contractor&rdquo;. These have lower volume but near-zero competition and attract highly qualified buyers.</p>
                </div>
              </div>
              <p className="mt-4">
                National directory sites like HomeAdvisor, Angi, and Thumbtack dominate broad terms. Your advantage as a local contractor is geographic specificity. The more precisely you target your actual service area, the less competition you face and the higher your conversion rate.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Google Business Profile for Roofing Contractors: Dominate the Local Pack
              </h2>
              <p>
                The Google Local Pack — the map section that appears at the top of search results for local service queries — receives more clicks than organic results for roofing searches. Getting into that box is the fastest path to more inbound calls.
              </p>
              <p className="mt-4">
                Here&apos;s how to fully optimize your GBP for roofing:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Primary category: Roofing Contractor. Secondary: Roofing Supply Store (if applicable), Gutter Cleaning Service, Siding Contractor",
                  "Business description: Lead with your primary keyword in the first sentence. 'We are [City]'s trusted roofing contractor...' Include top services and service area.",
                  "Services: List every service individually — asphalt shingles, metal roofing, flat roofing, TPO/EPDM, gutters, siding, storm damage, insurance claims",
                  "Photos: 30+ minimum. Job site before/after photos outperform stock images. Add new photos monthly.",
                  "Reviews: This is your #1 ranking lever. 100+ reviews averaging 4.7+ dramatically increases Local Pack placement. Build a review request into your post-job workflow.",
                  "Posts: Publish updates 2x per month — seasonal tips, project completions, storm alerts in your area",
                  "Q&A: Pre-fill with questions like 'Do you work with insurance?' and 'How long does a roof replacement take?' — and answer them yourself",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                One thing most roofing contractors overlook: GBP attributes. Make sure you&apos;ve checked every relevant attribute — &ldquo;Free estimates&rdquo;, &ldquo;On-site services&rdquo;, &ldquo;Identifies as veteran-owned&rdquo; (if applicable). These filter prominently in local searches and influence click-through rates.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Content Strategy for Roofing Companies: Build Authority, Generate Leads
              </h2>
              <p>
                Content is how you build topical authority — Google&apos;s measure of how comprehensively a site covers a subject. A roofing website that has a deep content library about roofing is more likely to rank for roofing searches than one with five thin service pages.
              </p>
              <p className="mt-4">
                Your content strategy should work in two layers:
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-semibold text-white">Service Pages (Commercial Intent — Priority 1)</p>
                  <p className="mt-1">Every service gets its own page. Asphalt shingle roofing, metal roofing, flat roof systems, storm damage repair, insurance claim assistance, gutters, siding. Each page should be 600–1,200 words, include your city and service area, explain the service clearly, and have a strong CTA. These pages make you money.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Blog Content (Informational Intent — Priority 2)</p>
                  <p className="mt-1">Blog posts targeting questions homeowners ask before hiring: &ldquo;How much does a roof replacement cost in [city]?&rdquo;, &ldquo;How to tell if you need a new roof vs. a repair&rdquo;, &ldquo;Metal roof vs. asphalt shingles: which is better?&rdquo;, &ldquo;How does the insurance claims process work for storm damage?&rdquo; These attract people early in their research process and build trust before they&apos;re ready to hire.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Location Pages (Geographic Intent — Priority 3)</p>
                  <p className="mt-1">Individual pages for each city and suburb you serve. Not just swapping a city name into a template — genuinely localized content referencing the area, local weather patterns, common roofing issues in that market. Google can tell the difference.</p>
                </div>
              </div>
              <p className="mt-4">
                Post new content at minimum once per month. Consistency signals to Google that your site is active and authoritative. A blog post published in January that ranks by March can generate leads for years with zero additional investment.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Link Building for Roofing Contractors: Earning the Authority to Rank
              </h2>
              <p>
                Links from other websites to yours tell Google that your site is trustworthy and authoritative. For roofing contractor SEO, you don&apos;t need links from Forbes — you need links from locally relevant and industry-specific sources.
              </p>
              <p className="mt-4">
                The most effective tactics for roofing companies:
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-semibold text-white">Manufacturer Certification Directories</p>
                  <p className="mt-1">GAF Master Elite, Owens Corning Preferred Contractor, CertainTeed SELECT ShingleMaster, and similar certifications all come with contractor directory listings that include links to your site. These are high-trust links that also convert — homeowners actively search for certified contractors.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Local Business Directories</p>
                  <p className="mt-1">Beyond the basic citations (Google, Yelp, BBB), make sure you&apos;re listed on NRCA (National Roofing Contractors Association), your state roofing association, and your local Chamber of Commerce. These are authoritative links that reinforce your local relevance.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Community Partnerships and Sponsorships</p>
                  <p className="mt-1">Sponsor a local event, youth sports team, or community organization. Most will feature you on their website with a link. One link from a local news site or community organization is worth more than 100 links from generic directories.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Insurance Agent and Real Estate Partnerships</p>
                  <p className="mt-1">Insurance agents and real estate agents refer roofing contractors constantly. Build relationships and ask to be listed on their websites as a preferred contractor. These links are both authoritative and generate direct referral business.</p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Storm Season SEO Strategy: How to Capitalize Without Chasing Chaos
              </h2>
              <p>
                Storm season is when roofing companies make the most money — but most companies only react to storms instead of preparing for them. The roofing contractors who dominate post-storm markets are the ones who had their SEO infrastructure in place before the hail fell.
              </p>
              <p className="mt-4">
                Here&apos;s the storm season SEO playbook:
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <div className="text-green-400 font-bold text-sm w-36 flex-shrink-0 pt-0.5">Before Storm Season</div>
                  <div className="text-[#d1d5db] text-sm">Create a dedicated &ldquo;storm damage roof repair&rdquo; service page for each major city you serve. Optimize it now so it has domain authority before the season hits. Build your GBP reviews up to 100+. Set up a call tracking number to handle volume spikes.</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <div className="text-green-400 font-bold text-sm w-36 flex-shrink-0 pt-0.5">When a Storm Hits</div>
                  <div className="text-[#d1d5db] text-sm">Publish a GBP post within 24 hours referencing the specific storm event. Update your storm damage page with content about the specific weather event — hail size, affected neighborhoods. Search volume for storm-specific terms spikes immediately and competitors who move first capture it.</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <div className="text-green-400 font-bold text-sm w-36 flex-shrink-0 pt-0.5">After Storm Season</div>
                  <div className="text-[#d1d5db] text-sm">Publish case study content from jobs you completed. Photos, testimonials, insurance claim success stories. This builds authority for the next season and captures homeowners still dealing with delayed claims. Never let your content go dark when the storm season quiets — your competitors will fill the gap.</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <div className="text-green-400 font-bold text-sm w-36 flex-shrink-0 pt-0.5">Year-Round</div>
                  <div className="text-[#d1d5db] text-sm">Consistent content about maintenance, inspection, and longevity topics keeps your site generating leads when there&apos;s no storm. &ldquo;Annual roof inspection&rdquo;, &ldquo;how long does a roof last&rdquo;, &ldquo;roof maintenance checklist&rdquo; — these searches happen every month, not just after bad weather.</div>
                </div>
              </div>
              <p className="mt-4">
                The goal is to be the dominant roofing brand in your market year-round, not just the company that shows up when disaster strikes. Companies with established SEO authority before a storm get 3–5x the leads of competitors scrambling to rank after the fact.
              </p>
            </section>

            {/* Conclusion / CTA */}
            <section className="mt-12 p-8 rounded-2xl bg-[#1c1c1c] border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Stop Waiting for the Next Storm
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                Roofing contractor SEO is the only lead generation channel that builds on itself. Every piece of content you publish, every link you earn, every review you collect makes the next lead cheaper and easier to capture. The roofing companies that will dominate their markets in 2026 and beyond aren&apos;t the biggest or the oldest — they&apos;re the ones who started building their SEO foundation first.
              </p>
              <p className="text-[#cbd5e1] mb-8">
                We work exclusively with local service contractors. We know the roofing market, we know the keywords, and we know what it takes to rank in your specific geography. Let&apos;s find out where you stand.
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
