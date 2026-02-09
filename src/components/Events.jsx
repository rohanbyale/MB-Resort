'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users } from 'lucide-react';

const EventsPage = () => {
  const events = [
    {
      title: "Moonlight Jazz",
      day: "14",
      month: "FEB",
      time: "19:00",
      category: "Music",
      img: "https://i.pinimg.com/1200x/e9/2c/67/e92c67f95e4ff446fdb7ee5d960d7e12.jpg",
    },
    {
      title: "Wellness Day",
      day: "15",
      month: "MAR",
      time: "06:00",
      category: "Retreat",
      img: "https://images.unsplash.com/photo-1595064085577-7c2ef98ec311?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];

  return (
    /* Changed py-24 to py-12 on mobile, kept py-24 on md+ */
    /* Changed min-h-[700px] to min-h-fit on mobile, kept on lg+ */
    <section className="bg-[#fcfaf8] py-12 md:py-24 px-6 md:px-12 font-serif overflow-hidden min-h-fit lg:min-h-[700px] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* --- TIGHT HEADER --- */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="relative">
            <span className="text-[#3E8B8B] text-[10px] uppercase tracking-[0.5em] font-sans font-black mb-2 block">
              Curated Archive
            </span>
            <h2 className="text-4xl md:text-6xl text-stone-900 leading-none tracking-tighter">
              Seasonal <span className="italic font-light text-amber-800">Events.</span>
            </h2>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-[10px] uppercase tracking-widest font-sans font-bold border-b border-stone-200 pb-2 hover:border-[#3E8B8B] transition-colors h-fit"
          >
            Explore Calendar
          </motion.button>
        </div>

        {/* --- COMPACT TWO-COLUMN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative flex flex-col cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl mb-6 shadow-md group-hover:shadow-2xl transition-all duration-700">
                <img 
                  src={event.img} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                />
                
                {/* FLOATING DATE */}
                <div className="absolute top-4 left-4 md:top-5 left-5 bg-white/95 backdrop-blur-md w-12 h-12 md:w-14 md:h-14 rounded-xl flex flex-col items-center justify-center shadow-lg">
                  <span className="text-lg md:text-xl font-bold text-stone-900 leading-none">{event.day}</span>
                  <span className="text-[8px] md:text-[9px] font-sans font-black text-stone-400 uppercase tracking-tighter">{event.month}</span>
                </div>

                {/* OVERLAY ACTION */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="bg-white p-3 md:p-4 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ArrowRight size={20} className="text-[#3E8B8B]" />
                   </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-1 md:px-2">
                <div className="flex justify-between items-start md:items-center mb-3 gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 leading-tight md:leading-none">
                    {event.title}
                  </h3>
                  <span className="text-[#3E8B8B] font-sans text-[8px] md:text-[9px] uppercase tracking-[0.1em] font-black py-1 px-3 bg-[#3E8B8B]/10 rounded-full whitespace-nowrap">
                    {event.category}
                  </span>
                </div>
                
                <div className="flex gap-3 md:gap-4 text-stone-400 font-sans text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-[#3E8B8B]/60" />
                    {event.time}
                  </div>
                  <div className="text-stone-200">|</div>
                  <div className="flex items-center gap-1.5">
                    <Users size={12} className="text-[#3E8B8B]/60" />
                    Limited Entry
                  </div>
                </div>
              </div>

              {/* WATERMARK */}
              <span className="absolute -top-4 -right-1 md:-top-6 md:-right-2 text-6xl md:text-7xl font-serif italic text-stone-100/60 -z-10 group-hover:text-[#3E8B8B]/10 transition-colors pointer-events-none">
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

     

      </div>
    </section>
  );
};

export default EventsPage;