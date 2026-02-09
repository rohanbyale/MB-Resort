'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, MapPin } from 'lucide-react';

const RadialHorizonHero = () => {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { 
        title: "The Atrium", 
        loc: "Grand Entrance", 
        img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2000" 
    },
    { 
        title: "Azure Pool", 
        loc: "Rooftop Sanctuary", 
        img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000" 
    },
    { 
        title: "Omerga Suite", 
        loc: "Private Wing", 
        img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2000" 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      setRotation((prev) => prev + 120);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full bg-[#FAF9F6] overflow-hidden flex items-center justify-center font-sans text-stone-800">
      
      {/* 1. BACKGROUND DEPTH: Large Branded Watermark (Subtle contrast for light mode) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[35vw] font-black text-[#3E8B8B]/[0.05] uppercase select-none tracking-tighter">
            MB
        </h2>
      </div>

      {/* 2. THE CENTRAL PORTAL */}
      <div className="relative z-10 w-[85vh] h-[85vh] max-w-[95vw] max-h-[95vw] flex items-center justify-center">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ clipPath: 'circle(0% at 50% 50%)', scale: 1.1 }}
            animate={{ clipPath: 'circle(50% at 50% 50%)', scale: 1 }}
            exit={{ clipPath: 'circle(0% at 50% 50%)', scale: 0.9 }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 shadow-2xl"
          >
            {/* Soft teal overlay to blend images into the brand palette */}
            <div className="absolute inset-0 bg-[#3E8B8B]/15 mix-blend-multiply z-10" />
            <img 
              src={slides[activeIndex].img} 
              className="w-full h-full object-cover brightness-[0.8] contrast-[1.05]" 
              alt={slides[activeIndex].title} 
            />
          </motion.div>
        </AnimatePresence>

        {/* 3. ROTATING COMPASS RING (Darker for visibility) */}
        <motion.div 
          animate={{ rotate: rotation }}
          transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 border border-[#3E8B8B]/30 rounded-full pointer-events-none"
        >
          {slides.map((_, i) => (
            <div 
              key={i}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `rotate(${i * 120}deg) translateY(-42.5vh)` }}
            >
              <div className="w-[2px] h-10 bg-[#3E8B8B]" />
            </div>
          ))}
        </motion.div>

        {/* 4. FLOATING CONTENT BOX */}
        <div className="relative z-20 text-center flex flex-col items-center">
          <motion.div
            key={`meta-${activeIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <MapPin size={12} className="text-[#3E8B8B]" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-stone-500 font-bold">
                {slides[activeIndex].loc}
            </span>
          </motion.div>
          
          <motion.h1 
            key={`title-${activeIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-6xl md:text-9xl font-serif italic font-light tracking-tighter text-white drop-shadow-lg"
          >
            {slides[activeIndex].title}
          </motion.h1>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#3E8B8B', color: '#FAF9F6' }}
            className="mt-12 px-8 py-4 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white flex items-center gap-4 group transition-all duration-500 shadow-xl"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold">View Gallery</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* 5. BRANDED HEADER UI (Dark Text) */}
      <div className="absolute top-10 left-10 z-30 flex items-center gap-6">
        <div className="flex flex-col">
            <span className="text-stone-900 font-bold tracking-[0.4em] text-[11px] uppercase">MB Resort</span>
            <span className="text-[#3E8B8B] text-[8px] tracking-[0.2em] uppercase font-black">Private Sanctuary</span>
        </div>
      </div>

      <div className="absolute top-10 right-10 z-30 flex items-center gap-8">
        <button className="hidden md:block text-[9px] tracking-[0.3em] uppercase font-bold text-[#3E8B8B] hover:text-stone-900 transition-colors">
            Reserve a Stay
        </button>
        <button className="flex items-center gap-3 group bg-stone-900/5 backdrop-blur-lg p-3 rounded-full border border-stone-900/10 hover:bg-stone-900/10 transition-all">
            <Menu size={20} strokeWidth={1.5} className="text-stone-900" />
        </button>
      </div>

      {/* 6. BOTTOM METRICS (MB RESORT PALETTE) */}
      <div className="absolute bottom-10 left-10 z-30">
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3E8B8B] animate-pulse" />
                <span className="text-[9px] tracking-[0.3em] uppercase text-stone-500 font-medium">Omerga, India</span>
            </div>
            <div className="h-[1px] w-32 bg-gradient-to-r from-[#3E8B8B]/60 to-transparent" />
            <div className="flex gap-8">
                <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-stone-400 uppercase tracking-tighter">Availability</span>
                    <span className="text-[10px] text-stone-900 font-mono font-bold">84%</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-stone-400 uppercase tracking-tighter">Climate</span>
                    <span className="text-[10px] text-stone-900 font-mono font-bold">28°C</span>
                </div>
            </div>
        </div>
      </div>

      {/* 7. SCROLL INDICATOR */}
      <div className="absolute bottom-10 right-10 z-30 flex flex-col items-center gap-4">
        <span className="text-[8px] tracking-[0.5em] uppercase text-stone-400 [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#3E8B8B] to-transparent" />
      </div>

    </section>
  );
};

export default RadialHorizonHero;