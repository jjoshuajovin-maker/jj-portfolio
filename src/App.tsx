import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundAcademic from './components/BackgroundAcademic';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import EngineeringPractices from './components/EngineeringPractices';
import ProjectsTable from './components/ProjectsTable';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechBackground from './components/TechBackground';
import CursorEffect from './components/CursorEffect';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'background',
        'capabilities',
        'projects',
        'practices',
        'projects-table',
        'timeline',
        'connect'
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-text min-h-screen relative font-sans overflow-x-hidden">
      {/* Base Background Solid Color */}
      <div className="absolute inset-0 bg-background -z-30 pointer-events-none" />

      {/* Custom Circular Cursor Follower */}
      <CursorEffect />

      {/* Tech Spotlight Background */}
      <TechBackground />

      {/* Glow decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120px,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        
        <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <BackgroundAcademic />
        
        <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <Skills />
        
        <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <FeaturedProjects />
        
        <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <EngineeringPractices />
        
        <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <ProjectsTable />
        
        <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <Timeline />
        
        <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
