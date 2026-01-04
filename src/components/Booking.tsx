"use client";
import { motion } from "framer-motion";
import { FaCheckCircle, FaWhatsapp, FaPhoneAlt, FaUtensils, FaMusic, FaGlassCheers, FaUsers, FaArrowRight, FaHome } from 'react-icons/fa';
import { MdOutlineBalcony, MdMeetingRoom } from 'react-icons/md';

export default function Booking() {
  const categories = [
    {
      title: "The Royal Villa",
      desc: "20,000 sq. ft Total Area | 6+ Premium Bedrooms | Private Gardens",
      capacity: "Up to 50 Guests (Stay)",
      price: "2,00,000", // Full property rental
      color: "border-amber-500 shadow-amber-100 shadow-xl",
      popular: true,
      emoji: "🏰"
    },
    {
      title: "Ganges Suite",
      desc: "Riverside View | King Bed | Private Balcony",
      capacity: "Max 3 Adults",
      price: "8,500",
      color: "border-stone-200",
      emoji: "🌊"
    },
    {
      title: "Family Wing",
      desc: "Interconnected Rooms | Garden Access | Heritage Decor",
      capacity: "Max 10 Adults",
      price: "25,000",
      color: "border-stone-200",
      emoji: "👨‍👩‍👧‍👦"
    },
    {
      title: "Event Lawn Access",
      desc: "Outdoor Space for 700+ Guests | Stage & Lighting Ready",
      capacity: "700+ Event Capacity",
      price: "1,50,000",
      color: "border-stone-200",
      emoji: "🎪"
    }
  ];

  const phoneNumber = "9836863206"; // Update this with the specific Nongore Villa contact

  return (
    <section id="booking" className="py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Budge Budge Riverside Estate</span>
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tighter uppercase mt-4 leading-none">
            Villa <span className="text-amber-600 font-Caveat lowercase italic" style={{textTransform: 'none', fontWeight: 'normal', fontFamily: "'Caveat', cursive"}}>Packages</span>
          </h2>
          <div className="flex justify-center gap-3 mt-4 md:mt-6 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-stone-500">
            <span className="bg-white border border-stone-200 px-3 py-1 rounded-full shadow-sm">Check-In: 12 PM</span>
            <span className="bg-white border border-stone-200 px-3 py-1 rounded-full shadow-sm">Check-Out: 11 AM</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* PRICING SECTION */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* ROOM GRID */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {categories.map((cat, i) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`p-6 md:p-8 rounded-[2.5rem] border-2 bg-white flex flex-col relative transition-all hover:scale-[1.01] ${cat.color}`}
                >
                  {cat.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[7px] md:text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-10 text-center">Perfect for Destination Weddings</span>}
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-stone-900 uppercase leading-tight">{cat.title}</h3>
                      <p className="text-[10px] font-bold text-stone-400 uppercase mt-2 tracking-wide">{cat.desc}</p>
                    </div>
                    <span className="text-2xl">{cat.emoji}</span>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-stone-50">
                    <div className="flex items-center gap-2 mb-4">
                        <FaUsers className="text-amber-600" size={14} />
                        <span className="text-[11px] font-black text-stone-600 uppercase tracking-widest">{cat.capacity}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] font-black text-stone-400 uppercase tracking-wider">Starting From</span>
                      <div className="text-right">
                        <span className="text-2xl md:text-3xl font-black text-stone-900">₹{cat.price}</span>
                        <span className="text-[10px] text-stone-400 block font-bold">/ Base Rate</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* EVENT & CATERING BANNER */}
            <div className="p-6 md:p-10 rounded-[2.5rem] bg-stone-900 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                 <FaGlassCheers size={180} />
               </div>
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center">
                        <FaUtensils className="text-white" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter">Bespoke Event Catering</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 p-5 rounded-3xl border border-white/10">
                       <p className="text-amber-400 text-[10px] font-black uppercase mb-1 tracking-widest">Wedding Banquets</p>
                       <p className="text-xl font-black italic">Up to 700 Guests</p>
                       <p className="text-[10px] text-stone-400 mt-2">Comprehensive catering solutions with traditional Bengali and International menus.</p>
                    </div>
                    <div className="bg-white/5 p-5 rounded-3xl border border-white/10">
                       <p className="text-amber-400 text-[10px] font-black uppercase mb-1 tracking-widest">In-house Services</p>
                       <p className="text-xl font-black italic">Decor & DJ Included</p>
                       <p className="text-[10px] text-stone-400 mt-2">We handle everything from floral arrangements to sound systems for a seamless experience.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT SIDE: BOOKING INFO */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-amber-600 p-8 rounded-[3rem] text-white shadow-xl shadow-amber-100 border-b-8 border-amber-700">
               <h3 className="text-2xl font-black uppercase mb-6 tracking-tight leading-none">Villa <br/>Exclusives</h3>
               <ul className="space-y-4 mb-10">
                {[
                    "Ganges Riverside 280º View",
                    "20,000 Sq. Ft Private Estate",
                    "Professional In-House Chef",
                    "Large Outdoor Event Lawns",
                    "Private Balconies in All Rooms",
                    "Full Power Backup (Generator)",
                    "Secure On-site Parking (20+ Cars)"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[10px] font-bold uppercase tracking-wide leading-snug">
                    <FaCheckCircle className="text-amber-200 mt-0.5 shrink-0" /> 
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
               
               <div className="space-y-3 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/10 p-3 rounded-2xl border border-white/10 flex flex-col items-center gap-1 text-center">
                        <FaHome size={18} /> <span className="text-[8px] font-black uppercase">Private Estate</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-2xl border border-white/10 flex flex-col items-center gap-1 text-center">
                        <FaMusic size={18} /> <span className="text-[8px] font-black uppercase">DJ Ready</span>
                    </div>
                  </div>
                  
                  <a href={`https://wa.me/91${phoneNumber}`} target="_blank" className="flex items-center justify-center gap-2 bg-white text-amber-700 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-stone-50 transition-all shadow-lg mt-4">
                    <FaWhatsapp size={16} /> Check Availability
                  </a>
                  <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 border border-white/30 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                    <FaPhoneAlt size={12} /> Contact Host
                  </a>
                  <p className="text-[8px] font-bold uppercase text-center text-amber-100 mt-4 tracking-tighter italic">Official pricing for Nongore Villa Budge Budge since 2014</p>
               </div>
            </div>

            {/* MAP QUICK LINK */}
            <div className="bg-stone-100 p-6 rounded-[2.5rem] border border-stone-200">
                <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2">Location</p>
                <h4 className="text-sm font-bold text-stone-800 mb-4">Ganges Riverfront, Budge Budge</h4>
                <button className="w-full py-3 bg-stone-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                    Open in Maps <FaArrowRight size={10} />
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}