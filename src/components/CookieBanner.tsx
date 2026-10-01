import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Check, Shield } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('jameenwale_cookie_consent');
      if (!consent) {
        // Delay display slightly for smooth page load
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('jameenwale_cookie_consent', 'accepted');
    } catch {}
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem('jameenwale_cookie_consent', 'essential');
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-20 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md z-[120] animate-fade-in-up"
    >
      <div className="glass p-5 rounded-xl border border-white/20 shadow-2xl bg-[#0f172a]/95 backdrop-blur-xl text-white">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-gold/15 text-gold shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                Cookie &amp; Advertising Transparency
              </h4>
              <button
                type="button"
                onClick={handleEssentialOnly}
                aria-label="Dismiss cookie notice"
                className="text-white/50 hover:text-white p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              We use cookies and measurement tags (including Google Analytics and Google Ads) to analyze website traffic and personalize advertising. We never sell your personal data. Read our{' '}
              <Link to="/privacy-policy" className="text-gold underline hover:text-white">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link to="/terms" className="text-gold underline hover:text-white">
                Terms
              </Link>.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded bg-gold text-black text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-1.5 shadow-md active:scale-95"
              >
                <Check className="w-3.5 h-3.5" /> Accept All
              </button>
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="px-3 py-2 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider transition-all border border-white/15"
              >
                Essential Only
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
