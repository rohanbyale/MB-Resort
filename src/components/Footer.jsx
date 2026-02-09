'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    explore: [
      { name: 'The Estate', href: '#' },
      { name: 'Suites & Villas', href: '#' },
      { name: 'Wellness Center', href: '#' },
      { name: 'Private Dining', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  return (
    <footer className="bg-[#0f172a]  text-stone-300 py-16 px-6 md:px-24 font-sans relative overflow-hidden">
      
      {/* Decorative Brand Background */}
      <div className="absolute -bottom-10 -left-10 text-white/5 font-serif italic text-[15rem] pointer-events-none select-none whitespace-nowrap">
        MB Resort
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND & STORY */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-serif italic text-white tracking-tighter leading-none">
                MB Resort
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#3E8B8B] font-bold mt-1">
                Omerga Estate
              </span>
            </div>
            <p className="text-sm font-serif italic leading-relaxed text-stone-400 mb-6">
              A tribute to the stillness of the Deccan Plateau. Built with basalt, wind, and silence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-[#3E8B8B] hover:border-[#3E8B8B] hover:text-white transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-[#3E8B8B] hover:border-[#3E8B8B] hover:text-white transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-[#3E8B8B] hover:border-[#3E8B8B] hover:text-white transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* 2. EXPLORE LINKS */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Explore</h4>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-serif italic hover:text-[#3E8B8B] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT DETAILS */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin size={16} className="text-[#3E8B8B] mt-1 shrink-0" />
                <p className="text-sm font-serif italic leading-snug">
                  Village Omerga, NH65, <br /> Maharashtra 413606
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={16} className="text-[#3E8B8B] shrink-0" />
                <p className="text-sm font-serif italic">+91 20 4000 8000</p>
              </li>
            </ul>
          </div>

          {/* 4. NEWSLETTER / ACTION */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Stay Connected</h4>
            <p className="text-xs font-serif italic mb-6 text-stone-500">
              Join our mailing list for seasonal solstice updates.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-stone-800 border-none rounded-none py-3 px-0 border-b border-stone-700 focus:border-[#3E8B8B] focus:ring-0 text-sm transition-colors text-white"
              />
              <button className="absolute right-0 bottom-3 text-[#3E8B8B] hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-widest text-stone-600">
            © 2026 MB Resort Omerga. All Rights Reserved.
          </p>
          
          <div className="flex gap-8">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.href} className="text-[9px] uppercase tracking-widest text-stone-600 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-stone-500 hover:text-white transition-colors"
          >
            <span className="text-[9px] uppercase tracking-widest font-bold">Top</span>
            <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-[#3E8B8B] transition-all">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;