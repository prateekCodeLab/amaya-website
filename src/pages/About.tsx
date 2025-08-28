// Updated src/pages/About.tsx
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiHeart, FiTruck, FiRefreshCw } from 'react-icons/fi';
import LoadingSpinner from '../components/LoadingSpinner';
import { optimizeImageUrl } from '../utils/constants';
import ImageWithFallback from '../components/ImageWithFallback';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>Amaya | About</title>
        <meta name="description" content="Learn about Amaya's heritage and philosophy of handcrafted goat milk soaps" />
      </Helmet>
      
      {/* Hero Banner */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-teal-50 via-white to-lime-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-20 left-10% w-16 h-16 bg-teal-200/30 rounded-full backdrop-blur-sm"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-15% w-12 h-12 bg-coral-200/30 rounded-full backdrop-blur-sm"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-30 left-20% w-14 h-14 bg-lime-200/30 rounded-full backdrop-blur-sm"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-teal-100/50 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-teal-700">Our Story</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight"
            >
              Crafted with Tradition,<br />
              <span className="text-teal-600">Perfected with Care</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-sans text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Discover the heritage and passion behind Amaya's handcrafted goat milk soaps, 
              made with organic ingredients and traditional Bulgarian methods.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/shop"
                className="group relative bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-teal-200 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center justify-center"
              >
                <span className="relative z-10">Explore Collection</span>
                <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 min-h-screen">
        {/* The Amaya Story Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                The Amaya Story
              </h1>
              <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto">
                From a small Bulgarian village to your skincare routine - discover the journey of our handcrafted soaps.
              </p>
            </motion.div>
            
            {/* Heritage Section with improved layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-2 lg:order-1"
              >
                <div className="mb-2">
                  <span className="inline-block w-12 h-0.5 bg-teal-500 mb-2"></span>
                  <span className="text-sm font-semibold text-teal-700 uppercase tracking-wide">Our Heritage</span>
                </div>
                <h2 className="font-serif text-3xl font-bold mb-6 text-slate-800">
                  Rooted in Tradition,<br />Inspired by Nature
                </h2>
                <div className="space-y-5">
                  <p className="font-sans text-slate-600 leading-relaxed">
                    Founded in 2015, Amaya's roots trace back to a small Bulgarian village where goat milk soap making was a centuries-old tradition. 
                    Each batch begins with fresh milk from free-range goats raised in the pristine Balkan mountains.
                  </p>
                  <p className="font-sans text-slate-600 leading-relaxed">
                    Our founder, Elena Petrova, rediscovered these artisanal methods while documenting traditional crafts across Eastern Europe. 
                    Captivated by the purity and effectiveness of these natural soaps, she spent years perfecting the recipes.
                  </p>
                  <blockquote className="border-l-4 border-teal-500 pl-4 italic text-slate-700 my-6">
                    "I wanted to bring the authentic Bulgarian soap-making heritage to the modern world, 
                    creating products that are both luxurious and truly natural."
                  </blockquote>
                  <p className="font-sans text-slate-600 leading-relaxed">
                    Today, Amaya continues this legacy, combining time-honored techniques with sustainable practices 
                    to create soaps that nourish both skin and soul.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={optimizeImageUrl('https://images.unsplash.com/photo-1571781926291-c477ebfd024b', 600, 500)}
                    alt="Natural ingredients and soap-making process"
                    className="rounded-2xl shadow-lg w-full max-w-md h-auto object-cover"
                    fallbackType="about"
                    width={600}
                    height={500}
                  />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal-200/30 rounded-2xl backdrop-blur-sm"></div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-lime-200/30 rounded-2xl backdrop-blur-sm"></div>
                </div>
              </motion.div>
            </div>

            {/* Founder Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <ImageWithFallback
                    src={optimizeImageUrl('https://images.unsplash.com/photo-1487412720507-e7ab37603c6f', 500, 500)}
                    alt="Elena Petrova - Founder of Amaya"
                    className="rounded-2xl shadow-md w-full h-auto object-cover"
                    fallbackType="about"
                    width={500}
                    height={500}
                  />
                </div>
                <div>
                  <div className="mb-2">
                    <span className="inline-block w-12 h-0.5 bg-coral-500 mb-2"></span>
                    <span className="text-sm font-semibold text-coral-700 uppercase tracking-wide">Meet Our Founder</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4 text-slate-800">Elena Petrova</h2>
                  <p className="font-sans text-slate-600 mb-6 leading-relaxed">
                    A passionate advocate for traditional crafts and sustainable living, Elena founded Amaya with a vision to 
                    bridge heritage techniques with modern skincare needs. Her dedication to quality and authenticity continues 
                    to guide our brand's philosophy.
                  </p>
                  <div className="flex items-center mt-8">
                    <div className="w-12 h-px bg-teal-500 mr-4"></div>
                    <span className="font-serif italic text-slate-700">"Quality is remembering how precious your skin is."</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Philosophy Section - Enhanced to match Home page */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Our Philosophy
                </h2>
                <p className="font-sans text-slate-600 max-w-2xl mx-auto">
                  These core principles guide everything we do at Amaya, from ingredient sourcing to soap crafting.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <span className="text-2xl">🌿</span>,
                    title: 'Nature First',
                    description: 'We use only organic goat milk, cold-pressed oils, and natural botanicals',
                    bgColor: 'bg-teal-100',
                    textColor: 'text-teal-700'
                  },
                  {
                    icon: <FiHeart className="h-8 w-8" />,
                    title: 'Crafted with Care',
                    description: 'Each bar is hand-poured and cured for 4-6 weeks using traditional methods',
                    bgColor: 'bg-coral-100',
                    textColor: 'text-coral-700'
                  },
                  {
                    icon: <FiAward className="h-8 w-8" />,
                    title: 'Luxury Reimagined',
                    description: 'We prove luxury can be sustainable, ethical, and effective',
                    bgColor: 'bg-lime-100',
                    textColor: 'text-lime-700'
                  },
                  {
                    icon: <FiRefreshCw className="h-8 w-8" />,
                    title: 'Sustainable Sourcing',
                    description: 'Ethically sourced ingredients from local Bulgarian farmers',
                    bgColor: 'bg-slate-100',
                    textColor: 'text-slate-700'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${item.bgColor}`}
                  >
                    <div className={`flex justify-center mb-4 ${item.textColor} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="font-sans text-slate-600 text-center">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline/Milestones Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl shadow-sm p-8 md:p-12"
            >
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Our Journey
                </h2>
                <p className="font-sans text-slate-600 max-w-2xl mx-auto">
                  From humble beginnings to becoming a beloved brand, here's how Amaya has grown over the years.
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal-200 transform -translate-x-1/2"></div>
                
                <div className="space-y-12">
                  {[
                    { year: '2015', title: 'Foundation', description: 'Amaya was founded after Elena discovered traditional soap-making methods in rural Bulgaria' },
                    { year: '2017', title: 'First Product Line', description: 'Launched our initial collection of 5 goat milk soap varieties' },
                    { year: '2019', title: 'Sustainability Commitment', description: 'Implemented eco-friendly packaging and zero-waste initiatives' },
                    { year: '2021', title: 'International Recognition', description: 'Featured in Vogue and Elle for artisanal skincare excellence' },
                    { year: '2023', title: '10K Customers', description: 'Reached milestone of serving over 10,000 satisfied customers worldwide' }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow transform -translate-x-1/2 -translate-y-2"></div>
                      
                      <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-6 md:text-right' : 'md:ml-6'}`}>
                        <div className={`${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                          <div className="text-sm font-semibold text-teal-600 mb-1">{item.year}</div>
                          <h3 className="font-serif text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                          <p className="font-sans text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}