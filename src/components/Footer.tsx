// Updated Footer.tsx
import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';
import { FiInstagram, FiFacebook, FiTwitter, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const links = [
    { name: 'Shipping Policy', path: '/policies#shipping' },
    { name: 'Returns Policy', path: '/policies#returns' },
    { name: 'Privacy Policy', path: '/policies#privacy' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const socialMedia = [
    { name: 'Instagram', icon: <FiInstagram className="h-5 w-5" />, url: 'https://instagram.com' },
    { name: 'Facebook', icon: <FiFacebook className="h-5 w-5" />, url: 'https://facebook.com' },
    { name: 'Pinterest', icon: <FiHeart className="h-5 w-5" />, url: 'https://pinterest.com' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-2xl font-bold text-teal-400 mb-4 inline-block hover:text-teal-300 transition-colors">
              Amaya
            </Link>
            <p className="font-sans text-slate-300 mb-6 leading-relaxed">
              Handcrafted goat milk soaps blending traditional European methods with modern luxury.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400 transition-colors p-2 bg-slate-800 rounded-lg hover:bg-slate-700"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-serif text-xl font-bold text-teal-400 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-slate-300 hover:text-teal-400 transition-colors flex items-center group py-1"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span> 
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-serif text-xl font-bold text-teal-400 mb-4">Stay Updated</h4>
            <p className="font-sans text-slate-300 mb-4">
              Get exclusive offers and skincare tips delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="font-sans text-slate-400 text-base">
            © {new Date().getFullYear()} Amaya Luxury Soaps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}