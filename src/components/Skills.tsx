import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const capabilities = [
    {
      title: 'Frontend Engineering',
      icon: <Layout className="text-accent" size={28} />,
      desc: 'Developing responsive, accessible web interfaces using React, TypeScript, HTML5, CSS3, and Tailwind CSS with state management best practices.',
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="text-primary" size={28} />,
      desc: 'Building secure RESTful microservices and backend services using Node.js, Express, Python, and SQL/PostgreSQL databases.',
    },
    {
      title: 'Developer Tools',
      icon: <Settings className="text-accent" size={28} />,
      desc: 'Utilizing Git/GitHub, Docker, Linux, CI/CD pipelines, and Postman for collaborative, automated, and clean delivery.',
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-text mb-4">
          Core Technical Capabilities
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="p-8 rounded-3xl glass-card flex flex-col gap-6 hover:border-slate-200 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-bl from-slate-100 to-transparent rounded-full blur-[40px] pointer-events-none" />
            
            {/* Icon Wrapper */}
            <div className="p-4 bg-slate-50 w-fit rounded-2xl border border-slate-100 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors duration-300">
              {cap.icon}
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-heading text-text">
              {cap.title}
            </h3>

            <p className="text-secondary-text font-sans text-sm md:text-base leading-relaxed">
              {cap.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
