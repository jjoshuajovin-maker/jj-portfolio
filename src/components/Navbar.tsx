import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Background', href: '#background' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Projects', href: '#projects' },
    { name: 'Practices', href: '#practices' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold font-heading tracking-tight flex items-center gap-2.5 group">
          <Logo className="text-[#00B4D8]" size={28} />
          Jovin<span className="text-[#00B4D8] group-hover:text-white transition-colors duration-300">Joshua</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-[#00B4D8]' : 'text-secondary-text hover:text-text'
                } relative py-1`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B4D8] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-secondary-text hover:text-text focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-card py-6 px-8 flex flex-col gap-4 border-b border-white/5 animate-fade-in">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-2 border-b border-white/5 transition-colors duration-300 ${
                  isActive ? 'text-[#00B4D8]' : 'text-secondary-text hover:text-text'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
