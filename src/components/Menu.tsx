"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaPlus, FaUtensils, FaUsers, FaFish, FaCloudSun } from 'react-icons/fa';

export default function Menu() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textMove = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const imageMove = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const sections = [
    {
      id: "01",
      tag: "The Riverside Breakfast",
      title: "Sunrise At The Ganges",
      description: "Start your morning with a curated spread overlooking the river. Featuring fresh seasonal fruits, local Bengali breakfast delicacies, and artisanal beverages.",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070",
      icon: <FaCloudSun className="text-amber-500" />
    },
    {
      id: "02",
      tag: "Wedding Catering",
      title: "The Royal Banquet",
      description: "Meticulously planned menus for your big day. From authentic Mughlai to Continental favorites, our chefs cater to grand gatherings of up to 700 guests.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
      icon: <FaUsers className="text-amber-500" />
    },
    {
      id: "03",
      tag: "Chef's Special",
      title: "Local Catch & Fusion",
      description: "Experience the true flavors of the Ganges. Our private chef specializes in local river fish and international fusion dishes tailored to your preferences.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070",
      icon: <FaFish className="text-amber-500" />
    }
  ];

  return (
    <section ref={containerRef} id="menu" className="py-12 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro Section */}
        <div className="relative z-10 mb-32">
          <motion.div style={{ x: textMove }} className="absolute -top-24 left-0 text-[18vw] pt-12 md:pt-0 font-black text-white/8 whitespace-nowrap pointer-events-none uppercase">
             Nongore
          </motion.div>
          
          <div className="relative text-left -mb-24">
            <span className="text-amber-500 font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">Signature Dining</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              The <span className="text-amber-600">Ganges</span> <br /> 
              <span className="font-Caveat normal-case italic font-light text-stone-500" style={{ fontFamily: "'Caveat', cursive" }}>Bistro</span>
            </h2>
          </div>
        </div>

        {/* Dynamic Alternating Sections */}
        <div className="space-y-4">
          {sections.map((item, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
              
              {/* Image with Decorative Border */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{ y: imageMove }}
                className="w-full lg:w-1/2 group relative"
              >
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden z-10 border border-white/10 shadow-2xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                
                <div className={`absolute -inset-4 bg-amber-600/10 rounded-[3.5rem] -z-0 transform ${idx % 2 === 0 ? '-rotate-3' : 'rotate-3'} group-hover:rotate-0 transition-transform duration-500`} />
              </motion.div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-amber-500" />
                  <span className="text-amber-500 font-mono text-sm tracking-widest">{item.tag}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                    {item.title}
                  </h3>
                  <p className="text-xl text-stone-400 font-light leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 gap-4 pt-4">
                   {["Private Chef", "Bengali Cuisine", "Wedding Menus", "No Hidden Fees"].map((tag) => (
                     <li key={tag} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-500">
                       <FaPlus className="text-amber-600 text-[8px]" /> {tag}
                     </li>
                   ))}
                </ul>

                <div className="pt-8 text-center lg:text-left">
                  <button className="px-10 py-4 border border-white/20 rounded-full text-xs font-black uppercase tracking-widest hover:bg-amber-600 hover:border-amber-600 transition-all duration-300">
                    Explore Our Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Events */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 md:p-20 bg-stone-900 rounded-[4rem] border border-white/5 relative overflow-hidden text-center"
        >
           <div className="relative z-10">
              <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                Planning a <span className="text-amber-500">Wedding?</span>
              </h4>
              <p className="text-stone-400 max-w-xl mx-auto mb-10 text-lg">
                We provide full in-house catering, decoration, and DJ services to make your special day at Nongore Villa unforgettable.
              </p>
              <button className="bg-amber-600 px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-amber-900/20 hover:bg-amber-700 transition-colors">
                 Inquire About Catering
              </button>
           </div>
           
           <div className="absolute -right-20 -bottom-20 opacity-10">
              <FaUtensils className="text-[20rem] -rotate-12" />
           </div>
        </motion.div>

      </div>
    </section>
  );
}