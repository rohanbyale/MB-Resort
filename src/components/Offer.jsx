'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Star, Crown, ArrowRight, Clock } from 'lucide-react';

const OffersPage = () => {
  const secondaryOffers = [
    {
      title: "The Wellness",
      benefit: "30% Off Spa",
      validity: "Mon - Thu",
      code: "REJUV26",
      color: "bg-teal-50",
      accent: "text-[#3E8B8B]"
    },
    {
      title: "Culinary",
      benefit: "Free Tasting",
      validity: "Suite Guests",
      code: "GASTRO-MB",
      color: "bg-amber-50",
      accent: "text-amber-600"
    }
  ];

  return (
    <div id='offer' className="bg-[#FAF9F6] px-4 md:px-12 lg:px-24 font-sans min-h-screen pb-12">
      
      {/* 1. HEADER */}
      <div className="pt-12 md:pt-16 mb-8 md:mb-12">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#3E8B8B] text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase font-bold"
        >
          Limited Availability
        </motion.span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-stone-900 tracking-tighter mt-2 md:mt-4 leading-tight">
          Privileges of the <span className="text-amber-800">Sanctuary</span>
        </h2>
      </div>

      {/* STICKY WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        
        {/* 2. PRIMARY HERO OFFER */}
        <div className="lg:col-span-2 lg:sticky lg:top-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group overflow-hidden rounded-[30px] md:rounded-[40px] bg-stone-900 h-[400px] md:h-[500px] lg:h-[700px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
              alt="Luxury Stay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-16 w-full">
              <div className="flex items-center gap-2 mb-3">
                <Star className="text-amber-400 fill-amber-400" size={12} />
                <span className="text-[9px] tracking-widest text-amber-200 uppercase font-bold">Most Coveted</span>
              </div>
              <h3 className="text-2xl md:text-4xl lg:text-6xl font-serif italic text-white mb-4 lg:mb-6 leading-tight">
                The Seasonal <br className="hidden md:block" /> Solstice Package
              </h3>
              <p className="text-stone-300 max-w-sm lg:max-w-md mb-6 lg:mb-8 font-light text-sm md:text-base">
                Book a 3-night stay in any Pavilion Suite and receive a complimentary private dinner and transfers.
              </p>
              <button className="bg-[#3E8B8B] text-white px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-4 hover:bg-white hover:text-[#3E8B8B] transition-all duration-500 shadow-xl w-fit">
                <span className="text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold">Claim Privilege</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Timer Badge - Smaller on Mobile */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-3 md:p-4 rounded-2xl md:rounded-3xl text-center">
               <Clock className="text-amber-200 mx-auto mb-1 md:mb-2" size={16} md:size={20} />
               <p className="text-[7px] md:text-[8px] text-white/60 uppercase tracking-tighter leading-none">Ends In</p>
               <p className="text-sm md:text-lg font-mono text-white">48:12:05</p>
            </div>
          </motion.div>
        </div>

        {/* 3. SECONDARY OFFERS & NEWSLETTER */}
        <div className="flex flex-col gap-6">
          
          {/* Horizontal Grid for small cards on Mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {secondaryOffers.map((offer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`${offer.color} p-5 md:p-8 rounded-[25px] md:rounded-[35px] border border-stone-200 flex flex-col justify-between h-[260px] md:h-[340px] relative overflow-hidden group`}
              >
                <div className="relative z-10">
                  <div className={`${offer.accent} mb-3 md:mb-4`}>
                     {idx === 0 ? <Crown size={20} /> : <Ticket size={20} />}
                  </div>
                  <h4 className="text-lg md:text-2xl font-serif italic text-stone-900 mb-1">{offer.title}</h4>
                  <p className={`text-sm md:text-xl font-bold ${offer.accent} tracking-tight leading-tight`}>{offer.benefit}</p>
                  <p className="text-stone-400 text-[8px] md:text-[10px] uppercase tracking-widest mt-2 md:mt-4">{offer.validity}</p>
                </div>

                <div className="mt-4 flex items-center justify-between relative z-10">
                  <div className="bg-white px-2 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl border border-dashed border-stone-300">
                     <span className="text-[8px] md:text-[10px] font-mono text-stone-600 tracking-tighter uppercase">{offer.code}</span>
                  </div>
                  <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-[#3E8B8B] group-hover:text-white transition-all duration-500">
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/50 rounded-full blur-2xl md:blur-3xl group-hover:bg-[#3E8B8B]/10 transition-all duration-700" />
              </motion.div>
            ))}
          </div>

          {/* 4. NEWSLETTER JOIN */}
          <div className="bg-stone-900 p-6 md:p-8 rounded-[25px] md:rounded-[35px] flex flex-col justify-center text-center">
             <p className="text-[8px] md:text-[9px] tracking-[0.4em] text-stone-500 uppercase mb-3 md:mb-4">Be the first to know</p>
             <h5 className="text-white font-serif italic text-base md:text-lg mb-4 md:mb-6">Join the Inner Circle</h5>
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 md:py-3 px-5 text-xs md:text-sm text-white focus:outline-none focus:border-[#3E8B8B]"
                />
                <button className="absolute right-1.5 top-1.5 bg-[#3E8B8B] text-white p-1.5 rounded-full hover:scale-105 transition-transform">
                  <ArrowRight size={14} />
                </button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OffersPage;