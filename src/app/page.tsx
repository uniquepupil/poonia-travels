import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FindUs from "@/components/FindUs";
import About from "@/components/About";
import StickyBookingBar from "@/components/StickyBookingBar";
import FleetSpecs from "@/components/FleetSpecs";
import QuoteForm from "@/components/QuoteForm";
import SafetyTech from "@/components/SafetyTech";

export default function Home() {
  // SEO Structured Data - Optimized for "Poonia Transportation Sikar"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsService", 
    "name": "Poonia Transportation",
    "alternateName": "Poonia Logistics Sikar",
    "description": "Leading industrial transportation service in Sikar, Rajasthan. Specialized in full truckload (FTL) cargo movement across India with a 50+ fleet of containers and open trucks.",
    "url": "https://your-domain.com",
    "telephone": "+919828XXXXXXXX", // Replace with your actual Sikar number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Industrial Area Bypass",
      "addressLocality": "Sikar",
      "addressRegion": "Rajasthan",
      "postalCode": "332001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.6094,
      "longitude": 75.1397 
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transport Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Truckload (FTL) Logistics" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Containerized Cargo Movement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Heavy Transit" } }
      ]
    }
  };

  return (
    <>
      {/* Inject Structured Data for Logistics SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Changed selection color to Orange for industrial theme */}
      <main className="min-h-screen selection:bg-orange-600 selection:text-white bg-white">
        <Navbar />
        
        {/* Heavy Industry Layout */}
        <Hero />
        <About />
        <FleetSpecs />
        <SafetyTech />
        <QuoteForm />
        
        {/* Logistics Hub Location */}
        <FindUs />
        
        {/* Contact conversion elements */}
        <StickyBookingBar />
        
        <Footer />
      </main>
    </>
  );
}