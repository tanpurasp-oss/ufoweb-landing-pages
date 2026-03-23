
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();
  const phoneNumber = '4917612345678'; // Example number, should be configurable
  const message = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(37, 211, 102, 0.6)" }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[90] flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 group opacity-90 md:opacity-100"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} className="md:w-10 md:h-10" />
      
      {/* Tooltip for Desktop */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-black/80 backdrop-blur-md text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 hidden md:block">
        {t('nav.contact_text')}
      </span>
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
    </motion.a>
  );
};
