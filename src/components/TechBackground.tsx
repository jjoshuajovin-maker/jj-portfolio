import React, { useEffect, useRef, useState } from 'react';

const TechBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
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

    // 3D Geometry vertices (Cube)
    const cubeVertices = [
      { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 }, { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 }
    ];

    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // Back face
      [4, 5], [5, 6], [6, 7], [7, 4], // Front face
      [0, 4], [1, 5], [2, 6], [3, 7]  // Connectors
    ];

    // Floating 3D Shapes
    interface FloatingShape {
      x: number;
      y: number;
      size: number;
      angleX: number;
      angleY: number;
      angleZ: number;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      speedX: number;
      speedY: number;
      color: string;
    }

    const shapes: FloatingShape[] = Array.from({ length: 6 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 30 + Math.random() * 40,
      angleX: Math.random() * Math.PI,
      angleY: Math.random() * Math.PI,
      angleZ: Math.random() * Math.PI,
      rotSpeedX: 0.005 + Math.random() * 0.01,
      rotSpeedY: 0.005 + Math.random() * 0.01,
      rotSpeedZ: 0.005 + Math.random() * 0.01,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      color: Math.random() > 0.5 ? 'rgba(0, 180, 216, 0.25)' : 'rgba(168, 85, 247, 0.25)', // Cyan or Purple
    }));

    // Border Plexus Particles
    interface PlexusParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
      angle: number;
      speed: number;
      radius: number;
    }
    const borderParticles: PlexusParticle[] = [];

    const generateBorderParticles = () => {
      borderParticles.length = 0;
      const count = 80;
      for (let i = 0; i < count; i++) {
        // Constrain particles to screen borders (outer 20%)
        const side = Math.floor(Math.random() * 4); // 0: Top, 1: Right, 2: Bottom, 3: Left
        let x = 0, y = 0;
        const margin = 120;

        if (side === 0) { // Top
          x = Math.random() * width;
          y = Math.random() * margin;
        } else if (side === 1) { // Right
          x = width - Math.random() * margin;
          y = Math.random() * height;
        } else if (side === 2) { // Bottom
          x = Math.random() * width;
          y = height - Math.random() * margin;
        } else { // Left
          x = Math.random() * margin;
          y = Math.random() * height;
        }

        borderParticles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          baseX: x,
          baseY: y,
          angle: Math.random() * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.03,
          radius: 1 + Math.random() * 2,
        });
      }
    };
    generateBorderParticles();

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      generateBorderParticles();
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

    // 3D rotation projection helper
    const project = (x: number, y: number, z: number, angleX: number, angleY: number, angleZ: number, size: number) => {
      // Rotation on X
      let rad = angleX;
      let cos = Math.cos(rad);
      let sin = Math.sin(rad);
      let y1 = y * cos - z * sin;
      let z1 = y * sin + z * cos;

      // Rotation on Y
      rad = angleY;
      cos = Math.cos(rad);
      sin = Math.sin(rad);
      let x2 = x * cos + z1 * sin;

      // Rotation on Z
      rad = angleZ;
      cos = Math.cos(rad);
      sin = Math.sin(rad);
      let x3 = x2 * cos - y1 * sin;
      let y3 = x2 * sin + y1 * cos;

      // Simple orthographic projection
      return { x: x3 * size, y: y3 * size };
    };

    // Animation Loop
    const draw = () => {
      // Smooth mouse coordinates tracking
      mouse.rx += (mouse.x - mouse.rx) * 0.1;
      mouse.ry += (mouse.y - mouse.ry) * 0.1;

      // 1. Draw Background Gradient matching the user image
      // Deep purple/indigo center radiating out to dark navy/black
      const grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) * 0.8);
      grad.addColorStop(0, '#190A38');    // Deep dark purple
      grad.addColorStop(0.4, '#0D082A');  // Deep indigo
      grad.addColorStop(0.8, '#060417');  // Dark navy
      grad.addColorStop(1, '#02020A');    // Pitch black
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw faint blueprint grid
      ctx.strokeStyle = 'rgba(28, 37, 65, 0.15)';
      ctx.lineWidth = 0.5;
      const spacing = 80;
      for (let x = 0; x < width; x += spacing) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      // 2. Draw HUD graphics in the corners (matches visual style of user image)
      ctx.strokeStyle = 'rgba(0, 180, 216, 0.2)';
      ctx.lineWidth = 1;
      
      // Top Left Corner HUD
      ctx.save();
      ctx.translate(60, 60);
      ctx.strokeRect(0, 0, 160, 120);
      ctx.fillStyle = 'rgba(0, 180, 216, 0.1)';
      ctx.fillRect(5, 5, 150, 15);
      // Small decorative terminal code lines
      ctx.fillStyle = 'rgba(0, 180, 216, 0.3)';
      ctx.fillRect(10, 35, 120, 2);
      ctx.fillRect(10, 45, 140, 2);
      ctx.fillRect(10, 55, 90, 2);
      ctx.fillRect(10, 65, 110, 2);
      ctx.restore();

      // Bottom Right Corner HUD
      ctx.save();
      ctx.translate(width - 220, height - 180);
      ctx.strokeRect(0, 0, 160, 120);
      ctx.fillStyle = 'rgba(168, 85, 247, 0.15)';
      ctx.beginPath();
      ctx.moveTo(10, 100);
      ctx.lineTo(40, 60);
      ctx.lineTo(80, 80);
      ctx.lineTo(120, 30);
      ctx.lineTo(150, 50);
      ctx.stroke();
      ctx.restore();

      // 3. Draw Border Plexus Waves
      borderParticles.forEach((p, idx) => {
        // Organic floating motion around its base coordinate
        p.angle += p.speed;
        p.x = p.baseX + Math.cos(p.angle) * 15;
        p.y = p.baseY + Math.sin(p.angle) * 15;

        // Mouse hover interaction: push away slightly when mouse is near
        const dx = p.x - mouse.rx;
        const dy = p.y - mouse.ry;
        const dist = Math.hypot(dx, dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          p.x += (dx / dist) * force * 35;
          p.y += (dy / dist) * force * 35;
        }

        // Draw particle dot
        ctx.fillStyle = 'rgba(0, 180, 216, 0.6)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect with nearby border particles
        for (let j = idx + 1; j < borderParticles.length; j++) {
          const p2 = borderParticles[j];
          const distance = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distance < 90) {
            const alpha = (90 - distance) / 90 * 0.25;
            ctx.strokeStyle = `rgba(0, 180, 216, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // 4. Draw Floating 3D Shapes (wireframe cubes/polygons)
      shapes.forEach((shape) => {
        // Move shape
        shape.x += shape.speedX;
        shape.y += shape.speedY;

        // Bounce on boundaries
        if (shape.x < -100) shape.x = width + 100;
        if (shape.x > width + 100) shape.x = -100;
        if (shape.y < -100) shape.y = height + 100;
        if (shape.y > height + 100) shape.y = -100;

        // Rotate
        shape.angleX += shape.rotSpeedX;
        shape.angleY += shape.rotSpeedY;
        shape.angleZ += shape.rotSpeedZ;

        // Calculate 2D projections
        const projectedVertices = cubeVertices.map(v => 
          project(v.x, v.y, v.z, shape.angleX, shape.angleY, shape.angleZ, shape.size)
        );

        // Draw edges
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 0.75;
        cubeEdges.forEach(edge => {
          const p1 = projectedVertices[edge[0]];
          const p2 = projectedVertices[edge[1]];
          if (p1 && p2) {
            ctx.beginPath();
            ctx.moveTo(shape.x + p1.x, shape.y + p1.y);
            ctx.lineTo(shape.x + p2.x, shape.y + p2.y);
            ctx.stroke();
          }
        });

        // Draw vertices dot
        ctx.fillStyle = 'rgba(0, 180, 216, 0.4)';
        projectedVertices.forEach(v => {
          ctx.beginPath();
          ctx.arc(shape.x + v.x, shape.y + v.y, 2, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // 5. Draw Interactive Spotlight Highlight (neon lighting follow cursor)
      if (mouse.active) {
        const spotlightRadius = 240;
        const spotlightGradient = ctx.createRadialGradient(
          mouse.rx, mouse.ry, 0,
          mouse.rx, mouse.ry, spotlightRadius
        );
        spotlightGradient.addColorStop(0, 'rgba(0, 180, 216, 0.12)');
        spotlightGradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)'); // Purple secondary glow
        spotlightGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = spotlightGradient;
        ctx.beginPath();
        ctx.arc(mouse.rx, mouse.ry, spotlightRadius, 0, Math.PI * 2);
        ctx.fill();

        // Neon target overlay
        ctx.strokeStyle = 'rgba(0, 180, 216, 0.35)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(mouse.rx, mouse.ry, 8, 0, Math.PI * 2);
        ctx.moveTo(mouse.rx - 14, mouse.ry); ctx.lineTo(mouse.rx + 14, mouse.ry);
        ctx.moveTo(mouse.rx, mouse.ry - 14); ctx.lineTo(mouse.rx, mouse.ry + 14);
        ctx.stroke();
      }

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
