import { Map as MapIcon, Plane, ShoppingBag, GraduationCap, Building2, Fuel } from 'lucide-react';
import { motion } from 'motion/react';

export default function LocationAdvantage() {
  const points = [
    { name: 'International Airport', distance: '15 Mins', icon: Plane },
    { name: 'Luxury Shopping Mall', distance: '5 Mins', icon: ShoppingBag },
    { name: 'Premium Hospitals', distance: '8 Mins', icon: MapIcon },
    { name: 'International Schools', distance: '10 Mins', icon: GraduationCap },
    { name: 'Ghirni Amusement Park', distance: '10 Mins', icon: Building2 },
    { name: 'Petrol Pump', distance: '3 Mins', icon: Fuel },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">Connectivity</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Prime <span className="italic opacity-80">Location Advantage</span>
          </h2>
          <p className="mt-4 text-white/60 font-light text-lg">
            Nestled in the heart of the city's most coveted neighborhood, keeping you connected to everything that matters.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 glass max-w-5xl mx-auto overflow-hidden rounded-xl">
          
          <div className="w-full lg:w-1/2 bg-[#0f172a] min-h-[400px] lg:min-h-full relative overflow-hidden border-r border-white/10 p-0 group">
            <a href="https://maps.app.goo.gl/tWUKtzzQ6LW5C6a18" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label="Open Map in new tab"></a>
            {/* Google Map */}
            <div className="absolute inset-0 pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-in-out">
              <iframe 
                src="https://maps.google.com/maps?q=25.6090559,85.0620633&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '100%', filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
            {/* Pointer overlay */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(15,23,42,0.8)] z-10"></div>
          </div>

          <div className="w-full lg:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 tracking-tight">
              Close to Everything
            </h3>
            <div className="space-y-6">
              {points.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors border border-white/10">
                        <Icon className="w-5 h-5 text-white/60 group-hover:accent-gold transition-colors" />
                      </div>
                      <span className="font-semibold text-white/90">{point.name}</span>
                    </div>
                    <span className="text-xs font-bold text-white/40 tracking-wider uppercase">
                      {point.distance}
                    </span>
                  </motion.div>
                )
              })}
            </div>
            
            <motion.a 
              href="https://maps.app.goo.gl/tWUKtzzQ6LW5C6a18" 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-10 block w-full text-center py-4 bg-white/5 border border-white/10 text-white rounded-sm hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-xs font-bold"
            >
              Get Direction
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
