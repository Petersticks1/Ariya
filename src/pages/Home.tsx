import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/services';
import { Icon } from '@iconify/react';
import heroVideo from '../assets/Ariya.mp4';

const heroTexts = [
  { main: "Elevating Every", highlight: "Experience." },
  { main: "Defining Modern", highlight: "Luxury." },
  { main: "Celebrating Every", highlight: "Moment." },
  { main: "Crafting Unique", highlight: "Memories." },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Lounge Regular",
    text: "The ambiance at Ariya is unmatched. Whether it's a quiet evening at the lounge or a workout session, every detail is considered.",
    image: "/img/testimonials/1.jpg"
  },
  {
    id: 2,
    name: "Ahmed Bello",
    role: "Event Planner",
    text: "The event center was the perfect choice for my client's gala. Top-tier facilities and highly professional staff perfectly matched our needs.",
    image: "/img/testimonials/2.jpg"
  },
  {
    id: 3,
    name: "Emeka Obi",
    role: "Fitness Member",
    text: "Best gym experience in the city. The personal trainers are knowledgeable and the equipment is state-of-the-art. Highly recommended!",
    image: "/img/testimonials/3.jpg"
  }
];

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
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
          <div className="h-[180px] sm:h-[240px] md:h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={textIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-8xl font-serif text-text leading-[1.1]"
              >
                {heroTexts[textIndex].main} <br />
                <span className="text-primary italic">{heroTexts[textIndex].highlight}</span>
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          >
            <Link to="/kitchen" className="primary">Explore Menu</Link>
            <Link to="/event-booking" className="secondary">Book an event</Link>
          </motion.div>
        </div>

      </section>

      {/* About Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-primary/20 relative z-10">
                <img src="/img/image4.jpeg" alt="Ariya Hospitality" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-2xl -z-0 backdrop-blur-3xl border border-primary/20 hidden md:block"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h6 className="text-primary tracking-[4px] uppercase font-bold mb-6 text-sm">About ARIYA</h6>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Elevating Modern <br /><span className="text-primary italic">Hospitality Standards</span></h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                ARIYA is a multi-specialty lifestyle destination dedicated to excellence. We've crafted a sanctuary where premium services across kitchen, lounge, fitness, and wellness converge to offer an unparalleled experience.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-12">
                Our commitment is simple: To provide a space where luxury is accessible and every service is executed with precision and passion.
              </p>
              <Link to="/about" className="secondary inline-flex items-center gap-3">
                Read Our Story <Icon icon="lucide:arrow-right" width="18" height="18" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <h6 className="text-[10px] md:text-[12px] uppercase tracking-[4px] text-primary mb-4 font-bold">Our Services</h6>
            <h2 className="text-3xl md:text-6xl text-text-dark font-serif uppercase tracking-[1px] leading-tight">Mastering Premium <br /><span className="text-primary italic">Hospitality & Lifestyle</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Link
                    to={service.path}
                    className="group relative flex flex-col h-full bg-background p-10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 card-gold-accent"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-8 inline-block p-4 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-background transition-colors self-start">
                        <Icon icon={service.icon} width="32" height="32" />
                      </div>
                      <h3 className="text-2xl font-serif uppercase tracking-[2px] mb-4 text-text group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-text-muted mb-8 group-hover:text-text transition-colors leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[2px] font-bold mt-auto">
                        Explore <Icon icon="lucide:arrow-right" width="14" height="14" />
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
          <Icon icon="lucide:quote" className="mx-auto text-primary/20 mb-12" width="80" height="80" />
          <h2 className="text-3xl md:text-5xl font-serif leading-relaxed text-text/90">
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

      {/* Testimonials */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Testimonials</h6>
              <h2 className="text-4xl md:text-6xl text-white font-serif uppercase tracking-[1px] leading-tight">What Our <br />Guests Say</h2>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon icon="lucide:star" key={star} width="20" height="20" className="text-primary" />
                ))}
              </div>
              <p className="text-text-muted mt-2 uppercase tracking-[2px] text-xs">Excellence Guaranteed</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl relative group hover:bg-white/10 transition-all duration-500"
              >
                <Icon icon="lucide:quote" className="text-primary/20 absolute top-8 right-8 group-hover:text-primary/40 transition-colors" width="40" height="40" />
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Icon icon="lucide:star" key={s} width="12" height="12" className="text-primary" />
                  ))}
                </div>
                <p className="text-text/80 text-lg leading-relaxed mb-10 italic font-light">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20 border border-primary/20">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" onError={(e) => {
                      (e.target as any).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=b8972a&color=fff`;
                    }} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif uppercase tracking-[1px] text-sm">{t.name}</h4>
                    <p className="text-primary text-[10px] uppercase tracking-[2px]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Gallery Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl text-left">
              <h6 className="text-[12px] uppercase tracking-[6px] text-primary mb-4 font-bold">Experience in Pictures</h6>
              <h2 className="text-4xl md:text-7xl text-white font-serif uppercase tracking-[1px] leading-tight">Featured <br /><span className="text-primary italic">Gallery</span></h2>
            </div>
            <p className="text-text-muted max-w-sm text-lg leading-relaxed ">
              Take a tour through our premium facilities, from the elite lounge and kitchen to our state-of-the-art fitness and wellness center.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[5, 4, 3, 1].map((num, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="h-[400px] rounded-[32px] overflow-hidden border border-white/10 group relative"
              >
                <img src={`/img/image${num}.jpeg`} alt={`Ariya Gallery ${num}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
                   <div className="flex flex-col gap-2">
                     <span className="text-primary tracking-[3px] uppercase font-bold text-[10px]">Lifestyle Moment</span>
                     <span className="text-white text-xl font-serif">ARIYA Experience</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-6 mb-8 md:mb-0">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background overflow-hidden bg-primary/20">
                    <img src={`/img/image${i + 10}.jpeg`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-text-muted text-sm tracking-[1px]">Explore our full gallery and see why over <span className="text-white font-bold">5,000+</span> guests trust ARIYA for their luxury lifestyle.</p>
            </div>
            <Link to="/gallery" className="secondary px-10 py-4 shadow-xl">Explore All Moments</Link>
          </div>
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
          <h2 className="text-3xl md:text-7xl font-serif text-text mb-16 leading-tight uppercase">Ready to Book Your <br /><span className="text-primary italic">Ariya Moment?</span></h2>
          <Link to="/event-booking" className="primary text-sm md:text-lg px-8 md:px-12 py-4 md:py-5 shadow-2xl">Start Planning Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
