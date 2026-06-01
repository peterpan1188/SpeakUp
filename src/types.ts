export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to look up Lucide icons dynamically
  bgColor: string; // Tailwind bg class
  iconColor: string; // Tailwind text color class
  badgeText?: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  source: string;
  accentColor: string;
  description: string;
}

export interface AppScreen {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  school: string;
  avatarSeed: string;
}
