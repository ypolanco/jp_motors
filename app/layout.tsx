import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { inCity, site } from "@/lib/site";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-bricolage" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-figtree" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${inCity("Brake Repair, Oil Change & Auto Mechanic")}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Brake and lube specialists providing honest maintenance, diagnostics, and auto repair without the runaround. Watch JP turn wrenches on YouTube.",
  keywords: ["brake repair", "oil change", "auto repair", "mechanic", "brake service", "car maintenance", "auto diagnostics"],
  openGraph: { siteName: site.name, type: "website", locale: "en_US" },
};

export const viewport: Viewport = {
  themeColor: "#fffdf8",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "US",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable}`}>
      <body className="flex min-h-screen flex-col overflow-x-clip pb-16 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
