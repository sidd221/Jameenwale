import { motion, useInView } from 'motion/react';
import { Award, Building, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function CountUp({
  from = 1,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
}: CountUpProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    let lastVal = from;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutCubic(progress);
      const currentVal = Math.round(from + (to - from) * easedProgress);

      if (currentVal !== lastVal) {
        lastVal = currentVal;
        setCount(currentVal);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function AboutImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-slate-800/80 ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        width="800"
        height="600"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function About() {
  const stats = [
    { icon: Building, value: 25, suffix: '+', label: 'Projects Completed' },
    { icon: Users, value: 5000, suffix: '+', label: 'Happy Families' },
    { icon: Award, value: 15, suffix: '', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 glass p-6 sm:p-8 md:p-12">
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
                alt="JameenWale Verified Gated Community Plots in Patna Bihar" 
                className="rounded-sm shadow-xl aspect-[4/3]"
              />
            </div>
            <div className="absolute bottom-[-10%] left-0 w-3/5 z-20">
              {/* Secondary Overlapping Image */}
              <AboutImage 
                src="/h1.jpeg" 
                alt="Premium Residential Land Development by JameenWale in Patna"
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
              Crafting Legacy Through <br/> <span className="italic opacity-80">Exceptional Living</span>
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              For over 15 years, Jameenwale has been redefining modern land ownership across Bihar’s premier growth corridors. We specialize in verified, RERA-approved gated township plots in Patna, Bihta, and scenic residential plots in Rajgir. From registry-ready parcels to immediate mutation support, we deliver complete transparency and sustained capital appreciation.
            </p>
            <p className="text-white/80 mb-10 leading-relaxed">
              Whether you are planning to build your family home or seeking a high-return land investment, our developments offer secure residential plots with perimeter boundary walls, 24/7 CCTV surveillance, wide internal roads, and hassle-free bank financing.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, idx) => {
                return (
                  <div key={idx} className="flex flex-col items-start border-l border-white/10 pl-4 py-1">
                    <span className="text-3xl font-extrabold text-white mb-1 tracking-tight">
                      <CountUp from={1} to={stat.value} suffix={stat.suffix} duration={2} />
                    </span>
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
