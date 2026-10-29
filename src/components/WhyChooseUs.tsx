import { Shield, Sparkles, TrendingUp, Handshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Title Diligence & Registered Deeds',
      description: 'Guidance through registered sale deeds (Kewala), Bihar Bhumi Khatiyan and Jamabandi records, and Circle Office mutation procedures.',
      icon: Shield
    },
    {
      title: 'Gated Township Infrastructure',
      description: 'Plotted societies planned with perimeter boundary walls, 30–40ft wide internal concrete roads, drainage, and entry gatehouse security.',
      icon: Sparkles
    },
    {
      title: 'High-Growth Transit Corridors',
      description: 'Strategic locations along the Danapur-Bihta elevated road, AIIMS Patna outer ring road, and Bihta educational zone.',
      icon: TrendingUp
    },
    {
      title: 'Bank Loan Eligibility',
      description: 'Support with legal document collation for plot purchase and construction loan applications through major nationalized and private banks.',
      icon: Handshake
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 p-6 sm:p-8 md:p-12 glass">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h4 className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">Our Approach</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Why Consult <br/> <span className="italic opacity-80">JameenWale?</span>
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed max-w-lg font-light">
              We bring transparency, structured layout planning, and location intelligence together. JameenWale helps buyers navigate revenue documentation, inspect on-site boundary demarcations, and select suitable residential plots in Patna and surrounding growth belts.
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
              src="/t.webp" 
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
