import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nathvape-web.vercel.app"),
  title: "NathVape | Boutique cigarettes électroniques — Yssingeaux (43)",
  description:
    "NathVape, votre boutique de cigarettes électroniques à Yssingeaux. E-liquides, kits, accessoires et conseils personnalisés. 15 rue de Chante Barbe, 43200 Yssingeaux.",
  keywords: [
    "cigarette électronique",
    "vape",
    "e-liquide",
    "Yssingeaux",
    "Haute-Loire",
    "NathVape",
    "boutique vape",
  ],
  openGraph: {
    title: "NathVape — Boutique vape à Yssingeaux",
    description:
      "Votre espace vape chaleureux à Yssingeaux. Conseils, e-liquides, kits et accessoires.",
    url: "https://nathvape-web.vercel.app",
    siteName: "NathVape",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} scroll-smooth`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
