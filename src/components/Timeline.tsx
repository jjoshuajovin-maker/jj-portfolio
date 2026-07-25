import React from 'react';
import { motion } from 'framer-motion';

const Timeline: React.FC = () => {
  const steps = [
    {
      title: 'Year 1 - 2',
      desc: 'CS Fundamentals, Data Structures, OOP in C++ & Java',
    },
    {
      title: 'Year 3',
      desc: 'Full-Stack Web Dev Projects & Database Systems',
    },
    {
      title: 'Current',
      desc: 'Software Development Internship & Open Source',
    },
    {
      title: 'Next Step',
      desc: 'Graduation & Entry-Level Software Engineering Role',
    },
  ];

  return (
    <section id="timeline" className="py-24 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-text mb-4">
          Journey & Career Timeline
        </h2>
      </motion.div>

      {/* Horizontal timeline line (Desktop) / Vertical (Mobile) */}
      <div className="relative flex flex-col md:flex-row items-stretch md:items-start justify-between gap-8 md:gap-4 py-8">
        
        {/* Connection Line */}
        <div className="absolute top-1/2 left-[15px] md:left-0 md:top-[38px] w-[2px] md:w-full h-full md:h-[2px] bg-gradient-to-b md:bg-gradient-to-r from-white/20 via-white/10 to-transparent -z-10" />

        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-8 flex-1 relative"
          >
            {/* Timeline Node Dot */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#121212] border-4 border-white/20 shadow-md z-10 flex-shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
            </div>

            {/* Card Content */}
            <div className="p-5 md:p-6 rounded-2xl glass-card border border-white/5 flex flex-col gap-2 flex-1 md:w-full mt-[-8px] md:mt-0">
              <h3 className="text-lg md:text-xl font-bold font-heading text-text">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-secondary-text font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
