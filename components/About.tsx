
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-brand-neutralLight reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-accent"></div>
            <img 
              src="https://i.imgur.com/2J2HMqG.jpeg" 
              alt="Asesoría" 
              className="w-full grayscale shadow-2xl aspect-[4/3] object-cover"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-brand-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">Quiénes Somos</h2>
          <h3 className="text-4xl font-serif text-brand-primary mb-8">Especialistas en Gestión Contable</h3>
          <div className="space-y-6 text-brand-neutralDark leading-relaxed">
            <p className="text-lg">
              Somos una firma dedicada al acompañamiento contable, fiscal y financiero.
            </p>
            <p>
              Nuestro enfoque se centra en la organización, el análisis y la correcta gestión de la información. Brindamos soluciones para asegurar el cumplimiento de sus obligaciones legales.
            </p>
            <p>
              En Monge Vargas & Asociados, trabajamos para ofrecer claridad en sus finanzas y facilitar la toma de decisiones estratégicas.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-xl mb-2">Visión</h4>
              <p className="text-sm text-gray-600">Ser referentes en claridad contable y cumplimiento tributario.</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-2">Valores</h4>
              <p className="text-sm text-gray-600">Responsabilidad, ética y manejo profesional de la información.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;