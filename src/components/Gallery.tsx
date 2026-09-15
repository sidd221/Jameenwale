import GalleryModalAccordion from './ui/gallery-modal-accordion';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 text-white">
          <h4 className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">Portfolio</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            A Glimpse of <span className="italic opacity-80">Excellence</span>
          </h2>
          <p className="text-white/70 text-sm mt-3 font-light max-w-xl mx-auto">
            Explore our landmark residential & commercial plot developments across Patna, Bihta, and Danapur. Click any project to view full specifications.
          </p>
        </div>

        {/* Interactive Modal Accordion with Auto 5s Swipe */}
        <GalleryModalAccordion autoPlayInterval={5000} />

      </div>
    </section>
  );
}

