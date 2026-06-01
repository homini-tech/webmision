import type { Metadata, Viewport } from "next";
import { Cormorant, Jost } from "next/font/google";
import { project } from "@/data/project";
import { buildJsonLd } from "@/lib/seo";
import "./globals.css";

const display = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const title = `${project.name} | Departamentos en Ciudad Vieja, Montevideo`;
const description = project.shortDescription;

export const metadata: Metadata = {
  metadataBase: new URL(project.url),
  title: {
    default: title,
    template: `%s | ${project.name}`,
  },
  description,
  keywords: [
    "apartamentos Ciudad Vieja",
    "departamentos Montevideo",
    "vivienda promovida Montevideo",
    "monoambientes Ciudad Vieja",
    "1 dormitorio Montevideo",
    "inversión inmobiliaria Uruguay",
    "calle Rincón Montevideo",
    project.name,
  ],
  authors: [{ name: "Cipia" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: project.url,
    siteName: `${project.name} — Ciudad Vieja`,
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${project.name} — Ciudad Vieja, Montevideo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "real estate",
};

export const viewport: Viewport = {
  themeColor: "#16130e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildJsonLd();
  return (
    <html lang="es-UY" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
        >
          Saltar al contenido
        </a>
        {children}
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </body>
    </html>
  );
}
