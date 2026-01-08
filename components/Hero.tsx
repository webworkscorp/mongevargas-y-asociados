
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-primary">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 animate-fade-in">
        <img 
          src="https://i.imgur.com/i7lA1PO.jpeg" 
          alt="Finanzas" 
          className="w-full h-full object-cover opacity-30 grayscale scale-110 animate-[pulse_10s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-transparent to-brand-primary"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <h2 className="text-brand-accent font-sans text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-6 animate-fade-up">
          Claridad Financiera
        </h2>
        <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight animate-fade-up">
          Profesionales de <span className="italic text-brand-accentLight">confianza</span> que impulsan tu <span className="italic text-brand-accentLight">crecimiento</span>
        </h1>
        <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-up">
          Asesoría contable y tributaria para personas físicas y jurídicas, 
          orientada al cumplimiento normativo y la transparencia.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up">
          <a 
            href="#servicios" 
            className="group relative overflow-hidden inline-flex items-center justify-center w-full sm:w-auto px-12 py-4 bg-brand-accent text-brand-primary text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_-12px_rgba(201,164,92,0.4)]"
          >
            <span className="relative z-10 flex items-center">
              Nuestros Servicios
              <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </a>
          <a 
            href="#agendar" 
            className="group relative overflow-hidden inline-flex items-center justify-center w-full sm:w-auto px-12 py-4 border border-white/40 text-white text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:border-brand-accentLight hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></span>
            <span className="relative z-10">Contacto Directo</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-brand-accent/50 animate-fade-in">
        <a href="#nosotros" aria-label="Desplazarse hacia abajo">
          <ChevronDown size={30} className="cursor-pointer" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
