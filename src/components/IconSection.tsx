export default function IconSection() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🐐',
              title: 'Pure Goat Milk',
              description: 'Rich in vitamins for nourished skin'
            },
            {
              icon: '🌿', 
              title: 'Natural Ingredients',
              description: 'Organic botanicals and essential oils'
            },
            {
              icon: '✋',
              title: 'Handcrafted',
              description: 'Small batches with traditional methods'
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-2 text-slate-800">
                {item.title}
              </h3>
              <p className="font-sans text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}