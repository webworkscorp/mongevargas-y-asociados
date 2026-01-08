
import React, { useState } from 'react';

const ConsultationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    
    const phoneNumber = "50671424137";
    const text = `*Nueva Solicitud de Agendamiento*\n\n*Nombre:* ${name}\n*Detalle:* ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendar" className="py-24 bg-white border-t border-gray-100 reveal">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-brand-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">Contacto Directo</h2>
        <h3 className="text-4xl font-serif text-brand-primary mb-6">Agendar Consulta</h3>
        <p className="text-gray-500 font-light mb-12 max-w-xl mx-auto">
          Complete el siguiente formulario para iniciar su proceso de gestión financiera y contable. 
          Un especialista revisará su solicitud de inmediato.
        </p>

        <form onSubmit={handleWhatsApp} className="space-y-6 text-left">
          <div className="group">
            <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-brand-primary mb-2 transition-colors group-focus-within:text-brand-accent">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-0 py-4 border-b border-gray-200 bg-transparent focus:border-brand-accent focus:outline-none transition-all duration-300 font-light text-brand-primary placeholder:text-gray-300"
              placeholder="Ingrese su nombre y apellidos"
            />
          </div>

          <div className="group">
            <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold text-brand-primary mb-2 transition-colors group-focus-within:text-brand-accent">
              Detalle de la consulta
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-0 py-4 border-b border-gray-200 bg-transparent focus:border-brand-accent focus:outline-none transition-all duration-300 font-light text-brand-primary placeholder:text-gray-300 resize-none"
              placeholder="Describa brevemente sus necesidades contables o fiscales"
            />
          </div>

          <div className="pt-8 flex justify-center">
            <button
              type="submit"
              className="group relative overflow-hidden inline-flex items-center justify-center px-20 py-4 bg-brand-primary text-brand-accent text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
            >
              <span className="absolute inset-0 bg-brand-accent translate-y-full transition-transform duration-500 group-hover:translate-y-0"></span>
              <span className="relative z-10 group-hover:text-brand-primary transition-colors duration-500">
                Agendar Consulta
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;
