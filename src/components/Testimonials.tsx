import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Amit Sharma',
    role: 'CEO, TechVentures',
    image: '/c1.jpeg',
    content: 'Very smooth and trustworthy experience throughout the land purchase process. Highly satisfied with the service and support provided.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sneha Patel',
    role: 'Investment Banker',
    image: '/c2.jpeg',
    content: 'Excellent assistance from start to finish. The land purchase process was transparent, quick, and hassle-free.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rohan Kapoor',
    role: 'Residents',
    image: '/c3.jpeg',
    content: 'We moved into Marine Park, Anandpur last year, and our family loves it. The security, the expansive green spaces, and the incredible community vibe make it the perfect home.',
    rating: 5,
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActive((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActive((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 glass p-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="accent-gold font-bold uppercase tracking-widest text-sm mb-3">Client Stories</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Hear From Our <span className="italic opacity-80">Residents</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-8 md:p-14 relative border border-white/10 rounded-sm">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-white/5 -z-10" />
            
            <div className="min-h-[220px] flex flex-col justify-center">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current mx-1" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-white italic font-light leading-relaxed mb-8">
                  "{testimonials[active].content}"
                </p>
                <div className="flex items-center justify-center flex-col">
                  <img 
                    src={testimonials[active].image} 
                    alt={testimonials[active].name} 
                    width="64"
                    height="64"
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold mb-3"
                  />
                  <h4 className="font-bold text-white uppercase tracking-wider">{testimonials[active].name}</h4>
                  <p className="text-xs text-white/60 uppercase tracking-widest mt-1 font-bold">{testimonials[active].role}</p>
                </div>
              </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center mt-10 space-x-6">
              <button 
                onClick={handlePrev} 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-gold transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      active === idx ? 'bg-gold' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext} 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-gold transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
