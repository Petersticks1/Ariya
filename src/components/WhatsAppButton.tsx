import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const WhatsAppButton = () => {
  const WHATSAPP_NUMBER = "2347035168224";
  const message = "Hi ARIYA, I'd like to make an enquiry.";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      drag
      dragElastic={0.1}
      dragTransition={{ power: 0.2, timeConstant: 200 }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-text p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group touch-none"
      aria-label="Contact us on WhatsApp"
    >
      <Icon icon="simple-icons:whatsapp" width="32" height="32" className="text-white" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-background/90 text-text px-4 py-2 rounded-lg text-sm font-medium opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/20">
        Chat with ARIYA
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
