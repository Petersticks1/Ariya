import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, MessageSquare } from 'lucide-react';
import { formatWhatsAppMessage } from '../utils/communication';

const products = [
  { id: 1, name: 'Premium Groundnut Oil', category: 'Household', price: '₦12,500', image: '/img/news/1.jpg' },
  { id: 2, name: 'Imported Pasta (500g)', category: 'Foodstuff', price: '₦1,200', image: '/img/news/2.jpg' },
  { id: 3, name: 'Ariya Special Spices', category: 'Condiments', price: '₦2,500', image: '/img/news/1.jpg' },
  { id: 4, name: 'Pure Honey (1L)', category: 'Foodstuff', price: '₦4,000', image: '/img/news/2.jpg' },
];

const Minimart = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'Household', 'Foodstuff', 'Beverages', 'Personal Care'];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrder = (product) => {
    const url = formatWhatsAppMessage('Minimart Order', { 
      product: product.name, 
      price: product.price, 
      quantity: 1,
      deliveryOrPickup: 'Pickup'
    });
    window.open(url, '_blank');
  };

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Ariya Minimart</h6>
            <h1 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-[1px] leading-tight">Everyday Luxury <br /><span className="text-primary italic">At Your Convenience</span></h1>
          </div>
          
          <div className="w-full md:w-80 relative group">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 !mb-0"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={20} />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-[2px] transition-all border ${
                activeCategory === cat ? 'bg-primary border-primary text-background font-bold' : 'border-primary/20 text-primary hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all flex flex-col h-full card-gold-accent"
            >
               <div className="relative h-56 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-primary/90 text-background px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[1px] shadow-xl">
                    {product.category}
                  </div>
               </div>
               <div className="p-6 flex flex-col flex-grow">
                 <h3 className="text-lg font-serif text-white uppercase tracking-[1px] mb-4">{product.name}</h3>
                 <p className="text-primary font-bold text-2xl mb-8">{product.price}</p>
                 <button 
                  onClick={() => handleOrder(product)}
                  className="mt-auto secondary !py-3 !px-2 flex justify-center items-center gap-2 text-[10px]"
                 >
                   <MessageSquare size={14} /> Order via WhatsApp
                 </button>
               </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-40 border border-dashed border-primary/20 rounded-2xl">
            <ShoppingBag className="mx-auto text-primary/20 mb-8" size={64} />
            <p className="text-text-muted uppercase tracking-[2px]">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Minimart;
