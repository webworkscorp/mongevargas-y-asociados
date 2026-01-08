
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-brand-neutralLight reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Sección Quiénes Somos */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-accent"></div>
              <img 
                src="https://i.imgur.com/B0a9aRh.jpeg" 
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

        {/* Sección de Presentación Profesional */}
        <div className="mt-16 pt-16 border-t border-gray-200 space-y-24">
          
          {/* Perfil: Jazmín Vargas S. */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 border border-brand-accent/20 translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
                <img 
                  src="https://i.imgur.com/krx5RNe.png" 
                  alt="Jazmín Vargas S." 
                  className="relative z-10 w-48 h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h4 className="font-serif text-3xl md:text-4xl text-brand-primary mb-2">Jazmín Vargas S.</h4>
              <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em] mb-4">Licenciada en Contaduría Pública</p>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-6">Número profesional CPI 39319</div>
              <div className="w-16 h-px bg-brand-accent/40 mx-auto md:mx-0 mb-6"></div>
              <p className="text-gray-500 text-lg md:text-xl font-light italic leading-relaxed">
                Servicios contables y asesoría.
              </p>
            </div>
          </div>

          {/* Perfil: Terry Monge B. */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 border border-brand-accent/20 translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
                <img 
                  src="https://i.imgur.com/rPmQvmh.png" 
                  alt="Terry Monge B." 
                  className="relative z-10 w-48 h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h4 className="font-serif text-3xl md:text-4xl text-brand-primary mb-2">Terry Monge B.</h4>
              <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em] mb-4">Licenciado en Contaduría Pública</p>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-6">Número profesional CPI 39106</div>
              <div className="w-16 h-px bg-brand-accent/40 mx-auto md:mx-0 mb-6"></div>
              <p className="text-gray-500 text-lg md:text-xl font-light italic leading-relaxed">
                Servicios contables y asesoría.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
