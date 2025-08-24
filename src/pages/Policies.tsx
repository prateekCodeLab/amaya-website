// Policies.jsx
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { Helmet } from 'react-helmet-async';

export default function Policies() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const policySections = [
    {
      id: 'shipping',
      title: 'Shipping Policy',
      content: [
        "We carefully package all orders in eco-friendly materials",
        "Standard shipping: 3-5 business days",
        "Express shipping: 1-2 business days (additional fee)",
        "International shipping available to 50+ countries",
        "Free shipping on orders over $75",
        "Tracking number provided for all orders"
      ]
    },
    {
      id: 'returns',
      title: 'Returns & Exchanges',
      content: [
        "7-day return policy from delivery date",
        "Items must be unused and in original packaging",
        "Refunds processed within 3-5 business days",
        "Shipping costs non-refundable",
        "Exchanges subject to product availability",
        "Damaged items will be replaced at no cost"
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy & Sustainability',
      content: [
        "We never sell or share customer data",
        "All transactions secured with 256-bit encryption",
        "Packaging is 100% recyclable or biodegradable",
        "Carbon-neutral shipping through offset programs",
        "5% of profits donated to environmental causes",
        "Ethically sourced ingredients from certified suppliers"
      ]
    }
  ];

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>Amaya | Policies</title>
        <meta name="description" content="Learn about Amaya's shipping, returns, and privacy policies" />
      </Helmet>
      
      <div className="bg-cream-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
              Our Policies & Commitments
            </h1>
            
            <div className="space-y-12">
              {policySections.map((section) => (
                <section 
                  key={section.id} 
                  id={section.id}
                  className="scroll-mt-16 animate-fade-in"
                >
                  <h2 className="font-serif text-2xl font-bold mb-6 text-slate-800 border-b border-cream-200 pb-2">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li 
                        key={index} 
                        className="font-sans text-slate-600 flex items-start"
                      >
                        <span className="text-gold-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="mt-16 bg-cream-100 p-6 rounded-lg animate-fade-in">
              <h3 className="font-serif text-xl font-bold mb-4 text-slate-800">Questions?</h3>
              <p className="font-sans text-slate-600 mb-4">
                Our customer care team is available Monday-Friday, 9am-5pm EST.
              </p>
              <a 
                href="mailto:care@amayasoaps.com" 
                className="font-sans text-gold-600 hover:text-gold-700 transition-colors inline-flex items-center"
              >
                Email Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}