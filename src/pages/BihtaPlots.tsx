import React, { useState } from 'react';
import { 
  MapPin, ShieldCheck, FileCheck, CheckCircle2, Phone, 
  ArrowRight, Download, GraduationCap, Plane, Building, TrendingUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';
import SEOHead from '../components/SEOHead';
import { trackLeadSubmission, trackPhoneClick, trackBrochureDownload } from '../utils/analytics';
import { submitLeadToWhatsApp, WHATSAPP_LEAD_DISPLAY } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function BihtaPlots() {
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
        formName: 'IT Park Bihta Form',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: 'IT Park - Opposite NIT Bihta, Patna',
      });
      setWhatsappUrl(url);

      trackLeadSubmission('IT Park Bihta Form', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: 'IT Park Bihta',
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
          { "@type": "ListItem", "position": 3, "name": "Plots for Sale in Bihta", "item": "https://jameenwale.vercel.app/plots-for-sale-in-bihta" }
        ]
      },
      {
        "@type": "RealEstateListing",
        "name": "IT Park - Gated Community Plots in Bihta Patna",
        "description": "RERA-approved residential and commercial plots opposite to NIT Patna in the Bihta Growth Corridor. Starting ₹28 Lakh.",
        "url": "https://jameenwale.vercel.app/plots-for-sale-in-bihta",
        "image": "https://jameenwale.vercel.app/it.webp",
        "category": "Residential / Commercial Plot",
        "offers": {
          "@type": "Offer",
          "price": "2800000",
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
            "name": "Where are the IT Park plots located in Bihta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IT Park plots are situated directly opposite the NIT Patna campus on the Bihta corridor, offering immediate highway connectivity and proximity to IIT Patna."
            }
          },
          {
            "@type": "Question",
            "name": "What plot sizes are available at IT Park Bihta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Plots start from 1,000 sq.ft onwards with configurations suitable for both residential homes and commercial establishments."
            }
          },
          {
            "@type": "Question",
            "name": "Why is Bihta considered the top investment hub in Patna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bihta is home to premier institutions like IIT Patna, NIT Patna, ESIC Hospital, the upcoming Bihta Civil Airport, and the Danapur-Bihta elevated corridor, fueling rapid capital appreciation."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full relative min-h-screen">
      <SEOHead
        title="Plots for Sale in Bihta | Residential Plots & Land | JameenWale"
        description="Buy verified residential plots & land for sale in Bihta Patna opposite NIT campus. Close to IIT & Bihta Airport corridor. Starting ₹28L. Book free site visit!"
        canonicalUrl="https://jameenwale.vercel.app/plots-for-sale-in-bihta"
        ogImage="https://jameenwale.vercel.app/it.webp"
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
            <span className="text-white font-medium">Plots for Sale in Bihta</span>
          </nav>
        </div>

        {/* Project Hero Section */}
        <section className="relative py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading & Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                  <TrendingUp className="w-4 h-4" /> High ROI Investment Corridor
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Plots for Sale in Bihta <br />
                  <span className="accent-gold">Residential Plots &amp; Land, Patna</span>
                </h1>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
                  Seeking verified <strong>plots for sale in Bihta</strong> or prime <strong>land for sale in Bihta</strong>? <strong>IT Park</strong> offers premier residential and commercial plots situated opposite to NIT Patna in the heart of the Bihta high-growth corridor. Close to IIT Patna and the upcoming Bihta Airport, this development offers unparalleled capital appreciation.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-2 pb-4 border-y border-white/10 text-white">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gold">₹28 Lakh</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Starting Price</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">1,000 sq ft</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Base Plot Size</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">Opp. NIT</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Prime Location</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="/it.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackBrochureDownload('IT Park Bihta PDF')}
                    className="px-6 py-3.5 bg-gold text-black font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Download className="w-4 h-4" /> Download Brochure
                  </a>
                  <a
                    href="tel:+916287220163"
                    onClick={() => trackPhoneClick('Bihta Page Call')}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-gold" /> Call For Site Visit
                  </a>
                </div>
              </div>

              {/* Right Column: Inquiry Form Card */}
              <div className="lg:col-span-5">
                <div className="glass p-6 sm:p-8 rounded-xl shadow-2xl border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-1">Book an On-Site Inspection</h2>
                  <p className="text-xs text-white/60 mb-6">Explore the IT Park development opposite NIT Patna.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="bihta-name" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="bihta-name"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. Anand Jha"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="bihta-phone" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Phone Number (10 Digits)</label>
                      <input
                        type="tel"
                        id="bihta-phone"
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
                      <label htmlFor="bihta-email" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="bihta-email"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. anand@example.com"
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

        {/* Why Invest in Bihta Corridor */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Why Bihta is Patna’s Fastest Growing Real Estate Magnet
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Known as Bihar’s Silicon Valley and premier education hub, Bihta is backed by monumental public infrastructure: the 4-lane Danapur-Bihta elevated highway, international educational institutions, and the proposed Bihta Civil Enclave Airport.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-lg space-y-3">
                <GraduationCap className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">NIT &amp; IIT Patna</h3>
                <p className="text-sm text-white/60">Situated right opposite the NIT campus and minutes from the 500-acre IIT Patna complex.</p>
              </div>

              <div className="glass p-6 rounded-lg space-y-3">
                <Plane className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">Bihta Civil Airport</h3>
                <p className="text-sm text-white/60">Close proximity to the upcoming commercial airport terminal driving long-term land values.</p>
              </div>

              <div className="glass p-6 rounded-lg space-y-3">
                <Building className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">ESIC Medical Hospital</h3>
                <p className="text-sm text-white/60">500-bed super specialty hospital and medical college providing top healthcare.</p>
              </div>

              <div className="glass p-6 rounded-lg space-y-3">
                <TrendingUp className="w-7 h-7 text-gold" />
                <h3 className="font-bold text-lg text-white">Commercial Demand</h3>
                <p className="text-sm text-white/60">High rental yields and business utility for student housing, coaching, and retail.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Township Infrastructure */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              IT Park Master Plan &amp; Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-white/10 p-6 rounded-lg space-y-2">
                <CheckCircle2 className="w-6 h-6 text-gold" />
                <h3 className="font-bold text-white text-base">30–40ft Wide Internal Roads</h3>
                <p className="text-sm text-white/60">Constructed concrete roads designed to handle heavy vehicular traffic seamlessly.</p>
              </div>
              <div className="border border-white/10 p-6 rounded-lg space-y-2">
                <CheckCircle2 className="w-6 h-6 text-gold" />
                <h3 className="font-bold text-white text-base">Commercial &amp; Residential Zoning</h3>
                <p className="text-sm text-white/60">Versatile plot demarcation offering high returns for commercial frontage and residential peace inside.</p>
              </div>
              <div className="border border-white/10 p-6 rounded-lg space-y-2">
                <CheckCircle2 className="w-6 h-6 text-gold" />
                <h3 className="font-bold text-white text-base">Instant Dakhil-Kharij (Mutation)</h3>
                <p className="text-sm text-white/60">100% verified freehold titles with immediate mutation support through local revenue circles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions (Bihta Corridor Plots)
            </h2>
            <div className="space-y-4">
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">Can I purchase a commercial plot at IT Park Bihta?</h3>
                <p className="text-sm text-white/70">Yes, IT Park offers both front-facing commercial plots suitable for hostels, retail complexes, and coaching hubs, as well as serene residential plots.</p>
              </div>
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">How far is IT Park from Danapur Railway Station?</h3>
                <p className="text-sm text-white/70">With the Danapur-Bihta elevated road, the travel time between Danapur Station and the project is just 20 to 25 minutes.</p>
              </div>
              <div className="glass p-5 rounded-lg">
                <h3 className="text-base font-bold text-gold mb-2">Are loans available from nationalized banks?</h3>
                <p className="text-sm text-white/70">Yes, the title chain is clear and eligible for home and plot loans from banks like SBI, HDFC, and ICICI.</p>
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
