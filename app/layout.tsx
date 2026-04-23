import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evergreen SEO Agency | Local SEO for Home Service Businesses",
  description:
    "We help HVAC, roofing, and home service businesses rank on page 1 of Google and generate consistent inbound leads. Month-to-month. No contracts.",
  keywords: [
    "local SEO",
    "SEO agency",
    "HVAC SEO",
    "roofing SEO",
    "contractor SEO",
    "home service SEO",
    "Google ranking",
    "local search optimization",
  ],
  authors: [{ name: "Evergreen SEO Agency" }],
  creator: "Evergreen SEO Agency",
  publisher: "Evergreen SEO Agency",
  metadataBase: new URL("https://evergreenseo.agency"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evergreenseo.agency",
    siteName: "Evergreen SEO Agency",
    title: "Evergreen SEO Agency | Local SEO for Home Service Businesses",
    description:
      "We help HVAC, roofing, and home service businesses rank on page 1 of Google and generate consistent inbound leads. Month-to-month. No contracts.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evergreen SEO Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen SEO Agency | Local SEO for Home Service Businesses",
    description:
      "We help HVAC, roofing, and home service businesses rank on page 1 of Google and generate consistent inbound leads. Month-to-month. No contracts.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Evergreen SEO Agency",
  description:
    "Local SEO agency helping HVAC, roofing, and home service businesses rank on page 1 of Google.",
  url: "https://evergreenseo.agency",
  email: "maxx@evergreenseo.agency",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Local SEO",
    "Search Engine Optimization",
    "Google Business Profile Optimization",
    "Content Marketing",
    "Link Building",
  ],
  priceRange: "$$$",
  "@id": "https://evergreenseo.agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#050508" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
