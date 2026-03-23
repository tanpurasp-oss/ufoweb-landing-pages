import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowUpRight, Layers, ShoppingBag, Globe, Search, Code } from 'lucide-react';

interface Service {
  id: string;
  titleKey: string;
  descKey: string;
  icon: React.ReactNode;
  colSpan?: string; // Tailwind class for column span
  color?: string;
}

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services: Service[] = [
    {
      id: 'strategy',
      titleKey: 'services.strategy',
      descKey: 'services.strategy.desc',
      icon: <Layers size={32} />,
      colSpan: 'md:col-span-2',
      color: 'bg-[#1a0b2e] text-[#fdf4f0]'
    },
    {
      id: 'webdev',
      titleKey: 'services.webdev',
      descKey: 'services.webdev.desc',
      icon: <Code size={32} />,
      color: 'bg-[#fdf4f0] text-[#1a0b2e] border-2 border-[#1a0b2e]'
    },
    {
      id: 'branding',
      titleKey: 'services.branding',
      descKey: 'services.branding.desc',
      icon: <Globe size={32} />,
      color: 'bg-[#4c1d95] text-white'
    },
    {
      id: 'seo',
      titleKey: 'services.seo',
      descKey: 'services.seo.desc',
      icon: <Search size={32} />,
      colSpan: 'md:col-span-2',
      color: 'bg-[#39ff14] text-[#1a0b2e]'
    },
    {
      id: 'ecommerce',
      titleKey: 'services.ecommerce',
      descKey: 'services.ecommerce.desc',
      icon: <ShoppingBag size={32} />,
      colSpan: 'md:col-span-2',
      color: 'bg-[#be185d] text-white'
    }
  ];

  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[300px]">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`
               ${service.colSpan || 'col-span-1'} 
               ${service.color}
               relative rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 min-h-[260px] md:min-h-0
            `}
            whileHover={{ y: -5 }}
          >
            {/* Hover decorative elements */}
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <ArrowUpRight size={24} />
            </div>
            
            <div className="relative z-10">
               <div className="mb-4 opacity-80 transform scale-90 origin-left md:scale-100">{service.icon}</div>
               <h3 className="text-2xl md:text-3xl font-serif leading-none mb-2">{t(service.titleKey as any)}</h3>
            </div>

            <div className="relative z-10">
               <p className="text-sm opacity-80 mb-4 line-clamp-4 md:line-clamp-3 leading-relaxed">{t(service.descKey as any)}</p>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};