import { motion } from 'motion/react';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

const properties = [
  {
    id: 2,
    name: 'IT Park',
    location: 'Opposite to NIT',
    price: '₹28 L onwards | 1000 sq ft',
    bhk: '3 & 4 BHK Residences',
    area: '3,200 sq.ft',
    image: '/it.jpeg',
    tags: ['Sea View', 'Under Construction'],
    pdf: 'it.pdf'
  },
  {
    id: 1,
    name: 'Embassy Capital',
    location: 'Shivala more Bodhgawa',
    price: '₹21 L onwards | 800 sq ft',
    bhk: '4 BHK Ultra Luxury',
    area: '4,500 sq.ft',
    image: '/embassy.jpeg',
    tags: ['Ready to Move', 'Penthouse'],
    pdf: 'shivala.pdf'
  },
  {
    id: 3,
    name: 'Marine Park',
    location: 'Anandpur',
    price: '₹13 L onwards | 1000 sq ft',
    bhk: '3 BHK Premium',
    area: '2,800 sq.ft',
    image: '/marine.jpeg',
    tags: ['Green Living', 'New Launch'],
    pdf: 'marine.pdf'
  }
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h4 className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">Discover</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Featured <span className="italic opacity-80">Residences</span>
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed font-light">Explore our exclusive selection of premium properties, including DTCP-approved plots Patna, cheap plots in Patna Bihar, residential plots in Patna, and commercial land in Patna to find your perfect piece of real estate.</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group glass overflow-hidden relative flex flex-col"
            >
              {/* Image Box */}
              <div className="relative h-64 overflow-hidden w-full m-1 border border-white/5 rounded-t-lg">
                <img 
                  src={prop.image} 
                  alt={prop.name} 
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between z-10 w-full">
                <div>
                  <div className="flex items-center text-white/60 text-xs mb-3 font-semibold uppercase tracking-widest">
                    <MapPin className="w-3 h-3 mr-1 accent-gold" />
                    {prop.location}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:accent-gold transition-colors tracking-tight">
                    {prop.name}
                  </h3>
                  <p className="text-xl font-bold text-white mb-5 pb-5 border-b border-white/10">
                    {prop.price}
                  </p>

                  <a 
                    href={prop.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-center w-full py-3 px-4 bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 rounded-sm font-bold uppercase tracking-widest text-xs transition-colors mt-auto"
                  >
                    Get Details
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
