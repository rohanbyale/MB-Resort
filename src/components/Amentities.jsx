'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ParkingCircle, 
  Zap, 
  HeartHandshake, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

const AdditionalAmenities = () => {
  const amenities = [
    {
      title: "Waiting Area", // Slightly shortened for mobile fit
      description: "A comfortable, climate-controlled space for your guests.",
      icon: <Users className="text-emerald-700" size={20} />,
      bgColor: "bg-emerald-50",
    },
    {
      title: "Parking Space",
      description: "Secure and spacious on-site parking for all attendees.",
      icon: <ParkingCircle className="text-blue-700" size={20} />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Power Backup",
      description: "Never worry about interruptions with our generators.",
      icon: <Zap className="text-amber-700" size={20} />,
      bgColor: "bg-amber-50",
    },
    {
      title: "Expert Staff",
      description: "Dedicated hospitality team for a seamless event.",
      icon: <HeartHandshake className="text-rose-700" size={20} />,
      bgColor: "bg-rose-50",
    }
  ];

  return (
    <section className="relative bg-[#FAF9F6] py-12 md:py-16 px-4 md:px-6 font-serif overflow-hidden">
      
      {/* --- ORGANIC DECORATIVE SVG LINE WORK --- */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            d="M-50,500 Q250,100 500,500 T1050,500" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="text-stone-900"
          />
          <path 
            d="M-50,600 Q250,200 500,600 T1050,600" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            className="text-stone-700"
          />
        </svg>
      </div>

      {/* --- BLOB SVG --- */}
      <div className="absolute -top-12 -right-12 w-64 h-64 opacity-[0.03] pointer-events-none rotate-12">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000" d="M44.7,-76.4C58.2,-69.2,70,-58.5,78.2,-45.3C86.4,-32.1,91,-16,89.1,-0.6C87.2,14.8,78.8,29.6,69.1,43.3C59.4,57.1,48.4,69.8,34.9,76.2C21.4,82.7,5.3,82.8,-11,79.8C-27.3,76.8,-43.8,70.6,-56.3,60.6C-68.8,50.6,-77.3,36.8,-82.4,21.7C-87.5,6.6,-89.2,-9.7,-84.9,-24.9C-80.5,-40.1,-70.1,-54.2,-56.9,-61.6C-43.7,-69,-27.7,-69.7,-12.3,-71.4C3.1,-73.1,18.6,-75.8,31.2,-73.9C43.8,-72,53.5,-65.5,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center mb-4 shadow-lg"
          >
            <Plus size={18} />
          </motion.div>
          <h2 className="text-3xl md:text-5xl text-stone-900 mb-2 tracking-tight">
            The Little <span className="italic font-light text-amber-800">Extras</span>
          </h2>
          <p className="text-stone-500 max-w-lg text-xs md:text-base leading-relaxed italic px-4">
            Essential infrastructure for a perfect event.
          </p>
        </div>

        {/* --- AMENITIES BENTO GRID (2 columns on mobile, 4 on large screens) --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${item.bgColor} p-4 md:p-6 rounded-2xl border border-stone-100 transition-all duration-300 flex flex-col items-start h-full`}
            >
              <div className="bg-white p-2.5 md:p-3 rounded-xl shadow-sm mb-3 md:mb-4">
                {item.icon}
              </div>
              <h3 className="text-sm md:text-lg text-stone-900 mb-1 md:mb-2 leading-tight font-medium">
                {item.title}
              </h3>
              <p className="text-stone-600 text-[10px] md:text-sm leading-relaxed font-light italic">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- TRUST BANNER --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 py-6 border-y border-stone-200 flex flex-row justify-center gap-6 md:gap-16"
        >
          <div className="flex items-center gap-2 text-stone-400">
            <Clock size={14} className="md:w-4 md:h-4" />
            <span className="text-[7px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 text-stone-400">
            <ShieldCheck size={14} className="md:w-4 md:h-4" />
            <span className="text-[7px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold">Secure Premises</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const Plus = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default AdditionalAmenities;