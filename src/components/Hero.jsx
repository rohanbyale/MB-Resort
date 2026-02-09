'use client';

import React, { useRef, memo, useCallback } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';

const LuxuryResortHero = memo(() => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 20 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // Parallax values for different layers
  const textX = useTransform(mouseX, (v) => v * 0.5);
  const textY = useTransform(mouseY, (v) => v * 0.5);
  const imgScale = useTransform(mouseY, [-20, 20], [1.1, 1.15]);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    x.set((clientX / innerWidth - 0.5) * 40);
    y.set((clientY / innerHeight - 0.5) * 40);
  }, [x, y]);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-stone-200"
    >
      {/* 1. BACKGROUND LAYER: Scale parallax */}
      <motion.div 
        style={{ scale: imgScale }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <motion.div 
          style={{ x: mouseX, y: mouseY }}
          className="h-full w-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10 opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/20 z-10" />
          
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=90&w=2400" 
            alt="Resort Exterior"
            className="h-full w-full object-cover brightness-[0.6] contrast-[1.1]"
          />
        </motion.div>
      </motion.div>

      {/* 2. TOPOGRAPHIC OVERLAY: Subtle "AI-breaking" texture */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      {/* 3. EDITORIAL CONTENT LAYOUT */}
      <div className="relative z-20 h-full w-full flex flex-col justify-between p-8 md:p-16">
        
        {/* Top Bar */}
        <div className="flex justify-between items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-1"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-amber-200/60">Legacy Boutique</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-stone-500 italic">Established 2026</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:flex items-center gap-8 text-[9px] tracking-[0.4em] uppercase font-medium text-stone-400"
          >
            <span className="hover:text-amber-200 transition-colors cursor-pointer">Rooms</span>
            <span className="hover:text-amber-200 transition-colors cursor-pointer">Dining</span>
            <span className="hover:text-amber-200 transition-colors cursor-pointer font-bold text-white border-b border-amber-500/50 pb-1">Reserve</span>
          </motion.div>
        </div>

        {/* Main Title: Asymmetric Editorial Style */}
        <div className="relative">
          <motion.div style={{ x: textX, y: textY }} className="pointer-events-none select-none">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[18vw] md:text-[14vw] leading-[0.8] tracking-tighter text-white/95"
            >
              MB <br />
              <span className="ml-[10vw] md:ml-[15vw] italic font-extralight text-amber-500/90">Resort</span>
            </motion.h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-1/2 right-0 md:right-24 translate-y-full max-w-[200px] text-right"
          >
            <p className="text-[10px] md:text-xs leading-relaxed tracking-widest text-stone-400 font-light italic">
              "A sanctuary carved into the horizon, where heritage whispers through the leaves of Omerga."
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar: Action & Location */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1 }}
             className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4 text-[10px] tracking-[0.6em] text-stone-500">
              <span className="w-8 h-[1px] bg-stone-700" />
              OMERGA SANCTUARY
            </div>
            
            <motion.button 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group"
            >
              <span className="text-[11px] font-bold tracking-[0.4em] text-white">DISCOVER THE EXPERIENCE</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <ArrowUpRight size={16} />
              </div>
            </motion.button>
          </motion.div>

          <div className="flex items-center gap-6 pb-2">
            <div className="flex flex-col items-end opacity-40">
              <span className="text-[8px] tracking-[0.3em]">SCROLL</span>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LuxuryResortHero;