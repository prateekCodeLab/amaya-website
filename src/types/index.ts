export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  category?: string;
  inStock: boolean;
  slug?: string;
  ingredients?: string[];
  benefits?: string[];
  badge?: 'Bestseller' | 'New' | 'Popular'; // Added badge property
}

export interface CartItem extends Product {
  quantity: number;
}

export interface NavLink {
  name: string;
  path: string;
  icon?: string;
}

export interface FeaturedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content?: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
}