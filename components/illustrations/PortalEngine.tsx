import React from 'react';
import { motion } from 'framer-motion';

export const PortalEngine: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full h-full text-[#1a0b2e]">
        {/* Outer Static Ring */}
        <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
        
        {/* Rotating Dashed Ring (Slow) */}
        <motion.circle 
          cx="200" cy="200" r="170" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeDasharray="10 20"
          opacity="0.3"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Counter-Rotating Tech Ring */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M 200 60 L 200 80 M 200 320 L 200 340 M 60 200 L 80 200 M 320 200 L 340 200" stroke="currentColor" strokeWidth="4" />
        </motion.g>

        {/* Inner Fast Ring (Neon) */}
        <motion.circle 
          cx="200" cy="200" r="100" 
          fill="none" 
          stroke="#39ff14" 
          strokeWidth="2" 
          strokeDasharray="40 40"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Core Pulse */}
        <motion.circle 
          cx="200" cy="200" r="40" 
          fill="#1a0b2e"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="200" cy="200" r="35" 
          stroke="#39ff14"
          strokeWidth="2"
          fill="none"
        />
        <motion.text x="200" y="205" textAnchor="middle" fill="#39ff14" fontSize="10" fontFamily="monospace" letterSpacing="2">
           LOADING
        </motion.text>
      </svg>
      
      {/* Glow Effect behind */}
      <div className="absolute inset-0 bg-[#39ff14] blur-[80px] opacity-10 rounded-full z-[-1]" />
    </div>
  );
};