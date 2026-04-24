import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Long Does SEO Take? Realistic Timeline | Evergreen SEO Agency",
  description:
    "Honest answer to how long SEO takes for HVAC, roofing, and home service businesses. Month-by-month breakdown with realistic expectations.",
  openGraph: {
    title: "How Long Does SEO Take? Realistic Timeline | Evergreen SEO Agency",
    description:
      "Honest answer to how long SEO takes for HVAC, roofing, and home service businesses. Month-by-month breakdown with realistic expectations.",
    type: "article",
    url: "https://evergreenseo.agency/blog/seo-timeline",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Long Does SEO Take? Realistic Timeline | Evergreen SEO Agency",
    description:
      "Honest answer to how long SEO takes for HVAC, roofing, and home service businesses. Month-by-month breakdown with realistic expectations.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Long Does SEO Take? A Realistic Timeline for Home Service Businesses",
  description:
    "Honest answer to how long SEO takes for HVAC, roofing, and home service businesses. Month-by-month breakdown with realistic expectations.",
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
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://evergreenseo.agency/blog/seo-timeline",
  },
};

export default function SeoTimelinePage() {
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
              Want to know how long it&apos;ll take to rank in your specific market? We can tell you — free.
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
            Local SEO
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            How Long Does SEO Take? A Realistic Timeline for Home Service Businesses
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#d1d5db] mb-10 pb-10 border-b border-[#1e1e2e]">
            <span>Evergreen SEO Agency</span>
            <span>·</span>
            <span>April 23, 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <div className="prose-content text-[#cbd5e1] leading-relaxed space-y-8">

            <p className="text-lg text-[#e2e8f0] leading-relaxed">
              Every contractor considering SEO asks the same question: &ldquo;How long until I see results?&rdquo; The honest answer is 3–6 months for meaningful progress, 6–12 months for strong organic lead flow. Any agency promising page 1 in 30 days is either lying or planning to use tactics that will eventually get your site penalized. Here&apos;s a realistic, month-by-month breakdown of what actually happens during an SEO campaign for a home service business.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                The Honest Answer: 3–6 Months for Meaningful Results
              </h2>
              <p>
                SEO is not a light switch. It&apos;s a flywheel — slow to start, but once it&apos;s spinning, it builds momentum and becomes increasingly difficult to stop. The first 3 months often feel like nothing is happening. That&apos;s normal. You&apos;re building the foundation that everything else rests on.
              </p>
              <p className="mt-4">
                Here&apos;s why SEO takes time:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Google crawls and indexes pages on its own schedule — new content and changes may take 2–8 weeks to be reflected in rankings",
                  "Link authority builds gradually — new links take time to be discovered and weighted by Google's algorithm",
                  "Trust is earned over time — Google's algorithm favors sites with established history and consistent positive signals",
                  "Competition doesn't stand still — you're gaining ground on competitors who are also optimizing, which makes large ranking jumps rare and incremental gains the norm",
                  "Local Pack prominence depends on review velocity, which takes months to build consistently",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The contractors who benefit most from SEO are those who commit to 12 months and track progress rigorously. The ones who quit at month 3 (just when it&apos;s starting to work) leave all the gains for their competitors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Months 1–3: Foundation and Infrastructure
              </h2>
              <p>
                The first three months are primarily backend work. You won&apos;t see dramatic ranking changes, but you&apos;ll be building the infrastructure that creates rankings later. Think of this as the foundation of a building — essential, invisible, and everything depends on getting it right.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    month: "Month 1",
                    focus: "Technical audit and fixes",
                    work: [
                      "Full technical SEO audit — crawl errors, broken links, duplicate content, canonicalization issues",
                      "Google Business Profile optimization — categories, photos, description, service areas",
                      "Website speed optimization — compress images, improve Core Web Vitals",
                      "Keyword research — identify primary, secondary, and long-tail keywords for your service area",
                      "On-page optimization of homepage and top service pages",
                    ],
                  },
                  {
                    month: "Month 2",
                    focus: "Content and citations",
                    work: [
                      "Create or optimize individual service pages for each service you offer",
                      "Build out local citations — Yelp, BBB, Angi, and 20+ other directories",
                      "Ensure NAP consistency across all existing listings",
                      "Launch review collection system — start generating Google reviews systematically",
                      "Begin publishing blog content targeting informational keywords",
                    ],
                  },
                  {
                    month: "Month 3",
                    focus: "Link building and local content",
                    work: [
                      "Begin outreach for local directory links — Chamber, associations, supplier directories",
                      "Create location-specific pages if serving multiple cities",
                      "Publish 2–4 pieces of content targeting local keywords",
                      "Monitor GBP insights for early signs of increased visibility",
                      "Submit sitemap and verify proper indexing in Google Search Console",
                    ],
                  },
                ].map((item) => (
                  <div key={item.month} className="p-5 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 rounded-lg bg-green-500/20 text-green-400 text-xs font-bold">{item.month}</span>
                      <span className="font-semibold text-white text-sm">{item.focus}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {item.work.map((w) => (
                        <li key={w} className="flex items-start gap-2 text-sm text-[#d1d5db]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="mt-6">
                <strong className="text-white">What you should see by end of month 3:</strong> Rankings starting to appear for long-tail and lower-competition keywords. GBP impressions trending upward. Possibly appearing in Local Pack for less competitive searches. Review count measurably higher than month 1.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Months 4–6: Momentum Building
              </h2>
              <p>
                Months 4–6 are when SEO starts to feel real. Rankings stabilize and begin climbing. Organic traffic picks up noticeably. The foundation work from months 1–3 starts paying dividends as Google has had time to process and weight all the signals you&apos;ve been building.
              </p>
              <div className="mt-4 space-y-4">
                {[
                  { label: "Rankings", text: "Primary keywords moving into pages 1–2 for local searches. Long-tail keywords (e.g., 'emergency AC repair [neighborhood]') appearing on page 1." },
                  { label: "Local Pack", text: "Consistent appearances in Local Pack for primary service + city searches. Possible top 3 appearances for lower-competition service + suburb combinations." },
                  { label: "Traffic", text: "Organic search traffic 40–100% higher than month 1. Calls and form submissions showing a measurable increase attributable to organic." },
                  { label: "Reviews", text: "If the review system is running, 15–40+ new Google reviews. Average rating stable or improving." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <div className="text-green-400 font-semibold text-sm w-28 flex-shrink-0">{item.label}</div>
                    <div className="text-[#d1d5db] text-sm">{item.text}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6">
                This is the phase where many businesses start seeing clear ROI from SEO — not just rankings, but actual leads and calls from organic search. It&apos;s also when competitors start noticing you&apos;re taking their Local Pack positions, which is a good sign.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Months 6–12: Compounding Returns
              </h2>
              <p>
                The 6–12 month window is where well-executed SEO becomes genuinely transformative for a contractor&apos;s business. Rankings are now stable, content is accumulating, and link authority has reached a level that makes it difficult for competitors starting from zero to catch you quickly.
              </p>
              <p className="mt-4">
                At month 12, contractors who committed to a consistent SEO strategy typically see:
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  { metric: "Organic traffic", result: "3–8x month 1 levels" },
                  { metric: "Google reviews", result: "50–200+ new reviews" },
                  { metric: "Primary keyword rankings", result: "Pages 1–2 consistently" },
                  { metric: "Local Pack appearances", result: "Top 3 for most primary searches" },
                  { metric: "Organic leads", result: "20–60% of total lead volume" },
                  { metric: "Cost per lead vs. paid ads", result: "50–80% lower" },
                ].map((item) => (
                  <div key={item.metric} className="p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <p className="text-sm text-[#d1d5db]">{item.metric}</p>
                    <p className="text-base font-semibold text-green-400 mt-1">{item.result}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Why New Domains Take Longer
              </h2>
              <p>
                If your website is less than 12 months old, expect the timeline to shift 2–4 months later for each milestone. Google applies what SEOs call a &ldquo;sandbox&rdquo; effect to new domains — a period where rankings are suppressed while Google builds trust in your site. This isn&apos;t a published Google policy, but it&apos;s consistently observed behavior.
              </p>
              <p className="mt-4">
                For brand-new sites, realistic adjusted expectations:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Months 1–4: Technical foundation, content creation, citation building — minimal ranking movement",
                  "Months 5–7: First meaningful rankings appear for long-tail keywords",
                  "Months 8–12: Primary keyword rankings begin to stabilize on pages 1–2",
                  "Month 12–18: Competitive primary keyword rankings and consistent Local Pack presence",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The solution for new domains: start generating Google reviews from day one, build citations aggressively in month 1, and focus on long-tail keywords where competition is lower while domain authority builds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Factors That Speed Up SEO Results
              </h2>
              <p>
                Not every contractor waits the full 6 months to see results. These factors consistently accelerate the timeline:
              </p>
              <div className="mt-4 space-y-4">
                {[
                  {
                    factor: "Low competition market",
                    detail: "A plumber in a rural county with 3 local competitors will rank faster than one in a major metro with 50 competitors. Know your market.",
                  },
                  {
                    factor: "Existing domain with history",
                    detail: "If your domain is 5+ years old and has been indexed by Google, you're starting ahead of a brand-new domain. Existing authority accelerates new ranking gains.",
                  },
                  {
                    factor: "Strong technical foundation",
                    detail: "Sites that are already fast, mobile-optimized, and free of crawl errors rank faster after optimization than sites that need significant technical remediation first.",
                  },
                  {
                    factor: "Aggressive review generation",
                    detail: "Contractors who go from 10 reviews to 80 reviews in 60 days see Local Pack improvements in that window. Review velocity is one of the fastest levers in local SEO.",
                  },
                  {
                    factor: "Niche-specific content",
                    detail: "Publishing highly specific, useful content (e.g., 'How to Know If Your Furnace Heat Exchanger Is Cracked') targets exactly what potential customers are searching for and ranks faster than generic content.",
                  },
                ].map((item) => (
                  <div key={item.factor} className="p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <p className="font-semibold text-white text-sm mb-2">{item.factor}</p>
                    <p className="text-sm text-[#d1d5db]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Red Flags: When SEO Isn&apos;t Working
              </h2>
              <p>
                Slow progress is normal. Zero progress or negative progress after 6 months is a problem. Here are the red flags that signal something is wrong with your SEO strategy:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Organic traffic is flat or declining after 6 months of active SEO work",
                  "Rankings for primary keywords haven't moved at all — still buried on page 5+ after 6 months",
                  "Google Search Console shows manual action or security issues",
                  "Your site isn't indexed for your own business name (serious technical or penalty issue)",
                  "You're gaining zero new Google reviews despite an automated system being in place",
                  "Your agency can't show you specific keyword ranking data and traffic trends — lack of reporting is a red flag",
                  "Your rankings spike then crash repeatedly — possible use of black-hat tactics that trigger algorithmic penalties",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                If you&apos;re 6 months in with zero measurable progress, the issue is usually one of three things: the technical foundation was never properly fixed, no real link building is happening, or you&apos;re in an extremely competitive market and need a more aggressive approach. A second opinion audit is worth the time.
              </p>
            </section>

            <section className="mt-12 p-8 rounded-2xl bg-[#1c1c1c] border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Get a Clear Timeline for Your Specific Market
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                Every market is different. We analyze your competition, your current rankings, your domain history, and your Google Business Profile to give you a realistic, specific timeline for what to expect — and a clear plan to get there. No cost, no obligation.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Get my free SEO audit and timeline
                <ArrowRight size={16} />
              </Link>
            </section>

            {/* Internal links */}
            <section className="mt-10 pt-10 border-t border-[#1e1e2e] space-y-4">
              <p className="text-sm font-semibold text-white">You might also like:</p>
              <Link href="/blog/local-seo-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                Local SEO in 2026: Everything Home Service Businesses Need to Know
              </Link>
              <Link href="/blog/local-link-building" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                Local Link Building for Contractors: The Complete Guide
              </Link>
              <Link href="/blog/google-reviews-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                How to Get More 5-Star Google Reviews for Your Home Service Business
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
