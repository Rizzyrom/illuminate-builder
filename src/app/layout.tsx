import type { Metadata } from "next";
import "./globals.css";
import Analytics from '@/components/Analytics';
import MaintenanceMode from '@/components/MaintenanceMode';

export const metadata: Metadata = {
  title: "Illuminate Avenue | Strategic Marketing Excellence",
  description: "We illuminate the path to exponential growth through strategic marketing excellence. Transform your business with proven methodologies and expert guidance.",
  keywords: ["marketing strategy", "business growth", "digital transformation", "brand development", "marketing consulting"],
  authors: [{ name: "Illuminate Avenue" }],
  creator: "Illuminate Avenue",
  publisher: "Illuminate Avenue",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://illuminateavenue.com",
    title: "Illuminate Avenue | Strategic Marketing Excellence",
    description: "We illuminate the path to exponential growth through strategic marketing excellence. Transform your business with proven methodologies and expert guidance.",
    siteName: "Illuminate Avenue",
  },
  twitter: {
    card: "summary_large_image",
    title: "Illuminate Avenue | Strategic Marketing Excellence",
    description: "We illuminate the path to exponential growth through strategic marketing excellence.",
    creator: "@illuminate-avenue",
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://illuminateavenue.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Illuminate Avenue",
    "description": "Strategic marketing consultancy specializing in business transformation and exponential growth.",
    "url": "https://illuminateavenue.com",
    "logo": "https://illuminateavenue.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "hello@illuminateavenue.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/illuminate-avenue",
      "https://twitter.com/illuminate-avenue"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Analytics />
        <MaintenanceMode />
        {children}
      </body>
    </html>
  );
}
