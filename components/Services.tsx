
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-brand-secondary text-white reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-brand-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">Especialidades</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">Soluciones Profesionales</h3>
          <div className="w-24 h-px bg-brand-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="p-10 bg-brand-secondary hover:bg-brand-neutralDark transition-all duration-500 group cursor-default"
            >
              <div className="text-brand-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif mb-4 group-hover:text-brand-accent transition-colors duration-500">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                {service.description}
              </p>
              <a href="#agendar" className="flex items-center text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0 cursor-pointer">
                Consultar por este servicio
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
          
          <div className="p-10 bg-brand-primary flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h4 className="text-xl font-serif text-brand-accent mb-4 relative z-10">¿Necesita un plan a medida?</h4>
            <p className="text-gray-400 text-sm mb-8 relative z-10 font-light max-w-[200px]">Analizamos su caso específico para ofrecerle la asesoría exacta que requiere.</p>
            <a 
              href="#agendar" 
              className="group relative z-10 inline-flex items-center px-10 py-4 bg-transparent border border-brand-accent/50 text-brand-accent text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-500 hover:border-brand-accent hover:bg-brand-accent/5 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                Agendar Consultoría
                <ArrowRight className="ml-3 w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
