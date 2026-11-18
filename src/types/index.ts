import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
  tags?: string[];
  menu?: string;
  included?: { title: string; body: string }[];
  points?: string[];
  faqs?: FAQItem[];
}

export interface Review {
  quote: string;
  name: string;
  company?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readMinutes: number;
  content: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  fromCity: string;
  toCity: string;
  weight: number;
  length?: number;
  width?: number;
  height?: number;
  serviceType: "courier" | "cargo" | "express";
  notes?: string;
}