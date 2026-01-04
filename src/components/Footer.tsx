"use client";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaTruck, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "9828XXXXXXXX"; // Replace with Poonia Transportation Sikar number

  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-stone-800/50 pb-12">
        
        {/* Column 1: Brand & Logistics Bio */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">
              Poonia <span className="text-orange-600">Transportation</span>
            </h2>
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em]">Heavy Cargo & Industrial Logistics • Sikar</span>
          </div>
          <p className="text-sm leading-relaxed">
            Reliable point-to-point transportation services for pre-packed industrial and commercial goods. With 15+ years of experience, we provide a massive fleet of trucks connecting Sikar to all major hubs in India.
          </p>
          <div className="flex gap-4 pt-2">
            <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-stone-900 flex items-center justify-center hover:bg-green-600 transition-colors border border-stone-800">
              <FaWhatsapp size={18} className="text-white" />
            </a>
          </div>
        </div>

        {/* Column 2: Logistics Excellence */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FaTruck className="text-orange-600" size={16} /> Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col border-b border-stone-800 pb-2">
              <span className="text-white font-semibold tracking-tight uppercase text-xs">Full Truckload (FTL)</span>
              <span className="text-[11px] text-stone-500">Dedicated heavy-duty vehicles for large-scale industrial consignments.</span>
            </li>
            <li className="flex flex-col border-b border-stone-800 pb-2">
              <span className="text-white font-semibold tracking-tight uppercase text-xs">Inter-State Transit</span>
              <span className="text-[11px] text-stone-500">Seamless logistics connecting Sikar to Delhi, Mumbai, Gujarat, and beyond.</span>
            </li>
            <li className="flex flex-col border-b border-stone-800 pb-2">
              <span className="text-white font-semibold tracking-tight uppercase text-xs">GPS Tracked Fleet</span>
              <span className="text-[11px] text-stone-500">24/7 real-time monitoring of your cargo ensuring safe and timely arrival.</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Base of Operations */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-600" /> Dispatch Office
          </h3>
          <div className="space-y-3 text-sm">
            <p className="text-stone-300 leading-snug">
              Poonia Transportation Hub,<br />
              Main Highway District,<br />
              Sikar, Rajasthan, India
            </p>
            <div className="flex flex-col gap-2 pt-2">
                <a 
                href={`tel:+91${phoneNumber}`} 
                className="flex items-center gap-2 text-orange-500 font-bold hover:text-orange-400 transition-colors text-base"
                >
                <FaPhone size={14} className="rotate-90" /> +91 {phoneNumber}
                </a>
            </div>
            <div className="pt-4 flex flex-wrap gap-2">
                <span className="bg-stone-900 text-stone-500 text-[9px] font-bold px-3 py-1.5 rounded uppercase tracking-widest border border-stone-800">
                    Sikar - Delhi Daily
                </span>
                <span className="bg-stone-900 text-stone-500 text-[9px] font-bold px-3 py-1.5 rounded uppercase tracking-widest border border-stone-800">
                    Pan India Reach
                </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-stone-600 font-bold text-center md:text-left">
          © {currentYear} Poonia Transportation Sikar. Professional Industrial Logistics.
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-stone-600">
            <p className="flex items-center gap-1"><FaGlobeAmericas size={10}/> All-India Network</p>
            <p className="flex items-center gap-1"><FaShieldAlt size={10}/> Secure Transit</p>
        </div>
      </div>
    </footer>
  );
}