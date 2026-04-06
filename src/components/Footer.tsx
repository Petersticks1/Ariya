import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2, Send } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t border-primary/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="ARIYA Logo" className="h-10 w-auto" />
              <span className="font-serif text-2xl tracking-[4px] uppercase text-primary">ARIYA</span>
            </Link>
            <p className="text-text-muted mb-8 max-w-sm">
              Elevating every experience with premium hospitality, wellness, and lifestyle services in the heart of the city.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors text-primary">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors text-primary">
                <Share2 size={18} />
              </a>
              <a href="#" className="p-2 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors text-primary">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl uppercase tracking-[2px] text-text mb-6">Explore</h4>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/kitchen" className="text-text-muted hover:text-primary transition-colors">Kitchen</Link>
              <Link to="/lounge" className="text-text-muted hover:text-primary transition-colors">Lounge</Link>
              <Link to="/gym" className="text-text-muted hover:text-primary transition-colors">Gym</Link>
              <Link to="/salon" className="text-text-muted hover:text-primary transition-colors">Salon</Link>
              <Link to="/carwash" className="text-text-muted hover:text-primary transition-colors">Car Wash</Link>
              <Link to="/minimart" className="text-text-muted hover:text-primary transition-colors">Minimart</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl uppercase tracking-[2px] text-text mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <p className="text-text-muted">123 ARIYA Avenue, Victoria Island, Lagos, Nigeria</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <p className="text-text-muted">+234 813 908 4131</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <p className="text-text-muted">adebayopetergvmc68@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Mobile QR */}
          <div>
            <h4 className="font-serif text-xl uppercase tracking-[2px] text-text mb-6">Mobile Access</h4>
            <div className="flex flex-col items-center p-4 bg-white/5 border border-primary/10 rounded-xl">
              <QRCodeSVG 
                value={window.location.origin} 
                size={120} 
                bgColor="transparent" 
                fgColor="#B8972A"
                includeMargin={false}
              />
              <p className="text-[10px] uppercase tracking-[1px] text-primary mt-4 text-center">Scan to browse on mobile</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm text-center">
            © {new Date().getFullYear()} ARIYA WebApp. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs uppercase tracking-[1px] text-text-muted">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
