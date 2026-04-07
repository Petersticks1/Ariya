import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Gallery = () => {
  const images = Array.from({ length: 56 }, (_, i) => ({
    src: `/img/image${i + 1}.jpeg`,
    title: `Ariya Experience ${i + 1}`,
    category: 'Lifestyle'
  }));

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/slider/3.jpg" alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif text-white uppercase tracking-[4px]"
          >
            Gallery
          </motion.h1>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs md:text-sm">
            <div className="h-[1px] w-12 bg-primary/40"></div>
            <span className="text-primary tracking-[6px] uppercase font-bold">Capturing Moments at ARIYA</span>
            <div className="h-[1px] w-12 bg-primary/40"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[400px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl hover:border-primary/40 transition-all duration-700"
              >
                <img src={image.src} alt={image.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-10 flex flex-col justify-end transform opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-primary text-[10px] uppercase tracking-[4px] font-bold mb-4">{image.category}</span>
                  <h3 className="text-2xl font-serif text-white uppercase tracking-[2px] mb-6">{image.title}</h3>
                  <div className="h-[1px] w-12 bg-primary group-hover:w-24 transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center bg-white/5 backdrop-blur-2xl p-16 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-700"></div>
            <Icon icon="lucide:camera" width="64" height="64" className="mx-auto text-primary mb-8" />
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-[1px] mb-8 leading-tight">Follow Our Journey <br />on Instagram</h2>
            <p className="max-w-2xl mx-auto text-text-muted mb-12 text-lg">
              Get an insider look at life at ARIYA. Tag us #AriyaLife for a chance to be featured in our monthly guest story.
            </p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="primary px-12 py-5 text-lg shadow-[0_10px_40px_rgba(184,151,42,0.3)]">
              Follow Us <Icon icon="lucide:share-2" width="18" height="18" className="inline ml-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
