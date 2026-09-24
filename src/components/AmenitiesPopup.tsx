import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Phone, User, CheckCircle2, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

export default function AmenitiesPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasTriggered) return;

    const amenitiesElem = document.getElementById('amenities');
    if (!amenitiesElem) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsOpen(true);
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3
      }
    );

    observer.observe(amenitiesElem);

    return () => observer.disconnect();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        _subject: "New Lead from Amenities Section - Jameenwale",
        _cc: "siddhantsinha999@gmail.com",
        _captcha: false
      };

      const response = await fetch("https://formsubmit.co/ajax/anish248patel@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && (data.success === "true" || data.success === true || response.status === 200)) {
        setStatus('success');
        sessionStorage.setItem('amenities_popup_submitted_or_closed', 'true');
        setTimeout(() => {
          setIsOpen(false);
        }, 3500);
      } else {
        console.error("Submission error:", data);
        if (data && data.message && typeof data.message === 'string') {
          setErrorMessage(data.message);
        } else {
          setErrorMessage("Failed to submit details. Please try again or call us directly.");
        }
        setStatus('error');
      }
    } catch (error: any) {
      console.error("Popup form error:", error);
      setErrorMessage("Network error occurred. Please check your connection.");
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
                <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold text-gold flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(197,168,128,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                  Request Received!
                </h3>
                <p className="text-sm text-white/80 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-gold font-bold">{formData.name}</span>. Our senior real estate advisor will call you shortly on <span className="text-gold font-bold">{formData.phone}</span> with exclusive plot pricing & details.
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Details sent securely to advisors
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
                        <span>Submitting Details...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Instant Pricing & Brochure</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-white/40 pt-1">
                    🔒 100% Privacy Guaranteed. No spam. Direct advisor consultation.
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
