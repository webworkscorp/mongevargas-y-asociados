
import React from 'react';
import { METHODOLOGY } from '../constants';

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 md:py-32 bg-brand-neutralLight relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute -right-20 top-20 text-[10rem] font-serif text-gray-200/50 pointer-events-none select-none italic">
        Estrategia
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-brand-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">Forma de Trabajo</h2>
            <h3 className="text-4xl font-serif text-brand-primary">Un proceso estructurado para su tranquilidad</h3>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-light">
            Nuestra metodología garantiza que ningún detalle quede al azar, proporcionando un seguimiento continuo y profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {METHODOLOGY.map((step, index) => (
            <div key={index} className="relative group">
              <span className="text-8xl font-serif text-brand-accent/10 absolute -top-10 left-0 transition-colors group-hover:text-brand-accent/20">
                {step.number}
              </span>
              <div className="relative pt-10">
                <h4 className="text-2xl font-serif text-brand-primary mb-4 group-hover:text-brand-accent transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
