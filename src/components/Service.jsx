'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, BedDouble, UtensilsCrossed, Plus } from 'lucide-react';

const MBResortOfferings = () => {
  const services = [
    {
      title: "The Grand Hall",
      category: "Celebrations",
      description: "A masterclass in volume and light. Our fully air-conditioned sanctuary is tailored for grand weddings and elite corporate gatherings.",
      icon: <Building2 size={18} />,
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
      // Soft Sage/Deep Green tint
      accentBg: "bg-[#E9EDE9]", 
      hoverBg: "hover:bg-[#DDE5DD]"
    },
    {
      title: "Deluxe Suites",
      category: "Rest",
      description: "Modern minimalism meets absolute comfort. Designed as a retreat within a retreat for the discerning traveler.",
      icon: <BedDouble size={18} />,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
      // Soft Clay/Terracotta tint
      accentBg: "bg-[#F5EBE6]",
      hoverBg: "hover:bg-[#F0DFD7]"
    },
    {
      title: "Signature Dining",
      category: "Gastronomy",
      description: "A culinary journey of local heritage and global flavors, served in an atmosphere of warmth and hygiene.",
      icon: <UtensilsCrossed size={18} />,
      image: "https://i.pinimg.com/736x/17/67/b6/1767b6c40bc8c093d4a20de259ac5d9b.jpg",
      // Soft Slate/Blue tint
      accentBg: "bg-[#E8ECF0]",
      hoverBg: "hover:bg-[#DBE3E9]"
    }
  ];

  return (
    <section id='service' className="bg-[#f4f1ee] py-16 md:py-24 px-4 sm:px-6 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-20 items-end">
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-bold text-stone-400 mb-4 block"
            >
              The MB Experience
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl text-stone-900 leading-[1.1] md:leading-[1] tracking-tighter"
            >
              Our World <br />
              <span className="italic font-light text-amber-800 lg:ml-20">of Service.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-stone-600 text-sm md:text-base font-light border-l border-stone-300 pl-6 leading-relaxed italic">
              "We curate the backdrop for your life's most significant chapters."
            </p>
          </div>
        </div>

        {/* --- RESPONSIVE GRID LAYOUT --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className={`group flex flex-col h-full ${service.accentBg} ${service.hoverBg} p-4 rounded-2xl transition-colors duration-500 shadow-sm hover:shadow-xl`}
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-60 md:h-72 w-full overflow-hidden rounded-xl shadow-lg mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-stone-800 flex items-center gap-2">
                    {service.icon} {service.category}
                  </span>
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col flex-grow px-2 pb-2">
                <h3 className="text-xl md:text-2xl text-stone-900 mb-3 flex items-center justify-between">
                  {service.title}
                  <Plus className="text-amber-800 group-hover:rotate-90 transition-transform duration-500" size={16} />
                </h3>
                <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light italic mb-6">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-stone-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-amber-800 cursor-pointer">
                    Explore Details
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CLEANER FOOTER --- */}
        <div className="mt-16 md:mt-20 flex flex-col items-center gap-6">
            <div className="h-px w-24 bg-stone-300" />
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#1c1917', color: '#fff' }}
              className="w-full sm:w-auto px-12 py-5 border border-stone-900 text-stone-900 rounded-full text-[10px] tracking-[0.4em] font-bold transition-all duration-300"
            >
              DOWNLOAD BROCHURE
            </motion.button>
        </div>
      </div>
    </section>
  );
};

export default MBResortOfferings;