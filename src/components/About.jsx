import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Sparkles } from 'lucide-react';

const MBResortRefinedDetails = () => {
  // Animation presets for consistency
  const revealUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div  className="bg-[#FAF9F6] font-sans text-stone-900 selection:bg-amber-100 overflow-hidden w-full relative">
      
      {/* --- WELCOME / STORY SECTION --- */}
      <section className="relative py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Visual Element: Offset Image Composition */}
          <div className="md:col-span-5 relative order-2 md:order-1 mt-12 md:mt-0">
            <motion.div 
              {...revealUp}
              className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-[6px] md:border-8 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Event Decor"
                className="h-full w-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
            </motion.div>
            
            {/* Background Decorative Element */}
            <div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-amber-100/50 rounded-full blur-3xl -z-0" />
            
            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ rotate: -10, opacity: 0, scale: 0.9 }}
              whileInView={{ rotate: 5, opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 z-20 w-28 h-28 md:w-36 md:h-36 bg-stone-950 text-white rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl border border-white/10"
            >
              <Sparkles className="text-amber-400 mb-2" size={16} />
              <span className="text-[7px] md:text-[9px] font-bold tracking-[0.2em] uppercase leading-tight">
                Est. 2026 <br /> <span className="text-amber-400">Premier Venue</span>
              </span>
            </motion.div>
          </div>

          {/* Text Content: Editorial Hierarchy */}
          <div className="md:col-span-7 order-1 md:order-2">
            <motion.div {...revealUp} className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 rounded-full border border-amber-100">
                <Star size={12} className="text-amber-600" fill="currentColor" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-700">The Omerga Sanctuary</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-7xl text-stone-900 leading-[1.1] tracking-tighter">
                Refining the art of <br />
                <span className="italic font-light text-stone-400 underline decoration-amber-200 decoration-1 underline-offset-[8px] md:underline-offset-[12px]">celebration.</span>
              </h2>
              
              <div className="max-w-lg space-y-4 md:space-y-6 text-stone-500 text-base md:text-lg font-light leading-relaxed">
                <p>
                  At <span className="text-stone-900 font-medium">The MB Resort</span>, we don't just host events; we curate atmospheres. From the grandest weddings to intimate corporate retreats, our venue adapts to your soul's vision.
                </p>
                <p className="hidden sm:block">
                  Experience a fusion of <span className="italic text-stone-800">architectural precision</span> and heartfelt hospitality, where every corner of our sanctuary is designed to foster unforgettable memories.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center pt-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-stone-900 text-white rounded-full overflow-hidden transition-all shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.3em]">
                    SECURE YOUR DATE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </motion.button>
                
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-xs tracking-widest uppercase">
                    <MapPin size={14} className="text-amber-500" />
                    Omerga, India
                  </div>
                  <span className="text-[10px] text-stone-400 tracking-wider">A world away, just around the corner.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- REFINED FEATURES BAR --- */}
      <section className="pb-20 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 border-t border-b border-stone-200 py-8 md:py-12">
              {[
                  { label: "Accommodations", val: "Luxe Suites", detail: "Feather-soft comfort" },
                  { label: "Gastronomy", val: "Global Flavors", detail: "Chef-curated menus" },
                  { label: "Venues", val: "Grand Ballroom", detail: "Indoor & Outdoor" },
                  { label: "Vibe", val: "Elite Privacy", detail: "Gated sanctuary" }
              ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="px-6 md:px-8 py-6 lg:py-0 flex flex-col justify-center group cursor-pointer"
                  >
                      <p className="text-[8px] md:text-[9px] text-amber-600 tracking-[0.5em] font-bold mb-2 md:mb-3 uppercase group-hover:translate-x-2 transition-transform">{item.label}</p>
                      <p className="font-serif text-xl md:text-2xl text-stone-900 mb-1">{item.val}</p>
                      <p className="text-[10px] md:text-xs text-stone-400 font-light tracking-wide italic">{item.detail}</p>
                  </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MBResortRefinedDetails;