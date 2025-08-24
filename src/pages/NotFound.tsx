import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="bg-cream-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-4xl font-bold text-slate-800 mb-4">404</h1>
        <p className="font-sans text-slate-600 mb-6">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-gold-600 text-white font-sans font-medium px-6 py-3 rounded-lg hover:bg-gold-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}