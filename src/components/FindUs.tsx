"use client";
import { FaMapMarkerAlt, FaPhone, FaDirections, FaTruck, FaGlobeAmericas, FaRoad } from 'react-icons/fa';

export default function FindUs() {
  const phoneNumber = "9991963215"; // Poonia Transportation Sikar Contact
  const mapUrl = "https://maps.google.com"; // Add your actual Google Maps Link here

  return (
    <section id="location" className="md:py-24 py-12 bg-stone-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        {/* Background Vertical Text - Decorative (Industrial Style) */}
        <div className="absolute top-0 right-0 hidden lg:block opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[180px] font-black leading-none rotate-90 translate-x-1/2 translate-y-1/2 uppercase italic">
            LOGISTICS
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 items-center">
          
          {/* Left: Map Interface (Focusing on Highway connectivity) */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[600px] z-20">
            <div className="absolute inset-0 bg-stone-800 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113146.40244795415!2d75.076895!3d27.611175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca3006d64998d%3A0x6e7609a63318d17b!2sSikar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9) brightness(0.8)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
          </div>

          {/* Right: Dispatch Hub Info Card */}
          <div className="lg:col-span-5 lg:-ml-20 relative z-30 mt-10 lg:mt-0">
            <div className="bg-stone-900 p-10 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[-20px_20px_60px_rgba(0,0,0,0.8)] border border-stone-800">
              <h2 className="text-5xl font-black mb-8 leading-none tracking-tighter uppercase text-white">
                Dispatch <br /><span className="text-orange-600">Hub.</span>
              </h2>

              <div className="space-y-10">
                {/* Office Location */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1">Corporate HQ</p>
                    <p className="text-lg font-bold leading-tight uppercase tracking-tight">Poonia Transportation</p>
                    <p className="text-sm text-stone-400 leading-relaxed mt-1">
                      Industrial Area Bypass, Sikar <br />Rajasthan, India - 332001
                    </p>
                  </div>
                </div>

                {/* Logistics Route Connectivity Diagram */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
                  <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                    <span className="font-black uppercase tracking-widest text-[10px] flex items-center gap-2 text-orange-500">
                      <FaRoad size={14} /> Major Transit Corridors
                    </span>
                    <span className="font-mono text-[10px] font-bold text-white">DAILY SERVICE</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] text-stone-300 font-bold uppercase tracking-tight flex items-center gap-2">
                      <FaGlobeAmericas className="text-stone-500" /> Sikar — Delhi/NCR (Daily)
                    </p>
                    <p className="text-[11px] text-stone-300 font-bold uppercase tracking-tight flex items-center gap-2">
                      <FaGlobeAmericas className="text-stone-500" /> Sikar — Ahmedabad/Mumbai
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a 
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-8 py-4 rounded-xl font-black uppercase text-[11px] tracking-widest flex items-center justify-center gap-2 hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/20"
                  >
                    <FaDirections size={16} /> Open in Maps
                  </a>
                  <a 
                    href={`tel:91${phoneNumber}`} 
                    className="border border-white/20 text-white px-8 py-4 rounded-xl font-black uppercase text-[11px] tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <FaPhone size={14} className="rotate-90" /> Call Dispatch
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}