"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

interface StickyContactBarProps {
  phone?: string;
  whatsappMsg?: string;
}

export default function StickyContactBar({ 
  phone = "9991963215", // Replace with Poonia Transportation Sikar number
  whatsappMsg = "Hi Poonia Transportation, I am interested in booking a truck for cargo movement from Sikar.",
}: StickyContactBarProps) {
  
  const [isVisible, setIsVisible] = useState(false);
  const encodedMsg = encodeURIComponent(whatsappMsg);

  useEffect(() => {
    const handleScroll = () => {
      // Shows after scrolling 300px
      if (window.scrollY > 300) {
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
      {/* --- MOBILE VIEW: COMPACT ICON SPLIT --- */}
      <div className={`fixed bottom-0 left-0 right-0 p-3 bg-stone-900/95 backdrop-blur-xl border-t border-white/10 z-[100] md:hidden flex items-center gap-2 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 ${isVisible ? "translate-y-0" : "translate-y-full"}`}>
        
        <Link 
          href={`tel:+91${phone}`} 
          className="flex-1 bg-stone-800 text-white py-4 rounded-xl flex items-center justify-center border border-white/5 active:scale-95 transition-all shadow-lg"
        >
          <FaPhoneAlt size={18} className="rotate-90" />
        </Link>
        
        <Link 
          href={`https://wa.me/91${phone}?text=${encodedMsg}`} 
          className="flex-[2.5] bg-orange-600 text-white py-4 rounded-xl font-black uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-3 shadow-lg shadow-orange-900/30 active:scale-95 transition-all"
        >
          <FaWhatsapp size={20} className="text-white" /> WhatsApp Inquiry
        </Link>
      </div>

      {/* --- LAPTOP/DESKTOP VIEW: FLOATING ACTION ICONS --- */}
      <div 
        className={`hidden md:flex fixed right-8 bottom-8 flex-col gap-4 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
        }`}
      >
        {/* WhatsApp Floating Button */}
        <Link 
          href={`https://wa.me/91${phone}?text=${encodedMsg}`}
          target="_blank"
          className="group flex items-center gap-4 bg-stone-900 p-2 pr-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 hover:bg-orange-600 transition-all duration-500"
        >
          <div className="bg-orange-600 group-hover:bg-white p-4 rounded-full text-white group-hover:text-orange-600 transition-all shadow-xl relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-30"></span>
            <FaWhatsapp size={24} className="relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-orange-500 group-hover:text-orange-100 text-[9px] font-black uppercase tracking-[0.2em] leading-none mb-1">Online Dispatch</span>
            <span className="text-white font-black uppercase tracking-[0.1em] text-[13px]">WhatsApp Chat</span>
          </div>
        </Link>

        {/* Phone Floating Button */}
        <Link 
          href={`tel:+91${phone}`}
          className="self-end group bg-stone-900/90 backdrop-blur-xl p-5 rounded-full shadow-2xl border border-white/5 text-orange-600 hover:text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300"
          title="Call Dispatch Office"
        >
          <FaPhoneAlt size={22} className="rotate-90 group-hover:-rotate-12 transition-transform" />
        </Link>
      </div>
    </>
  );
}