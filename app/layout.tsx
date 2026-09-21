import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://thomas-potherat.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Thomas Potherat | Développeur Fullstack à Auxerre (Yonne, Bourgogne)",
    template: "%s | Thomas Potherat",
  },
  description:
    "Développeur Fullstack basé à Auxerre (Yonne), en Bourgogne. React, Next.js, React Native, NestJS. Disponible pour un poste ou des missions partout en France, sur place ou en remote.",
  alternates: { canonical: "/" },
  authors: [{ name: "Thomas Potherat", url: SITE_URL }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Thomas Potherat",
    title: "Thomas Potherat | Développeur Fullstack à Auxerre",
    description:
      "Développeur Fullstack basé à Auxerre (Yonne), disponible pour un poste ou des missions partout en France.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Potherat | Développeur Fullstack à Auxerre",
    description:
      "React, Next.js, React Native, NestJS. Basé à Auxerre, disponible partout en France.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#thomas-potherat`,
  name: "Thomas Potherat",
  url: SITE_URL,
  image: `${SITE_URL}/avatar.png`,
  jobTitle: "Développeur Fullstack",
  description:
    "Développeur Fullstack basé à Auxerre (Yonne), spécialisé en React, Next.js, React Native et NestJS.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Auxerre",
    addressRegion: "Bourgogne-Franche-Comté",
    addressCountry: "FR",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Docker",
  ],
  sameAs: [
    "https://github.com/ThomasPtht",
    "https://www.linkedin.com/in/thomas-potherat-923868166/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
