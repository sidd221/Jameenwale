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
    { icon: Building, value: 3, suffix: ' Key Townships', label: 'Patna, Bihta & Rajgir' },
    { icon: Users, value: 7, suffix: ' Days / Week', label: 'Guided Site Visits' },
    { icon: Award, value: 100, suffix: '%', label: 'Boundary Demarcated Plots' },
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
                src="/h2.webp" 
                alt="JameenWale planned residential plots and gated layout in Patna Bihar" 
                className="rounded-sm shadow-xl aspect-[4/3]"
              />
            </div>
            <div className="absolute bottom-[-10%] left-0 w-3/5 z-20">
              {/* Secondary Overlapping Image */}
              <AboutImage 
                src="/h1.webp" 
                alt="Residential plot development and boundary road infrastructure by JameenWale in Patna"
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
            <p className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">About JameenWale</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Planned Land Ownership with <br/> <span className="italic opacity-80">Legal Transparency</span>
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              JameenWale is an independent real estate consultancy focused on residential plots and planned gated land developments across Patna and Bihar. We assist homebuilders and investors in discovering title-checked residential land in key growth corridors, including Shivala More, Danapur, Bihta, and Rajgir.
            </p>
            <p className="text-white/80 mb-8 leading-relaxed">
              Our advisory practice prioritizes clear property diligence. We guide buyers through registered sale deeds (Kewala), Bihar Bhumi Jamabandi records, and Circle Office mutation procedures, while ensuring projects feature physical boundary walls, planned internal roads, and access to bank financing.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, idx) => {
                return (
                  <div key={idx} className="flex flex-col items-start border-l border-white/10 pl-4 py-1">
                    <span className="text-2xl font-extrabold text-white mb-1 tracking-tight">
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
