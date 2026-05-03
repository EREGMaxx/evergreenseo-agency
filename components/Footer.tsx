"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e1e2e] bg-[#050508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-10"
        >
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 6V10L8 14L2 10V6L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="8" cy="8" r="2" fill="white" />
                </svg>
              </div>
              <span className="font-semibold text-white tracking-tight">
                Evergreen<span className="text-green-400"> SEO</span>
              </span>
            </a>
            <p className="text-sm text-[#d1d5db]">Page 1 or it didn&apos;t happen.</p>
            <a
              href="mailto:maxx@evergreenseo.agency"
              className="flex items-center gap-2 text-sm text-[#d1d5db] hover:text-green-400 transition-colors"
            >
              <Mail size={13} />
              maxx@evergreenseo.agency
            </a>

          </div>

          {/* Company links */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/#how-it-works", label: "How It Works" },
                { href: "/#services", label: "Pricing" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/#faq", label: "FAQ" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-[#d1d5db] hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Industries */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Industries</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/hvac-seo", label: "HVAC SEO" },
                { href: "/roofing-seo", label: "Roofing SEO" },
                { href: "/plumbing-seo", label: "Plumbing SEO" },
                { href: "/electrician-seo", label: "Electrician SEO" },
                { href: "/residential-contractor-seo", label: "Residential Contractor SEO" },
                { href: "/property-management-seo", label: "Property Management SEO" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-[#d1d5db] hover:text-green-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Get Started</p>
            <p className="text-sm text-[#d1d5db] mb-4">Free audit. No obligation. Response within 24 hours.</p>
            <a
              href="/#contact"
              className="inline-flex items-center px-4 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              Get a Free Audit
            </a>
          </div>
        </motion.div>

        <div className="mt-10 pt-8 border-t border-[#1e1e2e] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#d1d5db]">
            © {currentYear} Evergreen SEO Agency. All rights reserved.
          </p>
          <a href="/terms" className="text-xs text-[#d1d5db] hover:text-green-400 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
