import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "Is it a good time to buy land in Patna?",
    answer: "Yes, investing in land in Patna is highly profitable right now. The city is experiencing rapid infrastructure development, new highways, and metro projects, all of which lead to excellent capital appreciation for early land investors."
  },
  {
    question: "What types of plots are available in Patna through Jameenwale?",
    answer: "Jameenwale offers a wide range of plots including residential plots, commercial properties, and gated community land. We have prime locations available in Danapur, Bihta, AIIMS Patna, and Patliputra Colony."
  },
  {
    question: "Are the plots RERA and DTCP approved?",
    answer: "Absolutely. We prioritize security and transparency in every transaction. Many of our premium plots are fully RERA registered and DTCP approved, ensuring they are ready for immediate construction with clear legal titles."
  },
  {
    question: "Do you arrange home loans for plot purchases?",
    answer: "Yes, we partner with leading national and private banks to help you secure easy financing and plot loans at competitive interest rates."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOption = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900/50" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Frequently Asked <span className="text-gold font-medium">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need to know about buying premium real estate and plots in Patna, Bihar.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className={`border border-white/10 p-6 transition-all duration-300 ${
                openIndex === index ? 'bg-white/5 border-gold/30' : 'hover:border-white/20'
              }`}
              itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
            >
              <button 
                onClick={() => toggleOption(index)}
                className="w-full flex items-center justify-between text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-xl font-medium pr-4" itemProp="name">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
                itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
              >
                <p className="text-slate-300 leading-relaxed" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
