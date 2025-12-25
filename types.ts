import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string; // Placeholder URL
  link?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  location: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
  icon: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}