
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Sectors from './components/Sectors';
import Methodology from './components/Methodology';
import Compliance from './components/Compliance';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // 1. Gestionar el revelado por scroll mediante IntersectionObserver
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. NAVEGACIÓN SEGURA: Interceptamos clics para desplazamiento suave sin tocar el historial
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      // Solo interceptar si es un enlace interno (comienza con #)
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const id = anchor.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);

        if (element) {
          e.preventDefault(); // Detenemos el comportamiento por defecto (salto brusco)
          
          // ACTIVACIÓN FORZADA: Hacemos visible la sección de destino antes de llegar
          element.classList.add('active');
          const parentReveal = element.closest('.reveal');
          if (parentReveal) parentReveal.classList.add('active');

          // Cálculo de posición con compensación de Navbar
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // IMPORTANTE: No usamos history.pushState para evitar SecurityErrors en el frame
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className="bg-brand-neutralLight min-h-screen">
      <Navbar />
      <main>
        {/* El Hero siempre debe estar visible por defecto */}
        <Hero />
        <About />
        <Services />
        <Sectors />
        <Methodology />
        <Compliance />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
