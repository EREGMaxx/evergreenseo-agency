import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Link Building for Contractors 2026 | Evergreen SEO Agency",
  description:
    "How HVAC, roofing, and home service contractors build authoritative backlinks that boost local Google rankings. Practical tactics that actually work.",
  openGraph: {
    title: "Local Link Building for Contractors 2026 | Evergreen SEO Agency",
    description:
      "How HVAC, roofing, and home service contractors build authoritative backlinks that boost local Google rankings. Practical tactics that actually work.",
    type: "article",
    url: "https://evergreenseo.agency/blog/local-link-building",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Link Building for Contractors 2026 | Evergreen SEO Agency",
    description:
      "How HVAC, roofing, and home service contractors build authoritative backlinks that boost local Google rankings. Practical tactics that actually work.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Local Link Building for Contractors: The Complete Guide",
  description:
    "How HVAC, roofing, and home service contractors build authoritative backlinks that boost local Google rankings. Practical tactics that actually work.",
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
    "@id": "https://evergreenseo.agency/blog/local-link-building",
  },
};

export default function LocalLinkBuildingPage() {
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
              Want to know where your competitors are getting their links? We analyze that in your free audit.
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
            Local Link Building for Contractors: The Complete Guide
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
              Backlinks — links from other websites to yours — remain one of Google&apos;s strongest ranking signals. For contractors competing in local search, the right links can be the difference between page 1 and page 3. The good news: local link building doesn&apos;t require a PR agency or thousands of dollars. It requires knowing where to look and putting in consistent effort. This guide covers every practical tactic that moves the needle for home service contractors.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Why Links Matter for Local SEO
              </h2>
              <p>
                Google&apos;s ranking algorithm evaluates hundreds of signals, but link authority remains one of the most powerful. A link from another website to yours is essentially a vote of confidence — it tells Google that your business is credible enough for another site to reference. The more credible the linking site, the more that vote counts.
              </p>
              <p className="mt-4">
                For local SEO specifically, link relevance matters as much as authority. A link from a local newspaper is worth more than a link from a national business directory because it signals local relevance — that your business is genuinely part of your community. A link from an industry association signals topical authority in your trade.
              </p>
              <p className="mt-4">
                When two contractors have similar GBP optimization, similar review counts, and similar website quality, the one with stronger link authority ranks higher. Links are the tiebreaker — and often the deciding factor even before you get to tiebreakers.
              </p>
              <div className="mt-6 p-5 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                <p className="text-sm font-semibold text-white mb-3">What makes a link valuable for local contractors:</p>
                <ul className="space-y-2 text-sm text-[#d1d5db]">
                  {[
                    "Local relevance — the site is based in or covers your service area",
                    "Topical relevance — the site covers home services, construction, or adjacent topics",
                    "Domain authority — established sites with their own strong link profiles",
                    "Dofollow status — passes link equity (nofollow links still have value for citations)",
                    "Context — linked from relevant content, not buried in a footer or sidebar",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Local Directories Worth Submitting To
              </h2>
              <p>
                Directory listings serve two purposes: they&apos;re links to your website, and they&apos;re citations (mentions of your business name, address, and phone number) that validate your business data in Google&apos;s eyes. Consistent NAP (name, address, phone) across directories is a baseline local SEO requirement.
              </p>
              <p className="mt-4">
                Tier 1 — submit to these first, they carry the most weight:
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {[
                  "Google Business Profile",
                  "Yelp",
                  "Facebook Business",
                  "Better Business Bureau (BBB)",
                  "Angi (Angie&apos;s List)",
                  "HomeAdvisor",
                  "Houzz",
                  "Thumbtack",
                  "Nextdoor",
                  "Bing Places",
                ].map((dir) => (
                  <div key={dir} className="flex items-center gap-3 p-3 rounded-lg bg-[#1c1c1c] border border-[#1e1e2e] text-sm text-[#d1d5db]">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: dir }} />
                  </div>
                ))}
              </div>
              <p className="mt-6">
                Tier 2 — general business directories with decent authority:
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {[
                  "Manta",
                  "Foursquare",
                  "Apple Maps",
                  "Yellow Pages (YP.com)",
                  "MapQuest",
                  "Expertise.com",
                  "Bark.com",
                  "Porch.com",
                ].map((dir) => (
                  <div key={dir} className="flex items-center gap-3 p-3 rounded-lg bg-[#1c1c1c] border border-[#1e1e2e] text-sm text-[#d1d5db]">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    {dir}
                  </div>
                ))}
              </div>
              <p className="mt-6">
                Use exactly the same business name, address, and phone number on every listing. Inconsistencies (abbreviating &ldquo;Street&rdquo; to &ldquo;St&rdquo; on some, spelling out on others) create conflicting signals and dilute the citation value.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Industry Associations: High-Authority, Low-Competition Links
              </h2>
              <p>
                Industry association websites often have strong domain authority built over decades. A link from ACCA, PHCC, or NRCA carries significantly more weight than a generic directory listing. Most require membership dues, but the SEO value alone typically justifies the cost — and the business credibility signals are a bonus.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    trade: "HVAC",
                    associations: ["Air Conditioning Contractors of America (ACCA)", "ASHRAE", "Refrigeration Service Engineers Society (RSES)", "AHRI (Air-Conditioning, Heating, and Refrigeration Institute)"],
                  },
                  {
                    trade: "Plumbing",
                    associations: ["Plumbing-Heating-Cooling Contractors Association (PHCC)", "American Society of Plumbing Engineers (ASPE)", "United Association (UA)"],
                  },
                  {
                    trade: "Roofing",
                    associations: ["National Roofing Contractors Association (NRCA)", "Roofing Contractors Association (state chapters)", "Asphalt Roofing Manufacturers Association (ARMA)"],
                  },
                  {
                    trade: "Electrical",
                    associations: ["Independent Electrical Contractors (IEC)", "National Electrical Contractors Association (NECA)", "International Brotherhood of Electrical Workers (IBEW)"],
                  },
                  {
                    trade: "General Contracting",
                    associations: ["Associated General Contractors (AGC)", "National Association of Home Builders (NAHB)", "Associated Builders and Contractors (ABC)"],
                  },
                ].map((item) => (
                  <div key={item.trade} className="p-5 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <p className="font-semibold text-white text-sm mb-3">{item.trade}</p>
                    <ul className="space-y-1.5">
                      {item.associations.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-[#d1d5db]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Supplier and Manufacturer Links
              </h2>
              <p>
                Equipment manufacturers and suppliers often maintain dealer or contractor locator pages on their websites. These pages link to their authorized dealers — and manufacturer websites frequently carry significant domain authority. Getting listed is often as simple as asking.
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "HVAC: Trane, Carrier, Lennox, Rheem, Daikin, Mitsubishi — all have dealer locator programs. If you're an authorized dealer, request your listing.",
                  "Roofing: GAF, Owens Corning, CertainTeed, Atlas — all have contractor/roofer finder pages for certified installers.",
                  "Plumbing: Kohler, Moen, American Standard, Navien — some have preferred contractor programs with directory listings.",
                  "Building supply: Local lumber yards, hardware distributors, and supply houses sometimes feature contractor partners on their websites. Ask your suppliers.",
                  "Equipment rental: Some local equipment rental companies maintain referral lists of contractors. A quick call asking to be added costs nothing.",
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
                Local Press and Sponsorships
              </h2>
              <p>
                Local news sites, neighborhood blogs, and community publications are link goldmines — they&apos;re locally relevant, often have decent domain authority, and their links signal community presence to Google&apos;s local algorithm. The challenge is earning coverage rather than just buying a listing.
              </p>
              <p className="mt-4">
                Sponsorship is the most reliable path. Local news sites frequently publish sponsor acknowledgments with links. Sponsoring a local sports team, school event, charity fundraiser, or community festival often includes a website link in the sponsor acknowledgment.
              </p>
              <p className="mt-4">
                Local news coverage tactics that work for contractors:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Press releases: Announce new certifications, new services, business milestones (10-year anniversary, 1,000 jobs completed), or community initiatives. Send to local news sites and neighborhood publications.",
                  "Community stories: Offer to do free HVAC inspections for elderly residents in summer heat. Do a free roof check for a struggling local nonprofit. These become news stories with links.",
                  "Expert commentary: Local news sites regularly need expert quotes about weather-related home maintenance topics. Position yourself as the go-to local expert for your trade.",
                  "Local blogs and neighborhood sites: Nextdoor, local Facebook groups, and neighborhood blogs often accept guest content or highlight local businesses. Write a seasonal home maintenance tip article.",
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
                Chamber of Commerce and Local Business Groups
              </h2>
              <p>
                Chamber of Commerce membership is a well-known local SEO tactic for good reason: most chambers publish a member directory with website links, and chamber websites tend to have strong local domain authority built over many years.
              </p>
              <p className="mt-4">
                Beyond the link, chamber membership builds referral relationships with other local businesses — real estate agents, property managers, and builders regularly refer contractors to clients.
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Local Chamber of Commerce: Join and ensure your website is listed in the member directory.",
                  "State contractor associations: Most states have contractor licensing boards or associations with member directories.",
                  "BNI and local networking groups: BNI chapters maintain member websites and often publish profiles with links.",
                  "Local real estate associations: Get listed with your local REALTOR association as a preferred vendor — real estate sites are locally relevant and some have high authority.",
                  "Local homebuilder associations: HBA member directories are relevant, locally authoritative, and often list subcontractors and specialty contractors.",
                  "Rotary, Lions Club, civic organizations: Active membership frequently results in member directory listings and event sponsor acknowledgments.",
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
                How to Track Your Link Building Progress
              </h2>
              <p>
                Link building without tracking is guesswork. You need to know what links you have, what you&apos;re building, and whether your domain authority is trending up. Here&apos;s how to track it without enterprise-level tools:
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    tool: "Google Search Console",
                    desc: "Free. Shows all links Google has discovered pointing to your site. Go to Search Console → Links → Top linking sites. This is your ground truth for existing links.",
                  },
                  {
                    tool: "Ahrefs Free / Moz Link Explorer",
                    desc: "Free tiers show your domain rating (DR) and a sample of your backlink profile. Track DR monthly — consistent link building should show gradual upward trend over 6–12 months.",
                  },
                  {
                    tool: "Simple spreadsheet tracker",
                    desc: "Maintain a spreadsheet with: source site, URL of the link, date submitted, date link went live, domain authority of source. Update monthly.",
                  },
                  {
                    tool: "Google Alerts",
                    desc: "Set alerts for your business name. When a new site mentions you, it may include a link — and if it doesn't, you can reach out and request one.",
                  },
                ].map((item) => (
                  <div key={item.tool} className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <div className="text-green-400 font-semibold text-sm w-36 flex-shrink-0 pt-0.5">{item.tool}</div>
                    <div className="text-[#d1d5db] text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6">
                Set a monthly link building goal. For most contractors, 3–5 new quality links per month is achievable and sufficient to build authority steadily over 6–12 months. Consistency matters more than volume — 3 links per month for a year outperforms a burst of 30 links followed by nothing.
              </p>
            </section>

            <section className="mt-12 p-8 rounded-2xl bg-[#1c1c1c] border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                See Exactly Where Your Competitors Are Getting Their Links
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                Our free SEO audit includes a competitive link analysis — we identify the links your top-ranking competitors have that you don&apos;t, so you know exactly where to focus your link building efforts.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Get my free competitive audit
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
              <Link href="/blog/google-business-profile-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                The Complete Google Business Profile Guide for Home Service Businesses
              </Link>
              <Link href="/blog/seo-timeline" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                How Long Does SEO Take? A Realistic Timeline for Home Service Businesses
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
