"use client";
import { FaMapMarkedAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

const spots = [
  { 
    name: "Achipur Chinese Temple", 
    time: "15 Min", 
    desc: "Visit the 18th-century heritage site featuring the oldest Chinese temple in India and the horseshoe-shaped tomb of Tong Achi.",
    image: "/attraction/1.webp" // Representative heritage image
  },
  { 
    name: "The Rajbari Bawali", 
    time: "20 Min", 
    desc: "A stunning 300-year-old architectural masterpiece. Explore the regal Zamindari history and ruins of the Gopinath Temple.",
    image: "/attraction/2.webp" // Representative palace image
  },
  { 
    name: "Budge Budge Station", 
    time: "35 Min", 
    desc: "Our primary rail link, providing a direct 50-minute connection to Sealdah and the heart of Kolkata city.",
    image: "/attraction/3.webp" // Representative station image
  },
  { 
    name: "Birlapur Riverside", 
    time: "10 Min", 
    desc: "A serene and secluded spot on the Hooghly riverbank, perfect for quiet evening walks and watching the sunset over the water.",
    image: "/attraction/4.webp"  // Representative river image
  }
];

export default function Nearby() {
  return (
    <section id="nearby" className="py-24 bg-stone-950 text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">Riverside Explorations</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mt-4 uppercase leading-none">
              Around <span className="text-stone-600">Budge Budge</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-stone-400 max-w-sm text-sm leading-relaxed"
          >
            Nongore Villa is perfectly perched along the Ganges, offering a gateway 
            to the historic trails and tranquil riverfronts of South 24 Parganas.
          </motion.p>
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spots.map((spot, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/5 bg-stone-900 shadow-2xl"
            >
              <Image 
                src={spot.image}
                alt={spot.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 ease-out"
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 backdrop-blur-md border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-xl group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                    <FaMapMarkedAlt size={20} />
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-black text-white bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10">
                    <FaClock className="text-amber-500" /> {spot.time}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                    {spot.name}
                  </h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed font-medium transform transition-all duration-500">
                    {spot.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action for Sightseeing */}
        <div className="mt-16 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500 mb-4">Planning a Day Trip?</p>
            <p className="text-sm text-stone-300">Our concierge can arrange <strong>Private Ferry Rides</strong> or cabs for local heritage tours directly from the villa.</p>
        </div>
      </div>
    </section>
  );
}