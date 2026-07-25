import React from 'react';
import { motion } from 'framer-motion';

const ProjectsTable: React.FC = () => {
  const rows = [
    {
      name: 'TaskFlow Dashboard',
      focus: 'Full-Stack Web App',
      stack: 'React, Node.js, PostgreSQL',
      metric: '100+ active mock users tested',
    },
    {
      name: 'DevConnect API',
      focus: 'Backend Microservice',
      stack: 'Express, TypeScript, Redis',
      metric: '65ms average response time',
    },
    {
      name: 'AlgoVisualizer',
      focus: 'Algorithm Simulator',
      stack: 'JavaScript, HTML5 Canvas',
      metric: 'Interactive CS learning tool',
    },
    {
      name: 'CodeMetrics CLI',
      focus: 'Developer Utility',
      stack: 'Python, Git API',
      metric: 'Automates commit analysis',
    },
  ];

  return (
    <section id="projects-table" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-text mb-4">
          Projects Overview & Tech Stack
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto rounded-2xl glass-card border border-slate-100 shadow-2xl"
      >
        <table className="min-w-full divide-y divide-slate-100 font-sans">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs md:text-sm font-bold text-text uppercase tracking-wider font-heading">
                Project Name
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs md:text-sm font-bold text-text uppercase tracking-wider font-heading">
                Focus Area
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs md:text-sm font-bold text-text uppercase tracking-wider font-heading">
                Primary Stack
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs md:text-sm font-bold text-text uppercase tracking-wider font-heading">
                Key Metric / Impact
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white/50">
            {rows.map((row) => (
              <tr key={row.name} className="hover:bg-slate-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-text">
                  {row.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-text">
                  {row.focus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-accent font-medium">
                  {row.stack}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-text">
                  {row.metric}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default ProjectsTable;
