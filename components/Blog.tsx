"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    category: "HVAC",
    title: "How HVAC Companies Can Double Their Leads with Local SEO",
    excerpt:
      "Most HVAC companies are invisible online — competing on paid ads with no organic foundation. Here's the exact local SEO strategy that turns that around.",
    readTime: "5 min read",
    slug: "hvac-local-seo-double-leads",
  },
  {
    category: "Roofing",
    title: "The Roofing Contractor's Guide to Ranking on Google in 2026",
    excerpt:
      "Google's algorithm has changed. Roofing contractors who understand E-E-A-T and local intent are dominating page 1 while others wonder where the calls went.",
    readTime: "7 min read",
    slug: "roofing-contractor-google-ranking-2026",
  },
  {
    category: "Local SEO",
    title: "Why Your Google Business Profile is Your #1 Lead Generator",
    excerpt:
      "Your GBP listing shows up before your website. Before your ads. Before everything. Most businesses set it up once and forget it — here's what to do instead.",
    readTime: "4 min read",
    slug: "google-business-profile-lead-generator",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-green-500/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            SEO Insights
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Learn what actually{" "}
            <span className="text-green-400">moves the needle.</span>
          </h2>
          <p className="text-[#d1d5db] text-lg">
            No fluff. No recycled advice. Just proven tactics for local service businesses.
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-[#1e1e2e] bg-[#1c1c1c] p-8 hover:border-green-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Category tag */}
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-4 w-fit">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-green-400 transition-colors">
                {post.title}
              </h3>

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
                <a
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1.5 text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
                >
                  Read More
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1e1e2e] bg-[#1c1c1c] text-white text-sm font-medium hover:border-green-500/30 hover:bg-[#252530] transition-all duration-200"
          >
            View All Posts
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
