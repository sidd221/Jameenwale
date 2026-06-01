import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const submitData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        _subject: "New Hero Form Submission",
        _cc: "sumitibc333@gmail.com",
        _captcha: false,
      };

      const response = await fetch("https://formsubmit.co/ajax/anish248patel@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(submitData)
      });

      const jsonResponse = await response.json().catch(() => null);

      if (response.ok && jsonResponse && jsonResponse.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Submission Error:", jsonResponse);
        if (jsonResponse && jsonResponse.message && typeof jsonResponse.message === 'string') {
          setErrorMessage("Error: " + jsonResponse.message);
        } else {
           setErrorMessage("Submission failed. Status: " + response.status + ".");
        }
        setStatus('error');
        setTimeout(() => setStatus('idle'), 8000);
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setErrorMessage("Network error: " + error.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0F172A]">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format,compress&fit=crop&q=60&w=1280&fm=webp"
          srcSet="
            https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format,compress&fit=crop&q=60&w=640&fm=webp 640w,
            https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format,compress&fit=crop&q=60&w=1280&fm=webp 1280w,
            https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format,compress&fit=crop&q=60&w=1920&fm=webp 1920w
          "
          sizes="100vw"
          alt="Luxury Mansion Exterior"
          width="1280"
          height="853"
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-12 pb-24">
        
        {/* Left Column: Text & Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-3/5 text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            EXCLUSIVE LAUNCH
          </div>
          <h1 className="sr-only">Buy Land in Patna | Best Property Dealers in Patna for Residential & Commercial Plots in Bihar</h1>
          <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            The Pinnacle of <br/> <span className="accent-gold italic font-medium">Urban Luxury.</span>
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-lg font-light leading-relaxed">
            Experience unparalleled luxury and exclusive amenities. Discover the finest gated society plots in Patna, residential land in Danapur, and premium highway-facing plots in Patna built for your prestige and comfort.
          </p>

          {/* Highlights Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10 text-white">
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-bold tracking-tight">₹21L</div>
              <div className="text-[10px] uppercase tracking-[1px] opacity-60">800 sq ft Starting</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold tracking-tight">350+</div>
              <div className="text-[10px] uppercase tracking-[1px] opacity-60">Happy Customers</div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-bold tracking-tight">Patna, Bihar</div>
              <div className="text-[10px] uppercase tracking-[1px] opacity-60">Location</div>
            </div>
            <div className="space-y-1 flex items-center justify-start border-l-0 lg:border-l border-white/20 pl-0 lg:pl-6 mt-4 lg:mt-0">
              <div className="text-sm sm:text-base font-medium italic opacity-90 leading-tight">
                "Own today, <br className="hidden lg:block"/> build tomorrow."
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <a 
              href="brochure.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-black font-bold flex items-center justify-center rounded-sm text-sm tracking-widest uppercase shadow-lg hover:opacity-90 transition-opacity"
            >
              Get Brochure <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Inquiry Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/5 max-w-md"
        >
          <div className="glass p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <h3 className="text-xl font-semibold text-white">Priority Inquiry</h3>
            <p className="text-white/60 text-sm mb-6">Book a customized site visit & view pricing.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder=" "
                    required
                    className="peer w-full bg-white/10 border border-white/10 px-3 pt-5 pb-2 flex rounded-sm text-sm outline-none focus:border-white/40 transition-all text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <label htmlFor="name" className="absolute left-3 top-2 text-[9px] uppercase tracking-[1px] text-white/40 transition-all duration-200 origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[10px] peer-placeholder-shown:text-white/60 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[9px] peer-focus:text-white/40 pointer-events-none">
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    placeholder=" "
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="peer w-full bg-white/10 border border-white/10 px-3 pt-5 pb-2 flex rounded-sm text-sm outline-none focus:border-white/40 transition-all text-white"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                  />
                  <label htmlFor="phone" className="absolute left-3 top-2 text-[9px] uppercase tracking-[1px] text-white/40 transition-all duration-200 origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[10px] peer-placeholder-shown:text-white/60 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[9px] peer-focus:text-white/40 pointer-events-none">
                    Phone Number
                  </label>
                </div>
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  className="peer w-full bg-white/10 border border-white/10 px-3 pt-5 pb-2 flex rounded-sm text-sm outline-none focus:border-white/40 transition-all text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <label htmlFor="email" className="absolute left-3 top-2 text-[9px] uppercase tracking-[1px] text-white/40 transition-all duration-200 origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[10px] peer-placeholder-shown:text-white/60 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[9px] peer-focus:text-white/40 pointer-events-none">
                  Email Address
                </label>
              </div>

              
              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="w-full py-4 mt-4 bg-white text-black font-bold rounded-sm text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors disabled:opacity-75 disabled:hover:bg-white disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : status === 'success' ? 'Details Sent!' : status === 'error' ? 'Error. Try Again' : 'Submit Interest'}
              </button>
              {errorMessage && (
                <div className="text-red-400 text-xs mt-2 p-2 bg-red-950/50 rounded-sm">
                  {errorMessage}
                </div>
              )}
            </form>
            
            <p className="text-[10px] text-center text-white/40">
              *Our property consultant will call you within 20 min.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
