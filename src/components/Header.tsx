import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import CartDropdown from './CartDropdown';
import { NavLink as NavLinkType } from '../types';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();

  const navLinks: NavLinkType[] = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartOpen && !(event.target as Element).closest('.cart-container')) {
        setCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [cartOpen]);

  const handleMobileLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-sans font-medium hover:text-teal-600 transition-colors duration-300 py-2 px-1 border-b-2 border-transparent hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setCartOpen(!cartOpen)}
              className="p-2 hover:text-teal-600 transition-colors relative focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-full cart-container"
              aria-label={`Cart ${cartItems.length > 0 ? `(${cartItems.length} items)` : ''}`}
            >
              <FiShoppingBag className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:text-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
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

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <nav className="space-y-3 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block font-sans font-medium hover:text-teal-600 transition-colors duration-300 py-3 px-2 border-l-4 border-teal-500 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                onClick={handleMobileLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Cart Dropdown */}
      <CartDropdown isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}