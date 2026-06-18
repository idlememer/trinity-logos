import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactPanel } from "@/components/layout/FloatingContactPanel";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { company } from "@/lib/company";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.websiteUrl),
  title: {
    default: `${company.legalName} — ${company.tagline}`,
    template: `%s · ${company.shortName}`,
  },
  description:
    "Recruitment, consulting, outsourcing and software development for modern enterprises. Headquartered in Visakhapatnam, India — serving clients across India.",
  keywords: [
    "recruitment",
    "staffing",
    "outsourcing",
    "consulting",
    "software development",
    "IT services",
    "talent acquisition",
    "Visakhapatnam",
    "India",
    "workforce solutions",
    "Logos Trinity",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    url: company.websiteUrl,
    title: `${company.legalName} — Talent, Technology, Transformation`,
    description:
      "Advanced recruitment, consulting, outsourcing and technology solutions engineered for modern enterprises.",
    siteName: company.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: company.legalName,
    description: company.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1F3A" },
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
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-navy-900 antialiased dark:bg-navy-950 dark:text-white">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
          <FloatingContactPanel />
        </ThemeProvider>
      </body>
    </html>
  );
}
