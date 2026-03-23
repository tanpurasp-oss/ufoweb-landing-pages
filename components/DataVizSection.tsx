import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Testimonials } from './Testimonials';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

export const DataVizSection: React.FC = () => {
  const { t } = useLanguage();

  const data = [
    { name: t('dataviz.label.pagespeed'), value: 98, color: '#39ff14' },
    { name: t('dataviz.label.seo_growth'), value: 85, color: '#4c1d95' },
    { name: t('dataviz.label.conversion'), value: 72, color: '#be185d' },
    { name: t('dataviz.label.retention'), value: 90, color: '#39ff14' },
    { name: t('dataviz.label.traffic'), value: 94, color: '#4c1d95' },
  ];

  return (
    <section id="dataviz" className="py-16 md:py-32 px-4 bg-[#1a0b2e] border-y-2 border-[#39ff14]/20 overflow-hidden relative">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#39ff14 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
       
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-[#fdf4f0] mb-6 leading-tight">
                {t('dataviz.title_1')} <br/>
                <span className="text-[#39ff14] italic">{t('dataviz.title_2')}</span>
              </h2>
              <p className="text-lg md:text-xl text-[#fdf4f0]/80 leading-relaxed mb-8 max-w-xl">
                {t('dataviz.description')}
              </p>
              
              <div className="flex flex-wrap gap-8 mt-12">
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-bold text-[#39ff14] font-mono">99.9%</span>
                  <span className="text-xs uppercase tracking-widest text-[#fdf4f0]/60 mt-2">Uptime Protocol</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-bold text-[#39ff14] font-mono">0.4s</span>
                  <span className="text-xs uppercase tracking-widest text-[#fdf4f0]/60 mt-2">Avg. Load Time</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-bold text-[#39ff14] font-mono">10x</span>
                  <span className="text-xs uppercase tracking-widest text-[#fdf4f0]/60 mt-2">ROI Multiplier</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black/40 backdrop-blur-xl p-6 md:p-10 rounded-[2rem] border border-[#39ff14]/20 shadow-2xl h-[400px] md:h-[500px]"
            >
              <h3 className="text-xl font-mono text-[#39ff14] mb-8 uppercase tracking-widest flex items-center gap-3">
                <span className="w-2 h-2 bg-[#39ff14] rounded-full animate-pulse" />
                {t('dataviz.chart_title')}
              </h3>
              
              <ResponsiveContainer width="100%" height="85%">
                <BarChart data={data} layout="vertical" margin={{ left: 20, right: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#39ff14" opacity={0.1} horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    stroke="#fdf4f0" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    width={100}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(57, 255, 20, 0.05)' }}
                    contentStyle={{ 
                      backgroundColor: '#1a0b2e', 
                      border: '1px solid rgba(57, 255, 20, 0.3)',
                      borderRadius: '12px',
                      color: '#fdf4f0'
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Testimonials Carousel */}
          <div className="mt-32">
             <Testimonials />
          </div>
       </div>
    </section>
  );
};
