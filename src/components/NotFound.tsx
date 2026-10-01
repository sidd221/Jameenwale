import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Compass, MapPin, FileCheck } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from './SEOHead';

export default function NotFound() {
  return (
    <div className="font-sans antialiased text-white select-none min-h-screen flex flex-col">
      <SEOHead
        title="404 - Page Not Found | JameenWale"
        description="The requested real estate page could not be found. Explore verified plots in Patna, Bihta, and Rajgir."
        canonicalUrl="https://jameenwale.vercel.app/404"
        noindex={true}
      />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-28 pb-16">
        {/* Background Gradients */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d4af37] to-[#f9a8d4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gold via-white to-white/50 mb-2 opacity-90">
              404
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Page Not Found
            </h2>
            
            <p className="text-base text-white/60 mb-8 max-w-md mx-auto font-light">
              The property page you are looking for has been moved or does not exist. Explore our active verified gated townships below:
            </p>

            {/* Quick links to active corridors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-left">
              <Link 
                to="/plots-for-sale-in-patna" 
                className="p-4 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors block"
              >
                <div className="flex items-center text-gold text-xs font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 mr-1" /> Patna Corridors
                </div>
                <div className="text-white font-bold text-sm">Plots in Patna</div>
                <div className="text-white/50 text-xs">Shivala &amp; Danapur • ₹21L+</div>
              </Link>

              <Link 
                to="/plots-for-sale-in-bihta" 
                className="p-4 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors block"
              >
                <div className="flex items-center text-gold text-xs font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 mr-1" /> Bihta IT Hub
                </div>
                <div className="text-white font-bold text-sm">IT Park Plots</div>
                <div className="text-white/50 text-xs">Opposite NIT Patna • ₹28L</div>
              </Link>

              <Link 
                to="/plots-for-sale-in-rajgir" 
                className="p-4 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors block"
              >
                <div className="flex items-center text-gold text-xs font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 mr-1" /> Rajgir / Nalanda
                </div>
                <div className="text-white font-bold text-sm">Seven Crown</div>
                <div className="text-white/50 text-xs">Eco-Living Plots • ₹22L</div>
              </Link>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center gap-4"
            >
              <Link 
                to="/" 
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-slate-900 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <Home className="w-4 h-4" />
                Return to Homepage
              </Link>
              <Link 
                to="/land-buying-checklist-bihar" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-sm"
              >
                <FileCheck className="w-4 h-4 text-gold" />
                Land Buying Checklist
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Ambient shapes */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>
      </main>

      <Footer />
      
      <div className="fixed inset-0 bg-[#0f172a] -z-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-[#0f172a]"></div>
    </div>
  );
}
