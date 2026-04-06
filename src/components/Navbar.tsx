import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { services } from '../data/services';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ARIYA Logo" className="h-10 md:h-12 w-auto" />
          <span className="font-serif text-xl md:text-2xl tracking-[4px] uppercase text-primary">ARIYA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {services.slice(0, 5).map((service) => (
              <NavLink
                key={service.id}
                to={service.path}
                className={({ isActive }) => 
                  `text-sm uppercase tracking-[2px] transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-text-muted'
                  }`
                }
              >
                {service.name}
              </NavLink>
            ))}
            <div className="relative group">
              <button className="text-sm uppercase tracking-[2px] text-text-muted group-hover:text-primary flex items-center gap-1">
                More
              </button>
              <div className="absolute top-full right-0 pt-4 w-56 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
                <div className="bg-background/95 backdrop-blur-md border border-primary/20 p-4 rounded-lg shadow-xl">
                {services.slice(5).map((service) => (
                  <Link 
                    key={service.id} 
                    to={service.path}
                    className="block py-2 text-sm uppercase tracking-[1px] text-text-muted hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
                </div>
              </div>
            </div>
          </div>
          <Link to="/contact" className="secondary px-6 py-2 border-primary/40">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-background z-40 transition-transform duration-500 pt-24 px-6 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="text-2xl font-serif uppercase tracking-[3px] text-text border-b border-primary/10 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {service.name}
            </Link>
          ))}
          <Link 
            to="/catering"
            className="primary text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Catering
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
