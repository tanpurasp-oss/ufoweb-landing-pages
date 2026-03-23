import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { BookingModal } from './components/BookingModal';
import { LanguageProvider, useLanguage } from './hooks/useLanguage';
import { ContactStrip } from './components/ContactStrip';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { WhatsAppButton } from './components/WhatsAppButton';

const AppContent: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  // Parallax background effect for the dark sections
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#1a0b2e] text-[#fdf4f0]">
      {/* Background Decor (Visible in dark areas like Hero gap or Footer) */}
      <motion.div 
        style={{ y: yBackground }}
        className="fixed inset-0 pointer-events-none opacity-20 z-0"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#4c1d95] blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#39ff14] blur-[120px]" />
      </motion.div>


      <Navigation onOpenBooking={openBooking} />
      
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />

      <main className="relative z-20 flex flex-col w-full">
        
        {/* Full Screen Advanced Hero (Dark Theme) */}
        <Hero onOpenBooking={openBooking} />
        
        {/* Main Content Area (Light Theme) */}
        <div className="relative w-full bg-[#fdf4f0] text-[#1a0b2e] shadow-2xl z-30">
          
          {/* Decorative Top Transition */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#1a0b2e]/20 to-transparent pointer-events-none" />

          <div className="relative z-10 pt-0">
            {/* Primary Campaign: Special Offers (Landing Page Focus) */}
            <Pricing onOpenBooking={openBooking} />

            {/* Portfolio Section (Trust & Authority) */}
            <Projects />
          </div>
          
          <ContactStrip />
          <Footer onOpenBooking={openBooking} />
          <ExitIntentPopup />
          <WhatsAppButton />
        </div>
      </main>
      
      {/* Overlay Grain Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[100] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;