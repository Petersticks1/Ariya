import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { formatWhatsAppMessage } from '../utils/communication';

const fabrics = [
  { id: 1, name: 'Royal Gold Silk', category: 'Silk', pricePerYard: '₦15,000', availableYards: 45, image: '/img/news/1.jpg' },
  { id: 2, name: 'Premium Lace Motif', category: 'Lace', pricePerYard: '₦35,000', availableYards: 20, image: '/img/news/2.jpg' },
  { id: 3, name: 'Ariya Signature Woodin', category: 'Cotton', pricePerYard: '₦8,500', availableYards: 100, image: '/img/news/1.jpg' },
  { id: 4, name: 'Velvet Dream Deep Blue', category: 'Velvet', pricePerYard: '₦12,000', availableYards: 30, image: '/img/news/2.jpg' },
];

const Fabrics = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Silk', 'Lace', 'Cotton', 'Velvet', 'Ankara'];

  const filteredFabrics = activeCategory === 'All' 
    ? fabrics 
    : fabrics.filter(f => f.category === activeCategory);

  const handleRequest = (fabric) => {
    const url = formatWhatsAppMessage('Fabric Request', { 
      fabric: fabric.name, 
      category: fabric.category, 
      pricePerYard: fabric.pricePerYard,
      yardsDesired: 1
    });
    window.open(url, '_blank');
  };

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Ariya Fabrics</h6>
          <h1 className="text-4xl md:text-6xl font-serif text-text uppercase tracking-[1px] leading-tight mb-8">Exquisite Textiles & <br /><span className="text-primary italic">Timeless Patterns</span></h1>
          <p className="text-text-muted text-lg leading-relaxed mb-12">
            Explore our curated collection of premium African and International fabrics. From ceremonial lace to everyday cotton.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-[2px] transition-all border ${
                  activeCategory === cat ? 'bg-primary border-primary text-background font-bold' : 'border-primary/20 text-primary hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredFabrics.map((fabric, index) => (
            <motion.div
              key={fabric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group flex flex-col lg:flex-row bg-white/5 border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all card-gold-accent"
            >
              <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
                <img src={fabric.image} alt={fabric.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="lg:w-1/2 p-10 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase tracking-[2px] text-primary font-bold">{fabric.category}</span>
                  <span className="text-primary text-xs font-bold uppercase tracking-[1px] bg-primary/10 px-3 py-1 rounded-full">
                    {fabric.availableYards} Yards Available
                  </span>
                </div>
                <h3 className="text-3xl font-serif text-text uppercase tracking-[1px] mb-4 group-hover:text-primary transition-colors">{fabric.name}</h3>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-4xl font-serif text-text">{fabric.pricePerYard}</span>
                  <span className="text-text-muted text-[10px] uppercase tracking-[2px]">/ Yard</span>
                </div>
                <button 
                  onClick={() => handleRequest(fabric)}
                  className="mt-auto primary w-full flex items-center justify-center gap-3 py-5 text-sm"
                >
                  <Icon icon="lucide:message-square" width="18" height="18" /> Request via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fabrics;
