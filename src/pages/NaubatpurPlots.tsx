import React, { useState } from 'react';
import { 
  MapPin, ShieldCheck, FileCheck, CheckCircle2, Phone, 
  ArrowRight, Download, Compass, TrendingUp, Building2, Landmark 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';
import SEOHead from '../components/SEOHead';
import { trackLeadSubmission, trackPhoneClick, trackBrochureDownload } from '../utils/analytics';
import { submitLeadToWhatsApp, WHATSAPP_LEAD_DISPLAY } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function NaubatpurPlots() {
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
        formName: 'Naubatpur Plots Form',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: 'Naubatpur Corridor Plots (AIIMS / Outer Ring Road)',
      });
      setWhatsappUrl(url);

      trackLeadSubmission('Naubatpur Plots Form', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: 'Naubatpur Corridor Plots',
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
          { "@type": "ListItem", "position": 3, "name": "Plots for Sale in Naubatpur", "item": "https://jameenwale.vercel.app/plots-for-sale-in-naubatpur" }
        ]
      },
      {
        "@type": "RealEstateListing",
        "name": "Residential Plots for Sale in Naubatpur Patna - JameenWale",
        "description": "Verified residential plots and land for sale in Naubatpur near AIIMS Patna & Bihta-Sarmera outer ring road. 100% freehold registry ready.",
        "url": "https://jameenwale.vercel.app/plots-for-sale-in-naubatpur",
        "image": "https://jameenwale.vercel.app/embassy.webp",
        "category": "Residential Plot",
        "offers": {
          "@type": "Offer",
          "price": "2000000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why are residential plots for sale in Naubatpur in high demand?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Naubatpur sits at the junction of the Bihta-Sarmera 6-lane expressway (SH-78) and is just 10–12 minutes from AIIMS Patna. It offers substantial price appreciation, clean air, and spacious plot configurations."
            }
          },
          {
            "@type": "Question",
            "name": "What is the starting price for land for sale in Naubatpur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Residential plots in our gated Naubatpur corridor start from ₹20 Lakhs for 900 sq.ft, with 1,200, 1,500, and 2,000 sq.ft options available."
            }
          },
          {
            "@type": "Question",
            "name": "How is land title verified in Naubatpur by JameenWale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every plot undergoes 30-year deed lineage checks, online Jamabandi verification on Bihar Bhumi, circle office Dakhil-Kharij clearance, and on-ground physical boundary demarcation."
            }
          },
          {
            "@type": "Question",
            "name": "Can I schedule a free site visit to Naubatpur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, JameenWale arranges free site inspection visits from Patna with our dedicated field executive to inspect plot coordinates and surrounding infrastructure."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full relative min-h-screen">
      <SEOHead
        title="Plots for Sale in Naubatpur | Land for Sale in Naubatpur Patna | JameenWale"
        description="Buy verified residential plots & land for sale in Naubatpur Patna near AIIMS & Bihta-Sarmera Expressway. 100% freehold clear title from ₹20L. Book site visit!"
        canonicalUrl="https://jameenwale.vercel.app/plots-for-sale-in-naubatpur"
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
            <span className="text-white font-medium">Plots for Sale in Naubatpur</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                  <TrendingUp className="w-4 h-4" /> 10 Mins from AIIMS Patna &amp; Outer Ring Road
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Plots for Sale in Naubatpur <br />
                  <span className="accent-gold">Residential Plots &amp; Land, Patna</span>
                </h1>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
                  Explore verified <strong>plots for sale in Naubatpur</strong> and future-ready <strong>land for sale in Naubatpur</strong> with JameenWale. Situated right along the intersection of the AIIMS corridor and the Bihta-Sarmera 6-lane Outer Ring Road, Naubatpur represents Patna&apos;s fastest-growing residential and logistical growth belt.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-2 pb-4 border-y border-white/10 text-white">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gold">₹20 Lakh</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Starting Price</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">900 sq ft</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Base Plot Size</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">10 Mins</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">To AIIMS Patna</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="tel:+916287220163"
                    onClick={() => trackPhoneClick('Naubatpur Hub Call CTA')}
                    className="px-6 py-3.5 bg-gold text-black font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Phone className="w-4 h-4" /> Call +91 6287220163
                  </a>
                  <a
                    href="/brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackBrochureDownload('Naubatpur Brochure')}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4 text-gold" /> Master Brochure
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-5">
                <div className="glass p-6 sm:p-8 rounded-xl shadow-2xl border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-1">Enquire About Naubatpur Plots</h2>
                  <p className="text-xs text-white/60 mb-6">Receive layout drawing, mutation verification details &amp; arrange a site visit.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="naubatpur-name" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        id="naubatpur-name"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. Sunil Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="naubatpur-phone" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Mobile Number (10 Digits)</label>
                      <input
                        type="tel"
                        id="naubatpur-phone"
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
                      <label htmlFor="naubatpur-email" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="naubatpur-email"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. sunil@example.com"
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
                      <span>{status === 'submitting' ? 'Opening WhatsApp...' : 'Get Details via WhatsApp'}</span>
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

        {/* Strategic Infrastructure in Naubatpur */}
        <section className="py-16 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Corridor Growth</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">Why Naubatpur is the Next Mega Growth Belt</h2>
              <p className="text-sm text-white/70 mt-3">
                As core Patna experiences density saturation, smart investors and homebuyers are moving toward Naubatpur for expansive plotted layouts, superior air quality, and rapid capital appreciation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-xl border border-white/10">
                <Landmark className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-base font-bold text-white mb-2">10 Mins from AIIMS Patna</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Direct arterial connection to premier medical healthcare, attracting doctors, healthcare professionals, and families seeking quiet, high-value living.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <Compass className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-base font-bold text-white mb-2">Bihta-Sarmera Outer Ring Road</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Intersects with the 6-lane State Highway 78, bypassing core urban traffic and connecting seamlessly to Bihta, Daniyawan, and South Bihar.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <ShieldCheck className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-base font-bold text-white mb-2">High Value-to-Cost Ratio</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Enjoy lower entry pricing with exceptional 3x-5x capital appreciation potential over the medium term as arterial infrastructure matures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Frequently Asked</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Questions About Land in Naubatpur</h2>
            </div>

            <div className="space-y-4">
              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">Why are residential plots for sale in Naubatpur in high demand?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Naubatpur sits at the junction of the Bihta-Sarmera 6-lane expressway (SH-78) and is just 10–12 minutes from AIIMS Patna. It offers substantial price appreciation, clean air, and spacious plot configurations.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">What is the starting price for land for sale in Naubatpur?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Residential plots in our gated Naubatpur corridor start from ₹20 Lakhs for 900 sq.ft, with 1,200, 1,500, and 2,000 sq.ft options available.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">How is land title verified in Naubatpur by JameenWale?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Every plot undergoes 30-year deed lineage checks, online Jamabandi verification on Bihar Bhumi, circle office Dakhil-Kharij clearance, and on-ground physical boundary demarcation.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">Can I schedule a free site visit to Naubatpur?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Yes, JameenWale arranges free site inspection visits from Patna with our dedicated field executive to inspect plot coordinates and surrounding infrastructure.
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
