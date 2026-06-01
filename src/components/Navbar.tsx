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
    { name: 'Get in Touch', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Check if the link is a hash link
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      
      if (elem) {
        // Find the navbar height to offset
        const navHeight = 80;
        const targetPosition = elem.getBoundingClientRect().top + window.scrollY - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      } else if (targetId === '') {
        // If it's just '#' then scroll to top
         window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else {
      // For external links, let default behavior happen
      window.location.href = href;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      // Only set if we found a section, otherwise keep '' if at very top maybe?
      // Actually, if we're at the top, #home should be active
      if (current) {
        setActiveSection(current);
      }
    };
    
    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          <nav className="hidden md:flex space-x-8">
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
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+916287220163" className="text-sm flex items-center font-bold text-white">
              <Phone className="w-4 h-4 mr-2 accent-gold" />
              +91 6287220163
            </a>
            <a
              href="tel:+916287220163"
              className="bg-gold hover:opacity-90 text-black px-6 py-2 rounded-sm text-xs font-bold tracking-wider uppercase transition-colors"
            >
              Book Site Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
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
            className="absolute top-full left-0 right-0 bg-[#0f172a] shadow-2xl md:hidden border-t border-t-white/10"
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
                className="mt-4 bg-gold hover:opacity-90 text-black text-center py-3 rounded-sm font-bold tracking-widest uppercase text-xs"
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
