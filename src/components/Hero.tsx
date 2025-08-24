import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { PLACEHOLDERS } from '../utils/constants';

const HERO_IMAGE = `data:image/svg+xml;base64,${btoa(`
  <svg width="2070" height="1000" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#2AB7CA;stop-opacity:0.7" />
        <stop offset="50%" style="stop-color:#4ECDC4;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#A3D93B;stop-opacity:0.7" />
      </linearGradient>
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
        <feBlend in="SourceGraphic" mode="soft-light" />
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#heroGrad)" />
    <rect width="100%" height="100%" fill="transparent" filter="url(#noiseFilter)" opacity="0.03" />
    <text x="50%" y="45%" font-family="Playfair Display, serif" font-size="80" 
          text-anchor="middle" fill="white" font-weight="bold" opacity="0.95">
      Amaya Luxury Soaps
    </text>
    <text x="50%" y="55%" font-family="Montserrat, sans-serif" font-size="24" 
          text-anchor="middle" fill="white" opacity="0.9">
      Handcrafted with Tradition, Perfected with Care
    </text>
  </svg>
`)}`;

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageError = () => {
    console.warn('Hero image failed to load, using fallback');
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const imageSrc = imageError ? PLACEHOLDERS.hero : HERO_IMAGE;

  return (
    <div 
      ref={heroRef}
      className="relative h-screen max-h-[1000px] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-400/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-coral-400/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-lime-400/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <LazyLoadImage
        src={imageSrc}
        alt="Amaya Luxury Soaps - Handcrafted goat milk soaps"
        className="w-full h-full object-cover absolute inset-0 transform scale-105 transition-transform duration-1000 ease-out-quint group-hover:scale-110"
        effect="blur"
        placeholderSrc={PLACEHOLDERS.hero}
        onError={handleImageError}
        onLoad={handleImageLoad}
        width="2070"
        height="1000"
      />
      
      <div className="hero-overlay flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl z-10">
          <h1 className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ease-out-quint ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
          }`}>
            Where <span className="text-gradient">Purity</span> Meets Luxury
          </h1>
          <p className={`font-sans text-lg sm:text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out-quint delay-150 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
          }`}>
            Handcrafted using traditional Bulgarian methods with ethically sourced goat milk and organic botanicals for unparalleled skincare luxury.
          </p>
          <div className={`transition-all duration-1000 ease-out-quint delay-300 ${
            isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
          }`}>
            <Link
              to="/shop"
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Discover Our Collection</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="animate-bounce w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
}