import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Logo from './Logo';

const Contact: React.FC = () => {
  return (
    <section id="connect" className="py-24 px-6 md:px-16 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glowing decoration */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-8 mb-16">
        {/* JJ. Logo Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <div className="h-16 w-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center relative shadow-sm text-accent hover:text-primary transition-colors duration-300">
            <Logo size={40} />
          </div>
        </motion.div>

        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider"
        >
          Open to Opportunities
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold font-heading text-text"
        >
          Let's Connect
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-xl text-secondary-text font-sans font-light leading-relaxed"
        >
          I am actively seeking software engineering internships and entry-level software developer roles. Let's discuss how I can add value to your engineering team!
        </motion.p>
      </div>

      {/* Grid of Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* Email Card */}
        <motion.a
          href="mailto:jjoshua.jovin@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4 p-6 rounded-2xl glass-card border border-slate-100 hover:border-accent/20 transition-all duration-300 group"
        >
          <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform">
            <Mail size={22} />
          </div>
          <div className="overflow-hidden">
            <span className="text-sm font-semibold text-text truncate block">
              jjoshua.jovin@gmail.com
            </span>
          </div>
        </motion.a>

        {/* GitHub Card */}
        <motion.a
          href="https://github.com/jjoshuajovin-maker"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-4 p-6 rounded-2xl glass-card border border-slate-100 hover:border-accent/20 transition-all duration-300 group"
        >
          <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform flex items-center justify-center">
            <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </div>
          <div className="overflow-hidden">
            <span className="text-sm font-semibold text-text truncate block">
              github.com/jjoshuajovin-maker
            </span>
          </div>
        </motion.a>

        {/* LinkedIn Card */}
        <motion.a
          href="https://www.linkedin.com/in/joshua-j-534a81355/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-4 p-6 rounded-2xl glass-card border border-slate-100 hover:border-accent/20 transition-all duration-300 group"
        >
          <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform flex items-center justify-center">
            <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="overflow-hidden">
            <span className="text-sm font-semibold text-text truncate block">
              linkedin.com/in/joshua-j-534a81355/
            </span>
          </div>
        </motion.a>

      </div>
    </section>
  );
};

export default Contact;
