"use client";
import { FaInstagram, FaPhone, FaBars, FaTimes, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to handle closing menu on click
  const closeMenu = () => setIsOpen(false);

  const phoneNumber = "919836863206"; // Updated for Nongore Villa

  return (
    <div className="fixed top-4 inset-x-0 z-[100] px-4 md:px-8">
      <nav className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-stone-100 shadow-2xl rounded-2xl md:rounded-full overflow-hidden">
        
        {/* Main Nav */}
        <div className="px-6 py-2 md:py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative w-14 h-14 md:w-12 md:h-12 overflow-hidden">
              <Image
                src="/logo.png" 
                alt="Villa Nongore Logo"
                fill
                className="object-contain p-1 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
                <span className="text-sm md:text-lg font-black text-stone-900 leading-tight tracking-tighter uppercase">Villa Nongore</span>
                <span className="text-[10px] md:text-xs font-bold text-amber-600 tracking-[0.2em] uppercase">Riverside Estate</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-widest text-stone-800">
            <a href="#about" className="hover:text-amber-600 transition-colors">The Villa</a>
            <a href="#activities" className="hover:text-amber-600 transition-colors">Experiences</a>
            <a href="#menu" className="hover:text-amber-600 transition-colors">Dining</a>
            <a href="#photos" className="hover:text-amber-600 transition-colors">Gallery</a>
            <a href="#nearby" className="hover:text-amber-600 transition-colors">Local Guide</a>
            <a 
              href={`tel:${phoneNumber}`} 
              className="bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-stone-900 transition-all shadow-md shadow-amber-100 flex items-center gap-2"
            >
              <FaPhone size={12} className="rotate-90" /> 98368 63206
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-stone-900 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 p-6 flex flex-col gap-5 font-bold uppercase text-sm text-stone-800">
            <a href="#about" onClick={closeMenu}>The Estate</a>
            <a href="#activities" onClick={closeMenu}>Activities & Yoga</a>
            <a href="#menu" onClick={closeMenu}>Dining & Catering</a>
            <a href="#photos" onClick={closeMenu}>Photo Gallery</a>
            <a href="#nearby" onClick={closeMenu}>Budge Budge Guide</a>
            <hr className="border-stone-100" />
            <div className="flex flex-col gap-4">
               <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-amber-600 tracking-normal">
                 <FaPhone className="rotate-90" /> +91 98368 63206
               </a>
               <div className="flex gap-6 text-stone-600 pt-2">
                 <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer"><FaWhatsapp size={26} className="text-green-600" /></a>
                 <a href="#" target="_blank" rel="noreferrer"><FaInstagram size={26} className="text-pink-600" /></a>
                 <a href="#" target="_blank" rel="noreferrer"><FaFacebook size={26} className="text-blue-700" /></a>
               </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}