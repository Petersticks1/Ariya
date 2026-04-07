import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/menuItems';
import MenuCard from '../components/MenuCard';

const Lounge = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Drinks', 'Cocktails', 'Wines', 'Spirits'];

  const filteredItems = activeCategory === 'All' 
    ? menuItems.lounge 
    : menuItems.lounge.filter(item => item.category === activeCategory);

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Ariya Lounge</h6>
            <h1 className="text-4xl md:text-6xl font-serif text-text uppercase tracking-[1px] leading-tight">Elevated Ambience & <br /><span className="text-primary italic">Premium Drinks</span></h1>
            <p className="text-text-muted mt-8 text-lg leading-relaxed max-w-xl">
              Unwind in a sophisticated space designed for relaxation and premium social experiences. Perfect for VIP gatherings and quiet escapes.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-[2px] transition-all border ${
                  activeCategory === cat ? 'bg-primary border-primary text-background' : 'border-primary/20 text-primary hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MenuCard item={item} serviceTitle="Lounge" />
            </motion.div>
          ))}
        </div>

        {/* VIP Room CTA */}
        <div className="bg-primary p-12 md:p-20 rounded-3xl relative overflow-hidden text-center group">
          <div className="absolute inset-0 opacity-10 group-hover:scale-105 transition-transform duration-1000">
            <img src="/img/rooms/2.jpg" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-background mb-8 uppercase tracking-[1px]">Looking for more privacy?</h2>
            <p className="text-background/80 max-w-2xl mx-auto text-lg mb-12 uppercase tracking-[2px] font-bold">
              Book our exclusive VIP room for your private business meetings or social gatherings.
            </p>
            <Link to="/vip-booking" className="bg-background text-primary px-12 py-5 rounded-lg text-lg uppercase tracking-[3px] font-serif hover:bg-background/90 transition-colors shadow-2xl inline-block">
              Book VIP Room
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
