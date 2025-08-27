// Updated src/pages/Journal.tsx
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ARTICLES, PLACEHOLDERS } from '../utils/constants';
import ImageWithFallback from '../components/ImageWithFallback';

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
      
      <div className="bg-slate-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-4">The Amaya Journal</h1>
            <p className="font-sans text-slate-600 max-w-2xl mx-auto">
              Skincare wisdom, artisan stories, and the science behind our formulations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map(article => (
              <article key={article.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
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
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-sans text-sm text-slate-500">{article.date}</span>
                    <span className="font-sans text-xs text-teal-600 bg-teal-100 px-2 py-1 rounded-full">
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-bold mb-3 text-slate-800">{article.title}</h2>
                  <p className="font-sans text-slate-600 mb-4">{article.excerpt}</p>
                  <Link 
                    to={`/journal/${article.id}`} 
                    className="font-sans text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center group"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}