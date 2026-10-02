import React, { useState } from 'react';
import { 
  MapPin, ShieldCheck, FileCheck, CheckCircle2, Phone, 
  ArrowRight, Download, Car, Compass, Building2, TrendingUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';
import SEOHead from '../components/SEOHead';
import { trackLeadSubmission, trackPhoneClick, trackBrochureDownload } from '../utils/analytics';
import { submitLeadToWhatsApp, WHATSAPP_LEAD_DISPLAY } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function DanapurPlots() {
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
        formName: 'Danapur Plots Form',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: 'Danapur Corridor Plots (Embassy Capital - Shivala More)',
      });
      setWhatsappUrl(url);

      trackLeadSubmission('Danapur Plots Form', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: 'Danapur Corridor Plots',
        destination: `WhatsApp (${WHATSAPP_LEAD_DISPLAY})`
      });

      setStatus('success');
      setFormData({ name: '', phone: '', email: '' });
      setTimeout(() => setStatus('idle'), 8000);
    } catch {
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
          { "@type": "ListItem", "position": 2, "name": "Plots for Sale in Patna", "item": "https://jameenwale.vercel.app/plots-for-sale-in-patna" },
          { "@type": "ListItem", "position": 3, "name": "Plots for Sale in Danapur", "item": "https://jameenwale.vercel.app/plots-for-sale-in-danapur" }
        ]
      },
      {
        "@type": "RealEstateListing",
        "name": "Residential Plots for Sale in Danapur Patna - Embassy Capital",
        "description": "Verified residential plots and land for sale in Danapur corridor at Shivala More. 7 mins from Saguna More, boundary walls, wide roads & bank loan approved.",
        "url": "https://jameenwale.vercel.app/plots-for-sale-in-danapur",
        "image": "https://jameenwale.vercel.app/embassy.webp",
        "category": "Residential Plot",
        "offers": {
          "@type": "Offer",
          "price": "2100000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the price of residential plots for sale in Danapur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Plots in the Danapur-Shivala corridor start from ₹21 Lakhs for 800 sq.ft, with 1,000, 1,200, 1,600, and 2,400 sq.ft configurations available at competitive rates."
            }
          },
          {
            "@type": "Question",
            "name": "How far is the property from Danapur Railway Station and Saguna More?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The plots at Embassy Capital (Shivala More) are located just 7 minutes from Saguna More and Danapur Railway Station via the Danapur-Bihta 4-lane road."
            }
          },
          {
            "@type": "Question",
            "name": "Can I obtain a bank loan for purchasing land in Danapur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our Danapur properties have 100% verified freehold titles and complete legal dossiers, making them eligible for plot loans from SBI, HDFC, ICICI, and Axis Bank."
            }
          },
          {
            "@type": "Question",
            "name": "What infrastructure is included in the Danapur plotted township?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The project features full boundary wall fencing, 30ft and 40ft wide concrete roads, electricity transformer connection, underground drainage, street lighting, and dedicated green park spaces."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full relative min-h-screen">
      <SEOHead
        title="Plots for Sale in Danapur | Land for Sale in Danapur Patna | JameenWale"
        description="Buy verified residential plots & land for sale in Danapur Patna (Shivala More). 7 mins from Saguna More, boundary walls, 30-40ft roads from ₹21L. Free site visit!"
        canonicalUrl="https://jameenwale.vercel.app/plots-for-sale-in-danapur"
        ogImage="https://jameenwale.vercel.app/embassy.webp"
        schema={schema}
      />
      <Navbar />

      <main className="pt-24 pb-20 overflow-x-hidden">
        {/* Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-white/60">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/plots-for-sale-in-patna" className="hover:text-gold transition-colors">Patna</Link>
            <span>/</span>
            <span className="text-white font-medium">Plots for Sale in Danapur</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                  <TrendingUp className="w-4 h-4" /> 7 Mins from Saguna More &amp; Danapur Station
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Plots for Sale in Danapur <br />
                  <span className="accent-gold">Residential Plots &amp; Land, Patna</span>
                </h1>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
                  Seeking verified <strong>plots for sale in Danapur</strong> or ready-to-build <strong>land for sale in Danapur</strong>? <strong>Embassy Capital</strong> at Shivala More provides premium gated community plots located just 7 minutes from Saguna More and Danapur Railway Station. Enjoy 100% freehold land, boundary walls, 30–40ft wide internal concrete roads, and bank loan approvals.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-2 pb-4 border-y border-white/10 text-white">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gold">₹21 Lakh</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Starting Price</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">800 sq ft</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Base Plot Size</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">7 Mins</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">From Saguna More</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="tel:+916287220163"
                    onClick={() => trackPhoneClick('Danapur Hub Call CTA')}
                    className="px-6 py-3.5 bg-gold text-black font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Phone className="w-4 h-4" /> Call +91 6287220163
                  </a>
                  <a
                    href="/brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackBrochureDownload('Danapur Brochure')}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4 text-gold" /> Download Brochure
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-5">
                <div className="glass p-6 sm:p-8 rounded-xl shadow-2xl border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-1">Book a Danapur Site Visit</h2>
                  <p className="text-xs text-white/60 mb-6">Receive layout map, verified Kewala document chain &amp; free site visit pickup.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="danapur-name" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        id="danapur-name"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="danapur-phone" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Mobile Number (10 Digits)</label>
                      <input
                        type="tel"
                        id="danapur-phone"
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
                      <label htmlFor="danapur-email" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="danapur-email"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3 bg-gold text-black font-bold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-black shrink-0" />
                      <span>{status === 'submitting' ? 'Opening WhatsApp...' : 'Request Layout via WhatsApp'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[10px] text-white/50 text-center pt-1">
                      By submitting, you agree to our{' '}
                      <Link to="/privacy-policy" className="text-gold underline hover:text-white">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link to="/terms" className="text-gold underline hover:text-white">
                        Terms
                      </Link>.
                    </p>

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
                    {status === 'error' && (
                      <div className="p-3 bg-red-500/20 border border-red-500/40 text-red-300 text-xs rounded">
                        {errorMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Connectivity & Strategic Advantages */}
        <section className="py-16 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Why Danapur Corridor?</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">The Unbeatable Location Advantage of Danapur</h2>
              <p className="text-sm text-white/70 mt-3">
                Danapur serves as the undisputed transit gateway of West Patna. With Bailey Road, the elevated expressway, and the upcoming Metro link, residential land in Danapur offers immediate livability and rapid appreciation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-xl border border-white/10">
                <Car className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-base font-bold text-white mb-2">7 Mins to Saguna More</h3>
                <p className="text-xs text-white/60 leading-relaxed">Direct, congestion-free drive along the main 4-lane road to Patna&apos;s prime commercial and retail hub.</p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <Building2 className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-base font-bold text-white mb-2">Danapur Railway Station</h3>
                <p className="text-xs text-white/60 leading-relaxed">Major East Central Railway terminal minutes away, providing superfast rail transit across India.</p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <Compass className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-base font-bold text-white mb-2">Elevated Expressway Entry</h3>
                <p className="text-xs text-white/60 leading-relaxed">Seamless ramp access to the Danapur-Bihta elevated expressway connecting Patna to the new Bihta Airport.</p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <ShieldCheck className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-base font-bold text-white mb-2">Clear Freehold Registry</h3>
                <p className="text-xs text-white/60 leading-relaxed">100% verified revenue records with instant registry and circle office Dakhil-Kharij mutation assistance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Plot Sizes & Pricing */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Configurations</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">Available Plot Sizes at Embassy Capital, Danapur</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">Compact Residential</div>
                  <h3 className="text-2xl font-bold text-white mb-1">800 - 1,000 sq ft</h3>
                  <div className="text-xl font-bold text-gold mb-4">Starting ₹21 Lakh</div>
                  <ul className="text-xs text-white/70 space-y-2 mb-6">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Ideal for 2BHK/3BHK independent home</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> 30ft wide front road access</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Ready demarcation &amp; boundary pillar</li>
                  </ul>
                </div>
                <a href="#danapur-name" className="w-full py-2.5 bg-white/10 hover:bg-gold hover:text-black font-bold text-xs uppercase tracking-widest text-center rounded-sm transition-all">Enquire Now</a>
              </div>

              <div className="glass p-6 rounded-xl border border-gold/40 flex flex-col justify-between relative shadow-xl">
                <div className="absolute -top-3 right-6 px-3 py-1 bg-gold text-black font-bold text-[10px] uppercase tracking-wider rounded-full">Most Popular</div>
                <div>
                  <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">Standard Family Villa</div>
                  <h3 className="text-2xl font-bold text-white mb-1">1,200 - 1,600 sq ft</h3>
                  <div className="text-xl font-bold text-gold mb-4">From ₹31.5 Lakh</div>
                  <ul className="text-xs text-white/70 space-y-2 mb-6">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Spacious front yard &amp; parking area</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Prime corner &amp; park-facing options</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> 30ft - 40ft wide main avenue</li>
                  </ul>
                </div>
                <a href="#danapur-name" className="w-full py-2.5 bg-gold text-black font-bold text-xs uppercase tracking-widest text-center rounded-sm hover:opacity-90 transition-all">Enquire Now</a>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">Large Estate / Commercial</div>
                  <h3 className="text-2xl font-bold text-white mb-1">2,000 - 2,400+ sq ft</h3>
                  <div className="text-xl font-bold text-gold mb-4">From ₹52.5 Lakh</div>
                  <ul className="text-xs text-white/70 space-y-2 mb-6">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Substantial road frontage</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Suitable for multi-storey rental / duplex</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Complete freehold documentation</li>
                  </ul>
                </div>
                <a href="#danapur-name" className="w-full py-2.5 bg-white/10 hover:bg-gold hover:text-black font-bold text-xs uppercase tracking-widest text-center rounded-sm transition-all">Enquire Now</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white/[0.02] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Frequently Asked</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Questions About Buying Land in Danapur</h2>
            </div>

            <div className="space-y-4">
              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">What is the price of residential plots for sale in Danapur?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Plots in the Danapur-Shivala corridor start from ₹21 Lakhs for 800 sq.ft, with 1,000, 1,200, 1,600, and 2,400 sq.ft configurations available at competitive rates.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">How far is the property from Danapur Railway Station and Saguna More?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  The plots at Embassy Capital (Shivala More) are located just 7 minutes from Saguna More and Danapur Railway Station via the Danapur-Bihta 4-lane road.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">Can I obtain a bank loan for purchasing land in Danapur?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Yes, our Danapur properties have 100% verified freehold titles and complete legal dossiers, making them eligible for plot loans from SBI, HDFC, ICICI, and Axis Bank.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">What infrastructure is included in the Danapur plotted township?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  The project features full boundary wall fencing, 30ft and 40ft wide concrete roads, electricity transformer connection, underground drainage, street lighting, and dedicated green park spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingCTAs />
    </div>
  );
}
