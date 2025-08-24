import { ComponentType } from 'react';

export interface FeaturedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: string;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  category?: string;
  inStock?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
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

export interface NavLink {
  name: string;
  path: string;
  icon?: ComponentType;
}

export interface Placeholders {
  product: string;
  hero: string;
  article: string;
}

export interface IconFeature {
  id: number;
  title: string;
  description: string;
  icon: ComponentType;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';