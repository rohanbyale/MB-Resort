'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  // Only 3 reviews as requested
  const reviews = [
    { name: "Julianne Moore", role: "Architect", text: "The way the basalt walls catch the morning light is a masterclass in minimalist luxury.", rating: 5 },
    { name: "Vikram Sethi", role: "Journalist", text: "Absolute silence. It’s rare to find a place that respects the Deccan landscape this much.", rating: 5 },
    { name: "Elena Rodriguez", role: "Consultant", text: "The spa isn't just a service; it's a sanctuary. I left feeling like a version of myself.", rating: 5 },
  ];

  return (
    <section className="bg-[#FAF9F6] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-12 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#3E8B8B] text-[10px] uppercase tracking-[0.6em] font-sans font-black mb-3 block"
          >
            Guest Chronicles
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tighter leading-none">
            Voices of <span className="italic font-light text-stone-400">The Sanctuary.</span>
          </h2>
        </div>

        {/* --- HORIZONTAL GRID (No Scroll Animation) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[24px] border border-stone-100 shadow-sm flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={10} className="fill-[#3E8B8B] text-[#3E8B8B]" />
                  ))}
                </div>
                <Quote className="text-stone-50 mb-4" size={32} />
                <p className="text-lg md:text-xl font-serif italic text-stone-800 leading-snug">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-stone-50 flex items-center justify-center text-[#3E8B8B] font-serif italic border border-stone-100 text-sm shrink-0">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[10px] uppercase tracking-widest text-stone-900 leading-none">
                    {review.name}
                  </h4>
                  <p className="text-[8px] text-stone-400 uppercase tracking-widest mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;