"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaSwimmingPool, FaUsers, FaGlassCheers, FaOm, FaUtensils, FaShip, FaCamera } from 'react-icons/fa';

const activityList = [
  {
    title: "Majestic Ganges Views",
    desc: "Relax on our private deck with a 280º panoramic view of the Ganges. Watch the local life and the river flow by in total peace.",
    icon: <FaShip />,
    // Desktop: takes 2 cols and 2 rows. 
    size: "lg:col-span-2 lg:row-span-2 col-span-1 row-span-1",
    img: "/laptop/6.webp", // Replace with actual river view image
    tag: "River View"
  },
  {
    title: "Grand Wedding Venue",
    desc: "Kolkata's premier choice for destination weddings. Lush lawns and banquet halls accommodating up to 700 guests.",
    icon: <FaGlassCheers />, 
    size: "lg:col-span-2 lg:row-span-1 col-span-1",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070", // Replace with wedding lawn image
    tag: "Capacity 700+"
  },
  {
    title: "River Dolphin Spotting",
    desc: "A unique natural experience. Spot the rare and endangered River Dolphins right from the villa's viewpoint.",
    icon: <FaCamera />,
    size: "lg:col-span-1 lg:row-span-1 col-span-1",
    img: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=1962", // Replace with dolphin or river wildlife image
    tag: "Wildlife"
  },
  {
    title: "Rooftop Sunrise Yoga",
    desc: "Align your mind and soul with a guided yoga session as the sun rises over the horizon of the mighty Ganges.",
    icon: <FaOm />,
    size: "lg:col-span-1 lg:row-span-1 col-span-1",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070", // Replace with yoga/wellness image
    tag: "Wellness"
  },
];

const highlights = [
  "280º Ganges View",
  "River Dolphin Spotting",
  "Rooftop Sunrise Yoga",
  "Private Chef",
  "Pet Friendly",
  "Wedding Lawns",
  "No Hidden Fees",
  "Full Power Backup",
  "Valet Parking",
  "Local & International Cuisine",
  "Budge Budge Location"
];

export default function Activities() {
  const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with actual phone number

  return (
    <section id="activities" className="bg-white overflow-hidden md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[14px] md:text-xs">The Experience</span>
            <h3 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tighter mt-4 leading-[0.9]">
              Life at 
              <span className="text-amber-600 font-Caveat italic font-light capitalize tracking-normal" style={{ fontFamily: "'Caveat', cursive", textTransform: 'none', fontWeight: 'normal' }}> Nongore Villa.</span>
            </h3>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px] md:auto-rows-[320px]">
          {activityList.map((act, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-[2.5rem] shadow-sm border border-stone-100 ${act.size}`}
            >
              <Image
                src={act.img}
                alt={act.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* CONTENT */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="z-10">
                  <div className="w-10 h-10 bg-amber-600/90 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4 border border-white/20">
                    {act.icon}
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight uppercase">
                    {act.title}
                  </h4>
                  
                  <p className="text-stone-200 text-sm leading-snug max-w-[280px] lg:opacity-0 lg:h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500">
                    {act.desc}
                  </p>
                </div>
              </div>

              {act.tag && (
                <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-md text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest z-20 border border-white/30">
                  {act.tag}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Infinite Scrolling Inclusions Bar */}
        <div className="w-full overflow-hidden py-12">
          <motion.div
            className="flex whitespace-nowrap gap-12 items-center"
            animate={{
              x: [0, -1500],
            }}
            transition={{
              duration: 25, 
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...highlights, ...highlights, ...highlights].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-stone-400 font-bold text-[11px] uppercase tracking-[0.2em] flex-shrink-0"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}