"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";

interface StickyBookingBarProps {
  price?: string;
  phone?: string;
  whatsappMsg?: string;
  instaUrl?: string;
}

export default function StickyBookingBar({ 
  price = "2,00,000", // Nongore Villa Base Rate
  phone = "9836863206", 
  whatsappMsg = "Hi! I'm interested in booking Nongore Villa - Riverside Estate. Please share availability for a wedding/stay.",
  instaUrl = "https://instagram.com/nongore_villa", 
}: StickyBookingBarProps) {
  
  const [isVisible, setIsVisible] = useState(false);
  const encodedMsg = encodeURIComponent(whatsappMsg);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- MOBILE VIEW: SINGLE LINE COMPACT BAR --- */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-2xl border-t border-stone-100 z-[100] md:hidden flex items-center gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] transition-transform duration-500 ${isVisible ? "translate-y-0" : "translate-y-full"}`}>
        
        {/* Price/Context - Kept small to prioritize buttons */}
        <div className="flex-shrink-0 min-w-[80px]">
          <p className="text-[7px] font-black uppercase text-amber-700 tracking-[0.1em]">Starting at</p>
          <p className="text-sm font-black text-stone-900 leading-none">
            ₹{price}
          </p>
        </div>

        {/* Buttons in One Line */}
        <div className="flex flex-1 items-center gap-2">
          <Link 
            href={`tel:+91${phone}`} 
            className="flex-1 bg-stone-100 text-stone-600 py-3.5 rounded-xl border border-stone-200 flex items-center justify-center active:scale-95 transition-all"
          >
            <FaPhoneAlt size={14} />
          </Link>
          <Link 
            href={`https://wa.me/91${phone}?text=${encodedMsg}`} 
            className="flex-[3] bg-amber-600 text-white py-3.5 rounded-xl font-black uppercase tracking-wider text-[10px] flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20 active:scale-95 transition-all"
          >
            <FaWhatsapp size={16} /> WhatsApp
          </Link>
        </div>
      </div>

      {/* --- LAPTOP VIEW: PREMIUM FLOATING WIDGET --- */}
      <div 
        className={`hidden md:flex fixed right-10 bottom-10 flex-col gap-5 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24 pointer-events-none"
        }`}
      >
        {/* Main WhatsApp Card */}
        <Link 
          href={`https://wa.me/91${phone}?text=${encodedMsg}`}
          target="_blank"
          className="group flex items-center gap-2 bg-stone-900 p-2 pr-6 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/5 hover:bg-amber-600 transition-all duration-500"
        >
          <div className="bg-amber-600 group-hover:bg-white p-3 rounded-full text-white group-hover:text-amber-600 transition-all shadow-xl relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-30"></span>
            <FaWhatsapp size={24} className="relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-stone-500 text-[9px] font-bold uppercase tracking-[0.2em] leading-none mb-1.5 group-hover:text-amber-100">Budge Budge, WB</span>
            <span className="text-white group-hover:text-white font-black uppercase tracking-[0.1em] text-[13px]">HomeStay Inquiry</span>
          </div>
        </Link>

        {/* Social & Call Actions */}
        <div className="flex justify-end gap-4 mr-2">
            <Link 
              href={instaUrl} 
              target="_blank" 
              className="group bg-stone-900/80 backdrop-blur-xl p-4 rounded-full shadow-xl border border-white/5 text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:to-orange-600 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={22} className="group-hover:rotate-12 transition-transform" />
            </Link>
            <Link 
              href={`tel:+91${phone}`}
              className="group bg-stone-900/80 backdrop-blur-xl p-4 rounded-full shadow-xl border border-white/5 text-amber-500 hover:text-white hover:bg-amber-600 hover:scale-110 transition-all duration-300"
            >
              <FaPhoneAlt size={20} className="group-hover:-rotate-12 transition-transform" />
            </Link>
        </div>
      </div>
    </>
  );
}