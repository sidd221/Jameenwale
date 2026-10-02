import React, { useState } from 'react';
import { 
  MapPin, ShieldCheck, FileCheck, CheckCircle2, Phone, 
  ArrowRight, Download, Compass, TrendingUp, Building2, Trees, Landmark 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';
import SEOHead from '../components/SEOHead';
import { trackLeadSubmission, trackPhoneClick, trackBrochureDownload } from '../utils/analytics';
import { submitLeadToWhatsApp, WHATSAPP_LEAD_DISPLAY } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function BiharPlots() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', preferredRegion: 'Patna Metropolitan' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const url = submitLeadToWhatsApp({
        formName: 'Bihar Regional Plots Inquiry Form',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.preferredRegion,
        project: 'Bihar Regional Land & Plots',
      });
      setWhatsappUrl(url);

      trackLeadSubmission('Bihar Plots Inquiry Form', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        region: formData.preferredRegion,
        destination: `WhatsApp (${WHATSAPP_LEAD_DISPLAY})`
      });

      setStatus('success');
      setFormData({ name: '', phone: '', email: '', preferredRegion: 'Patna Metropolitan' });
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
          { "@type": "ListItem", "position": 2, "name": "Plots for Sale in Bihar", "item": "https://jameenwale.vercel.app/plots-for-sale-in-bihar" }
        ]
      },
      {
        "@type": "RealEstateAgent",
        "name": "JameenWale - Bihar Land & Plotted Townships",
        "description": "Verified residential plots and land for sale in Bihar across Patna, Bihta, Danapur, Naubatpur, and Rajgir Nalanda corridors.",
        "url": "https://jameenwale.vercel.app/plots-for-sale-in-bihar",
        "telephone": "+916287220163",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Bihar" },
          { "@type": "City", "name": "Patna" },
          { "@type": "City", "name": "Rajgir" },
          { "@type": "City", "name": "Bihta" },
          { "@type": "City", "name": "Danapur" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the prime growth corridors for plots for sale in Bihar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most secure and rapidly appreciating corridors in Bihar include the Patna Metropolitan Area (Danapur, Shivala More, Bihta IT/Education corridor, and Naubatpur outer ring road) as well as the Rajgir-Nalanda international tourism & educational belt."
            }
          },
          {
            "@type": "Question",
            "name": "How does JameenWale verify land title and ownership in Bihar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every plot marketed by JameenWale undergoes rigorous legal diligence: 30-year chain of registered deeds (Kewala), verification of Jamabandi records on the official Bihar Bhumi portal, Circle Office Dakhil-Kharij (mutation) clearance, Land Possession Certificate (LPC) check, and on-ground boundary demarcation."
            }
          },
          {
            "@type": "Question",
            "name": "Can non-resident Biharis (NRIs & domestic migrants) purchase plots remotely?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, JameenWale specializes in transparent land acquisition for outstation and NRI buyers. We provide digital title dossiers, live video site inspections, coordinates marking, and end-to-end legal registration support at local Sub-Registrar offices."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical price range for residential land in Bihar with JameenWale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Verified residential plots in gated community townships in Bihar start from ₹21 Lakhs (Shivala More/Danapur corridor) to ₹28 Lakhs (Bihta corridor) and ₹22 Lakhs (Seven Crown, Rajgir Nalanda)."
            }
          },
          {
            "@type": "Question",
            "name": "Does JameenWale provide land consultation for other Bihar cities like Muzaffarpur, Gaya, or Bhagalpur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While our active gated townships are strategically concentrated in high-demand corridors of Patna, Bihta, Danapur, and Rajgir, our real estate advisory team handles bespoke institutional and bulk land sourcing assessments across key Bihar growth centers including Muzaffarpur, Gaya, and Bhagalpur on direct request."
            }
          }
        ]
      }
    ]
  };

  const biharHubs = [
    {
      title: "Patna Metropolitan Region",
      tagline: "Capital growth engine with metro, airport & commercial infrastructure",
      locations: "Danapur, Shivala More, Saguna More Extension",
      price: "From ₹21 Lakh",
      link: "/plots-for-sale-in-patna",
      badge: "Core Market",
      desc: "Prime freehold residential land and gated townships 7–10 minutes from Saguna More with complete boundary walls and fast registry."
    },
    {
      title: "Bihta High-Growth Corridor",
      tagline: "Bihar's premier educational, industrial & upcoming airport hub",
      locations: "Opposite NIT Patna, near IIT Patna & ESIC Hospital",
      price: "From ₹28 Lakh",
      link: "/plots-for-sale-in-bihta",
      badge: "Highest ROI",
      desc: "Planned residential and commercial plots along the Danapur-Bihta elevated expressway corridor, ideal for high long-term appreciation."
    },
    {
      title: "Danapur & Western Expansion",
      tagline: "Direct connectivity to Danapur Junction & Bailey Road",
      locations: "Shivala More, Danapur Khagaul Belt",
      price: "From ₹21 Lakh",
      link: "/plots-for-sale-in-danapur",
      badge: "Ready to Build",
      desc: "Fastest emerging residential hub with wide 30ft–40ft internal roads, underground drainage, and immediate mutation capability."
    },
    {
      title: "Naubatpur & Outer Ring Road",
      tagline: "AIIMS Patna connectivity & Bihta-Sarmera 6-lane intersection",
      locations: "Naubatpur Bypass & AIIMS Corridor",
      price: "From ₹20 Lakh",
      link: "/plots-for-sale-in-naubatpur",
      badge: "Emerging Corridor",
      desc: "Strategic junction connecting the South Bihar industrial belt to the Patna capital region, offering spacious plots at accessible prices."
    },
    {
      title: "Rajgir & Nalanda Heritage Belt",
      tagline: "Eco-living, university hub & scenic mountain-view township",
      locations: "Silao, Nalanda-Rajgir Tourism Highway",
      price: "From ₹22 Lakh",
      link: "/plots-for-sale-in-rajgir",
      badge: "Eco-Living",
      desc: "Serene plotted communities situated near Nalanda International University, Nature Safari, and Buddhist heritage circuits."
    }
  ];

  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full relative min-h-screen">
      <SEOHead
        title="Plots for Sale in Bihar | Residential Land & Plotted Townships | JameenWale"
        description="Explore verified residential plots for sale in Bihar. Transparent freehold land in Patna, Bihta, Danapur, Naubatpur & Rajgir. 100% mutation & bank loan ready."
        canonicalUrl="https://jameenwale.vercel.app/plots-for-sale-in-bihar"
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
            <span className="text-white font-medium">Plots for Sale in Bihar</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                  <ShieldCheck className="w-4 h-4" /> 100% Verified Land Records &amp; Clear Titles
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Plots for Sale in Bihar: <br />
                  <span className="accent-gold">Verified Residential Land &amp; Townships</span>
                </h1>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
                  Searching for secure <strong>plots for sale in Bihar</strong> or seeking to invest in verified <strong>residential land in Bihar</strong>? JameenWale bridges the trust deficit in Bihar’s real estate market by delivering 100% freehold, legally scrutinized plotted communities across Patna, Bihta, Danapur, Naubatpur, and Rajgir Nalanda.
                </p>

                {/* Statewide Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-2 pb-4 border-y border-white/10 text-white">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gold">5+ Hubs</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Active Corridors</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">100%</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Clear Jamabandi</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold">₹21L+</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Starting Price</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="tel:+916287220163"
                    onClick={() => trackPhoneClick('Bihar Hub Call CTA')}
                    className="px-6 py-3.5 bg-gold text-black font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Phone className="w-4 h-4" /> Call +91 6287220163
                  </a>
                  <a
                    href="/brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackBrochureDownload('Bihar Statewide Brochure')}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4 text-gold" /> Master Brochure
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-5">
                <div className="glass p-6 sm:p-8 rounded-xl shadow-2xl border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-1">Enquire About Plots in Bihar</h2>
                  <p className="text-xs text-white/60 mb-6">Connect with a real estate advisor for site layouts, revenue record verification, and site visit scheduling.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="bihar-name" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        id="bihar-name"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="bihar-phone" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Mobile Number (10 Digits)</label>
                      <input
                        type="tel"
                        id="bihar-phone"
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
                      <label htmlFor="bihar-email" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="bihar-email"
                        required
                        className="w-full bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. anand@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="bihar-region" className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">Preferred Investment Hub</label>
                      <select
                        id="bihar-region"
                        className="w-full bg-slate-900 border border-white/10 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        value={formData.preferredRegion}
                        onChange={(e) => setFormData({ ...formData, preferredRegion: e.target.value })}
                      >
                        <option value="Patna Metropolitan">Patna (Shivala More / Danapur)</option>
                        <option value="Bihta Corridor">Bihta (Opposite NIT / Near IIT)</option>
                        <option value="Danapur Extension">Danapur / Saguna More Extension</option>
                        <option value="Naubatpur Belt">Naubatpur / AIIMS Outer Ring Road</option>
                        <option value="Rajgir Nalanda">Rajgir (Seven Crown, Silao)</option>
                        <option value="Other Bihar Sourcing">Other Bihar Cities (Gaya / Muzaffarpur / Bhagalpur Advisory)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3 bg-gold text-black font-bold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-black shrink-0" />
                      <span>{status === 'submitting' ? 'Opening WhatsApp...' : 'Request Dossier via WhatsApp'}</span>
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

        {/* Growth Corridors in Bihar */}
        <section className="py-16 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Strategic Portfolios</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">Active Plotted Townships &amp; Land in Bihar</h2>
              <p className="text-sm text-white/70 mt-3">
                Every project listed by JameenWale possesses clear title deeds, mutation records, and concrete infrastructure. Explore our focal corridors below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {biharHubs.map((hub) => (
                <div key={hub.title} className="glass p-6 rounded-xl border border-white/10 hover:border-gold/40 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-gold/15 text-gold border border-gold/30">
                        {hub.badge}
                      </span>
                      <span className="text-xs font-bold text-gold">{hub.price}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">{hub.title}</h3>
                    <p className="text-xs text-white/60 mt-1 mb-3">{hub.tagline}</p>
                    <div className="flex items-center gap-1.5 text-xs text-white/75 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>{hub.locations}</span>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed mb-4">{hub.desc}</p>
                  </div>
                  <Link
                    to={hub.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold hover:text-white transition-colors pt-3 border-t border-white/10"
                  >
                    View Properties <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Invest in Bihar Plotted Real Estate */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-widest text-gold font-bold">Why Land in Bihar?</span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white">Massive Infrastructure Growth Transforming Bihar Land Value</h2>
                <p className="text-sm text-white/70 leading-relaxed">
                  Bihar’s real estate landscape is experiencing a multi-decade infrastructure surge. With elevated expressways, outer ring roads, university hubs, and industrial corridors linking the state capital to growth nodes, purchasing freehold <strong>residential plots in Bihar</strong> provides unprecedented safety against inflation and rapid wealth compounding.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Danapur-Bihta Elevated Expressway</h4>
                      <p className="text-xs text-white/60">Cuts transit time between central Patna and Bihta to under 20 minutes, unlocking tremendous land appreciation along the entire western corridor.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Bihta-Sarmera 6-Lane Expressway (SH-78)</h4>
                      <p className="text-xs text-white/60">Connects Naubatpur, Bihta, Daniyawan, and Nalanda without city congestion, accelerating industrial and township expansion.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Tourism &amp; Academic Corridors (Rajgir &amp; Nalanda)</h4>
                      <p className="text-xs text-white/60">Rajgir’s revival via Nalanda University, Nature Safari, and Buddhist circuits makes eco-living plotted plots highly coveted.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="glass p-8 rounded-2xl border border-white/10 space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-gold" />
                    The 5-Step Title Scrutiny in Bihar
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Land transactions in Bihar require strict scrutiny of revenue records. Here is how JameenWale protects your investment:
                  </p>
                  
                  <div className="space-y-3 text-xs text-white/80">
                    <div className="p-3 bg-white/5 rounded border border-white/5">
                      <strong className="text-gold block mb-0.5">1. Kewala (Sale Deed) Chain Verification:</strong>
                      Tracing legal title lineage across 30+ years to guarantee undisputed ancestral or purchased ownership.
                    </div>
                    <div className="p-3 bg-white/5 rounded border border-white/5">
                      <strong className="text-gold block mb-0.5">2. Bihar Bhumi Jamabandi Check:</strong>
                      Cross-checking online revenue records (Khatiyan, Khasra, Jamabandi) on the official Bihar Government portal.
                    </div>
                    <div className="p-3 bg-white/5 rounded border border-white/5">
                      <strong className="text-gold block mb-0.5">3. Dakhil-Kharij (Mutation) Status:</strong>
                      Ensuring updated mutation receipts and revenue land tax (Lagaan) clearance from the respective Anchal/Circle Office.
                    </div>
                    <div className="p-3 bg-white/5 rounded border border-white/5">
                      <strong className="text-gold block mb-0.5">4. Land Possession Certificate (LPC):</strong>
                      Verifying official Circle Officer-issued LPC confirming peaceful physical possession.
                    </div>
                    <div className="p-3 bg-white/5 rounded border border-white/5">
                      <strong className="text-gold block mb-0.5">5. Physical Boundary Demarcation:</strong>
                      Pre-demarcated boundary walls with concrete pillars preventing encroachment or overlapping claims.
                    </div>
                  </div>

                  <Link
                    to="/land-buying-checklist-bihar"
                    className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-white uppercase tracking-wider"
                  >
                    Read Complete Legal Due Diligence Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory for Secondary Bihar Markets */}
        <section className="py-16 bg-white/[0.02] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass p-8 sm:p-10 rounded-2xl border border-gold/30">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-3">
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">Statewide Consultation &amp; Bespoke Sourcing</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Looking for Land in Muzaffarpur, Gaya, or Bhagalpur?</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    While JameenWale’s active gated townships are strictly positioned in high-velocity corridors across Patna, Bihta, Danapur, Naubatpur, and Rajgir to maintain tight quality and clear-title control, our legal diligence network assists private families and institutional investors with custom land verification and sourcing across other major Bihar regional hubs.
                  </p>
                </div>
                <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
                  <a
                    href="tel:+916287220163"
                    onClick={() => trackPhoneClick('Bihar Advisory Call')}
                    className="px-6 py-3 bg-gold text-black font-bold text-xs uppercase tracking-widest text-center rounded-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Speak with Advisor
                  </a>
                  <a
                    href="https://wa.me/916287220163?text=Hello%20JameenWale,%20I%20am%20looking%20for%20verified%20land%20in%20Bihar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-widest text-center rounded-sm transition-all"
                  >
                    WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Buyer FAQ</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Frequently Asked Questions: Plots for Sale in Bihar</h2>
            </div>

            <div className="space-y-4">
              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">What are the prime growth corridors for plots for sale in Bihar?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  The most secure and rapidly appreciating corridors in Bihar include the Patna Metropolitan Area (Danapur, Shivala More, Bihta IT/Education corridor, and Naubatpur outer ring road) as well as the Rajgir-Nalanda international tourism &amp; educational belt.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">How does JameenWale verify land title and ownership in Bihar?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Every plot marketed by JameenWale undergoes rigorous legal diligence: 30-year chain of registered deeds (Kewala), verification of Jamabandi records on the official Bihar Bhumi portal, Circle Office Dakhil-Kharij (mutation) clearance, Land Possession Certificate (LPC) check, and on-ground boundary demarcation.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">Can non-resident Biharis (NRIs &amp; domestic migrants) purchase plots remotely?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Yes, JameenWale specializes in transparent land acquisition for outstation and NRI buyers. We provide digital title dossiers, live video site inspections, coordinates marking, and end-to-end legal registration support at local Sub-Registrar offices.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">What is the typical price range for residential land in Bihar with JameenWale?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Verified residential plots in gated community townships in Bihar start from ₹21 Lakhs (Shivala More/Danapur corridor) to ₹28 Lakhs (Bihta corridor) and ₹22 Lakhs (Seven Crown, Rajgir Nalanda).
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">Does JameenWale provide land consultation for other Bihar cities like Muzaffarpur, Gaya, or Bhagalpur?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  While our active gated townships are strategically concentrated in high-demand corridors of Patna, Bihta, Danapur, and Rajgir, our real estate advisory team handles bespoke institutional and bulk land sourcing assessments across key Bihar growth centers including Muzaffarpur, Gaya, and Bhagalpur on direct request.
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
