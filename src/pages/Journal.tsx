// Updated src/pages/Journal.tsx
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ARTICLES, PLACEHOLDERS, FEATURED_ARTICLE } from '../utils/constants';
import ImageWithFallback from '../components/ImageWithFallback';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

export default function Journal() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, articleId: number) => {
    const target = e.target as HTMLImageElement;
    console.warn(`Article image failed to load for article ${articleId}`);
    target.src = PLACEHOLDERS.article;
  };

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

      {/* Featured Article Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
            Featured Story
          </h2>
          
          <div className="bg-gradient-to-r from-teal-50 to-lime-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="h-64 lg:h-96 overflow-hidden">
                <ImageWithFallback
                  src={FEATURED_ARTICLE.image}
                  alt={FEATURED_ARTICLE.title}
                  className="w-full h-full object-cover"
                  fallbackType="article"
                  width={600}
                  height={400}
                />
              </div>
              
              <div className="p-8">
                <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                  {FEATURED_ARTICLE.category}
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  {FEATURED_ARTICLE.title}
                </h3>
                
                <p className="font-sans text-slate-600 mb-6 text-lg leading-relaxed">
                  {FEATURED_ARTICLE.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-slate-500">
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
                  className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-300 group"
                >
                  Read Featured Article
                  <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Articles Grid */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
            Latest Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map(article => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackType="article"
                    width={400}
                    height={200}
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  
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
            <button className="bg-white text-teal-600 border border-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </>
  );
}