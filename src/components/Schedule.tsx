"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";

interface TimelineItem {
  time: string;
  activity: string;
  description: string;
  image: string;
  color: string;
}

interface ScheduleItemProps {
  item: TimelineItem;
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const timeline: TimelineItem[] = [
  { 
    time: "04:00 PM", 
    activity: "Arrival & Ambiance", 
    description: "Check into your riverside room or tent. Settle in with a refreshing local welcome drink as you soak in the Limbanwadi quiet.",
    image: "/manali/6.webp", 
    color: "bg-emerald-800"
  },
  { 
    time: "05:00 PM", 
    activity: "The Golden Hour Tea", 
    description: "Traditional tea served with hot local snacks on the riverfront deck while the Sahyadri mountains change colors.",
    image: "/tea.webp",
    color: "bg-orange-600"
  },
  { 
    time: "06:00 PM", 
    activity: "Artist Studio Tour", 
    description: "Explore our on-site creative space. Watch art in progress or simply find a corner to start your own sketch.",
    image: "/manali/6.webp",
    color: "bg-emerald-600"
  },
  { 
    time: "08:30 PM", 
    activity: "Soulful Veg Feast", 
    description: "A hand-crafted Pure Vegetarian dinner featuring North Indian and local flavors, slow-cooked for authentic taste.",
    image: "/snacks.webp",
    color: "bg-orange-700"
  },
  { 
    time: "10:00 PM", 
    activity: "Star Gazing & Vinyls", 
    description: "Unwind by the bonfire with curated music. Bhandardara's dark skies offer a brilliant canvas for star lovers.",
    image: "/stagazing-bhandardara.webp",
    color: "bg-zinc-900"
  },
  { 
    time: "08:30 AM", 
    activity: "Morning Mist Breakfast", 
    description: "Start with fresh Poha or Misal Pav. Enjoy the crisp morning air by the river with a hot cup of ginger tea.",
    image: "/snacks.jpg",
    color: "bg-emerald-500"
  },
  { 
    time: "11:00 AM", 
    activity: "Farewell", 
    description: "One last walk through the organic garden before checking out. Depart with a renewed sense of peace.",
    image: "/manali/6.webp",
    color: "bg-zinc-500"
  },
];

function ScheduleItem({ item, index, setActiveIndex }: ScheduleItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) setActiveIndex(index);
  }, [isInView, index, setActiveIndex]);

  return (
    <div ref={ref} className="md:py-8 py-1 first:pt-0 last:md:pb-64 last:pb-12">
      <motion.div 
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        className="space-y-4"
      >
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white font-black text-[10px] tracking-widest shadow-lg ${item.color}`}>
           {item.time}
        </div>
        <h3 
          className="text-5xl md:text-5xl font-normal text-emerald-900 leading-tight" 
          style={{ fontFamily: "'Caveat', cursive", textTransform: 'none' }}
        >
          {item.activity}
        </h3>
        <p className="text-lg text-stone-500 max-w-sm leading-relaxed font-medium">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Schedule() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="itinerary" className="bg-white relative py-12 md:py-0">
      
      {/* MOBILE VIEW */}
      <div className="lg:hidden relative px-6">
          <div className="text-center mb-12">
             <span className="text-emerald-800 font-black uppercase tracking-[0.4em] text-[10px]">The Flow of Time</span>
             <h2 className="text-4xl font-black text-zinc-900 leading-none mt-2">Life At <br/> <span className="text-orange-600 italic font-normal" style={{ fontFamily: "'Caveat', cursive" }}>Sukoon</span></h2>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-32 bottom-0 w-px bg-stone-200" />
          
          <div className="space-y-16 relative">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex items-start w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-[45%]">
                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'} space-y-2`}>
                    <span className={`text-[8px] font-black px-3 py-1 rounded-full text-white ${item.color}`}>{item.time}</span>
                    <h4 className="text-2xl font-normal text-emerald-900" style={{ fontFamily: "'Caveat', cursive" }}>{item.activity}</h4>
                    <p className="text-[11px] leading-relaxed text-stone-500 font-medium">{item.description}</p>
                  </div>
                </div>

                <div className="w-[10%] flex justify-center z-10 pt-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 ring-4 ring-white shadow-sm" />
                </div>

                <div className="w-[45%]">
                  <div className="relative aspect-[4/4] rounded-xl overflow-hidden shadow-xl border border-stone-100">
                    <Image src={item.image} alt={item.activity} fill className="object-cover" sizes="45vw" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>

      {/* LAPTOP VIEW */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6">
        <div className="flex flex-row gap-12">
          
          <div className="w-1/2 sticky top-0 h-screen py-24">
            <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden shadow-2xl ">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="absolute inset-0"
                >
                  <Image src={timeline[activeIndex].image} alt={timeline[activeIndex].activity} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-12 left-12 right-12 z-20">
                 <div className="flex justify-between items-center text-white mb-6">
                    <span className="bg-white/20 backdrop-blur-xl border border-white/30 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest">{timeline[activeIndex].activity}</span>
                    <span className="font-mono text-sm opacity-60">{activeIndex + 1} — {timeline.length}</span>
                 </div>
                 <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-orange-500"
                        animate={{ width: `${((activeIndex + 1) / timeline.length) * 100}%` }}
                    />
                 </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 pl-20">
            <div className="pt-24 pb-16">
              <span className="text-emerald-800 font-black uppercase tracking-[0.4em] text-xs mb-4 block">Slow Living</span>
              <h2 className="text-7xl font-black text-zinc-900 tracking-tighter leading-none">
                The Sukoon <br/>
                <span className="text-orange-600 italic font-normal" style={{ fontFamily: "'Caveat', cursive", textTransform: 'none' }}>
                  Daily Flow
                </span>
              </h2>
            </div>

            <div className="relative border-l border-stone-100 pl-16">
              {timeline.map((item, index) => (
                <ScheduleItem key={index} item={item} index={index} setActiveIndex={setActiveIndex} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}