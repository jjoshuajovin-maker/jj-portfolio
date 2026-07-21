import React, { useEffect, useRef, useState } from 'react';

const TechBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracker
    const mouse = { x: width / 2, y: height / 2, active: false, rx: width / 2, ry: height / 2 };

    const gridSpacing = 80;

    // Circuits structure
    interface Point {
      x: number;
      y: number;
    }
    interface Circuit {
      points: Point[];
      width: number;
      color: string;
      pulseProgress: number; // 0 to 1
      pulseSpeed: number;
    }

    const circuits: Circuit[] = [];

    const generateCircuits = () => {
      circuits.length = 0;
      const cols = Math.ceil(width / gridSpacing);
      const rows = Math.ceil(height / gridSpacing);

      for (let i = 0; i < 35; i++) { // Increased counts
        const startCol = Math.floor(Math.random() * cols);
        const startRow = Math.floor(Math.random() * rows);
        
        let cx = startCol * gridSpacing;
        let cy = startRow * gridSpacing;
        const points: Point[] = [{ x: cx, y: cy }];

        const segments = 2 + Math.floor(Math.random() * 4);
        for (let s = 0; s < segments; s++) {
          const dir = Math.floor(Math.random() * 4);
          if (dir === 0) cx += gridSpacing;
          else if (dir === 1) cy += gridSpacing;
          else if (dir === 2) cx -= gridSpacing;
          else cy -= gridSpacing;
          points.push({ x: cx, y: cy });
        }

        circuits.push({
          points,
          width: Math.random() > 0.5 ? 1.5 : 1,
          color: Math.random() > 0.4 ? '#00B4D8' : '#3B82F6',
          pulseProgress: Math.random(),
          pulseSpeed: 0.005 + Math.random() * 0.01,
        });
      }
    };
    generateCircuits();

    // Floating particles (dust) only inside spotlight
    interface Dust {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }
    const dustParticles: Dust[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: 1 + Math.random() * 2,
      alpha: 0.1 + Math.random() * 0.5,
    }));

    // Technical overlay stats
    interface TechStat {
      x: number;
      y: number;
      label: string;
      value: number;
      precision: number;
      speed: number;
    }
    const techStats: TechStat[] = [];
    const generateTechStats = () => {
      techStats.length = 0;
      const terms = ['SYS_OK', 'LATENCY', 'DB_CONN', 'PRISMA', 'REDIS', 'JWT_AUTH', 'PORT', 'NODE_ENV', 'CPU_UTIL', 'MEM_FREE'];
      for (let i = 0; i < 20; i++) {
        techStats.push({
          x: Math.random() * width,
          y: Math.random() * height,
          label: terms[Math.floor(Math.random() * terms.length)],
          value: Math.random() * 100,
          precision: Math.random() > 0.5 ? 2 : 0,
          speed: (Math.random() - 0.5) * 0.5,
        });
      }
    };
    generateTechStats();

    // Radar & global animation states
    let sweepAngle = 0;
    let scanlineY = 0;

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      generateCircuits();
      generateTechStats();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const draw = () => {
      // Smooth mouse tracking interpolation (lag effect for premium look)
      mouse.rx += (mouse.x - mouse.rx) * 0.12;
      mouse.ry += (mouse.y - mouse.ry) * 0.12;

      // Clear background
      ctx.fillStyle = '#0B132B';
      ctx.fillRect(0, 0, width, height);

      // A. Draw Blueprint Grid
      ctx.strokeStyle = '#1C2541';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw subtle intersections crosshairs
      ctx.strokeStyle = 'rgba(28, 37, 65, 0.6)';
      ctx.lineWidth = 1;
      for (let x = gridSpacing; x < width; x += gridSpacing * 2) {
        for (let y = gridSpacing; y < height; y += gridSpacing * 2) {
          ctx.beginPath();
          ctx.moveTo(x - 5, y); ctx.lineTo(x + 5, y);
          ctx.moveTo(x, y - 5); ctx.lineTo(x, y + 5);
          ctx.stroke();
        }
      }

      // B. Sweep Scanline Effect
      scanlineY += 1.5;
      if (scanlineY > height) scanlineY = 0;
      ctx.fillStyle = 'rgba(0, 180, 216, 0.02)';
      ctx.fillRect(0, scanlineY - 20, width, 40);
      ctx.strokeStyle = 'rgba(0, 180, 216, 0.05)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, scanlineY);
      ctx.lineTo(width, scanlineY);
      ctx.stroke();

      // Spotlight coordinates and radius
      const spotlightX = mouse.rx;
      const spotlightY = mouse.ry;
      const spotlightRadius = mouse.active ? 250 : 140;

      // C. Render Hidden Components inside Clip Mask
      ctx.save();
      ctx.beginPath();
      ctx.arc(spotlightX, spotlightY, spotlightRadius, 0, Math.PI * 2);
      ctx.clip();

      // 1. Draw circuits & moving electrical pulse signals
      circuits.forEach((circuit) => {
        // Draw backing circuit trace
        ctx.strokeStyle = 'rgba(0, 180, 216, 0.15)';
        ctx.lineWidth = circuit.width;
        ctx.beginPath();
        circuit.points.forEach((p, idx) => {
          if (idx === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();

        // Draw moving electrical signal along the circuit
        circuit.pulseProgress += circuit.pulseSpeed;
        if (circuit.pulseProgress > 1) circuit.pulseProgress = 0;

        const totalPoints = circuit.points.length;
        if (totalPoints > 1) {
          const segmentCount = totalPoints - 1;
          const currentSegment = Math.floor(circuit.pulseProgress * segmentCount);
          const segmentProgress = (circuit.pulseProgress * segmentCount) % 1;

          const p1 = circuit.points[currentSegment];
          const p2 = circuit.points[currentSegment + 1];

          if (p1 && p2) {
            const signalX = p1.x + (p2.x - p1.x) * segmentProgress;
            const signalY = p1.y + (p2.y - p1.y) * segmentProgress;

            ctx.shadowBlur = 8;
            ctx.shadowColor = circuit.color;
            ctx.fillStyle = circuit.color;
            ctx.beginPath();
            ctx.arc(signalX, signalY, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0; // reset
          }
        }

        // Draw endpoints nodes
        circuit.points.forEach((p) => {
          ctx.fillStyle = 'rgba(0, 180, 216, 0.3)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // 2. Draw active tech stats values with live fluctuating calculations
      ctx.font = '9px monospace';
      techStats.forEach((stat) => {
        // Fluctuating values
        stat.value += stat.speed;
        if (stat.value > 100) stat.value = 0;
        if (stat.value < 0) stat.value = 100;

        ctx.fillStyle = 'rgba(0, 180, 216, 0.8)';
        ctx.fillText(`[${stat.label}]`, stat.x, stat.y);
        ctx.fillText(`VAL: ${stat.value.toFixed(stat.precision)}`, stat.x, stat.y + 11);

        // Technical borders
        ctx.strokeStyle = 'rgba(0, 180, 216, 0.25)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(stat.x - 4, stat.y - 6);
        ctx.lineTo(stat.x - 8, stat.y - 6);
        ctx.lineTo(stat.x - 8, stat.y + 16);
        ctx.lineTo(stat.x - 4, stat.y + 16);
        ctx.stroke();
      });

      // 3. Draw dust particles floating inside the spotlight
      dustParticles.forEach((p) => {
        // Move dust
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle dust
        ctx.fillStyle = `rgba(0, 180, 216, ${p.alpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#00B4D8';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.restore();

      // D. Draw spotlight overlay, radar scope, and sweep glow
      // Spotlight outer glow
      const radialGradient = ctx.createRadialGradient(
        spotlightX, spotlightY, spotlightRadius - 50,
        spotlightX, spotlightY, spotlightRadius
      );
      radialGradient.addColorStop(0, 'rgba(0, 180, 216, 0)');
      radialGradient.addColorStop(0.5, 'rgba(0, 180, 216, 0.03)');
      radialGradient.addColorStop(1, 'rgba(0, 180, 216, 0.15)');

      ctx.fillStyle = radialGradient;
      ctx.beginPath();
      ctx.arc(spotlightX, spotlightY, spotlightRadius, 0, Math.PI * 2);
      ctx.fill();

      // Radar scope circle
      ctx.strokeStyle = 'rgba(0, 180, 216, 0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(spotlightX, spotlightY, spotlightRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Sweeping radar arm
      sweepAngle += 0.012;
      const sweepX = spotlightX + Math.cos(sweepAngle) * spotlightRadius;
      const sweepY = spotlightY + Math.sin(sweepAngle) * spotlightRadius;

      ctx.strokeStyle = 'rgba(0, 180, 216, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(spotlightX, spotlightY);
      ctx.lineTo(sweepX, sweepY);
      ctx.stroke();

      // Subtle target crosshair cursor center
      ctx.strokeStyle = 'rgba(0, 180, 216, 0.5)';
      ctx.beginPath();
      ctx.arc(spotlightX, spotlightY, 6, 0, Math.PI * 2);
      ctx.moveTo(spotlightX - 10, spotlightY); ctx.lineTo(spotlightX + 10, spotlightY);
      ctx.moveTo(spotlightX, spotlightY - 10); ctx.lineTo(spotlightX, spotlightY + 10);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-20 pointer-events-none select-none block w-full h-full"
    />
  );
};

export default TechBackground;
