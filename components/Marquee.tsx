import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  speed = 20, 
  direction = 'left',
  className = '' 
}) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap select-none ${className}`}>
      <motion.div
        className="flex flex-shrink-0"
        initial={{ x: direction === 'left' ? 0 : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-4">
            {text}
          </span>
        ))}
      </motion.div>
      <motion.div
        className="flex flex-shrink-0"
        initial={{ x: direction === 'left' ? 0 : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-4">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};