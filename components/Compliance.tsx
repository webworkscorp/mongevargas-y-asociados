
import React from 'react';
import { Shield, BookOpen, UserCheck } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <section className="py-24 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">Normativa</h2>
            <h3 className="text-4xl font-serif mb-8 leading-tight">Cumplimiento y Ética Profesional</h3>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Nuestros servicios se desarrollan bajo la legislación contable y tributaria vigente, asegurando un manejo adecuado de sus obligaciones.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/10 p-2 rounded">
                  <Shield className="text-brand-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-brand-accentLight">Responsabilidad</h4>
                  <p className="text-sm text-gray-500 font-light">Asumimos cada proceso con rigor técnico.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/10 p-2 rounded">
                  <UserCheck className="text-brand-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-brand-accentLight">Confidencialidad</h4>
                  <p className="text-sm text-gray-500 font-light">Manejo seguro y discreto de su información.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/10 p-2 rounded">
                  <BookOpen className="text-brand-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-brand-accentLight">Transparencia</h4>
                  <p className="text-sm text-gray-500 font-light">Información clara para su control financiero.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end items-center">
            <img 
              src="https://i.imgur.com/43MJdc6.png" 
              className="w-48 md:w-64 h-auto object-contain" 
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
