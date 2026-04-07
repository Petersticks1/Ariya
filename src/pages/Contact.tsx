import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { 
      q: "What are ARIYA's opening hours?", 
      a: "Our facilities (Lounge, Gym, Salon) are open daily from 8:00 AM to 10:00 PM. Our Concierge and Event booking services are available for 24/7 inquiries via WhatsApp." 
    },
    { 
      q: "How can I book the Event Centre?", 
      a: "You can start by filling the event booking form on our website. Alternatively, message us on WhatsApp for a direct consultation regarding dates, catering, and decor." 
    },
    { 
      q: "Are memberships transferable between branches?", 
      a: "Yes, our Gold-tier membership provides cross-access to multiple ARIYA services, including the Gym, Lounge VIP areas, and priority Salon bookings." 
    },
    { 
      q: "Do you offer corporate partnerships?", 
      a: "Absolutely. We offer tailored corporate packages for staff wellness (Gym), executive car wash services, and office catering." 
    }
  ];

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-32 pt-20">
          <div className="text-center mb-16">
            <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Common Questions</h6>
            <h2 className="text-4xl md:text-6xl font-serif text-text uppercase tracking-[1px] leading-tight mb-8">Frequently Asked <br /><span className="text-primary italic">Inquiries</span></h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">Quick answers to our most common guest inquiries to help you settle in faster.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${openFaq === index ? 'border-primary bg-primary/5' : 'border-primary/10 bg-white/5'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className="font-serif text-lg md:text-xl text-text uppercase tracking-[1px]">{faq.q}</span>
                  {openFaq === index ? <Icon icon="lucide:minus" className="text-primary" width="20" height="20" /> : <Icon icon="lucide:plus" className="text-primary" width="20" height="20" />}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-text-muted leading-relaxed text-lg border-t border-primary/5 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Connect Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto border-t border-primary/10 pt-32">
          <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Still have questions?</h6>
          <h2 className="text-4xl md:text-6xl font-serif text-text uppercase tracking-[1px] leading-tight mb-8">Connect with <br /><span className="text-primary italic">Our Team</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-12">
            <div className="flex gap-8 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                <Icon icon="lucide:map-pin" width="24" height="24" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-text uppercase tracking-[2px] mb-2">Our Locations</h4>
                <div className="space-y-4">
                  <p className="text-text-muted leading-relaxed">9, olabisi onabanjo way Tirimi behind OGTV Abeokuta Ogun State.</p>
                  <p className="text-text-muted leading-relaxed">Metropark park Estate, 9 olabisi onabanjo way Tirimi behind OGTV Abeokuta Ogun State.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                <Icon icon="lucide:phone" width="24" height="24" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-text uppercase tracking-[2px] mb-2">Call Us</h4>
                <p className="text-text-muted">07035168224</p>
                <p className="text-text-muted">09076021353</p>
                <p className="text-text-muted">08107419905</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                <Icon icon="lucide:mail" width="24" height="24" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-text uppercase tracking-[2px] mb-2">Email Us</h4>
                <p className="text-text-muted font-bold text-primary">ariyaeventhall@gmail.com</p>
              </div>
            </div>

            <div className="pt-12 border-t border-primary/20">
              <h4 className="text-sm font-serif text-text uppercase tracking-[4px] mb-8">Follow Our Journey</h4>
              <div className="flex gap-6">
                <a href="#" className="text-text-muted hover:text-primary transition-colors"><Icon icon="lucide:globe" width="24" height="24" /></a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors"><Icon icon="lucide:share-2" width="24" height="24" /></a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors"><Icon icon="lucide:send" width="24" height="24" /></a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-10 md:p-16 rounded-3xl border border-primary/10 relative overflow-hidden h-fit">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20"></div>
            <h3 className="text-3xl font-serif text-text uppercase mb-8">Send us a message</h3>
            <p className="text-text-muted mb-12 leading-relaxed">
              Have a specific question or request? The fastest way to reach us is through WhatsApp. Our concierge team is online 24/7.
            </p>
            <a href="https://wa.me/2347035168224" className="primary w-full flex items-center justify-center gap-4 py-5 shadow-2x-primary font-bold">
              <Icon icon="lucide:message-square" width="20" height="20" /> Chat with Concierge
            </a>
          </div>
        </div>

        <div className="mt-16 h-[400px] w-full rounded-3xl overflow-hidden bg-primary/10">
          <div className="w-full h-full flex items-center justify-center text-center p-8 bg-gradient-to-br from-primary/5 to-transparent">
             <div>
              <Icon icon="lucide:map-pin" className="text-primary/20 mx-auto mb-6" width="64" height="64" />
              <p className="text-text-muted uppercase tracking-[3px]">Explore our luxury estate at<br /><span className="text-white font-serif mt-2 block">Abeokuta, Ogun State</span></p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
