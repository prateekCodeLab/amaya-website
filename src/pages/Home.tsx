// Home.tsx
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import IconSection from '../components/IconSection';
import ProductShowcase from '../components/ProductShowcase';
import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewsletterSection'; // Changed import

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Amaya | Luxury Handcrafted Goat Milk Soaps</title>
        <meta name="description" content="Discover Amaya's collection of handcrafted goat milk soaps made with traditional Bulgarian methods and organic ingredients" />
      </Helmet>
      
      <div className="min-h-screen">
        <Hero />
        <IconSection />
        <ProductShowcase />
        <TestimonialSection />
        <NewsletterSection /> {/* Changed component */}
      </div>
    </>
  );
};

export default Home;