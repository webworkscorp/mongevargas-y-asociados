
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SectorItem {
  title: string;
  icon: React.ReactNode;
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}
