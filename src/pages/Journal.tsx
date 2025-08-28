// Updated src/pages/Journal.tsx
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ARTICLES, PLACEHOLDERS, FEATURED_ARTICLE } from '../utils/constants';
import ImageWithFallback from '../components/ImageWithFallback';
import NewsletterSection from '../components/NewsletterSection';
import { FiCalendar, FiClock, FiArrowRight, FiBookmark, FiTrendingUp, FiEye } from 'react-icons/fi';
import { useState } from 'react';

export default function Journal() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = [
    { id: 'All', label: 'All Stories', icon: '📚' },
    { id: 'Skincare Wisdom', label: 'Skincare Wisdom', icon: '✨' },
    { id: 'Ingredient Spotlight', label: 'Ingredients', icon: '🔍' },
    { id: 'Craft Techniques', label: 'Craft', icon: '🛠️' },
    { id: 'Artisan Stories', label: 'Artisans', icon: '👩‍🎨' },
    { id: 'Self-Care Rituals', label: 'Self-Care', icon: '🧘' },
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? ARTICLES 
    : ARTICLES.filter(article => article.category === selectedCategory);

  // Popular articles for the "Top Read" section
  const popularArticles = [...ARTICLES].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Amaya | Journal</title>
        <meta name="description" content="Skincare wisdom, artisan stories, and the science behind our formulations" />
      </Helmet>
      
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-br from-teal-50 via-white to-lime-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-teal-200/30 rounded-full backdrop-blur-sm"></div>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-lime-200/30 rounded-full backdrop-blur-sm"></div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6 relative z-10">
              The Amaya Journal
            </h1>
            <p className="font-sans text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Skincare wisdom, artisan stories, and the science behind our formulations
            </p>
          </div>
        </div>
      </div>

      {/* Featured Article Section - Enhanced */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-16 group">
            {/* Editor's Pick Badge */}
            <div className="absolute top-6 left-6 z-20">
              <span className="inline-flex items-center px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-medium">
                <FiBookmark className="h-4 w-4 mr-1" />
                Editor's Pick
              </span>
            </div>
            
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <ImageWithFallback
                src={FEATURED_ARTICLE.image}
                alt={FEATURED_ARTICLE.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                fallbackType="article"
                width={1200}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
                  {FEATURED_ARTICLE.category}
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  {FEATURED_ARTICLE.title}
                </h3>
                
                <p className="font-sans text-lg mb-6 leading-relaxed max-w-3xl">
                  {FEATURED_ARTICLE.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-white/90">
                    <div className="flex items-center">
                      <FiCalendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{FEATURED_ARTICLE.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{FEATURED_ARTICLE.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to={`/journal/${FEATURED_ARTICLE.id}`} 
                  className="inline-flex items-center bg-white text-teal-700 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-all duration-300 group shadow-md hover:shadow-lg"
                >
                  Read Featured Article
                  <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular This Month Section */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-800">
              <FiTrendingUp className="inline h-6 w-6 text-teal-600 mr-2" />
              Popular This Month
            </h2>
            <Link to="/journal" className="font-sans text-teal-600 hover:text-teal-700 font-medium flex items-center">
              View All
              <FiArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackType="article"
                    width={400}
                    height={200}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-teal-800 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center text-white text-xs bg-slate-900/70 backdrop-blur-sm px-2 py-1 rounded-full">
                    <FiEye className="h-3 w-3 mr-1" />
                    {(article.id * 123).toLocaleString()} views
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-slate-500">
                      <FiCalendar className="h-3 w-3 mr-1" />
                      <span className="text-xs">{article.date}</span>
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-xl font-bold mb-3 text-slate-800 line-clamp-2">{article.title}</h2>
                  <p className="font-sans text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                  
                  <Link 
                    to={`/journal/${article.id}`} 
                    className="font-sans text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors inline-flex items-center"
                  >
                    Read More
                    <FiArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-700'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Articles Grid */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
            {selectedCategory === 'All' ? 'Latest Stories' : selectedCategory}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article 
                key={article.id} 
                className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`${index === 0 ? 'h-64' : 'h-48'} overflow-hidden relative`}>
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackType="article"
                    width={index === 0 ? 800 : 400}
                    height={index === 0 ? 400 : 200}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-teal-800 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-slate-500">
                      <FiCalendar className="h-3 w-3 mr-1" />
                      <span className="text-xs">{article.date}</span>
                    </div>
                    <div className="flex items-center text-teal-600">
                      <FiClock className="h-3 w-3 mr-1" />
                      <span className="text-xs font-medium">{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-xl font-bold mb-3 text-slate-800 line-clamp-2">{article.title}</h2>
                  <p className="font-sans text-slate-600 mb-4 text-base leading-relaxed flex-grow">{article.excerpt}</p>
                  
                  <Link 
                    to={`/journal/${article.id}`} 
                    className="font-sans text-teal-600 hover:text-teal-700 font-medium transition-colors inline-flex items-center group/readmore mt-auto"
                  >
                    Read More
                    <FiArrowRight className="h-4 w-4 ml-1 group-hover/readmore:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white text-teal-600 border border-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition-all duration-300 hover-lift">
              Load More Articles
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Newsletter CTA */}
      <div className="bg-gradient-to-r from-teal-50 to-lime-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-slate-800 mb-4">
              Join Our Journal Community
            </h2>
            <p className="font-sans text-slate-600 mb-8">
              Get exclusive articles, skincare tips, and special offers delivered straight to your inbox. 
              Be the first to know about new formulations and artisan stories.
            </p>
            <NewsletterSection />
          </div>
        </div>
      </div>
    </>
  );
}