import React from 'react';
import { 
  FileCheck, ShieldCheck, Scale, CheckCircle2, AlertTriangle, 
  Download, Phone, ArrowRight, ExternalLink, HelpCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';
import SEOHead from '../components/SEOHead';
import { trackPhoneClick, trackBrochureDownload } from '../utils/analytics';

export default function LandBuyingChecklist() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jameenwale.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://jameenwale.vercel.app/land-buying-checklist-bihar" },
          { "@type": "ListItem", "position": 3, "name": "Land Buying Checklist Bihar", "item": "https://jameenwale.vercel.app/land-buying-checklist-bihar" }
        ]
      },
      {
        "@type": "Article",
        "headline": "Complete Land Buying Checklist for Bihar: Documents to Verify Before Buying Plots in Patna",
        "description": "Essential legal checklist for buying residential land in Patna and Bihar. Learn how to verify Kewala (Sale Deed), Khatiyan, Jamabandi, and Dakhil-Kharij (Mutation).",
        "author": {
          "@type": "Organization",
          "name": "JameenWale Legal Advisory Desk"
        },
        "publisher": {
          "@type": "Organization",
          "name": "JameenWale",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jameenwale.vercel.app/logo.png"
          }
        },
        "datePublished": "2026-01-01",
        "dateModified": "2026-09-29",
        "mainEntityOfPage": "https://jameenwale.vercel.app/land-buying-checklist-bihar"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Kewala in Bihar land purchase?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Bihar, a 'Kewala' is the officially registered Sale Deed executed at the sub-registrar office, transferring ownership rights of a plot from the seller to the buyer."
            }
          },
          {
            "@type": "Question",
            "name": "Why is Dakhil-Kharij (Mutation) critical in Bihar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dakhil-Kharij updates the state government's revenue records (Jamabandi) to reflect the new buyer's name. Without mutation, you cannot legally pay land revenue tax (Lagaan) and may face ownership disputes."
            }
          },
          {
            "@type": "Question",
            "name": "How can I verify land records online in Bihar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can verify Jamabandi, Khatiyan, and land mutation status online on the official Bihar Bhumi portal (biharbhumi.bihar.gov.in) using your district, circle, and Mauza/Khesra numbers."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full relative min-h-screen">
      <SEOHead
        title="Land Buying Checklist Bihar | Documents to Check Before Buying Plot in Patna | JameenWale"
        description="Comprehensive guide on documents to check before buying land in Bihar. Step-by-step verification of Kewala, Khatiyan, Jamabandi, Mutation & RERA approvals."
        canonicalUrl="https://jameenwale.vercel.app/land-buying-checklist-bihar"
        ogType="article"
        schema={schema}
      />
      <Navbar />

      <main className="pt-24 pb-20 overflow-x-hidden">
        {/* Breadcrumb Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-white/60">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Bihar Land Buying Checklist</span>
          </nav>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="mb-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
              <FileCheck className="w-4 h-4" /> Legal Due Diligence Guide
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Essential Land Buying Checklist for Bihar: Documents to Verify Before Buying Plots in Patna
            </h1>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              Buying a residential plot in Patna or surrounding areas like Bihta and Shivala is one of the most rewarding investments you can make. However, land ownership in Bihar requires strict scrutiny of historical revenue records and title chains. Use this comprehensive verification checklist prepared by JameenWale’s legal advisory desk.
            </p>
          </header>

          {/* Quick Notice Box */}
          <div className="p-5 rounded-lg bg-gold/10 border border-gold/30 mb-12 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-0.5" />
            <div className="text-sm text-white/80 leading-relaxed">
              <strong className="text-white">JameenWale 100% Verification Guarantee:</strong> Every plot developed under JameenWale (including Embassy Capital, IT Park, and Seven Crown) has pre-cleared title deeds, active mutation receipts, and certified revenue records available for buyer inspection.
            </div>
          </div>

          {/* The 6-Step Checklist */}
          <div className="space-y-12 text-white/80 leading-relaxed">

            {/* Step 1 */}
            <section className="space-y-4 glass p-6 sm:p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold text-black font-bold flex items-center justify-center text-sm shrink-0">1</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Verify the Registered Sale Deed (Kewala) &amp; Chain of Deeds
                </h2>
              </div>
              <p>
                The <strong>Kewala (केवाला)</strong> is the foundational proof of property transfer in Bihar. When inspecting a plot:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                <li>Verify the original sale deed with official seals from the relevant Sub-Registrar Office (e.g., Danapur, Patna, or Rajgir).</li>
                <li>Demand the complete <strong>Chain of Deeds (30-year search)</strong> to confirm how the current seller acquired ownership from previous titleholders.</li>
                <li>Ensure that all co-owners or legal heirs have consented or signed the transfer documents.</li>
              </ul>
              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-white/70">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certified Sale Deed and Jamabandi extracts are verified and provided during on-site property evaluation.</span>
              </div>
            </section>

            {/* Step 2 */}
            <section className="space-y-4 glass p-6 sm:p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold text-black font-bold flex items-center justify-center text-sm shrink-0">2</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Check Khatiyan &amp; Jamabandi on Bihar Bhumi Portal
                </h2>
              </div>
              <p>
                Bihar’s Department of Revenue and Land Reforms maintains an online portal (<a href="http://biharbhumi.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold underline">Bihar Bhumi</a>) where you can check ownership records:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                <li><strong>Khatiyan (खतियान):</strong> Confirms the ancestral or survey categorization of the land (e.g., Bakasht, Raiyati).</li>
                <li><strong>Jamabandi (जमाबंदी):</strong> Verifies that the seller's name is actively recorded in the government revenue register.</li>
                <li>Check the latest <strong>Lagaan (Land Tax) Receipt</strong> to ensure there are no unpaid government dues or revenue attachments.</li>
              </ul>
            </section>

            {/* Step 3 */}
            <section className="space-y-4 glass p-6 sm:p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold text-black font-bold flex items-center justify-center text-sm shrink-0">3</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Ensure Dakhil-Kharij (Mutation) and LPC (Land Possession Certificate)
                </h2>
              </div>
              <p>
                In Bihar, registration alone does not complete ownership. <strong>Dakhil-Kharij (दाखिल-खारिज / Mutation)</strong> is compulsory:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                <li>Mutation replaces the previous seller's name with the new buyer's name in the Circle Office (अंचल कार्यालय) ledger.</li>
                <li>A valid <strong>LPC (Land Possession Certificate)</strong> issued by the Circle Officer proves undisputed physical possession of the plot.</li>
                <li>All JameenWale plots feature end-to-end mutation guidance and guaranteed registration support.</li>
              </ul>
            </section>

            {/* Step 4 */}
            <section className="space-y-4 glass p-6 sm:p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold text-black font-bold flex items-center justify-center text-sm shrink-0">4</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Inspect Physical Boundaries, Road Width &amp; Demarcation
                </h2>
              </div>
              <p>
                Paperwork alone is not enough; on-ground physical inspection is critical:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                <li>Always confirm that the plot has permanent concrete cornerstones or boundary pillars.</li>
                <li>Ensure the approach road is at least 30–40 feet wide, allowing emergency vehicles, construction trucks, and smooth private commuting.</li>
                <li>In gated communities like <em>Embassy Capital</em>, look for a complete perimeter boundary wall and 24/7 security gatehouses to prevent encroachment.</li>
              </ul>
            </section>

            {/* Step 5 */}
            <section className="space-y-4 glass p-6 sm:p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold text-black font-bold flex items-center justify-center text-sm shrink-0">5</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Verify Bank Approval &amp; Non-Encumbrance Status
                </h2>
              </div>
              <p>
                One of the most reliable ways to guarantee a safe land investment is verifying whether top banks (like SBI, HDFC, or ICICI) approve the township for home construction or plot loans:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                <li>National banks conduct exhaustive 30-year legal searches before issuing loan clearance certificates.</li>
                <li>Request an <strong>Encumbrance Certificate (EC)</strong> from the registration office to verify that the property has not been mortgaged to a third party.</li>
              </ul>
            </section>

            {/* Step 6 */}
            <section className="space-y-4 glass p-6 sm:p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold text-black font-bold flex items-center justify-center text-sm shrink-0">6</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Standard Agreement for Sale Terms
                </h2>
              </div>
              <p>
                Before paying any booking amount, insist on a standardized written <strong>Agreement for Sale</strong> detailing exact plot dimensions, plot number, possession dates, payment schedules, and refund clauses in case of unforeseen title defects.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-white/70">
                <Scale className="w-4 h-4 text-gold shrink-0" />
                <span>Standardized legal agreement drafts protecting buyer milestones are shared during private consultation.</span>
              </div>
            </section>

          </div>

          {/* Call to Action Card */}
          <div className="mt-14 p-8 glass rounded-xl border border-gold/30 text-center space-y-5">
            <h3 className="text-2xl font-bold text-white">Need Free Legal Verification Assistance in Patna?</h3>
            <p className="text-sm text-white/70 max-w-xl mx-auto">
              Our expert legal team will guide you through title verification, Khatiyan checks, and circle office mutation without any hidden charges.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a 
                href="tel:+916287220163" 
                onClick={() => trackPhoneClick('Legal Checklist Page Call')}
                className="px-6 py-3.5 bg-gold text-black font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all"
              >
                <Phone className="w-4 h-4" /> Call +91 6287220163
              </a>
              <Link 
                to="/#contact" 
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-sm text-xs uppercase tracking-widest flex items-center gap-2 transition-all"
              >
                Book Free Consultation <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            </div>
          </div>

          {/* Internal Links to Corridors */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-sm uppercase tracking-wider text-gold font-bold mb-4">Explore Verified Gated Projects</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <Link to="/plots-in-shivala-patna" className="p-4 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <div className="font-bold text-white">Embassy Capital</div>
                <div className="text-xs text-white/60">Shivala More, Patna • ₹21L onwards</div>
              </Link>
              <Link to="/plots-in-bihta-patna" className="p-4 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <div className="font-bold text-white">IT Park Bihta</div>
                <div className="text-xs text-white/60">Opposite NIT Patna • ₹28L onwards</div>
              </Link>
              <Link to="/plots-in-rajgir" className="p-4 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <div className="font-bold text-white">Seven Crown Rajgir</div>
                <div className="text-xs text-white/60">Silao, Nalanda • ₹22L onwards</div>
              </Link>
            </div>
          </div>

        </article>
      </main>

      <Footer />
      <FloatingCTAs />
      <div className="fixed inset-0 bg-[#0f172a] -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-[#0f172a] pointer-events-none"></div>
    </div>
  );
}
