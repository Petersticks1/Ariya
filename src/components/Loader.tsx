import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import logo from '../assets/logo.png';

const Loader = () => {
  const letters = ["A", "R", "I", "Y", "A"];
  
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    },
    exit: { 
      opacity: 0,
      y: -50,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1.1, 1],
          opacity: 1 
        }}
        transition={{ 
          scale: {
            duration: 1,
            times: [0, 0.6, 1],
            ease: "easeOut"
          },
          opacity: { duration: 0.5 }
        }}
        className="mb-8"
      >
        <motion.img 
          src={logo} 
          alt="ARIYA Logo" 
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="h-24 w-auto drop-shadow-[0_0_15px_rgba(184,151,42,0.3)]" 
        />
      </motion.div>

      <div className="flex gap-4">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={itemVars}
            className="text-4xl md:text-6xl font-serif font-bold text-primary tracking-[8px] drop-shadow-[0_0_10px_rgba(184,151,42,0.5)]"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
        className="h-[1px] bg-primary/30 mt-8"
      />
    </motion.div>
  );
};

export default Loader;
