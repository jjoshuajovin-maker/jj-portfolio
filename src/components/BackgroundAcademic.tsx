import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAcademic: React.FC = () => {
  return (
    <section id="background" className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col gap-24">
      {/* Slide 2: Background & Academic Foundation */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text mb-4">
            Background & Academic Foundation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl glass-card flex flex-col gap-6 hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/3 rounded-full blur-[60px] pointer-events-none group-hover:bg-white/8 transition-all duration-500" />
            
            <div className="inline-flex items-center w-fit px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-secondary-text text-xs font-bold uppercase tracking-wider">
              Education
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-text">
              B.S. in Computer Science
            </h3>
            
            <p className="text-secondary-text font-sans leading-relaxed">
              Focused on Data Structures, Algorithms, Software Engineering Principles, Database Systems, and Object-Oriented Design.
            </p>
            <p className="text-secondary-text font-sans leading-relaxed">
              Consistently applying core theoretical concepts into production-grade code during coursework and internship projects.
            </p>
          </motion.div>

          {/* Card 2: Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl glass-card flex flex-col gap-6 hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/3 rounded-full blur-[60px] pointer-events-none group-hover:bg-white/8 transition-all duration-500" />
            
            <div className="inline-flex items-center w-fit px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-secondary-text text-xs font-bold uppercase tracking-wider">
              Experience
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-text">
              Software Engineering Intern
            </h3>
            
            <p className="text-secondary-text font-sans leading-relaxed">
              Contributing to real-world agile development teams. Building modular UI components, designing database endpoints, and participating in code reviews.
            </p>
            <p className="text-secondary-text font-sans leading-relaxed">
              Targeting entry-level software engineer and internship opportunities upon graduation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Slide 4: Internship Impact & Metrics */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text mb-4">
            Internship Impact & Metrics
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Metric Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 p-8 rounded-3xl glass-card flex flex-col items-center justify-center text-center border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-7xl md:text-8xl font-bold font-heading text-white mb-4">
              35%
            </span>
            <span className="text-sm font-semibold text-secondary-text tracking-wide uppercase">
              API Query Latency Reduced
            </span>
          </motion.div>

          {/* Right Text details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8 p-8 md:p-10 rounded-3xl glass-card flex flex-col justify-center gap-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-text">
              Production Code Contributions
            </h3>
            
            <ul className="space-y-4 font-sans text-secondary-text text-base md:text-lg leading-relaxed">
              <li className="flex gap-3">
                <span className="text-white/40 text-xl font-bold mt-0.5">•</span>
                <span>
                  Refactored legacy SQL queries and indexed database endpoints during internship, significantly optimizing query execution speed.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white/40 text-xl font-bold mt-0.5">•</span>
                <span>
                  Delivered 12+ verified feature tickets, authored technical documentation, and maintained 90%+ unit test coverage across assigned microservices.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundAcademic;
