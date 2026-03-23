import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { X, Calendar, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [dates, setDates] = useState<Date[]>([]);

  useEffect(() => {
    // Generate next available dates (excluding Sundays)
    const nextDates = [];
    const today = new Date();
    let daysAdded = 0;
    let dayOffset = 1;

    while (daysAdded < 12) {
        const d = new Date(today);
        d.setDate(today.getDate() + dayOffset);
        
        // Exclude Sunday (0)
        if (d.getDay() !== 0) {
            nextDates.push(d);
            daysAdded++;
        }
        dayOffset++;
    }
    setDates(nextDates);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : 'pt-BR', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    // Explicitly identify this form source
    formData.append('form_source', 'Booking Modal (Popup)');

    if (selectedDate) {
        // Ensure date is included if selected (even if hidden input misses it)
        if (!formData.has('preferred_date')) {
            formData.append('preferred_date', selectedDate);
        }
    }
    
    try {
      const response = await fetch("https://formspree.io/f/mkgbqlao", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStep(3); // Success view
        setTimeout(() => {
          onClose();
          setStep(1);
          setIsSubmitting(false);
          setSelectedDate(null);
        }, 3000);
      } else {
        alert("There was a problem submitting your form. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("There was a problem submitting your form. Please try again.");
      setIsSubmitting(false);
    }
  };

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
            <div className="bg-[#fdf4f0] w-full max-w-4xl h-auto md:h-[600px] max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto border-2 border-[#1a0b2e]">
              
              {/* Left Side: Info & Calendar Visual */}
              <div className="bg-[#1a0b2e] text-[#fdf4f0] p-6 md:p-8 md:w-1/3 flex flex-col justify-between relative overflow-hidden flex-shrink-0">
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-serif mb-2">{t('booking.title')}</h2>
                  <p className="text-[#fdf4f0]/60 text-sm mb-4 md:mb-6">{t('booking.date_instruction')}</p>
                  
                  <div className="flex items-center gap-2 text-[#39ff14] text-sm font-bold uppercase tracking-widest mb-4">
                    <Calendar size={16} /> {t('booking.select_date')}
                  </div>
                  
                  {/* Dynamic Date Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-2 mb-4 md:mb-8 max-h-[150px] md:max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                     {dates.map((d, i) => {
                       const dateStr = formatDate(d);
                       return (
                         <button 
                           key={i}
                           type="button"
                           onClick={() => setSelectedDate(dateStr)}
                           className={`p-2 rounded text-center text-xs font-bold border transition-colors ${selectedDate === dateStr ? 'bg-[#39ff14] text-[#1a0b2e] border-[#39ff14]' : 'border-white/20 hover:border-white/50 text-[#fdf4f0]'}`}
                         >
                           {dateStr}
                         </button>
                       );
                     })}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#4c1d95] rounded-full blur-[80px] opacity-50" />
              </div>

              {/* Right Side: Form */}
              <div className="flex-1 p-6 md:p-12 relative overflow-y-auto">
                {/* Sticky Close Button - Always visible on scroll */}
                <div className="sticky top-0 right-0 flex justify-end z-20 pointer-events-none mb-4 md:mb-0 md:absolute md:top-4 md:right-4">
                    <button onClick={onClose} className="text-[#1a0b2e] hover:text-[#be185d] pointer-events-auto bg-[#fdf4f0]/80 backdrop-blur-sm p-2 rounded-full shadow-sm md:shadow-none md:bg-transparent">
                        <X size={24} />
                    </button>
                </div>

                {step === 3 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 bg-[#39ff14] rounded-full flex items-center justify-center mb-6">
                      <ChevronRight size={32} className="text-[#1a0b2e]" />
                    </div>
                    <h3 className="text-2xl font-serif text-[#1a0b2e]">{t('booking.success')}</h3>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 h-full justify-center pt-2">
                     <input type="hidden" name="_subject" value="New Quote Request from UFOWeb" />
                     {selectedDate && <input type="hidden" name="preferred_date" value={selectedDate} />}
                     
                     <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-[#1a0b2e]/50 mb-1">{t('booking.name')}</label>
                       <input name="name" type="text" required className="w-full bg-transparent border-b-2 border-[#1a0b2e]/20 py-2 text-lg md:text-xl font-serif text-[#1a0b2e] focus:outline-none focus:border-[#4c1d95]" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-[#1a0b2e]/50 mb-1">{t('booking.email')}</label>
                       <input name="email" type="email" required className="w-full bg-transparent border-b-2 border-[#1a0b2e]/20 py-2 text-lg md:text-xl font-serif text-[#1a0b2e] focus:outline-none focus:border-[#4c1d95]" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-[#1a0b2e]/50 mb-1">{t('booking.project_type')}</label>
                       <input name="phone" type="tel" className="w-full bg-transparent border-b-2 border-[#1a0b2e]/20 py-2 text-lg md:text-xl font-serif text-[#1a0b2e] focus:outline-none focus:border-[#4c1d95]" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-[#1a0b2e]/50 mb-1">{t('booking.message')}</label>
                       <textarea name="message" rows={3} className="w-full bg-transparent border-b-2 border-[#1a0b2e]/20 py-2 text-base md:text-lg text-[#1a0b2e] focus:outline-none focus:border-[#4c1d95]" />
                     </div>
                     
                     <div className="mt-4 md:mt-auto pt-4 flex justify-end">
                       <Button className="flex items-center gap-2 w-full md:w-auto justify-center" disabled={isSubmitting}>
                         {isSubmitting ? 'Sending...' : t('booking.submit')} 
                         {!isSubmitting && <ChevronRight size={18} />}
                       </Button>
                     </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};