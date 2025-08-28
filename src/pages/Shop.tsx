// Updated src/pages/Shop.tsx (continued)
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { optimizeImageUrl } from '../utils/constants';
import { FiFilter, FiArrowRight, FiAward, FiStar, FiTrendingUp } from 'react-icons/fi';
import ImageWithFallback from '../components/ImageWithFallback';

// Updated placeholder images with lifestyle and product imagery
const PRODUCT_IMAGES = [
  optimizeImageUrl('https://images.unsplash.com/photo-1594035910387-df1d6b81b590', 600, 600), // Soap on natural texture
  optimizeImageUrl('https://images.unsplash.com/photo-1571781926291-c477ebfd024b', 600, 600), // Soap bars arranged
  optimizeImageUrl('https://images.unsplash.com/photo-1556228720-195a672e8a03', 600, 600), // Close-up soap
  optimizeImageUrl('https://images.unsplash.com/photo-1544966503-7cc5ac882d5e', 600, 600), // Soap packaging
  optimizeImageUrl('https://images.unsplash.com/photo-1584302179602-e4d3e7650d4a', 600, 600), // Bathroom scene
  optimizeImageUrl('https://images.unsplash.com/photo-1596462502278-27bfdc403348', 600, 600), // Spa-like setting
];

const products: Product[] = [
  {
    id: 1,
    name: 'Honey & Oat Soap',
    description: 'Nourishing blend with Bulgarian honey and organic oats for sensitive skin',
    price: 12.99,
    rating: 4.8,
    reviewCount: 128,
    image: PRODUCT_IMAGES[0],
    category: 'Nourishing',
    inStock: true,
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Lavender Dream Soap',
    description: 'Calming French lavender essential oil in a creamy base for relaxation',
    price: 14.99,
    rating: 5,
    reviewCount: 92,
    image: PRODUCT_IMAGES[1],
    category: 'Calming',
    inStock: true,
    badge: 'New'
  },
  {
    id: 3,
    name: 'Charcoal Detox Soap',
    description: 'Deep cleansing activated charcoal for balanced and clarified skin',
    price: 13.99,
    rating: 4,
    reviewCount: 76,
    image: PRODUCT_IMAGES[2],
    category: 'Detox',
    inStock: true
  },
  {
    id: 4,
    name: 'Rosemary Mint Soap',
    description: 'Invigorating herbal blend for refreshed and awakened skin',
    price: 11.99,
    rating: 4,
    reviewCount: 64,
    image: PRODUCT_IMAGES[3],
    category: 'Invigorating',
    inStock: true,
    badge: 'Popular'
  },
  {
    id: 5,
    name: 'Vanilla Bean Soap',
    description: 'Warm vanilla pod infusion for sensitive and delicate skin types',
    price: 15.99,
    rating: 5,
    reviewCount: 143,
    image: PRODUCT_IMAGES[4],
    category: 'Sensitive',
    inStock: true,
    badge: 'Bestseller'
  },
  {
    id: 6,
    name: 'Citrus Burst Soap',
    description: 'Brightening blend of orange, lemon and grapefruit oils for radiant skin',
    price: 12.99,
    rating: 4,
    reviewCount: 87,
    image: PRODUCT_IMAGES[5],
    category: 'Brightening',
    inStock: true
  }
];

// Filter categories with icons
const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Products', icon: <FiFilter className="h-4 w-4" /> },
  { id: 'bestsellers', label: 'Bestsellers', icon: <FiTrendingUp className="h-4 w-4" /> },
  { id: 'new', label: 'New Arrivals', icon: <FiAward className="h-4 w-4" /> },
  { id: 'nourishing', label: 'Nourishing', icon: "💫" },
  { id: 'calming', label: 'Calming', icon: "🌙" },
  { id: 'detox', label: 'Detox', icon: "✨" },
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
    if (filter === 'bestsellers') return product.badge === 'Bestseller';
    if (filter === 'new') return product.badge === 'New';
    if (filter === 'nourishing') return product.category === 'Nourishing';
    if (filter === 'calming') return product.category === 'Calming';
    if (filter === 'detox') return product.category === 'Detox';
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

      {/* Enhanced Hero Section */}
      <div className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-teal-50 to-lime-50">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={optimizeImageUrl('https://images.unsplash.com/photo-1584302179602-e4d3e7650d4a', 2070, 1000)}
            alt="Artisan soap collection on display"
            className="w-full h-full object-cover opacity-20"
            fallbackType="hero"
            width={2070}
            height={1000}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              The Amaya Collection
            </h1>
            <p className="font-sans text-slate-600 max-w-2xl mx-auto text-lg">
              Handcrafted goat milk soaps made with organic ingredients and traditional Bulgarian methods
            </p>
          </div>

          {/* Hero Visuals */}
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={optimizeImageUrl('https://images.unsplash.com/photo-1571781926291-c477ebfd024b', 300, 300)}
                alt="Soap bars arranged beautifully"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                fallbackType="product"
                width={300}
                height={300}
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={optimizeImageUrl('https://images.unsplash.com/photo-1594035910387-df1d6b81b590', 300, 300)}
                alt="Close-up of soap texture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                fallbackType="product"
                width={300}
                height={300}
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={optimizeImageUrl('https://images.unsplash.com/photo-1544966503-7cc5ac882d5e', 300, 300)}
                alt="Luxury soap packaging"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                fallbackType="product"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Enhanced Filter/Sort Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              {FILTER_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-3 rounded-xl font-sans font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                    filter === category.id 
                      ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg' 
                      : 'bg-white text-slate-700 hover:bg-teal-50 border border-slate-200'
                  }`}
                  aria-label={`Filter by ${category.label}`}
                >
                  {typeof category.icon === 'string' ? (
                    <span>{category.icon}</span>
                  ) : (
                    category.icon
                  )}
                  {category.label}
                </button>
              ))}
            </div>

            <div className="flex items-center bg-white p-3 rounded-xl border border-slate-200">
              <label htmlFor="sort" className="font-sans text-sm font-medium text-slate-700 mr-3">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-sm bg-transparent border-none focus:ring-0 focus:outline-none"
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
                className="bg-gradient-to-r from-teal-600 to-teal-700 text-white font-sans font-medium px-6 py-3 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {sortedProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={() => addToCart(product)}
                    index={index}
                  />
                ))}
              </div>

              {/* Storytelling Section */}
              <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <ImageWithFallback
                      src={optimizeImageUrl('https://images.unsplash.com/photo-1589985270826-4b7fe135a9c4', 600, 500)}
                      alt="Artisan soap making process"
                      className="rounded-2xl shadow-lg w-full h-auto object-cover"
                      fallbackType="about"
                      width={600}
                      height={500}
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-slate-800 mb-6">
                      Crafting Luxury, One Bar at a Time
                    </h2>
                    <p className="font-sans text-slate-600 mb-6 leading-relaxed">
                      Each Amaya soap begins with fresh goat milk from free-range herds in the Bulgarian mountains. 
                      We combine traditional cold-process methods with modern skincare science to create bars that 
                      are both luxurious and effective.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-serif font-bold text-teal-600 mb-2">4-6 Weeks</div>
                        <div className="text-sm text-slate-600">Hand-curing time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-serif font-bold text-teal-600 mb-2">100%</div>
                        <div className="text-sm text-slate-600">Natural ingredients</div>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white font-sans font-medium px-6 py-3 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300">
                      Learn About Our Process
                    </button>
                  </div>
                </div>
              </div>

              {/* Recommended For You Section */}
              <div className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                  Recommended For You
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.filter(p => p.badge === 'Bestseller').slice(0, 3).map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={() => addToCart(product)}
                      index={index}
                    />
                  ))}
                </div>
              </div>

              {/* Category Highlights */}
              <div className="bg-gradient-to-r from-teal-50 to-lime-50 rounded-2xl p-8 md:p-12">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                  Find Your Perfect Match
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'For Dry Skin',
                      description: 'Nourishing blends with honey, oats, and shea butter',
                      image: optimizeImageUrl('https://images.unsplash.com/photo-1594035910387-df1d6b81b590', 400, 300),
                      count: '4 products'
                    },
                    {
                      title: 'For Sensitive Skin',
                      description: 'Gentle formulations with calming botanicals',
                      image: optimizeImageUrl('https://images.unsplash.com/photo-1556228720-195a672e8a03', 400, 300),
                      count: '3 products'
                    },
                    {
                      title: 'For Oily Skin',
                      description: 'Clarifying blends with charcoal and citrus',
                      image: optimizeImageUrl('https://images.unsplash.com/photo-1571781926291-c477ebfd024b', 400, 300),
                      count: '2 products'
                    }
                  ].map((category, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                      <div className="h-48 overflow-hidden">
                        <ImageWithFallback
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          fallbackType="product"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl font-bold text-slate-800 mb-2">{category.title}</h3>
                        <p className="font-sans text-slate-600 mb-4 text-sm">{category.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-sans text-sm text-teal-600 font-medium">{category.count}</span>
                          <button className="font-sans text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center">
                            Explore
                            <FiArrowRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}