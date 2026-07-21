import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs md:text-sm text-secondary-text">
        <p>© {new Date().getFullYear()} Jovin Joshua. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Designed & Built with React, TypeScript & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
