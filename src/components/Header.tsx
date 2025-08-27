import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingBag, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import CartDropdown from './CartDropdown';
import { NAV_LINKS } from '../utils/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useCart();
  const location = useLocation();

  // Close cart and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartOpen && !(event.target as Element).closest('.cart-container')) {
        setCartOpen(false);
      }
      if (isOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [cartOpen, isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleMobileLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Search for:', searchQuery);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  return (
    <header className="bg-white text-slate-800 sticky top-0 z-50 border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-serif font-bold text-teal-600 hover:text-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
            aria-label="Amaya Home"
          >
            Amaya
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-sans font-medium hover:text-teal-600 transition-colors duration-300 py-2 px-1 border-b-2 border-transparent hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Search button */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:text-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-full"
              aria-label="Search products"
            >
              <FiSearch className="h-5 w-5" />
            </button>

            {/* Cart button */}
            <button 
              onClick={() => setCartOpen(!cartOpen)}
              className="p-2 hover:text-teal-600 transition-colors relative focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-full cart-container"
              aria-label={`Cart ${cartItems.length > 0 ? `(${cartItems.length} items)` : ''}`}
            >
              <FiShoppingBag className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:text-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded mobile-menu-container"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <form onSubmit={handleSearchSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  autoFocus
                />
                <button 
                  type="submit"
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden mt-4 border-t border-slate-200 pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block font-sans font-medium hover:text-teal-600 transition-colors duration-300 py-2 px-2 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    onClick={handleMobileLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cart Dropdown */}
      <CartDropdown isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}