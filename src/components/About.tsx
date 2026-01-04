"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaTruck, FaRoute, FaArrowRight, FaCheckCircle, FaGlobeAsia, FaHistory, FaCubes } from 'react-icons/fa';

export default function About() {
  const features = [
    { 
      icon: <FaTruck aria-hidden="true" />, 
      title: "Massive Fleet", 
      desc: "Wide range of containers and open-body trucks ready for immediate dispatch from Sikar.",
      linkTitle: "View fleet specs" 
    },
    { 
      icon: <FaGlobeAsia aria-hidden="true" />, 
      title: "All-India Reach", 
      desc: "Strategic logistics network connecting Rajasthan to major industrial hubs across India.",
      linkTitle: "View routes"
    },
    { 
      icon: <FaHistory aria-hidden="true" />, 
      title: "15+ Years Legacy", 
      desc: "Decades of experience in handling complex industrial and commercial cargo with zero loss.",
      linkTitle: "Our history"
    },
    { 
      icon: <FaCubes aria-hidden="true" />, 
      title: "Bulk Logistics", 
      desc: "Specialized in Full Truckload (FTL) services for raw materials and finished industrial goods.",
      linkTitle: "Commercial services" 
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
          <div className="relative grid grid-cols-12 gap-2 h-[500px] md:h-[650px] hidden md:grid" aria-hidden="true">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative col-span-7 row-span-2 overflow-hidden shadow-2xl rounded-tl-3xl bg-slate-100"
            >
              <Image 
                src="/transportation/2.webp"
                alt="Poonia Transportation Fleet" 
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
                src="/transportation/i.webp"  
                alt="Cargo Loading" 
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
                src="/transportation/i.webp" 
                alt="Truck on Highway" 
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
                src="/transportation/i.webp" 
                alt="Sikar Logistics Hub" 
                fill 
                className="object-cover" 
              />
            </motion.div>
            
            {/* Logo Badge */}
            <div 
              className="absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 bg-orange-600 p-5 rounded-2xl shadow-2xl text-center z-20 hidden md:block border-2 border-white transform -rotate-2 select-none"
            >
               <p className="text-xl font-black text-white leading-none tracking-tighter uppercase">Poonia</p>
               <p className="text-[10px] font-bold uppercase tracking-widest text-orange-100 leading-tight mt-1">Sikar Transit<br/>Solutions</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Reliable Cargo Movement • Since 2008</span>
              <h2 id="about-heading" className="text-4xl md:text-6xl font-black text-stone-900 tracking-tighter leading-none mt-4 uppercase">
                Driving Your <br/> <span className="text-orange-600">Supply Chain.</span>
              </h2>
              <div className="space-y-4 mt-6">
                <p className="text-stone-600 text-lg leading-relaxed font-medium">
                  <strong>Poonia Transportation</strong> is a Sikar-based logistics powerhouse dedicated to point-to-point commercial freight movement.
                </p>
                <p className="text-stone-500 text-base leading-relaxed">
                  We specialize in <strong>Full Truckload (FTL) services</strong>, offering a robust fleet of 50+ vehicles. From industrial raw materials to finished commercial goods, we provide <strong>secure, timely, and cost-effective transport</strong> without the complexities of packing and moving.
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
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 uppercase text-[10px] tracking-wider">{item.title}</h3>
                    <p className="text-stone-500 text-[11px] leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link 
                  href="#fleet" 
                  className="inline-flex items-center gap-3 text-stone-900 font-black uppercase text-xs tracking-widest border-b-2 border-orange-600 pb-2 hover:text-orange-600 transition-colors outline-none"
                >
                    Request Freight Quote <FaArrowRight size={12} aria-hidden="true"/>
                </Link>
                <div className="flex items-center gap-2 text-stone-700 text-[10px] font-black uppercase tracking-widest">
                    <FaCheckCircle className="text-orange-600" aria-hidden="true" /> Real-time Tracking & GPS Enabled
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}