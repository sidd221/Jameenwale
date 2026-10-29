import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  HelpCircle, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

interface FAQItem {
  id: number;
  category: 'all' | 'legal' | 'investment' | 'location' | 'financing';
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: 'legal',
    question: "What should I check before buying a residential plot in Patna?",
    answer: (
      <div className="space-y-2">
        <p>
          Before buying a residential plot in Patna, verify the seller’s registered sale deed (Kewala), check 30-year chain deeds, examine online Jamabandi revenue records on the Bihar Bhumi portal, confirm Circle Office mutation (Dakhil-Kharij), and obtain an encumbrance certificate. We also recommend independent legal review by a qualified property lawyer.
        </p>
        <p className="text-xs text-white/60">
          Review our comprehensive{' '}
          <Link to="/land-buying-checklist-bihar" className="text-gold underline hover:text-white">
            Bihar Land Buying Checklist
          </Link>{' '}
          for a step-by-step walkthrough on Khatiyan and revenue ledger verification.
        </p>
      </div>
    )
  },
  {
    id: 2,
    category: 'investment',
    question: "How can I arrange a site visit with JameenWale?",
    answer: (
      <div className="space-y-2">
        <p>
          You can arrange a guided site visit by calling our direct helpline at +91 6287220163, submitting any inquiry form on this website, or messaging us on WhatsApp. Our field team arranges physical site inspections across Patna, Danapur, and Bihta seven days a week.
        </p>
        <p className="text-xs text-white/60">
          We offer vehicle assistance and on-site coordinate inspection so you can evaluate access roads, surrounding developments, and physical boundary demarcations in person.
        </p>
      </div>
    )
  },
  {
    id: 3,
    category: 'location',
    question: "What plot sizes are available in Danapur and Bihta?",
    answer: (
      <div className="space-y-2">
        <p>
          In the Danapur and Shivala More corridor, residential plots typically start from 800 sq.ft up to 2,400 sq.ft at Embassy Capital. In Bihta opposite NIT, plots range from 1,000 sq.ft to 3,200 sq.ft, suitable for both independent residential homes and commercial setups.
        </p>
        <p className="text-xs text-white/60">
          Explore specific layout dimensions on our{' '}
          <Link to="/plots-for-sale-in-danapur" className="text-gold underline hover:text-white">
            Plots in Danapur
          </Link>{' '}
          and{' '}
          <Link to="/plots-for-sale-in-bihta" className="text-gold underline hover:text-white">
            Plots in Bihta
          </Link>{' '}
          project pages.
        </p>
      </div>
    )
  },
  {
    id: 4,
    category: 'financing',
    question: "What costs should I consider when purchasing a plot in Patna?",
    answer: (
      <div className="space-y-2">
        <p>
          Beyond the base plot purchase price, buyers must account for Bihar state registration charges and stamp duty (typically 6% stamp duty plus 2% registration fee), legal verification fees, mutation charges, boundary demarcation expenses, and eventual utility connection charges for electricity and municipal or society services.
        </p>
        <p className="text-xs text-white/60">
          For customized cost estimates, reach out via our enquiry forms or call our helpline directly.
        </p>
      </div>
    )
  },
  {
    id: 5,
    category: 'legal',
    question: "What documents should I ask to review before buying land in Bihar?",
    answer: (
      <div className="space-y-2">
        <p>
          Always ask for the certified Registered Sale Deed (Kewala), Khatiyan (cadastral survey extract), current revenue receipt (Lagaan Rasid), online Jamabandi printout from biharbhumi.bihar.gov.in, Land Possession Certificate (LPC), non-encumbrance certificate, and approved layout drawings.
        </p>
        <p className="text-xs text-white/60">
          Read our guide on{' '}
          <Link to="/land-buying-checklist-bihar" className="text-gold underline hover:text-white">
            essential property documents in Bihar
          </Link>{' '}
          to understand the legal role of each record before executing an agreement.
        </p>
      </div>
    )
  },
  {
    id: 6,
    category: 'investment',
    question: "How can I enquire about an available residential plot?",
    answer: (
      <div className="space-y-2">
        <p>
          To enquire about pricing, layout plans, or current plot availability, fill out our quick enquiry form, call our customer helpline at +91 6287220163, or connect via WhatsApp at +91 7979098902. Our property advisors will share current brochures, site photos, and layout maps.
        </p>
        <p className="text-xs text-white/60">
          Inquiries are handled directly by our Patna office with transparent communication and no broker intermediaries.
        </p>
      </div>
    )
  },
  {
    id: 7,
    category: 'legal',
    question: "What information should I confirm before visiting a property?",
    answer: (
      <div className="space-y-2">
        <p>
          Before visiting, confirm the exact Mauza, Thana number, and Khesra/plot numbers, the road approach width (such as 30ft or 40ft internal roads), whether the plot has clear boundary cornerstones, local flood and drainage conditions, and proximity to key transit routes like the Danapur-Bihta elevated expressway.
        </p>
        <p className="text-xs text-white/60">
          Our advisors provide pre-visit location maps and road access details so you can prepare your questions beforehand.
        </p>
      </div>
    )
  },
  {
    id: 8,
    category: 'location',
    question: "What connectivity does Shivala More offer to Saguna More and Danapur?",
    answer: (
      <div className="space-y-2">
        <p>
          Shivala More is located approximately 7 to 10 minutes from Saguna More via the Danapur-Bihta elevated highway corridor. This arterial route provides rapid connectivity between Danapur Railway Station, AIIMS Patna, Patna Airport, and the educational hub at Bihta (IIT and NIT campuses).
        </p>
        <p className="text-xs text-white/60">
          Learn more about projects in this corridor on our{' '}
          <Link to="/plots-in-shivala-patna" className="text-gold underline hover:text-white">
            Embassy Capital Shivala More
          </Link>{' '}
          overview.
        </p>
      </div>
    )
  },
  {
    id: 9,
    category: 'financing',
    question: "Are bank loans available for purchasing residential plots in Patna?",
    answer: (
      <div className="space-y-2">
        <p>
          Yes, residential plot purchase and composite land-plus-construction loans are available for title-verified properties through major public and private banks. Approval depends on clear title documentation, mutation records, and individual borrower creditworthiness and income verification under the lending bank’s underwriting criteria.
        </p>
        <p className="text-xs text-white/60">
          We assist prospective buyers by assembling required title paperwork for submission to lending institutions.
        </p>
      </div>
    )
  },
  {
    id: 10,
    category: 'location',
    question: "What amenities are included in gated plotted developments in Bihta and Patna?",
    answer: (
      <div className="space-y-2">
        <p>
          Plotted developments in our portfolio feature secure perimeter boundary walls, 30ft to 40ft wide internal concrete roads, underground drainage systems, dedicated electricity transformer connections, street lighting provisions, entry gatehouse security, and demarcated open spaces for community parks and plantation.
        </p>
        <p className="text-xs text-white/60">
          Specific amenity details vary by project; layout drawings and specifications are available in our downloadable project brochures.
        </p>
      </div>
    )
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFaqs = useMemo(() => {
    if (selectedCategory === 'all') return faqData;
    return faqData.filter(faq => faq.category === selectedCategory);
  }, [selectedCategory]);

  const toggleOption = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden" aria-label="Frequently Asked Questions">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gold/15 text-gold border border-gold/30 mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Clarity & Transparency
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Frequently Asked <span className="text-gold italic font-normal">Questions</span>
          </h2>
          <p className="text-white/70 text-sm md:text-base mt-3 font-light leading-relaxed">
            Everything you need to know about buying verified residential & commercial plots, legal verification, and high-ROI investments in Patna, Bihar.
          </p>
        </div>

        {/* Centered Category Filter Pills */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'legal', label: 'Legal & RERA' },
              { id: 'investment', label: 'Investment & ROI' },
              { id: 'location', label: 'Locations & Plots' },
              { id: 'financing', label: 'Loans & EMI' },
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedCategory(tab.id);
                    setOpenIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-gold text-black shadow-lg shadow-gold/20 scale-105'
                      : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIndex === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white/5 border-gold/50 shadow-[0_0_25px_rgba(197,168,128,0.15)]' 
                      : 'bg-[#0f172a]/80 border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleOption(faq.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-gold text-black' : 'bg-white/5 text-gold border border-white/10 group-hover:border-gold/40'
                      }`}>
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h3 className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                        isOpen ? 'text-gold' : 'text-white group-hover:text-gold'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                      isOpen ? 'bg-gold/20 text-gold rotate-180' : 'bg-white/5 text-white/50 group-hover:text-white'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-white/80 leading-relaxed font-light border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-white/60">No questions matched your search term.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs text-gold font-bold underline"
              >
                Reset filter
              </button>
            </div>
          )}
        </div>

        {/* Bottom Help CTA Box */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-gold/10 via-[#0f172a] to-gold/10 border border-gold/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 border border-gold/40">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight">
                Have a specific question about property registration or plot rates?
              </h4>
              <p className="text-xs text-white/60 font-light mt-0.5">
                Our senior legal & investment advisors are available 24/7 to assist you.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
            <a
              href="tel:+916287220163"
              className="px-6 py-3.5 rounded-lg bg-gold hover:opacity-90 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
            >
              <PhoneCall className="w-4 h-4" /> Call Advisor
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
