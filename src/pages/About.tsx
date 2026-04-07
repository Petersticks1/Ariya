import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const About = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/slider/2.jpg" alt="About Ariya" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif text-white uppercase tracking-[4px]"
          >
            Our Story
          </motion.h1>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-primary/40"></div>
            <span className="text-primary tracking-[6px] uppercase font-bold text-sm text-[10px] md:text-sm">Excellence in Hospitality</span>
            <div className="h-[1px] w-12 bg-primary/40"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h6 className="text-primary tracking-[4px] uppercase font-bold mb-6">About ARIYA</h6>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">WHERE TRADITION MEETS <br /><span className="text-primary italic">MODERN LUXURY</span></h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                ARIYA was born from a vision to create a space where every guest feels like royalty. Our journey began with a single branch, and through dedication to premium service and attention to detail, we have grown into a multi-sensory lifestyle destination.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Whether it's the culinary delights of our kitchen, the rejuvenation at our salon, or the vibrant energy of our lounge, we strive to elevate every moment of your day.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-primary/20">
                <img src="/img/slider/1.jpg" alt="Ariya Interior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-2xl -z-10 backdrop-blur-3xl border border-primary/20 hidden md:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h6 className="text-primary tracking-[4px] uppercase font-bold mb-4">Our Core Values</h6>
            <h2 className="text-4xl md:text-6xl font-serif text-white uppercase">The Pillars of ARIYA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "lucide:heart", title: "Passion", desc: "We are deeply passionate about creating unforgettable experiences for every guest." },
              { icon: "lucide:target", title: "Precision", desc: "Attention to detail is the hallmark of our service, from the kitchen to the car wash." },
              { icon: "lucide:award", title: "Excellence", desc: "We never settle for good; we strive for extraordinary in everything we do." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-background-dark p-12 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-background transition-all">
                  <Icon icon={value.icon} width="32" height="32" />
                </div>
                <h3 className="text-2xl font-serif text-white uppercase tracking-[1px] mb-4">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Quote */}
      <section className="py-32 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Icon icon="lucide:quote" className="mx-auto text-background/20 mb-12" width="80" height="80" />
          <h2 className="text-3xl md:text-5xl font-serif leading-relaxed text-background">
            "Our mission is to redefine hospitality in Nigeria by blending luxury with authenticity, ensuring each visit is as unique as our guests."
          </h2>
          <p className="mt-12 text-background/80 uppercase tracking-[4px] font-bold text-sm">— The ARIYA Leadership Team</p>
        </div>
      </section>
    </div>
  );
};

export default About;
