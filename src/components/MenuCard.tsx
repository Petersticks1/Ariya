import { ShoppingCart, MessageSquare } from 'lucide-react';
import { formatWhatsAppMessage } from '../utils/communication';

const MenuCard = ({ item, serviceTitle }: any) => {
  const handleOrder = () => {
    const messageData = {
      product: item.name,
      price: `₦${item.price.toLocaleString()}`,
      quantity: 1,
      customerName: '', // Placeholder
      deliveryOrPickup: 'Pickup',
      service: serviceTitle
    };
    const url = formatWhatsAppMessage(`FOOD ORDER - ${serviceTitle.toUpperCase()}`, messageData);
    window.open(url, '_blank');
  };

  return (
    <div className="group relative bg-white/5 border border-primary/10 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full card-gold-accent">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-background px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[1.5px] shadow-lg">
          {item.category}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-serif text-white uppercase tracking-[1px] mb-2">{item.name}</h3>
        <p className="text-primary font-bold text-2xl mb-8">₦{item.price.toLocaleString()}</p>
        <button 
          onClick={handleOrder}
          className="mt-auto flex items-center justify-center gap-2 primary w-full text-xs py-4 px-0"
        >
          <MessageSquare size={16} /> Pre-order on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
