import React from 'react';
import { motion } from 'framer-motion';

export const UfoLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <motion.svg 
        viewBox="0 0 300 180" 
        className="w-48 md:w-64 h-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* UFO DOME */}
        <path 
          d="M 130 50 Q 150 20 170 50" 
          fill="none" 
          stroke="#39ff14" 
          strokeWidth="2" 
        />
        
        {/* UFO BODY */}
        <ellipse cx="150" cy="50" rx="40" ry="12" fill="#1a0b2e" stroke="#4c1d95" strokeWidth="2" />
        <path d="M 115 50 Q 150 70 185 50" fill="none" stroke="#4c1d95" strokeWidth="2" />

        {/* UFO RING */}
        <ellipse cx="150" cy="55" rx="60" ry="8" fill="none" stroke="#39ff14" strokeWidth="2" transform="rotate(-5 150 55)" />

        {/* LIGHTS ON BODY */}
        <circle cx="130" cy="52" r="1.5" fill="#fdf4f0" />
        <circle cx="150" cy="56" r="1.5" fill="#fdf4f0" />
        <circle cx="170" cy="52" r="1.5" fill="#fdf4f0" />

        {/* BEAM / LINE CONNECTION */}
        <path 
          d="M 150 62 Q 150 100 135 110" 
          fill="none" 
          stroke="#4c1d95" 
          strokeWidth="2"
        />

        {/* TEXT UFOWEB */}
        <text 
          x="150" 
          y="140" 
          textAnchor="middle" 
          fontFamily="'DM Serif Display', serif" 
          fontSize="56" 
          fill="#fdf4f0"
          letterSpacing="4"
        >
          UFOWEB
        </text>
      </motion.svg>
    </div>
  );
};