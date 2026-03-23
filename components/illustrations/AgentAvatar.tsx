
import React from 'react';

interface AgentAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export const AgentAvatar: React.FC<AgentAvatarProps> = ({ src, alt, className }) => {
  // Removed hardcoded w-48 h-48 to allow parent control
  return (
    <div className={`relative rounded-full bg-[#1a0b2e] border-2 border-[#1a0b2e] overflow-hidden group ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover grayscale contrast-125 brightness-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 ease-out"
        loading="lazy"
        decoding="async"
      />
      
      {/* Gloss overlay/Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full pointer-events-none z-10 mix-blend-overlay" />
    </div>
  );
};
