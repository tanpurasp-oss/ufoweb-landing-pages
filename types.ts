
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  projectUrl: string; // Added for external links
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingTier {
  id: string;
  title: string;
  subtitle?: string; // Added for thematic flavor
  price: string;
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}

export interface RetainerTier {
  id: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
}

export interface AddOn {
  id: string;
  title: string;
  price: string;
}

export enum ThemeColors {
  Dark = '#1a0b2e',
  Light = '#fdf4f0',
  Accent = '#4c1d95',
  Neon = '#39ff14',
  Text = '#1a0b2e'
}

export type Language = 'en' | 'de' | 'pt';
