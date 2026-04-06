import { Mail, Phone, MapPin, Globe, Share2, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Connect with us</h6>
          <h1 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-[1px] leading-tight mb-8">We're Here for <br /><span className="text-primary italic">Whatever You Need</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="flex gap-8 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-white uppercase tracking-[2px] mb-2">Our Location</h4>
                <p className="text-text-muted leading-relaxed">123 ARIYA Avenue, Victoria Island,<br />Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-white uppercase tracking-[2px] mb-2">Call Us</h4>
                <p className="text-text-muted">+234 813 908 4131</p>
                <p className="text-text-muted">+234 812 345 6789</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-white uppercase tracking-[2px] mb-2">Email Us</h4>
                <p className="text-text-muted font-bold text-primary">adebayopetergvmc68@gmail.com</p>
                <p className="text-text-muted">concierge@ariya.com</p>
              </div>
            </div>

            <div className="pt-12 border-t border-primary/20">
              <h4 className="text-sm font-serif text-white uppercase tracking-[4px] mb-8">Follow Our Journey</h4>
              <div className="flex gap-6">
                <a href="#" className="text-text-muted hover:text-primary transition-colors"><Globe size={24} /></a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors"><Share2 size={24} /></a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors"><Send size={24} /></a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-10 md:p-16 rounded-3xl border border-primary/10 relative overflow-hidden h-fit">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20"></div>
            <h3 className="text-3xl font-serif text-white uppercase mb-8">Send us a direct message</h3>
            <p className="text-text-muted mb-12 leading-relaxed">
              Have a specific question or request? The fastest way to reach us is through WhatsApp. Our concierge team is online 24/7.
            </p>
            <a href="https://wa.me/2348139084131" className="primary w-full flex items-center justify-center gap-4 py-5 shadow-2x-primary">
              <MessageSquare size={20} /> Chat with Concierge
            </a>
          </div>
        </div>

        <div className="mt-32 h-[500px] w-full rounded-3xl overflow-hidden bg-primary/10">
          {/* Placeholder for Google Maps or an illustration */}
          <div className="w-full h-full flex items-center justify-center">
             <MapPin className="text-primary/20" size={120} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
