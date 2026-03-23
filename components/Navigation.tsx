import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { LogoMark } from './illustrations/LogoMark';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  onOpenBooking: () => void;
}

// Simple WhatsApp Icon SVG
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);

export const Navigation: React.FC<NavigationProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { language, setLanguage, t } = useLanguage();

  const PHONE_NUMBER = "+4917625876173";
  const whatsappMessage = encodeURIComponent(t('whatsapp.message'));
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`;

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
        const sections = ['pricing', 'projects'];
        
        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // If the section top is near the viewport top or within the viewport
                if (rect.top >= -100 && rect.top <= 300) {
                    setActiveSection(section);
                    break;
                }
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false); // Close mobile menu if open
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    setMobileMenuOpen(false);
    onOpenBooking();
  };

  // Helper for Link Classes
  const getLinkClasses = (sectionId: string) => {
    const base = "transition-all duration-300 border-b-2 py-1";
    const isActive = activeSection === sectionId;
    return `${base} ${isActive ? 'text-[#39ff14] border-[#39ff14]' : 'text-white/70 border-transparent hover:text-[#39ff14]'}`;
  };

  // Helper to render label with highlighted FREE/GRATIS words
  const renderFormattedLabel = (text: string) => {
    // Split by the keywords while capturing them
    const parts = text.split(/(FREE|GRATIS|GRÁTIS)/g);
    return (
        <span>
            {parts.map((part, i) => (
                part.match(/FREE|GRATIS|GRÁTIS/) ? 
                <span key={i} className="underline decoration-2 underline-offset-4 decoration-[#39ff14]">{part}</span> : 
                <span key={i}>{part}</span>
            ))}
        </span>
    );
  };

  // Mobile Menu Variant
  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 30 } }
  };

  return (
    <>
        <nav 
        className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 bg-[#1a0b2e]/95 backdrop-blur-md shadow-lg border-b border-[#39ff14]/10"
        >
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center text-white">
            
            {/* Left: Professional Logo */}
            <div 
                className="flex items-center gap-3 cursor-pointer group z-50 relative"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <div className="relative w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-[#39ff14] transition-colors">
                    <LogoMark className="w-full h-full" />
                </div>
                <span className="font-['Manrope'] font-extrabold text-lg md:text-xl tracking-tighter text-white">
                    UFOWEB
                </span>
            </div>

            {/* Desktop Menu - Centered/Left aligned on desktop */}
            <div className="hidden md:flex gap-8 ml-12 text-xs font-bold uppercase tracking-widest font-mono">
                <button onClick={() => scrollToSection('projects')} className={getLinkClasses('projects')}>{t('nav.work')}</button>
            </div>

            {/* Right: Controls & Mobile Hamburger */}
            <div className="flex items-center gap-4">
                
                {/* Desktop Language Switcher */}
                <div className="hidden md:flex items-center gap-2 text-xs md:text-sm font-bold" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    <button 
                        onClick={() => setLanguage('en')}
                        className={`hover:text-[#39ff14] transition-colors ${language === 'en' ? 'text-[#39ff14]' : 'text-white/60'}`}
                    >
                        EN
                    </button>
                    <span className="text-white/20">/</span>
                    <button 
                        onClick={() => setLanguage('de')}
                        className={`hover:text-[#39ff14] transition-colors ${language === 'de' ? 'text-[#39ff14]' : 'text-white/60'}`}
                    >
                        DE
                    </button>
                    <span className="text-white/20">/</span>
                    <button 
                        onClick={() => setLanguage('pt')}
                        className={`hover:text-[#39ff14] transition-colors ${language === 'pt' ? 'text-[#39ff14]' : 'text-white/60'}`}
                    >
                        PT
                    </button>
                </div>

                {/* Subtle Contact Icons (Desktop) */}
                <div className="hidden md:flex items-center gap-3 px-2 border-l border-white/10 ml-2 pl-4">
                    <a href={`tel:${PHONE_NUMBER}`} className="text-white/70 hover:text-[#39ff14] transition-colors" title="Call Us">
                        <Phone size={18} />
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#39ff14] transition-colors" title="WhatsApp Chat">
                        <WhatsAppIcon className="w-[18px] h-[18px]" />
                    </a>
                </div>

                {/* CTA Button */}
                <button 
                    onClick={onOpenBooking}
                    className="hidden md:block bg-[#39ff14] text-[#1a0b2e] px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide hover:bg-white transition-colors shadow-[0_0_15px_rgba(57,255,20,0.3)] whitespace-nowrap ml-2"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                    {t('booking.title')}
                </button>

                {/* Mobile Hamburger Button */}
                <button 
                    onClick={() => setMobileMenuOpen(true)}
                    className="md:hidden text-white hover:text-[#39ff14] transition-colors p-2"
                >
                    <Menu size={28} />
                </button>
            </div>
        </div>
        </nav>

        {/* Mobile Full Screen Menu Overlay */}
        <AnimatePresence>
            {mobileMenuOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="fixed inset-0 bg-[#1a0b2e] z-[100] flex flex-col p-6"
                >
                    {/* Close Header */}
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 text-[#39ff14]">
                                <LogoMark className="w-full h-full" />
                            </div>
                            <span className="font-['Manrope'] font-extrabold text-xl tracking-tighter text-white">
                                UFOWEB
                            </span>
                        </div>
                        <button 
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white hover:text-[#39ff14] transition-colors p-2 rounded-full border border-white/20"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-6 items-center justify-center flex-grow">
                        <button onClick={() => scrollToSection('projects')} className="text-4xl font-serif text-[#fdf4f0] hover:text-[#39ff14] transition-colors">
                            {t('nav.work')}
                        </button>
                    </div>

                    {/* Footer: Language & CTA */}
                    <div className="flex flex-col items-center gap-6 pb-8">
                         <div className="flex items-center gap-6 text-sm font-bold tracking-widest">
                            <button onClick={() => setLanguage('en')} className={`${language === 'en' ? 'text-[#39ff14]' : 'text-white/60'}`}>EN</button>
                            <button onClick={() => setLanguage('de')} className={`${language === 'de' ? 'text-[#39ff14]' : 'text-white/60'}`}>DE</button>
                            <button onClick={() => setLanguage('pt')} className={`${language === 'pt' ? 'text-[#39ff14]' : 'text-white/60'}`}>PT</button>
                         </div>
                         
                         {/* Mobile Contact Icons */}
                         <div className="flex items-center gap-8 py-4 border-t border-b border-white/10 w-full justify-center">
                            <a href={`tel:${PHONE_NUMBER}`} className="flex flex-col items-center gap-2 text-white/70 hover:text-[#39ff14] transition-colors">
                                <div className="p-3 rounded-full bg-white/5"><Phone size={24} /></div>
                                <span className="text-xs uppercase tracking-widest font-bold">Call</span>
                            </a>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-white/70 hover:text-[#39ff14] transition-colors">
                                <div className="p-3 rounded-full bg-white/5"><WhatsAppIcon className="w-6 h-6" /></div>
                                <span className="text-xs uppercase tracking-widest font-bold">WhatsApp</span>
                            </a>
                         </div>

                         <button 
                            onClick={handleOpenBooking}
                            className="w-full bg-[#39ff14] text-[#1a0b2e] py-4 rounded-xl text-lg font-bold uppercase tracking-wide hover:bg-white transition-colors shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                        >
                            {t('booking.title')}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
};