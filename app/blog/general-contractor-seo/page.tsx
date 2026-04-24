import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor SEO: The Complete Guide to Getting Found Online | Evergreen SEO Agency",
  description:
    "How general contractors use local SEO to win more bids, reduce reliance on referrals, and build a consistent pipeline of inbound leads from Google. Complete 2026 guide.",
  openGraph: {
    title: "General Contractor SEO: The Complete Guide to Getting Found Online | Evergreen SEO Agency",
    description:
      "How general contractors use local SEO to win more bids and build a consistent inbound lead pipeline from Google.",
    type: "article",
    url: "https://evergreenseo.agency/blog/general-contractor-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "General Contractor SEO: The Complete Guide to Getting Found Online | Evergreen SEO Agency",
    description:
      "How general contractors use local SEO to win more bids and build a consistent inbound lead pipeline from Google.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "General Contractor SEO: The Complete Guide to Getting Found Online",
  description:
    "How general contractors use local SEO to win more bids, reduce reliance on referrals, and build a consistent pipeline of inbound leads from Google.",
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
    "@id": "https://evergreenseo.agency/blog/general-contractor-seo",
  },
};

export default function GeneralContractorSeoPage() {
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
              Stop waiting on referrals. Get inbound leads from Google instead.
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
            General Contractor
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            General Contractor SEO: The Complete Guide to Getting Found Online
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#d1d5db] mb-10 pb-10 border-b border-[#1e1e2e]">
            <span>Evergreen SEO Agency</span>
            <span>·</span>
            <span>April 23, 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <div className="prose-content text-[#cbd5e1] leading-relaxed space-y-8">

            <p className="text-lg text-[#e2e8f0] leading-relaxed">
              Most general contractors grow their business on referrals and word of mouth — and then hit a ceiling. Referrals are inconsistent. They dry up when your network gets quiet. They also limit you to the quality and budget level of your existing customer base. Local SEO for general contractors breaks that ceiling by creating a consistent stream of inbound leads from people who are actively searching for exactly what you do.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Why General Contractors Need SEO Differently Than Other Trades
              </h2>
              <p>
                General contractors face a unique SEO challenge: the term &ldquo;general contractor&rdquo; is broad. Customers searching for a GC are usually looking for a specific type of project — home addition, kitchen remodel, bathroom renovation, new construction, commercial buildout. This means your SEO strategy can&apos;t rely on one page and one keyword. You need a content architecture that captures each of those project types.
              </p>
              <p className="mt-4">
                The good news is that each specialty area is its own keyword opportunity. &ldquo;Kitchen remodel contractor [city]&rdquo;, &ldquo;home addition contractor [city]&rdquo;, &ldquo;bathroom renovation contractor [city]&rdquo; — each one is a search term with high commercial intent and a dedicated audience. Rank for all of them and you&apos;ve covered every type of project your business takes on.
              </p>
              <p className="mt-4">
                General contractor projects also have high average values — $10,000 to $500,000+ depending on scope. A single page 1 ranking that delivers 2–3 qualified inbound leads per month can translate to hundreds of thousands of dollars in annual revenue. The ROI on general contractor SEO is unmatched.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Google Business Profile for General Contractors
              </h2>
              <p>
                Your GBP is where local search visibility starts. For a general contractor, here&apos;s how to set it up for maximum Local Pack placement:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Primary category: General Contractor. Add secondary categories relevant to your main services: Home Builder, Remodeling Contractor, Kitchen Remodeler, Bathroom Remodeler",
                  "Business description: Focus on your primary project types and service area in the first 250 characters",
                  "Service area: Every city and suburb you actively bid jobs in",
                  "Services: Add individual services for each project type — additions, remodels, renovations, new builds, etc.",
                  "Photos: This is critical for GCs. Post photos of completed projects organized by type — kitchens, bathrooms, additions, exteriors. Before/after is especially powerful",
                  "Reviews: For general contractors, the quality of review content matters. A review that says 'They did our 1,200 sq ft addition — came in on time and on budget' is worth 10 generic 5-star reviews",
                  "Q&A: Answer 'Are you licensed and bonded?', 'Do you handle permits?', 'Do you provide detailed written estimates?'",
                  "Google Posts: Feature completed projects with photos. 'Just finished this 800 sq ft master suite addition in [city]' with a photo drives engagement and ranking signals",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                General Contractor Keyword Strategy
              </h2>
              <p>
                The keyword architecture for a GC website should mirror the way customers search for their specific project. Here&apos;s the full framework:
              </p>
              <div className="mt-4 space-y-5">
                <div>
                  <p className="font-semibold text-white">Project-Type Keywords (Priority)</p>
                  <p className="mt-1">Each project type gets its own page: &ldquo;kitchen remodel contractor [city]&rdquo;, &ldquo;bathroom remodel contractor [city]&rdquo;, &ldquo;home addition contractor [city]&rdquo;, &ldquo;basement finishing contractor [city]&rdquo;, &ldquo;deck builder [city]&rdquo;. These are your highest-converting keywords.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">General GC Keywords</p>
                  <p className="mt-1">&ldquo;General contractor [city]&rdquo;, &ldquo;licensed contractor [city]&rdquo;, &ldquo;home remodeling contractor [city]&rdquo;. These broader terms can rank over time and drive general inquiry traffic.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Location Pages</p>
                  <p className="mt-1">If you serve multiple cities, a location page for each one: &ldquo;General contractor in [city 2]&rdquo;, &ldquo;remodeling contractor [suburb]&rdquo;. These should have unique content about working in that area — neighborhoods you&apos;ve completed projects in, local building permit notes, etc.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Portfolio-Based Content</p>
                  <p className="mt-1">Case study content about specific completed projects: &ldquo;Kitchen remodel in [neighborhood]: Before &amp; After&rdquo;. This type of content ranks for neighborhood-specific searches and builds E-E-A-T (Experience, Expertise, Authority, Trust) — a key Google ranking factor.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Building a General Contractor Website That Wins Bids
              </h2>
              <p>
                General contractor websites have one job: turn a visitor into a contact. Unlike plumbers where speed is the primary concern, GC prospects are evaluating you against 3–5 competitors and making a major financial decision. Your website needs to build trust fast.
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Portfolio front and center: Your best project photos should be above the fold on the homepage",
                  "Project-specific gallery pages: Kitchen gallery, bathroom gallery, addition gallery — each optimized for its own keyword",
                  "Detailed service pages: Explain your process, what the customer can expect, how you handle permits, timeline expectations",
                  "Licensing and insurance prominently displayed: License number, liability insurance, workers comp. Don't bury this",
                  "Testimonials with project specifics: 'John Smith remodeled our kitchen in [city] — $65,000 project completed on time'",
                  "Clear estimate request process: What happens after they contact you? Set the expectation",
                  "Local signals: Mention specific neighborhoods, cities, and county permit offices in your content",
                  "Fast mobile load time: Increasingly, homeowners research on mobile. Under 3 seconds is non-negotiable",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Portfolio Content: Your Secret SEO Weapon
              </h2>
              <p>
                General contractors have an asset that most businesses don&apos;t: a portfolio of completed projects that each represent a unique, local SEO opportunity. Most contractors either don&apos;t document their work online or dump everything in a generic &ldquo;Gallery&rdquo; page. That&apos;s a massive missed opportunity.
              </p>
              <p className="mt-4">
                The right approach: every significant completed project gets its own page or blog post. Format: &ldquo;[Project Type] in [Neighborhood], [City] — Case Study.&rdquo; Include before/after photos, project scope, challenges solved, and a testimonial if available. These pages rank for neighborhood-specific searches, build E-E-A-T, and do double duty as your best sales content.
              </p>
              <p className="mt-4">
                A GC who has completed 50 projects over the past 3 years has the raw material for 50 pages of SEO content. That&apos;s a content library most of your competitors don&apos;t have and can&apos;t fake.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Link Building for General Contractors
              </h2>
              <p>
                General contractors are well-positioned for a specific type of local link building: project-based PR. When you complete a notable project — a historic home renovation, a large commercial buildout, an unusual architectural challenge — local media, neighborhood blogs, and community sites often want to cover it. One article in a local publication about a project you completed is worth more SEO value than dozens of generic directory links.
              </p>
              <p className="mt-4">
                Other high-value link sources for GCs:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "State contractor licensing board directory (always verify your listing is accurate and linked)",
                  "NAHB (National Association of Home Builders) member directory",
                  "Local Home Builders Association member pages",
                  "Manufacturer preferred contractor programs (James Hardie, Andersen Windows, GAF roofing, etc.)",
                  "Houzz Pro — both a directory listing and a content platform where your projects are indexed",
                  "Local Chamber of Commerce and BNI chapter membership",
                  "Real estate agents who refer contractors to their buyer/seller clients",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Timeline: What to Expect from General Contractor SEO
              </h2>
              <div className="mt-4 space-y-4">
                {[
                  { period: "Month 1–2", result: "GBP fully built out, website service and project pages created, citation building started, review system launched." },
                  { period: "Month 3–5", result: "GBP impressions increase, early project-type keyword rankings appear for lower-competition terms, first organic contacts." },
                  { period: "Month 6–8", result: "Page 1 rankings for primary project-type keywords in main city. Local Pack appearances becoming consistent." },
                  { period: "Month 9–12", result: "Dominant local presence for multiple project types. Organic leads becoming a significant portion of new business. Referral + organic = full pipeline." },
                  { period: "Year 2+", result: "Compounding authority. Each new project page builds the portfolio. Rankings expand. Competitors can't catch up without years of investment." },
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
                Build a Lead Pipeline That Doesn&apos;t Depend on Referrals
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                Referrals will always be valuable — but they&apos;re not predictable. General contractor SEO gives you a second, consistent pipeline of inbound leads that runs 24/7 and compounds over time. The contractors who build it now will own their markets for years.
              </p>
              <p className="text-[#cbd5e1] mb-8">
                We&apos;ll show you exactly what your SEO opportunity looks like in your market — for free.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Get your free contractor SEO audit
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
              <Link href="/blog/roofing-contractor-seo" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                The Roofing Contractor&apos;s Guide to Ranking on Google in 2026
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
