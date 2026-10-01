import React from 'react';
import { Building2, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';

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
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate(`/${href}`);
        return;
      }
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
    <footer className="glass border-x-0 border-b-0 border-white/10 text-white pt-20 pb-28 sm:pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight uppercase text-white">
                JAMEEN<span className="accent-gold">WALE</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              Curating verified gated township plots across Patna, Bihta, Danapur, Naubatpur, and Rajgir for families and investors seeking legal transparency, perimeter security, and sustained capital appreciation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/18kmh97qDS/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/jameenwlae_?igsh=MTBtenllNGFkc2RuZQ==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="https://wa.me/916287220163" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('Footer WhatsApp Icon')} className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-colors" aria-label="WhatsApp"><WhatsAppIcon className="w-4 h-4" /></a>
              <a href="https://pin.it/3un7n9UNy" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-colors" aria-label="Pinterest"><PinterestIcon className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links & Core Hubs */}
          <div className="lg:justify-self-center">
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Prime Corridors &amp; Hubs</h3>
            <ul className="space-y-3.5 text-sm font-medium">
              <li><Link to="/plots-for-sale-in-patna" className="text-white/70 hover:text-gold transition-colors flex items-center gap-1.5"><span className="text-gold">›</span> Plots for Sale in Patna</Link></li>
              <li><Link to="/plots-for-sale-in-bihar" className="text-white/70 hover:text-gold transition-colors flex items-center gap-1.5"><span className="text-gold">›</span> Plots for Sale in Bihar</Link></li>
              <li><Link to="/plots-for-sale-in-bihta" className="text-white/70 hover:text-gold transition-colors flex items-center gap-1.5"><span className="text-gold">›</span> Plots in Bihta (Opp. NIT)</Link></li>
              <li><Link to="/plots-for-sale-in-danapur" className="text-white/70 hover:text-gold transition-colors flex items-center gap-1.5"><span className="text-gold">›</span> Plots in Danapur (Saguna Belt)</Link></li>
              <li><Link to="/plots-for-sale-in-naubatpur" className="text-white/70 hover:text-gold transition-colors flex items-center gap-1.5"><span className="text-gold">›</span> Plots in Naubatpur (AIIMS Ring Road)</Link></li>
              <li><Link to="/plots-for-sale-in-rajgir" className="text-white/70 hover:text-gold transition-colors flex items-center gap-1.5"><span className="text-gold">›</span> Plots in Rajgir (Seven Crown Silao)</Link></li>
              <li><Link to="/land-buying-checklist-bihar" className="text-gold hover:underline font-bold transition-colors flex items-center gap-1.5"><span>›</span> Bihar Land Buying Checklist</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Contact Us</h3>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 accent-gold mr-3 shrink-0 mt-0.5" />
                <span>5th floor leads tower Rupaspur, Digha Danapur Nahar Road, landmark: Kaali Mandir, Patna 801503</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 accent-gold mr-3 shrink-0" />
                <a href="tel:+916287220163" onClick={() => trackPhoneClick('Footer Phone')} className="hover:text-gold transition-colors">+91 6287220163</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 accent-gold mr-3 shrink-0" />
                <span>Anish248patel@gmail.com</span>
              </li>
              <li className="flex items-center text-xs text-white/50 pt-1">
                <span>Working Hours: Mon – Sun, 8:00 AM – 8:00 PM IST</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Target Keyword Tags Grid - Natural Internal Linking */}
        <div className="border-t border-white/10 pt-8 pb-4">
          <h5 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Strategic Location Portfolios</h5>
          <div className="flex flex-wrap gap-2 text-[11px] text-white/60">
            <Link to="/plots-for-sale-in-patna" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Plots for Sale in Patna</Link>
            <Link to="/plots-for-sale-in-patna" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Land for Sale in Patna</Link>
            <Link to="/plots-for-sale-in-patna" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Residential Plots in Patna</Link>
            <Link to="/plots-for-sale-in-bihar" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Plots for Sale in Bihar</Link>
            <Link to="/plots-for-sale-in-bihar" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Residential Land in Bihar</Link>
            <Link to="/plots-for-sale-in-bihta" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Plots for Sale in Bihta</Link>
            <Link to="/plots-for-sale-in-bihta" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Land for Sale in Bihta</Link>
            <Link to="/plots-for-sale-in-danapur" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Plots for Sale in Danapur</Link>
            <Link to="/plots-for-sale-in-danapur" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Land for Sale in Danapur</Link>
            <Link to="/plots-for-sale-in-naubatpur" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Plots for Sale in Naubatpur</Link>
            <Link to="/plots-for-sale-in-naubatpur" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Land for Sale in Naubatpur</Link>
            <Link to="/plots-for-sale-in-rajgir" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Plots for Sale in Rajgir</Link>
            <Link to="/plots-for-sale-in-rajgir" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Land for Sale in Rajgir</Link>
            <Link to="/plots-in-shivala-patna" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Embassy Capital Shivala More</Link>
            <Link to="/land-buying-checklist-bihar" className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-gold transition-colors">Bihar Land Buying Checklist</Link>
          </div>
        </div>

        {/* Statutory Advertising & RERA Real Estate Disclaimer */}
        <div className="border-t border-white/10 pt-6 pb-2 text-[11px] text-white/50 leading-relaxed">
          <p>
            <strong className="text-white/70">Statutory Disclaimer &amp; RERA Advisory:</strong> JameenWale is an independent real estate advisory and consultancy firm marketing verified residential and commercial plotted developments in Patna, Bihta, Danapur, Shivala, and Rajgir, Bihar. All prices, plot sizes, amenities, and computer-generated 3D renders are indicative and subject to change without prior notice. Bank loan sanctions are subject to individual bank underwriting and borrower eligibility. Prospective buyers are advised to review certified revenue records and RERA approvals on the Bihar RERA portal (<a href="https://rera.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold underline">rera.bihar.gov.in</a>) before executing any purchase agreement.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-medium gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>&copy; {currentYear} JameenWale. All Rights Reserved.</p>
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
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">RERA Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
