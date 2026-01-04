"use client";
import { FaWeightHanging, FaArrowsAltH, FaBoxOpen } from 'react-icons/fa';
import Image from 'next/image';

const trucks = [
  {
    name: "14ft Eicher (Open/Closed)",
    capacity: "4 - 5 Tons",
    dimensions: "14' x 7' x 7'",
    bestFor: "Local distribution and small industrial parts.",
    image: "/transportation/3.webp" // Using your suggested path
  },
  {
    name: "20ft Container",
    capacity: "7 - 9 Tons",
    dimensions: "20' x 8' x 8'",
    bestFor: "Textiles, electronics, and moisture-sensitive cargo.",
    image: "/transportation/5.jpg"
  },
  {
    name: "32ft MXL Container",
    capacity: "15 - 18 Tons",
    dimensions: "32' x 8' x 8'",
    bestFor: "Heavy machinery and high-volume FMCG goods.",
    image: "/transportation/4.jpg"
  }
];

export default function FleetSpecs() {
  return (
    <section id="fleet" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Reliable Assets</span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 uppercase tracking-tighter mt-3">
            Our Heavy <span className="text-orange-600">Duty Fleet</span>
          </h2>
          <p className="text-stone-500 mt-4 max-w-2xl mx-auto italic">
            Strategic transport solutions from Sikar. Select the right vehicle for your specific cargo requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trucks.map((truck, i) => (
            <div key={i} className="bg-white border border-stone-200 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              {/* Image Container with Hover Effect */}
              <div className="h-64 bg-stone-200 relative overflow-hidden">
                <Image
                  src={truck.image}
                  alt={truck.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-black text-stone-900 uppercase mb-4 tracking-tight">{truck.name}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 text-sm text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shadow-inner">
                        <FaWeightHanging />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase text-stone-400 leading-none mb-1">Max Payload</p>
                        <p className="font-bold text-stone-800">{truck.capacity}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shadow-inner">
                        <FaArrowsAltH />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase text-stone-400 leading-none mb-1">Dimensions (LxWxH)</p>
                        <p className="font-bold text-stone-800">{truck.dimensions}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-stone-100">
                    <div className="flex items-start gap-3">
                        <FaBoxOpen className="text-orange-500 mt-1 shrink-0" size={14} />
                        <p className="text-xs text-stone-500 leading-relaxed font-medium">
                            {truck.bestFor}
                        </p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}