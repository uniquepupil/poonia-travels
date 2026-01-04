"use client";
import { FaPhone, FaBars, FaTimes, FaWhatsapp, FaTruck } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to handle closing menu on click
  const closeMenu = () => setIsOpen(false);

  const phoneNumber = "9991963215"; // Replace with Poonia Transportation's Sikar contact

  return (
    <div className="fixed top-4 inset-x-0 z-[100] px-4 md:px-8">
      <nav className="max-w-7xl mx-auto bg-stone-900/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl md:rounded-xl overflow-hidden">
        
        {/* Main Nav */}
        <div className="px-6 py-3 md:py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-orange-600 p-2 rounded-lg transition-transform duration-300 group-hover:scale-110">
              <FaTruck className="text-white text-xl md:text-2xl" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm md:text-lg font-black text-white leading-tight tracking-tighter uppercase">Poonia</span>
                <span className="text-[10px] md:text-xs font-bold text-orange-500 tracking-[0.2em] uppercase">Transportation</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-widest text-stone-300">
            <a href="#services" className="hover:text-orange-500 transition-colors">Our Services</a>
            <a href="#fleet" className="hover:text-orange-500 transition-colors">Fleet Specs</a>
            <a href="#routes" className="hover:text-orange-500 transition-colors">Routes</a>
            <a href="#tracking" className="hover:text-orange-500 transition-colors">Tracking</a>
            <a 
              href={`tel:${phoneNumber}`} 
              className="bg-orange-600 text-white px-6 py-2.5 rounded-lg hover:bg-orange-500 transition-all shadow-md shadow-orange-900/20 flex items-center gap-2"
            >
              <FaPhone size={12} className="rotate-90" /> Call Dispatch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-stone-900 border-t border-white/5 p-6 flex flex-col gap-5 font-bold uppercase text-sm text-stone-300">
            <a href="#services" onClick={closeMenu}>Transport Services</a>
            <a href="#fleet" onClick={closeMenu}>Vehicle Fleet</a>
            <a href="#routes" onClick={closeMenu}>Operational Routes</a>
            <a href="#tracking" onClick={closeMenu}>Consignment Status</a>
            <hr className="border-white/5" />
            <div className="flex flex-col gap-4">
               <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-orange-500 tracking-normal">
                 <FaPhone className="rotate-90" /> +91 {phoneNumber}
               </a>
               <div className="flex gap-6 text-stone-400 pt-2">
                 <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer"><FaWhatsapp size={26} className="text-green-500" /></a>
               </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}