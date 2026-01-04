"use client";
import { FaCrosshairs, FaUserShield, FaHeadset, FaRoute } from 'react-icons/fa';import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaCrosshairs size={32} />,
    title: "Real-Time GPS",
    desc: "Every vehicle in our fleet is equipped with advanced GPS for 24/7 live location tracking."
  },
  {
    icon: <FaUserShield size={32} />,
    title: "Verified Drivers",
    desc: "Strict background checks and 10+ years of long-haul experience for every driver."
  },
  {
    icon: <FaRoute size={32} />,
    title: "Zero Transshipment",
    desc: "Direct Sikar-to-Destination delivery. Your goods stay in one truck to prevent damage."
  },
  {
    icon: <FaHeadset size={32} />,
    title: "24/7 Dispatch",
    desc: "Round-the-clock support from our Sikar office to handle updates and emergencies."
  }
];

export default function SafetyTech() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Security First</span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 uppercase tracking-tighter mt-2">
              Logistics Built on <span className="text-stone-400">Total Trust.</span>
            </h2>
          </div>
          <p className="text-stone-500 text-sm max-w-sm italic border-l-2 border-orange-600 pl-4">
            We combine Rajasthan's traditional reliability with modern logistics technology.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-stone-50 rounded-3xl border border-stone-100 transition-all hover:bg-white hover:shadow-xl group"
            >
              <div className="text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-lg font-black text-stone-900 uppercase mb-3">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}