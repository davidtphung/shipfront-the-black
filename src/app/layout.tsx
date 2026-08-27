import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/shipfront/Providers";
import { Footer } from "@/components/shipfront/Footer";
import { site, hero } from "@/data/site-copy";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Shipfront",
    template: "%s | Shipfront",
  },
  description: hero.body,
  metadataBase: new URL(site.url),
  openGraph: {
    title: "Shipfront",
    description: hero.body,
    url: site.url,
    siteName: "Shipfront",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-ground pb-[env(safe-area-inset-bottom)] font-sans text-paper">
        <Providers>
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
