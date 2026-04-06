import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PackageCard = ({ item, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative p-10 rounded-2xl border transition-all duration-500 overflow-hidden group h-full flex flex-col ${
        index === 1 ? 'border-primary bg-primary/5 shadow-2x-primary' : 'border-primary/10 bg-white/5 hover:border-primary/30'
      }`}
    >
      {/* Featured Badge */}
      {index === 1 && (
        <div className="absolute top-0 right-0 bg-primary text-background px-8 py-2 rounded-bl-2xl text-[10px] uppercase tracking-[3px] font-bold shadow-xl">
          Most Popular
        </div>
      )}

      <div className="relative z-10 mb-12">
        <h3 className="text-2xl font-serif text-white uppercase tracking-[2px] mb-4">{item.name}</h3>
        <div className="flex items-baseline gap-2 mb-8 group-hover:text-primary transition-colors">
          <span className="text-4xl md:text-5xl font-serif text-primary">₦{item.price}</span>
          <span className="text-text-muted text-xs uppercase tracking-[2px]">/ month</span>
        </div>
        
        <div className="space-y-4">
          {item.perks.map((perk, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="text-primary mt-1 flex-shrink-0" size={16} />
              <p className="text-text-muted text-sm leading-relaxed">{perk}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => onSelect(item.name)}
        className="mt-auto primary w-full flex items-center justify-center gap-3 py-5 text-sm shadow-xl active:scale-95 transition-transform"
      >
        Select Package <ArrowRight size={18} />
      </button>

      {/* Subtle Background Accent */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors pointer-events-none"></div>
    </motion.div>
  );
};

export default PackageCard;
