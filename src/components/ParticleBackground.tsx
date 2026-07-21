import React, { useEffect, useState } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

const ParticleBackground: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion accessibility setting
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const customInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 bg-[#0B132B] -z-30 pointer-events-none">
        {/* Subtle grid pattern fallback */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    );
  }

  // Configuration options for tsParticles
  const options: any = {
    fpsLimit: 60,
    pauseOnBlur: true, // Pauses animation when tab is inactive
    detectRetina: true,
    particles: {
      number: {
        value: 100, // Total particles (80-120)
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
      },
      color: {
        value: '#3B82F6', // Theme primary blue
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: { min: 0.4, max: 0.6 }, // 40-60% opacity
      },
      size: {
        value: { min: 2, max: 4 }, // Size: 2-4px
      },
      links: {
        enable: true,
        distance: 150,
        color: '#3B82F6',
        opacity: 0.15, // Thin, low opacity links
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6, // Slow floating movement
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'out', // Particles wrap around the screen
        },
      },
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: 'grab', // soft linking
        },
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: 0.25,
          },
        },
      },
    },
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 40, // Automatically reduce particle count on mobile
            },
          },
        },
      },
    ],
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: '-20',
    },
  };

  return (
    <div className="absolute inset-0 -z-20 pointer-events-none select-none">
      {/* Subtle grid pattern behind particles */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] -z-20" />
      <ParticlesProvider init={customInit}>
        <Particles id="tsparticles" options={options} />
      </ParticlesProvider>
    </div>
  );
};

export default ParticleBackground;
