// Fixed src/components/IconSection.tsx
import React from 'react';
import { FiTruck, FiAward, FiHeart, FiStar, FiRefreshCw } from 'react-icons/fi';
// FiLeaf doesn't exist in react-icons/fi, using FiHeart instead for the leaf icon

const IconSection: React.FC = () => {
  const features = [
    {
      icon: <FiTruck className="h-8 w-8" />,
      title: "Free Shipping",
      description: "Free shipping on orders over $50"
    },
    {
      icon: <FiAward className="h-8 w-8" />,
      title: "Quality Guarantee",
      description: "30-day money back guarantee"
    },
    {
      icon: <FiHeart className="h-8 w-8" />, // Using FiHeart for natural/organic
      title: "100% Natural",
      description: "Made with organic ingredients"
    },
    {
      icon: <FiHeart className="h-8 w-8" />,
      title: "Handcrafted",
      description: "Artisan made with care"
    },
    {
      icon: <FiStar className="h-8 w-8" />,
      title: "Award Winning",
      description: "Recognized for excellence"
    },
    {
      icon: <FiRefreshCw className="h-8 w-8" />,
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
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex justify-center mb-4 text-teal-600 group-hover:text-teal-700 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
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