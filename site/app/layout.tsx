import type { Metadata } from "next";
import { Fraunces, Jost } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-config";
import SiteNav from "@/components/SiteNav";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.seoTitle,
  description: site.seoDescription,
  openGraph: {
    title: site.seoTitle,
    description: site.seoDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jost.variable}`}>
      <body className="font-sans antialiased">
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
