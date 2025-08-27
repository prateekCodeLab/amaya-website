import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import './index.css';

// Lazy load pages for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const Shop = React.lazy(() => import('./pages/Shop'));
const About = React.lazy(() => import('./pages/About'));
const Journal = React.lazy(() => import('./pages/Journal'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Policies = React.lazy(() => import('./pages/Policies'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Layout component
const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <CartProvider>
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
          </Suspense>
        </CartProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;

// Export routes for router.tsx
export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'shop', element: <Shop /> },
          { path: 'about', element: <About /> },
          { path: 'journal', element: <Journal /> },
          { path: 'contact', element: <Contact /> },
          { path: 'policies', element: <Policies /> },
          { path: '*', element: <NotFound /> },
        ]
      }
    ]
  }
];