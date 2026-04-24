import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Plumbers Can Get More Calls from Google in 2026 | Evergreen SEO Agency",
  description:
    "Complete plumber SEO guide: how to rank on Google, fill your calendar with inbound calls, and stop relying on expensive pay-per-lead services. Local SEO for plumbers that actually works.",
  openGraph: {
    title: "How Plumbers Can Get More Calls from Google in 2026 | Evergreen SEO Agency",
    description:
      "Complete plumber SEO guide: rank on Google, fill your calendar with inbound calls, and stop relying on expensive pay-per-lead services.",
    type: "article",
    url: "https://evergreenseo.agency/blog/plumbing-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Plumbers Can Get More Calls from Google in 2026 | Evergreen SEO Agency",
    description:
      "Complete plumber SEO guide: rank on Google, fill your calendar with inbound calls, and stop relying on expensive pay-per-lead services.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Plumbers Can Get More Calls from Google in 2026",
  description:
    "Complete plumber SEO guide: how to rank on Google, fill your calendar with inbound calls, and stop relying on expensive pay-per-lead services.",
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
    "@id": "https://evergreenseo.agency/blog/plumbing-seo",
  },
};

export default function PlumbingSeoPage() {
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
              Not showing up when customers search for a plumber? We fix that.
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
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-6">
            Plumbing
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            How Plumbers Can Get More Calls from Google in 2026
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
              A burst pipe at 11 PM doesn&apos;t wait. Neither do your potential customers — they grab their phone and search &ldquo;emergency plumber near me&rdquo; expecting to call the first result they see. If that result isn&apos;t you, you&apos;re handing revenue to a competitor. Local SEO for plumbers is how you make sure it&apos;s always your phone ringing.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Why Plumber SEO Is Different from Other Trades
              </h2>
              <p>
                Plumbing is one of the highest-urgency local service categories on Google. When someone searches for a plumber, they&apos;re not comparison shopping for next month — they have water on the floor right now. This means plumbing searches have among the highest conversion rates of any local keyword category. The businesses that appear in the top 3 of Google&apos;s Local Pack capture the overwhelming majority of those emergency calls.
              </p>
              <p className="mt-4">
                The bad news: most plumbers are paying $40–$80 per lead through HomeAdvisor, Angi, or Thumbtack — for leads that are simultaneously sent to 3–5 competitors. You&apos;re bidding against yourself. Local SEO for plumbers eliminates that competition and puts your phone number in front of searchers exclusively. Once you rank, the calls are yours alone.
              </p>
              <p className="mt-4">
                The good news: most plumbing markets are underserved from an SEO perspective. Many plumbing websites are outdated, slow, and missing the most basic optimization signals. That&apos;s your opportunity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                The Plumber&apos;s Google Business Profile: Your Emergency Response Center
              </h2>
              <p>
                Before a potential customer ever reaches your website, they see your Google Business Profile. It shows up in the Local Pack — the map section at the top of search results — and it&apos;s often the only thing they look at before dialing. Your GBP is your most important piece of digital real estate.
              </p>
              <p className="mt-4">
                Here&apos;s how to fully optimize it for maximum calls:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Business category: Plumber as primary. Add secondary categories: Emergency Plumber, Water Heater Installation Service, Drain Cleaning Service",
                  "Business hours: If you offer 24/7 emergency service, mark it. 'Open 24 hours' is a major conversion signal",
                  "Service area: Every city, suburb, and zip code you serve. Don't leave any out",
                  "Services list: Individual entries for drain cleaning, water heater repair/replacement, pipe repair, leak detection, toilet repair, sewer line service, and every other service you provide",
                  "Photos: Vans with your logo, team photos, before/after shots of completed jobs, any certifications or awards displayed",
                  "Q&A: Answer 'Do you offer emergency service?', 'What's your service area?', 'Are you licensed and insured?'",
                  "Google Posts: Weekly posts about seasonal issues (frozen pipes in winter, sump pump checks in spring)",
                  "Reviews: A system to collect reviews from every completed job — text your customer a direct review link same day",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Emergency plumbing is a 24/7 business. If your GBP isn&apos;t set up to reflect that, you&apos;re leaving night and weekend calls on the table. Those are your most valuable jobs — customers call whoever they can reach.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Plumber SEO Keywords: What to Target
              </h2>
              <p>
                The right keyword strategy targets searches at the moment of maximum intent — when someone needs a plumber right now or is actively evaluating options. Here&apos;s how to structure it:
              </p>
              <div className="mt-4 space-y-5">
                <div>
                  <p className="font-semibold text-white">Emergency / Urgency Keywords</p>
                  <p className="mt-1">These are your highest-converting terms: &ldquo;emergency plumber [city]&rdquo;, &ldquo;24 hour plumber [city]&rdquo;, &ldquo;plumber near me open now&rdquo;. Dedicate specific pages to emergency service and make sure your GBP reflects 24/7 availability.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Service-Specific Keywords</p>
                  <p className="mt-1">Each service gets its own page: &ldquo;water heater repair [city]&rdquo;, &ldquo;drain cleaning [city]&rdquo;, &ldquo;sewer line replacement [city]&rdquo;, &ldquo;leak detection [city]&rdquo;. One page can&apos;t rank for all of these. Individual pages can each rank for their specific keyword.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Neighborhood Keywords</p>
                  <p className="mt-1">If you serve multiple cities or suburbs, build individual location pages: &ldquo;plumber in [suburb]&rdquo;. These low-competition pages can rank quickly and stack up to cover your full service area.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Problem-Based Keywords</p>
                  <p className="mt-1">Searchers don&apos;t always search by service — sometimes they search by problem: &ldquo;pipe burst [city]&rdquo;, &ldquo;water heater not working&rdquo;, &ldquo;slow drain fix near me&rdquo;. These capture searchers before they&apos;ve even decided they need a plumber.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Building a Plumbing Website That Ranks and Converts
              </h2>
              <p>
                Most plumbing websites fail at both jobs: they don&apos;t rank because they&apos;re not optimized, and they don&apos;t convert because they&apos;re not built around how customers actually behave during a plumbing emergency. Here&apos;s what a high-performing plumber website looks like:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Phone number in large, tappable format at the top of every page — especially on mobile",
                  "Emergency service prominently advertised above the fold: '24/7 Emergency Plumber — Call Now'",
                  "Separate service pages for every major service offering (minimum 500 words each)",
                  "Location pages for every city you serve with unique content — not copy-paste",
                  "Page load speed under 3 seconds on mobile (run Google PageSpeed Insights to verify)",
                  "LocalBusiness schema markup with NAP, services, and service area",
                  "Trust signals above the fold: license number, years in business, number of reviews, insurance badge",
                  "Clear call-to-action on every page: call, form, or text option",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                One often overlooked factor: your phone number must be a local area code. Studies consistently show that customers in emergency situations are more likely to call a local number than a toll-free line. If you&apos;re using an 800 number as your primary contact, switch to a local number.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Review Strategy: The Plumber&apos;s Hidden Ranking Weapon
              </h2>
              <p>
                In plumbing, reviews do double duty: they&apos;re a ranking signal for Google&apos;s Local Pack algorithm, and they&apos;re a trust signal that converts searchers into callers. A plumber with 150 reviews and a 4.9-star average will beat a competitor with 20 reviews almost every time, both in rankings and in conversion rate.
              </p>
              <p className="mt-4">
                Build a systematic review collection process:
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <div className="text-green-400 font-bold text-sm w-32 flex-shrink-0 pt-0.5">Step 1</div>
                  <div className="text-[#d1d5db] text-sm">The day the job closes, text the customer: &ldquo;Hi [name], thanks for choosing [company]! If you&apos;re happy with the work, we&apos;d love a quick Google review — it takes 30 seconds and means a lot to our small business: [direct link]&rdquo;</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <div className="text-green-400 font-bold text-sm w-32 flex-shrink-0 pt-0.5">Step 2</div>
                  <div className="text-[#d1d5db] text-sm">If no review in 3 days, one follow-up: &ldquo;Hey [name], just checking if the [repair/installation] is still working great! If you have a moment, that review link is still here: [link]&rdquo;</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <div className="text-green-400 font-bold text-sm w-32 flex-shrink-0 pt-0.5">Step 3</div>
                  <div className="text-[#d1d5db] text-sm">Train your techs to verbally ask at the end of the job: &ldquo;If you&apos;re happy with everything, a Google review would really help us out — I&apos;ll text you a link right now.&rdquo; Done in the driveway before they leave.</div>
                </div>
              </div>
              <p className="mt-4">
                Plumbers who implement this system consistently collect 8–15 new reviews per month. After 6 months, the ranking and conversion impact is dramatic.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Local Citations and Link Building for Plumbers
              </h2>
              <p>
                Citations — mentions of your business name, address, and phone number across the web — are a foundational local ranking signal. Every major directory should have your plumbing business listed with consistent NAP information.
              </p>
              <p className="mt-4">
                Priority directories for plumbers: Google Business Profile, Yelp, Angi, HomeAdvisor, Houzz, BBB, Thumbtack, Nextdoor, your local Chamber of Commerce, and any plumbing-specific directories (PHCC member directory, local trade associations).
              </p>
              <p className="mt-4">
                For link building, focus on locally relevant sources: local home improvement blogs, neighborhood Facebook groups (indirect), local news sites if you do anything newsworthy, and supplier or manufacturer partner pages. The Master Plumbers Association and PHCC both have member directories with links. Get listed.
              </p>
              <p className="mt-4">
                One underrated tactic: partner with complementary businesses. Realtors, home inspectors, and property managers are constantly asked for plumber recommendations. Build those relationships. A link from a local realtor&apos;s &ldquo;trusted vendors&rdquo; page is worth more than ten generic directory listings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                What Plumber SEO Results Look Like Over 12 Months
              </h2>
              <div className="mt-4 space-y-4">
                {[
                  { period: "Month 1–2", result: "GBP fully optimized, website audit complete, service pages built or fixed, citation building underway. No ranking movement yet — foundation is being poured." },
                  { period: "Month 3–4", result: "GBP impressions and views increase. Early rankings for lower-competition keywords. Review collection system begins accumulating new reviews consistently." },
                  { period: "Month 5–6", result: "Page 1 rankings for service + city keywords starting to appear. Local Pack impressions increasing. First organic inbound calls start coming in." },
                  { period: "Month 7–9", result: "Steady Local Pack presence for primary service area. Multiple page 1 rankings across service keywords. Organic calls becoming a meaningful part of lead volume." },
                  { period: "Month 10–12", result: "Dominant Local Pack presence. Rankings expanding to surrounding suburbs. Organic leads consistently outperforming paid channels in cost-per-acquisition. ROI crystal clear." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <div className="text-green-400 font-bold text-sm w-28 flex-shrink-0 pt-0.5">{item.period}</div>
                    <div className="text-[#d1d5db] text-sm">{item.result}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6">
                The plumbing companies that invest in SEO earliest build the deepest moat. Once you&apos;re ranking on page 1 for your primary market, that position is very hard for competitors to displace — and it pays out in inbound calls every single month.
              </p>
            </section>

            <section className="mt-12 p-8 rounded-2xl bg-[#1c1c1c] border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Stop Buying Shared Leads?
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                Paying for leads that go to 5 competitors at once is a tax on your business that compounds every month. Local SEO for plumbers is the alternative — build it once, own your market, and let inbound calls replace the hamster wheel.
              </p>
              <p className="text-[#cbd5e1] mb-8">
                We&apos;ll audit your current presence and show you exactly where the opportunity is in your market — no obligation.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Get your free plumber SEO audit
                <ArrowRight size={16} />
              </Link>
            </section>

            {/* Internal links */}
            <section className="mt-10 pt-10 border-t border-[#1e1e2e] space-y-4">
              <p className="text-sm font-semibold text-white">You might also like:</p>
              <Link href="/blog/electrician-seo" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                Electrician SEO: How to Rank #1 in Your Service Area
              </Link>
              <Link href="/blog/google-business-profile-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                The Complete Google Business Profile Guide for Home Service Businesses
              </Link>
              <Link href="/blog/local-seo-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                Local SEO in 2026: Everything Home Service Businesses Need to Know
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
