import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Note: Cursive fonts (Pacifico, Caveat, Great Vibes) removed to maintain a professional B2B industrial aesthetic.

export const metadata: Metadata = {
  // Update this to your actual domain later
  metadataBase: new URL("https://pooniatransport.uniquepupil.in/"), 
  title: {
    default: "Poonia Transportation | Leading Logistics & Fleet Services in Sikar",
    template: "%s | Poonia Transportation Sikar",
  },
  description: "Poonia Transportation offers reliable Full Truckload (FTL) and industrial logistics services across India. Based in Sikar, Rajasthan, we provide a 50+ fleet for secure and timely cargo movement since 2008.",
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
    "Poonia Transportation Sikar", 
    "Best Logistics Company Sikar", 
    "Truck Booking Service Rajasthan", 
    "Full Truckload FTL Sikar", 
    "Industrial Cargo Transport India", 
    "Poonia Transport Contact Number", 
    "Heavy Vehicle Container Service Sikar"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pooniatransport.uniquepupil.in/",
    siteName: "Poonia Transportation Sikar",
    title: "Poonia Transportation | Industrial Logistics Experts",
    description: "Secure and efficient cargo movement across India. Specialized in industrial freight from our Sikar dispatch hub.",
    images: [{ 
      url: "/transportation/2.webp", // Recommended to have a professional truck fleet image here
      width: 1200, 
      height: 630, 
      alt: "Poonia Transportation Fleet Sikar" 
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poonia Transportation Sikar | National Logistics",
    images: ["/transportation/og-image.webp"],
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
          antialiased font-sans bg-white text-stone-900
        `}
      >
          {children}
      </body>
    </html>
  );
}