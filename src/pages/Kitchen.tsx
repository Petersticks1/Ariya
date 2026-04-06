import { useState } from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '../data/menuItems';
import MenuCard from '../components/MenuCard';

const Kitchen = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Main Course', 'Starters', 'Snacks', 'Desserts'];

  const filteredItems = activeCategory === 'All' 
    ? menuItems.kitchen 
    : menuItems.kitchen.filter(item => item.category === activeCategory);

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Ariya Kitchen</h6>
            <h1 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-[1px] leading-tight">Gourmet African & <br /><span className="text-primary italic">Continental Dishes</span></h1>
            <p className="text-text-muted mt-8 text-lg leading-relaxed max-w-xl">
              Freshly prepared with the finest ingredients. Explore our diverse menu and pre-order your favorites via WhatsApp to skip the wait.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MenuCard item={item} serviceTitle="Kitchen" />
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-40 border border-dashed border-primary/20 rounded-2xl">
            <p className="text-text-muted uppercase tracking-[2px]">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kitchen;
