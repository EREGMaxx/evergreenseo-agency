import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "We Got Your Message | Evergreen SEO Agency",
  description: "Thank you for reaching out. We'll review your online presence and get back to you within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#050508] flex flex-col items-center justify-center px-4">
      {/* Back nav */}
      <div className="absolute top-8 left-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#d1d5db] hover:text-white transition-colors text-sm"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div>

      <div className="text-center max-w-lg mx-auto">
        {/* Green checkmark */}
        <div className="w-24 h-24 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={48} className="text-green-400" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          We Got Your Message.
        </h1>

        {/* Subhead */}
        <p className="text-lg text-[#d1d5db] leading-relaxed mb-10">
          We&apos;ll review your online presence and get back to you within 24 hours with honest feedback.
        </p>

        {/* What to expect */}
        <div className="text-left p-6 rounded-2xl border border-[#1e1e2e] bg-[#1c1c1c] mb-10 space-y-3">
          <p className="text-sm font-semibold text-white mb-4">What happens next:</p>
          {[
            "We audit your website, GBP, and competitor rankings",
            "We identify exactly what's holding you back from page 1",
            "We send you a honest breakdown — no fluff, no hard sell",
            "You decide if we're a fit. Zero pressure.",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle size={12} className="text-green-400" />
              </div>
              <span className="text-[#d1d5db] text-sm">{step}</span>
            </div>
          ))}
        </div>

        {/* Back to home link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#1e1e2e] text-[#d1d5db] hover:text-white hover:border-[#2a2a3e] rounded-xl transition-all duration-200 text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
