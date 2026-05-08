import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping SEO: How to Get More Clients from Google in 2026 | Evergreen SEO Agency",
  description:
    "Learn how landscaping and lawn care companies use local SEO to rank on Google, fill their schedule, and stop depending on referrals. Complete 2026 guide from Evergreen SEO Agency.",
  openGraph: {
    title: "Landscaping SEO: How to Get More Clients from Google in 2026 | Evergreen SEO Agency",
    description:
      "Learn how landscaping and lawn care companies use local SEO to rank on Google, fill their schedule, and stop depending on referrals. Complete 2026 guide from Evergreen SEO Agency.",
    type: "article",
    url: "https://evergreenseo.agency/blog/landscaping-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping SEO: How to Get More Clients from Google in 2026 | Evergreen SEO Agency",
    description:
      "Learn how landscaping and lawn care companies use local SEO to rank on Google, fill their schedule, and stop depending on referrals. Complete 2026 guide from Evergreen SEO Agency.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Landscaping SEO: How to Get More Clients from Google in 2026",
  description:
    "Learn how landscaping and lawn care companies use local SEO to rank on Google, fill their schedule, and stop depending on referrals. Complete 2026 guide from Evergreen SEO Agency.",
  author: {
    "@type": "Organization",
    name: "Evergreen SEO Agency",
    url: "https://evergreenseo.agency",
  },
  publisher: {
    "@type": "Organization",
    name: "Evergreen SEO Agency",
    url: "https://evergreenseo.agency",
  },
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://evergreenseo.agency/blog/landscaping-seo",
  },
};

export default function LandscapingSeoPage() {
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
              Is your landscaping business missing out on Google leads? We can fix that.
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
            Landscaping
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Landscaping SEO: How to Get More Clients from Google in 2026
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#d1d5db] mb-10 pb-10 border-b border-[#1e1e2e]">
            <span>Evergreen SEO Agency</span>
            <span>·</span>
            <span>May 8, 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          {/* Body */}
          <div className="prose-content text-[#cbd5e1] leading-relaxed space-y-8">

            <p className="text-lg text-[#e2e8f0] leading-relaxed">
              Most landscaping and lawn care businesses are built on referrals. A good job leads to a neighbor asking for a card, which leads to another job. That model works — until it doesn&apos;t. Referrals are unpredictable, they slow down in the off-season, and you have no control over the volume. Local SEO is the system that turns Google into a referral engine that runs 24 hours a day, seven days a week, all year long.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Why Landscaping Companies Win Big with Local SEO
              </h2>
              <p>
                Homeowners searching for a landscaper aren&apos;t casually browsing — they have a real project in mind. Overgrown lawn, a spring cleanup they&apos;ve been putting off, a full backyard redesign they&apos;ve been saving for. When they type &ldquo;landscaping company near me&rdquo; or &ldquo;lawn care service [city]&rdquo; into Google, they&apos;re ready to get quotes. The businesses that show up at the top of those searches get the call. The ones buried on page 2 don&apos;t.
              </p>
              <p className="mt-4">
                Here&apos;s what makes landscaping SEO particularly powerful: the competition hasn&apos;t caught up yet. Unlike HVAC or roofing — where multiple well-funded companies are already investing in SEO — most local landscaping businesses still rely entirely on referrals, door hangers, and yard signs. That means less competition for page 1 rankings, lower barrier to entry, and faster results for the companies willing to invest now.
              </p>
              <p className="mt-4">
                A landscaping company that ranks in the top three of the Local Pack for &ldquo;lawn care [city]&rdquo; in a market of 200,000 people can realistically generate 20–50 new inbound quote requests per month from organic search alone. At an average job value of $1,500–$5,000 for landscape design and installation, or $150–$400/month for recurring lawn maintenance contracts, that kind of lead volume changes the entire growth trajectory of the business.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Google Business Profile: The Foundation of Your Landscaping SEO
              </h2>
              <p>
                Before you touch your website, lock down your Google Business Profile. It&apos;s the most visible piece of real estate you own on Google — it shows up before your website in search results, anchors your Local Pack placement, and drives direct calls from mobile searchers. Most landscapers have a GBP that&apos;s half-filled-out and never updated. That&apos;s the gap you need to close.
              </p>
              <p className="mt-4">
                A fully optimized GBP for a landscaping company looks like this:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Primary category: Landscaper. Add secondary categories: Lawn Care Service, Tree Service, Irrigation System Contractor, Garden Center (if applicable)",
                  "Business description: Lead with your strongest service and primary city in the first sentence. Use keywords naturally — don't stuff",
                  "Service area: Add every city, town, and suburb you actively serve",
                  "Services section: List every individual service — lawn mowing, fertilization, aeration, overseeding, landscape design, hardscaping, irrigation, snow removal, leaf cleanup, etc.",
                  "Attributes: Mark yourself as veteran-owned, women-owned, or locally owned/operated if applicable — these matter to search algorithms and customers",
                  "Photos: Upload 30+ images. Job before-and-afters are gold. Include equipment, crew, finished projects, and your service vehicles",
                  "Google Posts: Post seasonal promotions, tips, and completed project spotlights at least twice per month",
                  "Reviews: Aim for a minimum of 50 reviews with a 4.7+ average. Build a post-job text sequence that makes leaving a review effortless",
                  "Q&A: Pre-populate 10–15 questions you answer yourself before customers ask them",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Landscaping has a visual advantage that most trades don&apos;t — your work is photogenic. A stunning before-and-after of a backyard transformation is more compelling than almost any ad copy. Use that. Companies that upload high-quality project photos consistently see measurably higher engagement on their GBP listings.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Keyword Strategy: What Landscaping Clients Are Actually Searching For
              </h2>
              <p>
                The biggest mistake landscaping businesses make with SEO is targeting keywords that are too broad — or worse, keywords their customers don&apos;t actually use. Here&apos;s a practical framework for building your landscaping keyword strategy.
              </p>
              <div className="mt-4 space-y-6">
                <div>
                  <p className="font-semibold text-white">Tier 1 — High-Intent Service Keywords</p>
                  <p className="mt-1">These are the searches made by people ready to hire. Build a dedicated page for each one:</p>
                  <ul className="mt-2 space-y-1 list-none">
                    {[
                      '"landscaping company [city]"',
                      '"lawn care service near me"',
                      '"landscape design [city]"',
                      '"lawn mowing service [city]"',
                      '"hardscaping contractor [city]"',
                      '"sod installation [city]"',
                      '"irrigation system installation [city]"',
                      '"fall cleanup / spring cleanup [city]"',
                    ].map((kw, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-400/60 flex-shrink-0" />
                        <span className="text-[#d1d5db]">{kw}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-white">Tier 2 — City and Neighborhood Location Pages</p>
                  <p className="mt-1">If you serve a metro area with multiple suburbs, you need individual location pages for each one. &ldquo;Lawn care in Naperville&rdquo; competes in a much smaller pool than &ldquo;lawn care in Chicago.&rdquo; Build location pages for your top 5–10 service areas first, then expand. Each page should have unique content describing the area, local climate considerations, and specific services you offer there.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Tier 3 — Seasonal and Informational Content</p>
                  <p className="mt-1">Blog posts targeting questions like &ldquo;when should I aerate my lawn&rdquo; or &ldquo;best grass seed for [your region]&rdquo; build topical authority and attract homeowners who are in research mode before they hire. This type of content also earns backlinks naturally — local media, HOA newsletters, and home improvement blogs link to genuinely helpful guides.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                On-Page SEO for Landscaping Websites: What to Get Right
              </h2>
              <p>
                Your website needs to do two things well: tell Google exactly what you do and where you do it, and convince homeowners to call you when they land on it. Most landscaping websites fail at both.
              </p>
              <p className="mt-4">
                Here&apos;s what every service page needs to rank and convert:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Title tag: Include the service and city. 'Lawn Care Service in [City] | [Company Name]' — keep it under 60 characters",
                  "H1: One per page, matches the search intent exactly. 'Professional Lawn Care in [City]' works. 'Welcome to Our Site' does not",
                  "Meta description: Write it like a Google ad. Mention the service, the city, and what makes you different. Include a call to action",
                  "Content depth: Minimum 600 words per service page. Explain your process, what the customer can expect, your service area, and why you're the right choice",
                  "Trust signals: License numbers, insurance details, years in business, certifications (ISA Arborist, NALP, etc.) all improve conversion and credibility",
                  "Photos: Original photos of your actual work outperform stock images in every test. Show real jobs from your real market",
                  "Schema markup: LocalBusiness schema with your NAP details and Service schema for each service page",
                  "Click-to-call: Every page should have a prominent phone number that's tappable on mobile — this is where your landscaping leads actually convert",
                  "Clear CTA: 'Get a Free Quote,' 'Schedule Your Estimate,' 'Call Now' — one clear action per page, not three competing ones",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Page speed and mobile performance aren&apos;t optional. Over 75% of local service searches happen on smartphones. If your site takes more than three seconds to load on a phone, you&apos;re losing leads before they even see your content. Use Google&apos;s PageSpeed Insights to identify your specific issues — image compression and eliminating render-blocking scripts fix most of the problem in most cases.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Getting Reviews at Scale: The Landscaping Advantage
              </h2>
              <p>
                Landscaping businesses have a natural advantage when it comes to reviews: you&apos;re in front of clients regularly. A lawn maintenance company visits the same customers weekly or bi-weekly. That&apos;s dozens of touchpoints per year where a satisfied customer could leave a review — if you build a system to ask.
              </p>
              <p className="mt-4">
                Reviews matter for two separate reasons. First, they&apos;re a direct ranking factor in Google&apos;s Local Pack algorithm — volume, recency, and average rating all contribute to where you appear in map results. Second, they convert visitors into callers. A company with 120 four-point-eight-star reviews will get dramatically more calls from the same ranking position than a company with 12 reviews.
              </p>
              <p className="mt-4">
                The simplest review system that actually works:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Send a text message within 2 hours of completing a job — the satisfaction is highest right after the work looks its best",
                  "Use a direct review link: g.page/r/[your-place-id]/review — zero friction, one tap to the review form",
                  "Keep the ask personal: 'We just finished up at your place — if everything looked great, we'd really appreciate a quick Google review. Here's the link: [url]'",
                  "For recurring clients, ask after seasonal transitions — spring cleanup, fall prep — when the transformation is most visible",
                  "Respond to every review, positive and negative. It signals to Google that you're an active, engaged business",
                  "Track your review count monthly. Set a goal of 5–10 new reviews per month and adjust your ask cadence to hit it",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Link Building for Landscaping Companies: Building Local Authority
              </h2>
              <p>
                Backlinks — other websites linking to yours — remain one of Google&apos;s strongest ranking signals. For local landscaping SEO, you don&apos;t need links from national publications. You need links from locally trusted sources that signal to Google you&apos;re a real, established business in your community.
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-semibold text-white">Industry Directories and Citations</p>
                  <p className="mt-1">Start with the foundational citations: Google Business Profile, Yelp, Angi, Thumbtack, Houzz, HomeAdvisor, and the Better Business Bureau. Then add industry-specific directories: LawnStarter, GreenPal, LawnGuru, and the National Association of Landscape Professionals (NALP) member directory. Consistent NAP across all of these is non-negotiable.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Local Business Associations</p>
                  <p className="mt-1">Chamber of Commerce memberships almost always include a directory listing with a link. Your local Home Builders Association, HOA network, or regional garden club may have the same. These links have strong local relevance signals that algorithmatically reinforce your geographic authority.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Supplier and Partner Links</p>
                  <p className="mt-1">Nurseries, garden centers, and landscape supply companies you buy from often have contractor referral pages. Equipment brands like John Deere, Husqvarna, and Toro sometimes list certified or preferred contractors on their sites. Reach out and ask — these links are usually free and highly relevant.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Community and Neighborhood Sites</p>
                  <p className="mt-1">Sponsor a neighborhood cleanup, contribute a seasonal lawn care tip to a local HOA newsletter, or offer a free consultation to a community garden project. These generate genuine local coverage and links that no paid link campaign can replicate. Nextdoor and local neighborhood Facebook groups also drive referral traffic that indirectly strengthens your SEO signals through engagement.</p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Seasonal SEO: Capitalizing on Landscaping&apos;s Unique Search Cycles
              </h2>
              <p>
                Landscaping is a seasonal business, and search demand follows predictable patterns that you can build your content calendar around. Homeowners search for different services at different times of year — and the landscaping businesses that publish content ahead of each season capture traffic when intent peaks.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { season: "Early Spring (Feb–Mar)", action: "Publish content and update GBP around spring cleanup, aeration, overseeding, and mulching. This is when homeowners start planning. Ranking here means capturing the season's first wave of jobs." },
                  { season: "Late Spring (Apr–May)", action: "Lawn mowing and fertilization search volume peaks. Run Google Posts promoting your mowing contracts. Your lawn care and fertilization service pages should be fully optimized by now." },
                  { season: "Summer (Jun–Aug)", action: "Irrigation, sod installation, and hardscaping searches climb. Drought-related lawn care questions spike in hot regions. Update your content to reflect current conditions in your market." },
                  { season: "Fall (Sep–Oct)", action: "Fall cleanup, leaf removal, and overseeding searches surge. This is also when homeowners start thinking about spring — target 'spring landscaping planning [city]' content now for rankings that pay off in February." },
                  { season: "Winter (Nov–Jan)", action: "Snow removal and holiday lighting searches peak in northern markets. In southern and coastal markets, year-round lawn care and winter prep content keeps your GBP active during the slow season." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <div className="text-green-400 font-bold text-sm w-40 flex-shrink-0 pt-0.5">{item.season}</div>
                    <div className="text-[#d1d5db] text-sm">{item.action}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6">
                Most landscaping companies only think about marketing when they need leads right now. The businesses that win SEO think 60–90 days ahead. The content you publish in February about spring cleanup services will be ranking — and generating leads — by the time April arrives. Timing is everything in seasonal SEO.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                What to Expect: A Realistic SEO Timeline for Landscaping Businesses
              </h2>
              <div className="mt-4 space-y-4">
                {[
                  { period: "Month 1–2", result: "Technical audit, on-page fixes, GBP fully optimized, citations built. No ranking movement yet — foundation work. This phase is critical even though it's invisible." },
                  { period: "Month 3–4", result: "GBP impressions and clicks start climbing. Long-tail keyword rankings begin appearing. Review cadence is running. Early signs of organic traffic." },
                  { period: "Month 5–6", result: "Page 1 rankings for lower-competition service keywords. Local Pack appearances for some search terms. First organic quote requests start coming in." },
                  { period: "Month 7–12", result: "Consistent top-3 rankings for primary service keywords in your main city. Local Pack placement established. 15–40+ inbound quote requests per month from organic search depending on market size." },
                  { period: "Month 12+", result: "Compounding results across multiple cities and service lines. Organic becomes your primary lead channel. Competitors in your market who ignored SEO start paying you compliments and asking questions." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <div className="text-green-400 font-bold text-sm w-28 flex-shrink-0 pt-0.5">{item.period}</div>
                    <div className="text-[#d1d5db] text-sm">{item.result}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6">
                The landscaping companies seeing the best SEO results are the ones that started before they needed the leads. If you wait until your referral pipeline dries up or ad costs become unsustainable, you&apos;re 9–12 months behind where you need to be. The best time to build your organic presence was last year. The second best time is today.
              </p>
            </section>

            {/* Conclusion / CTA */}
            <section className="mt-12 p-8 rounded-2xl bg-[#1c1c1c] border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                The Bottom Line
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                Landscaping and lawn care companies are sitting on one of the most underexploited SEO opportunities in the home services space. Search demand is high, competition is still relatively thin, and the visual nature of the work makes it easier than almost any other trade to build a compelling online presence. The businesses that invest in local SEO now will own their markets for years before competitors figure out what happened.
              </p>
              <p className="text-[#cbd5e1] mb-8">
                If you want to know exactly where your landscaping business stands on Google and what it would take to rank in your market, we&apos;ll show you — for free, with no obligation.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Get your free landscaping SEO audit
                <ArrowRight size={16} />
              </Link>
            </section>

            {/* Internal links */}
            <section className="mt-10 pt-10 border-t border-[#1e1e2e] space-y-4">
              <p className="text-sm font-semibold text-white">You might also like:</p>
              <Link
                href="/blog/google-business-profile-guide"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <ArrowRight size={14} />
                The Complete Google Business Profile Guide for Home Service Businesses
              </Link>
              <Link
                href="/blog/google-reviews-guide"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <ArrowRight size={14} />
                How to Get More 5-Star Google Reviews for Your Home Service Business
              </Link>
              <Link
                href="/blog/local-link-building"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <ArrowRight size={14} />
                Local Link Building for Contractors: The Complete Guide
              </Link>
              <Link
                href="/blog/painting-contractor-seo"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <ArrowRight size={14} />
                Painting Contractor SEO: How to Get More Jobs from Google in 2026
              </Link>
              <div className="pt-2">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#d1d5db] hover:text-white transition-colors text-sm"
                >
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
