import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/services';
import * as Icons from 'lucide-react';

const heroImages = [
  '/img/slider/1.jpg',
  '/img/slider/2.jpg',
  '/img/slider/3.jpg',
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImage}
              src={heroImages[currentImage]} 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
              alt="ARIYA Resort" 
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl opacity-100">
          <motion.h6 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary font-bold uppercase tracking-[6px] mb-8"
          >
            Welcome to ARIYA
          </motion.h6>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif mb-12 text-white leading-[1.1]"
          >
            Elevating Every <br /><span className="text-primary">Experience.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          >
            <Link to="/kitchen" className="primary">Explore Menu</Link>
            <Link to="/gym" className="secondary">Join the Gym</Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-text-muted animate-bounce opacity-40">
          <span className="text-[10px] uppercase tracking-[4px]">Scroll</span>
          <div className="w-[1px] h-10 bg-primary/40"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Our Services</h6>
            <h2 className="text-4xl md:text-6xl text-text-dark font-serif uppercase tracking-[1px] leading-tight">Mastering Premium <br />Hospitality & Lifestyle</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = (Icons as any)[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={service.path}
                    className="group relative block bg-background p-10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 card-gold-accent"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-8 inline-block p-4 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                        {Icon ? <Icon size={32} strokeWidth={1.5} /> : <div className="w-8 h-8 bg-gray-500 rounded" />}
                      </div>
                      <h3 className="text-2xl font-serif uppercase tracking-[2px] mb-4 text-white group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-text-muted mb-8 group-hover:text-text transition-colors leading-relaxed">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[2px] font-bold">
                        Explore <Icons.ArrowRight size={14} />
                      </span>
                    </div>
                    
                    <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-xl transition-all"></div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote / Intro */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <Icons.Quote className="mx-auto text-primary/20 mb-12" size={80} />
          <h2 className="text-3xl md:text-5xl font-serif leading-relaxed text-white/90">
            "ARIYA is not just a destination; <br />it's a celebration of refinement, wellness, and <br /><span className="text-primary italic">extraordinary service."</span>
          </h2>
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-primary/40"></div>
            <span className="text-primary tracking-[6px] uppercase font-bold text-sm">The Ariya Promise</span>
            <div className="h-[1px] w-12 bg-primary/40"></div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <img src="/img/slider/3.jpg" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Promo Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/rooms/1.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h6 className="text-primary tracking-[4px] uppercase font-bold mb-8 text-sm">Experience the best</h6>
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-16 leading-tight uppercase">Ready to Book Your <br /><span className="text-primary">Ariya Moment?</span></h2>
          <Link to="/event-booking" className="primary text-lg px-12 py-5 shadow-2xl">Start Planning Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
