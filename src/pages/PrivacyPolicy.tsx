import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, Phone, MapPin, Eye, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicy() {
  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full relative min-h-screen">
      <SEOHead
        title="Privacy Policy | JameenWale Real Estate Patna"
        description="Privacy Policy of JameenWale. Explains data protection practices, Google Ads compliance, DPDP Act 2023 compliance, and communication consent for real estate inquiries in Bihar."
        canonicalUrl="https://jameenwale.vercel.app/privacy-policy"
      />
      <Navbar />

      <main className="pt-24 pb-20 overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-white/60">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-white/80 leading-relaxed">
          <header className="space-y-3 border-b border-white/10 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Privacy Policy &amp; Advertising Disclosure
            </h1>
            <p className="text-xs text-white/50 uppercase tracking-wider">
              Last Updated: October 2026 | Compliant with Google Advertising Policies &amp; DPDP Act, 2023
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction &amp; Scope</h2>
            <p>
              At <strong>JameenWale</strong> ("we", "our", or "us"), operating under domain <a href="https://jameenwale.vercel.app" className="text-gold underline">jameenwale.vercel.app</a>, we respect your privacy and are committed to safeguarding your personal data in accordance with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> and international advertising standards including <strong>Google Ads Destination &amp; User Safety Policies</strong>.
            </p>
            <p>
              This policy explains how we collect, store, utilize, and protect your information when you browse our website, interact with our online advertisements, or submit inquiries for residential and commercial plots in Patna, Bihta, Danapur, and Rajgir, Bihar.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>We only collect personal information that is strictly necessary to fulfill your real estate property inquiries:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
              <li><strong>Direct Contact Information:</strong> Full name, 10-digit mobile phone number, and email address submitted voluntarily via inquiry forms, callback requests, or WhatsApp chat.</li>
              <li><strong>Property Requirements:</strong> Preferred plot corridors (e.g. Shivala More, Bihta IT Park, Rajgir), budget preferences, and preferred site visit dates.</li>
              <li><strong>Technical &amp; Log Data:</strong> Device type, browser user agent, IP address, referral URLs, and pages visited, collected automatically to maintain website stability and security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            <p>Your personal data is used solely for legitimate business operations:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-white/70">
              <li>Contacting you to discuss requested property dimensions, pricing, and certified revenue records.</li>
              <li>Scheduling and conducting complimentary on-site guided visits with pick-up/drop services.</li>
              <li>Providing layout blueprints, RERA compliance certificates, and bank loan eligibility assistance.</li>
              <li>Verifying inquiry authenticity and preventing spam or fraudulent interactions.</li>
            </ul>
          </section>

          {/* Google Ads & Analytics Specific Disclosure */}
          <section className="space-y-3 p-5 rounded-xl bg-white/[0.03] border border-gold/30">
            <h2 className="text-xl font-bold text-gold flex items-center gap-2">
              <Eye className="w-5 h-5 text-gold" />
              4. Google Ads &amp; Analytics Tracking Disclosures
            </h2>
            <p className="text-sm">
              We run online advertising campaigns via <strong>Google Ads</strong> and utilize <strong>Google Analytics 4 (GA4)</strong> and <strong>Google Tag Manager</strong> to measure advertisement effectiveness, attribute conversions, and improve user navigation.
            </p>
            <div className="space-y-2 text-sm text-white/75">
              <p>
                <strong>Advertising Cookies &amp; Beacons:</strong> Third-party vendors, including Google, use cookies and anonymous device identifiers to serve ads based on prior visits to our website. These cookies allow Google and its partners to measure conversion events (such as form submissions or phone call clicks) without collecting unhashed sensitive passwords or banking data.
              </p>
              <p>
                <strong>User Opt-Out Choices:</strong> You have full control over how Google personalizes ads to you:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-white/70">
                <li>
                  Opt out of Google's personalized ads by visiting the{' '}
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline inline-flex items-center gap-1"
                  >
                    Google Ad Settings <ExternalLink className="w-3 h-3" />
                  </a>.
                </li>
                <li>
                  Opt out of Google Analytics tracking across all websites by installing the official{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline inline-flex items-center gap-1"
                  >
                    Google Analytics Opt-out Browser Add-on <ExternalLink className="w-3 h-3" />
                  </a>.
                </li>
                <li>
                  Manage industry-wide interest-based advertising preferences via the{' '}
                  <a
                    href="https://optout.aboutads.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline inline-flex items-center gap-1"
                  >
                    Digital Advertising Alliance Opt-Out Page <ExternalLink className="w-3 h-3" />
                  </a>.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. TRAI &amp; DND Consent Disclaimer</h2>
            <p>
              By submitting an inquiry form or callback request on this website, you explicitly consent to receive calls, SMS messages, and WhatsApp notifications from JameenWale and its verified real estate advisors regarding plot availability, payment schedules, and site visits. You acknowledge that this consent overrides any registration on the National Do Not Call (DND) or National Customer Preference Register (NCPR) under Telecom Regulatory Authority of India (TRAI) regulations. You may revoke this consent at any time by replying "STOP" or calling our helpline.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Data Sharing &amp; Third Parties</h2>
            <p>
              <strong>We do not sell, rent, lease, or monetize your personal information to any third parties or marketing lists.</strong> We share data only with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-white/70">
              <li>Direct in-house sales executives and legal consultants assigned to your property search.</li>
              <li>Secure form processing infrastructure (FormSubmit.co) solely to transmit your inquiry to our encrypted email address.</li>
              <li>Partner banks (such as SBI, HDFC, ICICI, or Axis Bank) solely upon your written or verbal request for home loan sanction assistance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Data Security &amp; Retention</h2>
            <p>
              All interactions on <a href="https://jameenwale.vercel.app" className="text-gold underline">jameenwale.vercel.app</a> are secured using 256-bit TLS/SSL encryption. We retain inquiry information only as long as necessary to facilitate your real estate evaluation or fulfill statutory legal requirements under Indian law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">8. Your Rights &amp; Grievance Redressal</h2>
            <p>
              Under the Digital Personal Data Protection Act, 2023, you have the right to access your stored data, rectify inaccuracies, withdraw communication consent, or request permanent deletion of your records. For grievances or data protection queries, contact our designated officer:
            </p>
            <div className="glass p-5 rounded-lg border border-white/10 space-y-2 text-sm">
              <p><strong>Business Name:</strong> JameenWale (Real Estate Consultancy)</p>
              <p><strong>Grievance Officer:</strong> Anish Patel</p>
              <p><strong>Office Address:</strong> 5th Floor, Leads Tower, Rupaspur, Digha Danapur Nahar Road, Landmark: Kaali Mandir, Patna, Bihar 801503</p>
              <p><strong>Direct Helpline:</strong> +91 6287220163</p>
              <p><strong>Primary Email:</strong> Anish248patel@gmail.com</p>
              <p><strong>Support &amp; CC Email:</strong> siddhantsinha999@gmail.com</p>
              <p><strong>Operational Hours:</strong> Monday – Sunday, 8:00 AM – 8:00 PM IST</p>
            </div>
          </section>

          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs text-white/60">
            <Link to="/terms" className="text-gold hover:underline">View Terms of Service &rarr;</Link>
            <Link to="/disclaimer" className="text-gold hover:underline">View Real Estate &amp; RERA Disclaimer &rarr;</Link>
          </div>
        </article>
      </main>

      <Footer />
      <FloatingCTAs />
      <div className="fixed inset-0 bg-[#0f172a] -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-[#0f172a] pointer-events-none"></div>
    </div>
  );
}
