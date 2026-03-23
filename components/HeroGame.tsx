import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowUpRight, Globe, ShoppingCart, Rocket, Monitor as MonitorIcon, Search } from 'lucide-react';

interface GameItem {
  id: string;
  type: 'project' | 'service';
  title: string;
  subtitle?: string;
  image?: string;
  icon?: React.ReactNode;
  url?: string;
  targetId?: string;
  colSpan?: number;
  rowSpan?: number;
  color?: string;
}

export const HeroGame: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover'>('default');

  // Mosaic Data Items
  const items: GameItem[] = [
    {
      id: 'proj-1',
      type: 'project',
      title: 'IBAS Berlin',
      subtitle: 'Engineering',
      image: 'https://www.ufoweb.de/portfolio-ufoweb/ibas.jpg',
      url: 'https://ibas-berlin.de/',
      colSpan: 2,
      rowSpan: 2,
    },
    {
      id: 'serv-1',
      type: 'service',
      title: 'Web Design',
      icon: <MonitorIcon size={32} />,
      targetId: 'pricing',
      color: 'bg-[#4c1d95]',
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 'proj-2',
      type: 'project',
      title: 'Os Paralamas',
      subtitle: 'Music Legend',
      image: 'https://www.ufoweb.de/portfolio-ufoweb/print-paralamas.png',
      url: 'https://www.osparalamas.com.br',
      colSpan: 1,
      rowSpan: 2,
    },
    {
      id: 'serv-2',
      type: 'service',
      title: 'E-Commerce',
      icon: <ShoppingCart size={32} />,
      targetId: 'pricing',
      color: 'bg-[#be185d]',
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 'proj-3',
      type: 'project',
      title: 'Clube do Bordado',
      subtitle: 'Community',
      image: 'https://www.ufoweb.de/portfolio-ufoweb/print-clubedobordado.png',
      url: 'https://oclubedobordado.com.br/',
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 'serv-3',
      type: 'service',
      title: 'SEO & Growth',
      icon: <Search size={32} />,
      targetId: 'pricing',
      color: 'bg-[#1a0b2e]',
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 'proj-4',
      type: 'project',
      title: 'Mari Martins',
      subtitle: 'Portfolio',
      image: 'https://www.ufoweb.de/portfolio-ufoweb/print-maripabst.png',
      url: 'https://marianapabstmartins.com/',
      colSpan: 2,
      rowSpan: 1,
    },
  ];

  // Update mouse position relative to container
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleItemClick = (item: GameItem) => {
    setIsClicking(true);
    
    // Reset click animation after delay
    setTimeout(() => {
      setIsClicking(false);
      if (item.url) {
        window.open(item.url, '_blank');
      } else if (item.targetId) {
        const element = document.getElementById(item.targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400); // Wait for beam animation
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto min-h-[600px] p-4 md:p-8 cursor-none overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Grid Hint */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'radial-gradient(#1a0b2e 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      {/* Mosaic Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`
              relative rounded-2xl overflow-hidden border-2 border-[#1a0b2e] shadow-[4px_4px_0px_0px_rgba(26,11,46,0.1)]
              ${item.colSpan === 2 ? 'col-span-2' : 'col-span-1'}
              ${item.rowSpan === 2 ? 'row-span-2' : 'row-span-1'}
              group cursor-none
            `}
            style={{ minHeight: item.rowSpan === 2 ? '300px' : '140px' }}
            onClick={() => handleItemClick(item)}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
          >
            {item.type === 'project' ? (
              <>
                <div className="absolute inset-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#1a0b2e]/20 group-hover:bg-[#1a0b2e]/0 transition-colors" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#1a0b2e]/90 to-transparent text-white">
                  <h3 className="font-bold font-serif text-lg leading-none">{item.title}</h3>
                  <p className="text-xs text-[#39ff14] font-mono mt-1 uppercase">{item.subtitle}</p>
                </div>
                <div className="absolute top-2 right-2 bg-white text-[#1a0b2e] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={16} strokeWidth={3} />
                </div>
              </>
            ) : (
              <div className={`w-full h-full flex flex-col items-center justify-center text-white p-4 text-center ${item.color}`}>
                <div className="mb-2 text-[#39ff14] transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold font-serif text-lg leading-tight">{item.title}</h3>
                <div className="mt-2 text-[10px] bg-white/20 px-2 py-1 rounded uppercase tracking-wider font-bold">
                   Service
                </div>
              </div>
            )}
            
            {/* Hover Selection Ring */}
            <div className="absolute inset-0 border-4 border-[#39ff14] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* UFO Game Cursor */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="pointer-events-none absolute z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              x: mousePosition.x - 32, // Center the 64px UFO
              y: mousePosition.y - 32,
              opacity: 1, 
              scale: cursorVariant === 'hover' ? 1.2 : 1 
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 28,
              opacity: { duration: 0.2 }
            }}
          >
            {/* The UFO SVG */}
            <div className="relative w-16 h-16 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
               <svg viewBox="0 0 100 60" className="w-full h-full">
                  <motion.g 
                    animate={cursorVariant === 'hover' ? { rotate: [0, -5, 5, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {/* Dome */}
                    <path d="M 30 25 Q 50 5 70 25" fill="#e0e7ff" fillOpacity="0.8" stroke="#1a0b2e" strokeWidth="2" />
                    {/* Body */}
                    <ellipse cx="50" cy="30" rx="40" ry="12" fill="#4c1d95" stroke="#1a0b2e" strokeWidth="2" />
                    {/* Ring */}
                    <ellipse cx="50" cy="35" rx="50" ry="8" fill="none" stroke="#39ff14" strokeWidth="2" />
                    {/* Lights */}
                    <circle cx="20" cy="35" r="2" fill="#39ff14" className="animate-pulse" />
                    <circle cx="50" cy="40" r="2" fill="#39ff14" className="animate-pulse" />
                    <circle cx="80" cy="35" r="2" fill="#39ff14" className="animate-pulse" />
                  </motion.g>
               </svg>
               
               {/* Tractor Beam (Visible on Click) */}
               <AnimatePresence>
                 {isClicking && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 200, opacity: 0.8 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="absolute top-[60%] left-1/2 -translate-x-1/2 w-12 bg-gradient-to-b from-[#39ff14] to-transparent pointer-events-none"
                     style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}
                   />
                 )}
               </AnimatePresence>
            </div>
            
            {/* Label */}
            <motion.div 
               initial={{ opacity: 0, y: 5 }}
               animate={{ opacity: cursorVariant === 'hover' ? 1 : 0, y: cursorVariant === 'hover' ? 20 : 5 }}
               className="bg-[#1a0b2e] text-[#39ff14] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider whitespace-nowrap border border-[#39ff14]"
            >
               Click to Abduct
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};