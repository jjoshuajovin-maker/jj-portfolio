import React, { useEffect, useRef, useState } from 'react';

const CursorEffect: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouse = { x: 0, y: 0 };
    const dotPos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', () => setIsVisible(true));

    let animationFrameId: number;

    const updateCoordinates = () => {
      // Lerp (Linear Interpolation) for smooth elastic effect
      dotPos.x += (mouse.x - dotPos.x) * 0.3;
      dotPos.y += (mouse.y - dotPos.y) * 0.3;

      ringPos.x += (mouse.x - ringPos.x) * 0.15;
      ringPos.y += (mouse.y - ringPos.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.x - 3}px, ${dotPos.y - 3}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.x - 16}px, ${ringPos.y - 16}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateCoordinates);
    };

    updateCoordinates();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // Hide default cursor on desktop screens to allow custom cursor representation
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media (min-width: 1024px) {
        body, a, button, [role="button"], input, select, textarea {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Inner solid circular cursor */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 hidden lg:block ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* Outer circular tracking ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 border border-white/40 rounded-full pointer-events-none z-[9998] mix-blend-difference transition-opacity duration-300 hidden lg:block ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
};

export default CursorEffect;
