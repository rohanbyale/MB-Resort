'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plus } from 'lucide-react';

const CardStackSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const storyCards = [
    {
      title: "The Basalt Ritual",
      category: "Wellness",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000",
      desc: "A 90-minute immersion in heated volcanic stone therapy."
    },
    {
      title: "Nocturnal Dining",
      category: "Gastronomy",
      img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
      desc: "A secret 7-course menu served under the Omerga stars."
    },
    {
      title: "The Glass Pavilion",
      category: "Architecture",
      img: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=1000",
      desc: "Where indoor luxury meets the raw unbridled plateau."
    }
  ];

  return (
    // Height remains long to allow for scrolling room
    <section ref={containerRef} className="relative h-[300vh] md:h-[400vh] bg-[#FAF9F6]">
      
      {/* 1. Updated Sticky logic: 
          Added 'top-[80px]' (adjust this to match your Navbar height) 
          Changed 'h-screen' to 'h-[calc(100vh-80px)]' so it doesn't overflow the bottom
      */}
      <div className="sticky top-[80px] h-[calc(100vh-80px)] w-full overflow-hidden flex flex-col items-center justify-center px-6">
        
        {/* BACKGROUND TYPOGRAPHY */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h2 className="text-[35vw] md:text-[25vw] font-serif italic text-stone-200/60 leading-none select-none">
            Stories
          </h2>
        </div>

        {/* CARD STACK CONTAINER */}
        <div className="relative w-full max-w-[320px] md:max-w-lg aspect-[3/4.5] md:aspect-[3/4] z-10">
          {storyCards.map((card, i) => {
            const start = i * 0.25;
            const end = start + 0.3;
            
            return (
              <StackCard 
                key={i} 
                card={card} 
                index={i} 
                progress={scrollYProgress} 
                range={[start, end]} 
              />
            );
          })}
        </div>

        {/* FLOATING CAPTION */}
        <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-12 max-w-xs">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-[#3E8B8B] mb-2">
            Journal Vol. 01
          </p>
          <p className="text-stone-400 text-[11px] md:text-xs italic leading-relaxed">
            A curated look into the moments that define the MB experience. Scroll to peel back the layers.
          </p>
        </div>

      </div>
    </section>
  );
};

const StackCard = ({ card, index, progress, range }) => {
  // We use a helper to detect window size safely in Next.js/React
  const yOffset = typeof window !== 'undefined' && window.innerWidth < 768 ? 600 : 800;
  
  const y = useTransform(progress, range, [yOffset, 0]);
  const rotate = useTransform(progress, range, [15, index % 2 === 0 ? -2 : 2]);
  const scale = useTransform(progress, range, [0.85, 1 - index * 0.04]);
  const opacity = useTransform(progress, [range[0], range[0] + 0.05], [0, 1]);

  return (
    <motion.div
      style={{ y, rotate, scale, opacity, zIndex: 10 + index }}
      className="absolute inset-0 w-full h-full bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden border border-stone-100 flex flex-col group cursor-pointer"
    >
      <div className="relative h-1/2 md:h-2/3 w-full overflow-hidden">
        <img 
          src={card.img} 
          alt={card.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm">
            <Plus size={16} className="text-[#3E8B8B]" />
          </div>
        </div>
      </div>
      
      <div className="p-6 md:p-10 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-black text-stone-400 block mb-1 md:mb-2">
            {card.category} — 0{index + 1}
          </span>
          <h3 className="text-xl md:text-3xl font-serif text-stone-900 group-hover:italic transition-all leading-tight">
            {card.title}
          </h3>
        </div>
        <p className="text-stone-500 text-[12px] md:text-sm font-light leading-relaxed line-clamp-3 md:line-clamp-none">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default CardStackSection;