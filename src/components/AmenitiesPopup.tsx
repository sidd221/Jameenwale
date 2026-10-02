import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Phone, User, CheckCircle2, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
import { trackLeadSubmission } from '../utils/analytics';
import { submitLeadToWhatsApp, WHATSAPP_LEAD_DISPLAY } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

export default function AmenitiesPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear any legacy dismissal blocker so testing & scrolling works cleanly
    try {
      sessionStorage.removeItem('amenities_popup_dismissed');
      sessionStorage.removeItem('amenities_popup_submitted_or_closed');
    } catch {}

    if (hasTriggered) return;

    // If user already successfully submitted lead, don't show again
    try {
      if (sessionStorage.getItem('amenities_popup_submitted') === 'true') {
        return;
      }
    } catch {}

    const triggerPopup = () => {
      setIsOpen(true);
      setHasTriggered(true);
    };

    let ticking = false;
    const handleScroll = () => {
      if (hasTriggered) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercentage = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;

          // Trigger when user scrolls down 350px or 15% down the page
          if (scrollY >= 350 || scrollPercentage >= 15) {
            triggerPopup();
            window.removeEventListener('scroll', handleScroll);
            return;
          }

          // Or if about / properties / amenities sections are in view
          const targetSection = document.getElementById('amenities') || 
                                document.getElementById('properties') || 
                                document.getElementById('about');
          if (targetSection) {
            const rect = targetSection.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8) {
              triggerPopup();
              window.removeEventListener('scroll', handleScroll);
              return;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check immediately in case page is reloaded midway down
    handleScroll();

    // Fallback timer: trigger after 12 seconds if not scrolled
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        triggerPopup();
      }
    }, 12000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [hasTriggered]);

  // Handle ESC key and scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const url = submitLeadToWhatsApp({
        formName: 'Amenities Popup Priority Callback',
        name: formData.name,
        phone: formData.phone,
        project: 'Gated Plots & Amenities Inquiry',
      });
      setWhatsappUrl(url);

      trackLeadSubmission('Amenities Section Popup Form', {
        name: formData.name,
        phone: formData.phone,
        destination: `WhatsApp (${WHATSAPP_LEAD_DISPLAY})`
      });

      setStatus('success');
      try {
        sessionStorage.setItem('amenities_popup_submitted', 'true');
      } catch {}
      setTimeout(() => {
        setIsOpen(false);
      }, 5500);
    } catch (error: any) {
      console.error("Popup form error:", error);
      setErrorMessage("Could not connect to WhatsApp. Please call directly.");
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={handleClose}
        >
          {/* Modal Card */}
          <motion.div
            ref={popupRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0a0f1d] border border-gold/40 shadow-[0_0_50px_rgba(197,168,128,0.25)] overflow-hidden p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close form"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white/70 transition-all duration-200 hover:scale-110 active:scale-95 border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Background Decorative Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />

            {status === 'success' ? (
              /* Success State */
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                  Inquiry Sent via WhatsApp!
                </h3>
                <p className="text-sm text-white/80 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-gold font-bold">{formData.name}</span>. We've routed your inquiry directly to our WhatsApp advisor (<span className="text-gold font-bold">{WHATSAPP_LEAD_DISPLAY}</span>).
                </p>
                <a
                  href={whatsappUrl || "https://wa.me/917979098902"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  Continue Chat on WhatsApp
                </a>
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Direct WhatsApp advisor routing
                </div>
              </div>
            ) : (
              /* Form State */
              <div>
                {/* Header */}
                <div className="mb-6 text-center sm:text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-3 justify-center sm:justify-start">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gold/20 text-gold border border-gold/40">
                      <Sparkles className="w-3 h-3" /> Priority Plot Callback
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>Our associates are live</span>
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    Interested in Our <span className="text-gold italic font-normal">Gated Plots?</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light mt-2 leading-relaxed">
                    Get complete price breakdowns, brochures, and free on-site cab booking for plots across Patna, Bihta & Danapur.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full bg-white/5 border border-white/15 focus:border-gold rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-gold transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="e.g. 9876543210"
                        className="w-full bg-white/5 border border-white/15 focus:border-gold rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-gold transition-all"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-lg bg-gold hover:opacity-90 disabled:opacity-50 text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-gold/25 flex items-center justify-center gap-2 mt-2 cursor-pointer active:scale-95"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Opening WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <WhatsAppIcon className="w-4 h-4 text-black shrink-0" />
                        <span>Get Pricing via WhatsApp</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-white/50 pt-1">
                    🔒 Direct advisor consultation. By submitting, you agree to our{' '}
                    <Link to="/privacy-policy" onClick={handleClose} className="text-gold underline hover:text-white">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/terms" onClick={handleClose} className="text-gold underline hover:text-white">
                      Terms
                    </Link>.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
