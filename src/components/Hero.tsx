import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, Lock, FileCheck } from 'lucide-react';
import { trackLeadSubmission, trackPhoneClick, trackBrochureDownload } from '../utils/analytics';
import { submitLeadToWhatsApp, WHATSAPP_LEAD_DISPLAY } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const url = submitLeadToWhatsApp({
        formName: 'Hero Quick Priority Form',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: 'Patna Regional Plots & Land',
      });
      setWhatsappUrl(url);

      trackLeadSubmission('Hero Quick Inquiry Form', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        destination: `WhatsApp (${WHATSAPP_LEAD_DISPLAY})`
      });

      setStatus('success');
      setFormData({ name: '', phone: '', email: '' });
      setTimeout(() => setStatus('idle'), 8000);
    } catch (error: any) {
      console.error("Submission error:", error);
      setErrorMessage("Could not connect to WhatsApp. Please call directly.");
      setStatus('error');
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0F172A] overflow-hidden">
        <img
          src="/hero-1280.webp"
          srcSet="/hero-640.webp 640w, /hero-1280.webp 1280w"
          sizes="100vw"
          alt="RERA Approved Gated Community Plots in Patna and Rajgir Bihar - JameenWale"
          width="1280"
          height="853"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-12 pb-24">
        
        {/* Left Column: Text & Badges */}
        <div className="w-full md:w-3/5 text-white overflow-visible animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            EXCLUSIVE LAUNCH
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6 overflow-visible flex flex-col gap-1 sm:gap-2">
            <span className="block text-white">Plots for Sale in Patna</span>
            <span className="block accent-gold italic font-medium">&amp; Gated Community Land</span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-lg font-light leading-relaxed">
            Secure, freehold residential plots with perimeter boundary walls, wide concrete roads, and clear legal titles across Patna’s top growth corridors.
          </p>

          {/* Highlights Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 sm:gap-x-6 mb-10 text-white">
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-bold tracking-tight">₹21L</div>
              <div className="text-[10px] uppercase tracking-[1px] opacity-60">800 sq ft Starting</div>
            </div>
            <div className="space-y-1 border-l border-white/20 pl-4 sm:pl-6">
              <div className="text-2xl font-bold tracking-tight">350+</div>
              <div className="text-[10px] uppercase tracking-[1px] opacity-60">Happy Customers</div>
            </div>
            <div className="space-y-1 border-l-0 lg:border-l border-white/20 pl-0 lg:pl-6">
              <div className="text-xl sm:text-2xl font-bold tracking-tight">Patna, Bihar</div>
              <div className="text-[10px] uppercase tracking-[1px] opacity-60">Location</div>
            </div>
            <div className="space-y-1 flex items-center justify-start border-l border-white/20 pl-4 sm:pl-6">
              <div className="text-sm sm:text-base font-medium italic opacity-90 leading-tight">
                "Own today, <br className="hidden lg:block"/> build tomorrow."
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a 
              href="brochure.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBrochureDownload('Hero Overview Brochure')}
              className="px-8 py-4 bg-gold text-black font-bold flex items-center justify-center rounded-sm text-sm tracking-widest uppercase shadow-lg hover:opacity-90 transition-all active:scale-95"
            >
              Get Brochure <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <a 
              href="tel:+916287220163"
              onClick={() => trackPhoneClick('Hero Book Site Visit')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center rounded-sm text-sm tracking-widest uppercase border border-white/20 backdrop-blur-md shadow-lg transition-all active:scale-95 gap-2"
            >
              <Phone className="w-4 h-4 text-gold" /> Book Site Visit
            </a>
          </div>

          {/* Trust Badges Row */}
          <div className="pt-6 mt-8 border-t border-white/10 flex flex-wrap items-center gap-y-2.5 gap-x-3 text-xs sm:text-sm text-white/90">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              100% Mutation Ready
            </span>
            <span className="text-gold/60 font-bold hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              Immediate Registry
            </span>
            <span className="text-gold/60 font-bold hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Lock className="w-4 h-4 text-gold shrink-0" />
              24/7 Gated Security
            </span>
            <span className="text-gold/60 font-bold hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <FileCheck className="w-4 h-4 text-gold shrink-0" />
              Zero Legal Disputes
            </span>
          </div>
        </div>

        {/* Right Column: Inquiry Form Card */}
        <div className="w-full md:w-2/5 max-w-md animate-fade-in-up-delay">
          <div className="glass p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <h2 className="text-xl font-semibold text-white">Priority Inquiry</h2>
            <p className="text-white/70 text-sm mb-6">Book a customized site visit &amp; view pricing.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input 
                    type="text" 
                    id="hero-name"
                    name="name"
                    placeholder=" "
                    required
                    className="peer w-full bg-white/10 border border-white/10 px-3 pt-5 pb-2 flex rounded-sm text-base sm:text-sm outline-none focus:border-white/40 transition-all text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <label htmlFor="hero-name" className="absolute left-3 top-2 text-[9px] uppercase tracking-[1px] text-white/70 transition-all duration-200 origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[10px] peer-placeholder-shown:text-white/70 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[9px] peer-focus:text-gold pointer-events-none">
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    id="hero-phone"
                    name="phone"
                    placeholder=" "
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="peer w-full bg-white/10 border border-white/10 px-3 pt-5 pb-2 flex rounded-sm text-base sm:text-sm outline-none focus:border-white/40 transition-all text-white"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                  />
                  <label htmlFor="hero-phone" className="absolute left-3 top-2 text-[9px] uppercase tracking-[1px] text-white/70 transition-all duration-200 origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[10px] peer-placeholder-shown:text-white/70 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[9px] peer-focus:text-gold pointer-events-none">
                    Phone Number
                  </label>
                </div>
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  id="hero-email"
                  name="email"
                  placeholder=" "
                  required
                  className="peer w-full bg-white/10 border border-white/10 px-3 pt-5 pb-2 flex rounded-sm text-base sm:text-sm outline-none focus:border-white/40 transition-all text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <label htmlFor="hero-email" className="absolute left-3 top-2 text-[9px] uppercase tracking-[1px] text-white/70 transition-all duration-200 origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[10px] peer-placeholder-shown:text-white/70 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[9px] peer-focus:text-gold pointer-events-none">
                  Email Address
                </label>
              </div>

              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 mt-4 bg-white text-black font-bold rounded-sm text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors disabled:opacity-75 disabled:hover:bg-white disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{status === 'submitting' ? 'Opening WhatsApp...' : status === 'success' ? 'Opening WhatsApp...' : status === 'error' ? 'Retry via WhatsApp' : 'Get Details on WhatsApp'}</span>
              </button>

              {status === 'success' && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-sm text-center space-y-1">
                  <p className="text-xs text-emerald-300 font-semibold flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Inquiry prepared! Opening WhatsApp...
                  </p>
                  <a
                    href={whatsappUrl || "https://wa.me/917979098902"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] text-gold underline hover:text-white"
                  >
                    Click here if WhatsApp didn't open automatically
                  </a>
                </div>
              )}

              {errorMessage && (
                <div className="text-red-400 text-xs mt-2 p-2 bg-red-950/50 rounded-sm">
                  {errorMessage}
                </div>
              )}
            </form>
            
            <div className="space-y-1 pt-1 text-center">
              <p className="text-[10px] text-white/50">
                *Our property consultant will call you within 20 min.
              </p>
              <p className="text-[10px] text-white/40">
                By submitting, you agree to our{' '}
                <Link to="/privacy-policy" className="text-gold underline hover:text-white">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to="/terms" className="text-gold underline hover:text-white">
                  Terms
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
