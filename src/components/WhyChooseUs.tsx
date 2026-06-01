import { Shield, Sparkles, TrendingUp, Handshake } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function WhyChooseUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const reasons = [
    {
      title: 'Trusted Developer',
      description: 'Over 15 years of excellence with a proven track record of delivering premium properties on time.',
      icon: Shield
    },
    {
      title: 'Modern Architecture',
      description: 'Award-winning design philosophy blending aesthetics, functionality, and sustainable building practices.',
      icon: Sparkles
    },
    {
      title: 'High ROI Potential',
      description: 'Strategically located projects ensuring high capital appreciation and rental yields for investors.',
      icon: TrendingUp
    },
    {
      title: 'Hassle-Free Financing',
      description: 'Exclusive partnerships with top banks ensuring seamless, quick, and easy home loan process.',
      icon: Handshake
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 p-12 glass">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h4 className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">Our Advantage</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Why Choose <br/> <span className="italic opacity-80">jameenwale?</span>
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed max-w-lg font-light">
              We define urban luxury. More than just buildings, our developments are statements of success. Whether you are looking for an ideal land investment in patna, residential land in Danapur, or premium plots near patna, jameenwale secures your legacy.
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
            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl border border-white/10"
          >
            {!isLoaded && (
               <div className="absolute inset-0 bg-white/10 animate-pulse z-10 flex items-center justify-center">
                 <div className="w-8 h-8 border-4 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
               </div>
            )}
            <img 
              src="/t.jpeg" 
              alt="Office View" 
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
              }`}
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
