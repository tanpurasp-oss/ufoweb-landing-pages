
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      id: 2,
      text: t('testimonials.2.text'),
      author: t('testimonials.2.author'),
      role: t('testimonials.2.role'),
    }
  ];

  return (
    <div className="w-full py-4 relative overflow-hidden flex flex-col">
      <div className="mb-8 md:mb-12">
           <div className="text-xs font-bold uppercase tracking-widest text-[#39ff14] mb-2">FEEDBACK</div>
           <h2 className="text-4xl md:text-6xl font-serif text-[#fdf4f0]">
             {t('testimonials.title')}
           </h2>
      </div>

      {/* Grid Layout - No Scroll */}
      <div className="grid grid-cols-1 gap-6 px-0 mb-12 max-w-2xl">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 0 20px rgba(57, 255, 20, 0.2)" }}
            className="w-full bg-[#fdf4f0]/5 border border-[#39ff14]/20 p-6 md:p-8 rounded-2xl shadow-lg flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <Quote className="text-[#39ff14] mb-4 opacity-80" size={32} />
              <p className="text-lg text-[#fdf4f0] italic mb-6 leading-relaxed">"{review.text}"</p>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-bold font-serif text-xl leading-tight text-[#fdf4f0]">{review.author}</p>
                <p className="text-xs uppercase tracking-widest text-[#39ff14] opacity-80">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};