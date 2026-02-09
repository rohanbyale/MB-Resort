'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Instagram, 
  Facebook, 
  Youtube, 
  MessageCircle,
  Mail,
  ArrowRight
} from 'lucide-react';

const ContactSocialHub = () => {
  const links = [
    {
      name: "Instagram",
      handle: "@mbresort",
      icon: <Instagram size={20} />,
      color: "group-hover:text-white",
      bg: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500",
      accent: "text-pink-500",
      shadow: "shadow-pink-200"
    },
    {
      name: "WhatsApp",
      handle: "Chat now",
      icon: <MessageCircle size={20} />,
      color: "group-hover:text-white",
      bg: "hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600",
      accent: "text-emerald-500",
      shadow: "shadow-emerald-200"
    },
    {
      name: "Facebook",
      handle: "MB Resort",
      icon: <Facebook size={20} />,
      color: "group-hover:text-white",
      bg: "hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-500",
      accent: "text-blue-600",
      shadow: "shadow-blue-200"
    },
    {
      name: "YouTube",
      handle: "Watch 4K",
      icon: <Youtube size={20} />,
      color: "group-hover:text-white",
      bg: "hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500",
      accent: "text-red-600",
      shadow: "shadow-red-200"
    }
  ];

  return (
    <section className="bg-white py-12 px-6 font-serif">
      <div className="max-w-5xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-10 relative">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            className="mb-4 rounded-full"
          />
          <h2 className="text-5xl md:text-7xl text-stone-900 tracking-tighter leading-[0.85]">
            Get in <span className=" text-amber-800 italic font-light">Touch.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* --- LEFT: PRIMARY CONTACTS --- */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="col-span-2 lg:col-span-1">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-2 font-sans">Primary Channels</p>
            </div>
            
            <a href="tel:9850499292" className="group">
              <div className="h-full p-6 rounded-[2rem] bg-stone-50 border border-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 flex flex-col justify-center">
                <Phone className="text-emerald-500 mb-3" size={22} />
                <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest font-sans">Call us</p>
                <p className="text-lg font-medium tracking-tight">+91 98504</p>
              </div>
            </a>

            <a href="mailto:hello@mbresort.com" className="group">
              <div className="h-full p-6 rounded-[2rem] bg-stone-50 border border-stone-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 flex flex-col justify-center">
                <Mail className="text-emerald-500 group-hover:text-white mb-3 transition-colors" size={22} />
                <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest font-sans">Email</p>
                <p className="text-lg font-medium tracking-tight truncate">hello@mb</p>
              </div>
            </a>
          </div>

          {/* --- RIGHT: SOCIAL GRID --- */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-1 gap-3">
             <div className="col-span-2 md:hidden">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mt-4 mb-2 font-sans">Social Presence</p>
            </div>
            {links.map((link, idx) => (
              <motion.a
                key={idx}
                href="#"
                className={`group relative flex flex-col md:flex-row items-center md:justify-between p-6 md:py-5 md:px-6 rounded-[2rem] transition-all duration-500 ${link.bg} border border-transparent hover:border-white/20`}
              >
                <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-5 relative z-10">
                  <span className="hidden md:block text-xl italic text-stone-300 group-hover:text-white/40 transition-colors w-6">
                    {idx + 1}
                  </span>
                  
                  <div className={`p-3 rounded-xl bg-white shadow-sm ${link.shadow} group-hover:bg-white/20 group-hover:text-white group-hover:shadow-none transition-all duration-500 ${link.accent}`}>
                    {link.icon}
                  </div>

                  <div>
                    <h4 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${link.color} text-stone-900`}>
                      {link.name}
                    </h4>
                    <p className={`text-[10px] md:text-xs font-sans transition-colors group-hover:text-white/70 text-stone-500 uppercase tracking-wider`}>
                      {link.handle}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 hidden md:block">
                  <div className="w-10 h-10 rounded-full border border-stone-200 group-hover:border-white/40 flex items-center justify-center transition-all scale-90 group-hover:scale-100">
                    <ArrowRight className="text-stone-400 group-hover:text-white" size={18} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSocialHub;