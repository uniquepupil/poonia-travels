"use client";
import { FaMapMarkerAlt, FaPhone, FaDirections, FaCarSide, FaShip } from 'react-icons/fa';

export default function FindUs() {
  const phoneNumber = "9836863206";
  // Updated with a placeholder for Budge Budge coordinates
  const mapUrl = "https://www.google.com/maps/dir/?api=1&destination=Budge+Budge+Kolkata"; 

  return (
    <section id="location" className="md:py-24 py-12 bg-stone-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        {/* Background Vertical Text - Decorative */}
        <div className="absolute top-0 right-0 hidden lg:block opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[180px] font-black leading-none rotate-90 translate-x-1/2 translate-y-1/2 uppercase italic">
            GANGES
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 items-center">
          
          {/* Left: Live Google Map Iframe (7 Columns) */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[600px] z-20">
            <div className="absolute inset-0 bg-stone-800 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58934.33230491871!2d88.13627768565241!3d22.47055006497524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02797e974e64f1%3A0x633458f3b207578!2sBudge%20Budge%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1704350000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2) invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
          </div>

          {/* Right: Floating Info Card (5 Columns) */}
          <div className="lg:col-span-5 lg:-ml-20 relative z-30 mt-10 lg:mt-0">
            <div className="bg-stone-900 p-10 md:p-16 rounded-[3.5rem] shadow-[-20px_20px_60px_rgba(0,0,0,0.8)] border border-stone-800">
              <h2 className="text-5xl font-black mb-8 leading-none tracking-tighter uppercase text-white">
                Find <br /><span className="text-amber-500 italic font-Caveat" style={{textTransform: 'none', fontWeight: 'normal', fontFamily: "'Caveat', cursive"}}>Nongore.</span>
              </h2>

              <div className="space-y-10">
                {/* Contact Row */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-500">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-1">Our Location</p>
                    <p className="text-lg font-bold leading-tight uppercase tracking-tight">Nongore Riverside Villa</p>
                    <p className="text-sm text-stone-400 leading-relaxed mt-1 italic">
                      Budge Budge, South 24 Parganas <br />West Bengal, India
                    </p>
                  </div>
                </div>

                {/* Distance Card */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
                  <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                    <span className="font-black uppercase tracking-widest text-[10px] flex items-center gap-2 text-amber-500">
                      <FaShip size={14} /> From Central Kolkata
                    </span>
                    <span className="font-mono text-sm font-bold text-white">~1 Hour</span>
                  </div>
                  <p className="text-[11px] text-stone-400 font-medium leading-relaxed">
                    Escape the city bustle. Located just 30km from Esplanade, Nongore offers a seamless transition from urban chaos to riverside tranquility.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a 
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-stone-900 px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest flex items-center justify-center gap-2 hover:bg-amber-600 hover:text-white transition-all shadow-xl"
                  >
                    <FaDirections size={16} /> Get Directions
                  </a>
                  <a 
                    href={`tel:91${phoneNumber}`} 
                    className="border border-white/20 text-white px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <FaPhone size={14} /> Book Your Visit
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