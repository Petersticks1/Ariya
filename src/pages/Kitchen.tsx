import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menuItems';
import { Icon } from '@iconify/react';

const Kitchen = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ['All', 'Goat Meat', 'Chicken', 'Turkey', 'Fish', 'Beef', 'Beans', 'Pepper Soup'];

  const filteredItems = activeCategory === 'All' 
    ? menuItems.kitchen 
    : menuItems.kitchen.filter((item: any) => item.category === activeCategory);

  const addToOrder = (item: any) => {
    const existing = selectedItems.find(i => i.id === item.id);
    if (existing) {
      setSelectedItems(selectedItems.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromOrder = (id: number) => {
    setSelectedItems(selectedItems.filter(i => i.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setSelectedItems(selectedItems.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const totalAmount = selectedItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);

  const sendWhatsAppOrder = () => {
    const orderDetails = selectedItems.map(i => `- ${i.name} x${i.quantity} (₦${(i.price * i.quantity).toLocaleString()})`).join('\n');
    const message = `*NEW FOOD ORDER - ARIYA KITCHEN*\n\n*Order Details:*\n${orderDetails}\n\n*Total Amount: ₦${totalAmount.toLocaleString()}*\n\nPlease confirm availability and payment details.`;
    const url = `https://wa.me/2347035168224?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <h6 className="text-primary font-bold uppercase tracking-[6px] mb-4">Ariya Kitchen</h6>
            <h1 className="text-4xl md:text-7xl font-serif text-white uppercase tracking-[2px] leading-tight mb-8">
              The <span className="text-primary italic">Kitchen Menu</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-xl">
              Authentic African & Continental dishes. Explore our diverse menu and select your favorites for immediate WhatsApp ordering.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[3px] transition-all border ${
                  activeCategory === cat 
                  ? 'bg-primary border-primary text-background font-bold shadow-[0_0_20px_rgba(184,151,42,0.3)]' 
                  : 'border-primary/20 text-primary hover:border-primary/50 bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Text-Based Menu List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
          {filteredItems.map((item: any, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-primary/5 hover:border-primary/30 transition-all hover:bg-primary/5"
            >
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-serif text-text uppercase tracking-[1px] group-hover:text-primary transition-colors">{item.name}</h3>
                  <div className="flex-grow border-b border-dashed border-primary/10 mx-2 hidden sm:block"></div>
                </div>
                <div className="flex items-center gap-4">
                   <span className="text-[10px] uppercase tracking-[2px] text-primary/60">{item.category}</span>
                   <span className="text-primary font-bold text-lg tracking-tighter">₦{item.price.toLocaleString()}</span>
                </div>
              </div>
              <button 
                onClick={() => addToOrder(item)}
                className="flex items-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-background px-4 py-2 rounded-xl transition-all duration-300 font-bold uppercase tracking-[1px] text-[10px] active:scale-95 ml-4"
              >
                <Icon icon="lucide:plus" width="14" height="14" /> Add to Order
              </button>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-40 border border-dashed border-primary/20 rounded-2xl bg-white/5">
            <p className="text-text-muted uppercase tracking-[4px]">No items found in this category.</p>
          </div>
        )}
      </div>

      {/* Floating Order Cart Button */}
      {selectedItems.length > 0 && (
        <motion.button
          drag
          dragElastic={0.1}
          dragTransition={{ power: 0.2, timeConstant: 200 }}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-10 right-10 z-[60] bg-primary text-background p-6 rounded-full shadow-[0_15px_40px_rgba(184,151,42,0.4)] flex items-center gap-4 hover:scale-110 transition-transform active:scale-95 touch-none"
        >
          <div className="relative pointer-events-none">
            <Icon icon="lucide:shopping-cart" width="28" height="28" />
            <span className="absolute -top-3 -right-3 bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-primary">
              {selectedItems.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>
          <span className="font-bold uppercase tracking-[2px] hidden md:block pointer-events-none">View Order</span>
        </motion.button>
      )}

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[70]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 w-full md:w-[450px] h-full bg-background border-l border-primary/20 z-[80] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8 border-b border-primary/10 pb-6">
                <div>
                  <h3 className="text-3xl font-serif text-white uppercase tracking-[1px]">Your Order</h3>
                  <p className="text-text-muted text-[10px] uppercase tracking-[2px] mt-1">ARIYA KITCHEN SELECTION</p>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="text-primary hover:text-white transition-colors p-2">
                  <Icon icon="lucide:x" width="32" height="32" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                {selectedItems.map((item) => (
                  <div key={item.id} className="flex flex-col gap-2 mb-6 p-5 bg-white/5 rounded-2xl border border-primary/5 transition-all hover:border-primary/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-white font-serif uppercase tracking-[1px] text-sm mb-1">{item.name}</h4>
                        <p className="text-primary font-bold text-lg">₦{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                      <button onClick={() => removeFromOrder(item.id)} className="text-red-500/30 hover:text-red-500 transition-colors p-1">
                        <Icon icon="lucide:trash-2" width="16" height="16" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4 bg-background/50 self-start rounded-lg p-1 border border-primary/10 mt-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-primary transition-colors"><Icon icon="lucide:minus" width="14" height="14" /></button>
                      <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-primary transition-colors"><Icon icon="lucide:plus" width="14" height="14" /></button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto border-t border-primary/20 pt-8">
                <div className="flex justify-between mb-8 items-end">
                  <span className="text-text-muted uppercase tracking-[2px] text-xs">Final Total</span>
                  <span className="text-4xl text-primary font-bold tracking-tighter">₦{totalAmount.toLocaleString()}</span>
                </div>
                <button 
                  onClick={sendWhatsAppOrder}
                  className="primary w-full py-5 text-[12px] flex items-center justify-center gap-4 shadow-[0_15px_40px_rgba(184,151,42,0.3)]"
                >
                  <Icon icon="lucide:message-square" width="20" height="20" /> SEND ORDER TO WHATSAPP
                </button>
                <p className="text-center text-[10px] text-text-muted uppercase tracking-[1px] mt-6 leading-relaxed">
                  Confirmation and payment link will be<br />sent to you on WhatsApp.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Kitchen;
