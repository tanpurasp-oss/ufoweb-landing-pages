import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

export const Logo: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const getOpacity = (targetLang: string) => {
    return language === targetLang ? 1 : 0.3;
  };

  return (
    <div className="flex flex-row items-center justify-center gap-6 select-none group">
      {/* Main Logotype */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[#1a0b2e] text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none" 
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        UFOWEB
      </motion.div>

      {/* Divider */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-[2px] md:w-[4px] h-12 md:h-20 lg:h-24 bg-[#39ff14]"
      />

      {/* City Stack - Language Indicators / Switchers */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col justify-between h-12 md:h-20 lg:h-24 text-[0.5rem] md:text-[0.65rem] lg:text-xs font-bold leading-none uppercase tracking-[0.15em]"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        <button 
          onClick={() => setLanguage('de')}
          style={{ opacity: getOpacity('de') }} 
          className={`text-left transition-all duration-300 hover:opacity-100 hover:text-[#4c1d95] ${language === 'de' ? 'font-extrabold text-[#4c1d95]' : 'cursor-pointer'}`}
        >
          BER LIN
        </button>
        <button 
          onClick={() => setLanguage('en')}
          style={{ opacity: getOpacity('en') }} 
          className={`text-left transition-all duration-300 hover:opacity-100 hover:text-[#4c1d95] ${language === 'en' ? 'font-extrabold text-[#4c1d95]' : 'cursor-pointer'}`}
        >
          NYC
        </button>
        <button 
          onClick={() => setLanguage('pt')}
          style={{ opacity: getOpacity('pt') }} 
          className={`text-left transition-all duration-300 hover:opacity-100 hover:text-[#4c1d95] ${language === 'pt' ? 'font-extrabold text-[#4c1d95]' : 'cursor-pointer'}`}
        >
          SAO PAU LO
        </button>
      </motion.div>
    </div>
  );
};