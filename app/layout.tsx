import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garret Krawchison | Fullstack Engineer in San Diego, CA",
  description: "Full-Stack Developer specializing in web applications and geospatial tools.",
};

import Schema from "./components/Schema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Schema />
        {/* help crawlers and tools discover the sitemap */}
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 pt-16`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
