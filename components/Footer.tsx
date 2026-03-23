
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Instagram, Facebook, Phone } from 'lucide-react';
import { LegalModal } from './LegalModal';

interface FooterProps {
  onOpenBooking: () => void;
}

// Simple WhatsApp Icon SVG (Duplicated for component isolation)
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);

export const Footer: React.FC<FooterProps> = () => {
  const { t } = useLanguage();
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'imprint' | 'privacy'>('imprint');

  const PHONE_NUMBER = "+4917625876173";
  const whatsappMessage = encodeURIComponent(t('whatsapp.message'));
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`;

  const openLegal = (type: 'imprint' | 'privacy') => {
    setLegalType(type);
    setLegalModalOpen(true);
  };

  return (
    <>
        <footer className="bg-[#1a0b2e] text-[#fdf4f0] pt-12 pb-8 px-4 border-t border-[#39ff14]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            {/* Left: Leader Text & Email */}
            <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-serif mb-2 text-[#fdf4f0]/80">
                {t('footer.title_1')} {t('footer.title_2')} <span className="text-[#39ff14]">{t('footer.title_3')}</span>
                </h2>
                <a href="mailto:info@ufoweb.de" className="text-xl font-bold hover:text-[#39ff14] transition-colors">
                info@ufoweb.de
                </a>
            </div>

            {/* Right: Socials & Contact Icons */}
            <div className="flex gap-6 items-center">
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-[#39ff14] transition-colors" title="Call Us">
                    <Phone size={24} />
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#39ff14] transition-colors" title="WhatsApp Chat">
                    <WhatsAppIcon className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/ufo.webstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-[#39ff14] transition-colors"><Instagram size={24} /></a>
                <a href="https://www.facebook.com/ufowebstudio/?locale=fo_FO" target="_blank" rel="noopener noreferrer" className="hover:text-[#39ff14] transition-colors"><Facebook size={24} /></a>
            </div>
        </div>

        {/* Bottom: Legal */}
        <div className="border-t border-[#fdf4f0]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 gap-4">
            <p>© {new Date().getFullYear()} UFOWeb. All rights reserved.</p>
            <div className="flex gap-6">
                <button onClick={() => openLegal('imprint')} className="hover:text-white transition-colors uppercase tracking-wider">{t('footer.imprint')}</button>
                <button onClick={() => openLegal('privacy')} className="hover:text-white transition-colors uppercase tracking-wider">{t('footer.privacy')}</button>
            </div>
        </div>
        </footer>

        <LegalModal 
            isOpen={legalModalOpen} 
            onClose={() => setLegalModalOpen(false)} 
            type={legalType} 
        />
    </>
  );
};
