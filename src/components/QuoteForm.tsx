"use client";
import { FaPaperPlane, FaWhatsapp, FaMapMarkerAlt, FaTruckLoading, FaWeightHanging } from 'react-icons/fa';
import { useState } from 'react';

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Add your form submission logic here
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[150px] -z-10" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Side: Copy */}
          <div className="lg:col-span-2 space-y-6">
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">Fast Quote Dispatch</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9]">
              Ready to <br /> <span className="text-stone-500 hover:text-white transition-colors cursor-default">Move Cargo?</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed">
              Fill out the freight requirements for your industrial load from Sikar. Our dispatchers provide competitive rates within 120 minutes.
            </p>
            
            <div className="pt-6">
              <a 
                href="https://wa.me/919828XXXXXX" // Update with Sikar phone number
                className="inline-flex items-center gap-4 text-green-500 font-bold uppercase tracking-widest text-xs hover:text-green-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <FaWhatsapp size={20} />
                </div>
                Quick Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side: Enhanced Form */}
          <div className="lg:col-span-3">
            <div className="bg-stone-900 border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                
                {/* Pickup */}
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500 group-focus-within:text-orange-500 transition-colors">Pickup (Origin)</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" />
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Sikar Industrial Area" 
                      className="w-full bg-stone-950 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:border-orange-600 focus:ring-1 focus:ring-orange-600 outline-none transition-all placeholder:text-stone-700" 
                    />
                  </div>
                </div>
                
                {/* Destination */}
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500 group-focus-within:text-orange-500 transition-colors">Drop (Destination)</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" />
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Mundra Port, Gujarat" 
                      className="w-full bg-stone-950 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:border-orange-600 focus:ring-1 focus:ring-orange-600 outline-none transition-all placeholder:text-stone-700" 
                    />
                  </div>
                </div>

                {/* Material Type */}
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Commodity Type</label>
                  <div className="relative">
                    <FaTruckLoading className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600 pointer-events-none" />
                    <select className="w-full bg-stone-950 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm appearance-none focus:border-orange-600 outline-none transition-all">
                      <option>Textiles & Apparel</option>
                      <option>Heavy Industrial Machinery</option>
                      <option>Building Materials</option>
                      <option>FMCG / Consumables</option>
                      <option>Automotive Parts</option>
                    </select>
                  </div>
                </div>

                {/* Truck Weight */}
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Est. Weight (Tons)</label>
                  <div className="relative">
                    <FaWeightHanging className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" />
                    <input 
                      type="number" 
                      placeholder="Enter Weight" 
                      className="w-full bg-stone-950 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:border-orange-600 outline-none transition-all placeholder:text-stone-700" 
                    />
                  </div>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button 
                    disabled={loading}
                    className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-stone-800 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-900/40 active:scale-[0.98]"
                  >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <FaPaperPlane size={14} /> Calculate Estimated Freight
                        </>
                    )}
                  </button>
                  <p className="text-center text-[9px] text-stone-600 uppercase tracking-widest mt-4">
                    By submitting, you agree to our transit terms and conditions.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}