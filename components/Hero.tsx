
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { useLanguage } from '../hooks/useLanguage';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const MinimalDivider = () => (
  <span className="text-[#39ff14] text-lg opacity-80 font-mono">
     //
  </span>
);

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToFreeAudit = () => {
    const element = document.getElementById('pricing');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section ref={containerRef} className="relative w-full h-auto min-h-[80vh] md:min-h-[85vh] flex flex-col justify-center items-center overflow-hidden bg-[#1a0b2e] pt-28 pb-12 md:pt-32 md:pb-16">
      
      {/* BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
         <motion.div style={{ scale: videoScale }} className="w-full h-full">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="https://ufoweb.de/eins/img/02.mp4" type="video/mp4" />
            </video>
         </motion.div>
         
         {/* Dot Matrix Overlay */}
         <div 
           className="absolute inset-0 z-10 opacity-40 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1.5px)', backgroundSize: '4px 4px' }} 
         />

         {/* Heavy Vignette + Dark Overlay */}
         <div className="absolute inset-0 z-10 bg-[#1a0b2e]/60 mix-blend-multiply" />
         <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#000_120%)] opacity-90" />
         <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1a0b2e] via-transparent to-[#1a0b2e]/80" />
      </div>

      {/* CENTER: HEADLINES */}
      <div 
        className="relative z-20 w-full text-center px-4 flex flex-col items-center mt-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-3 md:mb-5"
        >
          {/* Headline - Relaxed leading slightly for readability */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-[#fdf4f0] leading-tight md:leading-[0.9] tracking-tight drop-shadow-2xl">
            {t('hero.title_1')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-emerald-400 italic relative inline-block pb-2 mt-2">
              {t('hero.title_2')}
            </span>
          </h1>
        </motion.div>

        {/* Highlight Offer - Adaptive Spacing */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center w-full max-w-[90%] md:max-w-3xl mt-2 mb-6 md:mb-8 border-t border-b border-[#39ff14]/20 py-4 md:py-5 px-4"
        >
             <span className="text-[10px] md:text-sm font-mono font-bold tracking-[0.2em] text-[#39ff14] uppercase animate-pulse">
               {t('hero.cta_primary')}
             </span>
        </motion.div>

        {/* Intro Text & CTA - Refined Gaps */}
        <div className="flex flex-col items-center max-w-2xl mx-auto gap-6 md:gap-8">
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="text-base md:text-xl font-medium text-[#fdf4f0]/90 leading-relaxed text-shadow-sm px-4"
           >
             {t('hero.intro')}
           </motion.p>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8 }}
             className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0"
           >
             <Button 
               variant="primary" 
               className="w-full sm:w-auto !px-6 !py-3 !text-base !rounded-full border border-[#39ff14] text-[#39ff14] bg-black/50 backdrop-blur-md hover:bg-[#39ff14] hover:text-black shadow-[0_0_15px_rgba(57,255,20,0.4),inset_0_0_5px_rgba(57,255,20,0.2)] hover:shadow-[0_0_35px_rgba(57,255,20,0.8)] transition-all duration-300" 
               onClick={onOpenBooking}
             >
               {t('hero.cta_primary')}
             </Button>
             
             {/* Secondary Button */}
             <Button 
                variant="primary" 
                className="w-full sm:w-auto !px-6 !py-3 !text-base !rounded-full border border-[#39ff14] text-[#39ff14] bg-black/50 backdrop-blur-md hover:bg-[#39ff14] hover:text-black shadow-[0_0_15px_rgba(57,255,20,0.4),inset_0_0_5px_rgba(57,255,20,0.2)] hover:shadow-[0_0_35px_rgba(57,255,20,0.8)] transition-all duration-300 subtle-pulse" 
                onClick={scrollToFreeAudit}
             >
               <span className="flex items-center gap-2 justify-center">
                 <Sparkles size={16} className="mb-0.5 animate-pulse" />
                 {t('hero.cta_secondary_new')}
               </span>
             </Button>
           </motion.div>
        </div>
      </div>

      {/* BOTTOM: SCROLL INDICATOR */}
      <div className="absolute bottom-4 md:bottom-8 left-0 w-full z-20 flex flex-col items-center justify-end pointer-events-none">
        <motion.div 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 opacity-80 cursor-pointer hover:text-[#39ff14] transition-colors pointer-events-auto p-4"
        >
          <ChevronDown className="text-[#39ff14]" size={24} />
        </motion.div>
      </div>

    </section>
  );
};
