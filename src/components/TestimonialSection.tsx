// New src/components/TestimonialSection.tsx
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Skincare Enthusiast',
      content: 'These soaps have completely transformed my skincare routine. My skin has never felt so soft and nourished!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Organic Lifestyle Blogger',
      content: 'The quality and craftsmanship are exceptional. You can tell these are made with love and care.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Beauty Influencer',
      content: 'The lavender soap is my absolute favorite. It\'s so calming and leaves my skin feeling incredible.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&q=80'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Loved by Thousands
          </h2>
          <p className="font-sans text-slate-300 max-w-2xl mx-auto text-lg">
            Discover why our customers keep coming back for the Amaya experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-800/70 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <p className="font-sans text-slate-200 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-sans font-semibold">{testimonial.name}</div>
                  <div className="font-sans text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;