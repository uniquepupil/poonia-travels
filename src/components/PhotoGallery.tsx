"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/laptop/2.webp", alt: "Grand Entrance & Riverside Architecture", size: "col-span-2 row-span-2" },
  { src: "/laptop/1.webp", alt: "280º Views of the Majestic Ganges", size: "col-span-1 row-span-1" },
  { src: "/laptop/9.webp", alt: "Premium Suite with River-facing Balcony", size: "col-span-1 row-span-1" },
  { src: "/laptop/6.webp", alt: "Elegant Indoor Banquet Hall", size: "col-span-1 row-span-1" },
  { src: "/laptop/8.webp", alt: "Lush Outdoor Wedding Lawns", size: "col-span-1 row-span-2" },
  { src: "/laptop/1.webp", alt: "Serene Rooftop Yoga Deck", size: "col-span-1 row-span-1" },
  { src: "/laptop/6.webp", alt: "Nighttime Events by the River", size: "col-span-2 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="photos" className=" py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end md:mb-16 mb-8 gap-6">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs"
            >
              The Visual Story
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black text-stone-900 tracking-tighter mt-2 uppercase leading-none">
              MOMENTS AT <br />
              <span className="text-amber-500 font-Caveat italic" style={{ textTransform: 'none', fontWeight: 'normal', fontFamily: "'Caveat', cursive" }}>Nongore Villa</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-stone-500 max-w-sm text-sm md:text-base leading-relaxed">
              Discover a sanctuary where luxury meets the flow of nature. From golden sunrises over the 
              Ganges to grand celebrations in our riverside gardens.
            </p>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px] mb-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-[2rem] group ${img.size} border border-stone-100 shadow-sm`}
            >
              {/* Refined Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-stone-900/70 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[3px]">
                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Riverside Luxury
                </p>
                <div className="h-px w-8 bg-amber-500 mb-2" />
                <p className="text-white/90 text-[10px] md:text-xs font-medium uppercase tracking-tighter">
                  {img.alt}
                </p>
              </div>
              
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-all duration-1000 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Minimalist Brand Footer */}
        <div className="mt-12 flex justify-center">
           <div className="inline-flex items-center gap-4 px-8 py-4 bg-stone-50 rounded-full border border-stone-100 text-stone-500 text-[10px] font-black uppercase tracking-widest shadow-sm">
              <span>Weddings</span>
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Wellness</span>
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Ganges Views</span>
           </div>
        </div>
      </div>
    </section>
  );
}