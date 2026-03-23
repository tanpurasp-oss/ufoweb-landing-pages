
import React from 'react';
import { motion } from 'framer-motion';
import { AgentAvatar } from './illustrations/AgentAvatar';
import { useLanguage } from '../hooks/useLanguage';
import { ShieldCheck, Activity } from 'lucide-react';

export const Team: React.FC = () => {
  const { t } = useLanguage();

  const cardClasses = "relative bg-[#130722] border border-[#39ff14]/20 rounded-xl p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(57,255,20,0.1)] flex flex-col md:flex-row items-center md:items-start gap-6 group hover:border-[#39ff14]/50 hover:shadow-[4px_4px_0px_0px_#39ff14] transition-all duration-300";

  return (
    <section className="py-12 px-4 relative overflow-hidden bg-[#240e3e] border-t border-[#39ff14]/10">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39ff14]/30 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-3 py-1 border border-[#39ff14]/50 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 bg-[#39ff14]/5 text-[#39ff14]"
          >
            <ShieldCheck size={12} />
            {t('team.badge')}
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#fdf4f0]">
            {t('team.title_1')} <span className="text-[#39ff14]">{t('team.title_2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          
          {/* Murilo Sá - Compact Dossier Style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cardClasses}
          >
            <div className="flex-shrink-0">
                <AgentAvatar 
                src="https://ufoweb.de/agent-w.jpg" 
                alt="Murilo Sá"
                className="w-24 h-24 md:w-32 md:h-32 shadow-lg border-2 border-[#39ff14]/30" 
                />
                 <div className="mt-3 flex items-center justify-center gap-1 text-[10px] font-mono text-[#39ff14] opacity-80">
                    <Activity size={10} className="animate-pulse" />
                    <span>{t('team.agent_w.status')}</span>
                 </div>
            </div>

            <div className="text-center md:text-left flex-grow">
                <h3 className="text-2xl font-serif text-[#fdf4f0] mb-1">Murilo Sá</h3>
                <div className="h-px w-full bg-[#39ff14]/20 mb-2"></div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#39ff14] mb-3 opacity-90">{t('team.agent_w.role')}</p>
                <p className="text-[#fdf4f0]/70 text-sm italic leading-relaxed">
                {t('team.agent_w.quote')}
                </p>
                <div className="mt-3 text-[10px] text-[#fdf4f0]/30 font-mono text-right">
                    ID: 8472-W
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
