'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Camera, Palmtree } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200", tag: "Architecture" },
    { id: 2, src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800", tag: "Suites" },
    { id: 3, src: "https://i.pinimg.com/1200x/77/32/2f/77322f963a2876b7580127c8fa16082f.jpg", tag: "Wellness" },
    { id: 4, src: "https://i.pinimg.com/736x/e6/30/db/e630db9e931df9ea09a6090cf5dbfa89.jpg", tag: "Dining" },
    { id: 5, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800", tag: "Exterior" },
    { id: 6, src: "https://i.pinimg.com/736x/d6/a4/fa/d6a4fa80bbe4f57e0c2e0dba86fc7921.jpg", tag: "Poolside" },
    { id: 7, src: "https://i.pinimg.com/1200x/e6/6d/bb/e66dbb279953dda0c0c233d9e94c9f25.jpg", tag: "Poolside" },
    { id: 8, src: "https://i.pinimg.com/736x/3d/d3/02/3dd302605456092fe07671714e590884.jpg", tag: "Poolside" },
  ];

  return (
    <div id='gallery' className="bg-[#FAF9F6] min-h-screen font-sans pt-16 md:pt-24 pb-12 px-4 md:px-24">
      
      {/* 1. EDITORIAL HEADER */}
      <header className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="max-w-xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-[#3E8B8B] mb-4 md:mb-6"
          >
            <Camera size={14} className="md:size-[16px]" />
            <span className="text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold">Visual Narratives</span>
          </motion.div>
          <h2 className="text-4xl md:text-8xl font-serif italic font-light text-stone-900 tracking-tighter leading-[0.9]">
            Capture <br className="hidden md:block" /> <span className="text-amber-800">the Stillness.</span>
          </h2>
        </div>
        
        {/* Stats - Hidden or simplified on very small mobile if needed, but here kept elegant */}
        <div className="flex gap-8 border-t border-stone-200 pt-4 w-full md:w-auto md:border-t-0 md:pt-0">
            <div className="flex flex-col gap-1">
                <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-stone-400">Total Frames</span>
                <span className="text-sm md:text-xl font-serif tracking-tighter">42—01</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-stone-400">Location</span>
                <span className="text-sm md:text-xl font-serif tracking-tighter">Omerga Plateau</span>
            </div>
        </div>
      </header>

      {/* 2. PINTEREST-STYLE MASONRY GRID 
          'columns-2' on mobile is the key for the Pinterest look.
      */}
      <div className="columns-2 lg:columns-3 gap-3 md:gap-8 space-y-3 md:space-y-8 pb-12">
        {images.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer overflow-hidden rounded-[15px] md:rounded-[30px] bg-stone-200 break-inside-avoid"
            onClick={() => setSelectedImg(img.src)}
          >
            <img 
              src={img.src} 
              alt={img.tag} 
              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Overlay - simplified for mobile touch */}
            <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-3 md:p-8 text-white">
              <div className="flex justify-end">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <Maximize2 size={12} className="md:size-[16px]" />
                </div>
              </div>
              <div className="hidden md:block">
                <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-white/70 mb-2 block">{img.tag}</span>
                <h4 className="text-2xl font-serif italic leading-none">Perspective {img.id}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors">
              <X size={24} className="md:size-[32px]" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              src={selectedImg} 
              className="max-w-full max-h-[80vh] md:max-h-full object-contain rounded-xl md:rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="mt-8 md:mt-12 border-t border-stone-200 pt-12 md:pt-16 text-center">
        <Palmtree className="mx-auto text-[#3E8B8B] mb-4 md:mb-6" size={24} md:size={32} strokeWidth={1} />
        <h3 className="text-2xl md:text-5xl font-serif italic text-stone-900 mb-8 md:mb-10 px-4">
            See yourself in the story.
        </h3>
        <button className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-[#3E8B8B] text-white rounded-full text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold hover:bg-stone-900 transition-all duration-500 shadow-lg">
            Check Availability
        </button>
      </section>

    </div>
  );
};

export default GalleryPage;