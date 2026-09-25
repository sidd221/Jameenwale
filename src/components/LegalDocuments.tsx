import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  ShieldCheck,
  Eye,
  X,
  FileCheck,
  Scale,
  CheckCircle2,
  Lock,
  Building,
  HelpCircle,
  Maximize2
} from 'lucide-react';

interface LegalDoc {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  file: string;
  fileSize: string;
  badge: string;
  description: string;
  highlights: string[];
  icon: typeof FileText;
}

const documents: LegalDoc[] = [
  {
    id: 'deed',
    title: 'Registered Sale Deed (Registry Copy)',
    shortTitle: 'Registered Sale Deed',
    category: 'Govt. Land Title & Ownership',
    file: '/deed.pdf',
    fileSize: '3.8 MB',
    badge: 'Govt. Registered',
    description:
      'Official registered title deed confirming 100% freehold land rights, certified government registry stamps, clear Khatiyan records, and immediate mutation clearance.',
    highlights: [
      'Certified Govt. Registration Stamp',
      'Clear & Marketable Title (Freehold)',
      'Mutation & Revenue Office Clearance',
      'Zero Encumbrance & Dispute-Free'
    ],
    icon: FileCheck
  },
  {
    id: 'agreement',
    title: 'Standard Agreement Copy (Agreement for Sale)',
    shortTitle: 'Agreement Copy',
    category: 'Legal Contract & Buyer Safeguards',
    file: '/Agreement_copy.pdf',
    fileSize: '1.6 MB',
    badge: 'Legal Draft Copy',
    description:
      'Standardized legal agreement draft outlining transparent buyer-seller terms, construction & possession milestones, payment schedules, and comprehensive legal protection.',
    highlights: [
      'Transparent Milestone Payment Terms',
      'Guaranteed Possession Clauses',
      'Stamp Duty & Notary Compliant',
      'Full Buyer Rights & Legal Safeguards'
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
  const [activeModalDoc, setActiveModalDoc] = useState<LegalDoc | null>(null);
  const [isLoadingIframe, setIsLoadingIframe] = useState<boolean>(true);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalDoc(null);
      }
    };

    if (activeModalDoc) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalDoc]);

  const openPreview = (doc: LegalDoc) => {
    setIsLoadingIframe(true);
    setActiveModalDoc(doc);
  };

  return (
    <section id="legal" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 glass p-6 sm:p-8 md:p-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4 text-gold" />
            100% Legal Transparency & Due Diligence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Verified <span className="italic opacity-80">Legal Documents</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed font-light text-base md:text-lg">
            We believe trust begins with open documentation. Inspect our certified registered sale deed copies and standardized agreement drafts before making your land investment decision.
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

        {/* Document Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {documents.map((doc, idx) => {
            const DocIcon = doc.icon;
            return (
              <motion.div
                key={doc.id}
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
                          {doc.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                          {doc.shortTitle}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-sm bg-gold/20 text-gold border border-gold/30 shrink-0">
                      {doc.badge}
                    </span>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                    {doc.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {doc.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center text-xs text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mr-2.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* File Info & Action Buttons */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-white/50 mb-4 font-mono">
                    <span className="flex items-center gap-1.5 text-gold/80">
                      <Lock className="w-3.5 h-3.5 text-gold" />
                      Protected Document • View Only
                    </span>
                    <span>{doc.fileSize}</span>
                  </div>

                  {/* Primary View Action */}
                  <button
                    onClick={() => openPreview(doc)}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-gold hover:opacity-90 text-black font-bold uppercase tracking-wider text-xs rounded-sm transition-all shadow-md active:scale-[0.99] cursor-pointer"
                    aria-label={`View ${doc.title}`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Document</span>
                  </button>
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

      {/* Interactive View-Only Modal Viewer */}
      <AnimatePresence>
        {activeModalDoc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 select-none"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalDoc(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-xl bg-slate-900 border border-gold/40 shadow-2xl overflow-hidden z-10"
              role="dialog"
              aria-modal="true"
              aria-label={activeModalDoc.title}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-slate-900/95 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                      <span>{activeModalDoc.shortTitle}</span>
                      <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-gold/20 text-gold border border-gold/30">
                        {activeModalDoc.fileSize}
                      </span>
                    </h3>
                    <p className="text-xs text-white/50">{activeModalDoc.category}</p>
                  </div>
                </div>

                {/* Document Switcher inside Modal */}
                <div className="flex items-center bg-white/5 p-1 rounded-md border border-white/10 text-xs">
                  {documents.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => {
                        setIsLoadingIframe(true);
                        setActiveModalDoc(d);
                      }}
                      className={`px-3 py-1.5 rounded transition-colors text-xs font-semibold cursor-pointer ${
                        activeModalDoc.id === d.id
                          ? 'bg-gold text-black font-bold shadow-sm'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {d.shortTitle}
                    </button>
                  ))}
                </div>

                {/* View-Only Badge & Close Button */}
                <div className="flex items-center gap-3">
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs text-gold font-medium">
                    <Lock className="w-3.5 h-3.5" />
                    <span>View Only</span>
                  </div>
                  <button
                    onClick={() => setActiveModalDoc(null)}
                    className="p-2 rounded-md bg-white/10 hover:bg-red-500/20 text-white/80 hover:text-red-400 border border-white/15 transition-colors cursor-pointer"
                    aria-label="Close viewer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* View-Only Protected Notice Bar */}
              <div className="px-4 py-2 bg-gold/10 border-b border-gold/20 text-xs text-gold flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3" />
                  Official Document Reader • Protected View
                </span>
                <span className="text-[11px] text-white/50 hidden sm:inline">
                  Download restricted for document authenticity
                </span>
              </div>

              {/* Modal Body / PDF Viewer with toolbar disabled */}
              <div className="relative flex-1 w-full min-h-[500px] md:min-h-[620px] bg-slate-950 overflow-hidden">
                {isLoadingIframe && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-white/60 gap-3 z-0">
                    <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin" />
                    <span className="text-xs uppercase tracking-wider font-mono">
                      Loading Official Document...
                    </span>
                  </div>
                )}
                <iframe
                  src={`${activeModalDoc.file}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                  title={activeModalDoc.title}
                  onLoad={() => setIsLoadingIframe(false)}
                  className="w-full h-full min-h-[500px] md:min-h-[620px] border-0 relative z-10"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:p-4 bg-slate-900 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>
                    Official unencumbered documentation for <strong>Jameenwale</strong> verified projects.
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <Lock className="w-3.5 h-3.5 text-gold" />
                  <span>View-Only Mode</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
