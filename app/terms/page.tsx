import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Evergreen SEO Agency",
  description: "Terms of service, payment terms, cancellation policy, and scope of work for Evergreen SEO Agency clients.",
};

const EFFECTIVE_DATE = "May 1, 2026";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white">
      {/* Header */}
      <header className="border-b border-[#1e1e2e] py-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 6V10L8 14L2 10V6L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="8" cy="8" r="2" fill="white" />
              </svg>
            </div>
            <span className="font-semibold text-white tracking-tight text-sm">
              Evergreen<span className="text-green-400"> SEO</span>
            </span>
          </Link>
          <Link href="/#contact" className="text-sm text-green-400 hover:text-green-300 transition-colors">
            Get a Free Audit →
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Terms of Service</h1>
          <p className="text-[#6b7280] text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-[#d1d5db] leading-relaxed">

          <section>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern all services provided by Evergreen SEO Agency (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) to you (&ldquo;Client&rdquo;). By completing payment for any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Services</h2>
            <p className="mb-3">We provide local SEO services on a month-to-month basis. The scope of work depends on the package selected:</p>
            <div className="border border-[#1e1e2e] rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1e1e2e] bg-[#0d0d14]">
                    <th className="text-left px-4 py-3 text-white font-medium">Package</th>
                    <th className="text-left px-4 py-3 text-white font-medium">Price</th>
                    <th className="text-left px-4 py-3 text-white font-medium">Included</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#1e1e2e]">
                    <td className="px-4 py-3 text-green-400 font-medium">Starter</td>
                    <td className="px-4 py-3">$297/mo</td>
                    <td className="px-4 py-3">3 pages optimized, 4 blog posts/mo</td>
                  </tr>
                  <tr className="border-b border-[#1e1e2e]">
                    <td className="px-4 py-3 text-green-400 font-medium">Growth</td>
                    <td className="px-4 py-3">$597/mo</td>
                    <td className="px-4 py-3">10 pages optimized, 8 blog posts/mo, 8 authority links/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-green-400 font-medium">Full Stack</td>
                    <td className="px-4 py-3">$997/mo</td>
                    <td className="px-4 py-3">Unlimited pages, website build, 20 premium links, weekly content</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-[#6b7280]">
              Specific deliverables will be outlined in a scope of work sent to you before or alongside your first invoice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Payment Terms</h2>
            <ul className="space-y-2 list-none">
              {[
                "Services are billed monthly. Your billing date is set on the date of your first payment.",
                "Payment is due on or before your billing date each month.",
                "We accept payment via invoice. Instructions are included on each invoice.",
                "Services may be paused if payment is more than 7 days late.",
                "By completing payment, you agree to these Terms in full.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-400 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Cancellation Policy</h2>
            <ul className="space-y-2 list-none">
              {[
                "There are no long-term contracts. Services are month-to-month.",
                "To cancel, provide written notice at least 30 days before your next billing date via email to maxx@evergreenseo.agency.",
                "Payments already made are non-refundable. You will continue to receive services through the end of your paid period.",
                "We reserve the right to cancel services at any time with 30 days notice.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-400 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. No Guarantee of Rankings</h2>
            <p>
              SEO results depend on many factors outside our control, including search engine algorithm changes, competitor activity, and website history. We do not guarantee specific rankings, traffic levels, or revenue outcomes. We guarantee consistent, professional execution of agreed deliverables and transparent reporting on progress.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Client Responsibilities</h2>
            <ul className="space-y-2 list-none">
              {[
                "Provide access to your website, Google Search Console, and Google Business Profile within 5 business days of first payment.",
                "Respond to content approval requests within 5 business days. Delays may push deliverable timelines.",
                "Ensure you have the legal right to publish all content and materials you provide to us.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-400 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
            <p>
              All content, copy, and assets created by Evergreen SEO Agency on your behalf become your property upon payment in full for that month. We retain the right to reference your business as a client for portfolio and marketing purposes unless you request otherwise in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p>
              Our total liability to you for any claim arising from our services shall not exceed the amount paid in the most recent month of service. We are not liable for indirect, consequential, or incidental damages of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of our services after changes are posted constitutes acceptance of the updated Terms. We will notify active clients of material changes via email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
            <p>
              Questions about these Terms? Email us at{" "}
              <a href="mailto:maxx@evergreenseo.agency" className="text-green-400 hover:text-green-300 transition-colors">
                maxx@evergreenseo.agency
              </a>
              .
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e1e2e] py-8 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#4b5563]">
          <Link href="/" className="hover:text-white transition-colors">← Back to Evergreen SEO</Link>
          <span>© {new Date().getFullYear()} Evergreen SEO Agency. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
