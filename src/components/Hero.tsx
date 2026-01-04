"use client";
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: "Experience",
    subtitle: " Luxury",
    highlight: "Nongore - Villa by the Ganges",
    desc: "A premier family retreat since 2014. Enjoy total privacy, tailor-made luxury, and the serene beauty of the Majestic Ganges.",
    // Desktop Image (Landscape)
    img: "/laptop/1.webp", 
    // Mobile Image (Portrait)
    imgMobile: "/mobile/1.webp",
    tag: "Luxury Retreat • Since 2014",
  },
  {
    title: "Grand",
    subtitle: " Weddings",
    highlight: "The Perfect Venue in Kolkata",
    desc: "Host up to 700 guests in our lush lawns and banquet halls. Meticulous planning for your once-in-a-lifetime event.",
    img: "/laptop/2.webp",
    imgMobile: "/mobile/2.webp",
    tag: "Weddings • Capacity 700+",
  },
  {
    title: "Awaken",
    subtitle: "Serene Nature",
    highlight: "Yoga & River Dolphins",
    desc: "Experience 280º sunrise views with rooftop yoga and watch the endangered River Dolphins from the comfort of your villa.",
    img: "/laptop/3.webp",
    imgMobile: "/mobile/3.webp",
    tag: "Wellness • Nature • Serenity",
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  // Using the contact number logic or a placeholder if not provided in text
  const phoneNumber = "YOUR_PHONE_NUMBER"; 

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-stone-950 overflow-hidden">
      <h1 className="sr-only">Nongore - A Luxury Villa by the Ganges Kolkata</h1>

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-stone-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="relative h-full w-full"
          >
            {/* Desktop Image */}
            <div className="hidden md:block relative h-full w-full">
                <Image
                src={slides[index].img}
                alt={`${slides[index].title} Desktop`}
                fill
                className="object-cover opacity-60"
                priority
                quality={90}
                />
            </div>

            {/* Mobile Image */}
            <div className="block md:hidden relative h-full w-full">
                <Image
                src={slides[index].imgMobile}
                alt={`${slides[index].title} Mobile`}
                fill
                className="object-cover opacity-70"
                priority
                quality={85}
                />
            </div>
            
            {/* Unified Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-36 md:pt-0">
        <div className="max-w-4xl">
          <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest">
                  {slides[index].tag}
              </span>
            </div>
            
            <div className="text-5xl md:text-[110px] font-black text-white leading-[0.9] md:leading-[0.8] tracking-tighter uppercase">
              <span className="text-white block mb-2" style={{ fontFamily: "'Caveat', cursive", textTransform: 'none', fontWeight: 'normal' }}>
                {slides[index].title}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                {slides[index].subtitle}
              </span>
            </div>

            <p className="mt-6 text-amber-500 text-lg md:text-2xl font-bold uppercase tracking-tight">
              {slides[index].highlight}
            </p>
            
            <p className="mt-4 text-stone-300 text-base md:text-xl font-medium max-w-lg leading-relaxed">
              {slides[index].desc}
            </p>
          </motion.div>

          {/* ACTION BUTTONS */}
         {/* --- MOBILE ONLY VIEW (Single Line) --- */}
<div className="flex flex-row flex-nowrap md:hidden gap-3 mt-10 w-full">
  <Link 
    href={`tel:+91${phoneNumber}`} 
    className="flex-1 py-5 bg-white text-stone-950 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-white transition-all shadow-xl"
  >
    <FaPhone size={12} className="rotate-90" /> Book
  </Link>
  
  <Link 
    href={`https://wa.me/91${phoneNumber}?text=Interested in a stay at Nongore Villa`} 
    target="_blank"
    className="flex-1 py-5 bg-stone-900/80 backdrop-blur-md border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-xl"
  >
    <FaWhatsapp size={16} className="text-green-500" /> Enquiry
  </Link>
</div>

{/* --- DESKTOP/BIG SCREEN VIEW ONLY --- */}
<div className="hidden md:flex flex-row gap-4 mt-10">
  <Link 
    href={`tel:+91${phoneNumber}`} 
    className="px-10 py-5 bg-white text-stone-950 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-amber-500 hover:text-white transition-all shadow-xl"
  >
    <FaPhone size={14} className="rotate-90" /> Book Your Stay
  </Link>
  
  <Link 
    href={`https://wa.me/91${phoneNumber}?text=Interested in a stay at Nongore Villa`} 
    target="_blank"
    className="px-10 py-5 bg-stone-900/80 backdrop-blur-md border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-stone-800 transition-all shadow-xl"
  >
    <FaWhatsapp size={18} className="text-green-500" /> Wedding Enquiry
  </Link>
</div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-6 flex gap-3">
          {slides.map((_, i) => (
              <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? "w-16 bg-amber-500" : "w-4 bg-white/20"}`} 
              />
          ))}
      </div>
    </section>
  );
}