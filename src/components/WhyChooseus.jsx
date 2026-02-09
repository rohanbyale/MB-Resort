'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, BadgePercent, Heart, ArrowUpRight, Hexagon, Compass } from 'lucide-react';

const WhyChooseUs = () => {
  const highlights = [
    {
      title: "Prime Destination",
      desc: "Nestled at MIDC Jakekur Chowrasta. An accessible sanctuary designed for exclusivity.",
      icon: <MapPin size={22} strokeWidth={1.5} />,
      tag: "Location",
      cardBg: "bg-emerald-50/80",
      iconBg: "bg-emerald-600",
      accent: "text-emerald-700"
    },
    {
      title: "Seamless Infrastructure",
      desc: "Industrial-grade power backups and climate systems—because your moment shouldn't flicker.",
      icon: <ShieldCheck size={22} strokeWidth={1.5} />,
      tag: "Reliability",
      cardBg: "bg-blue-50/80",
      iconBg: "bg-blue-600",
      accent: "text-blue-700"
    },
    {
      title: "Transparent Luxury",
      desc: "Premium hospitality stripped of hidden costs. Excellence made accessible.",
      icon: <BadgePercent size={22} strokeWidth={1.5} />,
      tag: "Value",
      cardBg: "bg-orange-50/80",
      iconBg: "bg-orange-600",
      accent: "text-orange-700"
    },
    {
      title: "The Human Touch",
      desc: "Service rooted in 'Atithi Devo Bhava'. We don't just serve; we care.",
      icon: <Heart size={22} strokeWidth={1.5} />,
      tag: "Hospitality",
      cardBg: "bg-rose-50/80",
      iconBg: "bg-rose-600",
      accent: "text-rose-700"
    }
  ];

  return (
    // Applied font-serif to the entire section container
    <section className="relative bg-white py-24 px-6 overflow-hidden font-serif">
      
      {/* --- DESIGNER BACKGROUND ELEMENTS --- */}
      
      {/* 1. Subtle Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} 
      />

      {/* 2. Abstract "Wanderer" Line */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.path
          d="M-50,200 Q200,50 400,300 T800,100 T1100,400"
          fill="none"
          stroke="black"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M-50,800 Q300,950 600,700 T1100,850"
          fill="none"
          stroke="black"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>

      {/* 3. Background Watermark */}
      <div className="absolute -right-20 bottom-10 opacity-[0.02] rotate-45 pointer-events-none">
        <Hexagon size={450} strokeWidth={0.3} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end mb-20">
          
          {/* --- SECTION TITLE AREA --- */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-md text-[10px] tracking-[0.3em] uppercase font-bold text-stone-500 mb-6 bg-stone-100 font-serif">
                The MB Distinction
              </span>
              <h2 className="text-6xl md:text-8xl text-stone-900 leading-tight tracking-tighter relative inline-block font-serif">
                Why Us?
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-400" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M2 10C50 3 150 3 298 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </h2>
            </motion.div>
          </div>

          <div className="flex-1 lg:pl-12">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-stone-500 text-xl leading-relaxed font-light italic border-l-2 border-stone-200 pl-8 bg-white/50 backdrop-blur-sm py-2 font-serif"
            >
              "We move beyond the checklist of hospitality to create the theatre for your life's most cherished memories."
            </motion.p>
          </div>
        </div>

        {/* --- COLORFUL GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${item.cardBg} backdrop-blur-md p-8 rounded-[2.5rem] border border-white/50 flex flex-col justify-between min-h-[340px] shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="flex justify-between items-start">
                <div className={`${item.iconBg} p-4 rounded-2xl text-white shadow-lg shadow-current/10`}>
                  {item.icon}
                </div>
                <span className={`text-[10px] font-bold tracking-widest uppercase font-serif ${item.accent} opacity-70`}>
                  {item.tag}
                </span>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl text-stone-900 mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="text-stone-600/90 text-sm leading-relaxed font-medium font-serif">
                  {item.desc}
                </p>
              </div>

              <div className="flex justify-end mt-4">
                 <div className={`${item.accent} p-2 rounded-full border border-current/20`}>
                    <ArrowUpRight size={16} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CALL TO ACTION --- */}
        <div className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-6 py-5 px-10 bg-stone-900 text-white rounded-2xl text-xs tracking-[0.4em] font-bold shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group font-serif"
          >
            <span className="relative z-10 uppercase font-serif">Discover The Experience</span>
            <Compass size={18} className="text-amber-400 relative z-10 group-hover:rotate-90 transition-transform duration-500" />
            <div className="absolute inset-0 bg-amber-800 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;