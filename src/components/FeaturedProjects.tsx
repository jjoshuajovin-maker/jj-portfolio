import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col gap-24">
      {/* Slide 5: Project: Full-Stack Web Platform */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text mb-4">
            Project: Full-Stack Web Platform
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00B4D8] bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-full mb-4">
                Featured Project
              </span>
              <h3 className="text-2xl md:text-4xl font-bold font-heading text-text mb-4">
                Task & Analytics Dashboard
              </h3>
              <p className="text-secondary-text font-sans text-base md:text-lg leading-relaxed mb-6">
                A full-stack project management and tracking tool designed for developer teams to streamline task assignment and real-time status tracking.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00B4D8]/10 text-[#00B4D8]">
                  ✓
                </span>
                <span className="text-secondary-text font-sans text-sm md:text-base font-medium">
                  React + TypeScript frontend with context state management
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00B4D8]/10 text-[#00B4D8]">
                  ✓
                </span>
                <span className="text-secondary-text font-sans text-sm md:text-base font-medium">
                  Node.js & Express REST API with JWT Auth
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00B4D8]/10 text-[#00B4D8]">
                  ✓
                </span>
                <span className="text-secondary-text font-sans text-sm md:text-base font-medium">
                  PostgreSQL database with Prisma ORM
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Right Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#0F172A] border border-white/5 shadow-2xl overflow-hidden font-mono text-xs md:text-sm"
          >
            {/* Window header */}
            <div className="bg-[#1C2541]/40 px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-3 w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs text-secondary-text">getTasks.controller.ts</span>
              <div className="w-12"></div>
            </div>
            
            {/* Code lines */}
            <div className="p-6 overflow-x-auto text-[#94A3B8] leading-relaxed">
              <div className="text-secondary-text">// Sample Express Route Controller</div>
              <div>
                <span className="text-blue-400">export const</span> <span className="text-yellow-400">getTasks</span> = <span className="text-blue-400">async</span> (req, res) =&gt; &#123;
              </div>
              <div className="pl-4">
                <span className="text-blue-400">const</span> userId = req.user.id;
              </div>
              <div className="pl-4">
                <span className="text-blue-400">const</span> tasks = <span className="text-blue-400">await</span> prisma.task.findMany(&#123;
              </div>
              <div className="pl-8">
                where: &#123; authorId: userId &#125;,
              </div>
              <div className="pl-8">
                orderBy: &#123; createdAt: <span className="text-orange-400">'desc'</span> &#125;
              </div>
              <div className="pl-4">&#125;);</div>
              <div className="pl-4">
                res.status(<span className="text-emerald-400">200</span>).json(tasks);
              </div>
              <div>&#125;;</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide 6: API Response Optimization Study */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text mb-4">
            API Response Optimization Study
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-3xl glass-card border border-white/5 flex flex-col gap-8 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#00B4D8]/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Bar Chart */}
          <div className="flex flex-col gap-6 w-full">
            {/* Bar 1 */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="w-48 text-sm md:text-base font-semibold text-secondary-text">
                Original REST Endpoint
              </span>
              <div className="flex-1 bg-[#0F172A]/50 rounded-full overflow-hidden h-9 border border-white/5 relative flex items-center">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="bg-gradient-to-r from-blue-700 via-blue-500 to-[#00B4D8] h-full flex items-center justify-end pr-4"
                >
                  <span className="text-xs md:text-sm font-bold text-white drop-shadow-md">
                    420 ms
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Bar 2 */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="w-48 text-sm md:text-base font-semibold text-secondary-text">
                With Redis Caching
              </span>
              <div className="flex-1 bg-[#0F172A]/50 rounded-full overflow-hidden h-9 border border-white/5 relative flex items-center">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '28.5%' }} // 120 / 420 = ~28.5%
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full flex items-center justify-end pr-4"
                >
                  <span className="text-xs md:text-sm font-bold text-white drop-shadow-md">
                    120 ms
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Bar 3 */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="w-48 text-sm md:text-base font-semibold text-secondary-text">
                Optimized SQL Indexes
              </span>
              <div className="flex-1 bg-[#0F172A]/50 rounded-full overflow-hidden h-9 border border-white/5 relative flex items-center">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '15.4%' }} // 65 / 420 = ~15.4%
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                  className="bg-gradient-to-r from-blue-600 to-emerald-400 h-full flex items-center justify-end pr-4"
                >
                  <span className="text-xs md:text-sm font-bold text-white drop-shadow-md">
                    65 ms
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm italic text-secondary-text leading-relaxed font-sans text-center md:text-left">
            Benchmarks demonstrating latency reduction achieved by implementing Redis key-value caching and database indexing during backend development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
