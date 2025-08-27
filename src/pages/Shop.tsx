import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { optimizeImageUrl } from '../utils/constants';

const products: Product[] = [
  {
    id: 1,
    name: 'Honey & Oat Goat Milk Soap',
    description: 'Nourishing blend with Bulgarian honey and organic oats',
    price: 12.99,
    rating: 4.8,
    reviewCount: 128,
    image: optimizeImageUrl('https://images.unsplash.com/photo-1556228720-195a672e8a03', 400, 400),
    category: 'Nourishing',
    inStock: true
  },
  {
    id: 2,
    name: 'Lavender Dream Goat Milk Soap',
    description: 'Calming French lavender essential oil in a creamy base',
    price: 14.99,
    rating: 5,
    reviewCount: 92,
    image: optimizeImageUrl('https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec', 400, 400),
    category: 'Calming',
    inStock: true
  },
  {
    id: 3,
    name: 'Charcoal Detox Goat Milk Soap',
    description: 'Deep cleansing activated charcoal for balanced skin',
    price: 13.99,
    rating: 4,
    reviewCount: 76,
    image: optimizeImageUrl('https://images.unsplash.com/photo-1625772452859-1c03d5bf1137', 400, 400),
    category: 'Detox',
    inStock: true
  },
  {
    id: 4,
    name: 'Rosemary Mint Goat Milk Soap',
    description: 'Invigorating herbal blend for refreshed skin',
    price: 11.99,
    rating: 4,
    reviewCount: 64,
    image: optimizeImageUrl('https://images.unsplash.com/photo-1571781926291-c477ebfd024b', 400, 400),
    category: 'Invigorating',
    inStock: true
  },
  {
    id: 5,
    name: 'Vanilla Bean Goat Milk Soap',
    description: 'Warm vanilla pod infusion for sensitive skin',
    price: 15.99,
    rating: 5,
    reviewCount: 143,
    image: optimizeImageUrl('https://images.unsplash.com/photo-1556228720-195a672e8a03', 400, 400),
    category: 'Sensitive',
    inStock: true
  },
  {
    id: 6,
    name: 'Citrus Burst Goat Milk Soap',
    description: 'Brightening blend of orange, lemon and grapefruit oils',
    price: 12.99,
    rating: 4,
    reviewCount: 87,
    image: optimizeImageUrl('https://images.unsplash.com/photo-1441986300917-64674bd600d8', 400, 400),
    category: 'Brightening',
    inStock: true
  }
];

export default function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    if (filter === 'bestsellers') return product.rating >= 4.5;
    if (filter === 'new') return product.id >= 4;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.id - b.id;
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>Amaya | Shop</title>
        <meta name="description" content="Browse our collection of handcrafted goat milk soaps" />
      </Helmet>

      <div className="bg-slate-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-4">Amaya Collection</h1>
            <p className="font-sans text-slate-600 max-w-2xl mx-auto">
              Handcrafted goat milk soaps made with organic ingredients and traditional methods
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
              {['all', 'bestsellers', 'new'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-full font-sans text-sm font-medium whitespace-nowrap transition-colors ${
                    filter === type 
                      ? 'bg-teal-600 text-white shadow-md' 
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  aria-label={`Filter by ${type}`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center">
              <label htmlFor="sort" className="font-sans text-sm font-medium text-slate-700 mr-2">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-sm border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="font-serif text-2xl font-bold text-slate-800 mb-4">No products found</h2>
              <p className="font-sans text-slate-600 mb-6">Try adjusting your filters</p>
              <button
                onClick={() => {
                  setFilter('all');
                  setSortBy('featured');
                }}
                className="bg-teal-600 text-white font-sans font-medium px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={() => addToCart(product)}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}