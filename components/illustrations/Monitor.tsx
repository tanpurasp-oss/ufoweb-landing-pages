import React from 'react';
import { motion } from 'framer-motion';

interface MonitorProps {
  type: 'planet' | 'globe';
  className?: string;
}

export const Monitor: React.FC<MonitorProps> = ({ type, className }) => {
  return (
    <div className={`relative w-64 h-48 bg-[#fdf4f0] border-2 border-[#1a0b2e] rounded-xl flex flex-col overflow-hidden shadow-[4px_4px_0px_0px_rgba(26,11,46,1)] ${className}`}>
      {/* Browser Chrome */}
      <div className="h-8 border-b-2 border-[#1a0b2e] flex items-center px-3 gap-2 bg-[#4c1d95]">
        <div className="w-3 h-3 rounded-full bg-[#f87171] border border-black/20"></div>
        <div className="w-3 h-3 rounded-full bg-[#fbbf24] border border-black/20"></div>
        <div className="w-3 h-3 rounded-full bg-[#34d399] border border-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-4 bg-white relative overflow-hidden">
        {type === 'planet' ? (
           <motion.svg 
             viewBox="0 0 100 100" 
             className="w-32 h-32 text-[#1a0b2e]"
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           >
             <circle cx="50" cy="50" r="30" fill="#1a0b2e" />
             <ellipse cx="50" cy="50" rx="45" ry="10" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-20 50 50)" />
             <ellipse cx="50" cy="50" rx="45" ry="10" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(20 50 50)" />
           </motion.svg>
        ) : (
           <motion.svg 
             viewBox="0 0 100 100" 
             className="w-32 h-32 text-[#1a0b2e]"
             initial="initial"
             animate="animate"
           >
             <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
             <motion.path 
                d="M 50 15 Q 80 50 50 85 Q 20 50 50 15" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                animate={{ d: ["M 50 15 Q 80 50 50 85 Q 20 50 50 15", "M 50 15 Q 20 50 50 85 Q 80 50 50 15", "M 50 15 Q 80 50 50 85 Q 20 50 50 15"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             />
             <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="2" />
             <line x1="25" y1="30" x2="75" y2="30" stroke="currentColor" strokeWidth="2" />
             <line x1="25" y1="70" x2="75" y2="70" stroke="currentColor" strokeWidth="2" />
           </motion.svg>
        )}
      </div>
    </div>
  );
};