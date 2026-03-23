import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '',
  disabled = false
}) => {
  const baseClasses = "px-8 py-4 rounded-xl font-bold text-lg transition-all border-2 border-[#1a0b2e] shadow-[4px_4px_0px_0px_rgba(26,11,46,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#4c1d95] text-white hover:bg-[#3b1775]",
    secondary: "bg-white text-[#1a0b2e] hover:bg-gray-50",
  };

  return (
    <motion.button 
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};