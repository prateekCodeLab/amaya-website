import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { optimizeImageUrl } from '../utils/constants';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyYUI3Q0E7c3RvcC1vcGFjaXR5OjAuNCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2EzZDkzYjtzdG9wLW9wYWNpdHk6MC40Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjNjQ3NDhCIj5BYm91dCBBbWF5YTwvdGV4dD48L3N2Zz4=';
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-slate-800">
            The Amaya Story
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4 text-slate-800">Our Heritage</h2>
              <p className="font-sans text-slate-600 mb-6 leading-relaxed">
                Founded in 2015, Amaya's roots trace back to a small Bulgarian village where goat milk soap making was a centuries-old tradition. 
                Each batch begins with fresh milk from free-range goats raised in the Balkan mountains.
              </p>
              <p className="font-sans text-slate-600 leading-relaxed">
                Our founder, Elena Petrova, rediscovered these artisanal methods while documenting traditional crafts. 
                After years of perfecting the recipes, Amaya was born - bringing European skincare heritage to modern luxury.
              </p>
            </div>
            <div className="flex items-center">
              <img 
                src={optimizeImageUrl('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e', 800, 300)} 
                alt="Amaya founder with artisans" 
                className="rounded-lg shadow-lg w-full h-auto object-cover min-h-[300px]"
                loading="lazy"
                onError={handleImageError}
              />
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm mb-16">
            <h2 className="font-serif text-3xl font-bold text-center mb-12 text-slate-800">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  icon: '🌿',
                  title: 'Nature First',
                  description: 'We use only organic goat milk, cold-pressed oils, and natural botanicals'
                },
                {
                  icon: '🧡',
                  title: 'Crafted with Care',
                  description: 'Each bar is hand-poured and cured for 4-6 weeks using traditional methods'
                },
                {
                  icon: '✨',
                  title: 'Luxury Reimagined',
                  description: 'We prove luxury can be sustainable, ethical, and effective'
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                  <p className="font-sans text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}