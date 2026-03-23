
import React from 'react';
import { motion } from 'framer-motion';

export const LogoMark: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Abstract UFO Ring / Orbit */}
      <motion.path 
        d="M 15 50 C 15 25 30 15 50 15 C 70 15 85 25 85 50" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* The Beam / Center */}
      <motion.path 
        d="M 50 40 L 50 85" 
        stroke="#39ff14" 
        strokeWidth="6" 
        strokeLinecap="round"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ originY: 0 }}
      />

      {/* Side Dots / Sensors */}
      <circle cx="25" cy="50" r="4" fill="currentColor" />
      <circle cx="75" cy="50" r="4" fill="currentColor" />
    </svg>
  );
};
