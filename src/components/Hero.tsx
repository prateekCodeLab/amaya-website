// Updated src/components/Hero.tsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import ImageWithFallback from './ImageWithFallback';

const Hero = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-teal-50 via-white to-lime-50"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating soap bubbles */}
        <motion.div
          className="absolute top-20 left-10% w-16 h-16 bg-teal-200/30 rounded-full backdrop-blur-sm"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '0s' }}
        />
        <motion.div
          className="absolute top-40 right-15% w-12 h-12 bg-coral-200/30 rounded-full backdrop-blur-sm"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          className="absolute bottom-30 left-20% w-14 h-14 bg-lime-200/30 rounded-full backdrop-blur-sm"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          className="absolute bottom-20 right-25% w-10 h-10 bg-teal-300/20 rounded-full backdrop-blur-sm"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '3s' }}
        />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-teal-100/50 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-teal-700">Handcrafted with love</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"
            >
              Where Nature's{' '}
              <span className="text-teal-600">Purity</span>{' '}
              Meets Artisan Craft
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="font-sans text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience the luxury of handcrafted goat milk soaps, made with organic ingredients 
              and traditional Bulgarian methods for unparalleled skincare perfection.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/shop"
                className="group relative bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-teal-200 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center justify-center"
              >
                <span className="relative z-10">Explore Collection</span>
                <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </Link>

              <button className="group flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-teal-600 hover:bg-teal-600 hover:text-white hover:border-teal-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors mr-3">
                  <FiPlay className="h-5 w-5 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                Watch Our Story
              </button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start mt-12 space-x-8 text-slate-600"
            >
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-teal-600">4.9★</div>
                <div className="text-sm">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-teal-600">10K+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-teal-600">100%</div>
                <div className="text-sm">Natural Ingredients</div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              {/* Main soap image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="relative z-10"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1594035910387-df1d6b81b590?w=600&h=600&fit=crop&crop=center&q=80"
                  alt="Luxury handcrafted goat milk soap"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  width={600}
                  height={600}
                />
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-teal-200/30 rounded-2xl backdrop-blur-sm"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-lime-200/30 rounded-2xl backdrop-blur-sm"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-lime-400/10 rounded-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="animate-bounce w-6 h-10 border-2 border-teal-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;