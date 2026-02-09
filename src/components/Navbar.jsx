'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Heritage', href: '#service' },
    { name: 'Experiences', href: '#experience' },
    { name: 'Offers', href: '#offer' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 ${
          scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex flex-col">
            <span className="text-2xl font-serif italic tracking-tighter text-stone-900 leading-none">
              MB Resort
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-[#3E8B8B] font-bold">
              Omerga Estate
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-600 hover:text-[#3E8B8B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex items-center gap-4">
            <a href="tel:+" className="hidden md:flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors">
              <Phone size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Concierge</span>
            </a>
            <button className="bg-[#3E8B8B] text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-stone-900 transition-all duration-500 shadow-lg shadow-[#3E8B8B]/20">
              <Calendar size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Reserve</span>
            </button>
            
            {/* MOBILE MENU TOGGLE */}
            <button 
              className="lg:hidden p-2 text-stone-900"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-stone-900 text-white p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="flex flex-col">
                <span className="text-2xl font-serif italic">MB Resort</span>
                <span className="text-[8px] tracking-[0.3em] text-stone-500 uppercase">The Plateau</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 border border-white/10 rounded-full">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-serif italic hover:text-[#3E8B8B] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.5em] text-stone-500 mb-4">Inquiries</p>
              <p className="text-xl font-serif italic leading-relaxed">concierge@mbresortomerga.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;