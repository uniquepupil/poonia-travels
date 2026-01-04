import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Caveat, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  // Replace with your chosen custom domain once purchased
  metadataBase: new URL("https://nongorevilla.netlify.app"), 
  title: {
    default: "Nongore Villa | Luxury Riverside Estate & Wedding Venue Budge Budge",
    template: "%s | Nongore Villa Ganges",
  },
  description: "Experience the majesty of the Ganges at Nongore Villa. A 20,000 sq. ft. private estate in Budge Budge perfect for destination weddings, heritage stays, and luxury riverside retreats since 2014.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.webp", sizes: "512x512", type: "image/webp" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "Nongore Villa Budge Budge", 
    "Riverside Wedding Venue Kolkata", 
    "Luxury Villa near Ganges", 
    "Best Destination Wedding Lawn Kolkata", 
    "Nongore Villa Contact Number", 
    "Private Estate Stay West Bengal", 
    "Riverside Resort South 24 Parganas"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nongorevilla.netlify.app",
    siteName: "Nongore Villa Riverside Estate",
    title: "Nongore Villa | Luxury By The Ganges",
    description: "Nestled on the banks of the Ganges, Nongore Villa offers 280º river views, bespoke wedding facilities for 700+ guests, and a 20,000 sq. ft. private sanctuary.",
    images: [{ 
      url: "/laptop/1.webp", // Pointing to the Ganges view image
      width: 1200, 
      height: 630, 
      alt: "Panoramic Ganges View from Nongore Villa" 
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nongore Villa Riverside Estate Budge Budge",
    images: ["/laptop/11.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${pacifico.variable} 
          ${caveat.variable} 
          ${greatVibes.variable} 
          antialiased font-sans bg-white text-stone-900
        `}
      >
          {children}
      </body>
    </html>
  );
}