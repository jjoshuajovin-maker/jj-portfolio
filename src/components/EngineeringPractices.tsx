import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, FlaskConical, Users, FileText } from 'lucide-react';

const EngineeringPractices: React.FC = () => {
  const practices = [
    {
      title: 'Clean & Modular Architecture',
      icon: <GitBranch className="text-accent" size={24} />,
      desc: 'Writing scalable, maintainable code following SOLID principles, component reusability, and separation of concerns.',
    },
    {
      title: 'Automated Testing',
      icon: <FlaskConical className="text-accent" size={24} />,
      desc: 'Writing unit and integration tests using Jest and React Testing Library to prevent regression and ensure code stability.',
    },
    {
      title: 'Agile & Collaborative Workflow',
      icon: <Users className="text-accent" size={24} />,
      desc: 'Active participant in daily standups, sprint planning, pull request reviews, and Git feature-branch workflows.',
    },
    {
      title: 'Comprehensive Documentation',
      icon: <FileText className="text-accent" size={24} />,
      desc: 'Authoring clear API documentation via Swagger/Postman and concise README setup guides for ease of onboarding.',
    },
  ];

  return (
    <section id="practices" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-text mb-4">
          Software Engineering Practices
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {practices.map((practice, idx) => (
          <motion.div
            key={practice.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex items-start gap-5 p-6 rounded-2xl glass-card border border-slate-100 hover:border-slate-200 transition-all duration-300 group"
          >
            {/* Icon Wrapper */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300 flex-shrink-0">
              {practice.icon}
            </div>

            {/* Content text */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold font-heading text-text mb-1">
                {practice.title}
              </h3>
              <p className="text-secondary-text font-sans text-sm md:text-base leading-relaxed">
                {practice.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringPractices;
