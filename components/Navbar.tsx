
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-brand-primary/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#inicio" className="block transition-transform hover:scale-105">
            <img 
              src="https://i.imgur.com/43MJdc6.png" 
              alt="Monge Vargas & Asociados Logo" 
              className={`h-12 md:h-14 w-auto transition-all duration-500 ${
                isScrolled ? 'brightness-110 scale-95' : 'brightness-0 invert'
              }`}
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:text-brand-accent relative group ${
                isScrolled ? 'text-gray-300' : 'text-gray-200'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#agendar"
            className="relative px-7 py-3 overflow-hidden border border-brand-accent/40 text-brand-accent text-[9px] uppercase tracking-[0.25em] font-bold transition-all duration-500 group hover:border-brand-accent"
          >
            <span className="absolute inset-0 bg-brand-accent translate-x-[-101%] transition-transform duration-500 group-hover:translate-x-0"></span>
            <span className="relative z-10 group-hover:text-brand-primary transition-colors duration-500">Consulta Profesional</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-screen bg-brand-primary flex flex-col items-center justify-center space-y-8 z-50">
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
          <img 
            src="https://i.imgur.com/43MJdc6.png" 
            alt="Logo" 
            className="h-20 w-auto mb-8 brightness-0 invert"
          />
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl text-white font-serif tracking-[0.1em] hover:text-brand-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#agendar"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-4 bg-brand-accent text-brand-primary text-xs uppercase tracking-widest font-bold"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
