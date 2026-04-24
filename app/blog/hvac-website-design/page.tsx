import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Website Design Guide 2026 | Evergreen SEO Agency",
  description:
    "Most HVAC websites lose leads before the phone rings. Here's exactly what your site needs to convert visitors into calls and form submissions.",
  openGraph: {
    title: "HVAC Website Design Guide 2026 | Evergreen SEO Agency",
    description:
      "Most HVAC websites lose leads before the phone rings. Here's exactly what your site needs to convert visitors into calls and form submissions.",
    type: "article",
    url: "https://evergreenseo.agency/blog/hvac-website-design",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Website Design Guide 2026 | Evergreen SEO Agency",
    description:
      "Most HVAC websites lose leads before the phone rings. Here's exactly what your site needs to convert visitors into calls and form submissions.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HVAC Website Design: What Your Site Needs to Convert Visitors into Leads",
  description:
    "Most HVAC websites lose leads before the phone rings. Here's exactly what your site needs to convert visitors into calls and form submissions.",
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
    "@id": "https://evergreenseo.agency/blog/hvac-website-design",
  },
};

export default function HvacWebsiteDesignPage() {
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
              Is your HVAC website losing leads? Find out exactly what to fix — free audit.
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
            HVAC
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            HVAC Website Design: What Your Site Needs to Convert Visitors into Leads
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
              Your HVAC website is either working as a 24/7 lead machine or it&apos;s a digital brochure collecting dust. The difference isn&apos;t your logo or color scheme — it&apos;s a handful of structural and conversion elements that most HVAC sites get completely wrong. This guide covers what separates HVAC websites that generate consistent calls from ones that just look nice.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Why Most HVAC Websites Fail to Generate Leads
              </h2>
              <p>
                The average HVAC website has a fundamental disconnect: it&apos;s designed to describe the business, not to convert visitors. It tells people what you do, where you&apos;re located, and maybe shows some photos of your trucks. What it doesn&apos;t do is guide a visitor — who is already motivated to hire someone — toward picking up the phone or filling out a form.
              </p>
              <p className="mt-4">
                Think about who visits an HVAC website. They&apos;re usually in one of two states:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Emergency mode — AC is out in July, furnace died in January. They need someone NOW and are scanning 2–3 websites simultaneously to see who answers the phone",
                  "Research mode — planning a new system installation, comparing prices, vetting contractors before making a call",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Both visitor types need your phone number immediately visible, clear service descriptions, and trust signals — in that order. Most HVAC sites bury the phone number, make visitors click through multiple pages to understand what they do, and provide zero social proof above the fold.
              </p>
              <p className="mt-4">
                The other common failure: slow load times. Studies consistently show that 53% of mobile visitors abandon a site that takes more than 3 seconds to load. HVAC customers are almost always on mobile, often in an uncomfortable situation. A 6-second load time costs you half your leads before they even see your site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                The 5 Elements Every HVAC Website Needs
              </h2>
              <p>
                These aren&apos;t nice-to-haves. Missing any one of these is costing you leads right now.
              </p>

              <div className="mt-6 space-y-6">
                {[
                  {
                    num: "01",
                    title: "A Phone Number That&apos;s Always Visible",
                    body: "Your phone number should be in the top right corner of your header on desktop, and a sticky tap-to-call button at the bottom of the screen on mobile. Never make someone scroll or search for how to contact you. Every second they spend looking is a second they&apos;re already on your competitor&apos;s site.",
                  },
                  {
                    num: "02",
                    title: "A Clear, Specific Value Proposition in the Hero",
                    body: "Your homepage headline should answer one question: 'Why should I call you instead of someone else?' Not 'Welcome to ABC HVAC' — that&apos;s not a value proposition. Instead: 'Fast, Honest HVAC Repair in [City] — Same-Day Service Available.' Specific, benefit-driven, local.",
                  },
                  {
                    num: "03",
                    title: "Social Proof Above the Fold",
                    body: "Your average rating and review count should be visible in the hero section — not at the bottom of the page. '4.9 stars from 180+ reviews' is the single most powerful trust signal you have. Show it immediately. Pair it with logos of certifications: NATE, EPA 608, manufacturer certifications.",
                  },
                  {
                    num: "04",
                    title: "Service Pages for Every Service",
                    body: "Not a single page that lists all your services in bullets — dedicated pages for AC repair, AC installation, furnace repair, furnace installation, heat pumps, duct cleaning, etc. Each page targets its own keyword and gives Google a clear signal of what you do. This is the difference between ranking for one keyword and ranking for 20.",
                  },
                  {
                    num: "05",
                    title: "A Lead Capture Form That Actually Gets Filled Out",
                    body: "Your contact form should be short (name, phone, service needed, zip code — nothing else), visually prominent, and available on every page. Don&apos;t hide it on a Contact page. Put it on your homepage, your service pages, and your header. The fewer fields, the higher the completion rate.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5 p-5 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <div className="text-green-400 font-bold text-2xl flex-shrink-0 leading-none mt-1">{item.num}</div>
                    <div>
                      <p className="font-semibold text-white mb-2">{item.title}</p>
                      <p className="text-sm text-[#d1d5db]">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Speed and Mobile Optimization: The Foundation Everything Else Rests On
              </h2>
              <p>
                A beautiful HVAC website that loads in 7 seconds on mobile is a net negative for your business. Google uses Core Web Vitals as ranking signals, and mobile users who wait more than 3 seconds leave — permanently. Here&apos;s what determines your site speed:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Image optimization: Every image on your site should be compressed to under 200KB and served in WebP format. Unoptimized photos from your iPhone are the #1 cause of slow HVAC websites.",
                  "Hosting quality: Cheap shared hosting from GoDaddy or Bluehost causes slow server response times. Upgrade to a quality host (WP Engine, Cloudflare Pages, or Vercel) — it's $15–30/month and can cut your load time in half.",
                  "Unnecessary plugins and scripts: Most WordPress HVAC sites are loaded with plugins that bloat load time. Audit quarterly and remove anything you're not actively using.",
                  "Mobile-first layout: Your site should be designed for mobile first, then scaled up for desktop. Over 70% of HVAC searches happen on mobile, especially emergency searches.",
                  "Core Web Vitals: Check your site at PageSpeed Insights (pagespeed.web.dev). Target LCP under 2.5 seconds, CLS under 0.1, INP under 200ms. These are Google's specific metrics.",
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
                Trust Signals: Everything That Answers &ldquo;Can I Trust You?&rdquo;
              </h2>
              <p>
                Hiring an HVAC contractor is a trust purchase. Someone is letting you into their home, giving you access to their mechanical systems, and often paying $2,000–$15,000 for equipment. Your website needs to answer every trust question before they have to ask it.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  { title: "License & Insurance", text: "Display your contractor license number and state it's insured. Some states allow you to display your actual license number — do it. It eliminates the 'is this legit?' question immediately." },
                  { title: "Years in Business", text: "'Serving [City] Since [Year]' is simple and powerful. Longevity signals stability. New businesses can compensate with team credentials instead." },
                  { title: "Manufacturer Certifications", text: "Trane Comfort Specialist, Carrier Factory Authorized Dealer, Lennox Premier Dealer — these certifications signal higher training and accountability. Show their logos prominently." },
                  { title: "NATE Certification", text: "North American Technician Excellence certification is the gold standard for HVAC technicians. If your team is NATE-certified, feature it on every service page." },
                  { title: "Team Photos", text: "Real photos of your actual team outperform stock photos significantly. Customers want to see who is coming to their home. A friendly team photo humanizes the business." },
                  { title: "Google Review Widget", text: "Embed a live Google reviews widget so visitors can see your actual reviews without leaving the site. Static review quotes feel manufactured; a live widget shows real-time verification." },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-[#1c1c1c] border border-[#1e1e2e]">
                    <p className="font-semibold text-white text-sm mb-2">{item.title}</p>
                    <p className="text-xs text-[#d1d5db] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                Clear CTAs: Telling Visitors Exactly What to Do Next
              </h2>
              <p>
                Most HVAC websites have weak or absent calls-to-action. A call-to-action isn&apos;t just a &ldquo;Contact Us&rdquo; link in the footer — it&apos;s a clear, visually prominent instruction that appears multiple times throughout every page.
              </p>
              <p className="mt-4">
                CTA best practices for HVAC websites:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Primary CTA: 'Call Now: [phone number]' — for emergency and ready-to-hire visitors",
                  "Secondary CTA: 'Get a Free Quote' or 'Schedule Service' — for research-mode visitors who aren't ready to call",
                  "Both CTAs should appear in the hero section, at the end of every service page section, and in a sticky mobile bar",
                  "Button color should contrast strongly with your background — green, orange, or red outperform blue and grey for urgency",
                  "Specificity converts better than vagueness: 'Get a Free Same-Day Estimate' outperforms 'Contact Us'",
                  "Add urgency where truthful: 'Available Today' or 'Same-Day Service' if you actually offer it",
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
                Contact Forms That Convert
              </h2>
              <p>
                The fastest way to kill form conversions is to ask for too much information. Every additional field you add reduces completion rates by approximately 10–15%. Here&apos;s what to ask for — and what to cut:
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <p className="font-semibold text-green-400 text-sm mb-3">✓ Include these fields</p>
                  <ul className="text-sm text-[#d1d5db] space-y-1.5">
                    {["First name", "Phone number (required)", "Service needed (dropdown)", "Zip code", "Best time to call (optional)"].map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="font-semibold text-red-400 text-sm mb-3">✗ Remove these fields</p>
                  <ul className="text-sm text-[#d1d5db] space-y-1.5">
                    {["Last name (ask later)", "Email (ask later)", "Address (ask later)", "Message/details box", "How did you hear about us"].map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6">
                After form submission, send an immediate automated text to confirm you received the request and give an ETA for callback. This single touchpoint — texting a lead within 5 minutes of form submission — increases your contact rate by 80% compared to calling the next business day.
              </p>
            </section>

            <section className="mt-12 p-8 rounded-2xl bg-[#1c1c1c] border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Get a Free HVAC Website Audit
              </h2>
              <p className="text-[#cbd5e1] mb-6">
                We audit HVAC websites for speed, SEO, conversion elements, and trust signals — then give you a prioritized list of exactly what to fix. No cost, no obligation.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Get my free website audit
                <ArrowRight size={16} />
              </Link>
            </section>

            {/* Internal links */}
            <section className="mt-10 pt-10 border-t border-[#1e1e2e] space-y-4">
              <p className="text-sm font-semibold text-white">You might also like:</p>
              <Link href="/blog/hvac-seo-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                How HVAC Companies Can Double Their Leads with Local SEO
              </Link>
              <Link href="/blog/google-business-profile-guide" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                <ArrowRight size={14} />
                The Complete Google Business Profile Guide for Home Service Businesses
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
