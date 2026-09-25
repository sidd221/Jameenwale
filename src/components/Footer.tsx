import React from 'react';
import { Building2, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.923 0 4.136-2.605 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        const navHeight = 80;
        const targetPosition = elem.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      } else if (targetId === '') {
         window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="glass border-x-0 border-b-0 border-white/10 text-white pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight uppercase text-white">
                JAMEEN<span className="accent-gold">WALE</span>
              </span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              Curating verified gated township plots across Patna, Bihta, and Rajgir for families and investors seeking legal transparency, perimeter security, and sustained capital appreciation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/18kmh97qDS/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/jameenwlae_?igsh=MTBtenllNGFkc2RuZQ==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://wa.me/916287220163" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-colors"><WhatsAppIcon className="w-4 h-4" /></a>
              <a href="https://pin.it/3un7n9UNy" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-colors"><PinterestIcon className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:justify-self-center">
            <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-white/60 hover:text-white hover:accent-gold transition-colors">About Us</a></li>
              <li><a href="#properties" onClick={(e) => handleNavClick(e, '#properties')} className="text-white/60 hover:text-white hover:accent-gold transition-colors">Featured Projects</a></li>
              <li><a href="#amenities" onClick={(e) => handleNavClick(e, '#amenities')} className="text-white/60 hover:text-white hover:accent-gold transition-colors">Luxury Amenities</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="text-white/60 hover:text-white hover:accent-gold transition-colors">Digital Gallery</a></li>
              <li><a href="#legal" onClick={(e) => handleNavClick(e, '#legal')} className="text-white/60 hover:text-white hover:accent-gold transition-colors">Legal Documents</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="text-white/60 hover:text-white hover:accent-gold transition-colors">Frequently Asked Questions</a></li>
              <li><a href="/govt.pdf" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white hover:accent-gold transition-colors">Govt. Master Map (PDF)</a></li>
              <li><a href="https://assets99homes.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white hover:accent-gold transition-colors">Assets99</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 accent-gold mr-3 shrink-0 mt-0.5" />
                <span>5th floor leads tower Rupaspur, Digha Danapur Nahar Road, landmark: Kaali Mandir</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 accent-gold mr-3 shrink-0" />
                <a href="tel:+916287220163" className="hover:text-gold transition-colors">+91 6287220163</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 accent-gold mr-3 shrink-0" />
                <span>Anish248patel@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Target Keyword Tags Grid */}
        <div className="border-t border-white/10 pt-8 pb-4">
          <h5 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Popular Locations & Growth Corridors</h5>
          <div className="flex flex-wrap gap-2 text-[11px] text-white/60">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 transition-colors">Gated Community Plots in Patna</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 transition-colors">RERA Approved Plots in Bihta</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 transition-colors">Residential Plots in Rajgir Bihar</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 transition-colors">Plots for Sale in Rajgir</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 transition-colors">Shivala More Gated Plots</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 transition-colors">AIIMS Patna Corridor Land</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 transition-colors">Residential Plots with Boundary Wall</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 transition-colors">Plot for Sale in Patna Bypass Ramkrishna Nagar</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 transition-colors">Freehold Gated Townships</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-medium gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>&copy; {currentYear} jameenwale. All Rights Reserved.</p>
            <span className="hidden md:inline">|</span>
            <p>
              Designed By:{' '}
              <a
                href="https://siddhantsinha.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors font-medium hover:underline underline-offset-4"
              >
                Siddhant Sinha
              </a>
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
