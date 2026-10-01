import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';
import SEOHead from '../components/SEOHead';

export default function Terms() {
  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full relative min-h-screen">
      <SEOHead
        title="Terms of Service | JameenWale Real Estate Patna"
        description="Terms and Conditions of JameenWale. Outlines website usage guidelines, property inquiry terms, site visit booking policies, and advertising compliance in Patna, Bihar."
        canonicalUrl="https://jameenwale.vercel.app/terms"
      />
      <Navbar />

      <main className="pt-24 pb-20 overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-white/60">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Terms of Service</span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-white/80 leading-relaxed">
          <header className="space-y-3 border-b border-white/10 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Terms of Service &amp; User Agreement
            </h1>
            <p className="text-xs text-white/50 uppercase tracking-wider">
              Last Updated: October 2026 | Governing Domain: jameenwale.vercel.app
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing, browsing, or submitting forms on <a href="https://jameenwale.vercel.app" className="text-gold underline">jameenwale.vercel.app</a> ("Website"), you agree to comply with and be bound by these Terms of Service, our <Link to="/privacy-policy" className="text-gold underline">Privacy Policy</Link>, and our <Link to="/disclaimer" className="text-gold underline">Real Estate Disclaimer</Link>. If you do not agree to these terms, please discontinue use of this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Scope of Services &amp; Free Inquiries</h2>
            <p>
              JameenWale operates as a specialized real estate advisory and land consultancy service in Patna, Bihar. Submitting an inquiry, downloading a digital brochure, or booking a physical site visit through our website or Google Ads is completely complimentary and incurs no upfront obligation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Information Accuracy &amp; Plot Availability</h2>
            <p>
              While JameenWale makes reasonable efforts to present accurate property dimensions, road widths, amenities, and starting prices:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-white/70">
              <li>Plot inventory and base rates are dynamic and subject to prior sale and market adjustments.</li>
              <li>Dimensions and boundary lines specified in advertisements or marketing collateral are approximate until verified by government Amin demarcation.</li>
              <li>A formal plot allotment occurs solely upon the execution of a registered Agreement for Sale or Sale Deed.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. User Representations &amp; Acceptable Use</h2>
            <p>
              By using our inquiry forms, you represent that:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-white/70">
              <li>You are at least 18 years of age and legally competent to enter into real estate transactions under Indian law.</li>
              <li>All contact information (Name, Phone number, Email) provided is genuine, accurate, and belongs to you.</li>
              <li>You will not use this platform to submit automated, spam, defamatory, or fraudulent inquiries.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Intellectual Property Rights</h2>
            <p>
              All branding, text, photographs, graphics, trademarks, and design elements on this website are protected under copyright and intellectual property laws of India and belong to JameenWale or their respective licensors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted under applicable law, JameenWale and its representatives shall not be liable for any indirect, incidental, or consequential damages resulting from website downtime, third-party internet delays, or failure of external banking loan approvals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of the use of this website shall fall under the exclusive jurisdiction of the competent courts in <strong>Patna, Bihar</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">8. Contact Information</h2>
            <div className="glass p-5 rounded-lg border border-white/10 space-y-2 text-sm">
              <p><strong>Firm Name:</strong> JameenWale Real Estate Consultancy</p>
              <p><strong>Address:</strong> 5th Floor, Leads Tower, Rupaspur, Digha Danapur Nahar Road, Patna, Bihar 801503</p>
              <p><strong>Phone:</strong> +91 6287220163</p>
              <p><strong>Email:</strong> Anish248patel@gmail.com (CC: siddhantsinha999@gmail.com)</p>
            </div>
          </section>

          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs text-white/60">
            <Link to="/privacy-policy" className="text-gold hover:underline">View Privacy Policy &rarr;</Link>
            <Link to="/disclaimer" className="text-gold hover:underline">View Real Estate Disclaimer &rarr;</Link>
          </div>
        </article>
      </main>

      <Footer />
      <FloatingCTAs />
      <div className="fixed inset-0 bg-[#0f172a] -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-[#0f172a] pointer-events-none"></div>
    </div>
  );
}
