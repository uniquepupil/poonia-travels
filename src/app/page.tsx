import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";
import FindUs from "@/components/FindUs";
import Booking from "@/components/Booking";
import About from "@/components/About";
import StickyBookingBar from "@/components/StickyBookingBar";
import Activities from "@/components/Activities";
import Nearby from "@/components/Nearby";
import FleetSpecs from "@/components/FleetSpecs";
import QuoteForm from "@/components/QuoteForm";
import SafetyTech from "@/components/SafetyTech";

export default function Home() {
  // SEO Structured Data - Optimized for "Nongore Villa Budge Budge"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel", 
    "name": "Nongore Villa - Riverside Estate",
    "alternateName": "Villa Nongore Budge Budge",
    "description": "Luxury 20,000 sq. ft. riverside villa in Budge Budge, Kolkata. Premium wedding venue for 700+ guests and luxury stay with 280º Ganges views.",
    "image": [
      "https://nongorevilla.netlify.app/images/hero-ganges.jpg", 
      "https://nongorevilla.netlify.app/images/wedding-lawn.jpg"
    ],
    "@id": "https://nongorevilla.netlify.app",
    "url": "https://nongorevilla.netlify.app",
    "telephone": "+919836863206",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Budge Budge Riverside, near Achipur",
      "addressLocality": "Budge Budge",
      "addressRegion": "West Bengal",
      "postalCode": "700137",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.4816, // Budge Budge area coordinates
      "longitude": 88.1824 
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "priceRange": "₹₹₹₹",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Ganges River View", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Private Chef Service", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Wedding Lawn (700 pax)", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Dolphin Spotting Point", "value": "true" }
    ]
  };

  return (
    <>
      {/* Inject Structured Data for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen selection:bg-amber-600 selection:text-white bg-white">
        <Navbar />
        
        {/* Visual & Narrative Sections */}
        <Hero />
        <About />
        <FleetSpecs />
        <QuoteForm />
        <SafetyTech />
        {/* Bento Grid Experience (Updated for Riverside/Wildlife) */}
        {/* <Activities /> */}
       
        {/* Culinary & Visual Showcase (Ganges Bistro & Private Chef) */}
        {/* <Menu />
        <PhotoGallery /> */}
        
        {/* Booking & Location Logistics (Updated for 2L Booking & Budge Budge Map) */}
        {/* <Booking /> */}
        {/* <Nearby /> */}
        <FindUs />
        
        {/* Floating conversion element */}
        <StickyBookingBar />
        
        <Footer />
      </main>
    </>
  );
}