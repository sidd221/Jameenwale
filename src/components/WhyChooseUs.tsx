import { Shield, Sparkles, TrendingUp, Handshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'RERA-Approved & Clear Titles',
      description: '100% legally verified freehold land with immediate registration, clear Khatiyan records, and complete mutation support.',
      icon: Shield
    },
    {
      title: 'Gated Township Infrastructure',
      description: 'Secured gated communities featuring solid perimeter walls, 30–40ft wide roads, underground drainage, and 24/7 CCTV security.',
      icon: Sparkles
    },
    {
      title: 'High Capital Appreciation',
      description: 'Strategically situated near expressways, educational hubs, and airport corridors for maximum return on investment.',
      icon: TrendingUp
    },
    {
      title: 'Hassle-Free Bank Loans & EMI',
      description: 'Direct tie-ups with leading banks (SBI, HDFC, ICICI) offering smooth loan approvals and flexible installment plans.',
      icon: Handshake
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 p-12 glass">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h4 className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">Our Advantage</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Why Choose <br/> <span className="italic opacity-80">jameenwale?</span>
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed max-w-lg font-light">
              We combine legal security, master-planned infrastructure, and strategic locations. Every Jameenwale project is designed with clear freehold titles, perimeter boundary walls, and modern amenities to protect and grow your wealth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:border-gold transition-colors">
                      <Icon className="w-6 h-6 accent-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{reason.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed max-w-xs">{reason.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl border border-white/10 bg-slate-800/80"
          >
            <img 
              src="/t.jpeg" 
              alt="JameenWale Gated Township Real Estate Corporate Office in Patna Bihar" 
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient card */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent p-8 pt-32">
              <p className="text-white font-serif italic text-2xl mb-2">
                "Where unparalleled luxury meets everyday comfort."
              </p>
              <p className="accent-gold mt-2 font-bold uppercase tracking-widest text-xs">The Director's Vision</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
