export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Package {
  id: string;
  label: string;
  name: string;
  price: string;
  bestFor: string;
  includes: string[];
  buttonText: string;
  whatsappText: string;
  isPopular?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  filterCategory: string; // Match filter tab
  description: string;
  imageUrl: string;
  link: string;
  isFeatured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface AboutCard {
  title: string;
  description: string;
}

export interface WhyUsCard {
  title: string;
  description: string;
}
