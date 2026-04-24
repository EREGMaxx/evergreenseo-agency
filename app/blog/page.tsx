import { Clock, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    category: "HVAC",
    title: "How HVAC Companies Can Double Their Leads with Local SEO",
    excerpt:
      "Most HVAC companies are invisible online — competing on paid ads with no organic foundation. Here's the exact local SEO strategy that turns that around and builds a lead pipeline that keeps paying.",
    readTime: "5 min read",
    slug: "hvac-seo-guide",
  },
  {
    category: "Roofing",
    title: "The Roofing Contractor's Complete Guide to Ranking on Google in 2026",
    excerpt:
      "Google's algorithm has changed. Roofing contractors who understand E-E-A-T and local intent are dominating page 1 while others wonder where the calls went. Here's how to be in the first group.",
    readTime: "7 min read",
    slug: "roofing-contractor-seo",
  },
  {
    category: "Plumbing",
    title: "How Plumbers Can Get More Calls from Google in 2026",
    excerpt:
      "Plumbers who dominate local search don't rely on word of mouth alone. This guide covers the exact local SEO strategy that keeps your phone ringing without paying for every lead.",
    readTime: "5 min read",
    slug: "plumbing-seo",
  },
  {
    category: "Electrical",
    title: "Electrician SEO: How to Rank #1 in Your Service Area",
    excerpt:
      "Most electricians compete on referrals and hope. The ones growing fast have figured out local SEO. Here's the playbook that puts you at the top of Google when homeowners need an electrician.",
    readTime: "6 min read",
    slug: "electrician-seo",
  },
  {
    category: "Contracting",
    title: "General Contractor SEO: The Complete Guide to Getting Found Online",
    excerpt:
      "General contractors with strong SEO don't chase leads — leads find them. This guide covers everything from keyword strategy to link building for contractors ready to grow.",
    readTime: "6 min read",
    slug: "general-contractor-seo",
  },
  {
    category: "Mortgage",
    title: "Mortgage Broker SEO: How to Get Consistent Borrower Leads from Google",
    excerpt:
      "Mortgage brokers who rank on Google don't depend on referrals to survive rate changes. This guide shows how to build a pipeline of borrowers who are already looking for you.",
    readTime: "5 min read",
    slug: "mortgage-broker-seo",
  },
  {
    category: "Local SEO",
    title: "The Complete Google Business Profile Guide for Home Service Businesses",
    excerpt:
      "Your GBP listing shows up before your website, before your ads, before everything. Most businesses set it up once and forget it — here's what to do instead to turn it into a lead machine.",
    readTime: "4 min read",
    slug: "google-business-profile-guide",
  },
  {
    category: "Local SEO",
    title: "Local SEO in 2026: Everything Home Service Businesses Need to Know",
    excerpt:
      "Local SEO has changed more in the last 12 months than in the previous five years. This complete guide covers what actually works in 2026 for home service businesses.",
    readTime: "8 min read",
    slug: "local-seo-guide",
  },
];

export const metadata = {
  title: "SEO Blog | Evergreen SEO Agency",
  description:
    "Local SEO tips, strategies, and insights for service businesses. HVAC, roofing, plumbing, and more.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050508]">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#d1d5db] hover:text-white transition-colors text-sm"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <section className="pt-8 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            SEO Insights
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            The Evergreen{" "}
            <span className="text-green-400">SEO Blog</span>
          </h1>
          <p className="text-[#d1d5db] text-xl max-w-2xl mx-auto">
            Practical SEO strategies for local service businesses. No fluff, no recycled advice.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative rounded-2xl border border-[#1e1e2e] bg-[#1c1c1c] p-8 hover:border-green-500/30 transition-all duration-300 flex flex-col"
              >
                {/* Category tag */}
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-4 w-fit">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-green-400 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-[#d1d5db] leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#252530]">
                  <div className="flex items-center gap-1.5 text-[#d1d5db] text-xs">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1.5 text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
                  >
                    Read More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[#1e1e2e] bg-[#0d0d14]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to rank?
          </h2>
          <p className="text-[#d1d5db] mb-8">
            Get a free SEO audit and see exactly what&apos;s holding your business back from page 1.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/25"
          >
            Get My Free SEO Audit
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
