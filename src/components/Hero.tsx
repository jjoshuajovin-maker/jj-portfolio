import React from 'react';
import { motion as motionElement } from 'framer-motion';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-16 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Dynamic Background Noise/Gradient Element (Top-right radial glow) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Header Container */}
      <div className="w-full flex flex-col items-center text-center mt-6">
        {/* Title: "Creative Portfolio" */}
        <motionElement.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold font-heading text-text tracking-normal mb-6"
        >
          Creative Portfolio
        </motionElement.h1>

        {/* Thin elegant horizontal line */}
        <motionElement.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[1px] bg-white/10 origin-center mb-6"
        />
      </div>

      {/* Center Image/Illustration: Abstract Metallic Glossy Shape */}
      <div className="flex-1 flex items-center justify-center py-6">
        <motionElement.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-[48px] bg-gradient-to-tr from-[#18181B] to-[#27272A] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center group"
        >
          {/* Glossy overlay curves */}
          <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full border border-white/5 bg-white/2 blur-[2px] pointer-events-none transform rotate-45 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-[48px] border border-white/5 bg-gradient-to-br from-[#09090B] to-[#18181B] shadow-inner pointer-events-none transform -rotate-12 group-hover:scale-105 transition-transform duration-700" />
          
          {/* Logo inside */}
          <div className="relative text-white/80 transform group-hover:scale-110 transition-transform duration-500">
            <Logo size={80} />
          </div>
        </motionElement.div>
      </div>

      {/* Footer-style Bottom Row */}
      <div className="w-full flex justify-between items-center border-t border-white/10 pt-8 mt-6">
        <motionElement.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-heading italic text-lg md:text-2xl text-white/90"
        >
          Jovin Joshua
        </motionElement.div>
        
        <motionElement.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans text-xs md:text-sm font-semibold tracking-[0.25em] text-white/60 uppercase"
        >
          Software Developer
        </motionElement.div>
      </div>
    </section>
  );
};

export default Hero;
