import { motion } from 'motion/react';
import { useState } from 'react';
import React from 'react';

const images = [
  { src: '/g1.jpeg', alt: 'Plots in Bihta Patna - land for sale in patna' },
  { src: '/g2.jpeg', alt: 'Land near AIIMS Patna - residential plot in patna' },
  { src: '/g3.jpeg', alt: 'Residential land in Danapur - buy land in patna' },
  { src: '/g4.jpeg', alt: 'Plots on Bailey Road Patna - plot for sale in patna' },
  { src: '/g5.jpeg', alt: 'Plots near Patna airport - plots in patna bihar' },
  { src: '/g6.jpeg', alt: 'Land in Patliputra Colony - gated community plots in patna' },
  { src: '/g7.jpeg', alt: 'Affordable residential plots in patna - buy land in patna' }
];

function GalleryImage({ img, index, className }: { key?: React.Key | number | string, img: { src: string, alt: string }, index: number, className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative overflow-hidden group rounded-sm border border-white/5 ${className}`}
    >
      {/* Skeleton Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-white/10 animate-pulse z-10 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
        </div>
      )}

      <img 
        src={img.src} 
        alt={img.alt} 
        width="800"
        height="600"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${
          isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
        loading="lazy"
        decoding="async"
      />
      {/* Sunlight/Mood Overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none z-0 group-hover:opacity-0 transition-opacity duration-300"></div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl text-white">
            <h4 className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              A Glimpse of <span className="italic opacity-80">Excellence</span>
            </h2>
          </div>
        </div>

        {/* CSS Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <GalleryImage 
              key={index} 
              img={img} 
              index={index} 
              className={index === 1 || index === 4 ? 'row-span-1 md:row-span-2 h-64 md:h-[500px]' : 'h-64 md:h-[240px]'}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
