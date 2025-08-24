import Hero from '../components/Hero';
import IconSection from '../components/IconSection';
import ProductCard from '../components/ProductCard';
import { FeaturedProduct } from '../types';
import { useCart } from '../context/CartContext';

// Helper function to generate consistent product images
const generateProductImage = (seed: number, name: string) => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="homeGrad${seed}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2AB7CA;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#A3D93B;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#homeGrad${seed})" />
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" 
            text-anchor="middle" dy=".3em" fill="white" font-weight="bold">
        ${name.split(' ')[0]}
      </text>
    </svg>
  `)}`;
};

const Home = () => {
  const { addToCart } = useCart();

  const featuredProducts: FeaturedProduct[] = [
    {
      id: 1,
      name: 'Himalayan Goat Milk',
      price: 32,
      image: generateProductImage(1, 'Himalayan'),
      rating: '4.9'
    },
    {
      id: 2,
      name: 'Lavender Bliss',
      price: 32,
      image: generateProductImage(2, 'Lavender'),
      rating: '4.8'
    },
    {
      id: 3,
      name: 'Rose Petal',
      price: 36,
      image: generateProductImage(3, 'Rose'),
      rating: '5.0'
    }
  ];

  const handleAddToCart = (product: FeaturedProduct) => {
    addToCart({
      id: product.id,
      name: product.name,
      description: `${product.name} - Premium goat milk soap`,
      price: product.price,
      rating: parseFloat(product.rating),
      reviewCount: Math.floor(Math.random() * 100) + 50,
      image: product.image,
      inStock: true
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            From Village Hands to Vanity Tables
          </h2>
          <p className="font-sans text-slate-600 mb-8 leading-relaxed text-lg">
            Amaya began as a humble village tradition, where artisans crafted soap using time-honored techniques
            and the purest goat milk. Today, we bring this heritage to your modern self-care ritual, blending
            ancient wisdom with contemporary luxury.
          </p>
        </div>
      </section>

      <IconSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
            Our Signature Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={{
                  id: product.id,
                  name: product.name,
                  description: `${product.name} - Premium handcrafted goat milk soap with natural ingredients`,
                  price: product.price,
                  rating: parseFloat(product.rating),
                  reviewCount: Math.floor(Math.random() * 100) + 50,
                  image: product.image,
                  inStock: true
                }}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;