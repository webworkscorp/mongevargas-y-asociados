
import React from 'react';
import { SECTORS } from '../constants';

const Sectors: React.FC = () => {
  return (
    <section id="sectores" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-brand-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">Sectores</h2>
        <h3 className="text-3xl font-serif text-brand-primary mb-12">Experiencia en Diversas Áreas</h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {SECTORS.map((sector, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-8 py-4 bg-brand-neutralLight border border-gray-100 hover:border-brand-accent transition-all duration-300 group"
            >
              <span className="text-brand-accent group-hover:scale-110 transition-transform">{sector.icon}</span>
              <span className="text-brand-primary text-xs uppercase tracking-widest font-semibold">{sector.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
