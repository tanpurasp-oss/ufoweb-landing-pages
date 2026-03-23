import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from './ui/Button';
import { Send, Check } from 'lucide-react';

export const ContactStrip: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('_subject', 'Contact Strip Request');
    // Identify form source
    formData.append('form_source', 'Contact Strip (Footer)');

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
            setName('');
            setEmail('');
            setTimeout(() => setStatus('idle'), 5000);
        } else {
            alert("Error submitting request. Please try again.");
            setStatus('idle');
        }
    } catch (error) {
        alert("Error submitting request. Please try again.");
        setStatus('idle');
    }
  };

  return (
    <section id="contact-strip" className="bg-[#1a0b2e] border-t-2 border-[#39ff14] w-full h-auto py-16 md:py-24 flex items-center scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="text-center md:text-left">
                <h3 className="text-3xl font-serif text-[#fdf4f0]">
                    {t('contact_strip.title')}
                </h3>
                <p className="text-sm text-[#fdf4f0]/60 uppercase tracking-widest mt-1">
                    {t('contact_strip.subtitle')}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch gap-4 w-full md:w-auto">
                <input 
                    type="text" 
                    name="name"
                    placeholder={t('booking.name')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={status === 'loading'}
                    className="bg-[#fdf4f0]/10 border border-[#fdf4f0]/20 rounded-xl px-4 py-4 text-[#fdf4f0] placeholder:text-[#fdf4f0]/40 focus:outline-none focus:border-[#39ff14] w-full md:w-64 text-lg"
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder={t('booking.email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading'}
                    className="bg-[#fdf4f0]/10 border border-[#fdf4f0]/20 rounded-xl px-4 py-4 text-[#fdf4f0] placeholder:text-[#fdf4f0]/40 focus:outline-none focus:border-[#39ff14] w-full md:w-64 text-lg"
                />
                
                {/* Updated Button: Removed shrinking classes to match the full 'Send Request' style */}
                <Button 
                    className="whitespace-nowrap flex items-center justify-center gap-2 w-full md:w-auto"
                    disabled={status === 'loading'}
                    variant={status === 'success' ? 'primary' : 'primary'} // Maintain structure, change content
                >
                    {status === 'loading' ? (
                       <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : status === 'success' ? (
                        <> <Check size={20} /> <span className="text-[#39ff14]">{t('booking.success')}</span> </>
                    ) : (
                        <> <Send size={20} /> {t('booking.submit')} </>
                    )}
                </Button>
            </form>

        </div>
      </div>
    </section>
  );
};