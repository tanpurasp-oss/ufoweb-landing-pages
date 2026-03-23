import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group w-full"
    >
      <div className="relative bg-[#1a0b2e] rounded-t-xl p-2 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400"/>
        <div className="w-3 h-3 rounded-full bg-yellow-400"/>
        <div className="w-3 h-3 rounded-full bg-green-400"/>
      </div>
      
      <div className="relative overflow-hidden bg-white border-2 border-t-0 border-[#1a0b2e] rounded-b-xl aspect-[4/3] group-hover:shadow-[8px_8px_0px_0px_rgba(76,29,149,1)] transition-shadow duration-300">
        <div className="absolute inset-0 overflow-hidden">
           <img 
             src={project.imageUrl} 
             alt={project.title} 
             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
           />
           {/* Overlay */}
           <div className="absolute inset-0 bg-[#4c1d95]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
             <h3 className="text-3xl font-serif mb-2">{project.title}</h3>
             <p className="text-sm uppercase tracking-widest font-bold mb-4">{project.category}</p>
             <button className="px-6 py-2 bg-white text-[#4c1d95] font-bold rounded-full hover:bg-yellow-300 hover:text-[#1a0b2e] transition-colors">
               View Case Study
             </button>
           </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-start">
        <h3 className="text-2xl font-serif text-[#1a0b2e] group-hover:text-[#4c1d95] transition-colors">
          {project.title}
        </h3>
        <span className="text-xs font-bold border border-[#1a0b2e] px-2 py-1 rounded-full uppercase">
          {project.tags[0]}
        </span>
      </div>
    </motion.div>
  );
};