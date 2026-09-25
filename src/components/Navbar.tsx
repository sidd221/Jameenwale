import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Legal Docs', href: '#legal' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Get in Touch', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Check if the link is a hash link
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      if (targetId) {
        setActiveSection(targetId);
        const elem = document.getElementById(targetId);
        
        if (elem) {
          const navHeight = 75;
          const targetPosition = elem.getBoundingClientRect().top + window.scrollY - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        setActiveSection('home');
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = href;
    }
  };

  useEffect(() => {
    // 1. Smooth, low-overhead scroll detection for sticky navbar style
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        const scrolled = window.scrollY > 20;
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
        rafId = null;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. High-performance IntersectionObserver for Active Section indicator (0 layout reflows on scroll)
    const navMap: Record<string, string> = {
      home: 'home',
      about: 'about',
      properties: 'properties',
      'why-us': 'properties',
      amenities: 'amenities',
      location: 'amenities',
      gallery: 'gallery',
      legal: 'legal',
      faq: 'faq',
      contact: 'contact',
    };

    const sectionIds = [
      'home',
      'about',
      'properties',
      'why-us',
      'amenities',
      'location',
      'gallery',
      'legal',
      'faq',
      'contact'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible section with highest intersection ratio or top priority
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const id = visibleEntry.target.id;
          const mapped = navMap[id] || id;
          setActiveSection((prev) => (prev !== mapped ? mapped : prev));
        }
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: [0, 0.25, 0.5]
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight uppercase text-white">
              JAMEEN<span className="accent-gold">WALE</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-5 xl:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#D4AF37] after:w-full'
                    : 'text-white after:w-0'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6">
            <a href="tel:+916287220163" className="text-sm flex items-center font-bold text-white whitespace-nowrap">
              <Phone className="w-4 h-4 mr-2 accent-gold" />
              +91 6287220163
            </a>
            <a
              href="tel:+916287220163"
              className="bg-gold hover:opacity-90 text-black px-5 py-2 rounded-sm text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap"
            >
              Book Site Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0f172a] shadow-2xl lg:hidden border-t border-t-white/10"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-medium text-lg border-b pb-2 transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'border-[#D4AF37] text-[#D4AF37]'
                      : 'border-white/10 text-white hover:text-[#D4AF37]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+916287220163"
                className="flex items-center justify-center gap-2 text-white font-bold text-sm py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 accent-gold" />
                +91 6287220163
              </a>
              <a
                href="tel:+916287220163"
                className="mt-2 bg-gold hover:opacity-90 text-black text-center py-3 rounded-sm font-bold tracking-widest uppercase text-xs"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Site Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
