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
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-text bg-white/5 border border-white/10 rounded-full mb-4">
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
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-white/80">
                  ✓
                </span>
                <span className="text-secondary-text font-sans text-sm md:text-base font-medium">
                  React + TypeScript frontend with context state management
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-white/80">
                  ✓
                </span>
                <span className="text-secondary-text font-sans text-sm md:text-base font-medium">
                  Node.js & Express REST API with JWT Auth
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-white/80">
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
            className="rounded-2xl bg-[#09090B] border border-white/5 shadow-2xl overflow-hidden font-mono text-xs md:text-sm"
          >
            {/* Window header */}
            <div className="bg-[#18181B]/40 px-4 py-3 border-b border-white/5 flex items-center justify-between">
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
    </section>
  );
};

export default FeaturedProjects;
