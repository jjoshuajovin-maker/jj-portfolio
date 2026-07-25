import React from 'react';
// Let's import framer-motion's motion
import { motion as motionElement } from 'framer-motion';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start pt-28 pb-16 px-6 md:px-16 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Dynamic Background Noise/Gradient Element (Top-right radial glow) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent/10 to-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      
      <div className="max-w-4xl z-10 text-left">
        {/* JJ. Logo Box */}
        <motionElement.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center"
        >
          <div className="h-16 w-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center relative shadow-sm text-accent hover:text-primary transition-colors duration-300">
            <Logo size={40} />
          </div>
        </motionElement.div>

        {/* Pill Badge */}
        <motionElement.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6"
        >
          Software Developer Portfolio
        </motionElement.div>

        {/* Main Title */}
        <motionElement.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-8xl font-bold font-heading text-text tracking-tight mb-8"
        >
          Jovin Joshua
        </motionElement.h1>

        {/* Description */}
        <motionElement.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg md:text-2xl text-secondary-text max-w-3xl mb-12 leading-relaxed font-sans font-light"
        >
          Computer Science Student & Software Development Intern crafting clean, performant web applications and scalable backend systems.
        </motionElement.p>

        {/* Row of Badges */}
        <motionElement.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 shadow-sm text-secondary-text hover:text-text transition-all duration-300">
            <span className="text-accent font-mono text-sm">&lt;/&gt;</span>
            <span className="text-sm font-medium">Full-Stack Web</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 shadow-sm text-secondary-text hover:text-text transition-all duration-300">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
            <span className="text-sm font-medium">REST APIs & SQL</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 shadow-sm text-secondary-text hover:text-text transition-all duration-300">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            <span className="text-sm font-medium">CS Undergraduate</span>
          </div>
        </motionElement.div>
      </div>
    </section>
  );
};

export default Hero;
