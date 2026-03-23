
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'imprint' | 'privacy';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1a0b2e]/90 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 pointer-events-none flex items-center justify-center z-[101] p-4"
          >
            <div className="bg-[#fdf4f0] w-full max-w-3xl max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto border-2 border-[#1a0b2e]">
               {/* Header */}
               <div className="p-6 border-b-2 border-[#1a0b2e]/10 flex justify-between items-center bg-white">
                 <h2 className="text-3xl font-serif text-[#1a0b2e]">
                    {type === 'imprint' ? 'Imprint' : 'Privacy Policy'}
                 </h2>
                 <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <X className="text-[#1a0b2e]" />
                 </button>
               </div>
               
               {/* Content */}
               <div className="p-8 overflow-y-auto custom-scrollbar bg-[#fdf4f0]">
                 <div className="prose prose-purple max-w-none text-[#1a0b2e]">
                    <p className="font-bold text-lg mb-4">LEGAL NOTICE / RECHTLICHE HINWEISE</p>
                    <p className="mb-4">
                        [SUGGESTED CONTENT - PLEASE EDIT WITH YOUR ACTUAL DETAILS]
                    </p>
                    
                    {type === 'imprint' ? (
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold uppercase tracking-widest text-xs mb-1">Angaben gemäß § 5 TMG</h3>
                                <p>UFOWeb Digital Agency<br/>Musterstraße 123<br/>10115 Berlin<br/>Germany</p>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase tracking-widest text-xs mb-1">Represented by / Vertreten durch</h3>
                                <p>Murilo Sá</p>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase tracking-widest text-xs mb-1">Contact / Kontakt</h3>
                                <p>Phone: +49 (0) 123 456789<br/>Email: info@ufoweb.com</p>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase tracking-widest text-xs mb-1">VAT ID / Umsatzsteuer-ID</h3>
                                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br/>DE 123 456 789</p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <p>
                                <strong>1. Data Protection at a Glance</strong><br/>
                                General information on what happens to your personal data when you visit this website.
                            </p>
                            <p>
                                <strong>2. Hosting and Content Delivery Networks (CDN)</strong><br/>
                                External hosting details (e.g., AWS, Vercel, Netlify).
                            </p>
                            <p>
                                <strong>3. General Notes and Mandatory Information</strong><br/>
                                Information on the responsible body (controller), storage duration, and your rights as a user.
                            </p>
                            <p>
                                <strong>4. Data Collection on this Website</strong><br/>
                                Cookies, server log files, and contact forms (Formspree).
                            </p>
                            <p className="text-sm opacity-60 mt-8 border-t border-[#1a0b2e]/10 pt-4">
                                Disclaimer: The content above is a placeholder. For a live website, ensure you generate compliant legal texts using a service like e-recht24.de or consult a lawyer.
                            </p>
                        </div>
                    )}
                 </div>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
