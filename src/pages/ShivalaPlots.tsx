import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, ShieldCheck, FileCheck, CheckCircle2, Phone, 
  ArrowRight, Download, Car, School, Hospital, Building2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';
import SEOHead from '../components/SEOHead';
import { trackLeadSubmission, trackPhoneClick, trackBrochureDownload } from '../utils/analytics';
import { submitLeadToWhatsApp, WHATSAPP_LEAD_DISPLAY } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function ShivalaPlots() {
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
        formName: 'Embassy Capital Shivala Form',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: 'Embassy Capital - Shivala More, Patna',
      });
      setWhatsappUrl(url);

      trackLeadSubmission('Embassy Capital Shivala Form', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: 'Embassy Capital',
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
          { "@type": "ListItem", "position": 2, "name": "Properties", "item": "https://jameenwale.vercel.app/#properties" },
          { "@type": "ListItem", "position": 3, "name": "Plots in Shivala More Patna", "item": "https://jameenwale.vercel.app/plots-in-shivala-patna" }
        ]
      },
      {
        "@type": "RealEstateListing",
        "name": "Embassy Capital - Gated Community Plots in Shivala More Patna",
        "description": "RERA-compliant residential plots at Shivala More Bodhgawa, 7-10 mins from Saguna More Patna via Danapur-Bihta elevated road.",
        "url": "https://jameenwale.vercel.app/plots-in-shivala-patna",
        "image": "https://jameenwale.vercel.app/embassy.webp",
        "category": "Residential Plot",
        "offers": {
          "@type": "Offer",
          "price": "2100000",
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
            "name": "Where is Embassy Capital located in Patna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Embassy Capital is situated at Shivala More Bodhgawa, Patna, just 7 to 10 minutes from Saguna More via the Danapur-Bihta elevated corridor."
            }
          },
          {
            "@type": "Question",
            "name": "What is the starting price and size of plots in Embassy Capital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Plots in Embassy Capital start from ₹21 Lakh onwards for an 800 sq.ft plot, with multiple standard configurations available for immediate registry."
            }
          },
          {
            "@type": "Question",
            "name": "Are bank loans available for plots in Shivala More through JameenWale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our Embassy Capital project is legally clear with freehold title and supported by leading banks (SBI, HDFC, ICICI, Axis Bank) for plot purchase and home construction loans."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full relative min-h-screen">
      <SEOHead
        title="Plots in Shivala More Patna | Embassy Capital Gated Society | JameenWale"
        description="Buy verified gated community residential plots in Shivala More Bodhgawa Patna. 7 mins from Saguna More, boundary walls, 30-40ft roads, starting ₹21L. Free site visit!"
        canonicalUrl="https://jameenwale.vercel.app/plots-in-shivala-patna"
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
            <a href="/#properties" className="hover:text-gold transition-colors">Projects</a>
            <span>/</span>
            <span className="text-white font-medium">Embassy Capital (Shivala More)</span>
          </nav>
        </div>

        {/* Project Hero Section */}
        <section className="relative py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading & Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                  <ShieldCheck className="w-4 h-4" /> Ready for Immediate Registry &amp; Mutation
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Residential Plots in <br />
                  <span className="accent-gold">Shivala More, Patna</span>
                </h1>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
                  <strong>Embassy Capital</strong> is an ultra-luxury gated township situated at Shivala More Bodhgawa, just 7–10 minutes from Saguna More via the Danapur-Bihta elevated expressway. Designed with solid boundary walls, wide black pitch roads, underground drainage, and complete title transparency.
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
                    <div className="text-2xl sm:text-3xl font-bold">7-10 Mins</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">To Saguna More</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="/shivala.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackBrochureDownload('Embassy Capital Shivala PDF')}
                    className="px-6 py-3.5 bg-gold text-black font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Download className="w-4 h-4" /> Download Brochure
                  </a>
                  <a
                    href="tel:+916287220163"
                    onClick={() => trackPhoneClick('Shivala Page Call')}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-gold" /> Call For Site Visit
                  </a>
                </div>
              </div>

              {/* Right Column: Inquiry Form Card */}
              <div className="lg:col-span-5">
                <div className="glass p-6 sm:p-8 rounded-xl shadow-2xl border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-1">Book a Site Visit</h2>
                  <p className="text-xs text-white/60 mb-6">Inspect Embassy Capital in person with free vehicle assistance.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="shivala-name" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="shivala-name"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="shivala-phone" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Phone Number (10 Digits)</label>
                      <input
                        type="tel"
                        id="shivala-phone"
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
                      <label htmlFor="shivala-email" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="shivala-email"
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

        {/* Location & Infrastructure Advantages */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Strategic Location &amp; Connectivity
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Shivala More is rapidly becoming the crown jewel of West Patna residential real estate. Situated at the junction of the Danapur-Bihta elevated highway and the outer ring road corridor, it delivers rapid transit to Patna’s most critical landmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-lg space-y-3">
                <Car className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">Saguna More / Bailey Rd</h3>
                <p className="text-sm text-white/60">7–10 minutes via direct expressway connection with seamless access to Danapur.</p>
              </div>

              <div className="glass p-6 rounded-lg space-y-3">
                <Hospital className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">AIIMS Patna</h3>
                <p className="text-sm text-white/60">Under 12 minutes drive, offering world-class healthcare access nearby.</p>
              </div>

              <div className="glass p-6 rounded-lg space-y-3">
                <School className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">Top Schools &amp; Colleges</h3>
                <p className="text-sm text-white/60">DPS, St. Karen’s, and multiple reputed CBSE schools within a 15-minute radius.</p>
              </div>

              <div className="glass p-6 rounded-lg space-y-3">
                <Building2 className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">Commercial Hubs</h3>
                <p className="text-sm text-white/60">Malls, restaurants, banking branches, and petrol stations within 5 minutes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Township Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Embassy Capital Township Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-white/10 p-6 rounded-lg space-y-2">
                <CheckCircle2 className="w-6 h-6 text-gold" />
                <h3 className="font-bold text-white text-base">Perimeter Boundary Wall</h3>
                <p className="text-sm text-white/60">Full compound wall surrounding the entire township with guarded entry gates and 24/7 CCTV surveillance.</p>
              </div>
              <div className="border border-white/10 p-6 rounded-lg space-y-2">
                <CheckCircle2 className="w-6 h-6 text-gold" />
                <h3 className="font-bold text-white text-base">30–40ft Wide Roads</h3>
                <p className="text-sm text-white/60">Heavy-duty black pitch internal roads allowing smooth two-way vehicular movement and parking.</p>
              </div>
              <div className="border border-white/10 p-6 rounded-lg space-y-2">
                <CheckCircle2 className="w-6 h-6 text-gold" />
                <h3 className="font-bold text-white text-base">Underground Drainage &amp; Power</h3>
                <p className="text-sm text-white/60">Pre-laid drainage channels, electricity transformers, and dedicated drinking water points.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions (Shivala More Plots)
            </h2>
            <div className="space-y-4">
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">Can I start house construction immediately?</h3>
                <p className="text-sm text-white/70">Yes. The land is 100% freehold and clear of disputes. Once registration and mutation are complete, you can begin construction right away.</p>
              </div>
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">What documents are provided with Embassy Capital plots?</h3>
                <p className="text-sm text-white/70">You will receive the certified Registered Sale Deed (Kewala), updated Jamabandi and Khatiyan extracts, Land Possession Certificate assistance, and instant mutation clearance.</p>
              </div>
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">How can I verify the legal title before paying?</h3>
                <p className="text-sm text-white/70">We encourage complete due diligence. You can examine deed copies at our Rupaspur office or have your legal advisor verify records on the Bihar Bhumi portal before booking.</p>
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
