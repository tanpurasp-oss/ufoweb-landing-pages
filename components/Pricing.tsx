import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from './ui/Button';
import { Check, Star, Globe, Mail, CheckCircle2, Eye, LockOpen } from 'lucide-react';

interface PricingProps {
  onOpenBooking: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData();
    formData.append('email', email);
    formData.append('website', website);
    formData.append('_subject', 'Free Website Redesign Concept Request');
    formData.append('form_source', 'Pricing Side Column Form');

    try {
        const response = await fetch("https://formspree.io/f/mkgbqlao", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus('success');
            setEmail('');
            setWebsite('');
        } else {
            alert("Error submitting request. Please try again.");
            setStatus('idle');
        }
    } catch (error) {
        alert("Error submitting request. Please try again.");
        setStatus('idle');
    }
  };

  const TIERS = [
    {
      id: 'tier1',
      translationKey: 'tier1',
      subtitleKey: 'pricing.subtitle.onepage',
      isPopular: true,
      features: ['pricing.feature.t1.1', 'pricing.feature.t1.2', 'pricing.feature.t1.3', 'pricing.feature.t1.4', 'pricing.feature.t1.5']
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 w-full max-w-7xl mx-auto scroll-mt-24">
      
      <div className="text-center mb-16 relative">
        {/* NEW SOPHISTICATED LIMITED TIME WARNING */}
        <div className="inline-flex items-center gap-3 px-4 py-2 md:px-6 rounded-full bg-[#1a0b2e]/5 border border-[#1a0b2e]/10 text-[#be185d] mb-6 md:mb-8 shadow-inner max-w-full">
            <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] font-mono text-center md:text-left leading-tight text-wrap">
                {t('pricing.warning')}
            </span>
        </div>

        <h2 className="text-4xl md:text-7xl font-serif text-[#1a0b2e] mb-4 md:mb-6">
          {t('pricing.title_1')} <br className="md:hidden" /><span className="text-[#4c1d95] italic">{t('pricing.title_2')}</span>
        </h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-[#1a0b2e]/70 px-2">
          {t('pricing.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* LEFT COLUMN: FREE AUDIT FORM */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border-2 border-[#1a0b2e] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(26,11,46,1)] flex flex-col"
        >
          <div className="mb-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#4c1d95] mb-2">
              {t('pricing.subtitle.onepage')}
            </div>
            <h3 className="text-3xl font-serif text-[#1a0b2e] mb-4">
              {t('audit.title')}
            </h3>
            <p className="text-[#1a0b2e]/70 leading-relaxed mb-8">
              {t('audit.subtitle')}
            </p>
          </div>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="bg-[#39ff14]/10 border border-[#39ff14] text-[#1a0b2e] p-8 rounded-xl flex flex-col items-center justify-center gap-4 flex-grow"
            >
              <CheckCircle2 size={48} className="text-[#39ff14]" />
              <span className="text-xl font-bold font-serif text-center">{t('audit.success')}</span>
              <p className="text-xs uppercase tracking-widest opacity-60 text-center">We will transmit the concept shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleAuditSubmit} className="space-y-4 flex-grow">
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4c1d95]" size={18} />
                <input 
                  type="text" 
                  required 
                  placeholder={t('audit.placeholder_url')}
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full bg-gray-50 border-2 border-[#1a0b2e]/10 rounded-xl pl-12 pr-4 py-4 text-[#1a0b2e] placeholder:text-[#1a0b2e]/30 focus:outline-none focus:border-[#4c1d95] transition-all font-serif"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4c1d95]" size={18} />
                <input 
                  type="email" 
                  required 
                  placeholder={t('audit.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full bg-gray-50 border-2 border-[#1a0b2e]/10 rounded-xl pl-12 pr-4 py-4 text-[#1a0b2e] placeholder:text-[#1a0b2e]/30 focus:outline-none focus:border-[#4c1d95] transition-all font-serif"
                />
              </div>
              
              <Button 
                className={`w-full py-4 text-lg shadow-md ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}`}
                variant="primary" 
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2 justify-center">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t('audit.scanning')}
                  </span>
                ) : t('audit.button')}
              </Button>

              <div className="pt-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1a0b2e]/60">
                  <Eye size={14} className="text-[#39ff14]" />
                  <span>100% Free Visualization</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1a0b2e]/60">
                  <LockOpen size={14} className="text-[#39ff14]" />
                  <span>No Commitment</span>
                </div>
              </div>
            </form>
          )}
        </motion.div>

        {/* RIGHT COLUMN: ELITE LANDING PAGE OFFER */}
        {TIERS.map((tier, index) => {
          const isPopular = tier.isPopular;
          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 w-full
                ${isPopular 
                  ? 'bg-[#1a0b2e] text-[#fdf4f0] border-[#39ff14] shadow-[8px_8px_0px_0px_#39ff14]' 
                  : 'bg-white text-[#1a0b2e] border-[#1a0b2e] shadow-[8px_8px_0px_0px_rgba(26,11,46,1)]'
                }`}
            >
              {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#39ff14] text-[#1a0b2e] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 shadow-md whitespace-nowrap z-10">
                  <Star size={12} fill="currentColor" /> {t('pricing.most_popular')}
                </div>
              )}

              <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${isPopular ? 'text-[#39ff14]' : 'text-[#4c1d95]'}`}>
                 {t(tier.subtitleKey as any)}
              </div>
              <h3 className={`text-3xl font-serif mb-2 leading-none ${isPopular ? 'text-white' : 'text-[#1a0b2e]'}`}>
                {t(`pricing.${tier.translationKey}.title` as any)}
              </h3>
              
              <div className="text-5xl font-extrabold mb-4 font-[Manrope]">
                {t(`pricing.${tier.translationKey}.price` as any)}
              </div>
              
              <p className={`text-sm mb-6 leading-relaxed ${isPopular ? 'text-white/70' : 'text-[#1a0b2e]/70'}`}>
                {t(`pricing.${tier.translationKey}.desc` as any)}
              </p>

              <ul className="space-y-4 mb-8 flex-grow border-t border-current pt-6 border-opacity-20">
                {tier.features.map((featureKey) => (
                  <li key={featureKey} className="flex items-start gap-3 text-sm font-medium">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${isPopular ? 'text-[#39ff14]' : 'text-[#4c1d95]'}`} />
                    <span>{t(featureKey as any)}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={isPopular ? 'secondary' : 'primary'}
                className="w-full py-4 text-lg"
                onClick={onOpenBooking}
              >
                {t('pricing.cta')}
              </Button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
