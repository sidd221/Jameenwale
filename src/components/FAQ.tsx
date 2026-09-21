import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: 'investment',
    question: "What is the process to buy a plot in a gated community in Patna, and what is the expected ROI?",
    answer: "To purchase a plot in a gated community in Patna through JameenWale, you can schedule a guided on-site visit, review verified title deeds, and complete registry. Patna's infrastructure boom—including the Bihta elevated corridor, Patna Metro, and AIIMS connectivity—delivers strong annual capital appreciation for early land buyers."
  },
  {
    id: 2,
    category: 'location',
    question: "What amenities are included in your gated community plots in Bihta, Patna?",
    answer: "Our Bihta projects (including IT Park opposite NIT Patna) feature 30–40ft wide internal concrete roads, underground drainage, electricity transformers, dedicated parks, society temple, and 24/7 security guards with CCTV."
  },
  {
    id: 3,
    category: 'legal',
    question: "Are your plots 100% verified and RERA approved?",
    answer: "Yes, all our projects are 100% verified and RERA-compliant. We guarantee crystal-clear freehold titles, immediate registered sale deeds (Kewala), certified Khatiyan & Jamabandi records, and fast Dakhil-Kharij (mutation) support with zero legal disputes."
  },
  {
    id: 4,
    category: 'location',
    question: "Do you offer residential plots for sale in Rajgir (Nalanda)?",
    answer: "Yes, our Seven Crown project in Silao, Rajgir offers scenic, eco-living residential plots. Situated along the Nalanda-Rajgir tourism corridor, it offers great connectivity, peaceful surroundings, and strong long-term appreciation."
  },
  {
    id: 5,
    category: 'legal',
    question: "Do your gated township plots in Patna come with perimeter boundary walls?",
    answer: "Absolutely. Every gated society plot developed by JameenWale comes with complete perimeter boundary walls, a dedicated security gatehouse, 24/7 CCTV surveillance, and clearly demarcated plot cornerstones ready for immediate construction."
  },
  {
    id: 6,
    category: 'location',
    question: "What are the location advantages of buying plots near Shivala More and Saguna More?",
    answer: "Our Embassy Capital project at Shivala More is just 7–10 minutes from Saguna More via the Danapur-Bihta elevated highway. It combines competitive land rates with fast access to AIIMS Patna, leading schools, and commercial shopping centers."
  },
  {
    id: 7,
    category: 'financing',
    question: "Can I get a home loan to buy a plot in Patna?",
    answer: "Yes, you can easily obtain a plot purchase and composite home construction loan for our properties in Patna. JameenWale is partnered with leading nationalized and private banks (including SBI, HDFC, ICICI, and Axis Bank) to provide seamless loan processing, legal title verification support, and quick disbursement with flexible EMI repayment plans."
  },
  {
    id: 8,
    category: 'investment',
    question: "Why should investors consider buying gated society plots in Rajgir?",
    answer: "Rajgir is Bihar’s premier eco-tourism and education hub with the international Nalanda University and nature safari. Investing in residential land in Rajgir offers high future resale value and strong long-term appreciation."
  },
  {
    id: 9,
    category: 'legal',
    question: "What legal documentation will I receive upon booking and registry?",
    answer: "You will receive a complete legal documentation kit: Registered Sale Deed (Kewala), certified Khatiyan & Jamabandi extracts, Land Possession Certificate (LPC) guidance, Dakhil-Kharij mutation receipt, and approved layout drawings."
  },
  {
    id: 10,
    category: 'investment',
    question: "How do I book a free site visit to inspect the plots in Patna?",
    answer: "We offer complimentary, guided physical site visits 7 days a week with pick-and-drop vehicle assistance. Click 'Book Site Visit', submit the quick inquiry form, or call our direct helpline at +91 6287220163 to schedule your visit."
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
                          <p>{faq.answer}</p>
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
