
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowUpRight, FolderOpen, X, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

// Helper for Screenshot loading with fallback and optimization
const MockupImage: React.FC<{ url: string; fallback: string; alt: string; className?: string }> = ({ url, fallback, alt, className }) => {
  const [hasError, setHasError] = useState(false);
  
  // Prioritize fallback (the provided static image) over thum.io generation
  const imageSource = fallback || (url ? `https://image.thum.io/get/width/800/crop/600/noanimate/${url}` : '');
  const finalSrc = hasError ? (url ? `https://image.thum.io/get/width/800/crop/600/noanimate/${url}` : '') : imageSource;

  return (
    <img 
      src={finalSrc} 
      alt={alt} 
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      decoding="async"
    />
  );
};

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const REAL_PROJECTS: Project[] = [
    {
      id: 'project.ibas',
      title: 'IBAS Berlin',
      category: 'Engineering',
      description: t('project.ibas.desc'),
      imageUrl: 'https://www.ufoweb.de/portfolio-ufoweb/ibas.jpg',
      projectUrl: 'https://ibas-berlin.de/',
      tags: ['Eng', 'Corp']
    },
    {
      id: 'project.blaue',
      title: 'Blaue Bohne',
      category: 'Coffee Roastery',
      description: t('project.blaue.desc'),
      imageUrl: 'https://www.ufoweb.de/portfolio-ufoweb/print-blauebohne.png',
      projectUrl: '', 
      tags: ['Shop', 'Art']
    },
    {
      id: 'project.mari',
      title: 'Mari Martins',
      category: 'Art Portfolio',
      description: t('project.mari.desc'),
      imageUrl: 'https://www.ufoweb.de/portfolio-ufoweb/print-maripabst.png',
      projectUrl: 'https://marianapabstmartins.com/',
      tags: ['Art', 'Clean']
    },
    {
      id: 'project.thais',
      title: 'Thaís Vilarinho',
      category: 'Book Writer',
      description: t('project.thais.desc'),
      imageUrl: 'https://www.ufoweb.de/portfolio-ufoweb/print-escritorathaisvilarinho.png',
      projectUrl: '', 
      tags: ['Dev', 'Club']
    },
    {
      id: 'project.clube',
      title: 'Clube Do Bordado',
      category: 'Community',
      description: t('project.clube.desc'),
      imageUrl: 'https://www.ufoweb.de/portfolio-ufoweb/print-clubedobordado.png',
      projectUrl: 'https://oclubedobordado.com.br/',
      tags: ['Arts', 'Event']
    },
    {
        id: 'project.pequeno',
        title: 'Pequeno Imprevisto',
        category: 'Music Label',
        description: t('project.pequeno.desc'),
        imageUrl: 'https://www.ufoweb.de/portfolio-ufoweb/print-pequenoimprevisto.png',
        projectUrl: '', 
        tags: ['Rec', 'Dev']
    },
    {
      id: 'project.paralamas',
      title: 'Os Paralamas Do Sucesso',
      category: 'Music',
      description: t('project.paralamas.desc'),
      imageUrl: 'https://www.ufoweb.de/portfolio-ufoweb/print-paralamas.png',
      projectUrl: 'https://www.osparalamas.com.br',
      tags: ['Band', 'Rock']
    },
    {
      id: 'project.jazz',
      title: 'Jazz São Paulo',
      category: 'Culture',
      description: t('project.jazz.desc'),
      imageUrl: 'https://www.ufoweb.de/portfolio-ufoweb/print-jazzsaopaulo.png',
      projectUrl: 'https://jazzsaopaulo.com.br/',
      tags: ['Events', 'Jazz']
    },
    {
      id: 'project.straube',
      title: 'Straube Lawyers',
      category: 'Corporate',
      description: t('project.straube.desc'),
      imageUrl: 'https://www.ufoweb.de/portfolio-ufoweb/print-straube.png',
      projectUrl: '', 
      tags: ['Corp', 'Biz']
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 w-full max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-8 border-b-2 border-[#1a0b2e] pb-6">
        <div>
            <div className="flex items-center gap-2 text-[#4c1d95] mb-2">
                <FolderOpen size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Case Files // Database</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a0b2e]">
            {t('projects.title_1')} <span className="text-[#39ff14] italic text-stroke">{t('projects.title_2')}</span>
            </h2>
        </div>
      </div>

      {/* Grid - Adjusted for better visibility */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence>
            {REAL_PROJECTS.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => setSelectedProject(project)}
                />
            ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Mockup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ scale: 1.02, y: -5, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={onClick}
        className="group relative block rounded-2xl bg-[#1a0b2e] overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] border-2 border-transparent hover:border-[#39ff14] flex flex-col h-full"
    >
        {/* Thumbnail - Dynamic Screenshot */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1a0b2e]">
            <MockupImage 
                url={project.projectUrl} 
                fallback={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            
            {/* Scan Line Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#39ff14]/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
        </div>

        {/* Card Content */}
        <div className="p-6 bg-[#1a0b2e] text-white flex-grow flex flex-col justify-end relative z-10">
            <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-[#39ff14] uppercase tracking-widest bg-[#39ff14]/10 px-2 py-1 rounded border border-[#39ff14]/30">
                    {project.category}
                </span>
                <ArrowUpRight size={18} className="text-[#39ff14] opacity-50 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-1 leading-tight group-hover:text-[#39ff14] transition-colors">
                {project.title}
            </h3>
        </div>
    </motion.div>
  );
};

// New Modal Component for Mockups
const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const [imgSrc, setImgSrc] = useState(project.imageUrl);

  // Update image source when project changes
  useEffect(() => {
    setImgSrc(project.imageUrl);
  }, [project]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Fallback to Thum.io if the provided image fails
  const handleError = () => {
    if (project.projectUrl) {
      setImgSrc(`https://image.thum.io/get/width/1200/crop/800/noanimate/${project.projectUrl}`);
    }
  };
  
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[#1a0b2e]/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        className="relative bg-[#1a0b2e] w-full max-w-7xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] border-2 border-[#39ff14]/30"
      >
          {/* Header - Dark & Contrast */}
          <div className="flex-shrink-0 p-5 md:p-6 border-b border-[#39ff14]/20 flex justify-between items-center bg-[#1a0b2e] z-20">
               <div className="flex flex-col">
                 <h3 className="text-xl md:text-3xl font-serif text-white leading-none mb-1">{project.title}</h3>
                 <p className="text-xs md:text-sm text-[#fdf4f0]/70 max-w-2xl">{project.description}</p>
               </div>
               
               <div className="flex items-center gap-4 md:gap-6 pl-4">
                 {/* Conditionally render Visit Site button only if URL exists */}
                 {project.projectUrl && (
                     <a 
                        href={project.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#39ff14] hover:text-white transition-colors py-2 px-3 rounded hover:bg-white/5 border border-transparent hover:border-[#39ff14]/30"
                     >
                        <span className="hidden md:inline">{t('projects.visit_site')}</span> 
                        <ExternalLink size={16} />
                     </a>
                 )}
                 
                 <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white hover:text-[#39ff14]">
                    <X size={28} />
                 </button>
               </div>
          </div>
          
          {/* Body - Clean Image Display */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden bg-[#0d0417] relative flex items-start justify-center p-4 md:p-8">
               {/* Background Grid Pattern */}
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#39ff14 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

               {/* Provided Image Display - Optimized Rendering */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10 w-full"
               >
                   <img 
                     src={imgSrc} 
                     alt={project.title} 
                     className="w-full h-auto rounded-lg shadow-2xl border border-[#39ff14]/10 bg-[#1a0b2e]"
                     decoding="async"
                     onError={handleError}
                   />
               </motion.div>
          </div>
      </motion.div>
    </div>
  );
};
