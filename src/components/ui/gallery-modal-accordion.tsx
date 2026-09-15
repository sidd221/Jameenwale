import React, { useEffect, useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Maximize2, 
  Sparkles, 
  PhoneCall, 
  Eye, 
  CheckCircle2 
} from 'lucide-react';

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  location: string;
  category: 'site' | 'brochure';
  orientation: 'vertical' | 'horizontal';
  region?: 'bihta' | 'patna' | 'rajgir' | 'danapur';
  description: string;
  tags: string[];
}

export const defaultGalleryItems: GalleryItem[] = [
  {
    id: 1,
    url: '/g1.jpeg',
    title: 'Bihta Green City Plots',
    location: 'Bihta, Patna',
    category: 'brochure',
    orientation: 'vertical',
    region: 'bihta',
    description: 'Premium DTCP-approved residential and commercial plots near IIT Patna & upcoming IT Hub with 40ft wide main roads.',
    tags: ['Bihta', 'Residential', 'DTCP Approved', 'Patna']
  },
  {
    id: 2,
    url: '/g2.jpeg',
    title: 'Danapur High-Tech Enclave',
    location: 'Danapur, Patna',
    category: 'brochure',
    orientation: 'vertical',
    region: 'danapur',
    description: 'Strategic highway-facing plots near Danapur Station and AIIMS Patna offering maximum capital appreciation.',
    tags: ['Danapur', 'AIIMS Corridor', 'Highway Facing', 'Prime']
  },
  {
    id: 3,
    url: '/g3.jpeg',
    title: 'Bailey Road Luxury Plots',
    location: 'Bailey Road, Patna',
    category: 'brochure',
    orientation: 'vertical',
    region: 'patna',
    description: 'Exclusive gated community plots in Patna’s most sought-after arterial corridor with premium clubhouse access.',
    tags: ['Bailey Road', 'Gated Society', 'Central Patna']
  },
  {
    id: 4,
    url: '/g4.jpeg',
    title: 'Patliputra Sovereign Land',
    location: 'Patliputra Colony, Patna',
    category: 'brochure',
    orientation: 'vertical',
    region: 'patna',
    description: 'High-value freehold plots in the historic heart of Patliputra with 100% verified registry ready titles.',
    tags: ['Patliputra', 'Immediate Registry', 'Freehold']
  },
  {
    id: 5,
    url: '/g5.jpeg',
    title: 'Airport Corridor Township',
    location: 'Bihta Airport Zone, Patna',
    category: 'brochure',
    orientation: 'vertical',
    region: 'bihta',
    description: 'Fast-developing investment plots located 10 minutes from the upcoming international airport terminal.',
    tags: ['Airport Zone', 'High ROI', 'Investment']
  },
  {
    id: 6,
    url: '/g6.jpeg',
    title: 'Naubatpur Eco-Park Plots',
    location: 'Naubatpur, Patna',
    category: 'brochure',
    orientation: 'vertical',
    region: 'patna',
    description: 'Lush green residential plots near Naubatpur with 30ft wide internal paved roads and underground drainage.',
    tags: ['Naubatpur', 'Eco-Park', 'Wide Roads']
  },
  {
    id: 7,
    url: '/g7.jpeg',
    title: 'Shivala Smart City Land',
    location: 'Shivala Chowk, Patna',
    category: 'brochure',
    orientation: 'vertical',
    region: 'danapur',
    description: 'Gated residential colony with 24/7 solar security, boundary wall, and direct highway connectivity.',
    tags: ['Shivala', 'Smart City', 'Gated Colony']
  },
  {
    id: 8,
    url: '/g8.jpeg',
    title: 'Kanhauli Expressway County',
    location: 'Kanhauli, Bihta Road, Patna',
    category: 'site',
    orientation: 'horizontal',
    region: 'bihta',
    description: 'On-site actual view: Developed gated residential parcel adjacent to the 6-lane Bihta-Sarmera expressway with dedicated utilities.',
    tags: ['Kanhauli', 'Expressway', 'Site Photo', 'Immediate Possession']
  },
  {
    id: 9,
    url: '/g9.jpeg',
    title: 'Rajgir Heritage Valley',
    location: 'Silao, Rajgir, Nalanda',
    category: 'site',
    orientation: 'horizontal',
    region: 'rajgir',
    description: 'On-site actual view: Scenic eco-luxury plots near Nalanda University and Rajgir hills with round-the-clock security and green spaces.',
    tags: ['Rajgir', 'Eco Living', 'Nalanda', 'Tourism Hub']
  },
  {
    id: 10,
    url: '/g10.jpeg',
    title: 'AIIMS Corridor Greens',
    location: 'Phulwari Sharif - AIIMS Road, Patna',
    category: 'site',
    orientation: 'horizontal',
    region: 'patna',
    description: 'On-site actual view: Rapidly appreciating residential plots in close proximity to AIIMS Patna and Walmi institute.',
    tags: ['AIIMS Road', 'High ROI', 'Site Photo', 'Phulwari Sharif']
  },
  {
    id: 11,
    url: '/g11.jpeg',
    title: 'NIT IT-Park Enclave',
    location: 'Opposite to NIT, Bihta, Patna',
    category: 'site',
    orientation: 'horizontal',
    region: 'bihta',
    description: 'On-site actual view: Premium commercial and residential plot development situated directly opposite the NIT Bihta campus.',
    tags: ['IT Park', 'NIT Bihta', 'Site Photo', 'Prime Location']
  },
  {
    id: 12,
    url: '/g12.jpeg',
    title: 'Saguna More Signature Lands',
    location: 'Saguna More, Danapur, Patna',
    category: 'site',
    orientation: 'horizontal',
    region: 'danapur',
    description: 'On-site actual view: Exclusive residential plots near major commercial centers, hospitals, and the upcoming metro interchange.',
    tags: ['Saguna More', 'Metro Corridor', 'Site Photo', 'Urban Living']
  },
  {
    id: 13,
    url: '/g13.jpeg',
    title: 'Khagaul Boulevard Plots',
    location: 'Khagaul Road, Danapur, Patna',
    category: 'site',
    orientation: 'horizontal',
    region: 'danapur',
    description: 'On-site actual view: Prime residential layout offering wide bitumen roads, water lines, streetlights, and immediate registration.',
    tags: ['Khagaul', 'Wide Roads', 'Site Photo', 'Ready for Registry']
  },
  {
    id: 14,
    url: '/g14.jpeg',
    title: 'Bodhgaya Roadway Estates',
    location: 'Shivala More, Bodhgawa, Patna',
    category: 'site',
    orientation: 'horizontal',
    region: 'danapur',
    description: 'On-site actual view: Freehold DTCP approved boundary-walled plots ideal for villa construction and high-yield appreciation.',
    tags: ['Shivala More', 'Bodhgawa', 'Site Photo', 'DTCP Approved']
  },
  {
    id: 15,
    url: '/g15.jpeg',
    title: 'Ganga View Promenade Land',
    location: 'Digha - Marine Drive Corridor, Patna',
    category: 'site',
    orientation: 'horizontal',
    region: 'patna',
    description: 'On-site actual view: Ultra-exclusive luxury plots near Ganga Pathway with scenic riverside views and rapid appreciation.',
    tags: ['Marine Drive', 'Digha', 'Site Photo', 'Ganga Pathway']
  }
];

export interface AccordionModalProps {
  items?: GalleryItem[];
  autoPlayInterval?: number;
  className?: string;
}

export default function GalleryModalAccordion({
  items = defaultGalleryItems,
  autoPlayInterval = 5000,
  className = ''
}: AccordionModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Filtered items based on active category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return items;
    if (selectedCategory === 'site') return items.filter(item => item.category === 'site');
    if (selectedCategory === 'brochure') return items.filter(item => item.category === 'brochure');
    if (selectedCategory === 'bihta') return items.filter(item => item.region === 'bihta');
    if (selectedCategory === 'danapur') return items.filter(item => item.region === 'danapur' || item.region === 'patna');
    return items;
  }, [items, selectedCategory]);

  // Reset slide index if filtered items change
  useEffect(() => {
    setActiveSliderIndex(0);
  }, [selectedCategory]);

  // Autoplay for slider
  useEffect(() => {
    if (modalIndex !== null || isHovered || filteredItems.length <= 1) return;

    const timer = setInterval(() => {
      setActiveSliderIndex((prev) => (prev + 1) % filteredItems.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [modalIndex, isHovered, filteredItems.length, autoPlayInterval]);

  // Keyboard navigation & modal lock
  useEffect(() => {
    if (modalIndex !== null) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalIndex !== null) {
        if (e.key === 'Escape') setModalIndex(null);
        else if (e.key === 'ArrowRight') {
          setModalIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
        } else if (e.key === 'ArrowLeft') {
          setModalIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [modalIndex, filteredItems.length]);

  const handleSliderPrev = () => {
    setActiveSliderIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleSliderNext = () => {
    setActiveSliderIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const currentModalItem = modalIndex !== null ? filteredItems[modalIndex] : null;

  return (
    <div className={`w-full ${className}`}>
      {/* Category Filter Tabs Header */}
      <div className="flex items-center justify-center mb-8 pb-4 border-b border-white/10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: `All Projects (${items.length})` },
            { id: 'site', label: `Site Photos (${items.filter(i => i.category === 'site').length})` },
            { id: 'brochure', label: `Masterplans & Flyers (${items.filter(i => i.category === 'brochure').length})` },
            { id: 'bihta', label: 'Bihta Corridor' },
            { id: 'danapur', label: 'Patna & Danapur' },
          ].map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-gold text-black shadow-lg shadow-gold/20 scale-105'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* FEATURED SHOWCASE SLIDER */}
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Featured Showcase Card */}
        {filteredItems.length > 0 && (
          <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-[#0b1120] shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:h-[500px]">
              
              {/* Visual Image Showcase Area */}
              <div 
                className="lg:col-span-7 relative overflow-hidden bg-black flex items-center justify-center cursor-pointer group min-h-[300px] sm:min-h-[360px]"
                onClick={() => setModalIndex(activeSliderIndex)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={filteredItems[activeSliderIndex].id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
                  >
                    {/* Ambient Blur Layer for Vertical Images or Consistent Depth */}
                    <img
                      src={filteredItems[activeSliderIndex].url}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none"
                    />

                    {/* Crisp Foreground Image */}
                    <img
                      src={filteredItems[activeSliderIndex].url}
                      alt={filteredItems[activeSliderIndex].title}
                      className={`relative z-10 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                        filteredItems[activeSliderIndex].orientation === 'vertical'
                          ? 'object-contain py-2 drop-shadow-2xl max-h-[480px]'
                          : 'object-cover'
                      }`}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-10" />

                {/* Badges on Top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/20 text-gold border border-gold/40 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    {filteredItems[activeSliderIndex].category === 'site' ? 'Verified Site Photo' : 'Approved Layout Plan'}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalIndex(activeSliderIndex);
                    }}
                    className="p-2.5 rounded-full bg-black/60 hover:bg-gold hover:text-black text-white border border-white/20 backdrop-blur-md pointer-events-auto transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
                    aria-label="Enlarge image"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick View Tag on Hover */}
                <div className="absolute bottom-4 left-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-black/70 text-white text-xs backdrop-blur-sm border border-white/20">
                    <Eye className="w-3.5 h-3.5 text-gold" /> Click to expand full resolution
                  </span>
                </div>
              </div>

              {/* Information & Details Sidebar */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-[#0f172a] to-[#0a0f1d] border-t lg:border-t-0 lg:border-l border-white/10">
                <div>
                  {/* Location & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-gold font-semibold">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-gold" />
                      <span>{filteredItems[activeSliderIndex].location}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Ready Plot
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                    {filteredItems[activeSliderIndex].title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/75 leading-relaxed font-light mb-6">
                    {filteredItems[activeSliderIndex].description}
                  </p>

                  {/* Tags */}
                  <div className="mb-6">
                    <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Key Highlights</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {filteredItems[activeSliderIndex].tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/80 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions & Navigation Controls */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setModalIndex(activeSliderIndex)}
                    className="px-5 py-3 rounded-lg bg-gold hover:opacity-90 text-black font-bold text-xs uppercase tracking-wider transition-transform active:scale-95 shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
                  >
                    <Maximize2 className="w-4 h-4" /> View Full Details
                  </button>

                  {/* Gold Theme Navigation & Counter Indicator */}
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={handleSliderPrev}
                      aria-label="Previous project"
                      className="p-2.5 rounded-full bg-gold/10 hover:bg-gold hover:text-black text-gold border border-gold/30 transition-all hover:scale-110 active:scale-95 shadow-sm"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs text-gold font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-gold/15 border border-gold/40 shadow-sm">
                      {String(activeSliderIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                    </span>
                    <button
                      onClick={handleSliderNext}
                      aria-label="Next project"
                      className="p-2.5 rounded-full bg-gold/10 hover:bg-gold hover:text-black text-gold border border-gold/30 transition-all hover:scale-110 active:scale-95 shadow-sm"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Theme-Matched Interactive Gold Bullet Points with Left & Right Navigation Arrows */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 pt-6 pb-2">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handleSliderPrev}
            aria-label="Previous project"
            className="p-2 sm:p-2.5 rounded-full bg-gold/10 hover:bg-gold hover:text-black text-gold border border-gold/40 transition-all hover:scale-110 active:scale-95 shadow-md flex items-center justify-center shrink-0"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Bullet Points Track */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap max-w-[70vw] sm:max-w-none">
            {filteredItems.map((item, dotIdx) => {
              const isActive = activeSliderIndex === dotIdx;
              return (
                <button
                  key={dotIdx}
                  onClick={() => setActiveSliderIndex(dotIdx)}
                  aria-label={`Jump to ${item.title}`}
                  className={`transition-all duration-300 rounded-full focus:outline-none ${
                    isActive
                      ? 'w-7 sm:w-9 h-2 sm:h-2.5 bg-gold shadow-[0_0_12px_rgba(197,168,128,0.85)]'
                      : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gold/25 hover:bg-gold/60 border border-gold/40 hover:scale-125'
                  }`}
                />
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleSliderNext}
            aria-label="Next project"
            className="p-2 sm:p-2.5 rounded-full bg-gold/10 hover:bg-gold hover:text-black text-gold border border-gold/40 transition-all hover:scale-110 active:scale-95 shadow-md flex items-center justify-center shrink-0"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* FULL RESOLUTION LIGHTBOX MODAL */}
      <AnimatePresence>
        {currentModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="gallery-lightbox"
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={() => setModalIndex(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-2xl bg-[#0b1120] border border-white/20 shadow-[0_0_60px_rgba(0,0,0,0.8)] flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalIndex(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-black/70 hover:bg-gold hover:text-black text-white border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Image Display Box */}
              <div className="relative w-full md:w-3/5 h-72 sm:h-96 md:h-auto min-h-[320px] bg-black flex items-center justify-center overflow-hidden">
                {/* Ambient Blurred Backdrop */}
                <img
                  src={currentModalItem.url}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none"
                />

                {/* Foreground Image fitted without cropping or distortion */}
                <img
                  src={currentModalItem.url}
                  alt={currentModalItem.title}
                  className="relative z-10 max-h-[80vh] w-auto max-w-full object-contain p-2 drop-shadow-2xl select-none"
                />

                {/* In-Modal Navigation Controls */}
                <button
                  onClick={() => setModalIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0))}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 hover:bg-gold hover:text-black text-gold border border-gold/40 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 shadow-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setModalIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0))}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 hover:bg-gold hover:text-black text-gold border border-gold/40 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* In-Modal Gold Bullet Points (Bottom overlay) */}
                <div className="absolute bottom-3 inset-x-0 z-20 flex items-center justify-center gap-1.5 px-4 pointer-events-none">
                  <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 pointer-events-auto max-w-[90%] overflow-x-auto no-scrollbar">
                    {filteredItems.map((_, bIdx) => (
                      <button
                        key={bIdx}
                        onClick={() => setModalIndex(bIdx)}
                        aria-label={`Jump to image ${bIdx + 1}`}
                        className={`transition-all duration-300 rounded-full ${
                          modalIndex === bIdx
                            ? 'w-5 h-1.5 bg-gold shadow-[0_0_8px_rgba(197,168,128,0.9)]'
                            : 'w-1.5 h-1.5 bg-gold/30 hover:bg-gold/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Details Sidebar */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-[#0f172a] to-[#0a0f1d]">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-gold/20 text-gold border border-gold/40">
                      {currentModalItem.category === 'site' ? 'Live Site Development' : 'Approved Layout Plan'}
                    </span>
                    <span className="text-xs text-gold font-bold font-mono px-3 py-1 rounded-full bg-gold/15 border border-gold/40 shadow-sm">
                      {modalIndex !== null ? `${modalIndex + 1} / ${filteredItems.length}` : ''}
                    </span>
                  </div>

                  {currentModalItem.location && (
                    <div className="flex items-center gap-1.5 text-xs text-gold font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{currentModalItem.location}</span>
                    </div>
                  )}

                  <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                    {currentModalItem.title}
                  </h2>

                  <p className="text-sm text-white/80 leading-relaxed font-light mb-6">
                    {currentModalItem.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-bold">Features & Status</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {currentModalItem.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                  <a
                    href="#contact"
                    onClick={() => setModalIndex(null)}
                    className="w-full py-3.5 px-4 bg-gold hover:opacity-90 text-black font-bold text-xs uppercase tracking-widest rounded-lg text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
                  >
                    <PhoneCall className="w-4 h-4" /> Book Free Site Visit
                  </a>
                  <p className="text-[10px] text-center text-white/40">
                    Use Left / Right arrow keys to browse, ESC to close
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
