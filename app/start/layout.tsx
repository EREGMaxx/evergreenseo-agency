import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evergreen SEO — More Customers. Less Guesswork.",
  description: "We help businesses get found on Google and turn searches into sales. Get a free SEO audit — no obligation, response within 24 hours.",
  openGraph: {
    title: "Evergreen SEO — More Customers. Less Guesswork.",
    description: "We help businesses get found on Google and turn searches into sales. Get a free SEO audit — no obligation, response within 24 hours.",
    url: "https://evergreenseo.agency/start",
    siteName: "Evergreen SEO",
    type: "website",
    images: [{
      url: "https://evergreenseo.agency/og-start.png",
      width: 1200,
      height: 630,
      alt: "Evergreen SEO — More Customers. Less Guesswork.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen SEO — More Customers. Less Guesswork.",
    description: "We help businesses get found on Google and turn searches into sales. Get a free SEO audit — no obligation.",
    images: ["https://evergreenseo.agency/og-start.png"],
  },
};

export default function StartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
