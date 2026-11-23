import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { venueConfig } from "@/lib/venue";
import { Header, Footer } from "@/components/chrome";
import { ModalProvider } from "@/components/modal-context";
import { SmoothScroll } from "@/components/motion";
import { LocationFloatingWidget } from "@/components/location-floating-widget";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${venueConfig.defaultName} | Lüks Düğün, Balo & Davet Kompleksi`,
  description: venueConfig.subTagline,
  keywords: [
    "düğün salonu",
    "lüks balo salonu",
    "kır düğünü",
    "boğaz teras düğün",
    "organizasyon konseptleri",
    "ziyafet menüleri",
    "istanbul düğün mekanları",
  ],
  authors: [{ name: venueConfig.shortName }],
  openGraph: {
    title: `${venueConfig.defaultName} | Masalsı Başlangıç`,
    description: venueConfig.subTagline,
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: venueConfig.defaultName,
    description: venueConfig.subTagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: venueConfig.address,
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    telephone: venueConfig.phone,
    maximumAttendeeCapacity: 1500,
    priceRange: "$$$$",
  };

  return (
    <html lang="tr" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#fcfbfa] text-[#1c1917] min-h-screen selection:bg-amber-400 selection:text-black">
        <SmoothScroll />
        <ModalProvider>
          <Header />
          <div className="relative z-10">{children}</div>
          <Footer />
          {/* Sağda Dairesel Konum & Harita Butonu */}
          <LocationFloatingWidget />
        </ModalProvider>
      </body>
    </html>
  );
}
