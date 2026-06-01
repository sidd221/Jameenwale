import { motion } from 'motion/react';
import { 
  ShieldCheck, Route, Waves, Droplets, 
  Zap, TreePine, Landmark, Cctv
} from 'lucide-react';

const amenities = [
  { icon: ShieldCheck, name: 'Gated Society' },
  { icon: Route, name: 'Black Pitch Road' },
  { icon: Waves, name: 'Drainage System' },
  { icon: Droplets, name: 'Water Supply' },
  { icon: Zap, name: 'Electricity' },
  { icon: TreePine, name: 'Park' },
  { icon: Landmark, name: 'Temple' },
  { icon: Cctv, name: 'CCTV Surveillance' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 glass p-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">Lifestyle Details</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Curated <span className="italic opacity-80">Amenities</span>
          </h2>
          <p className="mt-4 text-white/60 font-light text-lg">
            Experience a curated collection of world-class facilities designed to elevate your everyday living.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col items-center justify-center text-center rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-gold transition-colors">
                  <Icon className="w-7 h-7 accent-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm tracking-wide font-semibold uppercase text-white/90">{item.name}</h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
