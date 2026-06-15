import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://chiranjeevrout.com"; // TODO: set your real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chiranjeev Rout — Chemical Engineer & Future Business Leader",
    template: "%s · Chiranjeev Rout",
  },
  description:
    "Portfolio of Chiranjeev Rout — Integrated M.Tech Chemical Engineering at ICT Mumbai. Research, internships, consulting, and a path toward business leadership.",
  keywords: [
    "Chiranjeev Rout",
    "Chemical Engineer",
    "ICT Mumbai",
    "MBA",
    "Consulting",
    "Research",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Chiranjeev Rout — Chemical Engineer & Future Business Leader",
    description:
      "Engineering rigor meets business ambition. Research, internships, projects, and insights.",
    siteName: "Chiranjeev Rout",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiranjeev Rout — Chemical Engineer & Future Business Leader",
    description:
      "Engineering rigor meets business ambition. Research, internships, projects, and insights.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060a14" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${geistMono.variable}`}
    >
      <body className="bg-base font-sans text-ink antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
