
import React from 'react';
import { 
  Calculator, 
  FileText, 
  ShieldCheck, 
  TrendingUp, 
  UserCheck, 
  Briefcase, 
  Globe, 
  Scale
} from 'lucide-react';
import { NavItem, ServiceItem, SectorItem, MethodologyStep } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Contacto', href: '#agendar' }, // Cambiado de #contacto a #agendar
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Contabilidad General',
    description: 'Gestión de libros contables y estados financieros para una visión clara de su situación.',
    icon: <Calculator className="w-6 h-6" />,
  },
  {
    title: 'Contabilidad Tributaria',
    description: 'Cumplimiento de los requerimientos específicos de las leyes fiscales vigentes.',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: 'Servicios Fiscales',
    description: 'Declaración de impuestos y cumplimiento oportuno de obligaciones tributarias.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Certificaciones',
    description: 'Emisión de certificaciones de ingresos y documentos oficiales con fe pública.',
    icon: <Scale className="w-6 h-6" />,
  },
  {
    title: 'Asesorías',
    description: 'Consultoría financiera para la toma de decisiones basada en información real.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

export const SECTORS: SectorItem[] = [
  { title: 'Profesionales', icon: <UserCheck className="w-5 h-5" /> },
  { title: 'Emprendedores', icon: <Briefcase className="w-5 h-5" /> },
  { title: 'Pymes', icon: <Globe className="w-5 h-5" /> },
  { title: 'Sociedades', icon: <Briefcase className="w-5 h-5" /> },
  { title: 'Actividad Lucrativa', icon: <UserCheck className="w-5 h-5" /> },
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    number: '01',
    title: 'Análisis Inicial',
    description: 'Evaluamos su situación financiera actual para identificar necesidades y riesgos.'
  },
  {
    number: '02',
    title: 'Plan de Trabajo',
    description: 'Definimos un calendario de cumplimiento y responsabilidades específicas.'
  },
  {
    number: '03',
    title: 'Gestión Continua',
    description: 'Ejecutamos los procesos con reportes periódicos y seguimiento constante.'
  }
];
