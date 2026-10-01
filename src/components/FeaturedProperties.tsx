import { motion } from 'motion/react';
import { MapPin, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackBrochureDownload } from '../utils/analytics';

const properties = [
  {
    id: 1,
    name: 'Embassy Capital',
    subtitle: 'Luxury Gated Society • Shivala More',
    location: 'Shivala More Bodhgawa, Patna',
    price: '₹21 L onwards | 800 sq ft',
    bhk: 'Ultra Luxury Gated Society',
    area: '4,500 sq.ft',
    image: '/embassy.webp',
    tags: ['7 Min to Saguna More', 'Boundary Wall'],
    pdf: 'shivala.pdf',
    slug: '/plots-in-shivala-patna',
  },
  {
    id: 2,
    name: 'IT Park',
    subtitle: 'Premium Gated Plots • Bihta Corridor',
    location: 'Opposite to NIT, Bihta Patna',
    price: '₹28 L onwards | 1000 sq ft',
    bhk: 'Residential & Commercial Plots',
    area: '3,200 sq.ft',
    image: '/it.webp',
    tags: ['IT Corridor', 'RERA Approved'],
    pdf: 'it.pdf',
    slug: '/plots-for-sale-in-bihta',
  },
  {
    id: 3,
    name: 'Seven Crown',
    subtitle: 'Eco-Living Residential Plots • Rajgir',
    location: 'Silao, Rajgir, Nalanda',
    price: '₹22 L onwards | 900 sq ft',
    bhk: 'Gated Society Plots in Rajgir',
    area: '2,800 sq.ft',
    image: '/rajgir.webp',
    tags: ['Nalanda Tourism Corridor', 'Green Living'],
    pdf: 'rajgir_brosher.pdf',
    slug: '/plots-for-sale-in-rajgir',
  }
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <p className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">Verified Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Featured <span className="italic opacity-80">Plotted Townships</span>
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed font-light">
              Explore our verified portfolio of premier gated township land developments across Patna, Bihta, and Rajgir, crafted for secure family living and maximum capital growth.
            </p>
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
              className="group glass overflow-hidden relative flex flex-col rounded-xl"
            >
              {/* Image Box */}
              <Link to={prop.slug} className="block relative h-64 overflow-hidden w-full border-b border-white/5">
                <img
                  src={prop.image}
                  alt={`${prop.name} - ${prop.subtitle} in ${prop.location} - JameenWale`}
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {prop.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/60 text-gold backdrop-blur-md border border-gold/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between z-10 w-full">
                <div>
                  <div className="flex items-center text-white/60 text-xs mb-2 font-semibold uppercase tracking-widest">
                    <MapPin className="w-3.5 h-3.5 mr-1 accent-gold shrink-0" />
                    {prop.location}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:accent-gold transition-colors tracking-tight">
                    <Link to={prop.slug} className="hover:underline">
                      {prop.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-gold/90 font-medium mb-3">
                    {prop.subtitle}
                  </p>
                  <p className="text-xl font-bold text-white mb-5 pb-4 border-b border-white/10">
                    {prop.price}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Link
                      to={prop.slug}
                      aria-label={`View full details for ${prop.name}`}
                      className="py-3 px-3 bg-gold text-black rounded-sm font-bold uppercase tracking-wider text-[11px] flex items-center justify-center hover:opacity-90 transition-all text-center"
                    >
                      Project Details <ArrowRight className="w-3.5 h-3.5 ml-1 shrink-0" />
                    </Link>
                    <a
                      href={prop.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackBrochureDownload(prop.name)}
                      aria-label={`Download brochure for ${prop.name}`}
                      className="py-3 px-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-sm font-bold uppercase tracking-wider text-[11px] flex items-center justify-center transition-colors text-center"
                    >
                      <Download className="w-3.5 h-3.5 mr-1 text-gold shrink-0" /> Brochure
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Regional Corridors Exploration Links */}
        <div className="mt-12 p-6 glass rounded-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Explore Corridors by Location</h3>
            <p className="text-xs text-white/60 mt-0.5">Direct access to verified residential land clusters across Patna &amp; Bihar</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/plots-for-sale-in-patna" className="px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 hover:border-gold text-xs font-semibold text-white/80 hover:text-gold transition-colors">Patna Master Hub</Link>
            <Link to="/plots-for-sale-in-bihar" className="px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 hover:border-gold text-xs font-semibold text-white/80 hover:text-gold transition-colors">Bihar Overview</Link>
            <Link to="/plots-for-sale-in-danapur" className="px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 hover:border-gold text-xs font-semibold text-white/80 hover:text-gold transition-colors">Danapur Corridor</Link>
            <Link to="/plots-for-sale-in-bihta" className="px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 hover:border-gold text-xs font-semibold text-white/80 hover:text-gold transition-colors">Bihta IT Hub</Link>
            <Link to="/plots-for-sale-in-naubatpur" className="px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 hover:border-gold text-xs font-semibold text-white/80 hover:text-gold transition-colors">Naubatpur Ring Road</Link>
            <Link to="/plots-for-sale-in-rajgir" className="px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 hover:border-gold text-xs font-semibold text-white/80 hover:text-gold transition-colors">Rajgir Heritage</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
