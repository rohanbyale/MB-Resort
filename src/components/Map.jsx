'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, MessageSquare } from 'lucide-react';

const MapPage = () => {
  return (
    /* UPDATED BG: Deep Midnight Slate (#0f172a) for a modern, high-end feel */
    <section id='location' className="bg-[#0f172a] py-10 px-6 md:px-12 font-serif overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION HEADER: TIGHTENED MARGINS --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-sans mb-1 block">Location & Essence</span>
            <h2 className="text-4xl md:text-5xl text-white leading-[0.9] tracking-tighter">
              Where luxury meets <br /> 
              <span className="italic font-light text-amber-00">tranquility.</span>
            </h2>
          </div>
          
          <motion.a 
            href="#feedback"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white text-[#0f172a] px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-xl hover:bg-slate-100 transition-colors font-sans w-fit h-fit"
          >
            <MessageSquare size={13} />
            Give Feedback
          </motion.a>
        </div>

        {/* --- MAIN CONTENT: SYNCHRONIZED HEIGHTS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded-2xl overflow-hidden border border-white/5">
          
          {/* --- LEFT: MAP (8 COLS) --- */}
          <div className="lg:col-span-7 relative group h-[400px] lg:h-[520px] bg-slate-200">
            <iframe
              title="The MB Resort Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.37344933092!2d76.5869444!3d17.8664444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc577b8c8d8c8d7%3A0x1234567890abcdef!2sThe%20MB%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale-[0.5] contrast-[1.2] brightness-[0.8]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            
            {/* FLOATING DIRECTION UI */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
              <div className="bg-white p-3 rounded-xl shadow-xl pointer-events-auto flex items-center gap-3 border border-slate-100">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 uppercase font-bold font-sans tracking-tight leading-none mb-1">Visit Us</p>
                  <p className="text-xs font-medium text-slate-800 leading-none">Koregaonwadi, MH</p>
                </div>
              </div>
              
              <motion.a 
                href="#" 
                target="_blank"
                whileHover={{ y: -1 }}
                className="bg-[#3E8B8B] text-white p-3 rounded-xl shadow-xl pointer-events-auto flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-wider"
              >
                <Navigation size={14} />
                Directions
              </motion.a>
            </div>
          </div>

          {/* --- RIGHT: BRAND CARD (5 COLS) --- */}
          <div className="lg:col-span-5 flex flex-col bg-white overflow-hidden">
            {/* Logo Section */}
            <div className="p-8 text-center relative flex-grow flex flex-col justify-center border-b border-slate-50">
              <div className="flex gap-1 absolute top-6 left-1/2 -translate-x-1/2">
                <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                <div className="w-1 h-1 rounded-full bg-[#3E8B8B]"></div>
                <div className="w-1 h-1 rounded-full bg-slate-200"></div>
              </div>
              
              <div className="relative inline-block">
                <span className="block text-2xl md:text-3xl font-light italic text-slate-400 leading-none mb-[-8px] ml-5">
                  The MB
                </span>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-[#3E8B8B] uppercase leading-[0.8]">
                  Resort
                </h1>
              </div>
              <p className="mt-4 text-[9px] font-sans uppercase tracking-[0.4em] text-slate-300">Exclusive Luxury</p>
            </div>

            {/* Image Section */}
            <div className="relative h-[240px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="The MB Resort Night View"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="h-px w-10 bg-white/40 mb-3"></div>
                <p className="text-[11px] text-white/90 leading-relaxed font-light italic max-w-[180px]">
                  Bespoke hospitality curated for the refined traveler.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapPage;