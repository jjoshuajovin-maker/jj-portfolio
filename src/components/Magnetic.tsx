import React, { useRef, useState, useEffect } from 'react';

interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, range = 45, strength = 0.35 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < range) {
        setPosition({
          x: distanceX * strength,
          y: distanceY * strength
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    const node = ref.current;
    window.addEventListener('mousemove', handleMouseMove);
    if (node) {
      node.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (node) {
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [range, strength]);

  const style: React.CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 && position.y === 0 ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.1s ease-out'
  };

  return (
    <div ref={ref} style={style} className="inline-block">
      {children}
    </div>
  );
};

export default Magnetic;
