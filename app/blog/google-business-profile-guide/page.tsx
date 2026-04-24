import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Complete Google Business Profile Guide for Home Service Businesses | Evergreen SEO Agency",
  description:
    "A complete guide to Google Business Profile optimization for home service businesses. How to set up, optimize, and maintain your GBP to dominate local search and generate more calls.",
  openGraph: {
    title: "The Complete Google Business Profile Guide for Home Service Businesses | Evergreen SEO Agency",
    description:
      "Complete GBP optimization guide for home service businesses. Set up, optimize, and maintain your Google Business Profile to dominate local search.",
    type: "article",
    url: "https://evergreenseoagency.com/blog/google-business-profile-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Complete Google Business Profile Guide for Home Service Businesses | Evergreen SEO Agency",
    description:
      "Complete GBP optimization guide for home service businesses. Set up, optimize, and maintain your Google Business Profile to dominate local search.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Complete Google Business Profile Guide for Home Service Businesses",
  description:
    "A complete guide to Google Business Profile optimization for home service businesses — setup, optimization, and ongoing maintenance to dominate local search.",
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
    "@id": "https://evergreenseoagency.com/blog/google-business-profile-guide",
  },
};

export default function GbpGuidePage() {
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
              Is your Google Business Profile working as hard as it should? Find out free.
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
            Google Business Profile
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            The Complete Google Business Profile Guide for Home Service Businesses
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
              Your Google Business Profile (GBP) is the most powerful free tool available to local service businesses. It controls whether you appear in the Local Pack — the map and top 3 business listings at the top of local search results. Those 3 spots capture over 60% of all clicks for local service searches. This guide covers everything you need to know to optimize yours and stay there.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                What Is Google Business Profile and Why It Matters
              </h2>
              <p>
                Google Business Profile (formerly Google My Business) is Google&apos;s free business directory. When someone searches for &ldquo;HVAC company near me&rdquo; or &ldquo;plumber in [city]&rdquo;, Google shows a map with 3 local results before any website links. These are the Local Pack results, and they come entirely from GBP data.
              </p>
              <p className="mt-4">
                For home service businesses, the Local Pack is everything. Customers in emergency situations (burst pipe, AC out in summer, electrical issue) will call one of the first 3 results they see without visiting a website. They see your rating, your photos, your hours, and your phone number — and they call. Your GBP is often making the sale before your website ever gets a chance.
              </p>
              <p className="mt-4">
                Even for non-emergency searches, studies show that 84% of GBP views come from discovery searches — people who didn&apos;t search for your business by name but found you while looking for your service. Your GBP is your most important first impression with new customers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Setting Up Your GBP Correctly
              </h2>
              <p>
                Before you can optimize, you need a properly set up and verified profile. Here&apos;s the setup checklist:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Go to business.google.com and claim or create your listing",
                  "Business name: Use your exact legal business name — no keyword stuffing. 'Smith Plumbing & Heating' not 'Smith Best Plumber Plumbing Services'",
                  "Address: Enter your exact registered business address. If you're home-based and prefer not to show your address, you can hide it and use Service Area mode",
                  "Phone: Use a local area code number. Toll-free numbers signal lower local relevance",
                  "Website: Link to your actual website homepage, not a landing page or third-party site",
                  "Verify your listing: Google sends a postcard, calls, or allows video verification. Until verified, your listing won't rank",
                  "Time zone and hours: Set accurate hours including holiday hours",
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
                Category Selection: The Most Overlooked GBP Setting
              </h2>
              <p>
                Your primary business category is the single most important field in your GBP for local rankings. Google uses it to determine which searches you&apos;re eligible to appear for. Getting it wrong — or leaving it generic — can cost you significant Local Pack visibility.
              </p>
              <p className="mt-4">
                Rules for category selection:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Primary category: Be as specific as possible. 'HVAC Contractor' not 'Contractor'. 'Plumber' not 'Home Services'",
                  "Secondary categories: Add every relevant secondary category up to the maximum allowed. Each one expands the searches you can appear for",
                  "Check competitor categories: Search your main keyword in Google, click on competitors in the Local Pack, and scroll to their categories. This shows you exactly which categories are driving Local Pack appearances in your market",
                  "Don't use unrelated categories: Adding unrelated categories to try to appear for more searches is a spam signal Google penalizes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Example category setup for an HVAC company: Primary: HVAC Contractor. Secondary: Air Conditioning Contractor, Heating Contractor, Furnace Repair Service, Duct Cleaning Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Business Description: Your First Sales Copy
              </h2>
              <p>
                Your GBP business description is 750 characters and shows in your profile when customers view it. It&apos;s indexable by Google and carries keyword weight for local ranking. Here&apos;s how to write it:
              </p>
              <div className="mt-4 p-5 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                <p className="text-sm font-semibold text-white mb-3">High-Converting Description Formula:</p>
                <ol className="space-y-2 text-sm text-[#d1d5db] list-decimal list-inside">
                  <li>Lead with your primary keyword in the first sentence: &ldquo;[City]&apos;s trusted HVAC contractor for residential and commercial heating and cooling.&rdquo;</li>
                  <li>State your service area: &ldquo;Serving [city], [suburb 1], [suburb 2], and all of [county/region].&rdquo;</li>
                  <li>Key differentiators: licensed, insured, years in business, 24/7 availability if applicable</li>
                  <li>Proof: number of jobs completed, years experience, rating</li>
                  <li>Soft CTA: &ldquo;Call us for a free estimate.&rdquo;</li>
                </ol>
              </div>
              <p className="mt-4">
                The first 250 characters are what most users see before &ldquo;Read more&rdquo; — make them count. Get your primary keyword and service area into those first 250 characters.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Photos: The GBP Feature Most Businesses Ignore
              </h2>
              <p>
                GBP listings with photos get 42% more requests for directions and 35% more click-throughs than listings without photos — according to Google&apos;s own data. For home service businesses, photos are your portfolio and your trust signal simultaneously.
              </p>
              <p className="mt-4">
                Photo strategy for home service GBPs:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Team photos: Real people, not stock. Customers want to see who is coming to their home",
                  "Vehicles: Branded trucks and vans with your logo are strong trust signals",
                  "Before/after work: Show the problem and the solution side by side",
                  "Equipment: High-quality tools and equipment signal professionalism",
                  "Certifications: Photos of actual certificates, permits, and awards",
                  "Logo: Upload your logo as the cover photo with proper sizing",
                  "Volume: Aim for 25+ photos. GBPs with more photos rank and convert better",
                  "Recency: Add new photos monthly. Google notices update frequency",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Name your photo files descriptively before uploading — &ldquo;hvac-installation-dallas-tx.jpg&rdquo; carries more keyword weight than &ldquo;IMG_4821.jpg&rdquo;. Add alt descriptions in GBP where the option is available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Reviews: Your Most Powerful Ranking and Conversion Signal
              </h2>
              <p>
                Google reviews are the #1 factor in Local Pack rankings according to independent local SEO research. Volume, recency, and average rating all matter. A business with 200 reviews at 4.8 stars will outrank a competitor with 20 reviews at 5.0 stars almost every time.
              </p>
              <p className="mt-4">
                The review collection system that actually works:
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <div className="text-green-400 font-bold text-sm w-24 flex-shrink-0 pt-0.5">Step 1</div>
                  <div className="text-[#d1d5db] text-sm">Get your direct Google review link from your GBP dashboard. Shorten it and save it for easy sharing.</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <div className="text-green-400 font-bold text-sm w-24 flex-shrink-0 pt-0.5">Step 2</div>
                  <div className="text-[#d1d5db] text-sm">The day every job closes, send an automated text: &ldquo;Hi [name], thanks for choosing [company]! Happy with our work? A Google review would mean the world to us — takes 30 seconds: [link]&rdquo;</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <div className="text-green-400 font-bold text-sm w-24 flex-shrink-0 pt-0.5">Step 3</div>
                  <div className="text-[#d1d5db] text-sm">Respond to every review — positive and negative. Responding to all reviews signals active management and boosts GBP ranking signals.</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                  <div className="text-green-400 font-bold text-sm w-24 flex-shrink-0 pt-0.5">Step 4</div>
                  <div className="text-[#d1d5db] text-sm">For negative reviews: respond professionally, offer to make it right offline, never argue. A negative review with a gracious response is often more trust-building than no review at all.</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Google Posts and Q&A: The Features Nobody Uses (You Should)
              </h2>
              <p>
                Google Posts are mini-announcements that appear on your GBP and in your local search results. They expire after 7 days, which means publishing consistently signals to Google that your business is active and engaged. Publish at least twice per month.
              </p>
              <p className="mt-4">
                Post ideas for home service businesses: seasonal service reminders (furnace tune-up before winter, AC check before summer), current promotions, project spotlights with before/after photos, new service announcements, or educational tips.
              </p>
              <p className="mt-4">
                Q&A is your opportunity to control the conversation. Anyone can ask — and anyone can answer — questions on your GBP. If you haven&apos;t pre-populated Q&A yourself, competitors or random users might be answering questions incorrectly. Log in and add 10–15 questions and answers from the most common things customers ask you: pricing ranges, license status, service area, emergency availability, warranty terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                GBP Maintenance: The Ongoing Work That Keeps You Ranking
              </h2>
              <p>
                GBP isn&apos;t set-it-and-forget-it. Google rewards active, frequently updated profiles with better ranking. Here&apos;s the maintenance schedule:
              </p>
              <div className="mt-4 space-y-4">
                {[
                  { period: "Weekly", result: "Publish one Google Post. Check for new reviews and respond within 48 hours. Check for any suggested edits from the public and accept or reject." },
                  { period: "Monthly", result: "Add 3–5 new photos. Review your Q&A for any new questions. Check that your hours are accurate (update for holidays). Review your GBP Insights to see which searches are driving views." },
                  { period: "Quarterly", result: "Review your services list and add any new services. Update your business description if your offering has changed. Check competitor profiles to see if they've added categories or features you haven't." },
                  { period: "Annually", result: "Full audit: category review, NAP consistency check across all directories, photo library refresh, description rewrite with current keywords." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <div className="text-green-400 font-bold text-sm w-24 flex-shrink-0 pt-0.5">{item.period}</div>
                    <div className="text-[#d1d5db] text-sm">{item.result}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 p-8 rounded-2xl bg-[#1c1c1c] border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Is Your GBP Pulling Its Weight?
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                A fully optimized Google Business Profile is the foundation of every successful local SEO strategy. If yours isn&apos;t generating consistent calls and direction requests, there are specific, fixable reasons — and we can tell you exactly what they are.
              </p>
              <p className="text-[#cbd5e1] mb-8">
                Get a free audit that covers your GBP, website, and competitive landscape — no cost, no obligation.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Get your free GBP and SEO audit
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
              <Link href="/blog/hvac-seo-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                How HVAC Companies Can Double Their Leads with Local SEO in 2026
              </Link>
              <Link href="/blog/roofing-contractor-seo" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                The Roofing Contractor&apos;s Guide to Ranking on Google in 2026
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
