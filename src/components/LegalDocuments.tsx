import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  FileCheck,
  Scale,
  CheckCircle2,
  Building,
  HelpCircle,
  FileText
} from 'lucide-react';

interface LegalDocDescription {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  icon: typeof FileCheck;
}

const legalDescriptions: LegalDocDescription[] = [
  {
    id: 'deed',
    title: 'Registered Sale Deed (Kewala / Registry)',
    category: 'Govt. Land Title & Ownership',
    badge: 'Govt. Registered Title',
    description:
      'Official registered title deed confirming 100% freehold land rights, certified government registry stamps, clear Khatiyan records, and immediate Dakhil-Kharij (mutation) clearance.',
    highlights: [
      'Certified Govt. Registration Stamp & Kewala records',
      'Clear & Marketable Title with 30-year deed lineage',
      'Circle Office revenue clearance & fast mutation support',
      'Zero encumbrance, non-mortgaged, and dispute-free'
    ],
    icon: FileCheck
  },
  {
    id: 'agreement',
    title: 'Standard Agreement for Sale (Bikrinama Draft)',
    category: 'Legal Contract & Buyer Safeguards',
    badge: 'Standardized Legal Draft',
    description:
      'Standardized legal agreement draft outlining transparent buyer-seller terms, boundary demarcation and possession milestones, payment schedules, and comprehensive legal protection.',
    highlights: [
      'Transparent milestone-linked payment schedules',
      'Guaranteed cornerstone demarcation & possession clauses',
      'Stamp duty and notary compliant under Indian Contract Act',
      'Complete buyer safeguards with zero hidden liabilities'
    ],
    icon: Scale
  }
];

const pillars = [
  {
    icon: ShieldCheck,
    title: '100% Freehold Ownership',
    desc: 'Clear Khatiyan & revenue records with direct registry in buyer’s name.'
  },
  {
    icon: FileCheck,
    title: 'Govt. Stamped & Verified',
    desc: 'Authenticated by local sub-registrar office with complete chain of deeds.'
  },
  {
    icon: Scale,
    title: 'Lawyer Vetted Agreements',
    desc: 'Fair and transparent terms protecting buyer investment at every step.'
  },
  {
    icon: Building,
    title: 'Bank Loan Approved',
    desc: 'Legally cleared and eligible for financing from leading national banks.'
  }
];

export default function LegalDocuments() {
  return (
    <section id="legal" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 glass p-6 sm:p-8 md:p-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4 text-gold" />
            100% Legal Transparency &amp; Due Diligence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Verified Legal <span className="italic accent-gold">Framework</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed font-light text-base md:text-lg">
            We believe trust begins with open legal standards. Review the documentation framework, title verification standards, and consumer protection protocols applied to every JameenWale plotted township.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-gold/40 transition-colors flex flex-col"
              >
                <div className="w-10 h-10 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">{pillar.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Document Information & Description Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {legalDescriptions.map((item, idx) => {
            const DocIcon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-gold/50 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Card Top Row */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <DocIcon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gold/90">
                          {item.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-sm bg-gold/20 text-gold border border-gold/30 shrink-0">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center text-xs text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mr-2.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verification Notice */}
                <div className="pt-5 border-t border-white/10 flex items-center gap-2 text-xs text-white/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Physical copies and certified extracts provided during on-site visit &amp; legal review.</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legal Due Diligence Support Banner */}
        <div className="rounded-xl p-6 md:p-8 bg-gradient-to-r from-gold/10 via-white/[0.04] to-gold/10 border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight mb-1">
                Need Verification with Your Legal Advocate?
              </h4>
              <p className="text-sm text-white/70 font-light leading-relaxed max-w-2xl">
                We encourage complete legal due diligence. Request complete survey numbers, certified Khatiyan extracts, and circle office records for independent verification by your lawyer.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById('contact');
                if (elem) {
                  elem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="py-3 px-6 bg-gold hover:opacity-90 text-black font-bold uppercase tracking-wider text-xs rounded-sm text-center transition-all cursor-pointer"
            >
              Request Full Title File
            </a>
            <a
              href="tel:+916287220163"
              className="py-3 px-5 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-gold/40 font-semibold text-xs rounded-sm text-center transition-colors"
            >
              Call Legal Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
