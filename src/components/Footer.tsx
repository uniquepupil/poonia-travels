"use client";
import { FaInstagram, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaShip, FaGlassCheers } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "9836863206"; // Placeholder: Update with actual Nongore contact

  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-stone-800/50 pb-12">
        
        {/* Column 1: Brand & Bio */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">
              Villa <span className="text-amber-500">Nongore</span>
            </h2>
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.2em]">Luxury By The Ganges • Since 2014</span>
          </div>
          <p className="text-sm leading-relaxed">
            A premier 20,000 sq. ft. riverside estate in Budge Budge. We specialize in bespoke destination weddings, serene family retreats, and luxury stays with 280º views of the majestic Ganges.
          </p>
          <div className="flex gap-4 pt-2">
            <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-green-600 transition-colors border border-stone-800">
              <FaWhatsapp size={18} className="text-white" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-600 transition-colors border border-stone-800">
              <FaInstagram size={18} className="text-white" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-blue-600 transition-colors border border-stone-800">
              <FaFacebook size={18} className="text-white" />
            </a>
          </div>
        </div>

        {/* Column 2: Events & Hospitality */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FaGlassCheers className="text-amber-500" size={16} /> Events & Stays
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col border-b border-stone-800 pb-2">
              <span className="text-white font-semibold">Destination Weddings</span>
              <span className="text-xs text-stone-500">Lush lawns and banquets for up to 700 guests with full catering.</span>
            </li>
            <li className="flex flex-col border-b border-stone-800 pb-2">
              <span className="text-white font-semibold">Riverside Wellness</span>
              <span className="text-xs text-stone-500">Rooftop yoga, dolphin spotting, and 280º panoramic river views.</span>
            </li>
            <li className="flex flex-col border-b border-stone-800 pb-2">
              <span className="text-white font-semibold">Private Chef Service</span>
              <span className="text-xs text-stone-500">Customized Bengali and International menus with no hidden fees.</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Landmarks */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FaMapMarkerAlt className="text-amber-500" /> Location
          </h3>
          <div className="space-y-3 text-sm">
            <p className="text-stone-300 leading-snug">
              Nongore - Villa by the Ganges,<br />
              Budge Budge, South 24 Parganas,<br />
              West Bengal, India
            </p>
            <div className="flex flex-col gap-2 pt-2">
                <a 
                href={`tel:+91${phoneNumber}`} 
                className="flex items-center gap-2 text-amber-500 font-bold hover:text-amber-400 transition-colors text-base"
                >
                <FaPhone size={14} className="rotate-90" /> +91 {phoneNumber}
                </a>
            </div>
            <div className="pt-2 flex flex-wrap gap-2">
                <span className="bg-stone-900 text-stone-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest border border-stone-800">
                    Achipur Temple 15m
                </span>
                <span className="bg-stone-900 text-stone-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest border border-stone-800">
                    Kolkata 1hr
                </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-stone-600 font-bold text-center md:text-left">
          © {currentYear} Nongore Villa Riverside Estate. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-stone-600">
            <p>Riverside Luxury</p>
            <p>Bespoke Events</p>
        </div>
      </div>
    </footer>
  );
}