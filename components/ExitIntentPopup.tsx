
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { X, Sparkles, Clock, Send } from 'lucide-react';
import { Button } from './ui/Button';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsVisible(false), 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#1a0b2e] border-2 border-[#39ff14] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(57,255,20,0.3)]"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-[#fdf4f0]/50 hover:text-[#39ff14] transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#39ff14]/10 rounded-full flex items-center justify-center mb-6 border border-[#39ff14]/30">
                <Sparkles className="text-[#39ff14]" size={32} />
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-[#fdf4f0] mb-2">
                {t('exit.title')}
              </h2>
              <p className="text-[#fdf4f0]/70 mb-6">
                {t('exit.subtitle')}
              </p>

              <div className="bg-[#39ff14] text-black font-bold py-3 px-6 rounded-full text-xl md:text-2xl mb-8 shadow-[0_0_20px_rgba(57,255,20,0.5)]">
                {t('exit.discount')}
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  <input
                    type="email"
                    required
                    placeholder={t('audit.placeholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-[#39ff14]/30 rounded-xl px-4 py-3 text-[#fdf4f0] focus:outline-none focus:border-[#39ff14] transition-colors"
                  />
                  <input
                    type="url"
                    placeholder={t('audit.placeholder_url')}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-white/5 border border-[#39ff14]/30 rounded-xl px-4 py-3 text-[#fdf4f0] focus:outline-none focus:border-[#39ff14] transition-colors"
                  />
                  <Button 
                    type="submit"
                    variant="primary" 
                    className="w-full !py-4 !text-lg !rounded-xl bg-[#39ff14] text-black hover:bg-[#39ff14]/90 transition-all font-bold"
                  >
                    {t('exit.cta')}
                  </Button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#39ff14] font-bold text-xl flex items-center gap-2"
                >
                  <Send size={24} />
                  {t('audit.success')}
                </motion.div>
              )}

              <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-[#39ff14]/60 font-mono">
                <Clock size={14} className="animate-pulse" />
                {t('exit.urgency')}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
