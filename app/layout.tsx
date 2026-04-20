import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { Nav } from "@/components/Nav";
import { siteConfig } from "@/config/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.siteUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    url: siteConfig.brand.siteUrl,
    siteName: siteConfig.brand.name,
    images: [
      {
        url: siteConfig.assets.ogImage,
        width: 1200,
        height: 630,
            alt: "Crisis Communications Australia, Urgent Help & Expert Training",
      },
    ],
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    images: [siteConfig.assets.ogImage],
  },
  alternates: {
    canonical: siteConfig.brand.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} pb-16 md:pb-0`}>
        <Nav />
        {children}
        <GoogleAnalytics gaId={siteConfig.analytics.ga4MeasurementId} />
        <Analytics />
      </body>
    </html>
  );
}
