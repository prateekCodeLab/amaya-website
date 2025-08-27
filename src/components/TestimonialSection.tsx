// Updated src/components/TestimonialSection.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Skincare Enthusiast',
      content: 'These soaps have completely transformed my skincare routine. My skin has never felt so soft and nourished!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Organic Lifestyle Blogger',
      content: 'The quality and craftsmanship are exceptional. You can tell these are made with love and care.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Beauty Influencer',
      content: 'The lavender soap is my absolute favorite. It\'s so calming and leaves my skin feeling incredible.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&q=80'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Wellness Coach',
      content: 'As someone with sensitive skin, I\'m amazed at how gentle yet effective these soaps are. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&q=80'
    }
  ];

  const brands = [
    { name: 'Vogue', logo: 'VOGUE' },
    { name: 'Elle', logo: 'ELLE' },
    { name: 'Allure', logo: 'ALLURE' },
    { name: 'Cosmopolitan', logo: 'COSMO' },
    { name: 'Well+Good', logo: 'WELL+GOOD' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Loved by Thousands
          </h2>
          <p className="font-sans text-slate-300 max-w-2xl mx-auto text-lg">
            Discover why our customers keep coming back for the Amaya experience.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <p className="font-sans text-slate-200 mb-8 text-lg italic text-center leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-teal-500"
                  />
                  <div className="text-left">
                    <div className="font-sans font-semibold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="font-sans text-teal-300 text-sm">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-700/50 hover:bg-slate-600/70 p-3 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-700/50 hover:bg-slate-600/70 p-3 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="h-6 w-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-teal-500 scale-125' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Brand logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <p className="font-sans text-slate-400 mb-8 text-sm uppercase tracking-wider">
            As featured in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <div 
                key={brand.name}
                className="text-slate-400 hover:text-teal-400 transition-colors font-serif font-bold text-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {brand.logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;