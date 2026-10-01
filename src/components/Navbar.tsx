import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { trackPhoneClick } from '../utils/analytics';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Legal', href: '#legal' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Get In Touch', href: '#contact' },
  ];

  const scrollToSection = (targetId: string) => {
    if (!targetId || targetId === 'home') {
      setActiveSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setActiveSection(targetId);
    const attemptScroll = () => {
      const elem = document.getElementById(targetId);
      if (elem) {
        const navHeight = 75;
        const targetPosition = elem.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        return true;
      }
      return false;
    };

    if (!attemptScroll()) {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        if (attemptScroll() || count > 20) {
          clearInterval(interval);
        }
      }, 50);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    
    // Check if the link is a hash link
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);

      if (location.pathname !== '/') {
        navigate(`/${href}`);
        return;
      }

      scrollToSection(targetId);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const timer = setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
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

    // Ordered from bottom of page to top of page for instant matching
    const orderedSectionIds = [
      'contact',
      'faq',
      'legal',
      'gallery',
      'location',
      'amenities',
      'why-us',
      'properties',
      'about',
      'home',
    ];

    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const scrolled = scrollY > 20;
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        // 1. If user is scrolled near bottom of page -> activate contact
        if (scrollY + windowHeight >= docHeight - 90) {
          setActiveSection('contact');
          rafId = null;
          return;
        }

        // 2. If at very top of page -> activate home
        if (scrollY < 120) {
          setActiveSection('home');
          rafId = null;
          return;
        }

        // 3. Trigger line: check from bottom-most section upwards
        const triggerLine = 200;
        for (const id of orderedSectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= triggerLine) {
              const mapped = navMap[id] || id;
              setActiveSection((prev) => (prev !== mapped ? mapped : prev));
              break;
            }
          }
        }

        rafId = null;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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
          <Link 
            to="/" 
            onClick={() => { if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-bold tracking-tight uppercase text-white">
              JAMEEN<span className="accent-gold">WALE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5">
            {navLinks.map((link) => {
              if (link.href.startsWith('#')) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-[13px] xl:text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 ${
                      activeSection === link.href.substring(1) && location.pathname === '/'
                        ? 'text-[#D4AF37] after:w-full'
                        : 'text-white after:w-0'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 ${
                    location.pathname === link.href
                      ? 'text-[#D4AF37] after:w-full'
                      : 'text-white after:w-0'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6">
            <a 
              href="tel:+916287220163" 
              onClick={() => trackPhoneClick('Navbar Phone')}
              className="text-sm flex items-center font-bold text-white whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-2 accent-gold" />
              +91 6287220163
            </a>
            <a
              href="tel:+916287220163"
              onClick={() => trackPhoneClick('Navbar Book Site Visit')}
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
      {mobileMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-[#0f172a] shadow-2xl lg:hidden border-t border-t-white/10 animate-fade-in-down"
        >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => {
                if (link.href.startsWith('#')) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`font-medium text-lg border-b pb-2 transition-colors ${
                        activeSection === link.href.substring(1) && location.pathname === '/'
                          ? 'border-[#D4AF37] text-[#D4AF37]'
                          : 'border-white/10 text-white hover:text-[#D4AF37]'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-medium text-lg border-b pb-2 transition-colors ${
                      location.pathname === link.href
                        ? 'border-[#D4AF37] text-[#D4AF37]'
                        : 'border-white/10 text-white hover:text-[#D4AF37]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a
                href="tel:+916287220163"
                className="flex items-center justify-center gap-2 text-white font-bold text-sm py-2"
                onClick={() => {
                  trackPhoneClick('Mobile Menu Phone');
                  setMobileMenuOpen(false);
                }}
              >
                <Phone className="w-4 h-4 accent-gold" />
                +91 6287220163
              </a>
              <a
                href="tel:+916287220163"
                className="mt-2 bg-gold hover:opacity-90 text-black text-center py-3 rounded-sm font-bold tracking-widest uppercase text-xs"
                onClick={() => {
                  trackPhoneClick('Mobile Menu Book Site Visit');
                  setMobileMenuOpen(false);
                }}
              >
                Book Site Visit
              </a>
            </div>
          </div>
        )}
    </header>
  );
}
