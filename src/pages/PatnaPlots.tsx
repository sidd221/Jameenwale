import React, { useState } from 'react';
import { 
  MapPin, ShieldCheck, FileCheck, CheckCircle2, Phone, 
  ArrowRight, Download, Building2, Car, Compass, TrendingUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';
import SEOHead from '../components/SEOHead';
import { trackLeadSubmission, trackPhoneClick, trackBrochureDownload } from '../utils/analytics';
import { submitLeadToWhatsApp, WHATSAPP_LEAD_DISPLAY } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function PatnaPlots() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', preferredLocation: 'Shivala More (Embassy Capital)' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const url = submitLeadToWhatsApp({
        formName: 'Patna Plots Hub Inquiry Form',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.preferredLocation,
        project: 'Plots for Sale in Patna',
      });
      setWhatsappUrl(url);

      trackLeadSubmission('Patna Plots Inquiry Form', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.preferredLocation,
        destination: `WhatsApp (${WHATSAPP_LEAD_DISPLAY})`
      });

      setStatus('success');
      setFormData({ name: '', phone: '', email: '', preferredLocation: 'Shivala More (Embassy Capital)' });
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
          { "@type": "ListItem", "position": 2, "name": "Plots for Sale in Patna", "item": "https://jameenwale.vercel.app/plots-for-sale-in-patna" }
        ]
      },
      {
        "@type": "RealEstateListing",
        "name": "Residential Plots for Sale in Patna - JameenWale",
        "description": "Verified residential plots and land for sale in Patna across Shivala More, Danapur, and Bihta corridor. 100% freehold title deeds with boundary walls.",
        "url": "https://jameenwale.vercel.app/plots-for-sale-in-patna",
        "image": "https://jameenwale.vercel.app/embassy.webp",
        "category": "Residential Plot",
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "2100000",
          "highPrice": "5000000",
          "priceCurrency": "INR",
          "offerCount": "3"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the starting price for residential plots for sale in Patna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At JameenWale, verified residential plots in Patna start from ₹21 Lakh onwards (800 sq.ft at Embassy Capital, Shivala More) and ₹28 Lakh onwards (1,000 sq.ft at IT Park, Bihta corridor)."
            }
          },
          {
            "@type": "Question",
            "name": "Which areas in Patna have the highest investment potential for land?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The fastest-appreciating land corridors in Patna are Shivala More (7 mins from Saguna More via the Danapur-Bihta elevated road), Bihta corridor (opposite NIT & near IIT Patna), and Naubatpur junction along the upcoming outer ring road."
            }
          },
          {
            "@type": "Question",
            "name": "Are plot purchase loans available from banks in Patna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our plotted townships have verified titles and legal clearance, making them eligible for plot purchase and composite home loans from leading nationalized and private banks including SBI, HDFC, ICICI, and Axis Bank."
            }
          },
          {
            "@type": "Question",
            "name": "What legal documents should I check before buying a plot in Patna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Always verify the Registered Sale Deed (Kewala), certified Khatiyan & Jamabandi records on the Bihar Bhumi portal, non-encumbrance certificate (EC), Land Possession Certificate (LPC), and Circle Office Dakhil-Kharij (mutation) receipts."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full relative min-h-screen">
      <SEOHead
        title="Plots for Sale in Patna | Residential Plots & Land in Patna | JameenWale"
        description="Find verified residential plots and land for sale in Patna starting ₹21L. Freehold gated townships with boundary walls, 30-40ft roads & bank loan at Shivala More & Bihta."
        canonicalUrl="https://jameenwale.vercel.app/plots-for-sale-in-patna"
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
            <span className="text-white font-medium">Plots for Sale in Patna</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                  <ShieldCheck className="w-4 h-4" /> 100% Freehold Verified Titles &amp; Immediate Registry
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Plots for Sale in Patna: <br />
                  <span className="accent-gold">Residential Plots &amp; Land</span>
                </h1>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
                  Looking to buy a <strong>plot for sale in Patna</strong> or invest in premium <strong>residential land in Patna</strong>? JameenWale curates legally authenticated gated townships across West Patna’s high-growth corridors—including Shivala More, Danapur, and Bihta. All properties feature complete boundary walls, 30–40ft wide concrete roads, and swift mutation support.
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-4 pt-2 pb-4 border-y border-white/10 text-white">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gold">₹21L - ₹50L</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Price Range</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">800 - 3200</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Sq.Ft Plot Sizes</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">100%</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Mutation Ready</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="tel:+916287220163"
                    onClick={() => trackPhoneClick('Patna Hub Call CTA')}
                    className="px-6 py-3.5 bg-gold text-black font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Phone className="w-4 h-4" /> Call +91 6287220163
                  </a>
                  <a
                    href="/brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackBrochureDownload('Patna Master Brochure')}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4 text-gold" /> Master Brochure
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-5">
                <div className="glass p-6 sm:p-8 rounded-xl shadow-2xl border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-1">Enquire About Plots in Patna</h2>
                  <p className="text-xs text-white/60 mb-6">Receive project layout drawings, pricing sheets, and arrange a physical site visit.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="patna-name" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        id="patna-name"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. Sanjay Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="patna-phone" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Mobile Number (10 Digits)</label>
                      <input
                        type="tel"
                        id="patna-phone"
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
                      <label htmlFor="patna-email" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="patna-email"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. sanjay@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="patna-loc" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Preferred Location</label>
                      <select
                        id="patna-loc"
                        className="w-full bg-[#0f172a] border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        value={formData.preferredLocation}
                        onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      >
                        <option value="Shivala More (Embassy Capital)">Shivala More (Embassy Capital - ₹21L onwards)</option>
                        <option value="Bihta Corridor (IT Park)">Bihta Corridor (IT Park - ₹28L onwards)</option>
                        <option value="Danapur / Saguna More Corridor">Danapur / Saguna More Corridor</option>
                        <option value="Naubatpur Zone">Naubatpur Zone</option>
                        <option value="Rajgir / Nalanda Corridor">Rajgir / Nalanda (Seven Crown - ₹22L onwards)</option>
                      </select>
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

        {/* Featured Patna Plotted Projects */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Verified Residential Plots &amp; Land Projects in Patna
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Explore our active plotted communities strategically developed along the major growth expressways of Patna.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Project 1: Embassy Capital */}
              <div className="glass p-8 rounded-xl border border-white/10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold">Shivala More, Patna</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30 font-medium">Freehold Title</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Embassy Capital</h3>
                  <p className="text-lg font-bold text-gold">₹21 Lakh onwards | 800 sq.ft</p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Situated just 7–10 minutes from Saguna More via the Danapur-Bihta elevated road. Features complete perimeter boundary walls, 24/7 CCTV surveillance, 30–40ft wide black pitch roads, and instant registry.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <Link 
                    to="/plots-for-sale-in-danapur"
                    className="px-5 py-2.5 bg-gold text-black font-bold text-xs uppercase tracking-wider rounded-sm hover:opacity-90 transition-all flex items-center gap-1.5"
                  >
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a 
                    href="/shivala.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackBrochureDownload('Embassy Capital Shivala PDF')}
                    className="text-xs font-bold text-white/80 hover:text-gold flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> Brochure (PDF)
                  </a>
                </div>
              </div>

              {/* Project 2: IT Park Bihta */}
              <div className="glass p-8 rounded-xl border border-white/10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold">Opposite NIT Bihta, Patna</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30 font-medium">RERA Approved</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">IT Park Plotted Township</h3>
                  <p className="text-lg font-bold text-gold">₹28 Lakh onwards | 1,000 sq.ft</p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Positioned directly opposite the NIT Patna campus in the Bihta Growth Corridor. Ideal for residential living as well as commercial ventures (hostels, coaching institutes, retail frontage) with heavy footfall.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <Link 
                    to="/plots-for-sale-in-bihta"
                    className="px-5 py-2.5 bg-gold text-black font-bold text-xs uppercase tracking-wider rounded-sm hover:opacity-90 transition-all flex items-center gap-1.5"
                  >
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a 
                    href="/it.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackBrochureDownload('IT Park Bihta PDF')}
                    className="text-xs font-bold text-white/80 hover:text-gold flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> Brochure (PDF)
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why Invest in Patna Land */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Why Invest in Residential Land &amp; Plots in Patna?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-lg space-y-3">
                <Car className="w-8 h-8 text-gold" />
                <h3 className="text-lg font-bold text-white">Mega Infrastructure Boom</h3>
                <p className="text-sm text-white/60">
                  The Danapur-Bihta 4-lane elevated corridor, Patna Metro Rail, and the outer ring road are dramatically shortening transit times and driving land values.
                </p>
              </div>
              <div className="glass p-6 rounded-lg space-y-3">
                <TrendingUp className="w-8 h-8 text-gold" />
                <h3 className="text-lg font-bold text-white">Exceptional Capital Growth</h3>
                <p className="text-sm text-white/60">
                  Plotted land in West Patna has historically outperformed conventional apartments in annual capital appreciation and flexible customization.
                </p>
              </div>
              <div className="glass p-6 rounded-lg space-y-3">
                <FileCheck className="w-8 h-8 text-gold" />
                <h3 className="text-lg font-bold text-white">Crystal-Clear Titles</h3>
                <p className="text-sm text-white/60">
                  JameenWale provides complete legal due diligence: 30-year deed search, Jamabandi revenue extracts, and sub-registrar certified Kewala copies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions (Patna Plots &amp; Land)
            </h2>
            <div className="space-y-4">
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">What is the process to buy a residential plot in Patna through JameenWale?</h3>
                <p className="text-sm text-white/70">
                  Start with a guided on-site visit. Once you select a plot, review the verified Kewala and Khatiyan records with our legal desk, execute the Agreement for Sale, and proceed to registered deed execution at the local sub-registrar office.
                </p>
              </div>
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">Can I build my own home or do you require a specific builder?</h3>
                <p className="text-sm text-white/70">
                  All plots are 100% freehold. You have complete freedom to build your home according to your own architectural preferences and timeline.
                </p>
              </div>
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">How do I verify that the land has no legal disputes?</h3>
                <p className="text-sm text-white/70">
                  We supply certified Land Possession Certificates (LPC), non-encumbrance certificates (EC), and direct links to verify Jamabandi records on Bihar Bhumi before executing agreements.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link 
                to="/land-buying-checklist-bihar" 
                className="inline-flex items-center gap-2 text-gold font-bold hover:underline text-sm"
              >
                <FileCheck className="w-4 h-4" /> Read our 6-Step Bihar Land Buying Due Diligence Guide &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Sub-Corridors Internal Links */}
        <section className="py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Explore Patna Area Locations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <Link to="/plots-for-sale-in-danapur" className="p-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <div className="font-bold text-white">Danapur &amp; Shivala</div>
                <div className="text-white/50">From ₹21L onwards</div>
              </Link>
              <Link to="/plots-for-sale-in-bihta" className="p-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <div className="font-bold text-white">Bihta Corridor</div>
                <div className="text-white/50">From ₹28L onwards</div>
              </Link>
              <Link to="/plots-for-sale-in-naubatpur" className="p-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <div className="font-bold text-white">Naubatpur Corridor</div>
                <div className="text-white/50">Outer Ring Road Zone</div>
              </Link>
              <Link to="/plots-for-sale-in-rajgir" className="p-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <div className="font-bold text-white">Rajgir Eco-Living</div>
                <div className="text-white/50">From ₹22L onwards</div>
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
