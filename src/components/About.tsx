"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaSwimmingPool, FaUsers, FaArrowRight, FaUtensils, FaCheckCircle, FaOm, FaShip } from 'react-icons/fa';

export default function About() {
  const features = [
    { 
      icon: <FaShip aria-hidden="true" />, 
      title: "Ganges Views", 
      desc: "Experience 280º majestic views of the Ganges and watch endangered River Dolphins from the villa.",
      linkTitle: "Explore the views" 
    },
    { 
      icon: <FaUtensils aria-hidden="true" />, 
      title: "Private Chef", 
      desc: "A talented chef preparing local Bengali delicacies and international cuisine tailored to your taste.",
      linkTitle: "View dining options"
    },
    { 
      icon: <FaOm aria-hidden="true" />, 
      title: "Sunrise Yoga", 
      desc: "Begin your day with a rooftop yoga practice as the sun rises over the historic river horizon.",
      linkTitle: "Explore wellness"
    },
    { 
      icon: <FaUsers aria-hidden="true" />, 
      title: "Grand Events", 
      desc: "The ideal venue for weddings and retreats, accommodating up to 700 guests with full power backup.",
      linkTitle: "View wedding spaces" 
    },
  ];

  return (
    <section 
      id="about" 
      className="md:py-12 py-4 bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Nongore Villa Grid */}
          <div className="relative grid grid-cols-12 gap-2 h-[500px] md:h-[650px]" aria-hidden="true">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative col-span-7 row-span-2 overflow-hidden shadow-2xl rounded-tl-3xl bg-slate-100"
            >
              <Image 
                src="/mobile/1.webp" 
                alt="Nongore Villa Riverside Exterior" 
                fill 
                className="object-cover" 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative col-span-5 h-[100%] overflow-hidden shadow-xl rounded-tr-3xl bg-slate-100"
            >
              <Image 
                src="/laptop/9.webp"  
                alt="Ganges River View from Balcony" 
                fill 
                className="object-cover" 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative col-span-5 h-[100%] overflow-hidden shadow-xl self-end bg-slate-100"
            >
              <Image 
                src="/laptop/8.webp"    
                alt="Luxury Master Suite" 
                fill 
                className="object-cover" 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative col-span-12 h-[100%] overflow-hidden shadow-xl rounded-b-3xl bg-slate-100"
            >
              <Image 
                src="/laptop/3.webp"  
                alt="Grand Wedding Lawn at Nongore" 
                fill 
                className="object-cover" 
              />
            </motion.div>
            
            {/* Logo Badge */}
            <div 
              className="absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 bg-amber-600 p-5 rounded-2xl shadow-2xl text-center z-20 hidden md:block border-2 border-white transform rotate-2 select-none"
            >
               <p className="text-xl font-black text-white leading-none tracking-tighter">VILLA</p>
               <p className="text-xl font-black text-white uppercase tracking-tighter">NONGORE</p>
               <p className="text-[8px] font-bold uppercase tracking-widest text-amber-100 leading-tight mt-1">Luxury By The<br/>Ganges</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-xs">Authentic Riverside Hospitality • Since 2014</span>
              <h2 id="about-heading" className="text-4xl md:text-6xl font-black text-stone-900 tracking-tighter leading-none mt-4 uppercase">
                Serene Luxury <br/> <span className="text-4xl md:text-7xl text-amber-500" style={{ fontFamily: "Caveat", fontStyle: 'italic', textTransform: 'none' }}>By The Ganges.</span>
              </h2>
              <div className="space-y-4 mt-6">
                <p className="text-stone-600 text-lg leading-relaxed font-medium">
                  <strong>Villa Nongore</strong> is more than just a holiday rental; it is a meticulously curated sanctuary where nature meets absolute comfort.
                </p>
                <p className="text-stone-500 text-base leading-relaxed">
                  Located in Budge Budge, our villa offers <strong>sheer comfort and total privacy</strong>. Whether you seek a romantic getaway, a family retreat, or a grand wedding venue for up to <strong>700 guests</strong>, we tailor-make every stay to pamper you exactly as you deserve.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-2">
              {features.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-1 md:p-2 rounded-2xl hover:bg-stone-50 transition-all border border-transparent hover:border-stone-100"
                  title={item.linkTitle}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 uppercase text-xs tracking-wider">{item.title}</h3>
                    <p className="text-stone-500 text-[11px] leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link 
                  href="#events" 
                  className="inline-flex items-center gap-3 text-stone-900 font-black uppercase text-xs tracking-widest border-b-2 border-amber-600 pb-2 hover:text-amber-600 transition-colors outline-none"
                >
                    View Event Packages <FaArrowRight size={12} aria-hidden="true"/>
                </Link>
                <div className="flex items-center gap-2 text-stone-700 text-[10px] font-black uppercase tracking-widest">
                    <FaCheckCircle className="text-amber-600" aria-hidden="true" /> Pet Friendly & No Hidden Fees
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}