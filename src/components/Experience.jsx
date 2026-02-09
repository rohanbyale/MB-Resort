'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Cloud, Droplets, ArrowRight, Map } from 'lucide-react';

const ExperiencesPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const offerings = [
    {
      id: 0,
      category: "Accommodations",
      title: "The Pavilion Suites",
      description: "Floor-to-ceiling glass walls that dissolve the boundary between your living space and the Omerga flora. Features a private infinity plunge pool and outdoor rain shower.",
      amenity: "240 sqm • Private Deck",
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000"
    },
    {
      id: 1,
      category: "Wellness",
      title: "Vedic Spa Rituals",
      description: "Deeply restorative treatments using oils infused with local botanicals. Our spa is carved into natural rock formations to maintain a primal connection to the earth.",
      amenity: "Holistic Healing • Sound Bath",
      img: "https://i.pinimg.com/736x/24/d0/ef/24d0ef5f8b1e3681340ccf80e2226a90.jpg"
    },
    {
      id: 2,
      category: "Culinary",
      title: "The Earth Table",
      description: "A farm-to-plate philosophy where 80% of ingredients are harvested from our own estate gardens. Experience dinner under the Deccan stars.",
      amenity: "Organic • Open Fire Cooking",
      img: "https://images.unsplash.com/photo-1617822205245-70fb4386616b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div id='experience' className="bg-[#FAF9F6] font-sans overflow-hidden min-h-screen">
      
      {/* 1. SECTION HEADER */}
      <header className="px-6 md:px-12 lg:px-24 pt-12 md:pt-16 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl lg:text-7xl font-serif italic font-light text-stone-900 tracking-tighter leading-[1.1]"
          >
            The art of <span className="text-amber-800">intentional</span> living.
          </motion.h2>
        </div>
        
        {/* Scrollable tabs for mobile */}
        <div className="flex gap-6 md:gap-8 border-b border-stone-200 pb-2 overflow-x-auto no-scrollbar whitespace-nowrap">
          {offerings.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-500 pb-2 relative flex-shrink-0 ${
                activeTab === idx ? 'text-stone-900 font-bold' : 'text-stone-400'
              }`}
            >
              0{idx + 1} {item.category}
              {activeTab === idx && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3E8B8B]" />
              )}
            </button>
          ))}
        </div>
      </header>

      {/* 2. DYNAMIC CONTENT SPLIT-PANEL */}
      <main className="relative h-auto lg:h-[65vh] w-full px-4 md:px-12 pb-8">
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[30px] md:rounded-[40px] shadow-2xl bg-white border border-stone-100">
          
          {/* Text Content */}
          <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-stone-50 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                   <span className="text-[9px] tracking-[0.4em] text-[#3E8B8B] uppercase font-black px-3 py-1.5 border border-[#3E8B8B]/20 rounded-full inline-block">
                    {offerings[activeTab].amenity}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-stone-900 mb-4">
                  {offerings[activeTab].title}
                </h3>
                <p className="text-stone-500 text-sm md:text-base leading-relaxed font-light mb-8 max-w-md">
                  {offerings[activeTab].description}
                </p>
                
                <button className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#3E8B8B] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight size={18} />
                  </div>
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-stone-900">Discover Details</span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-7 relative overflow-hidden h-[300px] md:h-[400px] lg:h-full order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                src={offerings[activeTab].img}
                className="w-full h-full object-cover brightness-90"
              />
            </AnimatePresence>
            <div className="absolute top-6 right-6">
                <div className="w-10 h-10 backdrop-blur-md bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-white">
                    <Map size={16} />
                </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. COLORFUL EXPERIENCE STRIP */}
      <section className="px-6 md:px-12 lg:px-24 py-10 border-t border-stone-200/60 overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-between items-center gap-4 md:gap-8 min-w-max lg:min-w-0">
          
          {/* Feature 1: Water */}
          <div className="flex items-center gap-4 p-3 md:p-4 rounded-2xl bg-blue-50/50 border border-blue-100 min-w-[180px]">
            <div className="p-3 bg-blue-500 rounded-xl text-white shadow-lg shadow-blue-200">
              <Droplets size={18} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] tracking-widest text-blue-600/70 uppercase font-bold">Temp. Control</span>
              <span className="text-xs md:text-sm font-serif text-blue-900 whitespace-nowrap">24°C Water</span>
            </div>
          </div>

          {/* Feature 2: Air */}
          <div className="flex items-center gap-4 p-3 md:p-4 rounded-2xl bg-teal-50/50 border border-teal-100 min-w-[180px]">
            <div className="p-3 bg-[#3E8B8B] rounded-xl text-white shadow-lg shadow-teal-200">
              <Cloud size={18} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] tracking-widest text-[#3E8B8B]/70 uppercase font-bold">Air Quality</span>
              <span className="text-xs md:text-sm font-serif text-teal-900">Pristine</span>
            </div>
          </div>

          {/* Feature 3: Service */}
          <div className="flex items-center gap-4 p-3 md:p-4 rounded-2xl bg-amber-50/50 border border-amber-100 min-w-[180px]">
            <div className="p-3 bg-amber-500 rounded-xl text-white shadow-lg shadow-amber-200">
              <Coffee size={18} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] tracking-widest text-amber-600/70 uppercase font-bold">Service</span>
              <span className="text-xs md:text-sm font-serif text-amber-900">24/7 Butler</span>
            </div>
          </div>

          <div className="hidden xl:flex flex-col items-end">
            <p className="text-[8px] tracking-[0.4em] text-stone-400 uppercase mb-1">Ref. No.</p>
            <p className="text-xs font-mono text-stone-900 bg-stone-100 px-3 py-1 rounded-md tracking-tighter">MB-EXP-2026-OMR</p>
          </div>
        </div>
      </section>

      {/* Tailwind Utility for hiding scrollbars */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ExperiencesPage;