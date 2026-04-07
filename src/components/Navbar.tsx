import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { services } from '../data/services';
import logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md py-3 shadow-lg border-b border-primary/10' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5 md:gap-2 group">
          <img src={logo} alt="ARIYA Logo" className="h-8 md:h-10 w-auto transition-transform group-hover:scale-110" />
          <span className="font-serif text-xl md:text-3xl tracking-[4px] md:tracking-[6px] uppercase text-primary font-bold">ARIYA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
          <NavLink to="/" className={({ isActive }) => `text-sm uppercase tracking-[2px] transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-text-muted'}`}>
            Home
          </NavLink>

          {/* Mega Menu Trigger */}
          <div 
            className="relative h-full"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className={`text-sm uppercase tracking-[2px] transition-colors flex items-center gap-1 h-20 ${isServicesOpen ? 'text-primary' : 'text-text-muted hover:text-primary'}`}>
              Services <Icon icon="lucide:chevron-down" width="14" height="14" className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Enhanced Dropdown Menu */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full right-0 pt-4 w-72"
                >
                  <div className="bg-gradient-to-br from-[#111] via-background to-black backdrop-blur-2xl border border-primary/30 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_20px_rgba(184,151,42,0.1)] overflow-hidden">
                    <div className="p-2 border-b border-white/5 bg-white/5">
                      <p className="text-[10px] uppercase tracking-[3px] text-primary font-bold px-4 py-1">Our Services</p>
                    </div>
                    <div className="p-2 max-h-[400px] overflow-y-auto custom-scrollbar">
                      {services.map((service) => {
                        return (
                          <Link 
                            key={service.id} 
                            to={service.path}
                            className="group flex items-center gap-4 px-4 py-3.5 rounded-xl text-[10px] uppercase tracking-[2px] text-text-muted hover:text-primary hover:bg-white/5 transition-all relative overflow-hidden"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                              <Icon icon={service.icon} width="14" height="14" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold">{service.name}</span>
                            </div>
                            
                            {/* Hover Indicator */}
                            <div className="absolute left-0 top-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/kitchen" className={({ isActive }) => `text-sm uppercase tracking-[2px] transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-text-muted'}`}>
            Menu
          </NavLink>
          
          <NavLink to="/gallery" className={({ isActive }) => `text-sm uppercase tracking-[2px] transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-text-muted'}`}>
            Gallery
          </NavLink>
          
          <NavLink to="/about" className={({ isActive }) => `text-sm uppercase tracking-[2px] transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-text-muted'}`}>
            About
          </NavLink>

          <Link to="/contact" className="bg-primary hover:bg-white text-background px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-[2px] transition-all duration-300 shadow-lg hover:-translate-y-0.5">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-primary p-2 transition-transform active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <Icon icon="lucide:x" width="28" height="28" /> : <Icon icon="lucide:menu" width="28" height="28" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="xl:hidden fixed inset-0 bg-background z-40 pt-24 pb-12 px-6 flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col gap-8 max-w-sm mx-auto w-full">
              <Link to="/" className="text-3xl font-serif uppercase tracking-[3px] text-white py-2 border-b border-primary/10">Home</Link>
              
              <div className="flex flex-col gap-6 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <span className="text-xs uppercase tracking-[4px] text-primary font-bold">Ariya Services</span>
                <div className="grid grid-cols-1 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      className="flex items-center gap-4 text-sm uppercase tracking-[2px] text-text-muted hover:text-primary transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary/40" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <Link to="/kitchen" className="text-3xl font-serif uppercase tracking-[3px] text-white py-2 border-b border-primary/10">Menu</Link>
                <Link to="/gallery" className="text-3xl font-serif uppercase tracking-[3px] text-white py-2 border-b border-primary/10">Gallery</Link>
                <Link to="/about" className="text-3xl font-serif uppercase tracking-[3px] text-white py-2 border-b border-primary/10">About</Link>
              </div>
              
              <Link to="/contact" className="primary text-center py-5 text-sm shadow-[0_10px_30px_rgba(184,151,42,0.2)]">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
