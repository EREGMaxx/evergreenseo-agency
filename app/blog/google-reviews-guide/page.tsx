import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get More 5-Star Google Reviews | Evergreen SEO Agency",
  description:
    "A step-by-step guide to getting more Google reviews for HVAC, roofing, and home service businesses. More reviews = higher rankings = more leads.",
  openGraph: {
    title: "How to Get More 5-Star Google Reviews | Evergreen SEO Agency",
    description:
      "A step-by-step guide to getting more Google reviews for HVAC, roofing, and home service businesses. More reviews = higher rankings = more leads.",
    type: "article",
    url: "https://evergreenseo.agency/blog/google-reviews-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get More 5-Star Google Reviews | Evergreen SEO Agency",
    description:
      "A step-by-step guide to getting more Google reviews for HVAC, roofing, and home service businesses. More reviews = higher rankings = more leads.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get More 5-Star Google Reviews for Your Home Service Business",
  description:
    "A step-by-step guide to getting more Google reviews for HVAC, roofing, and home service businesses. More reviews = higher rankings = more leads.",
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
    "@id": "https://evergreenseo.agency/blog/google-reviews-guide",
  },
};

export default function GoogleReviewsGuidePage() {
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
              Want more 5-star reviews and higher local rankings? We can help — starting with a free audit.
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
            Google Reviews
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            How to Get More 5-Star Google Reviews for Your Home Service Business
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#d1d5db] mb-10 pb-10 border-b border-[#1e1e2e]">
            <span>Evergreen SEO Agency</span>
            <span>·</span>
            <span>April 23, 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>

          <div className="prose-content text-[#cbd5e1] leading-relaxed space-y-8">

            <p className="text-lg text-[#e2e8f0] leading-relaxed">
              Google reviews are the single most powerful ranking factor for the Local Pack — the map results at the top of every local search. For home service businesses, they&apos;re also your most effective sales tool. A plumber with 150 reviews at 4.9 stars doesn&apos;t need a pitch. This guide covers exactly how to build that review volume, what to do with negative reviews, and how many you actually need to compete in your market.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Why Google Reviews Matter for Local SEO
              </h2>
              <p>
                Google&apos;s local ranking algorithm weighs three primary factors: relevance, distance, and prominence. Reviews are the clearest signal of prominence. When Google has to choose between two equally relevant HVAC contractors at a similar distance from the searcher, the one with more high-quality recent reviews wins — nearly every time.
              </p>
              <p className="mt-4">
                The impact isn&apos;t just rankings. Studies show that 93% of consumers say online reviews influence their purchasing decisions, and 87% won&apos;t consider a business with a rating below 3.5 stars. For high-trust services like plumbing, electrical, or roofing — where someone is letting a stranger into their home — reviews are doing the selling before you ever pick up the phone.
              </p>
              <p className="mt-4">
                Reviews also feed into Google&apos;s click-through signals. A business with 200 reviews at 4.8 stars generates dramatically more clicks from the Local Pack than a competitor with 15 reviews at 5.0 stars. Counter-intuitively, a small number of perfect reviews looks suspicious to modern consumers. Volume builds trust in a way that perfection alone can&apos;t.
              </p>
              <div className="mt-6 p-5 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                <p className="text-sm font-semibold text-white mb-3">The review ranking trifecta Google uses:</p>
                <ul className="space-y-2 text-sm text-[#d1d5db]">
                  {[
                    "Volume — how many total reviews you have",
                    "Velocity — how frequently you're getting new reviews",
                    "Rating — your average star rating (3.5+ is table stakes; 4.5+ is competitive)",
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
                How to Ask for Reviews: Timing and Scripts That Work
              </h2>
              <p>
                The biggest mistake home service businesses make with reviews isn&apos;t failing to ask — it&apos;s asking at the wrong time in the wrong way. Review requests need to be frictionless, timely, and feel natural rather than transactional.
              </p>
              <p className="mt-4">
                <strong className="text-white">Timing is everything.</strong> The optimal window for a review request is within 2–4 hours of job completion, while the customer&apos;s satisfaction is still fresh and before they&apos;ve moved on mentally. A request sent three days later converts at a fraction of the rate.
              </p>
              <p className="mt-4">
                Before you send any review request, generate your Google review shortlink. Go to your Google Business Profile dashboard, click &ldquo;Get more reviews,&rdquo; and copy the direct link. Use a URL shortener to make it clean and easy to tap on mobile.
              </p>

              <div className="mt-6 space-y-4">
                <p className="font-semibold text-white">Text message script (highest conversion rate):</p>
                <div className="p-5 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e] text-sm text-[#d1d5db]">
                  <p>&ldquo;Hi [Name]! This is [Technician] from [Company]. Thanks so much for having us out today — it was great working with you. If you&apos;re happy with the service, we&apos;d really appreciate a quick Google review. It only takes about 30 seconds and helps us a lot: [link]. Thanks again!&rdquo;</p>
                </div>

                <p className="font-semibold text-white mt-6">Email follow-up script (for jobs where you have email):</p>
                <div className="p-5 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e] text-sm text-[#d1d5db]">
                  <p><strong>Subject:</strong> Quick favor from [Company Name]</p>
                  <p className="mt-3">&ldquo;Hi [Name],</p>
                  <p className="mt-2">Thanks for choosing [Company] for your [service] — we really appreciate your business.</p>
                  <p className="mt-2">Would you mind leaving us a quick Google review? It takes less than a minute and genuinely helps homeowners like you find trustworthy local contractors.</p>
                  <p className="mt-2">[Leave a Review Button → link]</p>
                  <p className="mt-2">Thanks so much, [Technician Name]&rdquo;</p>
                </div>
              </div>

              <p className="mt-6">
                <strong className="text-white">In-person ask:</strong> Train your technicians to verbally mention the review at the end of every job. Something as simple as: &ldquo;If everything looks good for you today, a Google review would really help us out — I&apos;ll shoot you a link in a text.&rdquo; The in-person mention primes the customer so the text doesn&apos;t feel cold.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Automating Review Requests Without Losing the Personal Touch
              </h2>
              <p>
                Manual review requests don&apos;t scale. If you&apos;re completing 10–30 jobs per week, you need a system that sends review requests automatically while still feeling personal. Here&apos;s how to build it without spending much:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "CRM-triggered texts: Most field service software (Jobber, ServiceTitan, Housecall Pro) has built-in review request automation. Set it to trigger 2 hours after job status changes to 'complete'. Use your custom script rather than the generic template.",
                  "Zapier + Google Sheets: If you're running lean, log completed jobs in a spreadsheet. A Zap can trigger an SMS or email via Twilio or SendGrid automatically when a new row is added.",
                  "Email automation: Use Mailchimp or ConvertKit free tier. Tag customers as 'job complete' and trigger a 3-email sequence: review request day 1, friendly reminder day 4 (if no response), final ask day 10.",
                  "QR codes on invoices: Add a QR code linking directly to your Google review page on every invoice and receipt. Customers can scan and leave a review while you're still packing up.",
                  "Follow-up calls: For bigger jobs (roof replacements, HVAC installations), a follow-up call 1 week later to check satisfaction is a natural moment to ask for a review — and it reinforces that you care about quality.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                What you should never do: offer incentives for reviews (violates Google&apos;s terms), buy fake reviews (algorithmic detection is sophisticated and penalties are severe), or ask employees and friends to leave reviews (violates Google policy and is easily spotted).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Responding to Negative Reviews: The Framework That Wins
              </h2>
              <p>
                No business with significant review volume stays at 5.0 stars. Negative reviews happen. How you respond to them can actually become a competitive advantage — because most businesses handle them poorly.
              </p>
              <p className="mt-4">
                The psychology: potential customers reading your reviews aren&apos;t just looking at the complaints — they&apos;re watching how you handle them. A business that responds to a 1-star review calmly, takes responsibility, and offers to make it right signals professionalism and accountability. That&apos;s often more impressive than the glowing 5-star reviews.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                <p className="text-sm font-semibold text-white mb-4">The 5-step negative review response framework:</p>
                <div className="space-y-3">
                  {[
                    { step: "1. Acknowledge", text: "Thank them for the feedback. Never start with a defense." },
                    { step: "2. Apologize", text: "Express genuine regret that their experience didn't meet expectations — even if you think they're wrong." },
                    { step: "3. Take it offline", text: "Provide a direct phone number or email: 'Please call us at [number] so we can make this right.'" },
                    { step: "4. Don't argue", text: "Never debate facts publicly. You lose either way — even if you're right." },
                    { step: "5. Follow up", text: "If you resolve it, sometimes customers update their review. Don't count on it, but it happens." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3 text-sm text-[#d1d5db]">
                      <span className="text-green-400 font-semibold w-24 flex-shrink-0">{item.step}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6">
                <strong className="text-white">Sample negative review response:</strong> &ldquo;Hi [Name], thank you for sharing your experience. We&apos;re sorry to hear we didn&apos;t meet your expectations — this isn&apos;t the standard we hold ourselves to. Please give us a call at [number] so we can understand what happened and make it right. We appreciate your business and want the chance to earn your trust back.&rdquo;
              </p>
              <p className="mt-4">
                This response takes under 2 minutes to write and signals to every future customer who reads it that you&apos;re a business that takes quality seriously.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                How Many Reviews Do You Need to Rank?
              </h2>
              <p>
                The honest answer: it depends entirely on your market. A small town HVAC contractor might dominate with 40 reviews. A plumber competing in Los Angeles needs 200+. The target isn&apos;t an absolute number — it&apos;s beating your specific competitors in your specific market.
              </p>
              <p className="mt-4">
                Here&apos;s how to find your actual target:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Search your primary keyword (e.g., 'HVAC contractor [your city]') in Google",
                  "Look at the top 3 Local Pack results — these are your ranking targets",
                  "Count the reviews of each competitor and note their average rating",
                  "Your goal: exceed the #1 competitor in both volume and rating",
                  "Set a 90-day sprint: if #1 has 80 reviews, your goal is 100 reviews in 90 days",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                For most competitive markets in mid-sized cities: 75–150 reviews gets you into Local Pack contention. 150–300 reviews with strong velocity (5+ new reviews per month) establishes dominance. 300+ reviews with consistent 4.7+ rating is near-impossible to displace by a competitor starting from zero.
              </p>
              <p className="mt-4">
                Review velocity matters as much as total volume. Google&apos;s algorithm weights recent reviews heavily. A business that got 100 reviews in 2022 and nothing since will often lose to a competitor who got 50 reviews in the last 12 months. Keep the system running permanently — not just until you hit a number.
              </p>
              <div className="mt-6 p-5 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                <p className="text-sm font-semibold text-white mb-3">Review velocity benchmarks by market size:</p>
                <div className="space-y-2 text-sm text-[#d1d5db]">
                  {[
                    { market: "Small town / rural", target: "5–10 reviews/month" },
                    { market: "Mid-size city (100k–500k)", target: "10–20 reviews/month" },
                    { market: "Major metro (500k+)", target: "20–40 reviews/month" },
                  ].map((item) => (
                    <div key={item.market} className="flex justify-between items-center py-1 border-b border-[#252530] last:border-0">
                      <span>{item.market}</span>
                      <span className="text-green-400 font-medium">{item.target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 p-8 rounded-2xl bg-[#1c1c1c] border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Dominate Local Rankings?
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                Reviews are one piece of the local SEO puzzle. We audit your entire presence — GBP, website, citations, reviews, and competitors — and build you a prioritized action plan to rank higher and get more calls.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Get your free SEO audit
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
              <Link href="/blog/local-link-building" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                Local Link Building for Contractors: The Complete Guide
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
