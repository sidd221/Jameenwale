import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found | JameenWale";
  }, []);

  return (
    <div className="font-sans antialiased text-white select-none min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-20 pb-12">
        {/* Background Gradients */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d4af37] to-[#f9a8d4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-9xl md:text-[150px] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gold via-white to-white/50 mb-4 opacity-80">
              404
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Page Not Found
            </h2>
            
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto font-light">
              We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps it never existed in our premium properties list.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                to="/" 
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <Home className="w-5 h-5" />
                Return Home
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
