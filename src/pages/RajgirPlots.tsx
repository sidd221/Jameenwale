import React, { useState } from 'react';
import { 
  MapPin, ShieldCheck, FileCheck, CheckCircle2, Phone, 
  ArrowRight, Download, Trees, Landmark, Compass, Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';
import SEOHead from '../components/SEOHead';
import { trackLeadSubmission, trackPhoneClick, trackBrochureDownload } from '../utils/analytics';
import { submitLeadToWhatsApp, WHATSAPP_LEAD_DISPLAY } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function RajgirPlots() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const url = submitLeadToWhatsApp({
        formName: 'Seven Crown Rajgir Form',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: 'Seven Crown - Silao, Rajgir, Nalanda',
      });
      setWhatsappUrl(url);

      trackLeadSubmission('Seven Crown Rajgir Form', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: 'Seven Crown Rajgir',
        destination: `WhatsApp (${WHATSAPP_LEAD_DISPLAY})`
      });

      setStatus('success');
      setFormData({ name: '', phone: '', email: '' });
      setTimeout(() => setStatus('idle'), 8000);
    } catch (err: any) {
      setErrorMessage("Could not connect to WhatsApp. Please call directly.");
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jameenwale.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "Plots for Sale in Bihar", "item": "https://jameenwale.vercel.app/plots-for-sale-in-bihar" },
          { "@type": "ListItem", "position": 3, "name": "Plots for Sale in Rajgir", "item": "https://jameenwale.vercel.app/plots-for-sale-in-rajgir" }
        ]
      },
      {
        "@type": "RealEstateListing",
        "name": "Plots for Sale in Rajgir Bihar - Seven Crown Eco-Living",
        "description": "Scenic gated society residential plots in Silao, Rajgir, Nalanda tourism corridor starting ₹22 Lakh. 100% verified legal freehold land.",
        "url": "https://jameenwale.vercel.app/plots-for-sale-in-rajgir",
        "image": "https://jameenwale.vercel.app/rajgir.webp",
        "category": "Residential Plot",
        "offers": {
          "@type": "Offer",
          "price": "2200000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "RealEstateAgent",
            "name": "JameenWale",
            "telephone": "+916287220163"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is Seven Crown located in Rajgir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Seven Crown is situated in Silao, Rajgir along the scenic Nalanda-Rajgir tourism corridor, offering serene green views and direct highway connectivity."
            }
          },
          {
            "@type": "Question",
            "name": "What is the price of residential plots in Rajgir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Plots in Seven Crown start at ₹22 Lakh onwards for a 900 sq.ft plot with clear freehold legal titles."
            }
          },
          {
            "@type": "Question",
            "name": "Why is Rajgir a prime investment destination in Bihar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rajgir is an international tourist, eco-living, and cultural center with the international Nalanda University, Nature Safari, Glass Bridge, and Ropeway, guaranteeing long-term property appreciation."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full relative min-h-screen">
      <SEOHead
        title="Plots for Sale in Rajgir | Residential Plots & Land | JameenWale"
        description="Buy verified residential plots for sale in Rajgir Bihar (Silao, Nalanda). Eco-living gated township with boundary walls, wide roads & clear title from ₹22L."
        canonicalUrl="https://jameenwale.vercel.app/plots-for-sale-in-rajgir"
        ogImage="https://jameenwale.vercel.app/rajgir.webp"
        schema={schema}
      />
      <Navbar />

      <main className="pt-24 pb-20 overflow-x-hidden">
        {/* Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-white/60">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/plots-for-sale-in-bihar" className="hover:text-gold transition-colors">Bihar</Link>
            <span>/</span>
            <span className="text-white font-medium">Plots for Sale in Rajgir</span>
          </nav>
        </div>

        {/* Project Hero Section */}
        <section className="relative py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading & Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                  <Trees className="w-4 h-4" /> Eco-Living Gated Township
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Plots for Sale in Rajgir <br />
                  <span className="accent-gold">Residential Plots &amp; Land, Nalanda</span>
                </h1>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
                  Seeking verified <strong>plots for sale in Rajgir</strong> or tranquil <strong>land for sale in Rajgir</strong>? <strong>Seven Crown</strong> is an exclusive eco-living residential plotted township situated in Silao, Rajgir along the historic Nalanda-Rajgir tourism corridor. Built for those who desire clean air, scenic mountain-backdrop tranquility, and exceptional capital appreciation.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-2 pb-4 border-y border-white/10 text-white">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gold">₹22 Lakh</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Starting Price</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">900 sq ft</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Base Plot Size</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">Silao, Rajgir</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Location</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="/rajgir_brosher.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackBrochureDownload('Seven Crown Rajgir PDF')}
                    className="px-6 py-3.5 bg-gold text-black font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Download className="w-4 h-4" /> Download Brochure
                  </a>
                  <a
                    href="tel:+916287220163"
                    onClick={() => trackPhoneClick('Rajgir Page Call')}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-gold" /> Call For Site Visit
                  </a>
                </div>
              </div>

              {/* Right Column: Inquiry Form Card */}
              <div className="lg:col-span-5">
                <div className="glass p-6 sm:p-8 rounded-xl shadow-2xl border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-1">Book a Rajgir Site Visit</h2>
                  <p className="text-xs text-white/60 mb-6">Experience Seven Crown’s eco-living environment firsthand.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="rajgir-name" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="rajgir-name"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. Vikas Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="rajgir-phone" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Phone Number (10 Digits)</label>
                      <input
                        type="tel"
                        id="rajgir-phone"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      />
                    </div>
                    <div>
                      <label htmlFor="rajgir-email" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="rajgir-email"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. vikas@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3.5 bg-gold text-black font-bold uppercase tracking-wider text-xs rounded-sm hover:opacity-90 transition-all disabled:opacity-50 mt-2 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-black shrink-0" />
                      <span>{status === 'submitting' ? 'Opening WhatsApp...' : status === 'success' ? 'Opening WhatsApp...' : 'Request Details via WhatsApp'}</span>
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

                    <p className="text-[10px] text-white/50 text-center pt-2">
                      By submitting, you agree to our{' '}
                      <Link to="/privacy-policy" className="text-gold underline hover:text-white">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link to="/terms" className="text-gold underline hover:text-white">
                        Terms
                      </Link>.
                    </p>

                    {errorMessage && (
                      <p className="text-red-400 text-xs bg-red-950/50 p-2 rounded text-center">{errorMessage}</p>
                    )}
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why Rajgir Corridor */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Rajgir: Bihar’s Top Eco-Tourism &amp; Education Destination
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                With international recognition, lush green hills, and major government infrastructure, land in Rajgir is one of the most resilient and rewarding long-term investments in Bihar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-lg space-y-3">
                <Landmark className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">Nalanda University</h3>
                <p className="text-sm text-white/60">Global academic landmark with world-class faculty, research centers, and international students.</p>
              </div>

              <div className="glass p-6 rounded-lg space-y-3">
                <Trees className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">Nature Safari &amp; Zoo</h3>
                <p className="text-sm text-white/60">Bihar’s premier eco-tourism park, glass bridge, and safari attracting millions of visitors.</p>
              </div>

              <div className="glass p-6 rounded-lg space-y-3">
                <Compass className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">Highway Connectivity</h3>
                <p className="text-sm text-white/60">Smooth 4-lane highway connecting Patna, Bakhtiyarpur, Bihar Sharif, and Rajgir.</p>
              </div>

              <div className="glass p-6 rounded-lg space-y-3">
                <Sparkles className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">Pure Living</h3>
                <p className="text-sm text-white/60">Clean mountain air, zero industrial pollution, and lush greenery for retirement or vacation homes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Township Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Seven Crown Township Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-white/10 p-6 rounded-lg space-y-2">
                <CheckCircle2 className="w-6 h-6 text-gold" />
                <h3 className="font-bold text-white text-base">Gated Boundary &amp; Security</h3>
                <p className="text-sm text-white/60">Well-demarcated boundary walls around the plotted township with dedicated entry gate security.</p>
              </div>
              <div className="border border-white/10 p-6 rounded-lg space-y-2">
                <CheckCircle2 className="w-6 h-6 text-gold" />
                <h3 className="font-bold text-white text-base">Wide Internal Roads</h3>
                <p className="text-sm text-white/60">Paved roads connecting each plot with clear corner markings and street lighting provisions.</p>
              </div>
              <div className="border border-white/10 p-6 rounded-lg space-y-2">
                <CheckCircle2 className="w-6 h-6 text-gold" />
                <h3 className="font-bold text-white text-base">Direct Freehold Registry</h3>
                <p className="text-sm text-white/60">Crystal-clear legal title with immediate sale deed registration in the buyer’s name.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions (Rajgir Plots)
            </h2>
            <div className="space-y-4">
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">Can people living outside Rajgir purchase plots here?</h3>
                <p className="text-sm text-white/70">Yes, any Indian citizen or NRI can buy freehold land in Rajgir. We handle the entire documentation and registry process on your behalf.</p>
              </div>
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">What is the distance between Patna and Seven Crown Rajgir?</h3>
                <p className="text-sm text-white/70">Via the Bakhtiyarpur-Rajgir 4-lane national highway, the driving time is approximately 1.5 to 2 hours from central Patna.</p>
              </div>
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">Is the land suitable for holiday homes or farmhouses?</h3>
                <p className="text-sm text-white/70">Absolutely. With pristine natural surroundings and tourism infrastructure, it is ideal for second homes, wellness retreats, or long-term wealth compounding.</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link 
                to="/land-buying-checklist-bihar" 
                className="inline-flex items-center gap-2 text-gold font-bold hover:underline text-sm"
              >
                <FileCheck className="w-4 h-4" /> Check our Bihar Land Buying Due Diligence Guide &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTAs />
      <div className="fixed inset-0 bg-[#0f172a] -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-[#0f172a] pointer-events-none"></div>
    </div>
  );
}
