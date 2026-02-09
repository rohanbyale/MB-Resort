'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Car, Compass, ArrowRight, ExternalLink } from 'lucide-react';

const LocationPage = () => {
  const travelModes = [
    {
      type: "By Air",
      detail: "Fly into Kalaburagi Airport (GBI). Our private chauffeur will meet you at the terminal for a scenic 90-minute drive.",
      icon: <Plane size={20} />,
      label: "Commercial & Private"
    },
    {
      type: "By Road",
      detail: "The resort is a 6-hour drive from Hyderabad or Pune via the NH65. Valet parking and EV charging are complimentary.",
      icon: <Car size={20} />,
      label: "Highway Access"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] font-sans">
      
      {/* 1. CINEMATIC MAP HEADER - Reduced Height */}
      <section className="relative h-[45vh] w-full overflow-hidden bg-stone-200">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000" 
          alt="Satellite view of Deccan Plateau" 
          className="w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/80 via-transparent to-[#FAF9F6]" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-[40px] shadow-2xl border border-stone-100 max-w-lg"
          >
            <MapPin className="text-[#3E8B8B] mx-auto mb-4" size={32} />
            <h1 className="text-3xl md:text-4xl font-serif italic text-stone-900 mb-2">Remote, yet <br /> reachable.</h1>
            <p className="text-stone-500 font-serif font-light text-[10px] uppercase tracking-[0.3em]">Omerga, Maharashtra • 18.01° N, 76.62° E</p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE LOGISTICS GRID - Tighter Padding */}
      <section className="px-6 md:px-24 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Getting Here */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h3 className="text-sm tracking-[0.4em] uppercase text-[#3E8B8B] font-bold mb-4">Directions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {travelModes.map((mode, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[30px] border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[#3E8B8B] mb-3">{mode.icon}</div>
                  <h4 className="text-xl font-serif italic mb-1">{mode.type}</h4>
                  <p className="text-stone-500 font-serif text-xs leading-relaxed mb-3 font-light">{mode.detail}</p>
                  <span className="text-[9px] text-stone-400 uppercase tracking-widest font-bold">{mode.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-900 p-8 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xs">
              <Compass className="text-amber-400 mb-3" size={24} />
              <h4 className="text-xl font-serif italic">Concierge Chauffeur</h4>
              <p className="text-stone-400 font-serif text-xs mt-1">Personalized pickup service from major cities or hubs.</p>
            </div>
            <button className="whitespace-nowrap bg-white text-stone-900 px-6 py-3 rounded-full text-[10px] tracking-widest uppercase font-bold hover:bg-[#3E8B8B] hover:text-white transition-all">
              Request Transfer
            </button>
          </div>
        </div>

        {/* Right Side: The Surrounding Discovery */}
        <div className="lg:col-span-5">
           <div className="sticky top-8 space-y-6">
              <div className="bg-stone-50 border border-stone-200 p-8 rounded-[35px]">
                 <h3 className="text-sm tracking-[0.4em] uppercase text-stone-400 font-bold mb-6">Nearby Heritage</h3>
                 <ul className="space-y-4">
                    <li className="flex items-center justify-between group cursor-pointer">
                        <div>
                            <p className="text-stone-900 font-serif text-lg leading-tight">Naldurg Fort</p>
                            <p className="text-stone-400 font-serif text-[10px] tracking-widest">34 KM • 45 MIN</p>
                        </div>
                        <ArrowRight size={16} className="text-[#3E8B8B] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </li>
                    <div className="h-[1px] w-full bg-stone-200" />
                    <li className="flex items-center justify-between group cursor-pointer">
                        <div>
                            <p className="text-stone-900 font-serif text-lg leading-tight">Solapur Heritage Walk</p>
                            <p className="text-stone-400 font-serif text-[10px] tracking-widest">90 KM • 1 HR 40 MIN</p>
                        </div>
                        <ArrowRight size={16} className="text-[#3E8B8B] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </li>
                 </ul>
                 <button className="mt-8 flex items-center gap-2 text-[9px] uppercase font-bold tracking-widest text-[#3E8B8B] hover:gap-4 transition-all">
                    Explore Region <ExternalLink size={10} />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* 3. TIGHT CTA FOOTER - Tightened Spacing */}
      <footer className="px-6 md:px-24 py-12 border-t border-stone-200 text-center">
         <p className="text-stone-400 font-serif text-[9px] uppercase tracking-[0.4em] mb-2">Your sanctuary awaits</p>
         <h2 className="text-3xl font-serif italic text-stone-900 mb-8">Safe travels to the heart of the Deccan.</h2>
         <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[#3E8B8B] text-white rounded-full text-[10px] tracking-widest font-bold uppercase hover:bg-stone-900 transition-all shadow-lg shadow-[#3E8B8B]/20">
                Open in Google Maps
            </button>
            <button className="px-8 py-4 border border-stone-300 text-stone-900 rounded-full text-[10px] tracking-widest font-bold uppercase hover:bg-white transition-all">
                Download Directions PDF
            </button>
         </div>
      </footer>
    </div>
  );
};

export default LocationPage;