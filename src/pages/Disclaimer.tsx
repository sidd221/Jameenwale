import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ShieldCheck, Scale, MapPin, ExternalLink, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';
import SEOHead from '../components/SEOHead';

export default function Disclaimer() {
  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full relative min-h-screen">
      <SEOHead
        title="Real Estate &amp; RERA Disclaimer | JameenWale Patna"
        description="Statutory real estate and RERA disclaimer for JameenWale. Outlines information accuracy, legal title advisory, Google advertising compliance, and buyer due diligence in Bihar."
        canonicalUrl="https://jameenwale.vercel.app/disclaimer"
      />
      <Navbar />

      <main className="pt-24 pb-20 overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-white/60">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Real Estate Disclaimer</span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-white/80 leading-relaxed">
          <header className="space-y-3 border-b border-white/10 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real Estate &amp; Statutory Advertising Disclaimer
            </h1>
            <p className="text-xs text-white/50 uppercase tracking-wider">
              Statutory Consumer Information &amp; Buyer Due Diligence Notice
            </p>
          </header>

          <section className="space-y-3">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div className="space-y-1 text-sm text-white/80">
                <p className="font-semibold text-white">General Information Advisory</p>
                <p>
                  The content, pricing estimates, project dimensions, and images published on this website (<a href="https://jameenwale.vercel.app" className="text-gold underline">jameenwale.vercel.app</a>) and our promotional advertisements on Google Ads are provided for guidance and informational purposes only. Nothing on this website constitutes a legally binding offer, warranty, or contractual guarantee.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Nature of Business &amp; Advisory Role</h2>
            <p>
              <strong>JameenWale</strong> operates as an independent real estate advisory, marketing consultancy, and facilitation firm. We connect prospective land purchasers with verified plotted developments, gated societies, and landowners across Patna, Bihta, Danapur, Shivala More, and Rajgir in Bihar. JameenWale does not act as a financial lender or speculative investment guarantor.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. RERA Compliance &amp; Regulatory Verification</h2>
            <p>
              In compliance with the Real Estate (Regulation and Development) Act (RERA), 2016, buyers are advised to independently verify all project approvals, promoter credentials, registered title deeds, and sanction plans on the official <strong>Bihar RERA portal</strong>:
            </p>
            <p className="p-3 rounded bg-white/5 border border-white/10 text-sm">
              Official Bihar RERA Website:{' '}
              <a
                href="https://rera.bihar.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline inline-flex items-center gap-1 font-semibold"
              >
                rera.bihar.gov.in <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
            <p className="text-sm text-white/70">
              JameenWale promotes only verified plotted projects with clear lineage and mutation records. We strongly encourage all prospective buyers to review certified title search reports before executing agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Artistic Impressions &amp; Visual Representation</h2>
            <p>
              Photographs, 3D layout renderings, elevation mock-ups, walkthrough animations, and master plan drawings displayed on this website or in promotional Google Ads are conceptual artistic impressions. Actual site conditions, final road widths, landscape demarcations, and boundary lines are governed strictly by the executed Registered Sale Deed (Kewala) and approved mutation records.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Pricing, Taxes &amp; Financial Disclosures</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
              <li>
                <strong>Base Pricing:</strong> Displayed starting figures (such as ₹21L for Embassy Capital, ₹28L for Bihta IT Park, and ₹22L for Seven Crown Rajgir) represent base plot prices and are subject to revision without prior notice based on market demand and inventory availability.
              </li>
              <li>
                <strong>Statutory Charges:</strong> Base prices exclude Bihar State Government stamp duty, registration charges, Dakhil-Kharij legal mutation processing fees, and GST if applicable.
              </li>
              <li>
                <strong>Bank Loan Assistance:</strong> JameenWale assists with loan documentation, but loans are sanctioned solely at the discretion of partner banking institutions based on applicant income eligibility, CIBIL score, and individual credit criteria.
              </li>
              <li>
                <strong>No Guaranteed Returns:</strong> Real estate investments are subject to market factors. JameenWale does not offer or promise guaranteed returns, fixed buyback schemes, or speculative financial gains.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Independent Due Diligence</h2>
            <p>
              Before remitting any booking token or executing sale agreements, prospective buyers are urged to physically inspect the plot, review certified Khatiyan, Jamabandi, and Kewala records on the Bihar Bhumi portal, and consult an independent legal advocate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Contact for Due Diligence Inquiries</h2>
            <div className="glass p-5 rounded-lg border border-white/10 space-y-2 text-sm">
              <p><strong>Consultancy Office:</strong> 5th Floor, Leads Tower, Rupaspur, Digha Danapur Nahar Road, Patna, Bihar 801503</p>
              <p><strong>Direct Helpline:</strong> +91 6287220163</p>
              <p><strong>Official Email:</strong> Anish248patel@gmail.com (CC: siddhantsinha999@gmail.com)</p>
            </div>
          </section>

          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs text-white/60">
            <Link to="/privacy-policy" className="text-gold hover:underline">View Privacy Policy &rarr;</Link>
            <Link to="/terms" className="text-gold hover:underline">View Terms of Service &rarr;</Link>
            <Link to="/land-buying-checklist-bihar" className="text-gold hover:underline">Read Bihar Land Buying Legal Checklist &rarr;</Link>
          </div>
        </article>
      </main>

      <Footer />
      <FloatingCTAs />
      <div className="fixed inset-0 bg-[#0f172a] -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-[#0f172a] pointer-events-none"></div>
    </div>
  );
}
