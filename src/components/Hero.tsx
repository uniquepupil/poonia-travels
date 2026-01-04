"use client";
import { FaWhatsapp, FaPhone, FaTruck, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: "Reliable",
    subtitle: "Fleet Solutions",
    highlight: "Sikar to All-India Logistics",
    desc: "A massive fleet of containers and open-body trucks. We handle industrial freight with precision and zero downtime.",
    img: "/transportation/i.webp", 
    imgMobile: "/transportation/i.webp",
    tag: "Established in Sikar • 15+ Years",
  },
  {
    title: "Express",
    subtitle: "Heavy Transit",
    highlight: "Safe & Timely Deliveries",
    desc: "Expertise in transporting pre-packed commercial goods. Advanced route optimization ensuring your cargo reaches on time.",
    img: "/transportation/2.webp",
    imgMobile: "/transportation/2.webp",
    tag: "Commercial Transport • 50+ Fleet",
  },
  {
    title: "Secure",
    subtitle: "Supply Chain",
    highlight: "24/7 Dispatch Control",
    desc: "From full truckloads to scheduled inter-city routes, our verified drivers ensure maximum safety for your high-value cargo.",
    img: "/transportation/i.webp",
    imgMobile: "/transportation/i.webp",
    tag: "Real-Time Tracking • GPS Enabled",
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const phoneNumber = "9991963215"; // Replace with Poonia Transportation Sikar number

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-stone-950 overflow-hidden">
      <h1 className="sr-only">Poonia Transportation Sikar - Heavy Cargo & Industrial Logistics</h1>

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-stone-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="relative h-full w-full"
          >
            {/* Desktop & Mobile Images with Industrial Overlay */}
            <div className="relative h-full w-full">
                <Image
                src={slides[index].img}
                alt={`${slides[index].title} Logistics`}
                fill
                className="object-cover opacity-40 grayscale-[0.5]"
                priority
                quality={90}
                />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-44 md:pt-0">
        <div className="max-w-4xl">
          <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-600/20 backdrop-blur-md border border-orange-600/30 px-4 py-1.5 rounded-lg mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-orange-500 text-[10px] font-black uppercase tracking-widest">
                  {slides[index].tag}
              </span>
            </div>
            
            <div className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter uppercase">
              <span className="text-stone-400 block">{slides[index].title}</span>
              <span className="text-orange-600">{slides[index].subtitle}</span>
            </div>

            <p className="mt-6 text-white text-lg md:text-2xl font-bold uppercase tracking-tight flex items-center gap-3">
              <FaTruck className="text-orange-600" /> {slides[index].highlight}
            </p>
            
            <p className="mt-4 text-stone-400 text-base md:text-xl font-medium max-w-xl leading-relaxed">
              {slides[index].desc}
            </p>
          </motion.div>

          {/* ACTION BUTTONS */}
          {/* Mobile One-Liner */}
          <div className="flex flex-row flex-nowrap md:hidden gap-3 mt-10 w-full">
            <Link 
              href={`tel:+91${phoneNumber}`} 
              className="flex-1 py-5 bg-orange-600 text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-xl shadow-orange-900/40"
            >
              <FaPhone size={12} className="rotate-90" /> Call
            </Link>
            <Link 
              href={`https://wa.me/91${phoneNumber}?text=Interested in transport services from Sikar.`} 
              target="_blank"
              className="flex-1 py-5 bg-stone-900 border border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all"
            >
              <FaWhatsapp size={16} className="text-green-500" /> Get Quote
            </Link>
          </div>

          {/* Desktop Big Buttons */}
          <div className="hidden md:flex flex-row gap-4 mt-10">
            <Link 
              href={`tel:+91${phoneNumber}`} 
              className="px-10 py-5 bg-orange-600 text-white rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/20"
            >
              <FaPhone size={14} className="rotate-90" /> Call Dispatch
            </Link>
            <Link 
              href={`https://wa.me/91${phoneNumber}?text=Requesting a freight quote for industrial goods.`} 
              target="_blank"
              className="px-10 py-5 bg-stone-900 border border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-stone-800 transition-all"
            >
              <FaWhatsapp size={18} className="text-green-500" /> WhatsApp Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 flex gap-3">
          {slides.map((_, i) => (
              <div 
                  key={i} 
                  className={`h-1 transition-all duration-500 ${index === i ? "w-16 bg-orange-600" : "w-4 bg-white/20"}`} 
              />
          ))}
      </div>
    </section>
  );
}