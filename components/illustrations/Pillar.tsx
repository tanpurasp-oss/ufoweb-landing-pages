import React from 'react';

interface IllustrationProps {
  className?: string;
}

export const Pillar: React.FC<IllustrationProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 100 200" className={className} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Levitating Shadow */}
      <ellipse cx="50" cy="190" rx="25" ry="4" fill="currentColor" className="opacity-20 blur-sm" />
      
      {/* Obelisk Body Main Shape */}
      <path d="M 25 170 L 15 50 L 50 15 L 85 50 L 75 170 Z" fill="currentColor" stroke="none" className="opacity-90" />
      <path d="M 25 170 L 15 50 L 50 15 L 85 50 L 75 170 Z" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Center Ridge line for 3D effect */}
      <path d="M 50 15 L 50 170" stroke="white" strokeWidth="1" className="opacity-20" />
      
      {/* Glowing Alien Runes */}
      <g className="text-[#39ff14]">
        <circle cx="50" cy="45" r="3" fill="currentColor" className="animate-pulse" />
        <path d="M 40 65 L 60 65" stroke="currentColor" strokeWidth="2" className="opacity-80" />
        <path d="M 42 85 L 50 95 L 58 85" stroke="currentColor" strokeWidth="2" fill="none" className="opacity-80" />
        <circle cx="50" cy="120" r="4" stroke="currentColor" strokeWidth="2" className="animate-ping opacity-50" style={{ animationDuration: '3s' }} />
        <circle cx="50" cy="120" r="2" fill="currentColor" />
        <path d="M 35 145 H 65" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </g>
      
      {/* Top Highlight */}
      <path d="M 15 50 L 50 15" stroke="white" strokeWidth="1" className="opacity-40" />
    </svg>
  );
};