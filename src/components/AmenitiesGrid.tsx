"use client";
import { motion } from "framer-motion";

// Font Awesome 5 (fa)
import { 
  FaTv, 
  FaWifi, 
  FaSwimmingPool, 
  FaCoffee, 
  FaHotTub, 
  FaShower, 
  FaParking, 
  FaUsers, 
  FaUtensils, 
  FaSuitcaseRolling, 
  FaTree 
} from 'react-icons/fa';

// Material Design (md)
import { 
  MdOutlineBalcony, 
  MdMeetingRoom 
} from 'react-icons/md';

const amenityList = [
  { icon: <FaSwimmingPool />, name: "Outdoor Swimming Pool", category: "Recreation" },
  { icon: <FaHotTub />, name: "Premium Hot Tub", category: "Relaxation" },
  { icon: <FaWifi />, name: "High-Speed Business WiFi", category: "Corporate" },
  { icon: <FaUtensils />, name: "Asian Breakfast Buffet", category: "Dining" },
  { icon: <MdOutlineBalcony />, name: "Private Terraces", category: "Villa Feature" },
  { icon: <FaUsers />, name: "Large Group Capacity", category: "Group Stays" },
  { icon: <MdMeetingRoom />, name: "Corporate Meeting Space", category: "Business" },
  { icon: <FaTree />, name: "Expansive Garden Area", category: "Outdoors" },
  { icon: <FaParking />, name: "Free On-Site Parking", category: "Utility" },
  { icon: <FaTv />, name: "Smart Entertainment", category: "Leisure" },
  { icon: <FaCoffee />, name: "Coffee & Tea Stations", category: "Dining" },
  { icon: <FaShower />, name: "Luxury Rain Showers", category: "Bathroom" },
];

export default function AmenitiesGrid() {
  return (
    <section id="amenities" className=" pb-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-amber-600 font-black uppercase tracking-[0.3em] text-xs"
          >
            Premium Resort Facilities
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tighter mt-4 uppercase">
            Resort <span className="text-amber-500 font-Caveat italic" style={{ fontFamily: "'Caveat', cursive", textTransform: 'none', fontWeight: 'normal' }}>Amenities.</span>
          </h2>
          <p className="text-stone-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Designed for both leisure and professional retreats, Swara Mangalam offers 
            the perfect infrastructure for corporate offsites and family celebrations in Lonavala.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenityList.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">
                {item.category}
              </p>
              <h4 className="text-sm font-bold text-stone-900 leading-tight">
                {item.name}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}