import { motion } from 'motion/react';
import { Award, Building, Users } from 'lucide-react';
import { useState } from 'react';

function AboutImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-white/10 animate-pulse z-10 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        width="800"
        height="600"
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
      />
    </div>
  );
}

export default function About() {
  const stats = [
    { icon: Building, value: '25+', label: 'Projects Completed' },
    { icon: Users, value: '5,000+', label: 'Happy Families' },
    { icon: Award, value: '15', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 glass p-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Images */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 w-4/5 ml-auto">
              {/* Main Image */}
              <AboutImage 
                src="/h2.jpeg" 
                alt="Modern Architecture" 
                className="rounded-sm shadow-xl aspect-[4/3]"
              />
            </div>
            <div className="absolute bottom-[-10%] left-0 w-3/5 z-20">
              {/* Secondary Overlapping Image */}
              <AboutImage 
                src="/h1.jpeg" 
                alt="Luxury Interior"
                className="border-8 border-[#0f172a] rounded-sm shadow-2xl aspect-[4/3]"
              />
            </div>
            {/* Design Element */}
            <div className="absolute top-[-5%] left-[10%] w-32 h-32 border border-white/20 bg-white/5 backdrop-blur-sm z-0 rounded-full"></div>
          </motion.div>

          {/* Right: Text & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">About Us</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Crafting Legacy Through <br/> <span className="italic opacity-80">Exceptional Homes</span>
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              For over 15 years, Jameenwale has been redefining luxury real estate across prime locations. We don't just build homes; we craft bespoke properties and the most sought-after investment land in Bihar, including plots in Bihta Patna and residential land in Naubatpur tailored for the most discerning individuals.
            </p>
            <p className="text-white/80 mb-10 leading-relaxed">
              Our commitment to architectural brilliance, sustainable luxury, and unmatched amenities ensures that every property we develop stands as a landmark of prestige and comfort.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, idx) => {
                return (
                  <div key={idx} className="flex flex-col items-start border-l border-white/10 pl-4 py-1">
                    <span className="text-3xl font-extrabold text-white mb-1 tracking-tight">{stat.value}</span>
                    <span className="text-[10px] tracking-widest text-white/60 uppercase">{stat.label}</span>
                  </div>
                );
              })}
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
