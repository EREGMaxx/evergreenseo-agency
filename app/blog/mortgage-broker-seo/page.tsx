import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Broker SEO: How to Get Consistent Borrower Leads from Google | Evergreen SEO Agency",
  description:
    "Complete mortgage broker SEO guide: how to rank on Google, generate consistent borrower leads, and reduce dependence on expensive referral networks and paid lead sources.",
  openGraph: {
    title: "Mortgage Broker SEO: How to Get Consistent Borrower Leads from Google | Evergreen SEO Agency",
    description:
      "How mortgage brokers use local SEO to generate consistent borrower leads from Google and reduce dependence on expensive referral networks.",
    type: "article",
    url: "https://evergreenseoagency.com/blog/mortgage-broker-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Broker SEO: How to Get Consistent Borrower Leads from Google | Evergreen SEO Agency",
    description:
      "How mortgage brokers use local SEO to generate consistent borrower leads from Google and reduce dependence on expensive referral networks.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mortgage Broker SEO: How to Get Consistent Borrower Leads from Google",
  description:
    "Complete mortgage broker SEO guide: rank on Google, generate consistent borrower leads, and reduce dependence on expensive referral networks and paid lead sources.",
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
    "@id": "https://evergreenseoagency.com/blog/mortgage-broker-seo",
  },
};

export default function MortgageBrokerSeoPage() {
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
              Stop depending on realtor referrals. Build your own lead pipeline.
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
            Mortgage Broker
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Mortgage Broker SEO: How to Get Consistent Borrower Leads from Google
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
              Most mortgage brokers build their business on referrals — from realtors, past clients, and personal networks. That works until the market shifts, a realtor partner retires, or rates spike and purchase volume drops. SEO for mortgage brokers creates a lead channel that doesn&apos;t depend on anyone else&apos;s goodwill. Here&apos;s how to build it.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Why Mortgage Broker SEO Works (and Why Most Brokers Skip It)
              </h2>
              <p>
                People searching for mortgage brokers on Google are buyers. They&apos;re not casually browsing — they&apos;re pre-approved shopping, comparison shopping, or actively looking for a broker to originate their loan. These are high-intent searches with high conversion potential.
              </p>
              <p className="mt-4">
                The reason most brokers skip SEO: they assume it&apos;s too competitive. Big bank brand names dominate national mortgage keywords. But local mortgage broker SEO operates in a completely different arena. &ldquo;Mortgage broker [city]&rdquo;, &ldquo;home loan [city]&rdquo;, &ldquo;FHA loan [city]&rdquo; — these local searches are dominated by local results, and the competition at the local level is often thin.
              </p>
              <p className="mt-4">
                The mortgage broker who builds local SEO authority in their market creates a lead pipeline that runs 24/7. Every closed loan through an organic lead is the lowest cost-per-acquisition of any channel — because there&apos;s no referral fee, no lead cost, and no co-marketing required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Google Business Profile for Mortgage Brokers
              </h2>
              <p>
                Your GBP is often the first thing a local borrower sees when they search for a mortgage professional. Here&apos;s how to fully optimize it:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Primary category: Mortgage Broker. Add secondary: Mortgage Lender, Loan Agency (if applicable to your license)",
                  "Business description: Lead with what you do and who you serve — 'Local mortgage broker specializing in [purchase loans / refinance / FHA / VA / jumbo] for [city] area homebuyers'",
                  "Services: Individual entries for purchase loans, refinance, FHA loans, VA loans, jumbo loans, first-time buyer programs, DSCR loans (if you do investor lending)",
                  "Hours: Be specific and accurate. Customers want to know when they can reach you",
                  "Reviews: Mortgage is a high-trust transaction. Reviews describing the specific loan type and outcome ('First-time buyer — they walked us through every step of the FHA process') convert extremely well",
                  "Photos: Team photos, office if applicable, headshot with credentials",
                  "Q&A: Answer 'What loan types do you offer?', 'Do you work with first-time buyers?', 'How fast can you close?'",
                  "Google Posts: Rate updates, market commentary, buyer tips, loan program announcements",
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
                Mortgage Broker Keyword Strategy
              </h2>
              <p>
                Mortgage keyword strategy has two layers: local transactional keywords (high intent, ready to apply) and informational keywords (early-stage, building trust). Here&apos;s how to structure both:
              </p>
              <div className="mt-4 space-y-5">
                <div>
                  <p className="font-semibold text-white">Local Transactional Keywords (Priority)</p>
                  <p className="mt-1">&ldquo;Mortgage broker [city]&rdquo;, &ldquo;home loans [city]&rdquo;, &ldquo;mortgage lender [city]&rdquo;, &ldquo;refinance mortgage [city]&rdquo;. Each gets its own page. These are the searches from people ready to apply or close to it.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Loan-Type Specific Keywords</p>
                  <p className="mt-1">&ldquo;FHA loan [city]&rdquo;, &ldquo;VA loan [city]&rdquo;, &ldquo;jumbo loan [city]&rdquo;, &ldquo;first-time homebuyer loan [city]&rdquo;, &ldquo;USDA loan [city]&rdquo;. If you specialize in specific loan types, these high-intent pages convert extremely well.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Informational Keywords</p>
                  <p className="mt-1">&ldquo;How much house can I afford in [city]&rdquo;, &ldquo;mortgage rates [city]&rdquo;, &ldquo;first-time buyer programs [state]&rdquo;, &ldquo;how to get pre-approved for a mortgage&rdquo;. Blog content targeting these searches captures early-funnel buyers who will need a broker in 30–90 days.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Location Pages</p>
                  <p className="mt-1">If you serve multiple cities in a metro area or across state lines, location pages for each: &ldquo;Mortgage broker in [suburb]&rdquo;. Low competition, fast to rank, high conversion for residents of that specific area.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Building a Mortgage Broker Website That Generates Applications
              </h2>
              <p>
                A mortgage broker website has to do a specific job: get a borrower to start an application or pick up the phone. Trust is everything. Here&apos;s what the highest-converting mortgage websites do:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "NMLS number prominently displayed — it's a trust signal and often a compliance requirement",
                  "License states clearly listed: 'Licensed in CA, AZ, NV, TX'",
                  "Rate transparency: If you can show current rates or ranges, do it — borrowers comparing brokers want to see numbers",
                  "Loan process explained: Walk borrowers through exactly what happens after they apply. Reduce uncertainty = reduce drop-off",
                  "Specific loan program pages: FHA, VA, conventional, jumbo, DSCR — each with its own URL and content",
                  "Calculators: Mortgage payment calculator, affordability calculator. These increase time-on-site and build trust",
                  "Fast pre-qual form: Low-friction first step. Name, email, loan type, rough purchase price. Get the conversation started",
                  "Reviews and testimonials: Specific to the loan type and outcome — not generic praise",
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
                Content Marketing for Mortgage Brokers: Building Trust Before They Apply
              </h2>
              <p>
                Blog content is unusually powerful for mortgage brokers because the borrower journey is long. Most homebuyers start researching 3–6 months before they&apos;re ready to apply. If you&apos;re showing up in their search results during the research phase, you&apos;re building the relationship before your competitors even know they exist.
              </p>
              <p className="mt-4">
                High-value blog topics for mortgage brokers:
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "How to improve your credit score before buying a home in [city]",
                  "FHA vs conventional loan: which is right for you in [state]?",
                  "First-time homebuyer programs in [state] — complete guide",
                  "How to get pre-approved in [city] — step-by-step process",
                  "VA loan benefits for veterans in [city]",
                  "Mortgage rate trends in [metro area]",
                  "Down payment assistance programs in [state]",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span className="text-[#cbd5e1]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                Each blog post ends with a soft CTA: &ldquo;Ready to get pre-approved? Our team specializes in [loan type] in [city]. Get your free rate quote here.&rdquo; This converts readers who are ready while nurturing those who aren&apos;t yet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Link Building and Authority Building for Mortgage Brokers
              </h2>
              <p>
                Mortgage is a YMYL (Your Money, Your Life) category — Google holds these pages to a higher E-E-A-T standard. Authority signals matter more here than in other industries. Focus on:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "NMLS registry — your official listing with accurate information and website link",
                  "State banking/lending regulator directory — same",
                  "BBB listing — particularly important for financial services",
                  "Local Chamber of Commerce membership with directory listing",
                  "Real estate investor meetup sponsorships and community involvement (links from local event sites)",
                  "Guest posts on local real estate blogs and community sites — 'Mortgage 101 for [City] First-Time Buyers'",
                  "Realtor partnership pages — if a realtor's site has a 'preferred lenders' page, get listed",
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
                Mortgage Broker SEO Timeline
              </h2>
              <div className="mt-4 space-y-4">
                {[
                  { period: "Month 1–2", result: "GBP fully optimized, NMLS and compliance info verified, website loan-type pages built, citation building started." },
                  { period: "Month 3–4", result: "GBP impressions growing, early blog content starting to rank for informational keywords, review collection underway." },
                  { period: "Month 5–7", result: "First page 1 rankings for local broker keywords. Blog content driving early-funnel traffic and pre-qual form submissions." },
                  { period: "Month 8–12", result: "Local Pack presence for primary city. Multiple loan-type keywords on page 1. Organic applications becoming a regular part of pipeline." },
                  { period: "Year 2+", result: "Compounding authority. New blog content keeps expanding reach. Organic becomes the most cost-effective lead channel in the book." },
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
                Your Own Lead Pipeline, Independent of Anyone Else
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                Mortgage brokers who build local SEO authority stop being dependent on realtor relationships, market cycles, and purchased leads. You own your search presence. Every month it compounds. Every loan closed through organic is pure margin.
              </p>
              <p className="text-[#cbd5e1] mb-8">
                We&apos;ll audit your current online presence and show you the exact opportunity in your market — no cost, no obligation.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Get your free mortgage broker SEO audit
                <ArrowRight size={16} />
              </Link>
            </section>

            {/* Internal links */}
            <section className="mt-10 pt-10 border-t border-[#1e1e2e] space-y-4">
              <p className="text-sm font-semibold text-white">You might also like:</p>
              <Link href="/blog/google-business-profile-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                The Complete Google Business Profile Guide for Home Service Businesses
              </Link>
              <Link href="/blog/local-seo-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                Local SEO in 2026: Everything Home Service Businesses Need to Know
              </Link>
              <Link href="/blog/hvac-seo-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                How HVAC Companies Can Double Their Leads with Local SEO in 2026
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
