import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
    >
      {/* Hollow Dot for Left J */}
      <circle
        cx="46"
        cy="24"
        r="4.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />

      {/* Hollow Dot for Right J */}
      <circle
        cx="88"
        cy="24"
        r="4.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />

      {/* Left J Stem, Loop and Swoop connecting path */}
      <path
        d="M 46 36 
           C 46 36, 42 42, 42 50
           L 42 85 
           C 42 98, 22 108, 22 90 
           C 22 75, 34 76, 42 70 
           C 52 62, 70 48, 88 36
           C 96 30, 102 24, 102 20"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Right J Path */}
      <path
        d="M 88 36 
           L 88 85 
           C 88 98, 68 108, 68 90"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default Logo;
