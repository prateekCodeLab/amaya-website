// src/components/IconSection.tsx
import React from 'react';

// Safe icon imports with fallbacks
const IconSection: React.FC = () => {
  const features = [
    {
      icon: '🚚',
      title: "Free Shipping",
      description: "Free shipping on orders over $50"
    },
    {
      icon: '🛡️',
      title: "Quality Guarantee",
      description: "30-day money back guarantee"
    },
    {
      icon: '🌿',
      title: "100% Natural",
      description: "Made with organic ingredients"
    },
    {
      icon: '❤️',
      title: "Handcrafted",
      description: "Artisan made with care"
    },
    {
      icon: '🏆',
      title: "Award Winning",
      description: "Recognized for excellence"
    },
    {
      icon: '♻️',
      title: "Eco Friendly",
      description: "Sustainable packaging"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why Choose Amaya
          </h2>
          <p className="font-sans text-slate-600 max-w-2xl mx-auto">
            Experience the difference of handcrafted luxury soaps made with traditional methods and the finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4 text-3xl">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="font-sans text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconSection;